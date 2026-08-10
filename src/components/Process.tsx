import { PlugIcon, SearchIcon, ZapIcon } from './icons'
import './Process.css'

const STEPS = [
  {
    number: '01',
    icon: PlugIcon,
    title: 'Connect Your Data',
    description:
      'Plug Encegen into your existing systems - SAP, Salesforce, Oracle and more - in days, not months.',
  },
  {
    number: '02',
    icon: SearchIcon,
    title: 'Discover Process Reality',
    description:
      'AI automatically maps, mines, and analyzes every process variant across your entire operation.',
  },
  {
    number: '03',
    icon: ZapIcon,
    title: 'Act and Optimize',
    description:
      'Push AI-guided recommendations directly back into your systems and automate fixes at scale.',
  },
]

function StepArrow() {
  return (
    <span className="process__arrow" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="1" y1="7" x2="12" y2="7" />
        <polyline points="7 2 12 7 7 12" />
      </svg>
    </span>
  )
}

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <p className="section-eyebrow">The Process</p>
        <h2 className="section-title">From raw data to real action in three steps.</h2>

        <div className="process__steps">
          {STEPS.map((step, index) => (
            <div key={step.number} className="process__step-wrap">
              {index > 0 && <StepArrow />}
              <div className="process__step">
                <span className="process__number">{step.number}</span>
                <span className="process__icon">
                  <step.icon size={22} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
