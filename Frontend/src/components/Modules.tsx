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
      'Automatically map every process variant from your system data, in real time.',
    href: '/solutions/use-cases',
  },
  {
    icon: ZapIcon,
    title: 'Execution Management',
    description:
      'Orchestrate actions across your enterprise from a single control plane.',
    href: '/solutions/ai-agents',
  },
  {
    icon: SparklesIcon,
    title: 'AI Insights',
    description:
      'Surface root causes and opportunities with AI-driven process analysis.',
    href: '/solutions/ai-research',
  },
  {
    icon: RefreshIcon,
    title: 'Action Flows',
    description:
      'Trigger automated fixes directly inside SAP, Salesforce, and ServiceNow.',
    href: '/solutions/custom-software',
  },
  {
    icon: PenIcon,
    title: 'Studio',
    description:
      'Build custom process apps and dashboards with a no-code visual editor.',
    href: '/solutions/web-ecommerce',
  },
  {
    icon: CodeIcon,
    title: 'Data Push API',
    description:
      'Connect any data source with pre-built connectors and open APIs.',
    href: '/solutions/custom-software',
  },
]

export default function Modules() {
  return (
    <section className="modules" id="modules">
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
                <mod.icon size={20} />
              </span>
              <h3>{mod.title}</h3>
              <p>{mod.description}</p>
             
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
