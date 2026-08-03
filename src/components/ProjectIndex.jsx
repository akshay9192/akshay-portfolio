import { useRef } from 'react'
import { Icon } from './Icon'

export function ProjectIndex({ projects, activeIndex, onSelect }) {
  const rowRefs = useRef([])

  const selectTouch = (event, index) => {
    if (!window.matchMedia('(hover: none)').matches || activeIndex === index) return
    event.preventDefault()
    onSelect(index)
  }

  const onKeyDown = (event, index) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    let next = index
    if (event.key === 'ArrowDown') next = (index + 1) % projects.length
    if (event.key === 'ArrowUp') next = (index - 1 + projects.length) % projects.length
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = projects.length - 1
    rowRefs.current[next]?.focus()
    onSelect(next)
  }

  return (
    <ol className="project-index" aria-label="Featured projects">
      {projects.map((project, index) => (
        <li key={project.slug} className={activeIndex === index ? 'is-active' : ''}>
          <a
            className="project-row"
            ref={(node) => { rowRefs.current[index] = node }}
            href={`#/project/${project.slug}`}
            onMouseEnter={() => onSelect(index)}
            onFocus={() => onSelect(index)}
            onClick={(event) => selectTouch(event, index)}
            onKeyDown={(event) => onKeyDown(event, index)}
            data-cursor="View"
          >
            <span className="project-number">{project.number}</span>
            <span className="project-name">{project.title}</span>
            <span className="project-discipline">{project.discipline}</span>
            <span className="project-status">{project.status}</span>
            <span className="project-direction" aria-hidden="true"><Icon name="arrow" size={20} /></span>
          </a>
          <a className="project-repository" href={project.repo} target="_blank" rel="noopener noreferrer" data-cursor="Open">
            Repository<span className="sr-only"> for {project.title}</span><Icon name="external" size={13} />
          </a>
        </li>
      ))}
    </ol>
  )
}
