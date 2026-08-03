import { lazy, Suspense, useEffect, useState } from 'react'
import { ProjectIndex } from '../components/ProjectIndex'
import { SignalPrelude } from '../components/SignalPrelude'
import { projects } from '../data/portfolio'

const SignalCore = lazy(() => import('../components/SignalCore'))

export function HomeView() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [coreReady, setCoreReady] = useState(false)
  const project = projects[activeIndex]

  useEffect(() => {
    const activate = () => setCoreReady(true)
    const timeout = window.setTimeout(activate, 6000)
    window.addEventListener('pointermove', activate, { once: true, passive: true })
    window.addEventListener('pointerdown', activate, { once: true, passive: true })
    window.addEventListener('keydown', activate, { once: true })
    return () => {
      window.clearTimeout(timeout)
      window.removeEventListener('pointermove', activate)
      window.removeEventListener('pointerdown', activate)
      window.removeEventListener('keydown', activate)
    }
  }, [])

  return (
    <div className="route-view home-view">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-signal">
          {coreReady ? (
            <Suspense fallback={<SignalPrelude project={project} />}>
              <SignalCore project={project} />
            </Suspense>
          ) : <SignalPrelude project={project} />}
        </div>
        <div className="hero-copy">
          <p className="eyebrow"><span />Sydney, Australia · University of Sydney</p>
          <h1 id="home-title">Creative<br />Engineer</h1>
          <p className="hero-statement">Building responsible software systems with more to discover beneath the surface.</p>
          <div className="hero-actions">
            <a className="text-link primary-discovery" href="#/" onClick={(event) => { event.preventDefault(); document.getElementById('project-index')?.scrollIntoView() }} data-cursor="Explore">Discover selected work <span aria-hidden="true">↓</span></a>
            <span className="availability"><i />Available for graduate opportunities</span>
          </div>
        </div>
        <div className="hero-coordinate" aria-hidden="true"><span>SURFACE / 00</span><i /><span>UNDERLYING SIGNAL</span></div>
      </section>

      <section className="index-section" id="project-index" aria-labelledby="index-title">
        <header className="section-intro">
          <p className="eyebrow"><span />Selected systems</p>
          <h2 id="index-title">Signals beneath<br />the surface.</h2>
          <p>Interfaces are only the visible layer. Select a system to trace its data, decisions and review points.</p>
        </header>
        <div className="active-project-meta" aria-live="polite">
          <span>{project.number} / 04</span>
          <strong>{project.shortTitle}</strong>
          <span>{project.status}</span>
        </div>
        <ProjectIndex projects={projects} activeIndex={activeIndex} onSelect={setActiveIndex} />
      </section>

      <section className="home-finale" aria-labelledby="finale-title">
        <p className="eyebrow"><span />Human in the loop</p>
        <h2 id="finale-title">Systems should remain<br />open to review.</h2>
        <div>
          <p>Responsible AI, data systems and full-stack software shaped around evidence—not spectacle.</p>
          <a className="text-link" href="#/profile" data-cursor="Open">Read profile <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="#/contact" data-cursor="Open">Start a conversation <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </div>
  )
}
