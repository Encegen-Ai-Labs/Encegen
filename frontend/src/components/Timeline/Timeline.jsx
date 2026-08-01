import './Timeline.css';

const STEPS = [
  {
    year: '2019',
    title: 'The Spark',
    description:
      'Two founders watched a $4M AI pilot fail in real time. They left their corporate jobs that week to build differently.',
  },
  {
    year: '2020',
    title: 'First Clients',
    description:
      'Shipped the Encegen platform to 3 pilot clients. Delivered 40% efficiency gains in under 90 days.',
  },
  {
    year: '2022',
    title: 'Series A',
    description:
      'Raised $18M. Expanded to London, Singapore, and Dubai. Crossed 50 enterprise clients.',
  },
  {
    year: '2024',
    title: 'Global Scale',
    description:
      'Serving 200+ clients in 18 countries. $2B+ in value created for enterprise partners worldwide.',
  },
];

export default function Timeline() {
  return (
    <section className="timeline-section">
      <div className="container">
        <blockquote className="timeline-quote">
          &ldquo;We sat in a boardroom watching a $4M AI pilot fail in real
          time. That was the day we decided to build differently.&rdquo;
        </blockquote>
        <p className="timeline-attribution">
          - ALEX RIVERA, CEO &amp; CO-FOUNDER, 2019
        </p>

        <div className="timeline-track">
          {STEPS.map((step) => (
            <div className="timeline-step" key={step.year}>
              <span className="timeline-year">{step.year}</span>
              <span className="timeline-node" aria-hidden="true"></span>
              <h3 className="timeline-title">{step.title}</h3>
              <p className="timeline-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
