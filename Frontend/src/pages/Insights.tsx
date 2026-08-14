import { useEffect, useState } from 'react'
import { ArtTile, Avatar, Btn, PageHero, SectionHead } from '../components/kit'
import './content.css'

interface InsightItem {
  id: number | string
  title: string
  slug?: string
  category: string
  description: string
  content?: string
  meta?: string
  author: string
  author_role?: string
  action_label?: string
  media_url?: string
  art_variant?: string
  cover_image?: string
  hue?: number
  is_featured?: boolean
  status?: string
}

const TABS = ['All', 'Blog', 'Reports', 'Customer Stories', 'Webinars', 'Podcasts', 'Videos']

const DEFAULT_ARTICLES: InsightItem[] = [
  {
    id: 1,
    title: "How AI Is Redefining What's Possible in Supply Chain Management",
    slug: 'how-ai-is-redefining-supply-chain',
    category: 'Blog',
    description: 'AI-powered process mining is transforming how global supply chains respond to disruption and demand shifts.',
    content: "Modern supply chain operations require immediate responsiveness. By combining neural forecasting with continuous process telemetry, enterprise supply leaders can detect bottlenecks 14 days before delivery impact. Encegen's agent network automatically surfaces route re-allocations and mitigates inventory shortfalls.",
    meta: '8 min · May 2025 · Supply Chain',
    author: 'Sarah Chen',
    author_role: 'Principal Analyst',
    action_label: 'Read →',
    art_variant: 'cyan',
    hue: 190,
  },
  {
    id: 2,
    title: 'Inside Airbus: A Year of Process Transformation with Encegen',
    slug: 'inside-airbus-process-transformation',
    category: 'Customer Stories',
    description: 'How Airbus deployed Encegen across 14 countries to achieve end-to-end visibility in their MRO processes.',
    content: "Airbus operational engineers faced siloed tracking across multi-tier aerospace suppliers. With Encegen's distributed intelligence platform, cycle times across MRO facilities dropped by 38% within the first two quarters of deployment.",
    meta: '15 min · April 2025 · Customer Story',
    author: 'Marcus Brandt',
    author_role: 'Senior Editor',
    action_label: 'Read →',
    art_variant: 'orange',
    hue: 30,
  },
  {
    id: 3,
    title: 'Process Mining at Scale: Lessons from 100 Enterprise Deployments',
    slug: 'process-mining-at-scale-100-deployments',
    category: 'Webinars',
    description: "Key patterns from 100 real-world deployments – what works, what doesn't, and how to scale process mining.",
    content: "Watch our exclusive engineering deep dive exploring enterprise architectural anti-patterns, data ingestion pipelines, and how to scale autonomous process triggers without downtime.",
    meta: '52 min · On-Demand · Process Mining',
    author: 'Lisa Park',
    author_role: 'Solutions Architect',
    action_label: 'Watch →',
    media_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    art_variant: 'magenta',
    hue: 300,
  },
  {
    id: 4,
    title: '2026 Process Intelligence Benchmark Study: Finance Edition',
    slug: '2026-process-intelligence-benchmark-finance',
    category: 'Reports',
    description: 'Benchmarking finance process maturity across 500+ CFOs - AP, O2C, and treasury process insights.',
    content: 'This comprehensive 40-page report evaluates standard invoice reconciliation variance across Fortune 500 finance departments and provides actionable automation frameworks.',
    meta: '38 pages · Q1 2026 · Finance',
    author: 'Tom Müller',
    author_role: 'Research Director',
    action_label: 'Download →',
    art_variant: 'purple',
    hue: 255,
    is_featured: true,
  },
  {
    id: 5,
    title: 'Ep. 47: Building an AI-First Operations Team from the Ground Up',
    slug: 'ep-47-building-ai-first-operations-team',
    category: 'Podcasts',
    description: 'Our Chief AI Officer shares the playbook for building and scaling an AI-native operations team.',
    content: 'In this podcast episode, Aisha Khan sits down with enterprise technology leaders to break down how to upskill engineering squads and align cross-functional teams around AI agent workflows.',
    meta: '34 min · March 2026 · AI & Ops',
    author: 'Aisha Khan',
    author_role: 'Chief AI Officer',
    action_label: 'Listen →',
    media_url: 'https://soundcloud.com',
    art_variant: 'blue',
    hue: 215,
  },
  {
    id: 6,
    title: 'Platform Demo: Encegen AI Recommendations in Action',
    slug: 'platform-demo-encegen-ai-recommendations',
    category: 'Videos',
    description: 'An 18-minute walkthrough of how Encegen AI surfaces and executes recommendations in real SAP environments.',
    content: 'Watch our interactive product walkthrough demonstrating live SAP integration, automated data lineage discovery, and instant execution recommendations.',
    meta: '18 min · Product · Demo',
    author: 'Noah Patel',
    author_role: 'Product Manager',
    action_label: 'Watch →',
    media_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    art_variant: 'purple',
    hue: 255,
  },
  {
    id: 7,
    title: 'The Hidden Cost of Manual AP Processes - and How to Fix It',
    slug: 'hidden-cost-of-manual-ap-processes',
    category: 'Blog',
    description: 'Manual AP processing costs enterprises 12x more than automated workflows. Here is how to close the gap.',
    content: 'Finance leaders often underestimate manual review friction. Integrating agentic audit triggers catches discrepancies before ERP posting, reducing costly human remediation loops.',
    meta: '6 min · March 2026 · Finance Ops',
    author: 'James Rivera',
    author_role: 'Finance Lead',
    action_label: 'Read →',
    art_variant: 'green',
    hue: 150,
  },
  {
    id: 8,
    title: 'How Vodafone Cut Procurement Cycle Time by 45% in 90 Days',
    slug: 'vodafone-procurement-cycle-time-case-study',
    category: 'Customer Stories',
    description: "Vodafone's 90-day transformation: process mining + automation reduced procurement cycle time by 45%.",
    content: 'Vodafone deployed autonomous supplier reconciliation across international business units, standardizing purchase orders and eliminating manual PO re-entries.',
    meta: '10 min · Feb 2026 · Procurement',
    author: 'Elena Vasquez',
    author_role: 'Customer Success',
    action_label: 'Read →',
    art_variant: 'cyan',
    hue: 190,
  },
  {
    id: 9,
    title: 'Gartner Recognizes Encegen as a Leader in Process Mining - 2026',
    slug: 'gartner-recognizes-encegen-leader',
    category: 'Reports',
    description: 'What the Gartner recognition means for the market and why process intelligence is now a board-level priority.',
    content: 'Download the complimentary report excerpt to see why Gartner positioned Encegen as an industry leader in enterprise process mining and automated execution systems.',
    meta: 'Analyst Report · 2026 · Gartner',
    author: 'Rachel Stone',
    author_role: 'Analyst Relations',
    action_label: 'Download →',
    art_variant: 'orange',
    hue: 30,
  },
]

