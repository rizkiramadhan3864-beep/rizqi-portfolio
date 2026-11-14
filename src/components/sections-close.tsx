import { useState } from 'react'
import {
  careerClosingNote,
  careerPathways,
  isPlaceholder,
  profile,
  skillCategories,
} from '../content/profile'
import { ToolIcon } from './sections-work'
import { ArrowIcon, DownloadIcon, revealProps } from './ui'

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id)
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0]

  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center" {...revealProps()}>
          <p className="eyebrow text-forest">§ 05 — Technical Profile</p>
          <h2
            id="skills-title"
            className="mt-3 font-serif text-[2.4rem] leading-[1.05] tracking-tight text-forest sm:text-5xl lg:text-[3.6rem]"
          >
            Skills &amp; Expertise
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-soft mx-auto max-w-3xl">
            A multidisciplinary skill set combining agricultural science, IoT engineering, smart farming technologies, data-driven analysis, and operational coordination.
          </p>
        </header>

        {/* Category Tabs (4 Columns) */}
        <div
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
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
                className={`group flex flex-col items-center gap-3 rounded-2xl border p-6 text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                  isActive
                    ? 'border-forest bg-forest text-white shadow-xl ring-2 ring-lime/40 scale-[1.02]'
                    : 'border-forest/15 bg-white text-charcoal hover:border-forest/35 hover:shadow-md hover:scale-[1.01]'
                }`}
              >
                {/* Icon Container */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${
                    isActive ? 'bg-lime text-forest-deep shadow-xs' : 'bg-forest/5 text-forest group-hover:bg-forest/10'
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
                  <h3 className={`font-serif text-lg font-bold leading-snug ${isActive ? 'text-white' : 'text-forest'}`}>
                    {cat.label}
                  </h3>
                  <p className={`mt-1.5 text-xs leading-relaxed ${isActive ? 'text-sage-soft' : 'text-ink-soft'}`}>
                    {cat.description}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Skill Panel (Core Competencies & Tools) */}
        <div
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-label={active.label}
          className="mt-8 rounded-[2rem] border border-forest/12 bg-white p-8 sm:p-12 shadow-sm transition-all"
          {...revealProps(60)}
        >
          {/* Core Competencies */}
          <div className="text-center">
            <span className="eyebrow text-forest text-xs font-bold tracking-widest">
              Core Competencies
            </span>
            <h4 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-forest">
              Primary Capabilities in {active.label}
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-ink-soft">
              Demonstrated proficiency through field projects and academic research.
            </p>

            <ul className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto" aria-label="Core competencies">
              {active.competencies.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-forest px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-transform duration-200 hover:scale-105 hover:bg-forest-deep border border-forest/20"
                >
                  <span aria-hidden="true" className="text-lime text-xs leading-none shrink-0">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools applied */}
          {active.tools && active.tools.length > 0 && (
            <div className="mt-10 pt-8 border-t border-rule text-center">
              <span className="eyebrow text-forest text-xs font-bold tracking-widest">
                Software &amp; Engineering Tools
              </span>
              <ul className="mt-4 flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
                {active.tools.map((tool) => (
                  <li
                    key={tool}
                    className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-cream/60 px-4 py-2 text-xs sm:text-sm font-semibold text-forest shadow-2xs hover:bg-white hover:border-forest/40 transition-colors"
                  >
                    <ToolIcon name={tool} />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function CareerDirection() {
  return (
    <section id="career-direction" aria-labelledby="career-direction-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center" {...revealProps()}>
          <p className="eyebrow text-forest">§ 06 — Strategic Focus</p>
          <h2
            id="career-direction-title"
            className="mt-3 font-serif text-[2.4rem] leading-[1.05] tracking-tight text-forest sm:text-5xl lg:text-[3.6rem]"
          >
            Where I Want to Grow
          </h2>
          <p className="mt-3 text-base sm:text-lg leading-relaxed text-ink-soft text-balance mx-auto max-w-2xl">
            Target pathways across plantation agronomy, smart agricultural systems, and controlled-environment production.
          </p>
        </header>

        {/* 3 Career Pathways Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {careerPathways.map((pathway, i) => (
            <article
              key={pathway.id}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-forest/12 bg-cream/40 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-forest/35 hover:shadow-xl"
              {...revealProps(i * 100)}
            >
              {/* Image banner with gradient overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-forest/10">
                <img
                  src={pathway.image}
                  alt={pathway.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent opacity-60" />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur-md px-3 py-1 font-mono text-xs font-bold text-forest">
                  PATHWAY {pathway.number}
                </span>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-6 sm:p-8 bg-white">
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug text-forest transition-colors duration-200 group-hover:text-forest-deep">
                  {pathway.title.replace(/^\d+\.\s*/, '')}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {pathway.description}
                </p>

                <div className="mt-auto pt-6 border-t border-rule/70">
                  <p className="eyebrow text-[0.68rem] font-bold tracking-widest text-forest">
                    AREAS OF INTEREST
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {pathway.areasOfInterest.map((area) => (
                      <span
                        key={area}
                        className="rounded-lg border border-forest/15 bg-cream/60 px-2.5 py-1 text-xs font-semibold text-forest transition-colors hover:border-forest/35 hover:bg-white"
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

        {/* Closing Synthesis Callout */}
        <div
          className="relative mt-16 overflow-hidden rounded-[2rem] border border-forest/20 bg-forest p-8 text-center text-white sm:p-12 lg:p-16 shadow-xl"
          {...revealProps(150)}
        >
          {/* Subtle decorative wave */}
          <svg
            aria-hidden="true"
            viewBox="0 0 600 200"
            className="pointer-events-none absolute -right-16 -top-10 w-[32rem] max-w-none opacity-10 stroke-current text-lime"
            fill="none"
          >
            <path
              d="M0 100 C 150 20, 300 180, 450 60 S 600 140, 650 80"
              strokeWidth="2.5"
            />
          </svg>

          <div className="relative mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-3.5 py-1 text-xs font-mono font-semibold text-lime">
              <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
              <span>PROFESSIONAL DIRECTION</span>
            </div>
            <p className="mt-6 font-serif text-xl sm:text-2xl lg:text-[1.75rem] leading-relaxed text-white font-medium italic">
              "{careerClosingNote}"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Backward compatibility alias */
export const Research = CareerDirection

export function Contact() {
  const contactRows = [
    {
      label: 'Email Address',
      display: profile.email,
      href: `mailto:${profile.email}`,
      isExternal: false,
      hint: 'Direct inquiries & correspondence',
    },
    {
      label: 'Phone / WhatsApp',
      display: profile.phone,
      href: profile.whatsappUrl,
      isExternal: true,
      hint: 'Quick message & discussion',
    },
    {
      label: 'LinkedIn',
      display: 'linkedin.com/in/rizqi-asy-ari-ramadhan',
      href: profile.linkedin,
      isExternal: true,
      hint: 'Professional network & recommendations',
    },
    {
      label: 'Instagram',
      display: 'instagram.com/rizkiramadhan881',
      href: profile.instagram,
      isExternal: true,
      hint: 'Field updates & documentation',
    },
  ]

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-forest-deep py-24 text-white on-dark lg:py-32">
      {/* Decorative background contour waves */}
      <svg aria-hidden="true" viewBox="0 0 600 400" className="pointer-events-none absolute -right-20 -bottom-10 w-[48rem] max-w-none opacity-[0.10]" fill="none">
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={i} d={`M-20 ${380 - i * 38} C 120 ${330 - i * 40}, 260 ${370 - i * 36}, 380 ${310 - i * 40} S 560 ${250 - i * 36}, 640 ${270 - i * 40}`} stroke="#B9E769" strokeWidth="1.5" />
        ))}
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mx-auto max-w-3xl text-center" {...revealProps()}>
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-mono text-lime">
            <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
            <span>OPEN FOR OPPORTUNITIES</span>
          </div>
          <h2
            id="contact-title"
            className="mt-4 font-serif text-[2.6rem] leading-[1] tracking-tight text-white sm:text-5xl lg:text-[4rem]"
          >
            Let's <span className="italic text-lime font-normal">Connect.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-sage-soft/90 max-w-2xl mx-auto">
            I'm always open to new opportunities, professional collaborations, and meaningful conversations across the agricultural industry. Feel free to reach out and let's connect.
          </p>
        </header>

        <div className="mt-14 max-w-3xl mx-auto" {...revealProps(100)}>
          {/* Contact Details List */}
          <div className="rounded-[2rem] border border-white/15 bg-forest/40 backdrop-blur-xl p-3 sm:p-4 shadow-2xl divide-y divide-white/10">
            {contactRows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-2 p-4 sm:p-5 sm:flex-row sm:items-center sm:justify-between transition-colors hover:bg-white/5 rounded-xl"
              >
                <div>
                  <span className="font-mono text-[0.7rem] uppercase tracking-wider text-lime font-semibold">
                    {row.label}
                  </span>
                  <p className="text-xs text-sage-soft/70 mt-0.5">{row.hint}</p>
                </div>
                <div className="break-all text-white text-sm sm:text-base font-semibold">
                  <a
                    href={row.href}
                    {...(row.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group inline-flex items-center gap-2 transition-colors hover:text-lime underline-offset-4 hover:underline"
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
                </div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <a
              href={`mailto:${profile.email}`}
              className="btn-lime px-6 py-3.5 text-sm font-bold shadow-lg"
            >
              <span>Send an Email</span>
              <ArrowIcon />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <span>Connect on LinkedIn</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={profile.cvPath}
              download="Rizqi-Asyari-Ramadhan-CV.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <DownloadIcon className="h-4 w-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#0B1E19] text-sage-soft border-t border-white/10 py-12 on-dark">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-xl font-bold text-white">{profile.name}</p>
          <p className="mt-1 text-xs sm:text-sm text-sage-soft/80">
            Agricultural Engineering · Universitas Gadjah Mada
          </p>
        </div>
        <p className="text-xs sm:text-sm text-sage-soft/70">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <a href="#home" className="link-underline self-start text-xs sm:text-sm font-semibold text-white md:self-auto hover:text-lime transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
