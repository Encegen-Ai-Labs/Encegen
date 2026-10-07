import { useEffect, useMemo, useState } from 'react'
import { SearchIcon } from '../components/icons'
import DetailModal from '../components/DetailModal'
import { API_BASE_URL } from '../config/api'
import './content.css'

const TABS = ['All Results', 'Blog', 'Resources', 'Products', 'Solutions', 'Videos']

const SUGGESTIONS = [
  'Process Mining',
  'AI Solutions',
  'SAP Integration',
  'Order-to-Cash',
  'Accounts Payable',
  'ROI Calculator',
]

const TYPE_FILTERS = [
  'All Types',
  'Blog Articles',
  'Customer Stories',
  'Whitepapers',
  'Videos',
  'Webinars',
  'Documentation',
]

const TOPIC_FILTERS = [
  'Process Mining',
  'AI & Automation',
  'Supply Chain',
  'Finance Ops',
  'IT Operations',
  'SAP Integration',
]

const INDUSTRY_FILTERS = [
  'Manufacturing',
  'Financial Services',
  'Retail',
  'Healthcare',
]

const TAG_TO_TYPE_FILTER: Record<string, string> = {
  Blog: 'Blog Articles',
  'Customer Story': 'Customer Stories',
  Whitepaper: 'Whitepapers',
  Report: 'Whitepapers',
  Reports: 'Whitepapers',
  Video: 'Videos',
  Videos: 'Videos',
  Webinar: 'Webinars',
  Webinars: 'Webinars',
  Documentation: 'Documentation',
}

interface SearchItem {
  id: string | number
  source: 'static' | 'resource'
  tag: string
  topics: string[]
  industries: string[]
  suggestions?: string[]
  title: string
  desc: string
  body?: string
  meta: string
  action: string
  color: string
  tagBg?: string
  actionColor?: string
  thumbType?: 'whitepaper' | 'webinar'
}

const RESULTS: SearchItem[] = [
  {
    id: 'static-1',
    source: 'static',
    tag: 'Blog',
    topics: ['Process Mining', 'SAP Integration', 'IT Operations'],
    industries: ['Manufacturing', 'Retail'],
    suggestions: ['Process Mining', 'SAP Integration', 'Order-to-Cash'],
    color: '#6553ee',
    tagBg: '#eeebfc',
    actionColor: '#6553ee',
    title: 'How Process Mining Unlocks Hidden Efficiency in SAP Environments',
    desc: 'Enterprise business processes are often siloed and invisible. Discover how mining your SAP event logs provides the objective truth about how work happens.',
    meta: '8 min read · June 12 2025 · Process Mining',
    action: 'Read article →',
  },
  {
    id: 'static-2',
    source: 'static',
    tag: 'Customer Story',
    topics: ['AI & Automation', 'Finance Ops'],
    industries: ['Financial Services', 'Retail'],
    suggestions: ['AI Solutions', 'Accounts Payable', 'ROI Calculator'],
    color: '#16a34a',
    tagBg: '#dcfce7',
    actionColor: '#16a34a',
    title: 'How EasyHunt Accelerated Title Search and Land Records by 90% with Encegen AI',
    desc: 'By identifying bottlenecks in legal documentation, EasyHunt automated 99.4% of land revenue record extractions.',
    meta: '12 min · May 28 2025',
    action: 'Read story →',
  },
  {
    id: 'static-3',
    source: 'static',
    tag: 'Whitepaper',
    topics: ['Process Mining', 'AI & Automation', 'Supply Chain'],
    industries: ['Manufacturing', 'Financial Services', 'Retail', 'Healthcare'],
    suggestions: ['Process Mining', 'AI Solutions', 'ROI Calculator'],
    color: '#2563eb',
    tagBg: '#dbeafe',
    actionColor: '#2563eb',
    thumbType: 'whitepaper',
    title: 'The 2026 State of Process Intelligence Report',
    desc: "The definitive guide to how the world's largest enterprises are leveraging AI and mining to drive resilience.",
    meta: 'Research Report · Q1 2026',
    action: 'Download PDF →',
  },
  {
    id: 'static-4',
    source: 'static',
    tag: 'Product',
    topics: ['AI & Automation', 'Process Mining', 'Finance Ops', 'IT Operations'],
    industries: ['Manufacturing', 'Financial Services', 'Retail', 'Healthcare'],
    suggestions: ['Process Mining', 'AI Solutions', 'Order-to-Cash', 'Accounts Payable', 'ROI Calculator'],
    color: '#d97706',
    tagBg: '#fef3c7',
    actionColor: '#d97706',
    title: 'Encegen EMS — Product Overview',
    desc: 'The Execution Management System is the brains of your process intelligence layer. Fix processes directly in your stack.',
    meta: 'Core Platform',
    action: 'Explore product →',
  },
  {
    id: 'static-5',
    source: 'static',
    tag: 'Webinar',
    topics: ['AI & Automation', 'Supply Chain', 'IT Operations'],
    industries: ['Manufacturing', 'Healthcare', 'Financial Services'],
    suggestions: ['AI Solutions', 'Order-to-Cash'],
    color: '#7c3aed',
    tagBg: '#ede9fe',
    actionColor: '#6553ee',
    thumbType: 'webinar',
    title: 'AI at Scale: How Fortune 500s Automate Process Execution',
    desc: 'Join CDOs from IBM and Airbus for a deep dive into scalable process automation strategies.',
    meta: 'Available On-Demand',
    action: 'Watch now →',
  },
  {
    id: 'static-6',
    source: 'static',
    tag: 'Documentation',
    topics: ['Process Mining', 'IT Operations', 'SAP Integration'],
    industries: ['Financial Services', 'Healthcare', 'Manufacturing'],
    suggestions: ['Process Mining', 'SAP Integration'],
    color: '#33315c',
    tagBg: '#f1f0f7',
    actionColor: '#16143c',
    title: 'Getting Started with the Encegen Process Mining API',
    desc: 'Everything you need to know about pushing data from custom internal tools directly into the mining layer.',
    meta: 'Developer Docs',
    action: 'View docs →',
  },
]

