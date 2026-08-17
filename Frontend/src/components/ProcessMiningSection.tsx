import './ProcessMiningSection.css'

const CAPABILITIES = [
  {
    title: 'Real-flow mapping',
    description: 'Reconstructs how a process actually runs, end to end, from your own system data.',
  },
  {
    title: 'Bottleneck detection',
    description: 'Flags exactly where time and momentum are lost, down to the step.',
  },
  {
    title: 'Variant analysis',
    description: 'Surfaces every version of a process actually in use, not just the documented one.',
  },
  {
    title: 'Root-cause tracing',
    description: 'Connects a slowdown back to its actual cause, not its nearest symptom.',
  },
  {
    title: 'Cross-system visibility',
    description: "Follows a process across every tool it touches, not just one system's logs.",
  },
  {
    title: 'Continuous monitoring',
    description: 'Keeps watching after the first analysis, so drift gets caught early, not a quarter later.',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Pull the data',
    description: 'Connect the systems your process already runs through.',
  },
  {
    number: '02',
    title: 'Reconstruct the flow',
    description: "See the process as it's actually happening, not as documented.",
  },
  {
    number: '03',
    title: "Flag what's costing you",
    description: 'Get a ranked list of where time, money, and momentum are leaking.',
  },
]

function StepArrow() {
  return (
    <span className="process__arrow" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="1" y1="7" x2="12" y2="7" />
        <polyline points="7 2 12 7 7 12" />
      </svg>
    </span>
  )
}

export default function ProcessMiningSection() {
  return (
    <section className="pm-section" id="process-mining" style={{ scrollMarginTop: 100 }}>
      <div className="container">
        <p className="section-eyebrow">Process Intelligence</p>
        <h2 className="section-title">
          See how work actually happens — not how the flowchart says it should.
        </h2>
        <p className="section-sub">
          Every process looks clean on a slide. It rarely runs that way. We build AI systems that
          read your real operational data — the tickets, the timestamps, the handoffs — and
          surface where a process quietly breaks down, stalls, or takes three times longer than
          anyone assumed. No guesswork, no interviews, no assumptions. Just what the data shows.
        </p>

        <div className="modules__grid">
          {CAPABILITIES.map((c) => (
            <article key={c.title} className="modules__card">
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </article>
          ))}
        </div>

        <div className="process__steps pm-section__steps">
          {STEPS.map((step, index) => (
            <div key={step.number} className="process__step-wrap">
              {index > 0 && <StepArrow />}
              <div className="process__step">
                <span className="process__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="pm-section__closing">
          If you've ever said "I think it's the approvals step, but I'm not sure" — this is how
          you find out for certain.
        </p>
      </div>
    </section>
  )
}
