import './StatsBar.css'

const STATS = [
  { value: '<1 Day', label: 'Average time to first insight' },
  { value: '99.9%', label: 'Platform uptime SLA' },
  { value: '200+', label: 'Pre-built connectors' },
  { value: '10B+', label: 'Events processed daily' },
]

export default function StatsBar() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {STATS.map((stat) => (
          <div key={stat.label} className="stats__item">
            <span className="stats__value">{stat.value}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
