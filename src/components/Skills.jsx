import { skillClusters } from '../data/portfolio'
import { SectionIdentity } from './EditorialSections'

const nodes = skillClusters.flatMap((cluster) => cluster.skills.map((skill) => ({ skill, cluster: cluster.id })))

export function Skills() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-title" data-ambient>
      <div className="container-wide">
        <SectionIdentity number="04" eyebrow="Technology" id="skills-title" title={<>Tools connected by <em>how they work together.</em></>} description="A practical toolkit developed through coursework, experiments and end-to-end project builds." />
        <div className="constellation-shell" data-reveal>
          <div className="constellation">
            <svg className="constellation-lines" viewBox="0 0 1200 660" preserveAspectRatio="none" aria-hidden="true">
              <path data-cluster="interface" d="M102 164 248 92l110 156 145-94" /><path data-cluster="systems" d="m480 390 128-122 120 172 104-152" /><path data-cluster="intelligence" d="m685 110 160 68 122-100 119 166" /><path data-cluster="delivery" d="m225 500 142 80 124-108" /><path className="cross-line" d="M358 248 608 268m120 172 239-362M480 390 367 580" />
            </svg>
            {nodes.map(({ skill, cluster }) => <span className={`tech-node cluster-${cluster}`} data-cluster={cluster} key={skill}><span>{skill}</span></span>)}
            <div className="constellation-core" aria-hidden="true"><span>AH</span><i /></div>
          </div>
          <div className="cluster-legend" aria-label="Technology clusters">
            {skillClusters.map((cluster) => <div key={cluster.id}><span className={`legend-dot legend-${cluster.id}`} />{cluster.label}</div>)}
          </div>
        </div>
      </div>
    </section>
  )
}
