import { useEffect } from 'react'
import { ExternalLink, Icon } from '../components/Icon'
import { ProjectArt } from '../components/ProjectArt'
import { projects } from '../data/portfolio'

export function CaseStudyView({ project }) {
  const index = projects.findIndex((item) => item.slug === project.slug)
  const previous = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  useEffect(() => {
    document.title = `${project.title} | Akshay Harwalkar`
    window.scrollTo(0, 0)
    return () => { document.title = 'Akshay Harwalkar | Creative Engineer' }
  }, [project])

  return (
    <article className="route-view case-study">
      <header className="case-hero">
        <div className="case-kicker"><span>{project.number} / 04</span><span>{project.discipline}</span><span>{project.status}</span></div>
        <h1>{project.title}</h1>
        <p>{project.purpose}</p>
        <a className="return-link" href="#/work"><span aria-hidden="true">←</span> Back to selected work</a>
      </header>

      <figure className="case-artwork">
        <ProjectArt project={project} eager />
        <figcaption>Generated conceptual artwork · not an application screenshot</figcaption>
        <div className="case-scan" aria-hidden="true"><i /><i /><i /></div>
      </figure>

      <div className="case-content">
        <section aria-labelledby="case-context">
          <p className="case-label">01 / Overview</p>
          <h2 id="case-context">Purpose</h2>
          <p className="case-lead">{project.description}</p>
        </section>
        <section aria-labelledby="case-built">
          <p className="case-label">02 / Build</p>
          <h2 id="case-built">What was built</h2>
          <p>{project.built}</p>
        </section>
        <section aria-labelledby="case-decisions">
          <p className="case-label">03 / Decisions</p>
          <h2 id="case-decisions">Technical decisions</h2>
          <ol className="decision-list">
            {project.decisions.map((decision, decisionIndex) => <li key={decision}><span>0{decisionIndex + 1}</span>{decision}</li>)}
          </ol>
        </section>
        <section aria-labelledby="case-stack">
          <p className="case-label">04 / Technology</p>
          <h2 id="case-stack">Technology stack</h2>
          <ul className="stack-index">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        </section>
        {project.note && <aside className="project-disclaimer"><span>Scope note</span><p>{project.note}</p></aside>}
        <ExternalLink className="repository-link" href={project.repo}>View repository <Icon name="external" size={20} /></ExternalLink>
      </div>

      <nav className="case-navigation" aria-label="Project navigation">
        <a href={`#/project/${previous.slug}`}><span>Previous</span><strong>{previous.shortTitle}</strong></a>
        <a href={`#/project/${next.slug}`}><span>Next</span><strong>{next.shortTitle}</strong></a>
      </nav>
    </article>
  )
}
