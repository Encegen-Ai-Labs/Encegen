import { useEffect, useMemo, useState } from 'react'
import { SearchIcon } from '../components/icons'
import DetailModal from '../components/DetailModal'
import { API_BASE_URL } from '../config/api'
import './content.css'

const TABS = ['All Results', 'Blog', 'Resources', 'Products', 'Solutions', 'Videos']

const SUGGESTIONS = ['Process Mining', 'AI Solutions', 'SAP Integration', 'Order-to-Cash', 'Accounts Payable', 'ROI Calculator']

const TYPE_FILTERS = ['All Types', 'Blog Articles', 'Customer Stories', 'Whitepapers', 'Videos', 'Webinars', 'Documentation']

// Maps a result's display `tag` to the matching TYPE_FILTERS label — the two
// use different wording/pluralization, so this is an explicit lookup rather
// than a generic singular/plural strip (which doesn't hold for e.g.
// "Customer Story" → "Customer Stories").
const TAG_TO_TYPE_FILTER: Record<string, string> = {
  Blog: 'Blog Articles',
  'Customer Story': 'Customer Stories',
  Whitepaper: 'Whitepapers',
  Webinar: 'Webinars',
  Documentation: 'Documentation',
}

interface SearchItem {
  id: string | number
  source: 'static' | 'resource'
  tag: string
  topic?: string
  title: string
  desc: string
  meta: string
  action: string
  color: string
}

const RESULTS: SearchItem[] = [
  {
    id: 'static-1',
    source: 'static',
    tag: 'Blog',
    topic: 'Process Mining',
    color: '#6553ee',
    title: 'How Process Mining Unlocks Hidden Efficiency in SAP Environments',
    desc: 'Enterprise business processes are often siloed and invisible. Discover how mining your SAP event logs provides the objective truth about how work happens.',
    meta: '8 min read · June 12 2025 · Process Mining',
    action: 'See details →',
  },
  {
    id: 'static-2',
    source: 'static',
    tag: 'Customer Story',
    color: '#22c55e',
    title: 'How EasyHunt Accelerated Title Search and Land Records by 90% with Encegen AI',
    desc: 'By identifying bottlenecks in legal documentation, EasyHunt automated 99.4% of land revenue record extractions.',
    meta: '12 min · May 28 2025',
    action: 'See details →',
  },
  {
    id: 'static-3',
    source: 'static',
    tag: 'Whitepaper',
    topic: 'Process Mining',
    color: '#3b82f6',
    title: 'The 2026 State of Process Intelligence Report',
    desc: "The definitive guide to how the world's largest enterprises are leveraging AI and mining to drive resilience.",
    meta: 'Research Report · Q1 2026',
    action: 'See details →',
  },
  {
    id: 'static-4',
    source: 'static',
    tag: 'Product',
    topic: 'AI & Automation',
    color: '#f59e0b',
    title: 'Encegen EMS — Product Overview',
    desc: 'The Execution Management System is the brains of your process intelligence layer. Fix processes directly in your stack.',
    meta: 'Core Platform',
    action: 'See details →',
  },
  {
    id: 'static-5',
    source: 'static',
    tag: 'Webinar',
    topic: 'AI & Automation',
    color: '#8b5cf6',
    title: 'AI at Scale: How Fortune 500s Automate Process Execution',
    desc: 'Join CDOs from IBM and Airbus for a deep dive into scalable process automation strategies.',
    meta: 'Available On-Demand',
    action: 'See details →',
  },
  {
    id: 'static-6',
    source: 'static',
    tag: 'Documentation',
    topic: 'Process Mining',
    color: '#22d3ee',
    title: 'Getting Started with the Encegen Process Mining API',
    desc: 'Everything you need to know about pushing data from custom internal tools directly into the mining layer.',
    meta: 'Developer Docs',
    action: 'See details →',
  },
]

// Same category → tag mapping convention used by Resources.tsx's own tab
// filter (singular/plural tolerant), reused here for the "Resources" tab
// and Type-filter matching against fetched resource categories.
function categoryMatchesType(category: string, typeFilterLabel: string) {
  if (typeFilterLabel === 'All Types') return true
  const mapped = TAG_TO_TYPE_FILTER[category]
  if (mapped) return mapped === typeFilterLabel
  const cat = category.toLowerCase().replace(/s$/, '')
  const target = typeFilterLabel.toLowerCase().replace(/s$/, '')
  return cat === target
}

