import { useEffect } from 'react'
import './App.css'
import { SiteHeader } from './components/SiteHeader'
import { useHashRoute } from './hooks/useHashRoute'
import { projects } from './data/portfolio'
import { HomeView } from './views/HomeView'
import { CaseStudyView } from './views/CaseStudyView'

const sectionRoutes = {
  '/work': 'work',
  '/about': 'about',
  '/profile': 'about',
  '/contact': 'contact',
}

export default function App() {
  const route = useHashRoute()
  const projectSlug = route.startsWith('/project/') ? route.slice('/project/'.length) : null
  const project = projectSlug ? projects.find((item) => item.slug === projectSlug) : null

  useEffect(() => {
    if (!window.location.hash) window.history.replaceState(null, '', '#/')
    const sectionId = sectionRoutes[route]

    if (route === '/profile') window.history.replaceState(null, '', '#/about')

    if (sectionId) {
      window.requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        })
      })
      return
    }

    if (route.startsWith('/project/')) {
      document.getElementById('main-content')?.focus({ preventScroll: true })
      window.scrollTo({ top: 0, behavior: 'instant' })
    } else if (route === '/') {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [route])

  let view = <HomeView />
  if (project) view = <CaseStudyView project={project} />
  else if (route !== '/' && !sectionRoutes[route]) view = (
    <section className="route-view not-found">
      <p className="eyebrow">Page not found</p>
      <h1>This page does not exist.</h1>
      <a className="text-link" href="#/">Return home <span aria-hidden="true">↗</span></a>
    </section>
  )

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader route={route} />
      <main id="main-content" tabIndex="-1">{view}</main>
    </>
  )
}
