import { SiteHeader } from './components/SiteHeader'
import { About, Education, Hero } from './components/sections-intro'
import { Experience, Projects } from './components/sections-work'
import { Contact, Footer, CareerDirection, Skills } from './components/sections-close'
import { Ruler, useRevealOnScroll } from './components/ui'

export function App() {
  useRevealOnScroll()
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Ruler className="mx-auto max-w-7xl" />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <CareerDirection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
