import { experiments, featuredProjects, profileLinks } from '../data/portfolio'
import { ExternalLink, Icon } from './Icon'
import { SectionIdentity } from './EditorialSections'

function ProjectFallback({ type }) {
  if (type === 'risk') return <div className="risk-motif"><div className="evidence-doc e1"><span>01</span><i /><i /><i /></div><div className="evidence-doc e2"><span>02</span><i /><i /></div><svg viewBox="0 0 680 420"><path d="M70 128c112 0 90 92 196 92h92c84 0 78-102 180-102" /><path d="M82 310h155c62 0 45-52 115-52h122c62 0 58 54 123 54" /></svg><div className="decision-core"><small>LOCAL AI</small><strong>Evidence</strong><span>Grounded response</span></div><div className="human-node n1">✓<span>Review</span></div><div className="human-node n2">✓<span>Decide</span></div></div>
  if (type === 'football') return <div className="football-motif"><div className="route route-a" /><div className="route route-b" /><div className="route route-c" /><div className="tournament-core"><span>10K</span><small>SIMULATIONS</small></div>{[1,2,3,4,5,6,7,8,9].map((n) => <i className={`sim-dot sd-${n}`} key={n} />)}<div className="probability-field"><span>MODEL FIELD</span><b>POISSON + XGBOOST</b></div></div>
  if (type === 'game') return <div className="game-motif"><div className="queue-line" />{[1,2,3,4,5].map((n) => <span className={`queue-token qt-${n}`} key={n}><i /></span>)}<div className="soup-bowl"><i /><b /></div><div className="chaos-meter"><span>CONTROLLED CHAOS</span><i /></div></div>
  return <div className="vision-motif"><div className="feature-grid" /><div className="foot-silhouette"><i /><i /><i /><i /><i /></div><div className="scan-box"><span /><span /><span /><span /></div><div className="clinical-review"><b>HUMAN REVIEW</b><span>Exploratory only</span></div></div>
}

function ProjectVisual({ project }) {
  return (
    <figure className={`project-visual project-visual-${project.visual}`}>
      <div className="project-fallback" aria-hidden="true"><ProjectFallback type={project.visual} /></div>
      <figcaption>Art-directed system study</figcaption>
    </figure>
  )
}

function ProjectCaseStudy({ project, index }) {
  return (
    <article className={`project-case project-case-${project.visual} ${index % 2 ? 'project-reverse' : ''}`} data-reveal>
      <ProjectVisual project={project} />
      <div className="project-content">
        <div className="project-heading"><span className="project-number">{project.number}</span><span className={`status status-${project.statusTone}`}>{project.status}</span></div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {project.note && <p className="project-note"><strong>Scope note</strong>{project.note}</p>}
        <dl className="project-story">
          <div><dt>Purpose</dt><dd>{project.purpose}</dd></div>
          <div><dt>What was built</dt><dd>{project.built}</dd></div>
        </dl>
        <div className="project-decisions"><span>Technical decisions</span><ul>{project.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul></div>
        <ul className="tech-list" aria-label={`${project.title} technology stack`}>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        {project.repo ? (
          <ExternalLink className="project-link" href={project.repo} aria-label={`View ${project.title} repository on GitHub`}><span><Icon name="github" size={17} />Repository</span><Icon name="arrow" size={19} /></ExternalLink>
        ) : (
          <p className="project-link project-link-unavailable">Repository not public</p>
        )}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title" data-ambient>
      <div className="container-wide">
        <SectionIdentity number="03" eyebrow="Selected work" id="projects-title" title={<>Systems designed to <em>be examined.</em></>} description="Practical builds spanning responsible AI, predictive modelling, simulation and computer vision." dark />
        <div className="project-list">{featuredProjects.map((project, index) => <ProjectCaseStudy project={project} index={index} key={project.title} />)}</div>
        <div className="lab-header" data-reveal><div><p>More experiments</p><h3>Smaller builds, focused lessons.</h3></div><ExternalLink href={profileLinks.github}>All public repositories <Icon name="external" size={15} /></ExternalLink></div>
        <div className="lab-index">
          {experiments.map((experiment, index) => <ExternalLink className={`lab-row lab-${experiment.visual}`} href={experiment.repo} key={experiment.title} data-reveal><span className="lab-number">0{index + 1}</span><div><h4>{experiment.title}</h4><p>{experiment.description}</p></div><span className="lab-stack">{experiment.stack}</span><span className="lab-status">{experiment.status}</span><Icon name="arrow" size={20} /></ExternalLink>)}
        </div>
      </div>
    </section>
  )
}
