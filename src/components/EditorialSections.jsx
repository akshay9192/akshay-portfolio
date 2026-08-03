import { education, focusAreas } from '../data/portfolio'
import { Icon } from './Icon'

export function SectionIdentity({ number, eyebrow, title, description, dark = false, id, className = '' }) {
  return (
    <header className={`section-identity ${dark ? 'identity-dark' : ''} ${className}`} data-reveal>
      <div className="identity-orientation">
        <span className="identity-number" aria-hidden="true">{number}</span>
        <p>{eyebrow}</p>
      </div>
      <div className="identity-title">
        <h2 id={id}>{title}</h2>
        {description && <p className="section-intro">{description}</p>}
      </div>
    </header>
  )
}

export function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="container-wide">
        <SectionIdentity number="01" eyebrow="Profile" id="about-title" title={<>Building systems where <em>evidence stays visible.</em></>} className="about-identity" />
        <div className="about-profile" data-reveal>
          <aside className="profile-meta" aria-label="Profile details">
            <dl>
              <div><dt>Study</dt><dd>Master of Computer Science</dd></div>
              <div><dt>University</dt><dd>University of Sydney</dd></div>
              <div><dt>Based</dt><dd>Sydney, Australia</dd></div>
              <div><dt>Practice</dt><dd>Responsible AI, software systems and security</dd></div>
            </dl>
          </aside>
          <div className="about-editorial">
            <p className="about-lead">I’m sharpening the technical depth needed to build <span>useful, dependable software</span>—and the judgement to make its evidence inspectable.</p>
            <div className="about-copy">
            <p>My interests sit where responsible AI, AI governance, cybersecurity and practical software engineering overlap. I enjoy moving from an idea to a working, testable application—and learning what the implementation reveals along the way.</p>
            <p>Right now, I’m especially interested in systems whose outputs can be inspected, grounded in evidence and explained to the people who rely on them.</p>
            </div>
            <aside className="about-annotation" aria-label="Current direction">
              <p>Current trajectory</p>
              <ol>
                <li><span>01</span>Computer science foundations</li>
                <li><span>02</span>End-to-end project systems</li>
                <li><span>03</span>Responsible AI and governance</li>
              </ol>
              <div><Icon name="location" size={16} /> Sydney / AU</div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}

function FocusVisual({ type }) {
  return (
    <div className={`focus-visual focus-${type}`} aria-hidden="true">
      {type === 'governance' && <><span className="doc d1" /><span className="doc d2" /><span className="guard"><i>✓</i></span><svg viewBox="0 0 300 110"><path d="M18 58h82c34 0 34-35 70-35h38c40 0 32 52 74 52" /></svg></>}
      {type === 'learning' && <><span className="probability-ring" /><span className="plot-dot p-a" /><span className="plot-dot p-b" /><span className="plot-dot p-c" /><span className="plot-dot p-d" /><svg viewBox="0 0 300 110"><path d="M10 91c56-5 48-66 98-52s42 62 96 35 41-55 86-50" /></svg></>}
      {type === 'systems' && <><span className="system-box b1">UI</span><span className="system-box b2">API</span><span className="system-box b3">DATA</span><svg viewBox="0 0 300 110"><path d="M70 55h54m52 0h54" /></svg></>}
      {type === 'security' && <><span className="security-radar"><i /><b /></span><span className="security-log">AUDIT / 04<br />VERIFY / PASS</span></>}
    </div>
  )
}

export function FocusAreas() {
  return (
    <section className="section focus-section" id="focus" aria-labelledby="focus-title" data-ambient>
      <div className="container-wide">
        <SectionIdentity number="02" eyebrow="Areas of practice" id="focus-title" title={<>Four lenses for <em>better engineering.</em></>} description="A developing practice shaped by responsible technology, clear implementation and real-world usefulness." />
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article className="focus-module" data-reveal key={area.title}>
              <span className="module-number" aria-hidden="true">{area.number}</span>
              <FocusVisual type={area.visual} />
              <div><h3>{area.title}</h3><p>{area.description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section className="section education-section" id="education" aria-labelledby="education-title">
      <div className="container-wide">
        <SectionIdentity number="05" eyebrow="Education" id="education-title" title={<>Depth is built <em>deliberately.</em></>} />
        <div className="education-timeline" data-reveal>
          <div className="timeline-rail" aria-hidden="true"><span /><i /></div>
          <div className="education-meta"><span>Education</span><strong>{education.period}</strong></div>
          <div className="education-main">
            <p>{education.institution}</p>
            <h3>{education.degree}</h3>
            <p>{education.focus}</p>
          </div>
          <ul>
            {education.themes.map((theme) => <li key={theme}><Icon name="check" size={15} />{theme}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
