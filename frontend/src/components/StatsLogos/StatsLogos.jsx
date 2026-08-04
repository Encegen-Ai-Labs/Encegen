import useScrollReveal from '../../hooks/useScrollReveal';
import './StatsLogos.css';

const STATS = [
  { value: '200+', label: 'Clients Transformed' },
  { value: '$2B+', label: 'in Value Created' },
  { value: '50+', label: 'AI Models in Production' },
  { value: '18', label: 'Countries' },
];

const CLIENT_CHIPS = [
  'Acme Corp',
  'Northwind',
  'Globex',
  'Initech',
  'Umbrella',
  'Stark Ind',
  'Wayne Ent',
  'Massimo',
  'Soylent',
  'Hooli',
];

const REAL_LOGOS = ['Siemens', 'Vodafone', 'Airbus', 'IBM'];

export default function StatsLogos() {
  const [ref, visible] = useScrollReveal();

  return (
    <section ref={ref} className={`stats-logos-section reveal ${visible ? 'is-visible' : ''}`}>
      <div className="container">
        <div className="stats-logos-stats">
          {STATS.map((stat) => (
            <div className="stats-logos-stat" key={stat.label}>
              <span className="stats-logos-value">{stat.value}</span>
              <span className="stats-logos-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="client-chip-grid">
          {CLIENT_CHIPS.map((name) => (
            <span className="client-chip" key={name}>
              {name}
            </span>
          ))}
        </div>

        <p className="trusted-caption">- trusted by 5,000+ enterprises</p>

        <div className="real-logo-row">
          {REAL_LOGOS.map((name) => (
            <span className="real-logo-name" key={name}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
