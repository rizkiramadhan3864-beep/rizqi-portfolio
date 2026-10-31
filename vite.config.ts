import { existsSync, readdirSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { profile } from './src/content/profile.ts'

/**
 * Lists every file in public/ at build time (as site paths, e.g. '/cv/file.pdf'), so the
 * UI can skip links and images whose files have not been added yet instead of rendering 404s.
 * In dev, restart the server after adding files.
 */
function listPublicFiles(dir = 'public'): string[] {
  if (!existsSync(dir)) return []
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) return listPublicFiles(full)
    if (name.startsWith('.')) return []
    return ['/' + relative('public', full).split(sep).join('/')]
  })
}

const publicFiles = listPublicFiles()
const siteUrl = (process.env.URL || profile.siteUrl).replace(/\/$/, '')

/** Fills canonical / Open Graph URLs in index.html. Uses the portrait when present, else /og-image.png. */
function socialMeta(): Plugin {
  const portrait = profile.portrait && publicFiles.includes(profile.portrait) ? profile.portrait : null
  const ogImage = portrait
    ? `${siteUrl}/.netlify/images?url=${encodeURIComponent(portrait)}&w=1200&h=630&fit=cover&fm=jpg`
    : `${siteUrl}/og-image.png`
  return {
    name: 'social-meta',
    transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl).replaceAll('__OG_IMAGE__', ogImage),
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), socialMeta()],
  define: {
    __PUBLIC_FILES__: JSON.stringify(publicFiles),
  },
})
