import { useState } from 'react'
import { education, profile } from '../content/profile'
import { FieldMap } from './diagrams'
import { ArrowIcon, DownloadIcon, revealProps } from './ui'

// Data untuk Core Focus
const coreFocusItems = [
  {
    id: 'precision',
    title: 'Precision',
    tagline: 'Accuracy & Measurable Optimization',
    description:
      'I value accuracy, efficiency, and attention to detail in solving engineering and operational problems. I strive to develop solutions that are measurable, optimized, and purposeful.',
    // Icon Target / Crosshair
    icon: (
      <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    ),
  },
  {
    id: 'data-driven',
    title: 'Data-driven',
    tagline: 'Quantitative Analysis & Decision Making',
    description:
      'I leverage data, analytical thinking, and quantitative metrics to optimize agricultural processes, improve resource allocation, and drive informed decisions.',
    // Icon Bar Chart
    icon: (
      <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4m5 4V8m5 8v-9" />
      </svg>
    ),
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    tagline: 'Long-term Resource Stewardship',
    description:
      'I prioritize environmentally sound practices, resource conservation, and long-term viability in agricultural engineering and field operations.',
    // Icon Leaf
    icon: (
      <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9A9 9 0 0 0 3 12c0 4.97 4.03 9 9 9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9" />
      </svg>
    ),
  },
]

// Fades the photo's sides and bottom into the hero background.
const portraitMask =
  'linear-gradient(to bottom, #000 65%, transparent 100%), linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)'

