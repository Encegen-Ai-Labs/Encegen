import { FiArrowRight } from 'react-icons/fi';
import './InsightsHero.css';

export default function InsightsHero() {
  return (
    <section className="insights-hero-section">
      <div className="insights-hero-glow" aria-hidden="true"></div>
      <div className="container insights-hero-container">
        <span className="insights-hero-badge">INSIGHTS HUB</span>
        <h1 className="insights-hero-heading">Ideas that move enterprise forward</h1>
        <p className="insights-hero-subtext">
          Research, customer stories, and expert perspectives on process
          intelligence, AI, and automation — from the teams building it.
        </p>
        <div className="insights-hero-actions">
          <a href="#insights-grid" className="btn btn-solid">
            Browse all insights <FiArrowRight />
          </a>
          <a href="#newsletter" className="btn btn-outline">
            Subscribe to newsletter
          </a>
        </div>
      </div>
    </section>
  );
}
