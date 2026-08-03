import './App.css'
import { Contact, Footer } from './components/Contact'
import { About, Education, FocusAreas } from './components/EditorialSections'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <FocusAreas />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
