import { FiArrowRight, FiPlay } from 'react-icons/fi';
import './ResourcesFeatured.css';

const MEDIA_CARDS = [
  {
    id: 1,
    title: 'AI at Scale: Enterprise Adoption Playbook',
    tagLabel: 'ON-DEMAND WEBINAR',
    tagClass: 'tag-webinar',
    hasPlay: true,
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
  },
  {
    id: 2,
    title: 'How Siemens Cut Process Costs by 40%',
    tagLabel: 'CASE STUDY',
    tagClass: 'tag-case',
    meta: '12 min read',
    hasPlay: false,
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
  },
];

export default function ResourcesFeatured() {
  return (
    <section className="res-featured">
      <div className="container">
        {/* Header row */}
        <div className="res-featured-header">
          <div>
            <span className="eyebrow">FEATURED</span>
            <h2 className="res-featured-title">Featured this month</h2>
          </div>
          <a href="#" className="res-featured-viewall">View all <FiArrowRight size={14} /></a>
        </div>
        {/* Big hero card */}
        <div className="res-main-card">
          <div className="res-main-card-glow" aria-hidden="true" />
          <div className="res-main-card-body">
            <span className="res-main-tag">ANNUAL REPORT</span>
            <h3 className="res-main-card-title">The 2026 State of Process Intelligence Report</h3>
            <p className="res-main-card-desc">Key findings from 1,200+ enterprise leaders worldwide on the future of business execution.</p>
            <a href="#" className="btn btn-solid res-main-btn">Download free <FiArrowRight size={15} /></a>
          </div>
          <div className="res-main-card-img" aria-hidden="true">
            <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=700&q=80" alt="" />
            <div className="res-main-card-img-overlay" />
          </div>
        </div>
        {/* Two media cards */}
        <div className="res-media-grid">
          {MEDIA_CARDS.map(card => (
            <article key={card.id} className="res-media-card">
              <div className="res-media-thumb">
                <img src={card.img} alt="" loading="lazy" />
                {card.hasPlay && (
                  <button className="res-play-btn" aria-label="Play video" type="button">
                    <FiPlay size={18} fill="#fff" />
                  </button>
                )}
              </div>
              <div className="res-media-body">
                <h4 className="res-media-title">{card.title}</h4>
                <div className="res-media-meta">
                  <span className={`res-media-tag ${card.tagClass}`}>{card.tagLabel}</span>
                  {card.meta && <span className="res-media-read">{card.meta}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}