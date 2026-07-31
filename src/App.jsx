import { useEffect, useRef, useState } from 'react'
import avatar from './assets/akshay-avatar.jpg'
import {
  experiments,
  featuredProjects,
  focusAreas,
  navigation,
  profileLinks,
  skillGroups,
} from './data/portfolio'
import './App.css'

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    external: (
      <>
        <path d="M15 4h5v5" />
        <path d="m20 4-9 9" />
        <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
      </>
    ),
    github: (
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1.1S17.9-.3 15 1.6a14 14 0 0 0-7 0C5.1-.3 3.9.1 3.9.1A5.4 5.4 0 0 0 3.7 3a5.8 5.8 0 0 0-1.5 4.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4m0-3c-3 .9-3-1.5-4.2-2" />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2z" />
        <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </>
    ),
    leetcode: (
      <>
        <path d="m16 3-8.5 8.5a3.5 3.5 0 0 0 0 5L11 20" />
        <path d="m12 7-4.5 4.5a3.5 3.5 0 0 0 0 5L11 20a3.5 3.5 0 0 0 5 0l2-2" />
        <path d="M9 14h10" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    governance: (
      <>
        <path d="M12 3 4 7v5c0 5 3.4 8 8 10 4.6-2 8-5 8-10V7l-8-4Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    ai: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="3" />
        <path d="M9 9h.01M15 9h.01M9 15h6M12 2v3M12 19v3M2 12h3M19 12h3" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
      </>
    ),
    security: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    download: (
      <>
        <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
      </>
    ),
  }

  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function ExternalLink({ href, children, className = '' }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const toggleRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    const sections = navigation
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)

    const updateActiveSection = () => {
      const readingLine = window.innerHeight * 0.32
      const current = sections.reduce((active, section) => {
        if (section.getBoundingClientRect().top <= readingLine) return section
        return active
      }, sections[0])
      setActiveSection(current.id)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined

    const focusable = panelRef.current?.querySelectorAll(
      'a[href], button:not([disabled])',
    )
    const first = focusable?.[0]
    const last = focusable?.[focusable.length - 1]
    first?.focus()

    const manageMenuFocus = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
      if (event.key === 'Tab' && focusable?.length) {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', manageMenuFocus)
    return () => window.removeEventListener('keydown', manageMenuFocus)
  }, [isOpen])

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav container" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Akshay Harwalkar, home">
          <span>AH</span>
          <span className="brand-name">Akshay Harwalkar</span>
        </a>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <div
          ref={panelRef}
          className={`nav-panel ${isOpen ? 'is-open' : ''}`}
          id="primary-menu"
        >
          <ul className="nav-links">
            {navigation.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-current={
                    activeSection === href.slice(1) ? 'page' : undefined
                  }
                  onClick={() => {
                    setActiveSection(href.slice(1))
                    setIsOpen(false)
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {/* Add public/Akshay_Harwalkar_Resume.pdf, then replace this
              disabled control with an anchor using
              href={`${import.meta.env.BASE_URL}Akshay_Harwalkar_Resume.pdf`}. */}
          <button
            className="resume-button"
            type="button"
            disabled
            title="Résumé PDF coming soon"
          >
            <Icon name="download" size={16} />
            Résumé soon
          </button>
        </div>
      </nav>
    </header>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-intro">{description}</p>}
    </div>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-grid container">
        <div className="hero-copy reveal">
          <p className="availability">
            <span />
            Based in Sydney · Open to graduate and internship opportunities
          </p>
          <h1 id="hero-title">
            <span>Akshay Harwalkar</span>
            Computer Science postgraduate building{' '}
            <em>trustworthy, practical software.</em>
          </h1>
          <p className="hero-intro">
            I’m Akshay, a Master of Computer Science student at the University
            of Sydney. I build practical software across responsible AI,
            machine learning, developer tools and interactive applications,
            with a growing focus on technical AI governance.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View my work <Icon name="arrow" size={18} />
            </a>
            <a className="button button-secondary" href="#contact">
              Contact me
            </a>
          </div>
          <div className="hero-socials" aria-label="Professional profiles">
            <ExternalLink href={profileLinks.github}>
              <Icon name="github" size={19} /> GitHub
            </ExternalLink>
            <ExternalLink href={profileLinks.linkedin}>
              <Icon name="linkedin" size={19} /> LinkedIn
            </ExternalLink>
            <ExternalLink href={profileLinks.leetcode}>
              <Icon name="leetcode" size={19} /> LeetCode
            </ExternalLink>
          </div>
        </div>
        <div className="profile-visual reveal" aria-label="Portrait of Akshay Harwalkar">
          <div className="profile-index" aria-hidden="true">
            <span>Profile / 01</span>
            <span>SYD · AU</span>
          </div>
          <div className="portrait-frame">
            <div className="portrait-grid" aria-hidden="true" />
            <img
              src={avatar}
              alt="Akshay Harwalkar"
              width="420"
              height="420"
            />
            <div className="portrait-caption">
              <span>Human oversight</span>
              <strong>Evidence before assertion</strong>
            </div>
          </div>
          <div className="oversight-motif" aria-hidden="true">
            <svg viewBox="0 0 340 126" role="presentation">
              <path d="M20 63H92M119 63h82m27 0h92" />
              <circle cx="20" cy="63" r="5" />
              <circle cx="105" cy="63" r="13" />
              <circle cx="215" cy="63" r="13" />
              <circle cx="320" cy="63" r="5" />
              <path d="m100 63 4 4 8-9m98 5 4 4 8-9" />
            </svg>
            <div>
              <span>Source</span>
              <span>Ground</span>
              <span>Review</span>
              <span>Decide</span>
            </div>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About">
        <span>Scroll to explore</span>
        <Icon name="arrow" size={18} />
      </a>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <SectionHeading eyebrow="01 / About" title="Curious by nature. Practical by choice." />
        <div className="about-grid reveal">
          <p className="about-lead">
            I’m studying a Master of Computer Science at the{' '}
            <span>University of Sydney</span>, where I’m sharpening the
            technical depth needed to build useful, dependable software.
          </p>
          <div className="about-body">
            <p>
              My interests sit where responsible AI, AI governance,
              cybersecurity and practical software engineering overlap. I
              enjoy moving from an idea to a working, testable application—and
              learning what the implementation reveals along the way.
            </p>
            <p>
              Right now, I’m especially interested in systems whose outputs
              can be inspected, grounded in evidence and explained to the
              people who rely on them.
            </p>
            <p className="location-line">
              <Icon name="location" size={18} /> Sydney, Australia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FocusAreas() {
  return (
    <section className="section focus-section" aria-labelledby="focus-title">
      <div className="container">
        <SectionHeading
          eyebrow="02 / Areas of focus"
          title="The problems I want to understand deeply."
          description="A developing practice shaped by responsible technology, clear engineering and real-world usefulness."
        />
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article className="focus-card reveal" key={area.title}>
              <div className="focus-card-top">
                <span className="focus-icon">
                  <Icon name={area.icon} size={24} />
                </span>
                <span className="card-number">{area.number}</span>
              </div>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectVisual({ type }) {
  const content = {
    risk: (
      <>
        <div className="visual-window-bar"><i /><i /><i /><span>LOCAL / ASSESSMENT</span></div>
        <div className="risk-layout">
          <div className="risk-score"><span>Risk review</span><strong>Evidence</strong><small>grounded response</small></div>
          <div className="risk-lines"><i /><i /><i /><i /></div>
        </div>
        <div className="citation-pills"><span>Source 01</span><span>Source 02</span></div>
      </>
    ),
    football: (
      <>
        <div className="pitch">
          <span className="pitch-centre" />
          <i className="player p1" /><i className="player p2" /><i className="player p3" />
          <i className="player p4" /><i className="player p5" />
        </div>
        <div className="probability"><span>W</span><i /><strong>54%</strong></div>
      </>
    ),
    game: (
      <>
        <div className="game-title">QUEUE STATUS</div>
        <div className="queue">
          <i /><i /><i /><i />
          <span className="counter-line" />
        </div>
        <div className="game-stats"><span>ORDER</span><strong>SOUP + BREAD</strong></div>
      </>
    ),
    vision: (
      <>
        <div className="scan-grid" />
        <div className="scan-target"><i /><i /><i /><i /></div>
        <span className="scan-label">EXPLORATORY / CV</span>
      </>
    ),
  }
  return <div className={`project-visual visual-${type}`} aria-hidden="true">{content[type]}</div>
}

function ProjectCard({ project }) {
  return (
    <article
      className={`project-card project-${project.visual} reveal ${project.primary ? 'project-primary' : ''}`}
    >
      <ProjectVisual type={project.visual} />
      <div className="project-content">
        <div className="project-meta">
          <span className="project-number">Project / {project.number}</span>
          <span className={`status status-${project.statusTone}`}>
            {project.status}
          </span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.note && <p className="project-note">{project.note}</p>}
        <dl className="project-story">
          <div>
            <dt>Purpose</dt>
            <dd>{project.purpose}</dd>
          </div>
          <div>
            <dt>What I built</dt>
            <dd>{project.built}</dd>
          </div>
        </dl>
        <div className="project-decisions">
          <span>Technical decisions</span>
          <ul>
            {project.decisions.map((decision) => (
              <li key={decision}>{decision}</li>
            ))}
          </ul>
        </div>
        <ul className="tech-list" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <ExternalLink href={project.repo} className="project-link">
          <Icon name="github" size={18} />
          View source
          <Icon name="external" size={16} />
        </ExternalLink>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="03 / Selected work"
          title="Projects built to learn, test and solve."
          description="A selection of practical systems spanning responsible AI, predictive modelling, game development and computer vision."
        />
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
        <div className="experiments-heading reveal">
          <div>
            <p className="eyebrow">More experiments</p>
            <h3>Smaller builds, focused lessons.</h3>
          </div>
          <ExternalLink href={profileLinks.github} className="text-link">
            All public repositories <Icon name="external" size={15} />
          </ExternalLink>
        </div>
        <div className="experiments-grid">
          {experiments.map((experiment, index) => (
            <ExternalLink
              href={experiment.repo}
              className="experiment-card reveal"
              key={experiment.title}
            >
              <span>0{index + 1}</span>
              <h4>{experiment.title}</h4>
              <p>{experiment.description}</p>
              <Icon name="external" size={18} />
            </ExternalLink>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container skills-layout">
        <SectionHeading
          eyebrow="04 / Technical toolkit"
          title="Tools I use to turn ideas into working software."
          description="A practical toolkit developed through coursework, experiments and end-to-end project builds."
        />
        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <div className="skill-group reveal" key={group.title}>
              <div className="skill-title">
                <span>0{index + 1}</span>
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section className="section journey-section" aria-labelledby="journey-title">
      <div className="container">
        <SectionHeading
          eyebrow="05 / Education & journey"
          title="Building depth, one system at a time."
        />
        <div className="timeline reveal">
          <div className="timeline-marker"><span /></div>
          <div className="timeline-meta">
            <span>Education</span>
            <span>Current</span>
          </div>
          <div className="timeline-content">
            <p>University of Sydney</p>
            <h3 id="journey-title">Master of Computer Science</h3>
            <p>
              Current focus: trustworthy AI systems, AI governance, security
              and applied software development.
            </p>
            <ul>
              <li><Icon name="check" size={15} /> Practical, testable applications</li>
              <li><Icon name="check" size={15} /> Human-centred system design</li>
              <li><Icon name="check" size={15} /> Inspectable and grounded outputs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid container reveal">
        <div>
          <p className="eyebrow">06 / Get in touch</p>
          <h2>Let’s build something thoughtful.</h2>
        </div>
        <div className="contact-copy">
          <p>
            I’m interested in graduate opportunities, internships and
            collaborations around responsible AI, software engineering and
            technical AI governance.
          </p>
          <a className="button button-primary" href={profileLinks.email}>
            <Icon name="mail" size={18} /> Email me
          </a>
        </div>
        <div className="contact-links" aria-label="Contact and profile links">
          <a href={profileLinks.email}>
            <span><Icon name="mail" size={18} /> Email</span>
            <Icon name="arrow" size={18} />
          </a>
          <ExternalLink href={profileLinks.github}>
            <span><Icon name="github" size={18} /> GitHub</span>
            <Icon name="external" size={16} />
          </ExternalLink>
          <ExternalLink href={profileLinks.linkedin}>
            <span><Icon name="linkedin" size={18} /> LinkedIn</span>
            <Icon name="external" size={16} />
          </ExternalLink>
          <ExternalLink href={profileLinks.leetcode}>
            <span><Icon name="leetcode" size={18} /> LeetCode</span>
            <Icon name="external" size={16} />
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand" href="#home" aria-label="Back to top">
          <span>AH</span>
        </a>
        <p>Designed and built by Akshay Harwalkar.</p>
        <a className="back-to-top" href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}

function App() {
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
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
