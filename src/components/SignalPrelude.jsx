export function SignalPrelude({ project }) {
  return (
    <div className="signal-experience" style={{ '--signal-accent': project.signal.cyan }} aria-hidden="true">
      <div className="signal-static">
        <span className="signal-static-ring ring-a" />
        <span className="signal-static-ring ring-b" />
        <span className="signal-static-ring ring-c" />
        <span className="signal-static-axis" />
      </div>
    </div>
  )
}
