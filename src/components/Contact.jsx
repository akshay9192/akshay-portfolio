import { profileLinks } from '../data/portfolio'
import { ExternalLink, Icon } from './Icon'
import { MagneticLink } from './Motion'
import { SectionIdentity } from './EditorialSections'

const contactLinks = [
  { label: 'akshay.harwalkar183@gmail.com', href: profileLinks.email, icon: 'mail', external: false },
  { label: '0493 544 829', href: profileLinks.phone, icon: 'phone', external: false },
  { label: 'GitHub', href: profileLinks.github, icon: 'github' },
  { label: 'LinkedIn', href: profileLinks.linkedin, icon: 'linkedin' },
  { label: 'LeetCode', href: profileLinks.leetcode, icon: 'leetcode' },
]

function ContactLink({ link }) {
  const content = <><span><Icon name={link.icon} size={18} />{link.label}</span><Icon name={link.external === false ? 'arrow' : 'external'} size={16} /></>
  return link.external === false
    ? <a href={link.href}>{content}</a>
    : <ExternalLink href={link.href}>{content}</ExternalLink>
}

export function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title" data-ambient>
      <svg className="contact-network" viewBox="0 0 1400 720" preserveAspectRatio="none" aria-hidden="true"><path d="M-40 470c210-170 350 75 520-48s290-218 480-80 280 7 490-162" /><path d="M-20 170c210 94 225-35 390 71s266 268 474 177 263-196 590-72" />{[[80,430],[322,345],[480,422],[728,297],[960,342],[1200,260],[220,245],[842,418]].map(([cx,cy]) => <circle cx={cx} cy={cy} r="4" key={`${cx}-${cy}`} />)}</svg>
      <div className="container-wide contact-inner" data-reveal>
        <SectionIdentity number="06" eyebrow="Contact" id="contact-title" title={<>Have a useful problem worth <em>thinking deeply</em> about?</>} dark />
        <div className="contact-action-row">
          <p>I’m interested in graduate opportunities, internships and collaborations around responsible AI, software engineering and technical AI governance.</p>
          <MagneticLink className="button contact-button" href={profileLinks.email}><Icon name="mail" size={19} />Email Akshay</MagneticLink>
        </div>
        <div className="contact-links" aria-label="Contact and profile links">
          {contactLinks.map((link) => <ContactLink link={link} key={link.label} />)}
        </div>
      </div>
      <div className="footer-word" aria-hidden="true">AKSHAY</div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-wide footer-inner">
        <a className="footer-mark" href="#home" aria-label="Back to top">AH</a>
        <p>Designed and built by Akshay Harwalkar.</p>
        <div className="footer-contact" aria-label="Footer contact links">
          <a href={profileLinks.email}>akshay.harwalkar183@gmail.com</a>
          <a href={profileLinks.phone}>0493 544 829</a>
          <ExternalLink href={profileLinks.github}>GitHub</ExternalLink>
          <ExternalLink href={profileLinks.linkedin}>LinkedIn</ExternalLink>
          <ExternalLink href={profileLinks.leetcode}>LeetCode</ExternalLink>
        </div>
        <a className="back-to-top" href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  )
}
