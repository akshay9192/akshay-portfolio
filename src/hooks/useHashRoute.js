import { useEffect, useState } from 'react'

function readHash() {
  const value = window.location.hash.replace(/^#/, '') || '/'
  return value.startsWith('/') ? value : `/${value}`
}

export function useHashRoute() {
  const [route, setRoute] = useState(readHash)

  useEffect(() => {
    const update = () => setRoute(readHash())
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])

  return route
}
