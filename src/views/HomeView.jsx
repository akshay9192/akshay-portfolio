import { lazy, Suspense } from 'react'
import { ExternalLink, Icon } from '../components/Icon'
import { ProjectIndex } from '../components/ProjectIndex'
import { SignalPrelude } from '../components/SignalPrelude'
import { education, moreProjects, profileIndex, profileLinks, projects } from '../data/portfolio'

const SignalCore = lazy(() => import('../components/SignalCore'))

const technologyStack = [
  'Python',
  'JavaScript',
  'React',
  'FastAPI',
  'PostgreSQL',
  'SQLAlchemy',
  'Ollama',
  'LanceDB',
  'Node.js',
  'SQLite',
]

export function HomeView() {
  const assetBase = import.meta.env.BASE_URL

  return (
    <div className="home-view">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">Sydney, Australia · University of Sydney</p>
          <h1 id="home-title">Akshay Harwalkar</h1>
          <p className="hero-role">Creative software engineer building responsible AI, data and full-stack systems.</p>
          <p className="hero-support">I turn complex technical ideas into practical, trustworthy software with clear interfaces and evidence-led decisions.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#/work">View selected work <Icon name="arrow" size={18} /></a>
            <a className="button button-secondary" href="#/contact">Contact me</a>
          </div>
          <p className="availability"><i aria-hidden="true" />Available for graduate opportunities</p>
        </div>
        <div className="hero-signal" aria-hidden="true">
          <Suspense fallback={<SignalPrelude project={projects[0]} />}>
            <SignalCore project={projects[0]} />
          </Suspense>
        </div>
      </section>

      <section className="work-section section-shell" id="work" aria-labelledby="work-title">
        <header className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title">Projects built around real problems.</h2>
          <p>Responsible AI, predictive systems, simulations and computer-vision research—presented with honest scope and clear technical decisions.</p>
        </header>
        <ProjectIndex projects={projects} />

        <section className="more-projects" aria-labelledby="more-projects-title">
          <div>
            <p className="eyebrow">More projects</p>
            <h3 id="more-projects-title">Additional builds and experiments.</h3>
          </div>
          <ul>
            {moreProjects.map((project) => (
              <li key={project.title}>
                <div><strong>{project.title}</strong><span>{project.summary}</span></div>
                <div className="more-project-links">
                  {project.live && <ExternalLink href={project.live}>Live site <Icon name="external" size={13} /></ExternalLink>}
                  <ExternalLink href={project.repo}>Repository <Icon name="external" size={13} /></ExternalLink>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>

      <section className="about-section section-shell" id="about" aria-labelledby="about-title">
        <header className="section-heading compact-heading">
          <p className="eyebrow">About</p>
          <h2 id="about-title">Engineering with clarity and responsibility.</h2>
        </header>

        <div className="about-layout">
          <figure className="portrait-photo">
            <picture>
              <source
                type="image/avif"
                srcSet={`${assetBase}images/akshay-portrait-320.avif 320w, ${assetBase}images/akshay-portrait-640.avif 640w, ${assetBase}images/akshay-portrait-960.avif 960w`}
                sizes="(max-width: 760px) calc(100vw - 32px), 38vw"
              />
              <source
                type="image/webp"
                srcSet={`${assetBase}images/akshay-portrait-320.webp 320w, ${assetBase}images/akshay-portrait-640.webp 640w, ${assetBase}images/akshay-portrait-960.webp 960w`}
                sizes="(max-width: 760px) calc(100vw - 32px), 38vw"
              />
              <img
                src={`${assetBase}images/akshay-portrait-source.jpeg`}
                alt="Portrait of Akshay Harwalkar"
                width="1200"
                height="1600"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <figcaption>Akshay Harwalkar · Sydney, Australia</figcaption>
          </figure>

          <div className="about-copy">
            <p className="about-lead">I’m Akshay Harwalkar, a Master of Computer Science student at the University of Sydney. I build practical software across responsible AI, data systems, machine learning and full-stack development.</p>
            <p>My work focuses on systems that are useful, inspectable and honest about their limits—from local AI governance tools to predictive platforms and research prototypes.</p>

            <dl className="education-details">
              <div><dt>Degree</dt><dd>{education.degree}</dd></div>
              <div><dt>University</dt><dd>{education.institution}</dd></div>
              <div><dt>Location</dt><dd>{education.location}</dd></div>
              <div><dt>Focus</dt><dd>{education.focus}</dd></div>
            </dl>

            <div className="social-row" aria-label="Profile links">
              <ExternalLink href={profileLinks.medium}>Medium <Icon name="external" size={14} /></ExternalLink>
              <ExternalLink href={profileLinks.linkedin}>LinkedIn <Icon name="external" size={14} /></ExternalLink>
              <ExternalLink href={profileLinks.github}>GitHub <Icon name="external" size={14} /></ExternalLink>
            </div>
          </div>
        </div>

        <div className="expertise-grid">
          <div>
            <h3>Areas of focus</h3>
            <ul className="focus-list">
              {profileIndex.map((item) => <li key={item.label}><strong>{item.label}</strong><span>{item.detail}</span></li>)}
            </ul>
          </div>
          <div>
            <h3>Technology stack</h3>
            <ul className="technology-list">
              {technologyStack.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
        <div className="contact-intro">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Let’s build something useful.</h2>
          <p>I’m available for graduate opportunities and conversations about responsible AI, data systems and thoughtful software.</p>
          <a className="contact-email" href={profileLinks.email}>akshay.harwalkar183@gmail.com <Icon name="arrow" size={22} /></a>
        </div>

        <address className="contact-list">
          <a href={profileLinks.phone}><span>Phone</span><strong>0493 544 829</strong></a>
          <ExternalLink href={profileLinks.github}><span>GitHub</span><strong>akshay9192</strong><Icon name="external" size={15} /></ExternalLink>
          <ExternalLink href={profileLinks.linkedin}><span>LinkedIn</span><strong>Akshay Harwalkar</strong><Icon name="external" size={15} /></ExternalLink>
          <ExternalLink href={profileLinks.leetcode}><span>LeetCode</span><strong>iharwalkar-akshay</strong><Icon name="external" size={15} /></ExternalLink>
          <ExternalLink href={profileLinks.medium}><span>Medium</span><strong>@akshay.harwalkar183</strong><Icon name="external" size={15} /></ExternalLink>
        </address>
      </section>

      <footer className="site-footer">
        <span>Akshay Harwalkar</span>
        <span>Sydney, Australia</span>
        <a href="#/">Back to top ↑</a>
      </footer>
    </div>
  )
}
