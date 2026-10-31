import { useState } from 'react'
import { education, profile } from '../content/profile'
import { FieldMap } from './diagrams'
import { ArrowIcon, DownloadIcon, SectionHeader, revealProps } from './ui'

// Data untuk Core Focus
const coreFocusItems = [
  {
    id: 'precision',
    title: 'Precision',
    description:
      'I value accuracy, efficiency, and attention to detail in solving engineering and operational problems. I strive to develop solutions that are measurable, optimized, and purposeful.',
    // Icon Target / Crosshair
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    ),
  },
  {
    id: 'data-driven',
    title: 'Data-driven',
    description:
      'I leverage data, analytical thinking, and quantitative metrics to optimize agricultural processes, improve resource allocation, and drive informed decisions.',
    // Icon Bar Chart
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4m5 4V8m5 8v-9" />
      </svg>
    ),
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    description:
      'I prioritize environmentally sound practices, resource conservation, and long-term viability in agricultural engineering and field operations.',
    // Icon Leaf
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9A9 9 0 0 0 3 12c0 4.97 4.03 9 9 9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9" />
      </svg>
    ),
  },
]

// Fades the photo's sides and bottom into the hero background.
const portraitMask =
  'linear-gradient(to bottom, #000 60%, transparent 100%), linear-gradient(to right, transparent 0%, #000 22%, #000 78%, transparent 100%)'

function Portrait() {
  if (profile.portrait) {
    return (
      <img
        src={profile.portrait}
        alt={`Portrait of ${profile.name}`}
        fetchPriority="high"
        className="relative mx-auto h-[26rem] w-auto max-w-full object-contain object-bottom sm:h-[32rem] lg:h-[40rem]"
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
    <div className="relative mx-auto flex h-[26rem] w-64 flex-col items-center justify-end rounded-3xl bg-sage-soft/20 text-ivory lg:h-[34rem]">
      <span className="eyebrow mb-5 text-[0.65rem]">Portrait placeholder</span>
    </div>
  )
}

const aboutPhotos = [
  {
    src: '/1.jpeg',
    alt: 'Rizqi in a city setting',
    box: 'left-[5%] top-[8%] h-[64%] w-[56%] z-10',
  },
  {
    src: '/2.jpeg',
    alt: 'Rizqi outdoors',
    box: 'left-[55%] top-[6%] h-[42%] w-[40%] z-20',
  },
  {
    src: '/3.jpeg',
    alt: 'Rizqi at an event',
    box: 'left-[46%] top-[45%] h-[50%] w-[49%] z-20',
  },
]

function AboutCollage() {
  return (
    <div
      className="relative aspect-[732/673] w-full overflow-hidden rounded-3xl bg-sage-soft shadow-[0_18px_40px_-24px_rgb(14_58_47_/_0.35)]"
      role="group"
      aria-label="Photo collage"
    >
      {aboutPhotos.map((photo) => (
        <div key={photo.src} className={`absolute overflow-hidden rounded-2xl bg-forest/10 shadow-md ${photo.box}`}>
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.style.visibility = 'hidden'
            }}
          />
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
      className="relative isolate overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(110deg, rgba(14,58,47,0.96) 0%, rgba(14,58,47,0.82) 48%, rgba(14,58,47,0.5) 100%)',
        }}
      />
      <FieldMap className="pointer-events-none absolute -right-24 top-10 hidden w-[52rem] max-w-none opacity-30 md:block lg:-right-10" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-7 lg:pt-6">
          <h1
            id="hero-title"
            className="mt-7 font-serif text-[clamp(2.75rem,1.6rem+5vw,5.5rem)] leading-[1.02] tracking-[-0.025em] text-ivory"
            {...revealProps(80)}
          >
            Engineering <em className="text-sage">Better</em>
            <br />
            Agriculture
          </h1>

          <p className="mt-8 max-w-xl text-[1.02rem] font-semibold leading-snug text-ivory sm:text-lg" {...revealProps(160)}>
            Agricultural Engineering Graduate
            <span aria-hidden="true" className="mx-2 text-sage">|</span>
            Smart Agriculture
            <span aria-hidden="true" className="mx-2 text-sage">|</span>
            Agricultural Operations
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ivory/85" {...revealProps(220)}>
            I combine agricultural engineering, field experience, and data-driven problem-solving to explore
            practical solutions for more efficient agricultural systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-3" {...revealProps(280)}>
            <a
              href="#projects"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-ivory px-5 py-3 text-[0.95rem] font-semibold text-forest shadow-md transition-colors duration-300 hover:bg-sage-soft"
            >
              Explore My Work
              <ArrowIcon />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-ivory/50 px-5 py-3 text-[0.95rem] font-semibold text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory/10"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:self-end" {...revealProps(200)}>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(60% 55% at 50% 38%, rgba(169,212,188,0.38) 0%, rgba(169,212,188,0) 70%)',
            }}
          />
          <Portrait />
        </div>
      </div>
    </section>
  )
}

