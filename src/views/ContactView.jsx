import { useEffect, useState } from 'react'
import { ExternalLink, Icon } from '../components/Icon'
import { profileLinks } from '../data/portfolio'

const email = 'akshay.harwalkar183@gmail.com'

export function ContactView() {
  const [copied, setCopied] = useState(false)

  useEffect(() => () => window.clearTimeout(window.__copyTimer), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.clearTimeout(window.__copyTimer)
      window.__copyTimer = window.setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = profileLinks.email
    }
  }

  return (
    <div className="route-view contact-view">
      <div className="contact-signal" aria-hidden="true"><i /><i /><i /><span /></div>
      <header>
        <p className="eyebrow"><span />Contact / open channel</p>
        <h1>Let’s build with<br />the evidence visible.</h1>
        <p>Available for graduate opportunities and conversations about responsible AI, data systems and thoughtful software.</p>
      </header>
      <div className="contact-primary">
        <a href={profileLinks.email} data-cursor="Write">{email}<Icon name="arrow" size={28} /></a>
        <button type="button" onClick={copyEmail} data-cursor="Copy"><span>{copied ? 'Copied' : 'Copy email'}</span><Icon name={copied ? 'check' : 'mail'} size={18} /></button>
        <span className="copy-status" role="status" aria-live="polite">{copied ? 'Email copied to clipboard' : ''}</span>
      </div>
      <div className="contact-links">
        <a href={profileLinks.phone}><span>Phone</span><strong>0493 544 829</strong></a>
        <ExternalLink href={profileLinks.github}><span>GitHub</span><strong>akshay9192</strong><Icon name="external" size={16} /></ExternalLink>
        <ExternalLink href={profileLinks.linkedin}><span>LinkedIn</span><strong>Akshay Harwalkar</strong><Icon name="external" size={16} /></ExternalLink>
        <ExternalLink href={profileLinks.leetcode}><span>LeetCode</span><strong>iharwalkar-akshay</strong><Icon name="external" size={16} /></ExternalLink>
      </div>
      <footer className="contact-footer"><span>Akshay Harwalkar</span><span>Sydney, Australia</span><a href="#/">Return to index ↑</a></footer>
    </div>
  )
}