function inferResourceStyle(category: string): Pick<SearchItem, 'color' | 'tagBg' | 'actionColor' | 'action' | 'thumbType'> {
  const cat = category.toLowerCase()
  if (cat.includes('webinar') || cat.includes('video')) {
    return {
      color: '#7c3aed',
      tagBg: '#ede9fe',
      actionColor: '#6553ee',
      action: 'Watch now →',
      thumbType: 'webinar',
    }
  }
  if (cat.includes('whitepaper') || cat.includes('report')) {
    return {
      color: '#2563eb',
      tagBg: '#dbeafe',
      actionColor: '#2563eb',
      action: 'Download PDF →',
      thumbType: 'whitepaper',
    }
  }
  if (cat.includes('doc')) {
    return {
      color: '#33315c',
      tagBg: '#f1f0f7',
      actionColor: '#16143c',
      action: 'View docs →',
    }
  }
  if (cat.includes('story') || cat.includes('case')) {
    return {
      color: '#16a34a',
      tagBg: '#dcfce7',
      actionColor: '#16a34a',
      action: 'Read story →',
    }
  }
  return {
    color: '#6553ee',
    tagBg: '#eeebfc',
    actionColor: '#6553ee',
    action: 'Read article →',
  }
}

function inferResourceTopics(title: string, summary: string, category: string): string[] {
  const text = `${title} ${summary} ${category}`.toLowerCase()
  const matched: string[] = []
  if (text.includes('mining') || text.includes('process')) matched.push('Process Mining')
  if (text.includes('ai') || text.includes('agent') || text.includes('automat')) matched.push('AI & Automation')
  if (text.includes('supply') || text.includes('logistic')) matched.push('Supply Chain')
  if (text.includes('finance') || text.includes('invoice') || text.includes('payable')) matched.push('Finance Ops')
  if (text.includes('cloud') || text.includes('api') || text.includes('microservice') || text.includes('it ')) matched.push('IT Operations')
  if (text.includes('sap') || text.includes('erp')) matched.push('SAP Integration')
  return matched.length > 0 ? matched : ['AI & Automation', 'Process Mining']
}

function categoryMatchesSingleType(category: string, typeFilterLabel: string) {
  if (typeFilterLabel === 'All Types') return true
  if (typeFilterLabel === 'Videos' && (category === 'Webinar' || category === 'Webinars' || category === 'Video' || category === 'Videos')) {
    return true
  }
  const mapped = TAG_TO_TYPE_FILTER[category]
  if (mapped) return mapped === typeFilterLabel
  const cat = category.toLowerCase().replace(/s$/, '')
  const target = typeFilterLabel.toLowerCase().replace(/s$/, '')
  return cat === target
}

function categoryMatchesSelectedTypes(category: string, selectedTypes: string[]) {
  if (selectedTypes.length === 0 || selectedTypes.includes('All Types')) return true
  return selectedTypes.some((t) => categoryMatchesSingleType(category, t))
}

