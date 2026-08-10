import {
  CodeIcon,
  PenIcon,
  RefreshIcon,
  SearchIcon,
  SparklesIcon,
  ZapIcon,
} from './icons'
import './Modules.css'

const MODULES = [
  {
    icon: SearchIcon,
    title: 'Process Mining',
    description:
      'Automatically map every process variant from your system data in real time.',
  },
  {
    icon: ZapIcon,
    title: 'Execution Management',
    description:
      'Orchestrate actions across your enterprise from a single control plane.',
  },
  {
    icon: SparklesIcon,
    title: 'AI Insights',
    description:
      'Surface root causes and opportunities with AI-driven process analysis.',
  },
  {
    icon: RefreshIcon,
    title: 'Action Flows',
    description:
      'Trigger automated fixes directly inside SAP, Salesforce, and ServiceNow.',
  },
  {
    icon: PenIcon,
    title: 'Studio',
    description:
      'Build custom process apps and dashboards with a no-code visual editor.',
  },
  {
    icon: CodeIcon,
    title: 'Data Push API',
    description:
      'Connect any data source with pre-built connectors and open APIs.',
  },
]

export default function Modules() {
  return (
    <section className="modules">
      <div className="container">
        <p className="section-eyebrow">Platform Modules</p>
        <h2 className="section-title">Everything you need, fully integrated.</h2>
        <p className="section-sub">
          Deploy specialized tools that work together to solve complex process
          problems.
        </p>

        <div className="modules__grid">
          {MODULES.map((mod) => (
            <article key={mod.title} className="modules__card">
              <span className="modules__icon">
                <mod.icon size={26} />
              </span>
              <h3>{mod.title}</h3>
              <p>{mod.description}</p>
              <a href="#" className="modules__link">
                Learn more &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
