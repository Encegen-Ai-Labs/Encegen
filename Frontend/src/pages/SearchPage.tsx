import { useState } from 'react'
import { SearchIcon } from '../components/icons'
import './content.css'

const TABS = ['All Results', 'Blog', 'Resources', 'Products', 'Solutions', 'Videos']

const SUGGESTIONS = ['Process Mining', 'AI Solutions', 'SAP Integration', 'Order-to-Cash', 'Accounts Payable', 'ROI Calculator']

const TYPE_FILTERS = ['All Types', 'Blog Articles', 'Customer Stories', 'Whitepapers', 'Videos', 'Webinars', 'Documentation']
const TOPIC_FILTERS = ['Process Mining', 'AI & Automation', 'Supply Chain', 'Finance Ops', 'IT Operations', 'SAP Integration']
const INDUSTRY_FILTERS = ['Manufacturing', 'Financial Services', 'Retail', 'Healthcare']

const RESULTS = [
  {
    tag: 'Blog',
    color: '#6553ee',
    title: 'How Process Mining Unlocks Hidden Efficiency in SAP Environments',
    desc: 'Enterprise business processes are often siloed and invisible. Discover how mining your SAP event logs provides the objective truth about how work happens.',
    meta: '8 min read · June 12 2025 · Process Mining',
    action: 'Read article →',
  },
  {
    tag: 'Customer Story',
    color: '#22c55e',
    title: 'How Siemens Reduced Invoice Processing by 60% with Encegen AI',
    desc: 'By identifying bottlenecks in accounts payable, Siemens was able to automate 80% of repetitive manual touches.',
    meta: '12 min · May 28 2025',
    action: 'Read story →',
  },
  {
    tag: 'Whitepaper',
    color: '#3b82f6',
    title: 'The 2026 State of Process Intelligence Report',
    desc: "The definitive guide to how the world's largest enterprises are leveraging AI and mining to drive resilience.",
    meta: '24 pages · PDF Download',
    action: 'Download PDF →',
  },
  {
    tag: 'Product',
    color: '#f59e0b',
    title: 'Encegen EMS — Product Overview',
    desc: 'The Execution Management System is the brains of your process intelligence layer. Fix processes directly in your stack.',
    meta: 'Core Platform',
    action: 'Explore product →',
  },
  {
    tag: 'Webinar',
    color: '#8b5cf6',
    title: 'AI at Scale: How Fortune 500s Automate Process Execution',
    desc: 'Join CDOs from IBM and Airbus for a deep dive into scalable process automation strategies.',
    meta: 'Available On-Demand',
    action: 'Watch now →',
  },
  {
    tag: 'Documentation',
    color: '#22d3ee',
    title: 'Getting Started with the Encegen Process Mining API',
    desc: 'Everything you need to know about pushing data from custom internal tools directly into the mining layer.',
    meta: 'Developer Docs',
    action: 'View docs →',
  },
]

export default function SearchPage() {
  const [tab, setTab] = useState('All Results')
  const [page, setPage] = useState(1)

  return (
    <>
      <section className="search-hero">
        <div className="container">
          <p className="shead__eyebrow">Search</p>
          <h1>What are you looking for?</h1>
          <div className="search-hero__bar">
            <SearchIcon size={19} />
            <input placeholder="Search for products, solutions, resources, use cases…" />
            <button>Search</button>
          </div>
          <div className="search-hero__suggestions">
            {SUGGESTIONS.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="search-tabs">
            {TABS.map((t) => (
              <button key={t} className={t === tab ? 'active' : ''} onClick={() => setTab(t)}>
                {t}
              </button>
            ))}
            <span className="search-tabs__count">2,847 results</span>
          </div>

          <div className="search-layout">
            <aside className="sfilter">
              <h4>Filter by Type</h4>
              {TYPE_FILTERS.map((f, i) => (
                <label key={f}>
                  <input type="checkbox" defaultChecked={i === 0} /> {f}
                </label>
              ))}
              <h4>Filter by Topic</h4>
              {TOPIC_FILTERS.map((f) => (
                <label key={f}>
                  <input type="checkbox" /> {f}
                </label>
              ))}
              <h4>Filter by Industry</h4>
              {INDUSTRY_FILTERS.map((f) => (
                <label key={f}>
                  <input type="checkbox" /> {f}
                </label>
              ))}
              <button className="sfilter__clear">Clear all filters</button>
            </aside>

            <div>
              {RESULTS.map((r) => (
                <article key={r.title} className="sresult">
                  <span
                    className="sresult__tag"
                    style={{
                      background: `color-mix(in srgb, ${r.color} 13%, transparent)`,
                      color: r.color,
                    }}
                  >
                    {r.tag}
                  </span>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                  <div className="sresult__foot">
                    <span>{r.meta}</span>
                    <a href="#">{r.action}</a>
                  </div>
                </article>
              ))}

              <div className="pagination">
                <button onClick={() => setPage(Math.max(1, page - 1))}>‹</button>
                {[1, 2, 3].map((p) => (
                  <button key={p} className={p === page ? 'active' : ''} onClick={() => setPage(p)}>
                    {p}
                  </button>
                ))}
                <button disabled>…</button>
                <button onClick={() => setPage(24)} className={page === 24 ? 'active' : ''}>
                  24
                </button>
                <button onClick={() => setPage(Math.min(24, page + 1))}>›</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
