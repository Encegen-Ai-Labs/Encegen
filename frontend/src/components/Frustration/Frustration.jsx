import { FiCheck, FiX } from 'react-icons/fi';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Frustration.css';

const PROMISES = [
  'AI that automates everything',
  '10x ROI in 30 days',
  'Zero integration effort',
];

const REALITIES = [
  'Models that break in production',
  'ROI measured in dashboards',
  "Months of 'integration' work",
];

export default function Frustration() {
  const [ref, visible] = useScrollReveal();

  return (
    <section ref={ref} className={`frustration-section reveal ${visible ? 'is-visible' : ''}`}>
      <div className="container frustration-container">
        <div className="frustration-copy">
          <span className="eyebrow frustration-chapter">CHAPTER 01</span>
          <span className="frustration-label">THE FRUSTRATION</span>
          <h2 className="frustration-heading">
            Most enterprise software promises transformation. Most delivers
            dashboards.
          </h2>
          <p className="frustration-text">
            We've all been there: the demo is slick, the slides are
            convincing, and the ROI model looks too good to be true. But when
            the pilot starts, the reality sets in: brittle models, broken
            workflows, and decisions delayed by weeks.
          </p>
          <p className="frustration-text">
            The gap between AI hype and real enterprise value isn't a
            technology problem – it's a trust problem. We built Encegen to
            close that gap with a different kind of AI: one that runs
            operations, not just reports them.
          </p>
        </div>

        <div className="frustration-card">
          <div className="frustration-card-header">
            <span className="frustration-card-title">THE TRUTH</span>
            <span className="frustration-card-subtitle">Reality vs. promise</span>
          </div>

          <div className="frustration-panel frustration-panel--promise">
            <span className="frustration-panel-label">THE PROMISE</span>
            <ul className="frustration-list">
              {PROMISES.map((item) => (
                <li key={item}>
                  <span className="frustration-icon frustration-icon--good">
                    <FiCheck size={13} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="frustration-panel frustration-panel--reality">
            <span className="frustration-panel-label">THE REALITY</span>
            <ul className="frustration-list">
              {REALITIES.map((item) => (
                <li key={item}>
                  <span className="frustration-icon frustration-icon--bad">
                    <FiX size={13} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
