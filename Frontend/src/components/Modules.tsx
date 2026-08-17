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
      'Maps every version of a process straight from your system data, in real time.',
    href: '#process-mining',
  },
  {
    icon: ZapIcon,
    title: 'Execution Management',
    description:
      'Runs actions across the enterprise from one control plane.',
    href: '#execution-management',
  },
  {
    icon: SparklesIcon,
    title: 'AI Insights',
    description:
      'Surfaces the root causes and the openings with AI-driven analysis.',
    href: '#ai-insights',
  },
  {
    icon: RefreshIcon,
    title: 'Action Flows',
    description:
      'Triggers the fix directly inside the systems you already run.',
    href: '#',
  },
  {
    icon: PenIcon,
    title: 'Studio',
    description:
      'Builds custom process apps and dashboards with a no-code editor.',
    href: '#',
  },
  {
    icon: CodeIcon,
    title: 'Data Push API',
    description:
      'Connects any source with pre-built connectors and open APIs.',
    href: '#',
  },
]

export default function Modules() {
  return (
    <section className="modules">
      <div className="container">
        <p className="section-eyebrow">Platform Modules</p>
        <h2 className="section-title">Everything working together, not bolted alongside.</h2>
        <p className="section-sub">
          Specialised tools that combine to solve the process problems one
          tool can't.
        </p>

        <div className="modules__grid">
          {MODULES.map((mod) => (
            <article key={mod.title} className="modules__card">
              <span className="modules__icon">
                <mod.icon size={26} />
              </span>
              <h3>{mod.title}</h3>
              <p>{mod.description}</p>
              <a href={mod.href} className="modules__link">
                Learn more &rarr;
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
