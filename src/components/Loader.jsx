import { useEffect, useState } from 'react'

export function Loader() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let active = true
    const timeout = window.setTimeout(() => active && setReady(true), 1400)
    Promise.race([
      document.fonts?.ready || Promise.resolve(),
      new Promise((resolve) => window.setTimeout(resolve, 1000)),
    ]).then(() => {
      if (active) setReady(true)
    })
    return () => {
      active = false
      window.clearTimeout(timeout)
    }
  }, [])

  return (
    <div className={`loader ${ready ? 'is-ready' : ''}`} aria-hidden="true">
      <div className="loader-mark"><span>AKSHAY / PORTFOLIO</span><i /></div>
    </div>
  )
}
