import { useState } from 'react'
import { ArtTile, Btn, PageHero } from '../components/kit'
import './content.css'
import './Home.css'

const TABS = ['All', 'Blog', 'Webinars', 'Reports', 'Documentation']

const FEATURED_SIDE = [
  { tag: 'On-Demand Webinar', title: 'AI at Scale: Enterprise Adoption Playbook', art: 'blue' },
  { tag: 'Case Study · 12 min read', title: 'How Siemens Cut Process Costs by 40%', art: 'green' },
]

const ARTICLES = [
  { tag: 'Blog', title: 'Unlocking hidden value in supply chain operations', art: 'cyan' },
  { tag: 'Blog', title: 'Five signals your AP process is leaking money', art: 'purple' },
  { tag: 'Reports', title: 'The CFO guide to process intelligence in 2026', art: 'magenta' },
  { tag: 'Webinars', title: 'From pilot to production: scaling process mining', art: 'blue' },
  { tag: 'Blog', title: 'What real-time process visibility actually requires', art: 'orange' },
  { tag: 'Reports', title: 'Benchmarking order-to-cash across 500 enterprises', art: 'green' },
]

const DOC_LINKS = ['Getting Started', 'API Reference', 'SDK & Developer Tools', 'Security & Compliance']

export default function Resources() {
  const [tab, setTab] = useState('All')
  const articles = tab === 'All' ? ARTICLES : ARTICLES.filter((a) => a.tag === tab)

  return (
    <>
      <PageHero
        badge="Resources"
        title={
          <>
            Learn, Explore, and Master{' '}
            <span className="accent-purple">Process Intelligence</span>
          </>
        }
        sub="Guides, reports, webinars, and documentation to help you get the most out of Encegen."
      />

      <section className="section section--light" style={{ paddingTop: 64 }}>
        <div className="container">
          <div className="home-res-head">
            <h2 className="left-title" style={{ fontSize: 28 }}>
              Featured this month
            </h2>
            <a href="#" className="home-ind-link">
              View all →
            </a>
          </div>

          <div className="featured-card" style={{ marginTop: 26 }}>
            <div className="featured-card__body">
              <span className="featured-card__chip">Annual Report</span>
              <h3>The 2026 State of Process Intelligence Report</h3>
              <p>
                Key findings from 1,200+ enterprise leaders worldwide on the future of business
                execution.
              </p>
              <div className="featured-card__actions">
                <Btn variant="white">Download free →</Btn>
              </div>
            </div>
            <div className="featured-card__art art art--magenta">
              <span>2026</span>
            </div>
          </div>

          <div className="cards-2" style={{ marginTop: 26 }}>
            {FEATURED_SIDE.map((f) => (
              <article key={f.title} className="acard">
                <ArtTile variant={f.art} className="acard__art" />
                <div className="acard__body">
                  <span className="acard__tag">{f.tag}</span>
                  <h3>{f.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article grid */}
      <section className="section section--lavender" style={{ paddingTop: 56 }}>
        <div className="container">
          <div className="pill-tabs" style={{ marginTop: 0 }}>
            {TABS.map((t) => (
              <button key={t} className={t === tab ? 'active' : ''} onClick={() => setTab(t)}>
                {t}
              </button>
            ))}
          </div>
          <div className="cards-3" style={{ marginTop: 36 }}>
            {articles.map((a) => (
              <article key={a.title} className="acard">
                <ArtTile variant={a.art} className="acard__art" />
                <div className="acard__body">
                  <span className="acard__tag">{a.tag}</span>
                  <h3>{a.title}</h3>
                  <div className="acard__foot">
                    <span className="who">
                      <strong>Alex Rinke</strong>
                      <span>8 min read</span>
                    </span>
                    <a href="#">Read →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Documentation</p>
            <h2 className="left-title">Everything you need to build on Encegen.</h2>
            <p className="left-copy">
              Get your team up and running with our comprehensive developer guides and API
              references.
            </p>
            <ul className="check-list">
              {DOC_LINKS.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div style={{ marginTop: 30 }}>
              <Btn variant="lavender">Browse docs →</Btn>
            </div>
          </div>
          <div className="codeblock">
            <div className="codeblock__dots">
              <span style={{ background: '#ef4444' }} />
              <span style={{ background: '#f59e0b' }} />
              <span style={{ background: '#22c55e' }} />
            </div>
            <pre>
              {`const encegen = new Encegen({
  apiKey: `}
              <span className="tok-str">'process_intelligence_2026'</span>
              {`,
  environment: `}
              <span className="tok-str">'production'</span>
              {`
});

await encegen.mining.`}
              <span className="tok-key">start</span>
              {`({
  source: `}
              <span className="tok-str">'SAP_ERP'</span>
              {`,
  autoOptimize: `}
              <span className="tok-key">true</span>
              {`
});`}
            </pre>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <h2>Stay ahead of the curve.</h2>
          <p>The latest in process intelligence, delivered weekly.</p>
          <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your work email" />
            <button type="submit">Subscribe</button>
          </form>
          <p className="newsletter__note">Join 50,000+ process professionals. No spam, ever.</p>
        </div>
      </section>
    </>
  )
}
