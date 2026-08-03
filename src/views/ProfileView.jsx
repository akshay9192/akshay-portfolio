import { education, profileIndex } from '../data/portfolio'

export function ProfileView() {
  return (
    <div className="route-view profile-view">
      <header className="profile-heading">
        <p className="eyebrow"><span />Profile / evidence</p>
        <h1>Building from<br />first principles.</h1>
        <p>Akshay Harwalkar is a Master of Computer Science student at the University of Sydney, focused on trustworthy systems and practical software.</p>
      </header>

      <section className="profile-composition" aria-labelledby="profile-identity">
        <div className="portrait-pending" role="img" aria-label="Portrait of Akshay Harwalkar will appear here once the supplied source photograph is prepared.">
          <span className="portrait-grid" aria-hidden="true" />
          <div><span>PORTRAIT INPUT</span><strong>Awaiting supplied photograph</strong><small>public/images/akshay-portrait-source.jpg</small></div>
        </div>
        <div className="profile-identity">
          <p className="case-label">Visible layer</p>
          <h2 id="profile-identity">Akshay Harwalkar</h2>
          <dl>
            <div><dt>Degree</dt><dd>{education.degree}</dd></div>
            <div><dt>University</dt><dd>{education.institution}</dd></div>
            <div><dt>Location</dt><dd>{education.location}</dd></div>
          </dl>
          <p>{education.focus}</p>
        </div>
      </section>

      <section className="technical-index" aria-labelledby="technical-title">
        <header><p className="case-label">Underlying practice</p><h2 id="technical-title">Technical index</h2></header>
        <ol>
          {profileIndex.map((item, index) => (
            <li key={item.label} tabIndex="0"><span>0{index + 1}</span><strong>{item.label}</strong><p>{item.detail}</p><i aria-hidden="true" /></li>
          ))}
        </ol>
      </section>
      <div className="profile-next"><p>Explore the work through its decisions and constraints.</p><a className="text-link" href="#/" data-cursor="Explore">Open project index <span aria-hidden="true">↗</span></a></div>
    </div>
  )
}
