import { useEffect } from 'react'
import './App.css'
import { Loader } from './components/Loader'
import { PointerSignal } from './components/PointerSignal'
import { SiteHeader } from './components/SiteHeader'
import { useHashRoute } from './hooks/useHashRoute'
import { projects } from './data/portfolio'
import { HomeView } from './views/HomeView'
import { CaseStudyView } from './views/CaseStudyView'
import { ProfileView } from './views/ProfileView'
import { ContactView } from './views/ContactView'

export default function App() {
  const route = useHashRoute()
  const projectSlug = route.startsWith('/project/') ? route.slice('/project/'.length) : null
  const project = projectSlug ? projects.find((item) => item.slug === projectSlug) : null

  useEffect(() => {
    if (!window.location.hash) window.history.replaceState(null, '', '#/')
    const main = document.getElementById('main-content')
    main?.focus({ preventScroll: true })
    if (!route.startsWith('/project/')) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [route])

  let view = <HomeView />
  if (project) view = <CaseStudyView project={project} />
  else if (route === '/profile') view = <ProfileView />
  else if (route === '/contact') view = <ContactView />
  else if (route !== '/') view = (
    <section className="route-view not-found">
      <p className="eyebrow"><span />Signal not found</p>
      <h1>This layer does not exist.</h1>
      <a className="text-link" href="#/">Return to index <span aria-hidden="true">↗</span></a>
    </section>
  )

  return (
    <>
      <Loader />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader route={route} />
      <main id="main-content" tabIndex="-1" key={route}>{view}</main>
      <PointerSignal />
    </>
  )
}
