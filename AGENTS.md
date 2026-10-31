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

- Palette: forest #0E3A2F, forest-deep #08201C, sage #A9D4BC, sage-soft #E3F3E8, ivory #F3F8F4, paper #FFFFFF, charcoal #12231D, ink-soft #526660, rule #D6E5DB. Note: terracotta (#2BA3B5) and terracotta-ink (#12707F) are now water-teal, names kept for compatibility.
- Typography / Fonts:
  - Serif (`font-serif`): 'Fraunces', 'Georgia', 'Times New Roman', serif — editorial headings.
  - Sans (`font-sans`): 'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif — body copy and interface elements.
  - Mono (`font-mono`, `.eyebrow`): 'IBM Plex Mono', 'Courier New', monospace — technical metadata, timestamps, and labels.
- Type scale:
  - H1: clamp(2.75rem, 1.6rem + 5vw, 5.5rem)
  - H2: clamp(2rem, 1.4rem + 2.6vw, 3.25rem)
  - H3: clamp(1.35rem, 1.15rem + 0.8vw, 1.75rem)
  - Lead: clamp(1.25rem, 1.1rem + 0.8vw, 1.6rem)
  - Body: 1.0625rem / 17px, line-height 1.7
- Animate with `revealProps(delay)` only. It respects `prefers-reduced-motion`, and content stays visible without JS.
- Section headers use `<SectionHeader index label title />` with sequential § numbers.
