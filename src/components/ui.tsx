import { useEffect, type CSSProperties, type ReactNode } from 'react'

/** Observes every [data-reveal] element once and marks it visible when it enters the viewport. */
export function useRevealOnScroll() {
  useEffect(() => {
    const markVisible = (el: Element) => {
      el.classList.add('is-visible')
    }

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach(markVisible)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            markVisible(entry.target)
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -4% 0px', threshold: 0.01 },
    )

    const observeUnobserved = () => {
      const elements = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)')
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        // If element is already in the viewport, reveal immediately
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          markVisible(el)
        } else {
          observer.observe(el)
        }
      })
    }

    observeUnobserved()

    // MutationObserver watches for DOM changes (e.g. Vite HMR re-renders after Ctrl+S)
    const mutationObserver = new MutationObserver(() => {
      observeUnobserved()
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])
}

export function revealProps(delayMs = 0) {
  return {
    'data-reveal': '',
    style: { '--reveal-delay': `${delayMs}ms` } as CSSProperties,
  }
}

const EXTENSION_CHAIN = ['.png', '.jpg', '.jpeg', '.webp']

/** Automatically tries alternative extensions (.png -> .jpg -> .jpeg -> .webp) before giving up */
export function handleImageFallback(
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  onFinalFail?: () => void,
) {
  const img = event.currentTarget
  const src = img.src
  const currentExt = EXTENSION_CHAIN.find((ext) => src.toLowerCase().endsWith(ext))

  const tried = (img.dataset.triedExts || '').split(',').filter(Boolean)
  if (currentExt && !tried.includes(currentExt)) {
    tried.push(currentExt)
  }

  const nextExt = EXTENSION_CHAIN.find((ext) => !tried.includes(ext))
  if (nextExt && currentExt) {
    tried.push(nextExt)
    img.dataset.triedExts = tried.join(',')
    img.src = src.replace(new RegExp(`\\${currentExt}$`, 'i'), nextExt)
    return
  }

  // All extensions tried, trigger final fail
  if (onFinalFail) {
    onFinalFail()
  } else {
    img.style.display = 'none'
  }
}

type SectionHeaderProps = {
  index: string
  label: string
  title: ReactNode
  intro?: ReactNode
  tone?: 'light' | 'dark'
}

/** Field-notebook style section heading: "§ 03 — Experience" above an editorial serif title. */
export function SectionHeader({ index, label, title, intro, tone = 'light' }: SectionHeaderProps) {
  const dark = tone === 'dark'
  return (
    <header className="grid gap-6 md:grid-cols-12 md:gap-8" {...revealProps()}>
      <p
        className={`eyebrow md:col-span-3 md:pt-3 ${dark ? 'text-sage' : 'text-terracotta-ink'}`}
      >
        <span aria-hidden="true">§ {index} — </span>
        {label}
      </p>
      <div className="md:col-span-9">
        <h2
          className={`font-serif text-[clamp(2rem,1.5rem+2.2vw,3.25rem)] leading-[1.08] tracking-[-0.015em] text-balance ${dark ? 'text-ivory' : 'text-forest'}`}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={`mt-5 max-w-2xl text-lg leading-relaxed ${dark ? 'text-sage-soft/85' : 'text-ink-soft'}`}
          >
            {intro}
          </p>
        )}
      </div>
    </header>
  )
}

export function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`btn-arrow h-4 w-4 ${className}`}
    >
      <path d="M4 10h11m-4-4.5L15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function DownloadIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={`h-4 w-4 ${className}`}>
      <path d="M10 3.5v9m-4-4 4 4 4-4M4 16h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PinIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={`h-4 w-4 ${className}`}>
      <path d="M10 17.5s5.5-5 5.5-9.5a5.5 5.5 0 1 0-11 0c0 4.5 5.5 9.5 5.5 9.5Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

export function Ruler({ className = '' }: { className?: string }) {
  return <div aria-hidden="true" className={`ruler ${className}`} />
}