export default function SearchPage() {
  const [tab, setTab] = useState('All Results')
  const [selectedType, setSelectedType] = useState('All Types')
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [selectedResult, setSelectedResult] = useState<SearchItem | null>(null)
  const [resourceItems, setResourceItems] = useState<SearchItem[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  // Search should also surface Resources content — read-only fetch against
  // the same live endpoint Resources.tsx already calls. No backend change.
  useEffect(() => {
    fetch(`${API_BASE_URL}/resources`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const published = data.filter((r: any) => r.status === 'published' || !r.status)
          setResourceItems(
            published.map((r: any) => ({
              id: `resource-${r.id}`,
              source: 'resource' as const,
              tag: r.category || 'Resource',
              title: r.title,
              desc: r.summary || '',
              meta: r.author ? `By ${r.author}` : '',
              action: 'See details →',
              color: '#6553ee',
              // full body kept out of the list item; stashed for the modal via `raw`-style lookup below
            }))
          )
        }
      })
      .catch((err) => console.warn('Could not fetch backend resources for search:', err))
  }, [])

  const combined = useMemo(() => [...RESULTS, ...resourceItems], [resourceItems])

  const toggleTopic = (f: string) => {
    setSelectedTopics((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]))
  }
  const clearAllFilters = () => setSelectedType('All Types')

  // Typing a query overrides Type/Topic-pill filtering entirely (a "start
  // fresh" search) rather than combining with them — reset both so the UI
  // (radio selection, pill highlighting) doesn't show stale, ignored state.
  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    if (value.trim() !== '') {
      setSelectedType('All Types')
      setSelectedTopics([])
    }
  }

  const filteredResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (query !== '') {
      return combined.filter((item) => {
        return (
          item.title.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query) ||
          item.tag.toLowerCase().includes(query) ||
          (item.topic ? item.topic.toLowerCase().includes(query) : false)
        )
      })
    }
    return combined.filter((item) => {
      // Tab filter
      if (tab !== 'All Results') {
        if (tab === 'Resources' && item.source !== 'resource') return false
        if (tab === 'Blog' && item.tag !== 'Blog') return false
        if (tab === 'Products' && item.tag !== 'Product') return false
        if (tab === 'Solutions' && item.tag !== 'Solution') return false
        if (tab === 'Videos' && item.tag !== 'Webinar') return false
      }
      // Type filter (single-select)
      if (!categoryMatchesType(item.tag, selectedType)) return false
      // Topic pill filter (multi-select — empty means no constraint)
      if (selectedTopics.length > 0 && !(item.topic && selectedTopics.includes(item.topic))) return false
      return true
    })
  }, [combined, tab, selectedType, selectedTopics, searchQuery])

  return (
    <>
      <section className="search-hero">
        <div className="container">
          <p className="shead__eyebrow">Search</p>
          <h1>What are you looking for?</h1>
          <div className="search-hero__bar">
            <SearchIcon size={19} />
            <input
              placeholder="Search for products, solutions, resources, use cases…"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            <button type="button">Search</button>
          </div>
          <div className="search-hero__suggestions">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                className={selectedTopics.includes(s) ? 'active' : ''}
                onClick={() => toggleTopic(s)}
              >
                {s}
              </button>
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
          </div>

          <div className="search-layout">
            <aside className="sfilter">
              <h4>Filter by Type</h4>
              {TYPE_FILTERS.map((f) => (
                <label key={f}>
                  <input
                    type="radio"
                    name="type-filter"
                    checked={selectedType === f}
                    onChange={() => setSelectedType(f)}
                  />{' '}
                  {f}
                </label>
              ))}
              <button className="sfilter__clear" onClick={clearAllFilters}>
                Clear all filters
              </button>
            </aside>

            <div>
              {filteredResults.map((r) => (
                <article key={r.id} className="sresult">
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
                    <a href="#" onClick={(e) => { e.preventDefault(); setSelectedResult(r) }}>
                      {r.action}
                    </a>
                  </div>
                </article>
              ))}

              {filteredResults.length === 0 && (
                <p style={{ textAlign: 'center', padding: '3rem', color: 'var(--gray-600)' }}>
                  No results match the current filters.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <DetailModal
        isOpen={selectedResult !== null}
        onClose={() => setSelectedResult(null)}
        tag={selectedResult?.tag || ''}
        title={selectedResult?.title || ''}
        meta={selectedResult?.meta}
        body={selectedResult?.desc || ''}
      />
    </>
  )
}
