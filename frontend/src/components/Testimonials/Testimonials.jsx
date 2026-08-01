import { useRef } from 'react';
import { FaStar } from 'react-icons/fa6';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    company: 'SIEMENS',
    quote:
      'Encegen gave us end-to-end visibility we never thought possible – transforming how we run global operations.',
    metric: '60% fewer invoice exceptions',
    author: 'Anna Müller',
    title: 'VP Supply Chain, Siemens AG',
  },
  {
    company: 'UBER',
    quote:
      'The AI recommendations were actionable from day one. Encegen closes the books 5 days faster every single month.',
    metric: '80% faster invoice processing',
    author: 'James Park',
    title: 'Head of Finance Ops, Uber',
  },
  {
    company: 'AIRBUS',
    quote:
      'Process intelligence is now central to our digital transformation – deployed across 14 countries.',
    metric: '96% process compliance',
    author: 'Marie Dubois',
    title: 'Chief Digital Officer, Airbus',
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.testimonial-card');
    const cardWidth = card ? card.offsetWidth + 24 : 360;
    track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <span className="eyebrow">CUSTOMER STORIES</span>
          <h2 className="section-heading testimonials-heading">
            Trusted by the brands that run the world
          </h2>
        </div>

        <div className="testimonials-subrow">
          <h3 className="testimonials-subheading">
            Trusted by the world's leading enterprises.
          </h3>
          <div className="testimonials-arrows">
            <button
              type="button"
              className="testimonials-arrow-btn"
              aria-label="Previous testimonial"
              onClick={() => scrollByCard(-1)}
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="testimonials-arrow-btn"
              aria-label="Next testimonial"
              onClick={() => scrollByCard(1)}
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="testimonials-track" ref={trackRef}>
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.company}>
              <div className="testimonial-top">
                <span className="testimonial-company">{t.company}</span>
                <div className="testimonial-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
              </div>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <span className="testimonial-metric">{t.metric}</span>
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">
                  {t.author.charAt(0)}
                </div>
                <div className="testimonial-author-info">
                  <span className="testimonial-author-name">{t.author}</span>
                  <span className="testimonial-author-title">{t.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
