import { useMemo, useState } from 'react';
import { INSIGHTS } from '../../data/insights';
import InsightCard from '../InsightCard/InsightCard';
import './InsightsGrid.css';

const PAGE_SIZE = 6;

export default function InsightsGrid({ activeCategory, sortBy }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const filterKey = `${activeCategory}-${sortBy}`;
  const [prevFilterKey, setPrevFilterKey] = useState(filterKey);

  if (filterKey !== prevFilterKey) {
    setPrevFilterKey(filterKey);
    setVisibleCount(PAGE_SIZE);
  }

  const insights = useMemo(() => {
    const filtered =
      activeCategory === 'all'
        ? INSIGHTS
        : INSIGHTS.filter((insight) => insight.category === activeCategory);

    const sorted = [...filtered].sort((a, b) => (a.id - b.id) * (sortBy === 'oldest' ? 1 : -1));
    return sorted;
  }, [activeCategory, sortBy]);

  const visibleInsights = insights.slice(0, visibleCount);
  const hasMore = visibleCount < insights.length;

  return (
    <section className="insights-grid-section" id="insights-grid">
      <div className="container">
        <div className="insights-grid">
          {visibleInsights.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>

        {hasMore && (
          <div className="insights-load-more-row">
            <button
              type="button"
              className="insights-load-more"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            >
              Load more insights →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