export function About() {
  // State untuk menyimpan ID Core Focus yang dipilih (default: 'precision')
  const [activeFocus, setActiveFocus] = useState<string | null>('precision')

  const selectedFocusItem = coreFocusItems.find((item) => item.id === activeFocus)

  return (
    <section id="about" aria-labelledby="about-title" className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mx-auto max-w-3xl text-center" {...revealProps()}>
          <h2
            id="about-title"
            className="font-serif text-[clamp(2rem,1.4rem+2.6vw,3.25rem)] leading-[1.08] tracking-[-0.015em] text-balance text-forest"
          >
            Where Agriculture <em className="text-terracotta-ink">Meets</em> Engineering
          </h2>
        </header>

        <div className="mt-12 lg:mt-14 grid items-center gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5" {...revealProps(100)}>
            <AboutCollage />
          </div>

          <div className="space-y-6 md:col-span-7" {...revealProps(160)}>
            <p className="font-serif text-[clamp(1.25rem,1.1rem+0.8vw,1.6rem)] leading-[1.45] text-charcoal">
              I am an Agricultural Engineering graduate from Universitas Gadjah Mada, with an academic background in agricultural and biosystems engineering and an interest in practical, technology-driven agricultural solutions.
            </p>
            <p className="text-[1.0625rem] leading-[1.7] text-ink-soft max-w-[65ch]">
              Through academic projects and practical experience, I have explored agricultural production, controlled-environment cultivation, smart agriculture, IoT-based agricultural systems, and field research. My experience includes crop and environmental monitoring, field documentation, soil moisture sensor calibration, and coordinating daily plant factory operations.
            </p>
            <p className="text-[1.0625rem] leading-[1.7] text-ink-soft max-w-[65ch]">
              I am interested in applying engineering principles, analytical thinking, and problem-solving to improve agricultural productivity, operational efficiency, and sustainable plantation management.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#contact"
                className="btn-primary min-h-[44px] px-6 py-3"
              >
                Contact me
                <ArrowIcon />
              </a>
              <a
                href={profile.cvPath}
                download
                className="btn-ghost min-h-[44px] px-6 py-3"
              >
                View My Resume
                <DownloadIcon />
              </a>
            </div>
          </div>
        </div>

        {/* --- CORE FOCUS SECTION (Menggantikan Career Interests) --- */}
        <div className="mt-20 lg:mt-24 border-t border-rule pt-16" {...revealProps()}>
          <div className="text-center">
            <h3 className="font-serif text-[clamp(1.35rem,1.15rem+0.8vw,1.75rem)] text-forest sm:text-4xl">Core Focus</h3>
            <p className="mt-3 text-lg text-ink-soft">
              Three principles that guide every research effort and project I take on.
            </p>
            <p className="mt-2 text-xs font-mono uppercase tracking-wider text-ink-soft/70">
              Tap any one to read more about it.
            </p>
          </div>

          {/* 3 Tombol Lingkaran Interaktif */}
          <div className="mt-12 flex flex-wrap justify-center gap-10 sm:gap-16">
            {coreFocusItems.map((item) => {
              const isActive = activeFocus === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveFocus(isActive ? null : item.id)}
                  className="group flex flex-col items-center focus:outline-none"
                >
                  <div className="relative">
                    {/* Lingkaran Ikon */}
                    <div
                      className={`flex h-24 w-24 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? 'border-terracotta bg-terracotta text-ivory shadow-md scale-105'
                          : 'border-forest/20 bg-ivory text-forest group-hover:border-forest/40 group-hover:bg-sage-soft/30'
                      }`}
                    >
                      {item.icon}
                    </div>

                    {/* Badge (+) atau (X) */}
                    <div
                      className={`absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                        isActive
                          ? 'bg-forest text-ivory'
                          : 'bg-forest text-ivory group-hover:bg-terracotta'
                      }`}
                    >
                      {isActive ? '✕' : '+'}
                    </div>
                  </div>

                  {/* Judul di bawah lingkaran */}
                  <span
                    className={`mt-4 font-serif text-xl font-semibold transition-colors ${
                      isActive ? 'text-terracotta-ink' : 'text-forest group-hover:text-terracotta-ink'
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Kartu Penjelasan Putih yang Muncul saat Diklik */}
          {selectedFocusItem && (
            <div className="relative mx-auto mt-10 max-w-2xl rounded-3xl border border-rule bg-paper p-6 sm:p-8 shadow-[0_18px_40px_-24px_rgb(14_58_47_/_0.35)] transition-all duration-300">
              {/* Panah Indikator Atas */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 border-x-8 border-b-8 border-x-transparent border-b-paper" />

              <div className="flex items-center justify-between">
                <p className="eyebrow text-terracotta-ink">
                  Core Focus
                </p>
                <button
                  onClick={() => setActiveFocus(null)}
                  className="grid h-8 w-8 place-items-center rounded-full p-1 text-ink-soft hover:bg-sage-soft hover:text-forest transition-colors"
                  aria-label="Close details"
                >
                  ✕
                </button>
              </div>

              <h4 className="mt-2 font-serif text-3xl font-semibold text-forest">{selectedFocusItem.title}</h4>
              <p className="mt-4 text-[1.0625rem] leading-[1.7] text-ink-soft">{selectedFocusItem.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header Rata Tengah */}
        <header className="mx-auto max-w-3xl text-center" {...revealProps()}>
          <h2
            id="education-title"
            className="font-serif text-[clamp(2rem,1.4rem+2.6vw,3.25rem)] leading-[1.08] tracking-[-0.015em] text-forest"
          >
            Education
          </h2>
        </header>

        {/* Kartu Detail Pendidikan */}
        <article className="mt-12 lg:mt-14 grid overflow-hidden rounded-3xl border border-rule bg-ivory shadow-[0_18px_40px_-24px_rgb(14_58_47_/_0.35)] md:grid-cols-12" {...revealProps(100)}>
          <div className="graph-paper border-b border-rule p-7 sm:p-10 md:col-span-5 md:border-r md:border-b-0">
            <p className="eyebrow text-terracotta-ink">{education.period}</p>
            <h3 className="mt-5 font-serif text-[clamp(1.35rem,1.15rem+0.8vw,1.75rem)] leading-tight text-forest">{education.institution}</h3>
            <p className="mt-3 text-[1.0625rem] leading-[1.7] font-semibold text-charcoal">{education.degree}</p>
            <p className="mt-1 text-[1.0625rem] leading-[1.7] text-ink-soft">{education.department}</p>
            <dl className="mt-10 flex gap-10">
              <div>
                <dt className="eyebrow text-ink-soft">GPA</dt>
                <dd className="mt-1 font-serif text-3xl text-forest">{education.gpa}</dd>
              </div>
              <div>
                <dt className="eyebrow text-ink-soft">Graduation</dt>
                <dd className="mt-1 font-serif text-3xl text-forest">2026</dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-col justify-between gap-8 p-7 sm:p-10 md:col-span-7">
            <div>
              <p className="eyebrow text-ink-soft">Undergraduate thesis</p>
              <blockquote className="mt-5 border-l-2 border-terracotta pl-6 font-serif text-2xl leading-snug text-forest sm:text-[2rem] sm:leading-[1.2]">
                “{education.thesisTitle}.”
              </blockquote>
            </div>
            <p className="max-w-xl text-[1.0625rem] leading-[1.7] text-ink-soft">{education.thesisSummary}</p>
            <a href="#projects" className="link-underline inline-flex min-h-[44px] items-center self-start font-semibold text-forest">
              See related projects →
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}