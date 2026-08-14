import { useEffect, useState } from 'react'
import { ArtTile, Btn, PageHero } from '../components/kit'
import './content.css'
import './Home.css'

interface ResourceArticle {
  id: number | string
  title: string
  slug?: string
  category: string
  summary: string
  content: string
  cover_image?: string
  author: string
  media_url?: string
  is_featured?: boolean
  status?: string
  created_at?: string
}

const TABS = ['All', 'Blog', 'Webinars', 'Reports', 'Documentation']

const DEFAULT_ARTICLES: ResourceArticle[] = [
  {
    id: 1,
    title: 'The Future of AI Automation & Autonomous Workflows',
    slug: 'the-future-of-ai-automation',
    category: 'Blog',
    summary: 'Discover how multi-agent systems and foundational models are reshaping modern business processes.',
    content: 'Enterprise AI is rapidly shifting from single-turn chat interfaces to full autonomous workflows. In this article, we explore how Encegen builds secure, high-precision agent networks for enterprise operations.\n\nKey takeaways:\n1. Autonomous tool calling reduces human workload by 70%.\n2. Multi-agent coordination handles complex multi-step reasoning.\n3. Real-time observability ensures compliance and safety.',
    cover_image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    author: 'Encegen AI Research',
    is_featured: true,
  },
  {
    id: 2,
    title: 'Building Scalable Cloud Microservices for Enterprise AI',
    slug: 'building-scalable-cloud-microservices',
    category: 'Documentation',
    summary: 'Best practices for architecting resilient REST & GraphQL APIs to handle high-concurrency LLM inference traffic.',
    content: 'Scaling AI inference requires modular backend microservices, intelligent request queuing, and persistent caching strategies. Learn how to optimize throughput while minimizing cloud latency.\n\nTopics covered:\n- Asynchronous queueing with Redis & BullMQ\n- Model quantization techniques\n- Auto-scaling microservice clusters',
    cover_image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    author: 'Tech Lead @ Encegen',
  },
  {
    id: 3,
    title: 'Executive Webinar: Accelerating Process Automation in 2026',
    slug: 'executive-webinar-process-automation',
    category: 'Webinars',
    summary: 'On-demand masterclass on identifying top ROI automation targets across ERP workflows.',
    content: 'Join Encegen architects as we break down concrete enterprise case studies and live benchmarks on automating legacy systems with multi-agent intelligence.\n\nKey discussion points:\n- Legacy system ingestion pipelines\n- Agent guardrails and compliance\n- Measuring automation ROI',
    cover_image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    author: 'Encegen Solutions Team',
    media_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 4,
    title: 'Global Enterprise Process Intelligence Report',
    slug: 'global-enterprise-process-intelligence-report',
    category: 'Reports',
    summary: 'Comprehensive market benchmark on AI integration speed and business impact metrics.',
    content: 'Our annual research survey capturing insights from over 800 IT leaders on agentic systems, security parameters, and measurable productivity gains across financial operations.\n\nBenchmark highlights:\n- 4.2x faster invoice reconciliation cycle time\n- 82% reduction in repetitive operational tickets\n- Zero downtime rollout frameworks',
    cover_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    author: 'Market Insights Group',
  },
]

const DOC_LINKS = ['Getting Started', 'API Reference', 'SDK & Developer Tools', 'Security & Compliance']

// Helper to convert YouTube / Vimeo URL to embed URL
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

