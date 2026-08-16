import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icon'
import { profileLinks } from '../data/portfolio'

export function SiteHeader({ route }) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }

      if (event.key === 'Tab') {
        const controls = [buttonRef.current, ...panelRef.current.querySelectorAll('a')]
        const first = controls[0]
        const last = controls.at(-1)
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.body.classList.add('menu-open')
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className="site-header">
      <a className="wordmark" href="#/" aria-label="Akshay Harwalkar, home">
        <span className="signal-mark" aria-hidden="true"><i /><i /><i /></span>
        <span>Akshay Harwalkar</span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#/work" aria-current={route === '/work' ? 'page' : undefined}>Work</a>
        <a href="#/about" aria-current={route === '/about' || route === '/profile' ? 'page' : undefined}>About</a>
        <a href="#/contact" aria-current={route === '/contact' ? 'page' : undefined}>Contact</a>
        <a className="github-link" href={profileLinks.github} target="_blank" rel="noopener noreferrer">GitHub <Icon name="external" size={14} /></a>
      </nav>
      <button ref={buttonRef} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
        <span>{open ? 'Close' : 'Menu'}</span><i aria-hidden="true" />
      </button>
      <nav ref={panelRef} id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>
        <a href="#/work"><span>01</span>Work</a>
        <a href="#/about"><span>02</span>About</a>
        <a href="#/contact"><span>03</span>Contact</a>
        <a href={profileLinks.github} target="_blank" rel="noopener noreferrer"><span>04</span>GitHub <Icon name="external" size={16} /></a>
      </nav>
    </header>
  )
}
