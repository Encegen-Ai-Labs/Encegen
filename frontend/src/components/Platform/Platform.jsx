import { FiCheck } from 'react-icons/fi';
import './Platform.css';

const CHECKLIST = [
  'EMS (Execution Management System)',
  'Process Analytics & Mining',
  'Action Flows & Automation',
  'Live Connected Data',
];

export default function Platform() {
  return (
    <section className="platform-section">
      <div className="container platform-container">
        <div className="platform-copy">
          <span className="eyebrow platform-eyebrow">THE ENCEGEN PLATFORM</span>
          <h2 className="platform-heading">
            One platform. Every process. Unlimited potential.
          </h2>
          <p className="platform-text">
            From procurement to order-to-cash, Encegen connects every part of
            your business into a single, living process intelligence layer.
          </p>

          <ul className="platform-checklist">
            {CHECKLIST.map((item) => (
              <li key={item}>
                <span className="platform-check-icon">
                  <FiCheck size={14} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a href="#" className="btn btn-solid platform-cta">
            Explore platform
          </a>
        </div>

        <div className="platform-visual">
          <div className="platform-visual-glow" aria-hidden="true"></div>
          <div className="platform-visual-frame">
            <div className="platform-orb platform-orb--purple"></div>
            <div className="platform-orb platform-orb--teal"></div>
            <div className="platform-visual-grid">
              <div className="platform-visual-tile"></div>
              <div className="platform-visual-tile"></div>
              <div className="platform-visual-tile"></div>
              <div className="platform-visual-tile"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
