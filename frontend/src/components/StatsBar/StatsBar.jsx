import './StatsBar.css';

const STATS = [
  { value: '5,000+', label: 'Enterprise customers' },
  { value: '$2.4T', label: 'Business value delivered' },
  { value: '98%', label: 'Customer satisfaction' },
  { value: '300%', label: 'Avg. ROI within 12 months' },
];

export default function StatsBar() {
  return (
    <section className="statsbar-section">
      <div className="container statsbar-grid">
        {STATS.map((stat) => (
          <div className="statsbar-item" key={stat.label}>
            <span className="statsbar-value">{stat.value}</span>
            <span className="statsbar-underline" aria-hidden="true"></span>
            <span className="statsbar-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
