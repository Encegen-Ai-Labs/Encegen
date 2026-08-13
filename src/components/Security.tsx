import { FileTextIcon, LockIcon, ShieldIcon, UsersIcon } from './icons'
import './Security.css'

const CARDS = [
  {
    icon: ShieldIcon,
    title: 'SOC 2 Type II',
    description: 'Independently audited and certified annually.',
  },
  {
    icon: FileTextIcon,
    title: 'GDPR Compliant',
    description: 'Full data residency and processing controls.',
  },
  {
    icon: LockIcon,
    title: 'SSO & MFA',
    description: 'Identity provider integrations with OKTA, Azure AD.',
  },
  {
    icon: UsersIcon,
    title: 'Role-Based Access',
    description: 'Granular permissions across teams and data.',
  },
]

const BADGES = ['SOC2', 'ISO27001', 'GDPR', 'HIPAA', 'FedRAMP', 'CSA']

export default function Security() {
  return (
    <section className="security">
      <div className="container">
        <p className="section-eyebrow">Security &amp; Compliance</p>
        <h2 className="section-title">Security built in from day one.</h2>
        <p className="section-sub">
          Protect your data and your operations with strong controls and
          clear practices.
        </p>

        <div className="security__grid">
          {CARDS.map((card) => (
            <article key={card.title} className="security__card">
              <span className="security__icon">
                <card.icon size={24} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>

        <div className="security__badges">
          {BADGES.map((badge, index) => (
            <span
              key={badge}
              className={`security__badge ${
                index === BADGES.length - 1 ? 'security__badge--muted' : ''
              }`}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
