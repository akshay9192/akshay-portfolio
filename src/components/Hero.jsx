import emblem from '../assets/akshay-emblem.png'
import { profileLinks } from '../data/portfolio'
import { Icon } from './Icon'
import { MagneticLink } from './Motion'

function EvidenceField() {
  return (
    <div className="evidence-field" data-reveal data-ambient>
      <div className="field-chrome" aria-hidden="true"><span>FIELD / 01</span><span>LIVE EVIDENCE MAP</span></div>
      <div className="field-visual">
        <div className="ambient-light" aria-hidden="true" />
        <svg className="evidence-paths" viewBox="0 0 640 650" aria-hidden="true">
          <path className="path path-a" d="M40 110C150 110 120 244 245 244S340 94 478 120s75 136 130 140" />
          <path className="path path-b" d="M20 470c100-14 130-125 236-82s104 134 206 96 78-133 160-143" />
          <path className="path path-c" d="M100 600c38-116 134-90 174-186s22-238 166-264" />
          {[['92','112'],['246','244'],['478','120'],['604','260'],['88','458'],['256','388'],['462','484'],['132','584'],['438','150']].map(([cx,cy], i) => <circle key={`${cx}-${cy}`} className={`node node-${i % 3}`} cx={cx} cy={cy} r={i % 3 === 1 ? 7 : 4} />)}
        </svg>
        <div className="document-fragment fragment-a" aria-hidden="true"><span>SOURCE / 01</span><i /><i /><i /></div>
        <div className="document-fragment fragment-b" aria-hidden="true"><span>REVIEWED</span><i /><i /></div>
        <div className="portrait-anchor">
          <div className="portrait-orbit" aria-hidden="true" />
          <img src={emblem} width="420" height="420" alt="Abstract green pixel emblem within an evidence map" decoding="async" />
          <span className="portrait-tag">Human in the loop</span>
        </div>
        <div className="review-checkpoint checkpoint-a" aria-hidden="true"><b>✓</b><span>Ground</span></div>
        <div className="review-checkpoint checkpoint-b" aria-hidden="true"><b>✓</b><span>Review</span></div>
        <div className="tech-token token-python">Python</div>
        <div className="tech-token token-react">React</div>
        <div className="tech-token token-qdrant">Qdrant</div>
        <div className="status-capsule"><span />Building responsible systems</div>
      </div>
      <div className="field-footer" aria-hidden="true"><span>INPUT</span><i /><span>EVIDENCE</span><i /><span>OVERSIGHT</span></div>
    </div>
  )
}

export function Hero() {
  return (
    <>
      <section className="hero-section" id="home" aria-labelledby="hero-title">
        <div className="hero-grid container-wide">
          <div className="hero-copy" data-reveal>
            <p className="status-line"><span />Sydney, Australia · Computer Science</p>
            <p className="hero-name">Akshay Harwalkar</p>
            <h1 id="hero-title">I build software that makes intelligence <em>useful, responsible</em> and grounded in evidence.</h1>
            <p className="hero-intro">Master of Computer Science student at the University of Sydney, working across responsible AI, machine learning, developer tools and interactive applications—with a growing focus on technical AI governance.</p>
            <div className="hero-actions">
              <MagneticLink className="button button-primary" href="#projects">Explore projects <Icon name="arrow" size={18} /></MagneticLink>
              <MagneticLink className="button button-secondary" href={profileLinks.github} target="_blank" rel="noopener noreferrer"><Icon name="github" size={18} /> GitHub</MagneticLink>
            </div>
            <dl className="hero-meta">
              <div><dt>Degree</dt><dd>Master of Computer Science</dd></div>
              <div><dt>University</dt><dd>University of Sydney</dd></div>
              <div><dt>Location</dt><dd>Sydney, Australia</dd></div>
            </dl>
          </div>
          <EvidenceField />
        </div>
      </section>
      <div className="marquee" aria-label="Areas of practice" data-ambient>
        <div className="marquee-track">
          {[0, 1].map((group) => <div className="marquee-group" aria-hidden={group === 1 ? 'true' : undefined} key={group}>Responsible AI <i /> Full-stack engineering <i /> Data systems <i /> Security <i /> Human oversight <i /> Simulation <i /> Evidence before assertion <i /></div>)}
        </div>
      </div>
    </>
  )
}
