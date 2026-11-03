import { useState } from 'react'
import {
  careerClosingNote,
  careerPathways,
  isPlaceholder,
  profile,
  skillCategories,
} from '../content/profile'
import { ArrowIcon, DownloadIcon, revealProps } from './ui'

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id)
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0]

  return (
    <section id="skills" aria-labelledby="skills-title" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mx-auto max-w-3xl text-center" {...revealProps()}>
          <h2
            id="skills-title"
            className="font-serif text-[2.4rem] leading-[1.05] tracking-[-0.015em] text-forest sm:text-5xl lg:text-[3.6rem]"
          >
            Skills &amp; Expertise
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft mx-auto max-w-3xl">
            <span className="sm:block">A multidisciplinary skill set combining agricultural expertise, engineering applications,</span>
            <span className="sm:block">smart farming technologies, data-driven analysis, and project management.</span>
          </p>
        </header>

        {/* ── Category Tab Row (4 Columns) ── */}
        <div
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          role="tablist"
          aria-label="Skill categories"
          {...revealProps()}
        >
          {skillCategories.map((cat) => {
            const isActive = cat.id === activeId
            return (
              <button
                key={cat.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`panel-${cat.id}`}
                onClick={() => setActiveId(cat.id)}
                className={`group flex flex-col items-center gap-3 rounded-2xl border p-6 text-center transition-all duration-300 focus-visible:outline-2 focus-visible:outline-forest ${
                  isActive
                    ? 'border-forest bg-forest text-ivory shadow-lg ring-4 ring-forest/10 scale-[1.02]'
                    : 'border-forest/15 bg-paper text-charcoal hover:border-forest/35 hover:bg-sage-soft/30 hover:scale-[1.01]'
                }`}
              >
                {/* Icon Container */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${
                    isActive ? 'bg-ivory/15 text-sage' : 'bg-forest/8 text-forest group-hover:bg-forest/15'
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={cat.iconPath} />
                  </svg>
                </div>

                <div>
                  <h3 className={`font-serif text-lg font-bold leading-snug ${isActive ? 'text-ivory' : 'text-forest'}`}>
                    {cat.label}
                  </h3>
                  <p className={`mt-1.5 text-xs leading-relaxed ${isActive ? 'text-sage' : 'text-ink-soft'}`}>
                    {cat.description}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* ── Skill Panel (Core Competencies & Tools) ── */}
        <div
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-label={active.label}
          className="mt-8 rounded-[1.75rem] border border-forest/12 bg-paper p-7 sm:p-10 lg:p-12 shadow-sm transition-all"
          {...revealProps(60)}
        >
          {/* Core Competencies */}
          <div className="text-center">
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              Core Competencies
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-ink-soft">
              Primary capabilities and domain knowledge in {active.label.toLowerCase()}
            </p>

            <ul className="mt-7 flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto" aria-label="Core competencies">
              {active.competencies.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-[#1A2621] px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-ivory shadow-xs transition-transform duration-200 hover:scale-105 hover:bg-forest"
                >
                  <span aria-hidden="true" className="text-terracotta text-sm leading-none shrink-0">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CareerDirection() {
  return (
    <section id="career-direction" aria-labelledby="career-direction-title" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mx-auto max-w-3xl text-center" {...revealProps()}>
          <h2
            id="career-direction-title"
            className="font-serif text-[2.4rem] leading-[1.05] tracking-[-0.015em] text-forest sm:text-5xl lg:text-[3.6rem]"
          >
            Where I Want to Grow
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft text-balance mx-auto max-w-2xl">
            Exploring opportunities across plantation, agricultural engineering, and modern crop production.
          </p>
        </header>

        {/* ── 3 Career Pathways Cards ── */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {careerPathways.map((pathway, i) => (
            <article
              key={pathway.id}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-forest/12 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-forest/30 hover:shadow-xl"
              {...revealProps(i * 100)}
            >
              {/* Image banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-sage-soft">
                <img
                  src={pathway.image}
                  alt={pathway.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                {/* Cover baked-in number badge at top-left of original images */}
                <div className="absolute top-0 left-0 h-12 w-16 bg-gradient-to-br from-black/60 via-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug text-forest transition-colors duration-200 group-hover:text-forest-deep">
                  {pathway.title.replace(/^\d+\.\s*/, '')}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {pathway.description}
                </p>

                <div className="mt-auto pt-6 border-t border-rule/70">
                  <p className="eyebrow text-[0.68rem] font-bold tracking-widest text-terracotta-ink">
                    AREAS OF INTEREST
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {pathway.areasOfInterest.map((area) => (
                      <span
                        key={area}
                        className="rounded-lg border border-forest/15 bg-paper px-2.5 py-1 text-xs font-medium text-charcoal transition-colors hover:border-forest/35 hover:bg-white"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Closing Synthesis Callout ── */}
        <div
          className="relative mt-14 overflow-hidden rounded-[1.75rem] border border-forest/15 bg-forest p-8 text-center text-ivory sm:p-12 lg:p-14 shadow-lg"
          {...revealProps(150)}
        >
          {/* Subtle decorative background wave */}
          <svg
            aria-hidden="true"
            viewBox="0 0 600 200"
            className="pointer-events-none absolute -right-16 -top-10 w-[30rem] max-w-none opacity-10"
            fill="none"
          >
            <path
              d="M0 100 C 150 20, 300 180, 450 60 S 600 140, 650 80"
              stroke="#B7C7B0"
              strokeWidth="2"
            />
          </svg>

          <div className="relative mx-auto max-w-3xl">
            <span className="eyebrow text-xs font-bold uppercase tracking-[0.2em] text-sage">
              Professional Direction
            </span>
            <p className="mt-4 font-serif text-xl sm:text-2xl leading-relaxed text-ivory/95">
              "{careerClosingNote}"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Backward compatibility alias for any existing imports */
export const Research = CareerDirection

export function Contact() {
  const contactRows = [
    {
      label: 'Email',
      display: profile.email,
      href: `mailto:${profile.email}`,
      isExternal: false,
    },
    {
      label: 'Phone / WhatsApp',
      display: profile.phone,
      href: profile.whatsappUrl,
      isExternal: true,
    },
    {
      label: 'LinkedIn',
      display: 'linkedin.com/in/rizqi-asy-ari-ramadhan',
      href: profile.linkedin,
      isExternal: true,
    },
    {
      label: 'Instagram',
      display: 'instagram.com/rizkiramadhan881',
      href: profile.instagram,
      isExternal: true,
    },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-forest py-24 text-ivory on-dark lg:py-32">
      <svg aria-hidden="true" viewBox="0 0 600 400" className="pointer-events-none absolute -right-20 -bottom-10 w-[44rem] max-w-none opacity-[0.12]" fill="none">
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={i} d={`M-20 ${380 - i * 38} C 120 ${330 - i * 40}, 260 ${370 - i * 36}, 380 ${310 - i * 40} S 560 ${250 - i * 36}, 640 ${270 - i * 40}`} stroke="#B7C7B0" />
        ))}
      </svg>
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mx-auto max-w-3xl text-center" {...revealProps()}>
          <h2
            id="contact-title"
            className="font-serif text-[2.4rem] leading-[1.05] tracking-[-0.015em] text-ivory sm:text-5xl lg:text-[3.6rem]"
          >
            Let's Connect.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-sage-soft/90 max-w-2xl mx-auto">
            I'm always open to new opportunities, professional collaborations, and meaningful conversations across the agricultural industry. Feel free to reach out and let's connect.
          </p>
        </header>

        <div className="mt-14 max-w-3xl mx-auto" {...revealProps(100)}>
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-ivory/15 bg-ivory/15 shadow-xl">
            {contactRows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1.5 bg-forest px-6 py-4.5 sm:flex-row sm:items-center sm:justify-between transition-colors hover:bg-forest-deep/60"
              >
                <dt className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-sage font-semibold">
                  {row.label}
                </dt>
                <dd className="break-all text-ivory text-sm sm:text-base font-medium">
                  <a
                    href={row.href}
                    {...(row.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group inline-flex items-center gap-1.5 transition-colors hover:text-sage hover:underline underline-offset-4"
                  >
                    <span>{row.display}</span>
                    {row.isExternal && (
                      <svg
                        className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="btn-primary bg-ivory text-forest hover:bg-sage-soft shadow-md"
            >
              Send an Email
              <ArrowIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory/10 shadow-sm"
            >
              Connect on LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={profile.cvPath}
              download="Rizqi-Asyari-Ramadhan-CV.pdf"
              className="btn-ghost border-ivory/30 text-ivory hover:border-ivory hover:bg-ivory/10 shadow-sm"
            >
              <DownloadIcon />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-forest-deep text-sage-soft on-dark">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-xl text-ivory">{profile.name}</p>
          <p className="mt-1 text-sm">Agricultural Engineering</p>
        </div>
        <p className="text-sm text-sage-soft/80">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a href="#home" className="link-underline self-start text-sm font-semibold text-ivory md:self-auto">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
