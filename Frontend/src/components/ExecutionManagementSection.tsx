import './ExecutionManagementSection.css'

const CAPABILITIES = [
  {
    title: 'Direct system triggers',
    description: 'Actions fire inside your existing tools, not in a separate app nobody opens.',
  },
  {
    title: 'Live alerting',
    description: 'The right person gets notified the moment something drifts off track.',
  },
  {
    title: 'Automated hand-offs',
    description: 'Removes the manual step where things sit waiting on someone to notice.',
  },
  {
    title: 'Custom workflow logic',
    description: 'Built around how your team actually works, not a generic playbook.',
  },
  {
    title: 'Rollback-safe automation',
    description: "Every automated action is reversible, so speed doesn't mean risk.",
  },
  {
    title: 'Human-in-the-loop control',
    description: 'You decide what runs automatically and what waits for a sign-off.',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Define the fix',
    description: 'Agree on what should happen when a specific issue shows up.',
  },
  {
    number: '02',
    title: 'Wire it into your systems',
    description: 'We connect the action directly to the tools you already use.',
  },
  {
    number: '03',
    title: 'Let it run — or approve it first',
    description: 'Full automation, or a one-click approval step. Your call.',
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

export default function ExecutionManagementSection() {
  return (
    <section className="em-section" id="execution-management" style={{ scrollMarginTop: 100 }}>
      <div className="container">
        <p className="section-eyebrow">Execution Layer</p>
        <h2 className="section-title">
          Insight is easy. Getting something to actually change is the hard part.
        </h2>
        <p className="section-sub">
          A dashboard that tells you what's wrong and stops there isn't finished — it's a report.
          We build the layer that goes further: turning what we find into action inside the
          systems your team already runs. Automated triggers, live alerts, direct integrations —
          so fixing the process doesn't mean starting a six-month change-management project.
        </p>

        <div className="modules__grid">
          {CAPABILITIES.map((c) => (
            <article key={c.title} className="modules__card">
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </article>
          ))}
        </div>

        <div className="process__steps em-section__steps">
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

        <p className="em-section__closing">
          Most tools stop at "here's the problem." We stay until it's actually solved.
        </p>
      </div>
    </section>
  )
}
