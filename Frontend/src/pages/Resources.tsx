import { useEffect, useState } from 'react'
import { ArtTile, Btn, PageHero } from '../components/kit'
import { API_BASE_URL } from '../config/api'
import { downloadReportAsWord } from '../utils/downloadWordDoc'
import './content.css'
import './Resources.css'

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
    media_url: 'https://youtu.be/ECB1RyE9Q40',
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
    fetch(`${API_BASE_URL}/resources`)
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
        className="resources-hero"
        badge="Resources & Hub"
        title={
          <>
            Learn, Explore, and Master{' '}
            <span className="accent-purple">Process Intelligence</span>
          </>
        }
        sub="Articles, technical documentation, research reports, and webinars managed directly by the Encegen team."
      />

      <section className="resources-featured section section--light">
        <div className="container">
          <div className="resources-section-heading">
            <span className="resources-section-heading__eyebrow">Featured</span>
            <h2>Featured this month</h2>
            <a href="#resource-library">View all →</a>
          </div>

          {featuredResource && (
            <div
              className="featured-card"
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  setSelectedResource(featuredResource)
                }
              }}
              onClick={() => setSelectedResource(featuredResource)}
            >
              <div className="featured-card__body">
                <span className="featured-card__chip">{featuredResource.category || 'Featured Article'}</span>
                <h3>{featuredResource.title}</h3>
                <p>{featuredResource.summary}</p>
                <div className="featured-card__actions">
                  <Btn variant="white" onClick={() => setSelectedResource(featuredResource)}>
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
      <section className="resources-library section section--lavender" id="resource-library">
        <div className="container">
          <div className="pill-tabs resources-tabs" role="tablist" aria-label="Resource categories">
            {TABS.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={t === tab}
                className={t === tab ? 'active' : ''}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="cards-3 resources-grid">
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
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      setSelectedResource(a)
                    }
                  }}
                  onClick={() => setSelectedResource(a)}
                >
                  {a.cover_image ? (
                    <div
                      className="acard__image"
                      style={{ backgroundImage: `url(${a.cover_image})` }}
                    />
                  ) : (
                    <ArtTile variant="cyan" className="acard__art" />
                  )}
                  <div className="acard__body">
                    <span className="acard__tag">{a.category}</span>
                    <h3>{a.title}</h3>
                    <p className="acard__desc">
                      {a.summary}
                    </p>
                    <div className="acard__foot">
                      <span className="who">
                        <strong>{a.author}</strong>
                      </span>
                      {a.category === 'Reports' ? (
                        <button
                          type="button"
                          style={{
                            background: '#eff6ff',
                            color: '#2563eb',
                            border: '1px solid #bfdbfe',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontWeight: 600,
                            fontSize: '0.82rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                          onClick={(e) => {
                            e.stopPropagation()
                            downloadReportAsWord(a)
                          }}
                        >
                          📥 Download .doc
                        </button>
                      ) : (
                        <span style={{ color: '#2563eb', fontWeight: 600 }}>{actionText}</span>
                      )}
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
      <section className="resources-documentation section section--light">
        <div className="container split resources-documentation__layout">
          <div className="resources-documentation__copy">
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
            <div className="resources-documentation__action">
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
          className="resource-reader-backdrop"
          role="presentation"
          onClick={() => setSelectedResource(null)}
        >
          <div
            className="resource-reader"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resource-reader-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="resource-reader__close"
              aria-label="Close resource"
              onClick={() => setSelectedResource(null)}
            >
              ✕
            </button>

            <span className="resource-reader__category">
              {selectedResource.category}
            </span>

            <h1 id="resource-reader-title">
              {selectedResource.title}
            </h1>

            <p className="resource-reader__author">
              By <strong>{selectedResource.author}</strong>
            </p>

            {/* Video Player Embed if present */}
            {videoEmbed ? (
              <div className="resource-reader__video">
                <iframe
                  src={videoEmbed}
                  title={selectedResource.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : selectedResource.cover_image ? (
              <img
                src={selectedResource.cover_image}
                alt={selectedResource.title}
                className="resource-reader__cover"
              />
            ) : null}

            {/* Summary Lead */}
            <p className="resource-reader__summary">
              {selectedResource.summary}
            </p>

            {/* Full Body Text */}
            <div className="resource-reader__content">
              {selectedResource.content}
            </div>

            {/* Report Download or External Link Action */}
            <div className="resource-reader__actions">
              {selectedResource.category === 'Reports' && (
                <button
                  type="button"
                  onClick={() => downloadReportAsWord(selectedResource)}
                >
                  📥 Download Report (.doc / Word)
                </button>
              )}

              {selectedResource.media_url && !videoEmbed && (
                <a
                  href={selectedResource.media_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Resource Link →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
