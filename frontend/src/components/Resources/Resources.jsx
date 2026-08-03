import { FiArrowRight, FiPlay, FiDownload } from 'react-icons/fi';
import './Resources.css';

export default function Resources() {
  return (
    <section className="resources-section">
      <div className="container">
        <div className="resources-header">
          <div>
            <span className="eyebrow">RESOURCES</span>
            <h2 className="section-heading resources-heading">
              Learn from the experts
            </h2>
          </div>
          <a href="#" className="resources-view-all">
            View all resources <FiArrowRight size={14} />
          </a>
        </div>

        <div className="resources-grid">
          <article className="resource-card">
            <div className="resource-thumb resource-thumb--research"></div>
            <div className="resource-body">
              <span className="resource-tag">RESEARCH</span>
              <h3 className="resource-title">
                The 2026 Process Intelligence Report
              </h3>
              <span className="resource-meta">8 min read</span>
            </div>
          </article>

          <article className="resource-card">
            <div className="resource-thumb resource-thumb--video">
              <span className="resource-play-btn" aria-hidden="true">
                <FiPlay size={20} />
              </span>
            </div>
            <div className="resource-body">
              <h3 className="resource-title">AI at Scale: A CEO Masterclass</h3>
              <span className="resource-meta">Available On-Demand</span>
            </div>
          </article>

          <article className="resource-card resource-card--purple">
            <div className="resource-body resource-body--purple">
              <span className="resource-tag resource-tag--light">
                EMS TECHNICAL PAPER
              </span>
              <h3 className="resource-title resource-title--light">
                Download the EMS technical paper
              </h3>
              <a href="#" className="btn btn-outline resource-download-btn">
                <FiDownload size={16} /> Download PDF
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
