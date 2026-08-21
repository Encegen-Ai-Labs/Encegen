import './ExplorePlatformSection.css'

const EXPECTATIONS = [
  {
    title: 'A real look at your data',
    description: 'Not a hypothetical walkthrough, an actual pass over your context.',
  },
  {
    title: 'A straight answer',
    description: 'Whether this is genuinely a fit, or whether it isn\'t. No forced pitch.',
  },
  {
    title: 'A concrete first step',
    description: 'If it fits, you leave with a scoped starting point, not a vague roadmap.',
  },
  {
    title: 'No pressure, no lock-in',
    description: 'A conversation, not a sales funnel.',
  },
]

export default function ExplorePlatformSection() {
  return (
    <section className="ep-section" id="explore-platform" style={{ scrollMarginTop: 100 }}>
      <div className="container">
        <p className="section-eyebrow">Get Started</p>
        <h2 className="section-title">
          One conversation. A clear picture of where you stand.
        </h2>
        <p className="section-sub">
          No generic demo deck. We start by looking at what you're actually dealing with — the
          process, the data, the bottleneck you already suspect is there — and show you exactly
          what our approach would surface. If it's a fit, we build from there.
        </p>

        <ul className="ep-section__list">
          {EXPECTATIONS.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong> — {item.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