export default function SearchPage() {
  const [tab, setTab] = useState('All Results')
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['All Types'])
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([])
  const [selectedResult, setSelectedResult] = useState<SearchItem | null>(null)
  const [resourceItems, setResourceItems] = useState<SearchItem[]>([])
  const [searchInput, setSearchInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetch(`${API_BASE_URL}/resources`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const published = data.filter((r: any) => r.status === 'published' || !r.status)
          setResourceItems(
            published.map((r: any) => {
              const cat = r.category || 'Resource'
              const style = inferResourceStyle(cat)
              return {
                id: `resource-${r.id}`,
                source: 'resource' as const,
                tag: cat,
                topics: inferResourceTopics(r.title || '', r.summary || '', cat),
                industries: ['Manufacturing', 'Financial Services', 'Retail', 'Healthcare'],
                title: r.title,
                desc: r.summary || '',
                body: r.content || r.summary || '',
                meta: r.author ? `By ${r.author}` : 'Encegen Resource',
                ...style,
              }
            })
          )
        }
      })
      .catch((err) => console.warn('Could not fetch backend resources for search:', err))
  }, [])

  const combined = useMemo(() => [...RESULTS, ...resourceItems], [resourceItems])

  const toggleType = (typeLabel: string) => {
    if (typeLabel === 'All Types') {
      setSelectedTypes(['All Types'])
      return
    }
    setSelectedTypes((prev) => {
      const withoutAll = prev.filter((x) => x !== 'All Types')
      const exists = withoutAll.includes(typeLabel)
      const next = exists ? withoutAll.filter((x) => x !== typeLabel) : [...withoutAll, typeLabel]
      return next.length === 0 ? ['All Types'] : next
    })
  }

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) => (prev.includes(topic) ? prev.filter((x) => x !== topic) : [...prev, topic]))
  }

  const toggleIndustry = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry) ? prev.filter((x) => x !== industry) : [...prev, industry]
    )
  }

  const toggleSuggestion = (suggestion: string) => {
    setSelectedSuggestions((prev) =>
      prev.includes(suggestion) ? prev.filter((x) => x !== suggestion) : [...prev, suggestion]
    )
  }

  const clearAllFilters = () => {
    setSelectedTypes(['All Types'])
    setSelectedTopics([])
    setSelectedIndustries([])
    setSelectedSuggestions([])
    setTab('All Results')
    setSearchInput('')
    setSearchQuery('')
  }

  const handleSearchChange = (value: string) => {
    setSearchInput(value)
    setSearchQuery(value)
  }

  const handleSearchSubmit = () => {
    setSearchQuery(searchInput)
  }

  const filteredResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return combined.filter((item) => {
      // 1. Search query match
      if (query !== '') {
        const matchesQuery =
          item.title.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query) ||
          item.tag.toLowerCase().includes(query) ||
          item.meta.toLowerCase().includes(query) ||
          item.topics.some((t) => t.toLowerCase().includes(query)) ||
          item.industries.some((ind) => ind.toLowerCase().includes(query)) ||
          (item.suggestions ? item.suggestions.some((s) => s.toLowerCase().includes(query)) : false)
        if (!matchesQuery) return false
      }

      // 2. Tab filter
      if (tab !== 'All Results') {
        const tagLower = item.tag.toLowerCase()
        if (tab === 'Blog' && tagLower !== 'blog') return false
        if (
          tab === 'Resources' &&
          item.source !== 'resource' &&
          tagLower !== 'whitepaper' &&
          tagLower !== 'documentation' &&
          tagLower !== 'report'
        ) {
          return false
        }
        if (tab === 'Products' && tagLower !== 'product') return false
        if (tab === 'Solutions' && tagLower !== 'solution' && tagLower !== 'customer story' && tagLower !== 'product') {
          return false
        }
        if (tab === 'Videos' && tagLower !== 'webinar' && tagLower !== 'webinars' && tagLower !== 'video') {
          return false
        }
      }

      // 3. Filter by Type (sidebar checkboxes)
      if (!categoryMatchesSelectedTypes(item.tag, selectedTypes)) return false

      // 4. Filter by Topic (sidebar checkboxes)
      if (selectedTopics.length > 0) {
        const matchesTopic = selectedTopics.some((t) => item.topics.includes(t))
        if (!matchesTopic) return false
      }

      // 5. Filter by Industry (sidebar checkboxes)
      if (selectedIndustries.length > 0) {
        const matchesIndustry = selectedIndustries.some((ind) => item.industries.includes(ind))
        if (!matchesIndustry) return false
      }

      // 6. Hero Suggestion pills
      if (selectedSuggestions.length > 0) {
        const matchesSuggestion = selectedSuggestions.some((s) => {
          const sLower = s.toLowerCase()
          return (
            (item.suggestions && item.suggestions.includes(s)) ||
            item.topics.includes(s) ||
            item.title.toLowerCase().includes(sLower) ||
            item.desc.toLowerCase().includes(sLower)
          )
        })
        if (!matchesSuggestion) return false
      }

      return true
    })
  }, [combined, tab, selectedTypes, selectedTopics, selectedIndustries, selectedSuggestions, searchQuery])

  return (
    <>
      <section className="search-hero">
        <div className="container">
          <p className="shead__eyebrow">SEARCH</p>
          <h1>What are you looking for?</h1>
          <div className="search-hero__bar">
            <SearchIcon size={18} />
            <input
              placeholder="Search for products, solutions, resources, use cases..."
              value={searchInput}
              onChange={(e) => handleSearchChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSearchSubmit()
              }}
            />
            <button type="button" onClick={handleSearchSubmit}>
              Search
            </button>
          </div>
          <div className="search-hero__suggestions">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                className={selectedSuggestions.includes(s) ? 'active' : ''}
                onClick={() => toggleSuggestion(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light search-results-section">
        <div className="container">
          <div className="search-tabs">
            {TABS.map((t) => (
              <button key={t} className={t === tab ? 'active' : ''} onClick={() => setTab(t)}>
                {t}
              </button>
            ))}
            <span className="search-tabs__count">
              {filteredResults.length.toLocaleString()} {filteredResults.length === 1 ? 'result' : 'results'}
            </span>
          </div>

          <div className="search-layout">
            <aside className="sfilter">
              <div className="sfilter__group">
                <h4>FILTER BY TYPE</h4>
                {TYPE_FILTERS.map((f) => {
                  const isChecked = selectedTypes.includes(f)
                  return (
                    <label key={f} className={isChecked ? 'is-checked' : ''}>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleType(f)}
                      />
                      <span>{f}</span>
                    </label>
                  )
                })}
              </div>

              <div className="sfilter__group">
                <h4>FILTER BY TOPIC</h4>
                {TOPIC_FILTERS.map((f) => {
                  const isChecked = selectedTopics.includes(f)
                  return (
                    <label key={f} className={isChecked ? 'is-checked' : ''}>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleTopic(f)}
                      />
                      <span>{f}</span>
                    </label>
                  )
                })}
              </div>

              <div className="sfilter__group sfilter__group--last">
                <h4>FILTER BY INDUSTRY</h4>
                {INDUSTRY_FILTERS.map((f) => {
                  const isChecked = selectedIndustries.includes(f)
                  return (
                    <label key={f} className={isChecked ? 'is-checked' : ''}>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleIndustry(f)}
                      />
                      <span>{f}</span>
                    </label>
                  )
                })}
              </div>

              <button type="button" className="sfilter__clear" onClick={clearAllFilters}>
                Clear all filters
              </button>
            </aside>

            <div className="sresults-list">
              {filteredResults.map((r) => (
                <article
                  key={r.id}
                  className={`sresult ${r.thumbType ? 'sresult--with-media' : ''}`}
                >
                  <div className="sresult__main">
                    <span
                      className="sresult__tag"
                      style={{
                        background: r.tagBg || `color-mix(in srgb, ${r.color} 13%, transparent)`,
                        color: r.color,
                      }}
                    >
                      {r.tag}
                    </span>
                    <h3>{r.title}</h3>
                    <p>{r.desc}</p>
                    <div className="sresult__foot">
                      <span>{r.meta}</span>
                      {!r.thumbType && (
                        <a
                          href="#"
                          style={{ color: r.actionColor || r.color }}
                          onClick={(e) => {
                            e.preventDefault()
                            setSelectedResult(r)
                          }}
                        >
                          {r.action}
                        </a>
                      )}
                    </div>
                  </div>

                  {r.thumbType && (
                    <div className="sresult__side">
                      <div
                        className={`sresult__thumb sresult__thumb--${r.thumbType}`}
                        onClick={() => setSelectedResult(r)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            setSelectedResult(r)
                          }
                        }}
                      >
                        {r.thumbType === 'webinar' && (
                          <span className="sresult__play-badge" aria-hidden="true">
                            <span className="sresult__play-dot" />
                          </span>
                        )}
                      </div>
                      <a
                        href="#"
                        className="sresult__side-action"
                        style={{ color: r.actionColor || r.color }}
                        onClick={(e) => {
                          e.preventDefault()
                          setSelectedResult(r)
                        }}
                      >
                        {r.action}
                      </a>
                    </div>
                  )}
                </article>
              ))}

              {filteredResults.length === 0 && (
                <div className="sresult-empty">
                  <p>No results match the current filters.</p>
                  <button type="button" className="sfilter__clear" onClick={clearAllFilters}>
                    Reset filters
                  </button>
                </div>
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
        body={selectedResult?.body || selectedResult?.desc || ''}
      />
    </>
  )
}

