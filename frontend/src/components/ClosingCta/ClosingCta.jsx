import useScrollReveal from '../../hooks/useScrollReveal';
import './ClosingCta.css';

export default function ClosingCta() {
  const [ref, visible] = useScrollReveal();

  return (
    <section ref={ref} className={`closing-cta-section reveal ${visible ? 'is-visible' : ''}`}>
      <div className="container closing-cta-container">
        <h2 className="closing-cta-heading">
          This story isn't over.
          <br />
          <span className="closing-cta-highlight">It's just getting started.</span>
        </h2>
        <p className="closing-cta-subtext">
          Whether you're a client, a partner, or someone who wants to build
          the future of enterprise AI – there's a place for you in this
          story.
        </p>
        <div className="closing-cta-actions">
          <a href="#" className="btn btn-solid">
            Join the Team
          </a>
          <a href="#" className="btn btn-outline-light">
            Partner with Us
          </a>
        </div>
        <p className="closing-cta-caption">
          5,000+ users daily · 99.9% uptime · SOC 2 certified
        </p>
      </div>
    </section>
  );
}
