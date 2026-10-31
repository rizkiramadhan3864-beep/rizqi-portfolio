# Fieldnotes | Rizqi Asy'ari Ramadhan

A single-page personal portfolio for Rizqi Asy'ari Ramadhan, an Agricultural Engineering graduate from Universitas Gadjah Mada. It is aimed at roles in plantation management, palm oil agronomy, agricultural operations, smart agriculture, and agricultural technology.

The visual identity, called "Fieldnotes", borrows from a surveyor's field notebook: graph-paper texture, field-map contour lines, ruler-tick dividers, mono-spaced figure labels, and an editorial serif paired with a clean grotesque sans. Project visuals are hand-built SVG schematics rather than stock photos.

## Sections

Home · About · Education · Experience · Featured Projects (with case-study dialogs) · Skills · Research & Presentation · Contact · Footer

## Tech

- React 19 + TypeScript, bundled with Vite (static output, no server needed)
- Tailwind CSS 4, with theme tokens in `src/styles.css`
- Google Fonts: Newsreader (serif), Hanken Grotesk (sans), IBM Plex Mono
- Netlify hosting; portrait served through the Netlify Image CDN

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
# or, with Netlify emulation (needed for the Image CDN):
netlify dev
```

## Things to fill in

All content lives in `src/content/profile.ts`.

1. **CV**: add your PDF as `public/cv/Rizqi-Asyari-Ramadhan-CV.pdf`. Every "Download CV" button points to it.
2. **Email and LinkedIn**: replace the `[INSERT …]` placeholders in `profile`. The contact buttons stay disabled until real values are set.
3. **Portrait**: put a photo in `public/img/` (for example `portrait.jpg`, ideally 4:5 portrait) and set `profile.portrait = '/img/portrait.jpg'`.
4. **Project photos (optional)**: the project cards currently show schematic diagrams. Genuine field documentation can be added later.
