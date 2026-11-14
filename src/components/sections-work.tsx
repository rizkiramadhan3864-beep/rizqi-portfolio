import { useRef, useState } from 'react'
import { experiences, profile, projects, type Partner, type Project, type ProjectActivity, type ProjectImage } from '../content/profile'
import { ArrowIcon, handleImageFallback, revealProps } from './ui'

/** Three tilted, overlapping photo frames on a soft sage board, like a pinned field log. */
function ExperienceCollage({ photos, label, tone = 0 }: { photos: string[]; label: string; tone?: 0 | 1 }) {
  const frames = [
    'left-[5%] top-[14%] w-[54%] rotate-[-4deg] z-20',
    'right-[4%] top-[6%] w-[48%] rotate-[3deg] z-10',
    'left-[22%] bottom-[5%] w-[52%] rotate-[1deg] z-30',
  ]

  return (
    <div
      className={`relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-forest/10 p-3 shadow-md ${
        tone === 1 ? 'bg-gradient-to-br from-cream via-sage-soft to-sage/40' : 'bg-gradient-to-br from-sage/30 via-cream to-sage-soft'
      }`}
      role="group"
      aria-label={`Documentation: ${label}`}
    >
      {/* Decorative agronomy leaf watermark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className="absolute left-[16%] top-[3%] w-14 rotate-[16deg] fill-current text-forest/15 pointer-events-none"
      >
        <path d="M0 40C0 15 15 2 40 0 38 25 25 40 0 40Z" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 40 40"
        className="absolute bottom-[10%] right-[6%] w-16 rotate-[-22deg] fill-current text-forest/15 pointer-events-none"
      >
        <path d="M0 40C0 15 15 2 40 0 38 25 25 40 0 40Z" />
      </svg>

      {frames.map((position, i) => (
        <div
          key={position}
          className={`absolute rounded-xl bg-white p-2 sm:p-2.5 shadow-[0_12px_24px_rgba(16,44,38,0.12)] border border-forest/10 transition-transform duration-300 hover:scale-[1.04] hover:z-40 ${position}`}
        >
          <div className="aspect-square overflow-hidden rounded-lg bg-forest/5">
            {photos[i] && (
              <img
                src={photos[i]}
                alt={`${label} documentation ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover grayscale contrast-[1.05]"
                onError={(event) => {
                  handleImageFallback(event, () => {
                    event.currentTarget.style.visibility = 'hidden'
                  })
                }}
              />
            )}
          </div>
          <div className="mt-1.5 flex items-center justify-between px-1">
            <span className="font-mono text-[0.58rem] sm:text-[0.62rem] font-semibold text-forest uppercase tracking-wider">
              LOG 0{i + 1}
            </span>
            <span className="h-1 w-1 rounded-full bg-forest/40" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center" {...revealProps()}>
          <p className="eyebrow text-forest">§ 03 — Professional Trajectory</p>
          <h2
            id="experience-title"
            className="mt-3 font-serif text-[2.4rem] leading-[1.05] tracking-tight text-forest sm:text-5xl lg:text-[3.6rem]"
          >
            Experience
          </h2>
          <p className="mt-3 text-base text-ink-soft">
            Hands-on leadership, agronomic monitoring, and technical research across plant factories, greenhouse facilities, and agricultural fields.
          </p>
        </header>

        {/* Timeline List */}
        <div className="mt-16 relative">
          <ol className="space-y-16">
            {experiences.map((exp, i) => (
              <li
                key={exp.role + exp.period}
                className="relative rounded-[2rem] border border-forest/12 bg-white p-6 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-forest/25"
                {...revealProps(i * 60)}
              >
                <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                  {/* Left Column: Photo Collage */}
                  <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
                    <ExperienceCollage photos={exp.photos ?? []} label={exp.role} tone={(i % 2) as 0 | 1} />
                  </div>

                  {/* Right Column: Experience Details */}
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/5 px-3 py-1 font-mono text-xs font-semibold text-forest">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-lime/25 border border-lime/60 px-3 py-1 font-mono text-[0.68rem] uppercase font-bold tracking-wider text-forest-deep">
                          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-forest animate-pulse" />
                          Current role
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-bold leading-tight text-forest">
                      {exp.role}
                    </h3>
                    <p className="mt-1 font-medium text-charcoal text-base sm:text-lg">
                      {exp.organization}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {exp.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm sm:text-base leading-relaxed text-ink-soft">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-6 border-t border-rule/70">
                      <p className="eyebrow text-forest text-xs font-bold tracking-widest">
                        Skills Gained &amp; Applied
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {(exp.skills ?? []).map((skill) => (
                          <li
                            key={skill}
                            className="rounded-xl border border-forest/15 bg-cream/70 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-forest shadow-2xs transition-colors hover:border-forest/40 hover:bg-white"
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
      </div>
    </section>
  )
}


/* ------------------------------------------------------------------ */
/* Projects & Case Studies                                            */
/* ------------------------------------------------------------------ */

function PartnerEmblem({ name }: { name: string }) {
  const lower = name.toLowerCase()

  if (lower.includes('gadjah mada') || lower.includes('ugm')) {
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10 sm:h-12 sm:w-12 text-forest" fill="none" stroke="currentColor" strokeWidth="1.4">
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
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10 sm:h-12 sm:w-12 text-forest" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="6" y="6" width="36" height="36" rx="10" fill="#153F35" fillOpacity="0.14" stroke="none" />
        <circle cx="24" cy="36" r="3.5" fill="currentColor" />
        <circle cx="15" cy="18" r="3" fill="currentColor" />
        <circle cx="33" cy="18" r="3" fill="currentColor" />
        <circle cx="24" cy="12" r="3.5" fill="currentColor" />
        <path d="M 24 33 V 24 M 24 24 L 17 19 M 24 24 L 31 19 M 24 24 V 15" strokeLinecap="round" />
      </svg>
    )
  }

  if (lower.includes('kwt') || lower.includes('teratai') || lower.includes('community')) {
    return (
      <svg viewBox="0 0 48 48" className="h-10 w-10 sm:h-12 sm:w-12 text-forest" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="24,6 40,15 35,38 24,44 13,38 8,15" fill="#153F35" fillOpacity="0.15" strokeWidth="1.6" />
        <circle cx="24" cy="24" r="8" strokeWidth="1.2" />
        <path d="M 24 16 C 26 21, 26 27, 24 32 C 22 27, 22 21, 24 16 Z" fill="currentColor" fillOpacity="0.3" />
        <path d="M 16 24 C 21 22, 27 22, 32 24 C 27 26, 21 26, 16 24 Z" fill="currentColor" fillOpacity="0.3" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10 sm:h-12 sm:w-12 text-[#9B5132]" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="8" y="8" width="32" height="32" rx="9" fill="#9B5132" fillOpacity="0.12" strokeWidth="1.5" />
      <path d="M 15 32 L 24 16 L 33 32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <circle cx="24" cy="20" r="2.5" fill="currentColor" />
      <path d="M 19 26 H 29" strokeWidth="1.8" />
    </svg>
  )
}

function useVisibleImages(images: ProjectImage[]) {
  const [failed, setFailed] = useState<string[]>([])
  const visible = images.filter((img) => !failed.includes(img.src))
  const markFailed = (src: string) => setFailed((prev) => (prev.includes(src) ? prev : [...prev, src]))
  return { visible, markFailed }
}

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
    <div className={`grid gap-1.5 bg-forest/5 p-1 rounded-2xl overflow-hidden ${layout} ${className}`}>
      {shown.map((img) => (
        <div key={img.src} className="relative min-h-0 overflow-hidden rounded-xl bg-forest/10">
          <img
            src={img.src}
            alt={`${label}: ${img.caption}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
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
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-sage/30 to-cream text-forest/70 rounded-2xl ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 40" className="h-10 w-10 fill-current opacity-40">
        <path d="M0 40C0 15 15 2 40 0 38 25 25 40 0 40Z" />
      </svg>
      <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em]">Documentation Coming Soon</span>
    </div>
  )
}

function DetailSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-rule pt-7">
      <h4 className="eyebrow text-forest text-xs font-bold tracking-widest">{heading}</h4>
      <div className="mt-3 space-y-3 leading-relaxed text-ink-soft text-base">{children}</div>
    </section>
  )
}

export function ToolIcon({ name }: { name: string }) {
  const n = name.toLowerCase().trim()

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

  if (n.includes('platformio')) {
    return (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#F48225" />
        <ellipse cx="12" cy="13" rx="3.5" ry="4" fill="#FFFFFF" />
        <circle cx="12" cy="7.5" r="2.2" fill="#FFFFFF" />
        <path d="M10.8 5.8L9 3.5M13.2 5.8L15 3.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M8.5 11.5L5.5 10M15.5 11.5L18.5 10M8.5 14L5.5 15.5M15.5 14L18.5 15.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    )
  }

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

  if (n.includes('canva')) {
    return (
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#00C4CC" />
        <path d="M8.5 13.5c-.8 0-1.5-.7-1.5-1.5 0-1.5 1.5-3 3.5-3s2 .8 2 1.5c0 1.2-1.2 2-2.8 2.2-.2.5-.5.8-.9.8z" fill="#FFFFFF" />
      </svg>
    )
  }

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

  return (
    <svg className="h-3.5 w-3.5 shrink-0 text-forest" viewBox="0 0 20 20" fill="currentColor">
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
          className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white px-3.5 py-1.5 text-sm font-semibold text-charcoal shadow-2xs transition-colors hover:border-forest/40"
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
    case 2:
      return (
        <div className="flex h-11 w-11 flex-col items-center justify-between rounded-lg p-1 text-white shadow-xs select-none" style={{ backgroundColor: '#DDA63A' }} title="SDG 2: Zero Hunger">
          <div className="flex w-full items-start justify-between px-0.5 leading-none">
            <span className="font-serif text-xs font-bold leading-none">2</span>
            <span className="text-[0.45rem] font-bold uppercase leading-tight text-right">ZERO<br />HUNGER</span>
          </div>
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 14a8 8 0 0 0 16 0H4z" fill="currentColor" stroke="none" />
            <path d="M8 18h8M9 20h6" strokeLinecap="round" />
          </svg>
        </div>
      )
    case 6:
      return (
        <div className="flex h-11 w-11 flex-col items-center justify-between rounded-lg p-1 text-white shadow-xs select-none" style={{ backgroundColor: '#26BDE2' }} title="SDG 6: Clean Water and Sanitation">
          <div className="flex w-full items-start justify-between px-0.5 leading-none">
            <span className="font-serif text-xs font-bold leading-none">6</span>
            <span className="text-[0.42rem] font-bold uppercase leading-tight text-right">CLEAN<br />WATER</span>
          </div>
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.7c-.5.6-5.5 6.7-5.5 11a5.5 5.5 0 1 0 11 0c0-4.3-5-10.4-5.5-11zm-1.8 14.5a3 3 0 0 1-2-2.8.8.8 0 0 1 1.6 0 1.5 1.5 0 0 0 1 1.4.8.8 0 1 1-.6 1.4z" />
          </svg>
        </div>
      )
    case 12:
      return (
        <div className="flex h-11 w-11 flex-col items-center justify-between rounded-lg p-1 text-white shadow-xs select-none" style={{ backgroundColor: '#BF8B2E' }} title="SDG 12: Responsible Consumption and Production">
          <div className="flex w-full items-start justify-between px-0.5 leading-none">
            <span className="font-serif text-xs font-bold leading-none">12</span>
            <span className="text-[0.38rem] font-bold uppercase leading-tight text-right">RESPONSIBLE<br />CONSUMPTION</span>
          </div>
          <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 8a4 4 0 1 0 0 8c2.5 0 4-3 4-4s1.5-4 4-4a4 4 0 1 1 0 8c-2.5 0-4-3-4-4" strokeLinecap="round" />
          </svg>
        </div>
      )
    default:
      return (
        <div className="grid h-11 w-11 place-items-center rounded-lg font-serif text-base font-bold text-white shadow-xs" style={{ backgroundColor: '#153F35' }} title={`SDG ${n}`}>
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
          className="rounded-xl border border-forest/15 bg-white px-3 py-1.5 text-xs sm:text-sm font-semibold text-charcoal shadow-2xs"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

function ActivityBlock({ activity, index }: { activity: ProjectActivity; index: number }) {
  const isSingleImage = activity.images.length === 1
  return (
    <div className="border-t border-rule pt-8 space-y-4">
      <div>
        <p className="eyebrow text-forest text-xs font-bold">Activity {String(index + 1).padStart(2, '0')}</p>
        <h4 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-forest">{activity.title}</h4>
        <p className="mt-0.5 font-mono text-xs text-ink-soft">{activity.role}</p>
      </div>
      <p className="leading-relaxed text-ink-soft text-base">{activity.description}</p>

      {isSingleImage ? (
        <div className="space-y-2">
          <div className="overflow-hidden rounded-2xl aspect-[16/9] bg-forest/5 border border-forest/10">
            <img
              src={activity.images[0].src}
              alt={activity.images[0].caption}
              loading="lazy"
              className="h-full w-full object-cover"
              onError={(e) => handleImageFallback(e, () => { e.currentTarget.style.display = 'none' })}
            />
          </div>
          {activity.images[0].caption && (
            <p className="text-center text-xs text-ink-soft/70 italic">{activity.images[0].caption}</p>
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
            })
          }}
        />
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent" />

      {/* Floating "Back to all projects" Pill on top-left */}
      <button
        type="button"
        onClick={onClose}
        className="absolute left-4 sm:left-6 top-4 sm:top-6 z-20 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs sm:text-sm font-semibold text-forest-deep shadow-md backdrop-blur-md transition-all hover:bg-white hover:scale-105"
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
        className="absolute right-4 sm:right-6 top-4 sm:top-6 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-forest-deep shadow-md backdrop-blur-md transition-all hover:bg-white hover:scale-105"
        aria-label="Close dialog"
      >
        <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 5l10 10M15 5 5 15" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

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
    <div className="rounded-2xl border border-forest/15 bg-white p-5 sm:p-7 shadow-xs">
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
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-forest/10 bg-forest/5 transition-all hover:border-forest/30 hover:shadow-md"
            >
              {img?.src ? (
                <>
                  <img
                    src={img.src}
                    alt={img.caption || `Documentation ${offset + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      handleImageFallback(e, () => {
                        e.currentTarget.style.display = 'none'
                      })
                    }}
                  />
                  {img.caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/50 to-transparent p-2.5 pt-6 text-[0.7rem] sm:text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {img.caption}
                    </div>
                  )}
                </>
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-3 text-center bg-forest/5">
                  <span className="font-mono text-[0.65rem] font-bold uppercase tracking-wider text-forest/60">
                    Photo {offset + 1}
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

  // Flagship Project treatment (Automated Sprinkler Irrigation) gets Deep Navy styling
  const isFlagship = project.id === 'irrigation'

  return (
    <article
      id={`project-${project.id}`}
      aria-labelledby={titleId}
      className={`group relative flex flex-col overflow-hidden rounded-[2rem] border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        isFlagship
          ? 'md:col-span-2 border-navy/30 bg-navy text-white shadow-xl'
          : 'border-forest/15 bg-white shadow-sm hover:border-forest/30'
      }`}
      {...revealProps((index % 2) * 100)}
    >
      {/* Top Banner / Image Section */}
      <div className={isFlagship ? 'grid md:grid-cols-12 gap-6 p-6 sm:p-8 items-center' : ''}>
        {visible.length > 0 ? (
          <div className={isFlagship ? 'md:col-span-5' : ''}>
            <ImageGrid
              images={visible}
              label={project.title}
              onFail={markFailed}
              className={`w-full ${isFlagship ? 'aspect-[4/3]' : 'aspect-[16/10]'}`}
            />
          </div>
        ) : (
          <div className={isFlagship ? 'md:col-span-5' : ''}>
            <ImagePlaceholder className={`w-full ${isFlagship ? 'aspect-[4/3]' : 'aspect-[16/10]'}`} />
          </div>
        )}

        {/* Content Box */}
        <div className={`flex flex-1 flex-col ${isFlagship ? 'md:col-span-7' : 'p-6 sm:p-8'}`}>
          <div className="flex items-center justify-between gap-4">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider ${
                isFlagship
                  ? 'bg-lime/20 text-lime border border-lime/40'
                  : 'bg-forest/10 text-forest border border-forest/15'
              }`}
            >
              {isFlagship && <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />}
              {project.category}
            </span>
            <span className={`font-mono text-xs ${isFlagship ? 'text-sage-soft/80' : 'text-ink-soft'}`}>
              {project.year}
            </span>
          </div>

          <h3
            id={titleId}
            className={`mt-4 font-serif font-bold leading-tight ${
              isFlagship ? 'text-3xl sm:text-4xl text-white' : 'text-2xl sm:text-[1.85rem] text-forest'
            }`}
          >
            {project.title}
          </h3>

          <p
            className={`mt-2 font-serif italic leading-snug ${
              isFlagship ? 'text-sage-soft text-base sm:text-lg' : 'text-ink-soft text-sm sm:text-base'
            }`}
          >
            {project.subtitle}
          </p>

          <p
            className={`mt-4 line-clamp-3 leading-relaxed text-sm sm:text-base ${
              isFlagship ? 'text-white/80' : 'text-ink-soft'
            }`}
          >
            {project.summary}
          </p>

          {/* Key Metrics Callout for Flagship */}
          {isFlagship && (
            <div className="mt-5 grid grid-cols-2 gap-3 py-3 border-y border-white/15">
              <div>
                <span className="block font-mono text-[0.65rem] text-lime uppercase tracking-wider">Calibration R²</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-white">0.9437</span>
              </div>
              <div>
                <span className="block font-mono text-[0.65rem] text-lime uppercase tracking-wider">Potential Saving*</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-white">16.91%</span>
              </div>
            </div>
          )}

          {/* Tags */}
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tags">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  isFlagship
                    ? 'border border-white/20 bg-white/10 text-sage-soft'
                    : 'border border-forest/15 bg-cream/70 text-forest'
                }`}
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* Action Trigger */}
          <div className="mt-6 pt-4 flex items-center justify-between">
            <button
              type="button"
              className={`inline-flex items-center gap-2 font-semibold text-sm transition-all ${
                isFlagship
                  ? 'btn-lime px-5 py-2.5 text-xs sm:text-sm'
                  : 'text-forest hover:text-forest-deep link-underline'
              }`}
              aria-haspopup="dialog"
              onClick={() => dialogRef.current?.showModal()}
            >
              <span>Read Full Case Study</span>
              <ArrowIcon className="h-4 w-4" />
            </button>
            <span className={`font-mono text-[0.68rem] ${isFlagship ? 'text-sage-soft/70' : 'text-ink-soft/70'}`}>
              PRESS TO EXPAND
            </span>
          </div>
        </div>
      </div>

      {/* Detailed Modal Dialog */}
      <dialog
        ref={dialogRef}
        aria-labelledby={`${titleId}-dialog`}
        className="m-auto max-h-[94dvh] w-[min(66rem,calc(100%-2rem))] overflow-y-auto rounded-[2rem] bg-cream p-0 text-charcoal shadow-2xl backdrop:bg-forest-deep/75 backdrop:backdrop-blur-md"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close()
        }}
      >
        <ProjectHeroBanner
          image={project.images[0]}
          title={project.title}
          onClose={() => dialogRef.current?.close()}
        />

        <div className="p-6 sm:p-10 lg:p-12">
          {/* Header Metadata */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-forest" />
              <p className="eyebrow text-forest text-xs font-bold tracking-widest">
                {project.category}
              </p>
            </div>
            <h3
              id={`${titleId}-dialog`}
              className="mt-3 font-serif text-3xl sm:text-5xl font-bold leading-[1.1] text-forest"
            >
              {project.title}
            </h3>
            <p className="mt-3 font-serif italic text-lg sm:text-xl leading-snug text-ink-soft">
              {project.subtitle}
            </p>

            {/* Author info ribbon */}
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
              <span>Case Study Documentation</span>
              <span aria-hidden="true" className="text-forest/30">·</span>
              <span className="font-mono text-xs font-semibold text-forest">{project.year}</span>
            </div>
          </div>

          <div className="mt-10 space-y-10">
            {/* Overview & Challenge */}
            <DetailSection heading="Project Overview">
              <p className="text-lg leading-relaxed text-charcoal">{project.overview}</p>
            </DetailSection>

            <DetailSection heading="The Challenge">
              <p className="leading-relaxed text-ink-soft">{project.challenge}</p>
            </DetailSection>

            {/* Activities or Structured Photos */}
            {project.activities && project.activities.length > 0 ? (
              <div className="space-y-10">
                {project.activities.map((activity, i) => (
                  <ActivityBlock key={activity.title} activity={activity} index={i} />
                ))}
              </div>
            ) : (
              <>
                <ProjectCollageGrid
                  images={project.images}
                  startIndex={0}
                  sectionTitle="System &amp; Field Implementation"
                  sectionSubtitle="Photo documentation: Field setup, hardware installation, and initial calibration stages."
                />

                <DetailSection heading="Approach &amp; Methodology">
                  <p className="leading-relaxed text-ink-soft">{project.approach}</p>
                </DetailSection>

                {project.showSecondCollage !== false && (
                  <ProjectCollageGrid
                    images={project.images}
                    startIndex={4}
                    sectionTitle="Experimental Testing &amp; Field Monitoring"
                    sectionSubtitle="Photo documentation: System monitoring, parameter recordings, and evaluation phases."
                  />
                )}

                <DetailSection heading="Results &amp; Key Findings">
                  <ul className="space-y-3">
                    {project.results.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-relaxed text-charcoal">
                        <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-forest" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {project.note && (
                    <div className="mt-5 rounded-2xl border-l-4 border-forest bg-white p-5 text-sm leading-relaxed text-ink-soft shadow-xs">
                      <strong className="font-semibold text-charcoal">Data note: </strong>
                      {project.note}
                    </div>
                  )}
                </DetailSection>
              </>
            )}

            {/* Fields, Tools & SDGs */}
            <div className="border-t border-rule pt-8 space-y-6">
              {project.fields.length > 0 && (
                <div className="space-y-2.5">
                  <p className="eyebrow text-forest text-xs font-bold tracking-widest">
                    Fields &amp; Expertise
                  </p>
                  <ChipList items={project.fields} />
                </div>
              )}

              {project.tools.length > 0 && (
                <div className="space-y-2.5">
                  <p className="eyebrow text-forest text-xs font-bold tracking-widest">
                    Engineering Tools
                  </p>
                  <ToolChipList items={project.tools} />
                </div>
              )}

              {project.sdgs && project.sdgs.length > 0 && (
                <div className="space-y-2.5">
                  <p className="eyebrow text-forest text-xs font-bold tracking-widest">
                    UN Sustainable Development Goals (SDGs)
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {project.sdgs.map((n) => (
                      <SdgOfficialBadge key={n} n={n} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Close Button */}
            <div className="pt-8 border-t border-rule flex justify-center">
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                className="btn-primary"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 10H4m6-6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Back to all projects</span>
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
    <section id="projects" aria-labelledby="projects-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mx-auto max-w-3xl text-center" {...revealProps()}>
          <p className="eyebrow text-forest">§ 04 — Case Studies &amp; Research</p>
          <h2
            id="projects-title"
            className="mt-3 font-serif text-[2.4rem] leading-[1.05] tracking-tight text-forest sm:text-5xl lg:text-[3.6rem]"
          >
            Featured Projects
          </h2>
          <p className="mt-3 text-base text-ink-soft">
            Field-tested irrigation automation, IoT fertigation systems, and academic technical projects. Open any card to read the full case study.
          </p>
        </header>

        {/* Asymmetric Project Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
