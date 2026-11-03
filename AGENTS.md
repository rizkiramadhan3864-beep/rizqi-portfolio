# AGENTS.md

## Project

Static single-page portfolio, "Fieldnotes | Rizqi Asy'ari Ramadhan". It uses Vite + React 19 + TypeScript + Tailwind CSS 4 and deploys to Netlify (`netlify.toml`: `npm run build` → `dist`). There is no backend.

## Layout

```
index.html                  # <head>: SEO/OG meta, JSON-LD Person, Google Fonts, adds `.js` class for reveal animations
src/main.tsx, src/App.tsx   # entry + section order
src/content/profile.ts      # ALL copy and data (experience, projects, skills, contact placeholders)
src/components/
  SiteHeader.tsx            # sticky nav, active-section observer, accessible mobile menu
  sections-intro.tsx        # Hero (portrait via Netlify Image CDN), About, Education
  sections-work.tsx         # Experience timeline, Project cards + native <dialog> case studies
  sections-close.tsx        # Skills, Research, Contact, Footer
  diagrams.tsx              # hand-drawn SVG schematics (hero field map + one per project)
  ui.tsx                    # SectionHeader, reveal hook/props, icons, Ruler divider
src/styles.css              # theme tokens (palette, fonts), graph-paper, ruler, buttons, motion + reduced-motion
public/cv/                  # the owner's CV PDF goes here (Rizqi-Asyari-Ramadhan-CV.pdf)
public/img/                 # the portrait goes here
```

## Content rules (important)

- Never invent achievements, metrics, employers, certifications, testimonials, links, or contact details. Only use facts the owner has given.
- The 16.91% irrigation figure must always be framed as a **potential** saving against an **estimated** conventional use, not a flowmeter measurement.
- No skill percentages or ratings. Do not claim the owner is "available for work" unless they confirm it.
- Contact values that start with `[` are treated as placeholders (`isPlaceholder`), and their buttons render disabled.

## Conventions

- Palette: forest #183D32, forest-deep #0F2920, sage #B9C9A8, sage-soft #DDE5D3, ivory #F4EFE4 (page background), paper #FBF8F1 (card surface), charcoal #1F2A24, ink-soft #3A463F, terracotta #B5694A (decorative only), terracotta-ink #9A4F32 (small text/labels on light for WCAG AA), rule #D4CFBF.
- Typography: Fraunces (`font-serif`, display headings), Inter (`font-sans`, body & UI), IBM Plex Mono (`font-mono`, metadata & labels).
- Fluid type scale: H1 `clamp(2.75rem, 2rem + 3.5vw, 5rem)`, H2 `clamp(2rem, 1.5rem + 2.2vw, 3.25rem)`, H3 `clamp(1.35rem, 1.15rem + 0.8vw, 1.75rem)`.
- Photos: `.photo-treatment` (grayscale with enhanced contrast, full color on hover).
- Animate with `revealProps(delay)` only. It respects `prefers-reduced-motion`, and content stays visible without JS.
