import { useEffect, useRef, useState } from 'react'
import { navigation, profileLinks } from '../data/portfolio'
import { Icon } from './Icon'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const toggleRef = useRef(null)
  const panelRef = useRef(null)

  const toggleMenu = () => {
    const opening = !isOpen
    setIsOpen(opening)
    if (opening) toggleRef.current?.focus()
  }

  const selectSection = (href) => {
    setActiveSection(href.slice(1))
    setIsOpen(false)
  }

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const sections = navigation.map(({ href }) => document.querySelector(href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-22% 0px -62% 0px', threshold: [0, 0.2, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined
    const panel = panelRef.current
    const focusable = [
      toggleRef.current,
      ...(panel?.querySelectorAll('a[href], button:not([disabled])') || []),
    ].filter(Boolean)
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    document.body.classList.add('menu-open')

    const containFocus = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
      if (event.key === 'Tab' && focusable.length) {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', containFocus)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', containFocus)
    }
  }, [isOpen])

  return (
    <header className="site-header">
      <nav className="nav-capsule" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Akshay Harwalkar, home" onClick={closeMenu}>
          <span>AH</span><span className="brand-name">Akshay Harwalkar</span>
        </a>
        <button ref={toggleRef} className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="primary-menu" aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={toggleMenu}>
          <span /><span />
        </button>
        <div ref={panelRef} className={`nav-panel ${isOpen ? 'is-open' : ''}`} id="primary-menu">
          <ul className="nav-links">
            {navigation.map(({ label, href }, index) => (
              <li key={href}>
                <a href={href} aria-current={activeSection === href.slice(1) ? 'page' : undefined} onClick={() => selectSection(href)}>
                  <span className="nav-index">0{index + 1}</span>{label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-contact" aria-label="Contact links" onClick={closeMenu}>
            <a href={profileLinks.email}>akshay.harwalkar183@gmail.com</a>
            <a href={profileLinks.phone}>0493 544 829</a>
            <a href={profileLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={profileLinks.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
          </div>
          {/* Enable only after public/Akshay_Harwalkar_Resume.pdf exists. */}
          <div className="resume-status">
            <button className="resume-button" type="button" disabled aria-describedby="resume-note">
              <Icon name="download" size={15} /> Résumé
            </button>
            <span id="resume-note">Résumé coming soon</span>
          </div>
        </div>
      </nav>
    </header>
  )
}