export default function Resources() {
  const [tab, setTab] = useState('All')
  const [resourcesList, setResourcesList] = useState<ResourceArticle[]>(DEFAULT_ARTICLES)
  const [selectedResource, setSelectedResource] = useState<ResourceArticle | null>(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/resources')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const published = data.filter((b: any) => b.status === 'published' || !b.status)
          if (published.length > 0) {
            setResourcesList(published)
          }
        }
      })
      .catch((err) => console.warn('Could not fetch backend resources, using default dataset:', err))
  }, [])

  const filteredArticles =
    tab === 'All'
      ? resourcesList
      : resourcesList.filter((a) => {
          const cat = (a.category || '').toLowerCase()
          const target = tab.toLowerCase()
          return (
            cat === target ||
            cat.replace(/s$/, '') === target.replace(/s$/, '') ||
            (target === 'webinars' && (cat === 'webinar' || cat === 'webinars')) ||
            (target === 'reports' && (cat === 'report' || cat === 'reports'))
          )
        })

  const featuredResource = resourcesList.find((r) => r.is_featured) || resourcesList[0] || DEFAULT_ARTICLES[0]
  const videoEmbed = selectedResource?.media_url ? getEmbedUrl(selectedResource.media_url) : null

  return (
    <>
      <PageHero
        badge="Resources & Hub"
        title={
          <>
            Learn, Explore, and Master{' '}
            <span className="accent-purple">Enterprise AI</span>
          </>
        }
        sub="Articles, technical documentation, research reports, and webinars managed directly by the Encegen team."
      />

      <section className="section section--light" style={{ paddingTop: 64 }}>
        <div className="container">
          <div className="home-res-head">
            <h2 className="left-title" style={{ fontSize: 28 }}>
              Featured Resource
            </h2>
          </div>

          {featuredResource && (
            <div
              className="featured-card"
              style={{ marginTop: 26, cursor: 'pointer' }}
              onClick={() => setSelectedResource(featuredResource)}
            >
              <div className="featured-card__body">
                <span className="featured-card__chip">{featuredResource.category || 'Featured Article'}</span>
                <h3>{featuredResource.title}</h3>
                <p>{featuredResource.summary}</p>
                <div className="featured-card__actions">
                  <Btn variant="white">
                    {featuredResource.category === 'Webinars'
                      ? 'Watch Webinar →'
                      : featuredResource.category === 'Reports'
                      ? 'Read Report →'
                      : 'Read Full Article →'}
                  </Btn>
                </div>
              </div>
              {featuredResource.cover_image ? (
                <div
                  className="featured-card__art"
                  style={{
                    backgroundImage: `url(${featuredResource.cover_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '220px',
                    borderRadius: '12px',
                  }}
                />
              ) : (
                <div className="featured-card__art art art--magenta">
                  <span>2026</span>
                </div>
              )}
            </div>
          )}
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
            {filteredArticles.map((a) => {
              const actionText =
                a.category === 'Webinars'
                  ? 'Watch Webinar →'
                  : a.category === 'Reports'
                  ? 'Download Report →'
                  : a.category === 'Documentation'
                  ? 'View Docs →'
                  : 'Read Article →'

              return (
                <article
                  key={a.id}
                  className="acard"
                  style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
                  onClick={() => setSelectedResource(a)}
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
                    <ArtTile variant="cyan" className="acard__art" />
                  )}
                  <div className="acard__body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span className="acard__tag">{a.category}</span>
                    <h3>{a.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', margin: '0.5rem 0 1rem 0', flex: 1 }}>
                      {a.summary}
                    </p>
                    <div className="acard__foot" style={{ marginTop: 'auto' }}>
                      <span className="who">
                        <strong>{a.author}</strong>
                      </span>
                      <span style={{ color: '#2563eb', fontWeight: 600 }}>{actionText}</span>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {filteredArticles.length === 0 && (
            <p style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
              No resources found for this category.
            </p>
          )}
        </div>
      </section>

      {/* Documentation Section */}
      <section className="section section--light">
        <div className="container split">
          <div>
            <p className="shead__eyebrow">Documentation</p>
            <h2 className="left-title">Everything you need to build on Encegen.</h2>
            <p className="left-copy">
              Get your team up and running with our comprehensive developer guides and API references.
            </p>
            <ul className="check-list">
              {DOC_LINKS.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div style={{ marginTop: 30 }}>
              <Btn variant="lavender" onClick={() => setTab('Documentation')}>
                Browse docs →
              </Btn>
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
  apiKey: process.env.ENCEGEN_API_KEY,
  environment: 'production'
});

// Run autonomous agent pipeline
const result = await encegen.agents.execute({
  workflow: 'data-pipeline',
  params: { depth: 'deep' }
});`}
            </pre>
          </div>
        </div>
      </section>

      {/* INTERACTIVE RESOURCE READER & VIDEO MODAL */}
      {selectedResource && (
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
          onClick={() => setSelectedResource(null)}
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
              onClick={() => setSelectedResource(null)}
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

            <span
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                background: '#eff6ff',
                color: '#2563eb',
                borderRadius: '20px',
                fontWeight: 600,
                fontSize: '0.8rem',
                marginBottom: '1rem',
              }}
            >
              {selectedResource.category}
            </span>

            <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: '0 0 1rem 0', color: '#0f172a', lineHeight: 1.25 }}>
              {selectedResource.title}
            </h1>

            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              By <strong>{selectedResource.author}</strong>
            </p>

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
                  title={selectedResource.title}
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
            ) : selectedResource.cover_image ? (
              <img
                src={selectedResource.cover_image}
                alt={selectedResource.title}
                style={{
                  width: '100%',
                  maxHeight: '340px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  marginBottom: '1.5rem',
                }}
              />
            ) : null}

            {/* Summary Lead */}
            <p
              style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                color: '#1e293b',
                fontWeight: 500,
                marginBottom: '1.5rem',
                borderLeft: '4px solid #8b5cf6',
                paddingLeft: '1rem',
              }}
            >
              {selectedResource.summary}
            </p>

            {/* Full Body Text */}
            <div
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: '#334155',
                whiteSpace: 'pre-line',
              }}
            >
              {selectedResource.content}
            </div>

            {/* Optional external link button */}
            {selectedResource.media_url && !videoEmbed && (
              <div style={{ marginTop: '1.5rem' }}>
                <a
                  href={selectedResource.media_url}
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
                  Open Resource Link →
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
