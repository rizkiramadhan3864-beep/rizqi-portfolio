import { useEffect, useRef, useState } from 'react'
import { navItems, profile } from '../content/profile'

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
      { rootMargin: '-25% 0px -60% 0px' },
    )

    sections.forEach((section) => observer.observe(section))

    const onScroll = () => {
      setScrolled(window.scrollY > 15)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Handle mobile navigation accessibility
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
    <header className="fixed inset-x-0 top-0 z-50 bg-[#252C29] border-b border-white/10 shadow-lg transition-all duration-300">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#E66B45] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-18 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3"
          aria-label={`${profile.shortName} - Home`}
        >
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-full bg-forest text-white transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105 shadow-xs border border-white/15"
          >
            <svg viewBox="0 0 24 24" className="h-[1.15rem] w-[1.15rem]" fill="none">
              <path d="M12 20V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M12 13c-3.6 0-5.5-2.3-5.5-5.5 3.6 0 5.5 2.3 5.5 5.5Z" fill="#DCE7D5" />
              <path d="M12 10.5c0-3.2 2-5 5.5-5 0 3.2-2 5-5.5 5Z" fill="#E66B45" />
            </svg>
          </span>

          <div className="flex flex-col">
            <span className="text-sm sm:text-[0.95rem] font-bold tracking-tight text-white group-hover:text-[#E66B45] transition-colors">
              {profile.shortName}
            </span>
            <span className="font-mono text-[0.62rem] uppercase tracking-wider text-sage-soft/70 hidden sm:block">
              UGM · Agri-Tech
            </span>
          </div>
        </a>

        {/* Center Navigation Capsule as shown in the reference image */}
        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center rounded-full bg-[#343B38] border border-white/10 p-1.5 shadow-inner">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    className={`inline-flex items-center px-4 xl:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-[#E66B45] text-white shadow-md font-bold'
                        : 'text-[#F2F0EA] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Action Buttons on Right: Download CV in terracotta as shown in the reference image */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-[#E66B45] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:brightness-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {/* Tray Download Icon */}
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4 shrink-0">
              <path d="M10 3v8.5m-3.5-3.5 3.5 3.5 3.5-3.5M4 14.5v1a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Download CV</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            ref={toggleRef}
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-[2px] w-4 rounded-full bg-current transition-all duration-300 ${
                  open ? 'top-1.5 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-4 rounded-full bg-current transition-all duration-300 ${
                  open ? 'top-1.5 -rotate-45' : 'top-2.5'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className="border-t border-white/10 bg-[#252C29] px-5 pb-8 pt-5 shadow-2xl transition-all duration-300 lg:hidden"
      >
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <p className="eyebrow text-sage-soft/70">Navigation Index</p>
          <span className="font-mono text-[0.68rem] text-[#E66B45]">FIELDNOTES // '26</span>
        </div>

        <ul className="mt-3 divide-y divide-white/5">
          {navItems.map((item, index) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  aria-current={isActive ? 'location' : undefined}
                  className={`flex items-center justify-between py-3.5 text-lg font-medium transition-all ${
                    isActive
                      ? 'text-[#E66B45] font-bold translate-x-1'
                      : 'text-[#F2F0EA] hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-[#E66B45] shrink-0 shadow-xs" />
                    )}
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-sage-soft/50">
                    § {String(index + 1).padStart(2, '0')}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>

        <div className="mt-6 pt-4 border-t border-white/10">
          <a
            href={profile.cvPath}
            download
            className="flex items-center justify-center gap-2 rounded-xl bg-[#E66B45] w-full py-3 text-sm font-semibold text-white shadow-md hover:brightness-110 transition-all"
            onClick={closeMenu}
          >
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4 shrink-0">
              <path d="M10 3v8.5m-3.5-3.5 3.5 3.5 3.5-3.5M4 14.5v1a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Download Curriculum Vitae (PDF)</span>
          </a>
        </div>
      </div>
    </header>
  )
}
