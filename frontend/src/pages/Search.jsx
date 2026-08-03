import { useState, useMemo, useEffect } from 'react';
import { FiSearch, FiPlay, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { searchItems } from '../data/searchData';
import './Search.css';

const ITEMS_PER_PAGE = 5;

// Suggested queries
const SUGGESTIONS = [
  'Process Mining',
  'AI Solutions',
  'SAP Integration',
  'Order-to-Cash',
  'Accounts Payable',
  'ROI Calculator'
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeQuery, setActiveQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All Results');
  const [currentPage, setCurrentPage] = useState(1);

  // Sidebar filters states
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  // Helper to change tab & reset pagination
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  // Handle suggested tag click
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setActiveQuery(suggestion);
    setCurrentPage(1);
  };

  // Handle Search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveQuery(searchQuery);
    setCurrentPage(1);
  };

  // Checkbox toggle handlers
  const handleTypeChange = (type) => {
    if (type === 'All Types') {
      setSelectedTypes([]);
    } else {
      setSelectedTypes(prev => 
        prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
      );
    }
    setCurrentPage(1);
  };

  const handleTopicChange = (topic) => {
    setSelectedTopics(prev => 
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
    setCurrentPage(1);
  };

  const handleIndustryChange = (industry) => {
    setSelectedIndustries(prev => 
      prev.includes(industry) ? prev.filter(i => i !== industry) : [...prev, industry]
    );
    setCurrentPage(1);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSearchQuery('');
    setActiveQuery('');
    setActiveTab('All Results');
    setSelectedTypes([]);
    setSelectedTopics([]);
    setSelectedIndustries([]);
    setCurrentPage(1);
  };

  // Real-time filtering logic
  const filteredItems = useMemo(() => {
    return searchItems.filter(item => {
      // 1. Search query filter (matches title or description or tags)
      const q = activeQuery.toLowerCase().trim();
      if (q) {
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesTopic = item.topic.toLowerCase().includes(q);
        const matchesType = item.type.toLowerCase().includes(q);
        const matchesIndustry = item.industry.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesTopic && !matchesType && !matchesIndustry) {
          return false;
        }
      }

      // 2. Tab selection filter (Blog, Resources, Products, Solutions, Videos)
      if (activeTab !== 'All Results') {
        if (item.tab !== activeTab) {
          return false;
        }
      }

      // 3. Sidebar checkbox filters
      // Filter by Type
      if (selectedTypes.length > 0) {
        if (!selectedTypes.includes(item.type)) {
          return false;
        }
      }

      // Filter by Topic
      if (selectedTopics.length > 0) {
        if (!selectedTopics.includes(item.topic)) {
          return false;
        }
      }

      // Filter by Industry
      if (selectedIndustries.length > 0) {
        if (!selectedIndustries.includes(item.industry)) {
          return false;
        }
      }

      return true;
    });
  }, [activeQuery, activeTab, selectedTypes, selectedTopics, selectedIndustries]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = useMemo(() => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Helper to render pagination items matching figma layout
  const renderPaginationButtons = () => {
    const buttons = [];
    
    // Always show page 1
    buttons.push(
      <button 
        key={1} 
        onClick={() => setCurrentPage(1)} 
        className={`pagination-btn ${currentPage === 1 ? 'active' : ''}`}
      >
        1
      </button>
    );

    if (totalPages <= 1) return buttons;

    // Show ellipsis if current page is far from start
    if (currentPage > 3) {
      buttons.push(<span key="ellipsis-start" className="pagination-ellipsis">..</span>);
    }

    // Show current page if it's not page 1 or last page
    if (currentPage !== 1 && currentPage !== totalPages) {
      // Show page before current if applicable
      if (currentPage > 2) {
        buttons.push(
          <button 
            key={currentPage - 1} 
            onClick={() => setCurrentPage(currentPage - 1)} 
            className="pagination-btn"
          >
            {currentPage - 1}
          </button>
        );
      }

      // Show current page
      buttons.push(
        <button 
          key={currentPage} 
          className="pagination-btn active"
          disabled
        >
          {currentPage}
        </button>
      );

      // Show page after current if applicable
      if (currentPage < totalPages - 1) {
        buttons.push(
          <button 
            key={currentPage + 1} 
            onClick={() => setCurrentPage(currentPage + 1)} 
            className="pagination-btn"
          >
            {currentPage + 1}
          </button>
        );
      }
    } else {
      // If we are at page 1, show page 2 if it exists and total pages > 2
      if (currentPage === 1 && totalPages > 2) {
        buttons.push(
          <button 
            key={2} 
            onClick={() => setCurrentPage(2)} 
            className="pagination-btn"
          >
            2
          </button>
        );
        if (totalPages > 3) {
          buttons.push(
            <button 
              key={3} 
              onClick={() => setCurrentPage(3)} 
              className="pagination-btn"
            >
              3
            </button>
          );
        }
      }
      
      // If we are at last page, show preceding pages
      if (currentPage === totalPages && totalPages > 2) {
        if (totalPages > 3) {
          buttons.push(
            <button 
              key={totalPages - 2} 
              onClick={() => setCurrentPage(totalPages - 2)} 
              className="pagination-btn"
            >
              {totalPages - 2}
            </button>
          );
        }
        buttons.push(
          <button 
            key={totalPages - 1} 
            onClick={() => setCurrentPage(totalPages - 1)} 
            className="pagination-btn"
          >
            {totalPages - 1}
          </button>
        );
      }
    }

    // Show ellipsis if current page is far from end
    if (currentPage < totalPages - 2 && totalPages > 4) {
      buttons.push(<span key="ellipsis-end" className="pagination-ellipsis">..</span>);
    }

    // Always show last page
    if (totalPages > 1) {
      buttons.push(
        <button 
          key={totalPages} 
          onClick={() => setCurrentPage(totalPages)} 
          className={`pagination-btn ${currentPage === totalPages ? 'active' : ''}`}
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="search-page">
      <div className="container">
        
        {/* Header section */}
        <header className="search-header">
          <span className="search-eyebrow">Search</span>
          <h1 className="search-title">What are you looking for?</h1>
          
          <form className="search-bar-container" onSubmit={handleSearchSubmit}>
            <span className="search-input-icon"><FiSearch size={20} /></span>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search for products, solutions, resources, use cases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                type="button" 
                onClick={() => setSearchQuery('')} 
                style={{ background: 'none', border: 'none', color: '#9ca3af', marginRight: '10px', cursor: 'pointer' }}
                aria-label="Clear text"
              >
                <FiX size={18} />
              </button>
            )}
            <button type="submit" className="search-submit-btn">Search</button>
          </form>

          {/* Suggested tags */}
          <div className="search-suggestions">
            <span className="suggestion-label">Suggestions:</span>
            {SUGGESTIONS.map(term => (
              <button 
                key={term} 
                type="button" 
                className="suggestion-pill"
                onClick={() => handleSuggestionClick(term)}
              >
                {term}
              </button>
            ))}
          </div>
        </header>

        {/* Results tab navigation bar */}
        <section className="results-bar">
          <div className="results-tabs">
            {['All Results', 'Blog', 'Resources', 'Products', 'Solutions', 'Videos'].map(tab => (
              <button 
                key={tab} 
                className={`results-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="results-count">
            {filteredItems.length.toLocaleString()} results
          </div>
        </section>

        {/* Sidebar filters + results cards grid */}
        <div className="search-grid">
          
          {/* Sidebar filters column */}
          <aside className="filters-sidebar">
            
            {/* Filter by Type */}
            <div className="filter-section">
              <h3 className="filter-section-title">Filter by Type</h3>
              <div className="filter-list">
                <label className="filter-checkbox-label">
                  <input 
                    type="checkbox" 
                    className="filter-checkbox"
                    checked={selectedTypes.length === 0}
                    onChange={() => handleTypeChange('All Types')}
                  />
                  All Types
                </label>
                {[
                  'Blog Articles', 
                  'Customer Stories', 
                  'Whitepapers', 
                  'Videos', 
                  'Webinars', 
                  'Documentation'
                ].map(type => (
                  <label key={type} className="filter-checkbox-label">
                    <input 
                      type="checkbox" 
                      className="filter-checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleTypeChange(type)}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            {/* Filter by Topic */}
            <div className="filter-section">
              <h3 className="filter-section-title">Filter by Topic</h3>
              <div className="filter-list">
                {[
                  'Process Mining', 
                  'AI & Automation', 
                  'Supply Chain', 
                  'Finance Ops', 
                  'IT Operations', 
                  'SAP Integration'
                ].map(topic => (
                  <label key={topic} className="filter-checkbox-label">
                    <input 
                      type="checkbox" 
                      className="filter-checkbox"
                      checked={selectedTopics.includes(topic)}
                      onChange={() => handleTopicChange(topic)}
                    />
                    {topic}
                  </label>
                ))}
              </div>
            </div>

            {/* Filter by Industry */}
            <div className="filter-section">
              <h3 className="filter-section-title">Filter by Industry</h3>
              <div className="filter-list">
                {[
                  'Manufacturing', 
                  'Financial Services', 
                  'Retail', 
                  'Healthcare'
                ].map(ind => (
                  <label key={ind} className="filter-checkbox-label">
                    <input 
                      type="checkbox" 
                      className="filter-checkbox"
                      checked={selectedIndustries.includes(ind)}
                      onChange={() => handleIndustryChange(ind)}
                    />
                    {ind}
                  </label>
                ))}
              </div>
            </div>

            {/* Clear filters action */}
            <button className="clear-filters-btn" onClick={handleClearFilters}>
              Clear all filters
            </button>

          </aside>

          {/* Results List Column */}
          <main className="results-list-container">
            {paginatedItems.length > 0 ? (
              paginatedItems.map(item => (
                <article className="result-card" key={item.id}>
                  <div className="result-card-main">
                    <span className={`result-badge ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                    <h2 className="result-title">{item.title}</h2>
                    <p className="result-desc">{item.description}</p>
                    
                    <div className="result-footer">
                      <span className="result-meta">{item.meta}</span>
                      <a href={item.linkUrl} className="result-link">
                        {item.linkText} <span className="result-link-arrow">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Optional Card Media/Thumbnail for Whitepapers and Webinars */}
                  {item.hasThumbnail && (
                    <div className="result-card-media" aria-hidden="true">
                      {item.hasPlayIcon && (
                        <div className="result-play-btn">
                          <FiPlay size={14} fill="#863bff" />
                        </div>
                      )}
                    </div>
                  )}
                </article>
              ))
            ) : (
              <div className="no-results">
                <h3 className="no-results-title">No results found</h3>
                <p className="no-results-desc">
                  We couldn't find anything matching your search criteria. Try removing filters or changing your query.
                </p>
                <button className="no-results-btn" onClick={handleClearFilters}>
                  Reset Search & Filters
                </button>
              </div>
            )}

            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="pagination">
                <button 
                  className="pagination-btn"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  <FiChevronLeft size={16} />
                </button>
                {renderPaginationButtons()}
                <button 
                  className="pagination-btn"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  <FiChevronRight size={16} />
                </button>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}
