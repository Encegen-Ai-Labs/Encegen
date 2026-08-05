import './ResourcesHero.css';

export default function ResourcesHero() {
  return (
    <section className="res-hero">
      <div className="res-hero-glow" aria-hidden="true" />
      <div className="container res-hero-inner">
        <span className="res-hero-badge">Resources</span>
        <h1 className="res-hero-heading">
          Learn, Explore, and Master{' '}
          <span className="res-hero-heading-accent">Process<br />Intelligence</span>
        </h1>
        <p className="res-hero-sub">
          Guides, reports, webinars, and documentation to help you get the<br />
          most out of Encegen.
        </p>
      </div>
    </section>
  );
}