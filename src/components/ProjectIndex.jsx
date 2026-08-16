import { Icon } from './Icon'
import { ProjectArt } from './ProjectArt'

export function ProjectIndex({ projects }) {
  return (
    <div className="project-list" aria-label="Featured projects">
      {projects.map((project) => (
        <article className="project-card" key={project.slug}>
          <a className="project-image-link" href={`#/project/${project.slug}`} aria-label={`Read the ${project.title} case study`}>
            <ProjectArt project={project} />
          </a>
          <div className="project-copy">
            <div className="project-meta">
              <span>{project.number}</span>
              <span>{project.discipline}</span>
              <span>{project.status}</span>
            </div>
            <h3><a href={`#/project/${project.slug}`}>{project.title}</a></h3>
            <p>{project.purpose}</p>
            <ul className="project-tech" aria-label={`${project.title} technologies`}>
              {project.technologies.slice(0, 3).map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <div className="project-actions">
              <a className="button button-secondary" href={`#/project/${project.slug}`}>Case study <Icon name="arrow" size={17} /></a>
              <a className="repository-inline" href={project.repo} target="_blank" rel="noopener noreferrer">Repository <Icon name="external" size={14} /></a>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
