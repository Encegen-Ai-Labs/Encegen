import './About.css';

const STATS = [
  {
    value: '2019',
    label: 'Founded',
    detail: 'Born from enterprise AI research',
  },
  {
    value: '3,500+',
    label: 'Team',
    detail: 'Engineers, scientists & operators',
  },
  {
    value: '30+',
    label: 'Global offices',
    detail: 'Across North America, Europe & APAC',
  },
];

export default function About() {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about-copy">
          <span className="eyebrow">ABOUT ENCEGEN AI LABS</span>
          <h2 className="about-heading">
            We believe every great business runs on great processes.
          </h2>
          <p className="about-text">
            Encegen AI Labs builds process intelligence technology that gives
            enterprise teams real-time visibility into how their operations
            actually run — not how they think they run. Founded by a team of
            AI researchers and enterprise operators, we are on a mission to
            make every business process transparent, measurable, and
            continuously improving.
          </p>
        </div>

        <div className="about-stats">
          {STATS.map((stat) => (
            <div className="about-stat-card" key={stat.label}>
              <div className="about-stat-top">
                <span className="about-stat-value">{stat.value}</span>
                <span className="about-stat-label">{stat.label}</span>
              </div>
              <p className="about-stat-detail">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