const TOPICS = ['🔍 Process Mining', '🤖 AI & Automation', '💰 Finance Ops', '🚚 Supply Chain', '🔧 IT Operations', '🏭 Manufacturing']

// Helper to convert YouTube URL to embed URL
function getEmbedUrl(url?: string) {
  if (!url) return null
  if (url.includes('youtube.com/watch?v=')) {
    const id = url.split('v=')[1]?.split('&')[0]
    return `https://www.youtube.com/embed/${id}?autoplay=1`
  }
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1]?.split('?')[0]
    return `https://www.youtube.com/embed/${id}?autoplay=1`
  }
  if (url.includes('vimeo.com/')) {
    const id = url.split('vimeo.com/')[1]?.split('?')[0]
    return `https://player.vimeo.com/video/${id}?autoplay=1`
  }
  return null
}

export default function Insights() {
  const [tab, setTab] = useState('All')
  const [insightsList, setInsightsList] = useState<InsightItem[]>(DEFAULT_ARTICLES)
  const [selectedInsight, setSelectedInsight] = useState<InsightItem | null>(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/insights')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const published = data.filter((i: any) => i.status === 'published' || !i.status)
          if (published.length > 0) {
            setInsightsList(published)
          }
        }
      })
      .catch((err) => console.warn('Could not fetch backend insights, using default dataset:', err))
  }, [])

  // Filter items matching selected tab
  const articles =
    tab === 'All'
      ? insightsList
      : insightsList.filter((a) => {
          const cat = (a.category || '').toLowerCase()
          const target = tab.toLowerCase()
          return (
            cat === target ||
            cat.replace(/s$/, '') === target.replace(/s$/, '') ||
            (target === 'customer stories' && (cat === 'customer story' || cat === 'customer stories')) ||
            (target === 'reports' && (cat === 'report' || cat === 'reports'))
          )
        })

  // Featured article: either marked featured or the first available
  const featuredInsight = insightsList.find((i) => i.is_featured) || insightsList[0] || DEFAULT_ARTICLES[3]

  const videoEmbed = selectedInsight?.media_url ? getEmbedUrl(selectedInsight.media_url) : null

  return (
    <>
      <PageHero
        badge="Insights Hub"
        title="Ideas that move enterprise forward"
        sub="Expert analysis, customer stories, research reports, webinars, podcasts, and hands-on guides — everything you need to stay ahead in process intelligence."
        actions={
          <>
            <Btn variant="white" onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}>
              Browse all insights →
            </Btn>
            <Btn variant="outline-light" onClick={() => document.getElementById('newsletter-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Subscribe to newsletter
            </Btn>
          </>
        }
      />

      <section className="section section--lavender" style={{ paddingTop: 64 }}>
        <div className="container">
          <p className="shead__eyebrow" style={{ textAlign: 'center' }}>
            Featured
          </p>

          {/* Featured Card */}
          {featuredInsight && (
            <div
              className="featured-card"
              style={{ marginTop: 26, cursor: 'pointer' }}
              onClick={() => setSelectedInsight(featuredInsight)}
            >
              <div className="featured-card__body">
                <span className="featured-card__chip">{featuredInsight.category || 'Featured Insight'}</span>
                <h3>{featuredInsight.title}</h3>
                <p>{featuredInsight.description}</p>
                <span className="featured-card__meta">
                  📄 {featuredInsight.meta || `${featuredInsight.author} · Encegen Research`}
                </span>
                <div className="featured-card__actions" style={{ marginTop: '1.25rem' }}>
                  <Btn variant="white">
                    {featuredInsight.action_label ? featuredInsight.action_label.replace('→', '').trim() + ' →' : 'Read full insight →'}
                  </Btn>
                  <Btn variant="outline-light">Read preview</Btn>
                </div>
              </div>
              {featuredInsight.cover_image ? (
                <div
                  className="featured-card__art"
                  style={{
                    backgroundImage: `url(${featuredInsight.cover_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '240px',
                    borderRadius: '12px'
                  }}
                />
              ) : (
                <div className={`featured-card__art art art--${featuredInsight.art_variant || 'purple'}`}>
                  <span>2026</span>
                </div>
              )}
            </div>
          )}

          {/* Filter Tabs */}
          <div className="pill-tabs">
            {TABS.map((t) => (
              <button key={t} className={t === tab ? 'active' : ''} onClick={() => setTab(t)}>
                {t}
              </button>
            ))}
            <span className="pill-tabs__right">Latest ▾</span>
          </div>

          {/* Card Grid */}
          <div className="cards-3" style={{ marginTop: 36 }}>
            {articles.map((a) => (
              <article
                key={a.id || a.title}
                className="acard"
                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                onClick={() => setSelectedInsight(a)}
              >
                {a.cover_image ? (
                  <div
                    style={{
                      height: '180px',
                      backgroundImage: `url(${a.cover_image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderTopLeftRadius: '16px',
                      borderTopRightRadius: '16px',
                    }}
                  />
                ) : (
                  <ArtTile variant={(a.art_variant as any) || 'cyan'} className="acard__art" />
                )}
                <div className="acard__body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span className="acard__tag">{a.category}</span>
                  <h3>{a.title}</h3>
                  <p style={{ flex: 1 }}>{a.description}</p>
                  <span className="acard__meta">{a.meta || `${a.category} · 2026`}</span>
                  <div className="acard__foot" style={{ marginTop: 'auto' }}>
                    <Avatar
                      text={(a.author || 'Encegen')
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                      hue={a.hue || 190}
                      size={34}
                    />
                    <span className="who">
                      <strong>{a.author}</strong>
                      <span>{a.author_role || 'Analyst'}</span>
                    </span>
                    <span style={{ color: '#2563eb', fontWeight: 600, marginLeft: 'auto' }}>
                      {a.action_label || 'Read →'}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {articles.length === 0 && (
            <p style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
              No insights found for this category.
            </p>
          )}

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48 }}>
            <Btn variant="lavender" onClick={() => setTab('All')}>
              Browse all insights ({insightsList.length}) →
            </Btn>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section section--light">
        <div className="container">
          <SectionHead eyebrow="Browse by Topic" title="Find insights for your area" />
          <div className="topic-pills">
            {TOPICS.map((t) => (
              <span
                key={t}
                style={{ cursor: 'pointer' }}
                onClick={() => setTab('All')}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter-section" className="newsletter">
        <div className="container">
          <h2>Stay ahead of the curve</h2>
          <p>
            Join 50,000+ process leaders. Weekly insights, reports, and event invites — straight to
            your inbox.
          </p>
          <form className="newsletter__form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to Encegen Insights!'); }}>
            <input type="email" required placeholder="Enter your work email" />
            <button type="submit">Subscribe →</button>
          </form>
          <p className="newsletter__note">✓ No spam ✓ Unsubscribe anytime ✓ 50,000+ subscribers</p>
        </div>
      </section>

      {/* INTERACTIVE READER & MEDIA MODAL */}
      {selectedInsight && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(10, 15, 29, 0.85)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedInsight(null)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '780px',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: '#ffffff',
              color: '#0f172a',
              borderRadius: '20px',
              padding: '2.5rem',
              position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedInsight(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: '#f1f5f9',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.2rem',
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '4px 14px',
                  background: '#eff6ff',
                  color: '#2563eb',
                  borderRadius: '20px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                }}
              >
                {selectedInsight.category}
              </span>
              {selectedInsight.meta && (
                <span style={{ fontSize: '0.85rem', color: '#64748b' }}>• {selectedInsight.meta}</span>
              )}
            </div>

            <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: '0 0 1rem 0', color: '#0f172a', lineHeight: 1.25 }}>
              {selectedInsight.title}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Avatar
                text={(selectedInsight.author || 'E')
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
                hue={selectedInsight.hue || 190}
                size={40}
              />
              <div>
                <strong style={{ display: 'block', color: '#0f172a' }}>{selectedInsight.author}</strong>
                <span style={{ color: '#64748b', fontSize: '0.85rem' }}>
                  {selectedInsight.author_role || 'Analyst'}
                </span>
              </div>
            </div>

            {/* Video Player Embed if present */}
            {videoEmbed ? (
              <div
                style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  borderRadius: '14px',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                }}
              >
                <iframe
                  src={videoEmbed}
                  title={selectedInsight.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : selectedInsight.cover_image ? (
              <img
                src={selectedInsight.cover_image}
                alt={selectedInsight.title}
                style={{
                  width: '100%',
                  maxHeight: '340px',
                  objectFit: 'cover',
                  borderRadius: '14px',
                  marginBottom: '1.5rem',
                }}
              />
            ) : null}

            {/* Description Lead */}
            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: '1.6',
                color: '#1e293b',
                fontWeight: 500,
                marginBottom: '1.5rem',
                borderLeft: '4px solid #3b82f6',
                paddingLeft: '1rem',
              }}
            >
              {selectedInsight.description}
            </p>

            {/* Detailed Content */}
            {selectedInsight.content && (
              <div
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: '#334155',
                  whiteSpace: 'pre-line',
                  marginBottom: '2rem',
                }}
              >
                {selectedInsight.content}
              </div>
            )}

            {/* External Media / Action Button if non-video link */}
            {selectedInsight.media_url && !videoEmbed && (
              <div style={{ marginTop: '1.5rem' }}>
                <a
                  href={selectedInsight.media_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#2563eb',
                    color: '#ffffff',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '10px',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  {selectedInsight.action_label || 'Open Link →'}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
