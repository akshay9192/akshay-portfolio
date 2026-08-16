import { ProjectArt } from './ProjectArt'

export function SignalPrelude({ project }) {
  return (
    <div className="signal-experience signal-prelude" style={{ '--signal-accent': project.signal.cyan }} aria-hidden="true">
      <ProjectArt project={project} eager className="signal-art" />
      <div className="signal-static">
        <span className="signal-static-ring ring-a" />
        <span className="signal-static-ring ring-b" />
        <span className="signal-static-ring ring-c" />
        <span className="signal-static-axis" />
      </div>
      <div className="signal-caption"><span>Surface</span><i /><span>Evidence</span><i /><span>Review</span></div>
    </div>
  )
}
