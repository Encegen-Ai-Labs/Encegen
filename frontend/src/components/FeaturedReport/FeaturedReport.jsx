import { FiArrowRight, FiFileText } from 'react-icons/fi';
import './FeaturedReport.css';

export default function FeaturedReport() {
  return (
    <section className="featured-report-section">
      <div className="container">
        <span className="eyebrow">FEATURED</span>

        <div className="featured-report-card">
          <div className="featured-report-glow" aria-hidden="true"></div>

          <div className="featured-report-body">
            <span className="featured-report-tag">
              <FiFileText size={13} /> ANNUAL REPORT
            </span>
            <h2 className="featured-report-title">
              The 2026 State of Process Intelligence: AI, Automation &amp; the
              Future of Enterprise Operations
            </h2>
            <p className="featured-report-description">
              A deep dive into how 500+ enterprises are deploying AI-driven
              process intelligence to cut costs, eliminate bottlenecks, and
              future-proof their operations.
            </p>
            <span className="featured-report-meta">
              52 pages · June 2025 · Free download
            </span>
            <div className="featured-report-actions">
              <a href="#" className="btn btn-solid">
                Download free report <FiArrowRight />
              </a>
              <a href="#" className="btn btn-outline">
                Read preview
              </a>
            </div>
          </div>

          <div className="featured-report-graphic" aria-hidden="true">
            <span className="featured-report-graphic-year">2026</span>
            <span className="featured-report-graphic-label">
              STATE OF PROCESS
              <br />
              INTELLIGENCE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
