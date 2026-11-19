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

// Fades the photo's bottom smoothly into the hero background.
const portraitMask = 'linear-gradient(to bottom, #000 80%, transparent 100%)'

function Portrait() {
  if (profile.portrait) {
    return (
      <img
        src={profile.portrait}
        alt={`Portrait of ${profile.name}`}
        fetchPriority="high"
        className="relative mx-auto h-[26rem] w-auto max-w-full object-contain object-bottom sm:h-[32rem] lg:h-[39rem]"
        style={{
          maskImage: portraitMask,
          WebkitMaskImage: portraitMask,
        }}
      />
    )
  }
  return (
    <div className="relative mx-auto flex h-[26rem] w-64 flex-col items-center justify-end rounded-3xl bg-sage-soft/30 text-charcoal lg:h-[34rem]">
      <span className="eyebrow mb-5 text-[0.65rem]">Portrait placeholder</span>
    </div>
  )
}

const grayscale = false

const aboutPhotos = [
  {
    src: '/1.jpeg',
    alt: 'Rizqi in a city setting',
    box: 'left-[10%] top-[15.5%] h-[53.5%] w-[49%] z-10',
  },
  {
    src: '/2.jpeg',
    alt: 'Rizqi outdoors',
    box: 'left-[53.5%] top-[6.8%] h-[32%] w-[29.5%] z-20',
  },
  {
    src: '/3.jpeg',
    alt: 'Rizqi at an event',
    box: 'left-[49%] top-[47.8%] h-[43%] w-[39.3%] z-20',
  },
]

