import { FiChevronDown } from 'react-icons/fi';
import { CATEGORIES } from '../../data/insights';
import './InsightsFilterBar.css';

export default function InsightsFilterBar({ activeCategory, onCategoryChange, sortBy, onSortChange }) {
  return (
    <section className="insights-filter-section">
      <div className="container insights-filter-bar">
        <div className="insights-filter-pills">
          {CATEGORIES.map((category) => (
            <button
              key={category.key}
              type="button"
              className={`insights-filter-pill ${activeCategory === category.key ? 'active' : ''}`}
              onClick={() => onCategoryChange(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="insights-sort">
          <select
            className="insights-sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            aria-label="Sort insights"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
          <FiChevronDown className="insights-sort-chevron" size={14} />
        </div>
      </div>
    </section>
  );
}
