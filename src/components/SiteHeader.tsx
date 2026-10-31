import { useEffect, useRef, useState } from 'react'
import { navItems, profile } from '../content/profile'
import { DownloadIcon } from './ui'

export function SiteHeader() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // Detect the active section and header scroll state.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-30% 0px -65% 0px' },
    )

    sections.forEach((section) => observer.observe(section))

    const onScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Handle mobile navigation and restore the page scroll state.
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    menuRef.current?.querySelector<HTMLElement>('a')?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        open
          ? 'border-forest-deep bg-forest text-ivory'
          : scrolled
            ? 'border-rule bg-ivory/95 text-forest shadow-[0_4px_24px_rgb(14_58_47/0.06)] backdrop-blur-md'
            : 'border-transparent bg-transparent text-ivory'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-ivory focus-visible:ring-2 focus-visible:ring-terracotta-ink focus-visible:ring-offset-3"
      >
        Skip to content
      </a>

      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10"
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-ink focus-visible:ring-offset-3 rounded-full"
          aria-label={`${profile.shortName} - Home`}
        >
          <span
            aria-hidden="true"
            className={`grid h-9 w-9 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-[-8deg] ${
              scrolled && !open
                ? 'bg-forest text-ivory ring-1 ring-forest/20'
                : 'bg-forest-deep/80 text-ivory ring-1 ring-sage/50'
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-[1.125rem] w-[1.125rem]" fill="none">
              <path d="M12 20V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M12 13c-3.6 0-5.5-2.3-5.5-5.5 3.6 0 5.5 2.3 5.5 5.5Z" fill="#A9D4BC" />
              <path d="M12 10.5c0-3.2 2-5 5.5-5 0 3.2-2 5-5.5 5Z" fill="#2BA3B5" />
            </svg>
          </span>

          <span
            className={`text-base font-semibold tracking-tight transition-colors duration-200 sm:text-[1.05rem] ${
              scrolled && !open ? 'text-forest' : 'text-ivory'
            }`}
          >
            {profile.shortName}
          </span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => {
            const isActive = active === item.id

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative inline-flex min-h-[44px] items-center py-2 text-sm font-medium transition-colors duration-200 xl:text-[0.92rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-ink focus-visible:ring-offset-3 rounded-md ${
                    scrolled
                      ? isActive
                        ? 'text-forest'
                        : 'text-ink-soft hover:text-forest'
                      : isActive
                        ? 'text-ivory'
                        : 'text-ivory/80 hover:text-ivory'
                  }`}
                >
                  {item.label}

                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-1.5 h-[2px] origin-left rounded-full bg-terracotta transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={profile.cvPath}
            download
            className={`hidden min-h-[44px] items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-ink focus-visible:ring-offset-3 sm:inline-flex ${
              scrolled && !open
                ? 'bg-forest text-ivory hover:bg-forest-deep shadow-sm'
                : 'bg-ivory text-forest hover:bg-sage-soft shadow-md'
            }`}
          >
            <DownloadIcon />
            <span>Download CV</span>
          </a>

          <button
            ref={toggleRef}
            type="button"
            className={`grid h-11 w-11 place-items-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-ink focus-visible:ring-offset-3 lg:hidden ${
              scrolled && !open
                ? 'border-forest/20 text-forest hover:bg-forest/5'
                : 'border-ivory/30 text-ivory hover:bg-ivory/10'
            }`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
                  open ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className="graph-paper h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-forest-deep bg-forest text-ivory px-5 pb-10 pt-6 sm:px-8 lg:hidden"
      >
        <p className="eyebrow text-sage">Explore</p>

        <ul className="mt-4 divide-y divide-forest-deep/60 border-y border-forest-deep/60">
          {navItems.map((item, index) => {
            const isActive = active === item.id

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  aria-current={isActive ? 'location' : undefined}
                  className={`flex min-h-[44px] items-baseline justify-between py-4 font-serif text-3xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-ink focus-visible:ring-offset-3 ${
                    isActive ? 'text-terracotta' : 'text-ivory hover:text-sage'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-sage/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href={profile.cvPath}
          download
          className="btn-primary mt-8 flex min-h-[44px] w-full items-center justify-center gap-2 bg-ivory text-forest hover:bg-sage-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-ink focus-visible:ring-offset-3"
          onClick={closeMenu}
        >
          <DownloadIcon />
          Download CV
        </a>
      </div>
    </header>
  )
}