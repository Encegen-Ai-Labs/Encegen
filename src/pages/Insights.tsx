import { useState } from 'react'
import { ArtTile, Avatar, Btn, PageHero, SectionHead } from '../components/kit'
import './content.css'

const TABS = ['All', 'Blog', 'Reports', 'Customer Stories', 'Webinars', 'Podcasts', 'Videos']

const ARTICLES = [
  {
    tag: 'Blog',
    title: "How AI Is Redefining What's Possible in Supply Chain Management",
    desc: 'AI-powered process mining is transforming how global supply chains respond to disruption and demand shifts.',
    meta: '8 min · May 2025 · Supply Chain',
    author: 'Sarah Chen',
    role: 'Principal Analyst',
    action: 'Read →',
    art: 'cyan',
    hue: 190,
  },
  {
    tag: 'Customer Story',
    title: 'Inside Airbus: A Year of Process Transformation with Encegen',
    desc: 'How Airbus deployed Encegen across 14 countries to achieve end-to-end visibility in their MRO processes.',
    meta: '15 min · April 2025 · Customer Story',
    author: 'Marcus Brandt',
    role: 'Senior Editor',
    action: 'Read →',
    art: 'orange',
    hue: 30,
  },
  {
    tag: 'Webinar',
    title: 'Process Mining at Scale: Lessons from 100 Enterprise Deployments',
    desc: "Key patterns from 100 real-world deployments – what works, what doesn't, and how to scale process mining.",
    meta: '52 min · On-Demand · Process Mining',
    author: 'Lisa Park',
    role: 'Solutions Architect',
    action: 'Watch →',
    art: 'magenta',
    hue: 300,
  },
  {
    tag: 'Report',
    title: '2025 Process Intelligence Benchmark Study: Finance Edition',
    desc: 'Benchmarking finance process maturity across 500+ CFOs - AP, O2C, and treasury process insights.',
    meta: '38 pages · Q1 2025 · Finance',
    author: 'Tom Müller',
    role: 'Research Director',
    action: 'Download →',
    art: 'purple',
    hue: 255,
  },
  {
    tag: 'Podcast',
    title: 'Ep. 47: Building an AI-First Operations Team from the Ground Up',
    desc: 'Our Chief AI Officer shares the playbook for building and scaling an AI-native operations team.',
    meta: '34 min · March 2025 · AI & Ops',
    author: 'Aisha Khan',
    role: 'Chief AI Officer',
    action: 'Listen →',
    art: 'blue',
    hue: 215,
  },
  {
    tag: 'Blog',
    title: 'The Hidden Cost of Manual AP Processes - and How to Fix It',
    desc: 'Manual AP processing costs enterprises 12x more than automated workflows. Here is how to close the gap.',
    meta: '6 min · March 2025 · Finance Ops',
    author: 'James Rivera',
    role: 'Finance Lead',
    action: 'Read →',
    art: 'green',
    hue: 150,
  },
  {
    tag: 'Customer Story',
    title: 'How Vodafone Cut Procurement Cycle Time by 45% in 90 Days',
    desc: "Vodafone's 90-day transformation: process mining + automation reduced procurement cycle time by 45%.",
    meta: '10 min · Feb 2025 · Procurement',
    author: 'Elena Vasquez',
    role: 'Customer Success',
    action: 'Read →',
    art: 'cyan',
    hue: 190,
  },
  {
    tag: 'Video',
    title: 'Platform Demo: Encegen AI Recommendations in Action',
    desc: 'An 18-minute walkthrough of how Encegen AI surfaces and executes recommendations in real SAP environments.',
    meta: '18 min · Product · Demo',
    author: 'Noah Patel',
    role: 'Product Manager',
    action: 'Watch →',
    art: 'purple',
    hue: 255,
  },
  {
    tag: 'Report',
    title: 'Gartner Recognizes Encegen as a Leader in Process Mining - 2025',
    desc: 'What the Gartner recognition means for the market and why process intelligence is now a board-level priority.',
    meta: 'Analyst Report · 2025 · Gartner',
    author: 'Rachel Stone',
    role: 'Analyst Relations',
    action: 'Download →',
    art: 'orange',
    hue: 30,
  },
]

const TOPICS = ['🔍 Process Mining', '🤖 AI & Automation', '💰 Finance Ops', '🚚 Supply Chain', '🔧 IT Operations', '🏭 Manufacturing']

export default function Insights() {
  const [tab, setTab] = useState('All')
  const articles = tab === 'All' ? ARTICLES : ARTICLES.filter((a) => a.tag === tab.replace(/s$/, '') || a.tag === tab)

  return (
    <>
      <PageHero
        badge="Insights Hub"
        title="Ideas that move enterprise forward"
        sub="Expert analysis, customer stories, research reports, and hands-on guides — everything you need to stay ahead in process intelligence."
        actions={
          <>
            <Btn variant="white">Browse all insights →</Btn>
            <Btn variant="outline-light">Subscribe to newsletter</Btn>
          </>
        }
      />

      <section className="section section--lavender" style={{ paddingTop: 64 }}>
        <div className="container">
          <p className="shead__eyebrow" style={{ textAlign: 'center' }}>
            Featured
          </p>
          <div className="featured-card" style={{ marginTop: 26 }}>
            <div className="featured-card__body">
              <span className="featured-card__chip">Annual Report</span>
              <h3>
                The 2026 State of Process Intelligence: AI, Automation &amp; the Future of
                Enterprise Operations
              </h3>
              <p>
                Key findings from 1,200+ enterprise leaders worldwide on how process excellence
                drives measurable business results in the age of AI.
              </p>
              <span className="featured-card__meta">📄 52 pages · June 2025 · Free download</span>
              <div className="featured-card__actions">
                <Btn variant="white">Download free report →</Btn>
                <Btn variant="outline-light">Read preview</Btn>
              </div>
            </div>
            <div className="featured-card__art art art--purple">
              <span>2026</span>
            </div>
          </div>

          <div className="pill-tabs">
            {TABS.map((t) => (
              <button key={t} className={t === tab ? 'active' : ''} onClick={() => setTab(t)}>
                {t}
              </button>
            ))}
            <span className="pill-tabs__right">Latest ▾</span>
          </div>

          <div className="cards-3" style={{ marginTop: 36 }}>
            {articles.map((a) => (
              <article key={a.title} className="acard">
                <ArtTile variant={a.art} className="acard__art" />
                <div className="acard__body">
                  <span className="acard__tag">{a.tag}</span>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                  <span className="acard__meta">{a.meta}</span>
                  <div className="acard__foot">
                    <Avatar text={a.author.split(' ').map((n) => n[0]).join('')} hue={a.hue} size={34} />
                    <span className="who">
                      <strong>{a.author}</strong>
                      <span>{a.role}</span>
                    </span>
                    <a href="#">{a.action}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
            <Btn variant="lavender">Load more insights →</Btn>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section section--light">
        <div className="container">
          <SectionHead eyebrow="Browse by Topic" title="Find insights for your area" />
          <div className="topic-pills">
            {TOPICS.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <h2>Stay ahead of the curve</h2>
          <p>
            Join 50,000+ process leaders. Weekly insights, reports, and event invites — straight to
            your inbox.
          </p>
          <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your work email" />
            <button type="submit">Subscribe →</button>
          </form>
          <p className="newsletter__note">✓ No spam ✓ Unsubscribe anytime ✓ 50,000+ subscribers</p>
        </div>
      </section>
    </>
  )
}
