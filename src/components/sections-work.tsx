import { useRef, useState } from 'react'
import { experiences, profile, projects, type Partner, type Project, type ProjectActivity, type ProjectImage } from '../content/profile'
import { ArrowIcon, handleImageFallback, revealProps } from './ui'

/** Three tilted, overlapping photo frames on a soft green board, like a pinned collage. */
function ExperienceCollage({ photos, label }: { photos: string[]; label: string }) {
  const frames = [
    'left-[4%] top-[17%] w-[54%] rotate-[-6deg] z-20',
    'right-[4%] top-[5%] w-[50%] rotate-[2deg] z-10',
    'left-[22%] bottom-[4%] w-[52%] rotate-[3deg] z-30',
  ]

  return (
    <div
      className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-sage-soft"
      role="group"
      aria-label={`Documentation: ${label}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className="absolute left-[20%] top-[3%] w-12 rotate-[18deg] fill-current text-forest/20"
      >
        <path d="M0 40C0 15 15 2 40 0 38 25 25 40 0 40Z" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className="absolute bottom-[14%] right-[6%] w-16 rotate-[-25deg] fill-current text-forest/20"
      >
        <path d="M0 40C0 15 15 2 40 0 38 25 25 40 0 40Z" />
      </svg>

      {frames.map((position, i) => (
        <div
          key={position}
          className={`absolute rounded-xs bg-white p-[3%] shadow-[0_10px_24px_-10px_rgb(0_0_0/0.35)] ${position}`}
        >
          <div className="aspect-square overflow-hidden bg-ivory">
            {photos[i] && (
              <img
                src={photos[i]}
                alt={`${label} documentation ${i + 1}`}
                loading="lazy"
                className="photo-treatment h-full w-full object-cover"
                onError={(event) => {
                  handleImageFallback(event, () => {
                    event.currentTarget.style.visibility = 'hidden'
                  })
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mx-auto max-w-3xl text-center" {...revealProps()}>
          <h2
            id="experience-title"
            className="font-serif text-[clamp(2rem,1.5rem+2.2vw,3.25rem)] leading-[1.08] tracking-[-0.015em] text-forest"
          >
            Experience
          </h2>
        </header>

        <ol className="mt-12 lg:mt-14">
          {experiences.map((exp, i) => (
            <li
              key={exp.role + exp.period}
              className="border-t border-rule py-12 first:border-t-0 first:pt-0 last:pb-0"
              {...revealProps(i * 40)}
            >
              <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
                  <ExperienceCollage photos={exp.photos ?? []} label={exp.role} />
                </div>

                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-mono text-[0.8125rem] text-ink-soft">{exp.period}</p>
                    {exp.current && (
                      <p className="inline-flex items-center gap-1.5 rounded-full bg-sage-soft px-2.5 py-1 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-forest">
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-forest" />
                        Current role
                      </p>
                    )}
                  </div>

                  <h3 className="mt-3 font-serif text-[clamp(1.4rem,1.2rem+0.8vw,1.85rem)] leading-tight text-forest">{exp.role}</h3>
                  <p className="mt-1.5 font-medium text-charcoal">{exp.organization}</p>

                  <ul className="mt-5 space-y-2.5 max-w-[65ch]">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-relaxed text-ink-soft text-base">
                        <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-terracotta" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <p className="eyebrow text-terracotta-ink">Skills gained</p>
                    <ul className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                      {(exp.skills ?? []).map((skill) => (
                        <li
                          key={skill}
                          className="rounded-xl border border-forest/15 bg-paper px-3.5 py-2.5 text-xs sm:text-sm font-semibold leading-snug text-forest shadow-xs"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}


/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

function PartnerEmblem({ name }: { name: string }) {
  const lower = name.toLowerCase()

  if (lower.includes('gadjah mada') || lower.includes('ugm')) {
    // Academic crest (similar to UGM circular floral mandala)
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10 sm:h-12 sm:w-12 text-[#1E4D6B]" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="24" cy="24" r="21" strokeWidth="1.2" strokeDasharray="3 2" />
        <circle cx="24" cy="24" r="17" strokeWidth="1.2" />
        <circle cx="24" cy="24" r="9" strokeWidth="1.4" />
        <circle cx="24" cy="24" r="4" fill="currentColor" fillOpacity="0.25" />
        {[0, 72, 144, 216, 288].map((deg) => (
          <path
            key={deg}
            d="M 24 7 C 27 12, 27 17, 24 20 C 21 17, 21 12, 24 7 Z"
            transform={`rotate(${deg} 24 24)`}
            fill="currentColor"
            fillOpacity="0.18"
          />
        ))}
      </svg>
    )
  }

  if (lower.includes('smart') || lower.includes('iot') || lower.includes('tech')) {
    // Tech/smart branching nodes (cyan/emerald icon)
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10 sm:h-12 sm:w-12 text-[#0E8A85]" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="6" width="36" height="36" rx="10" fill="#0E8A85" fillOpacity="0.14" stroke="none" />
        <circle cx="24" cy="36" r="3.5" fill="currentColor" />
        <circle cx="15" cy="18" r="3" fill="currentColor" />
        <circle cx="33" cy="18" r="3" fill="currentColor" />
        <circle cx="24" cy="12" r="3.5" fill="currentColor" />
        <path d="M 24 33 V 24 M 24 24 L 17 19 M 24 24 L 31 19 M 24 24 V 15" strokeLinecap="round" />
      </svg>
    )
  }

  if (lower.includes('kwt') || lower.includes('teratai') || lower.includes('community')) {
    // Community / botanical shield emblem
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10 sm:h-12 sm:w-12 text-[#2D6A4F]" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="24,6 40,15 35,38 24,44 13,38 8,15" fill="#2D6A4F" fillOpacity="0.15" strokeWidth="1.6" />
        <circle cx="24" cy="24" r="8" strokeWidth="1.2" />
        <path d="M 24 16 C 26 21, 26 27, 24 32 C 22 27, 22 21, 24 16 Z" fill="currentColor" fillOpacity="0.3" />
        <path d="M 16 24 C 21 22, 27 22, 32 24 C 27 26, 21 26, 16 24 Z" fill="currentColor" fillOpacity="0.3" />
      </svg>
    )
  }

  // Enterprise / Company / MSMB emblem
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10 sm:h-12 sm:w-12 text-terracotta-ink" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="8" y="8" width="32" height="32" rx="9" fill="currentColor" fillOpacity="0.12" strokeWidth="1.5" />
      <path d="M 15 32 L 24 16 L 33 32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <circle cx="24" cy="20" r="2.5" fill="currentColor" />
      <path d="M 19 26 H 29" strokeWidth="1.8" />
    </svg>
  )
}

function PartnerLogoBadge({ partner }: { partner: Partner }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-forest/15 bg-white p-2.5 shadow-sm transition-all duration-300 hover:scale-105 hover:border-terracotta hover:shadow-md">
        {partner.logo ? (
          <img
            src={partner.logo}
            alt={partner.name}
            className="h-full w-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              const fb = e.currentTarget.parentElement?.querySelector('.partner-fallback')
              if (fb) (fb as HTMLElement).style.display = 'flex'
            }}
          />
        ) : null}
        <div className={`partner-fallback ${partner.logo ? 'hidden' : 'flex'} h-full w-full items-center justify-center`}>
          <PartnerEmblem name={partner.name} />
        </div>
      </div>
      <span className="mt-2.5 max-w-[7.5rem] sm:max-w-[8.5rem] text-center text-xs sm:text-[0.82rem] font-semibold leading-tight text-charcoal">
        {partner.name}
      </span>
      {partner.role && (
        <span className="mt-1 max-w-[8rem] text-center font-mono text-[0.66rem] text-ink-soft">
          {partner.role}
        </span>
      )}
    </div>
  )
}

/** Tracks which photos failed to load, so layouts adapt to the files that really exist. */
function useVisibleImages(images: ProjectImage[]) {
  const [failed, setFailed] = useState<string[]>([])
  const visible = images.filter((img) => !failed.includes(img.src))
  const markFailed = (src: string) => setFailed((prev) => (prev.includes(src) ? prev : [...prev, src]))
  return { visible, markFailed }
}

/** 1 photo = full, 2 = two equal, 3 = three equal columns, 4 = 2x2 equal. Shows at most 4. */
function ImageGrid({
  images,
  label,
  onFail,
  className = '',
}: {
  images: ProjectImage[]
  label: string
  onFail: (src: string) => void
  className?: string
}) {
  const shown = images.slice(0, 4)
  const layout =
    shown.length === 1
      ? 'grid-cols-1'
      : shown.length === 3
        ? 'grid-cols-3'
        : shown.length === 4
          ? 'grid-cols-2 grid-rows-2'
          : 'grid-cols-2'

  return (
    <div className={`grid gap-1 bg-white ${layout} ${className}`}>
      {shown.map((img) => (
        <div key={img.src} className="relative min-h-0 overflow-hidden bg-sage-soft">
          <img
            src={img.src}
            alt={`${label}: ${img.caption}`}
            loading="lazy"
            className="photo-treatment absolute inset-0 h-full w-full object-cover"
            onError={(e) => {
              handleImageFallback(e, () => onFail(img.src))
            }}
          />
        </div>
      ))}
    </div>
  )
}

function ImagePlaceholder({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-sage-soft to-sage text-forest/70 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 40" className="h-10 w-10 fill-current">
        <path d="M0 40C0 15 15 2 40 0 38 25 25 40 0 40Z" />
      </svg>
      <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em]">Photos coming soon</span>
    </div>
  )
}

function DetailSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-rule pt-7">
      <h4 className="eyebrow text-[0.72rem] text-terracotta-ink">{heading}</h4>
      <div className="mt-3 space-y-3 leading-relaxed text-ink-soft">{children}</div>
    </section>
  )
}


export function ToolIcon({ name }: { name: string }) {
  const n = name.toLowerCase().trim()

  // Visual Studio Code
  if (n.includes('visual studio') || n.includes('vscode') || n.includes('vs code')) {
    return (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M17.5 2.5L7.2 10.7 3.5 7.8 2 8.7v6.6l1.5.9 3.7-2.9 10.3 8.2 4.5-2.2V4.7l-4.5-2.2z" fill="#007ACC" />
        <path d="M17.5 2.5v19l4.5-2.2V4.7l-4.5-2.2z" fill="#0065A9" />
        <path d="M7.2 10.7l10.3-8.2v6.4l-7 4.5-3.3-2.7z" fill="#1F9CF0" />
        <path d="M7.2 13.3l3.3-2.7 7 4.5v6.4L7.2 13.3z" fill="#007ACC" />
      </svg>
    )
  }

  // PlatformIO
  if (n.includes('platformio')) {
    return (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#F48225" />
        {/* Ant logo stylized */}
        <ellipse cx="12" cy="13" rx="3.5" ry="4" fill="#FFFFFF" />
        <circle cx="12" cy="7.5" r="2.2" fill="#FFFFFF" />
        <path d="M10.8 5.8L9 3.5M13.2 5.8L15 3.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M8.5 11.5L5.5 10M15.5 11.5L18.5 10M8.5 14L5.5 15.5M15.5 14L18.5 15.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    )
  }

  // Microsoft Excel
  if (n.includes('excel')) {
    return (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="#107C41" />
        <path d="M14 2v6h6" fill="#185A30" />
        <path d="M14 2v6h6L14 2z" fill="#33C481" opacity="0.4" />
        <rect x="2" y="7" width="11" height="10" rx="1.5" fill="#107C41" />
        <path d="M4.8 9.5l2.2 2.5-2.2 2.5h1.5l1.4-1.8 1.4 1.8h1.5l-2.2-2.5 2.2-2.5H9.1l-1.4 1.7-1.4-1.7H4.8z" fill="#FFFFFF" />
      </svg>
    )
  }

  // Microsoft Word
  if (n.includes('word')) {
    return (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="#185ABD" />
        <path d="M14 2v6h6" fill="#0C3B7E" />
        <rect x="2" y="7" width="11" height="10" rx="1.5" fill="#185ABD" />
        <path d="M4.5 9.5h1.2l1 3.5 1.1-3.5h1.1l1.1 3.5 1-3.5h1.2l-1.6 5H9.4l-1-3.2-1 3.2H6.1l-1.6-5z" fill="#FFFFFF" />
      </svg>
    )
  }

  // Microsoft PowerPoint
  if (n.includes('powerpoint') || n.includes('ppt')) {
    return (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="#C43E1C" />
        <path d="M14 2v6h6" fill="#983015" />
        <rect x="2" y="7" width="11" height="10" rx="1.5" fill="#C43E1C" />
        <path d="M5 9.5h2.5c1.2 0 2 .7 2 1.8 0 1.2-.8 1.8-2 1.8H6.5v2.4H5V9.5zm1.5 2.4h1c.5 0 .8-.3.8-.7s-.3-.7-.8-.7h-1v1.4z" fill="#FFFFFF" />
      </svg>
    )
  }

  // Python
  if (n.includes('python')) {
    return (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3l.1 1.4h3v.4H6.8S4 4.8 4 8c0 3.1 1.7 3 1.7 3h1V9.6s-.1-1.7 1.7-1.7h4.8s1.6 0 1.6-1.6V4.1S15 2 11.9 2zm-1.7 1.1c.3 0 .6.3.6.6s-.3.6-.6.6-.6-.3-.6-.6.3-.6.6-.6z" fill="#387EB8" />
        <path d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3l-.1-1.4h-3v-.4h5.3s2.8.3 2.8-2.9c0-3.1-1.7-3-1.7-3h-1v1.4s.1 1.7-1.7 1.7H9.8s-1.6 0-1.6 1.6v2.2s-.2 2.1 3.9 2.1zm1.7-1.1c-.3 0-.6-.3-.6-.6s.3-.6.6-.6.6.3.6.6-.3.6-.6.6z" fill="#FFE052" />
      </svg>
    )
  }

  // QGIS
  if (n.includes('qgis')) {
    return (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#589632" />
        <path d="M7 16l4-8 3 4-2 4H7z" fill="#93B023" />
        <circle cx="15.5" cy="15.5" r="2.5" fill="#EE7913" />
      </svg>
    )
  }

  // QBase 3D
  if (n.includes('qbase')) {
    return (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#0E4B8C" />
        <path d="M6 7h8l-4 5h4l-7 7 2-5H6V7z" fill="#FFFFFF" />
      </svg>
    )
  }

  // Canva
  if (n.includes('canva')) {
    return (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#00C4CC" />
        <path d="M8.5 13.5c-.8 0-1.5-.7-1.5-1.5 0-1.5 1.5-3 3.5-3s2 .8 2 1.5c0 1.2-1.2 2-2.8 2.2-.2.5-.5.8-.9.8z" fill="#FFFFFF" />
      </svg>
    )
  }

  // SolidWorks
  if (n.includes('solidworks')) {
    return (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#E2231A" />
        <path d="M5 12c0-3.87 3.13-7 7-7 2.76 0 5.16 1.59 6.36 3.93" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M19 12c0 3.87-3.13 7-7 7-2.76 0-5.16-1.59-6.36-3.93" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M15.5 5.5l2.86.43L19 8.79" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 18.5l-2.86-.43L5 15.21" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  // Arduino IDE
  if (n.includes('arduino')) {
    return (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#00878A" />
        <path d="M6 12h4M14 12h4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 9.5v5M16 9.5v5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <path d="M14.5 10.5a2.5 2.5 0 0 1 0 3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }

  // CapCut
  if (n.includes('capcut')) {
    return (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#000000" />
        <path d="M8 7v10M8 12h5a3 3 0 0 0 0-6H8" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="15" r="2.5" stroke="#FFFFFF" strokeWidth="1.6" />
        <path d="M18.5 12.5v5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  }

  // Instagram
  if (n.includes('instagram')) {
    return (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5.5" fill="#E1306C" />
        <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="#FFFFFF" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3" stroke="#FFFFFF" strokeWidth="1.6" />
        <circle cx="15.8" cy="8.2" r="0.9" fill="#FFFFFF" />
      </svg>
    )
  }

  // Default tech/tool icon
  return (
    <svg className="h-3.5 w-3.5 shrink-0 text-forest/60" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
  )
}

function ToolChipList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-paper px-3.5 py-1.5 text-sm font-medium text-charcoal shadow-xs transition-colors hover:border-forest/30"
        >
          <ToolIcon name={item} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function SdgOfficialBadge({ n }: { n: number }) {
  switch (n) {
    case 2: // Zero Hunger
      return (
        <div
          className="flex h-11 w-11 flex-col items-center justify-between rounded-lg p-1 text-white shadow-xs select-none"
          style={{ backgroundColor: '#DDA63A' }}
          title="SDG 2: Zero Hunger"
        >
          <div className="flex w-full items-start justify-between px-0.5 leading-none">
            <span className="font-serif text-xs font-bold leading-none">2</span>
            <span className="text-[0.45rem] font-bold uppercase leading-tight text-right">
              ZERO<br />HUNGER
            </span>
          </div>
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 14a8 8 0 0 0 16 0H4z" fill="currentColor" stroke="none" />
            <path d="M8 18h8M9 20h6" strokeLinecap="round" />
            <path d="M8 6c0 2 2 2 2 4M12 6c0 2 2 2 2 4M16 6c0 2 2 2 2 4" strokeLinecap="round" />
          </svg>
        </div>
      )
    case 6: // Clean Water and Sanitation
      return (
        <div
          className="flex h-11 w-11 flex-col items-center justify-between rounded-lg p-1 text-white shadow-xs select-none"
          style={{ backgroundColor: '#26BDE2' }}
          title="SDG 6: Clean Water and Sanitation"
        >
          <div className="flex w-full items-start justify-between px-0.5 leading-none">
            <span className="font-serif text-xs font-bold leading-none">6</span>
            <span className="text-[0.42rem] font-bold uppercase leading-tight text-right">
              CLEAN<br />WATER
            </span>
          </div>
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.7c-.5.6-5.5 6.7-5.5 11a5.5 5.5 0 1 0 11 0c0-4.3-5-10.4-5.5-11zm-1.8 14.5a3 3 0 0 1-2-2.8.8.8 0 0 1 1.6 0 1.5 1.5 0 0 0 1 1.4.8.8 0 1 1-.6 1.4z" />
          </svg>
        </div>
      )
    case 9: // Industry, Innovation and Infrastructure
      return (
        <div
          className="flex h-11 w-11 flex-col items-center justify-between rounded-lg p-1 text-white shadow-xs select-none"
          style={{ backgroundColor: '#FD6925' }}
          title="SDG 9: Industry, Innovation and Infrastructure"
        >
          <div className="flex w-full items-start justify-between px-0.5 leading-none">
            <span className="font-serif text-xs font-bold leading-none">9</span>
            <span className="text-[0.4rem] font-bold uppercase leading-tight text-right">
              INDUSTRY<br />INNOVATION
            </span>
          </div>
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M12 2l4 2.5v5L12 12 8 9.5v-5L12 2z" fill="currentColor" fillOpacity="0.25" />
            <path d="M6 12l4 2.5v5L6 22l-4-2.5v-5L6 12z" fill="currentColor" fillOpacity="0.25" />
            <path d="M18 12l4 2.5v5l-4 2.5-4-2.5v-5l4-2.5z" fill="currentColor" fillOpacity="0.25" />
          </svg>
        </div>
      )
    case 12: // Responsible Consumption and Production
      return (
        <div
          className="flex h-11 w-11 flex-col items-center justify-between rounded-lg p-1 text-white shadow-xs select-none"
          style={{ backgroundColor: '#BF8B2E' }}
          title="SDG 12: Responsible Consumption and Production"
        >
          <div className="flex w-full items-start justify-between px-0.5 leading-none">
            <span className="font-serif text-xs font-bold leading-none">12</span>
            <span className="text-[0.38rem] font-bold uppercase leading-tight text-right">
              RESPONSIBLE<br />CONSUMPTION
            </span>
          </div>
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 8a4 4 0 1 0 0 8c2.5 0 4-3 4-4s1.5-4 4-4a4 4 0 1 1 0 8c-2.5 0-4-3-4-4" strokeLinecap="round" />
            <path d="M16 16l2-2m0 0l-2-2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )
    case 13: // Climate Action
      return (
        <div
          className="flex h-11 w-11 flex-col items-center justify-between rounded-lg p-1 text-white shadow-xs select-none"
          style={{ backgroundColor: '#3F7E44' }}
          title="SDG 13: Climate Action"
        >
          <div className="flex w-full items-start justify-between px-0.5 leading-none">
            <span className="font-serif text-xs font-bold leading-none">13</span>
            <span className="text-[0.42rem] font-bold uppercase leading-tight text-right">
              CLIMATE<br />ACTION
            </span>
          </div>
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="8" />
            <path d="M8 12s1.5-3 4-3 4 3 4 3-1.5 3-4 3-4-3-4-3z" fill="currentColor" stroke="none" />
          </svg>
        </div>
      )
    case 4: // Quality Education
      return (
        <div
          className="flex h-11 w-11 flex-col items-center justify-between rounded-lg p-1 text-white shadow-xs select-none"
          style={{ backgroundColor: '#C5192D' }}
          title="SDG 4: Quality Education"
        >
          <div className="flex w-full items-start justify-between px-0.5 leading-none">
            <span className="font-serif text-xs font-bold leading-none">4</span>
            <span className="text-[0.42rem] font-bold uppercase leading-tight text-right">
              QUALITY<br />EDUCATION
            </span>
          </div>
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 3L2 8l10 5 10-5-10-5z" fill="currentColor" fillOpacity="0.4" stroke="none" />
            <path d="M2 8l10 5 10-5" strokeLinecap="round" />
            <path d="M6 10.5v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" strokeLinecap="round" />
          </svg>
        </div>
      )
    case 17: // Partnerships for the Goals
      return (
        <div
          className="flex h-11 w-11 flex-col items-center justify-between rounded-lg p-1 text-white shadow-xs select-none"
          style={{ backgroundColor: '#19486A' }}
          title="SDG 17: Partnerships for the Goals"
        >
          <div className="flex w-full items-start justify-between px-0.5 leading-none">
            <span className="font-serif text-xs font-bold leading-none">17</span>
            <span className="text-[0.42rem] font-bold uppercase leading-tight text-right">
              PARTNER<br />SHIPS
            </span>
          </div>
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="7" cy="14" r="3" />
            <circle cx="17" cy="14" r="3" />
            <circle cx="12" cy="7" r="3" />
            <path d="M9.5 12.5l2.5-3.5 2.5 3.5M10 14h4" strokeLinecap="round" />
          </svg>
        </div>
      )
    default:
      return (
        <div
          className="grid h-11 w-11 place-items-center rounded-lg font-serif text-base font-bold text-white shadow-xs"
          style={{ backgroundColor: '#526660' }}
          title={`SDG ${n}`}
        >
          {n}
        </div>
      )
  }
}

function ChipList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-lg border border-forest/15 bg-paper px-3 py-1.5 text-sm font-medium text-charcoal"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

/** Renders one organizational activity: heading + role + description paragraph + photo(s) */
function ActivityBlock({ activity, index }: { activity: ProjectActivity; index: number }) {
  const isSingleImage = activity.images.length === 1
  return (
    <div className="border-t border-rule pt-8 space-y-5">
      <div>
        <p className="eyebrow text-[0.72rem] text-terracotta-ink">Activity {String(index + 1).padStart(2, '0')}</p>
        <h4 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-forest">{activity.title}</h4>
        <p className="mt-1 font-mono text-sm text-ink-soft">{activity.role}</p>
      </div>
      <p className="leading-relaxed text-ink-soft">{activity.description}</p>

      {isSingleImage ? (
        /* Single full-width image */
        <div className="space-y-3">
          <p className="eyebrow text-terracotta-ink">{activity.title} — Photo documentation</p>
          <div className="overflow-hidden rounded-xl aspect-[16/9] bg-sage-soft/30">
            <img
              src={activity.images[0].src}
              alt={activity.images[0].caption}
              loading="lazy"
              className="photo-treatment h-full w-full object-cover"
              onError={(e) => handleImageFallback(e, () => { e.currentTarget.style.display = 'none' })}
            />
          </div>
          {activity.images[0].caption && (
            <p className="text-center text-xs text-ink-soft/60 italic">{activity.images[0].caption}</p>
          )}
        </div>
      ) : (
        <ProjectCollageGrid
          images={activity.images}
          startIndex={0}
          sectionTitle={activity.title}
          sectionSubtitle="Photo documentation"
        />
      )}
    </div>
  )
}

/** Gambar ke-1: Banner 1 gambar di paling atas dengan tombol "Back to all projects" melayang */
function ProjectHeroBanner({
  image,
  title,
  onClose,
}: {
  image?: ProjectImage
  title: string
  onClose: () => void
}) {
  return (
    <div className="relative aspect-[21/9] min-h-[14rem] sm:min-h-[22rem] w-full overflow-hidden bg-forest-deep">
      {image?.src ? (
        <img
          src={image.src}
          alt={image.caption || title}
          className="h-full w-full object-cover"
          onError={(e) => {
            handleImageFallback(e, () => {
              e.currentTarget.style.display = 'none'
              const fallback = e.currentTarget.parentElement?.querySelector('.banner-placeholder')
              if (fallback) (fallback as HTMLElement).style.display = 'flex'
            })
          }}
        />
      ) : null}

      <div
        className={`banner-placeholder ${image?.src ? 'hidden' : 'flex'} absolute inset-0 flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-forest-deep via-forest to-forest-deep text-ivory/80`}
      >
        <svg viewBox="0 0 24 24" className="h-12 w-12 text-sage/40 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span className="font-mono text-xs uppercase tracking-widest text-sage">
          Cover Image · Section 1
        </span>
        <span className="mt-1 text-sm font-serif italic text-ivory/80 max-w-md">
          {image?.caption || title}
        </span>
      </div>

      {/* Floating "Back to all projects" Pill on top-left (sesuai contoh gambar) */}
      <button
        type="button"
        onClick={onClose}
        className="absolute left-4 sm:left-6 top-4 sm:top-6 z-20 inline-flex items-center gap-2 rounded-full bg-ivory/95 px-4 py-2 text-sm font-semibold text-charcoal shadow-md backdrop-blur-md transition-all hover:bg-white hover:text-forest"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 10H4m6-6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to all projects
      </button>

      {/* Cross close button on top-right */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 sm:right-6 top-4 sm:top-6 z-20 grid h-9 w-9 place-items-center rounded-full bg-ivory/90 text-charcoal shadow-md backdrop-blur-md transition-all hover:bg-white hover:text-forest"
        aria-label="Close dialog"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 5l10 10M15 5 5 15" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

/** Gambar ke-2 & ke-3: Kolase 4 gambar (2x2 grid) dengan slot placeholder otomatis */
function ProjectCollageGrid({
  images,
  startIndex,
  sectionTitle,
  sectionSubtitle,
}: {
  images: ProjectImage[]
  startIndex: number
  sectionTitle: string
  sectionSubtitle?: string
}) {
  const slots = [0, 1, 2, 3]

  return (
    <div className="rounded-2xl border border-forest/12 bg-paper p-5 sm:p-7 shadow-sm">
      <div className="mb-4">
        <h4 className="font-serif text-xl sm:text-2xl font-bold text-forest">{sectionTitle}</h4>
        {sectionSubtitle && (
          <p className="mt-1 text-sm text-ink-soft">{sectionSubtitle}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {slots.map((offset) => {
          const imgIndex = startIndex + offset
          const img = images[imgIndex]

          return (
            <div
              key={offset}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-forest/15 bg-sage-soft/30 transition-all hover:border-forest/40 hover:shadow-md"
            >
              {img?.src ? (
                <>
                  <img
                    src={img.src}
                    alt={img.caption || `Documentation ${offset + 1}`}
                    loading="lazy"
                    className="photo-treatment h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      handleImageFallback(e, () => {
                        e.currentTarget.style.display = 'none'
                        const fallback = e.currentTarget.parentElement?.querySelector('.placeholder-box')
                        if (fallback) (fallback as HTMLElement).style.display = 'flex'
                      })
                    }}
                  />
                  <div className="placeholder-box hidden absolute inset-0 flex-col items-center justify-center p-3 text-center bg-sage-soft/40">
                    <svg viewBox="0 0 24 24" className="h-7 w-7 text-forest/40 mb-1" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <rect x="3" y="3" width="18" height="18" rx="3" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="m21 15-5-5L5 21" />
                    </svg>
                    <span className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-forest/70">
                      Photo {offset + 1} of 4
                    </span>
                    <span className="mt-0.5 text-xs text-ink-soft line-clamp-1">
                      {img.caption || 'Field documentation'}
                    </span>
                  </div>
                  {img.caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent p-2.5 pt-6 text-[0.72rem] text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:text-xs">
                      {img.caption}
                    </div>
                  )}
                </>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-3 text-center bg-sage-soft/25">
                  <svg viewBox="0 0 24 24" className="h-8 w-8 text-forest/35 mb-1.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                  <span className="font-mono text-[0.68rem] font-bold uppercase tracking-wider text-forest/65">
                    Photo {offset + 1} of 4
                  </span>
                  <span className="mt-0.5 text-[0.75rem] text-ink-soft/70">
                    Documentation photo slot
                  </span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleId = `project-${project.id}-title`
  const { visible, markFailed } = useVisibleImages(project.images)

  return (
    <article
      id={`project-${project.id}`}
      aria-labelledby={titleId}
      className="flex flex-col overflow-hidden rounded-2xl border border-forest/15 bg-paper shadow-sm transition-all duration-300 hover:border-forest/30 hover:shadow-md"
      {...revealProps((index % 2) * 100)}
    >
      {visible.length > 0 ? (
        <ImageGrid
          images={visible}
          label={project.title}
          onFail={markFailed}
          className="aspect-[16/10] w-full"
        />
      ) : (
        <ImagePlaceholder className="aspect-[16/10] w-full" />
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <p className="eyebrow text-terracotta-ink">{project.category}</p>
          <p className="font-mono text-sm text-ink-soft">{project.year}</p>
        </div>

        <h3 id={titleId} className="mt-3 font-serif text-[clamp(1.4rem,1.2rem+0.6vw,1.8rem)] leading-snug text-forest">
          {project.title}
        </h3>
        <p className="mt-2 font-serif text-[1.02rem] italic leading-snug text-ink-soft">{project.subtitle}</p>

        <p className="mt-5 line-clamp-3 leading-relaxed text-ink-soft">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tags">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-forest/15 bg-ivory px-3 py-1 text-xs sm:text-sm font-medium text-ink-soft">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <button
            type="button"
            className="inline-flex items-center gap-2 font-semibold text-terracotta-ink transition-colors hover:text-forest"
            aria-haspopup="dialog"
            onClick={() => dialogRef.current?.showModal()}
          >
            Read more
            <ArrowIcon />
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby={`${titleId}-dialog`}
        className="m-auto max-h-[94dvh] w-[min(54rem,calc(100%-2rem))] overflow-y-auto rounded-2xl bg-paper p-0 text-charcoal shadow-2xl backdrop:bg-forest-deep/65 backdrop:backdrop-blur-sm"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
      >
        {/* Gambar Bagian 1: 1 Gambar Cover Banner di paling atas dengan tombol 'Back to all projects' */}
        <ProjectHeroBanner
          image={project.images[0]}
          title={project.title}
          onClose={() => dialogRef.current?.close()}
        />

        <div className="p-6 sm:p-10 lg:p-12">
          {/* Header Metadata Proyek (sesuai contoh referensi) */}
          <div>
            <p className="eyebrow text-terracotta-ink text-sm font-semibold">
              {project.category}
            </p>
            <h3
              id={`${titleId}-dialog`}
              className="mt-3 font-serif text-3xl sm:text-5xl font-bold leading-[1.1] text-forest"
            >
              {project.title}
            </h3>
            <p className="mt-3 font-serif italic text-lg sm:text-xl leading-snug text-ink-soft">
              {project.subtitle}
            </p>

            {/* Author info row (avatar + Rizqi Asy'ari Ramadhan · read time · year) */}
            <div className="mt-6 flex flex-wrap items-center gap-3 border-b border-rule pb-6 text-sm text-ink-soft">
              <img
                src={profile.portrait || '/foto.png'}
                alt={profile.name}
                className="h-10 w-10 rounded-full object-cover border border-forest/20 bg-sage-soft"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="font-semibold text-charcoal">{profile.name}</span>
              <span aria-hidden="true" className="text-forest/30">·</span>
              <span>3 min read</span>
              <span aria-hidden="true" className="text-forest/30">·</span>
              <span className="font-mono text-xs font-semibold text-forest">{project.year}</span>
            </div>

          </div>

          <div className="mt-10 space-y-10">
            {/* --- PENJELASAN 1: Overview & Challenge --- */}
            <DetailSection heading="Project Overview">
              <p className="text-lg leading-relaxed text-charcoal">{project.overview}</p>
            </DetailSection>

            <DetailSection heading="The Challenge">
              <p className="leading-relaxed text-ink-soft">{project.challenge}</p>
            </DetailSection>

            {/* --- If activities exist: render each with its own collage; else: default 3-block layout --- */}
            {project.activities && project.activities.length > 0 ? (
              <div className="space-y-10">
                {project.activities.map((activity, i) => (
                  <ActivityBlock key={activity.title} activity={activity} index={i} />
                ))}
              </div>
            ) : (
              <>
                {/* --- GAMBAR BAGIAN 2: Kolase 4 Gambar --- */}
                <ProjectCollageGrid
                  images={project.images}
                  startIndex={0}
                  sectionTitle="System & Field Implementation"
                  sectionSubtitle="Photo documentation: Field setup, hardware installation, and initial calibration stages."
                />

                {/* --- PENJELASAN 2: Approach & Methodology --- */}
                <DetailSection heading="Approach & Methodology">
                  <p className="leading-relaxed text-ink-soft">{project.approach}</p>
                </DetailSection>

                {/* --- GAMBAR BAGIAN 3: Kolase 4 Gambar --- */}
                {project.showSecondCollage !== false && (
                  <ProjectCollageGrid
                    images={project.images}
                    startIndex={4}
                    sectionTitle="Experimental Testing & Field Monitoring"
                    sectionSubtitle="Photo documentation: System monitoring, parameter recordings, and evaluation phases."
                  />
                )}

                {/* --- PENJELASAN 3: Results & Key Findings (HANYA TULISAN, TANPA DIAGRAM) --- */}
                <DetailSection heading="Results & Key Findings">
                  <ul className="space-y-3">
                    {project.results.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-relaxed text-charcoal">
                        <span aria-hidden="true" className="mt-[0.6em] h-2 w-2 shrink-0 rounded-full bg-terracotta" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {project.note && (
                    <div className="mt-5 rounded-xl border-l-4 border-terracotta bg-paper p-4 text-sm leading-relaxed text-ink-soft">
                      <strong className="font-semibold text-charcoal">Data note: </strong>
                      {project.note}
                    </div>
                  )}
                </DetailSection>
              </>
            )}

            {/* --- BAGIAN FIELDS, TOOLS & SDGS DI PALING BAWAH (SESUAI CONTOH GAMBAR) --- */}
            <div className="border-t border-rule pt-8 space-y-7">
              {project.fields.length > 0 && (
                <div className="space-y-3">
                  <p className="eyebrow text-terracotta-ink text-xs font-bold tracking-widest">
                    Fields & Expertise
                  </p>
                  <ChipList items={project.fields} />
                </div>
              )}

              {project.tools.length > 0 && (
                <div className="space-y-3">
                  <p className="eyebrow text-terracotta-ink text-xs font-bold tracking-widest">
                    Tools
                  </p>
                  <ToolChipList items={project.tools} />
                </div>
              )}

              {project.sdgs && project.sdgs.length > 0 && (
                <div className="space-y-3">
                  <p className="eyebrow text-terracotta-ink text-xs font-bold tracking-widest">
                    SDGs
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {project.sdgs.map((n) => (
                      <SdgOfficialBadge key={n} n={n} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Back button at the bottom */}
            <div className="pt-8 border-t border-rule flex justify-center">
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3 text-sm font-semibold text-ivory shadow-md transition-all hover:bg-forest-deep"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 10H4m6-6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to all projects
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mx-auto max-w-3xl text-center" {...revealProps()}>
          <h2
            id="projects-title"
            className="font-serif text-[clamp(2rem,1.5rem+2.2vw,3.25rem)] leading-[1.08] tracking-[-0.015em] text-forest"
          >
            Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft">
            Open any card to read the full case study.
          </p>
        </header>
        <div className="mt-12 lg:mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