function Portrait() {
  if (profile.portrait) {
    return (
      <img
        src={profile.portrait}
        alt={`Portrait of ${profile.name}`}
        fetchPriority="high"
        className="relative mx-auto h-[28rem] w-auto max-w-full object-contain object-bottom sm:h-[34rem] lg:h-[42rem]"
        style={{
          maskImage: portraitMask,
          WebkitMaskImage: portraitMask,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      />
    )
  }
  return (
    <div className="relative mx-auto flex h-[28rem] w-64 flex-col items-center justify-end rounded-3xl bg-forest/20 text-cream lg:h-[36rem]">
      <span className="eyebrow mb-5 text-[0.65rem]">Portrait placeholder</span>
    </div>
  )
}

const aboutPhotos = [
  {
    src: '/1.jpeg',
    alt: 'Rizqi in a city setting',
    plate: 'PLATE 01 // FIELDWORK',
    box: 'left-[4%] top-[12%] h-[60%] w-[52%] z-10 rotate-[-2deg]',
  },
  {
    src: '/2.jpeg',
    alt: 'Rizqi outdoors',
    plate: 'PLATE 02 // AGRI-TECH',
    box: 'left-[50%] top-[4%] h-[38%] w-[44%] z-20 rotate-[3deg]',
  },
  {
    src: '/3.jpeg',
    alt: 'Rizqi at an event',
    plate: 'PLATE 03 // DISSEMINATION',
    box: 'left-[44%] top-[46%] h-[48%] w-[52%] z-30 rotate-[-1deg]',
  },
]

function AboutCollage() {
  return (
    <div
      className="relative aspect-[732/680] w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-sage/40 via-cream to-sage-soft/60 p-4 border border-forest/10 shadow-lg"
      role="group"
      aria-label="Photo collage"
    >
      {/* Background field watermark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full opacity-10 text-forest pointer-events-none stroke-current"
        fill="none"
        strokeWidth="0.5"
      >
        <circle cx="50" cy="50" r="40" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="25" />
        <path d="M0 50h100 M50 0v100" />
      </svg>

      {aboutPhotos.map((photo) => (
        <div
          key={photo.src}
          className={`absolute overflow-hidden rounded-xl bg-white p-2 sm:p-2.5 shadow-[0_12px_28px_rgba(16,44,38,0.14)] border border-forest/10 transition-transform duration-500 hover:scale-[1.03] hover:z-40 ${photo.box}`}
        >
          <div className="relative h-[82%] w-full overflow-hidden rounded-lg bg-forest/5">
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover grayscale contrast-[1.05]"
              onError={(event) => {
                event.currentTarget.style.visibility = 'hidden'
              }}
            />
          </div>
          <div className="pt-2 px-1 flex items-center justify-between">
            <span className="font-mono text-[0.62rem] sm:text-[0.66rem] font-medium tracking-wider text-forest uppercase">
              {photo.plate}
            </span>
            <span className="h-1 w-1 rounded-full bg-forest/40" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-forest-deep text-white pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24"
    >
      {/* Background image & gradient overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center opacity-25 mix-blend-luminosity"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-forest-deep/95 via-forest/90 to-forest-deep"
      />
      {/* Ambient radial lighting in Fresh Lime */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 -z-10 h-[36rem] w-[36rem] rounded-full bg-lime/10 blur-[120px]"
      />

      {/* FieldMap contour lines */}
      <FieldMap className="pointer-events-none absolute -right-20 top-12 hidden w-[54rem] max-w-none opacity-25 md:block lg:-right-8" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        {/* Left Column: Editorial Headline & Meta */}
        <div className="lg:col-span-7 lg:pt-4">
          {/* Status pill badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1 text-xs font-mono text-lime backdrop-blur-md" {...revealProps(40)}>
            <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
            <span className="tracking-wide">INDONESIA · RESEARCH &amp; FIELD OPERATIONS</span>
          </div>

          <h1
            id="hero-title"
            className="mt-6 font-serif text-[3.2rem] leading-[0.94] tracking-tight text-white sm:text-6xl lg:text-[5.4rem]"
            {...revealProps(80)}
          >
            Engineering{' '}
            <span className="relative inline-block">
              <em className="font-serif italic font-normal text-lime">Better</em>
              <svg aria-hidden="true" viewBox="0 0 160 12" fill="none" className="absolute -bottom-1.5 left-0 w-full text-lime/80 h-2">
                <path d="M2 9 C 45 2, 115 3, 158 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            Agriculture
          </h1>

          <p className="mt-7 flex flex-wrap items-center font-mono text-xs sm:text-sm tracking-wide text-sage-soft uppercase" {...revealProps(160)}>
            <span>Agricultural Engineering Graduate</span>
            <span aria-hidden="true" className="mx-2 text-lime font-bold">/</span>
            <span>Smart Agriculture</span>
            <span aria-hidden="true" className="mx-2 text-lime font-bold">/</span>
            <span>Agricultural Operations</span>
          </p>

          <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-sage-soft/90" {...revealProps(220)}>
            I combine agricultural engineering, field experience, and data-driven problem-solving to explore
            practical solutions for more efficient agricultural systems.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3.5" {...revealProps(280)}>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-bold text-forest-deep transition-all duration-300 hover:brightness-105 shadow-md hover:shadow-lime/20"
            >
              <span>Explore My Work</span>
              <ArrowIcon />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <span>Get in Touch</span>
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/30 bg-forest/40 px-5 py-3.5 text-sm font-semibold text-sage-soft transition-all duration-300 hover:border-lime/40 hover:text-white"
            >
              <DownloadIcon className="h-4 w-4" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Technical Telemetry Row */}
          <div className="mt-12 pt-8 border-t border-forest/40 grid grid-cols-2 sm:grid-cols-3 gap-4" {...revealProps(320)}>
            <div>
              <span className="block font-mono text-[0.68rem] uppercase tracking-wider text-sage-soft/70">Facility Capacity</span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-white">480 Plants</span>
            </div>
            <div>
              <span className="block font-mono text-[0.68rem] uppercase tracking-wider text-sage-soft/70">Sensor Calibration R²</span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-lime">0.9437</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="block font-mono text-[0.68rem] uppercase tracking-wider text-sage-soft/70">Est. Water Saving*</span>
              <span className="font-serif text-xl sm:text-2xl font-bold text-white">16.91%</span>
            </div>
          </div>
        </div>

        {/* Right Column: Layered Portrait Composition */}
        <div className="relative lg:col-span-5 lg:self-end mt-4 lg:mt-0" {...revealProps(200)}>
          {/* Background Decorative Rings */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 rounded-full border border-forest/30 opacity-60"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 rounded-full border border-lime/10 opacity-40"
          />

          {/* Technical coordinates badge */}
          <div className="absolute top-2 right-2 z-20 hidden sm:flex items-center gap-2 rounded-full bg-forest-deep/80 border border-forest/40 px-3 py-1 text-[0.68rem] font-mono text-sage-soft backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            <span>7°46'S · 110°22'E // UGM</span>
          </div>

          <Portrait />

          {/* Floating Key Metrics Pill */}
          <div className="absolute bottom-4 left-2 right-2 sm:left-4 sm:right-auto z-20 rounded-2xl border border-forest/40 bg-forest-deep/90 p-3.5 shadow-xl backdrop-blur-md">
            <p className="eyebrow text-lime text-[0.65rem]">Field-Tested Engineering</p>
            <p className="mt-1 font-serif text-sm font-semibold text-white">
              Smart Sprinkler &amp; Fertigation Systems
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function About() {
  const [activeFocus, setActiveFocus] = useState<string | null>('precision')
  const selectedFocusItem = coreFocusItems.find((item) => item.id === activeFocus)

  return (
    <section id="about" aria-labelledby="about-title" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center" {...revealProps()}>
          <p className="eyebrow text-forest">§ 01 — About Rizqi</p>
          <h2
            id="about-title"
            className="mt-3 font-serif text-[2.4rem] leading-[1.05] tracking-tight text-forest sm:text-5xl lg:text-[3.6rem]"
          >
            Where Agriculture <em className="italic font-normal text-forest-deep">Meets</em> Engineering
          </h2>
        </header>

        {/* Asymmetric Content Grid */}
        <div className="mt-16 grid items-center gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5" {...revealProps(100)}>
            <AboutCollage />
          </div>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-ink-soft md:col-span-7" {...revealProps(160)}>
            <p className="font-serif text-xl sm:text-2xl leading-snug text-charcoal">
              I am an Agricultural Engineering graduate from Universitas Gadjah Mada, with an academic background in agricultural and biosystems engineering and an interest in practical, technology-driven agricultural solutions.
            </p>
            <p>
              Through academic projects and practical experience, I have explored agricultural production, controlled-environment cultivation, smart agriculture, IoT-based agricultural systems, and field research. My experience includes crop and environmental monitoring, field documentation, soil moisture sensor calibration, and coordinating daily plant factory operations.
            </p>
            <p>
              I am interested in applying engineering principles, analytical thinking, and problem-solving to improve agricultural productivity, operational efficiency, and sustainable plantation management.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#contact"
                className="btn-primary"
              >
                <span>Contact me</span>
                <ArrowIcon />
              </a>
              <a
                href={profile.cvPath}
                download
                className="btn-ghost"
              >
                <span>View My Resume</span>
                <DownloadIcon />
              </a>
            </div>
          </div>
        </div>

        {/* --- CORE FOCUS SECTION --- */}
        <div className="mt-24 border-t border-rule pt-16" {...revealProps()}>
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow text-forest">Guiding Principles</p>
            <h3 className="mt-2 font-serif text-3xl text-forest sm:text-4xl">Core Focus</h3>
            <p className="mt-3 text-base text-ink-soft">
              Three principles that guide every research effort and project I take on. Tap any card to read details.
            </p>
          </div>

          {/* 3 Interactive Cards */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {coreFocusItems.map((item) => {
              const isActive = activeFocus === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveFocus(isActive ? null : item.id)}
                  type="button"
                  className={`group relative flex flex-col rounded-2xl border p-7 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest ${
                    isActive
                      ? 'border-forest bg-forest text-white shadow-xl scale-[1.02]'
                      : 'border-forest/15 bg-white text-charcoal hover:border-forest/30 hover:shadow-md hover:scale-[1.01]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                        isActive
                          ? 'bg-lime text-forest-deep'
                          : 'bg-forest/5 text-forest group-hover:bg-forest/10'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span
                      className={`grid h-7 w-7 place-items-center rounded-full text-xs font-bold transition-colors ${
                        isActive
                          ? 'bg-lime text-forest-deep'
                          : 'bg-forest/10 text-forest group-hover:bg-forest group-hover:text-white'
                      }`}
                    >
                      {isActive ? '✓' : '+'}
                    </span>
                  </div>

                  <h4 className={`mt-5 font-serif text-2xl font-bold ${isActive ? 'text-white' : 'text-forest'}`}>
                    {item.title}
                  </h4>
                  <p className={`mt-1 font-mono text-xs uppercase tracking-wider ${isActive ? 'text-lime' : 'text-ink-soft'}`}>
                    {item.tagline}
                  </p>
                  <p className={`mt-3 text-sm leading-relaxed ${isActive ? 'text-sage-soft' : 'text-ink-soft'}`}>
                    {item.description}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <header className="mx-auto max-w-3xl text-center" {...revealProps()}>
          <p className="eyebrow text-forest">§ 02 — Academic Foundation</p>
          <h2
            id="education-title"
            className="mt-3 font-serif text-[2.4rem] leading-[1.05] tracking-tight text-forest sm:text-5xl lg:text-[3.6rem]"
          >
            Education &amp; Research
          </h2>
          <p className="mt-3 text-base text-ink-soft">
            Formal training in Agricultural and Biosystems Engineering at Universitas Gadjah Mada.
          </p>
        </header>

        {/* Education Credential Card */}
        <article className="mt-14 grid overflow-hidden rounded-[2rem] border border-forest/15 bg-cream/60 shadow-lg md:grid-cols-12" {...revealProps(100)}>
          {/* Left panel: Degree, Institution, Metrics */}
          <div className="graph-paper border-b border-forest/10 p-8 sm:p-10 md:col-span-5 md:border-r md:border-b-0 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-forest/5 px-3 py-1 font-mono text-xs font-semibold text-forest">
                <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                <span>{education.period}</span>
              </div>
              <h3 className="mt-5 font-serif text-3xl sm:text-4xl leading-tight text-forest font-bold">
                {education.institution}
              </h3>
              <p className="mt-2 text-lg font-semibold text-charcoal">{education.degree}</p>
              <p className="mt-1 text-sm text-ink-soft">{education.department}</p>
            </div>

            <dl className="mt-8 pt-6 border-t border-forest/10 flex gap-8">
              <div>
                <dt className="eyebrow text-[0.65rem] text-ink-soft">Cumulative GPA</dt>
                <dd className="mt-1 font-serif text-3xl font-bold text-forest">{education.gpa}</dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.65rem] text-ink-soft">Graduation</dt>
                <dd className="mt-1 font-serif text-3xl font-bold text-forest">2026</dd>
              </div>
            </dl>
          </div>

          {/* Right panel: Thesis highlight */}
          <div className="flex flex-col justify-between gap-6 p-8 sm:p-10 md:col-span-7 bg-white">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-coral" />
                <p className="eyebrow text-forest">Undergraduate Thesis Research</p>
              </div>
              <blockquote className="mt-4 border-l-4 border-forest pl-6 font-serif text-xl sm:text-2xl leading-snug text-forest sm:leading-[1.25]">
                “{education.thesisTitle}.”
              </blockquote>
              <p className="mt-5 leading-relaxed text-ink-soft text-base">
                {education.thesisSummary}
              </p>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-rule">
              <a href="#projects" className="link-underline font-semibold text-sm text-forest inline-flex items-center gap-2">
                <span>See related projects</span>
                <ArrowIcon className="h-3.5 w-3.5" />
              </a>
              <span className="font-mono text-xs text-ink-soft">
                UGM Faculty of Agricultural Technology
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
