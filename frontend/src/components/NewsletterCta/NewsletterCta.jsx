import { FiArrowRight } from 'react-icons/fi';
import './NewsletterCta.css';

export default function NewsletterCta() {
  return (
    <section className="newsletter-cta-section" id="newsletter">
      <div className="container newsletter-cta-container">
        <h2 className="newsletter-cta-heading">Stay ahead of the curve</h2>
        <p className="newsletter-cta-subtext">
          Get the latest research, customer stories, and product news from
          Encegen delivered straight to your inbox.
        </p>

        <form className="newsletter-cta-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            className="newsletter-cta-input"
            placeholder="Enter your work email"
            aria-label="Email address"
            required
          />
          <button type="submit" className="btn btn-outline newsletter-cta-submit">
            Subscribe <FiArrowRight />
          </button>
        </form>

        <p className="newsletter-cta-trust">
          No spam · Unsubscribe anytime · 50,000+ subscribers
        </p>
      </div>
    </section>
  );
}
