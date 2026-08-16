import { education, profileIndex } from '../data/portfolio'

export function ProfileView() {
  const assetBase = import.meta.env.BASE_URL

  return (
    <div className="route-view profile-view">
      <header className="profile-heading">
        <p className="eyebrow"><span />Profile / evidence</p>
        <h1>Building from<br />first principles.</h1>
        <p>Akshay Harwalkar is a Master of Computer Science student at the University of Sydney, focused on trustworthy systems and practical software.</p>
      </header>

      <section className="profile-composition" aria-labelledby="profile-identity">
        <figure className="profile-portrait">
          <picture>
            <source
              srcSet={`${assetBase}images/akshay-portrait-480.webp 480w, ${assetBase}images/akshay-portrait-800.webp 800w, ${assetBase}images/akshay-portrait.webp 1200w`}
              sizes="(max-width: 768px) calc(100vw - 32px), 48vw"
              type="image/webp"
            />
            <img
              src={`${assetBase}images/akshay-portrait-source.jpg`}
              alt="Akshay Harwalkar wearing a black shirt against a light neutral background."
              width="1200"
              height="1600"
              loading="eager"
              decoding="async"
            />
          </picture>
          <span className="portrait-grid" aria-hidden="true" />
          <figcaption><span>Profile / 01</span><strong>Akshay Harwalkar</strong><small>Sydney, Australia</small></figcaption>
        </figure>
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