function AboutCollage() {
  return (
    <div
      className="relative aspect-[732/673] w-full overflow-hidden rounded-3xl bg-sage-soft/70"
      role="group"
      aria-label="Photo collage"
    >
      {aboutPhotos.map((photo) => (
        <div key={photo.src} className={`absolute overflow-hidden bg-forest/10 shadow-sm ${photo.box}`}>
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className={`h-full w-full object-cover ${grayscale ? 'grayscale' : ''}`}
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
      className="relative isolate overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20"
    >
      {/* Background cornfield photo in warm natural light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      />
      {/* Luminous light-cream gradient overlay for contrast while preserving cornfield scenery */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#F6F4EC]/96 via-[#F6F4EC]/88 to-[#F6F4EC]/35"
      />
      {/* Subtle warm sun glow in upper-middle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/3 -z-10 h-80 w-96 rounded-full bg-amber-100/50 blur-3xl"
      />

      {/* FieldMap contour lines with sensor nodes (SM-01) */}
      <FieldMap className="pointer-events-none absolute -right-16 top-4 hidden w-[56rem] max-w-none opacity-45 md:block lg:right-6" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-7 lg:pt-4">
          <h1
            id="hero-title"
            className="font-sans text-[3.2rem] font-black leading-[0.92] tracking-[-0.035em] text-[#15221B] sm:text-6xl lg:text-[5.4rem]"
            {...revealProps(80)}
          >
            Engineering
            <br />
            <span className="font-serif italic font-normal text-[#E05A36] tracking-tight">Better</span>
            <br />
            Agriculture
          </h1>

          {/* Subtitle / Eyebrow with high-contrast text and terracotta slashes */}
          <p
            className="mt-6 flex flex-wrap items-center font-mono text-xs sm:text-[0.82rem] font-bold tracking-wider text-[#1F2B24] uppercase"
            {...revealProps(160)}
          >
            <span>Agricultural Engineering Graduate</span>
            <span aria-hidden="true" className="mx-2.5 text-[#E05A36] font-extrabold">/</span>
            <span>Smart Agriculture</span>
            <span aria-hidden="true" className="mx-2.5 text-[#E05A36] font-extrabold">/</span>
            <span>Agricultural Operations</span>
          </p>

          {/* Clear, readable paragraph with solid contrast */}
          <p
            className="mt-4 max-w-xl text-base sm:text-[1.08rem] font-medium leading-relaxed text-[#252B27]"
            {...revealProps(220)}
          >
            I combine agricultural engineering, field experience, and data-driven problem-solving to explore
            practical solutions for more efficient agricultural systems.
          </p>

          {/* 3 Action Buttons matching the reference image */}
          <div className="mt-8 flex flex-wrap items-center gap-3" {...revealProps(280)}>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E05A36] px-6 py-3.5 text-sm sm:text-[0.95rem] font-semibold text-white shadow-md transition-all duration-300 hover:brightness-110 active:scale-95"
            >
              <span>Explore My Work</span>
              <ArrowIcon />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#252B27]/25 bg-white/80 px-6 py-3.5 text-sm sm:text-[0.95rem] font-semibold text-[#252B27] backdrop-blur-sm shadow-xs transition-all duration-300 hover:bg-white hover:border-[#252B27]/40 active:scale-95"
            >
              <span>Get in Touch</span>
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#37453F]/90 px-5 py-3.5 text-sm sm:text-[0.95rem] font-semibold text-white shadow-xs backdrop-blur-sm transition-all duration-300 hover:bg-[#252B27] active:scale-95"
            >
              <DownloadIcon className="h-4 w-4" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Right column: Natural-light portrait */}
        <div className="relative lg:col-span-5 lg:self-end" {...revealProps(200)}>
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
    <section id="about" aria-labelledby="about-title" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <header className="mx-auto max-w-3xl text-center" {...revealProps()}>
          <h2
            id="about-title"
            className="font-serif text-[2.4rem] leading-[1.05] tracking-[-0.015em] text-balance text-forest sm:text-5xl lg:text-[3.6rem]"
          >
            Where Agriculture <em className="text-terracotta-ink">Meets</em> Engineering
          </h2>
        </header>

        <div className="mt-14 grid items-center gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5" {...revealProps(100)}>
            <AboutCollage />
          </div>

          <div className="space-y-7 md:col-span-7" {...revealProps(160)}>
            <p className="font-sans text-lg sm:text-xl lg:text-[1.38rem] font-bold leading-relaxed sm:leading-[1.7] text-justify text-[#16201A]">
              Agricultural Engineering graduate from Universitas Gadjah Mada with experience in crop production, agricultural operations, technical monitoring, and data analysis. Experienced in IoT-based irrigation systems, sensor testing and calibration, data analysis, and environmental monitoring across plant factory and smart greenhouse environments. Interested in applying agricultural technology, analytical problem-solving, and process improvement to support efficient and sustainable operations.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-3 text-[0.95rem] font-semibold text-white shadow-xs transition-all duration-300 hover:bg-forest-deep active:scale-95"
              >
                <span>Contact me</span>
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.cvPath}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-7 py-3 text-[0.95rem] font-semibold text-forest shadow-xs transition-all duration-300 hover:border-forest hover:bg-neutral-50 active:scale-95"
              >
                <span>View My Resume</span>
                <DownloadIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* --- CORE FOCUS SECTION (Menggantikan Career Interests) --- */}
        <div className="mt-24 border-t border-rule pt-16" {...revealProps()}>
          <div className="text-center">
            <h3 className="font-serif text-4xl text-forest sm:text-5xl">Core Focus</h3>
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
                      isActive ? 'text-terracotta' : 'text-forest group-hover:text-terracotta'
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
            <div className="relative mx-auto mt-10 max-w-2xl rounded-2xl border border-forest/15 bg-ivory p-6 sm:p-8 shadow-sm transition-all duration-300">
              {/* Panah Indikator Atas */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 border-x-8 border-b-8 border-x-transparent border-b-ivory" />

              <div className="flex items-center justify-between">
                <p className="eyebrow text-terracotta text-[0.7rem] uppercase tracking-widest font-semibold">
                  Core Focus
                </p>
                <button
                  onClick={() => setActiveFocus(null)}
                  className="p-1 text-ink-soft hover:text-forest transition-colors"
                  aria-label="Close details"
                >
                  ✕
                </button>
              </div>

              <h4 className="mt-2 font-serif text-3xl font-semibold text-forest">{selectedFocusItem.title}</h4>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">{selectedFocusItem.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header Rata Tengah */}
        <header className="mx-auto max-w-3xl text-center" {...revealProps()}>
          <h2
            id="education-title"
            className="font-serif text-[2.4rem] leading-[1.05] tracking-[-0.015em] text-forest sm:text-5xl lg:text-[3.6rem]"
          >
            Education
          </h2>
        </header>

        {/* Kartu Detail Pendidikan */}
        <article
          className="mt-14 grid overflow-hidden rounded-2xl border border-forest/15 bg-white shadow-sm md:grid-cols-12 lg:rounded-3xl"
          {...revealProps(100)}
        >
          {/* Kolom Kiri: Forest Green Theme */}
          <div className="flex flex-col justify-between bg-[#183D32] p-8 sm:p-10 lg:p-12 md:col-span-5 text-ivory">
            <div>
              {/* Dot & Periode */}
              <div className="flex items-center gap-2 font-mono text-xs tracking-wider text-sage uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                <span>{education.period}</span>
              </div>

              {/* Nama Universitas */}
              <h3 className="mt-6 font-serif text-3xl font-bold leading-tight text-ivory sm:text-4xl lg:text-[2.6rem]">
                {education.institution}
              </h3>

              {/* Gelar & Jurusan */}
              <p className="mt-4 font-sans text-base font-semibold text-ivory/95 sm:text-lg">
                {education.degree}
              </p>
              <p className="mt-1 font-sans text-sm text-sage sm:text-base">
                {education.department}
              </p>
            </div>

            {/* Statistik Bawah: GPA & Kelulusan */}
            <div className="mt-12 grid grid-cols-2 gap-6 pt-6 sm:mt-16">
              <div>
                <p className="font-mono text-[0.68rem] font-medium tracking-wider text-sage uppercase">
                  CUMULATIVE GPA
                </p>
                <p className="mt-1.5 font-sans text-2xl font-bold text-ivory sm:text-3xl">
                  {education.gpa}
                </p>
              </div>
              <div>
                <p className="font-mono text-[0.68rem] font-medium tracking-wider text-sage uppercase">
                  GRADUATION
                </p>
                <p className="mt-1.5 font-sans text-2xl font-bold text-ivory sm:text-3xl">
                  2026
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: White Theme */}
          <div className="flex flex-col justify-between bg-white p-8 sm:p-10 lg:p-12 md:col-span-7">
            <div>
              {/* Tag Header Thesis */}
              <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-[#252B27]/80 uppercase">
                <span className="h-2 w-2 rounded-full bg-[#E05A36]" />
                <span>UNDERGRADUATE THESIS RESEARCH</span>
              </div>

              {/* Judul Skripsi dengan Aksen Border Oranye/Terracotta */}
              <div className="mt-6 border-l-4 border-[#E05A36] pl-4 sm:pl-5">
                <h4 className="font-sans text-xl font-bold leading-snug tracking-tight text-[#18221D] sm:text-2xl">
                  “{education.thesisTitle}.”
                </h4>
              </div>

              {/* Ringkasan Skripsi */}
              <p className="mt-5 font-sans text-sm leading-relaxed text-[#4F5751] sm:text-base">
                {education.thesisSummary}
              </p>
            </div>

            {/* Footer Kolom Kanan: Link ke Proyek & Nama Fakultas */}
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-100 sm:border-0 sm:pt-0">
              <a
                href="#project-irrigation"
                className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-[#E05A36] transition-colors hover:text-[#C74A27] sm:text-base"
              >
                <span>See related projects</span>
                <span aria-hidden="true">→</span>
              </a>
              <span className="font-mono text-xs text-[#4F5751]/80 tracking-wide">
                UGM Faculty of Agricultural Technology
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}