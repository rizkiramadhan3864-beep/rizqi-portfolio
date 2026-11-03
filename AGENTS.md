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

- Palette: forest #183D32, sage #B7C7B0, ivory #F6F4EC, charcoal #252B27, terracotta #C77B57. Use `text-terracotta-ink` (#9B5132) for terracotta *text* on light backgrounds, for contrast.
- Serif (`font-serif`) is only for editorial headings. Mono (`font-mono`, `.eyebrow`) is for labels.
- Animate with `revealProps(delay)` only. It respects `prefers-reduced-motion`, and content stays visible without JS.
- Section headers use `<SectionHeader index label title />` with sequential § numbers.
