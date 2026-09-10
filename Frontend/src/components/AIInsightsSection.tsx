import { Fragment } from 'react'
import './AIInsightsSection.css'

const CAPABILITIES = [
  {
    title: 'Root-cause analysis',
    description: 'Traces a problem to its actual origin, not the nearest visible symptom.',
  },
  {
    title: 'Anomaly detection',
    description: "Catches the thing that's quietly gone wrong before it becomes a pattern.",
  },
  {
    title: 'Predictive flagging',
    description: 'Surfaces where a process is heading before it fully breaks.',
  },
  {
    title: 'Context-trained models',
    description: 'Built on your data and your business, not a generic off-the-shelf model.',
  },
  {
    title: 'Explainable output',
    description: 'Every insight comes with the reasoning behind it — no black box.',
  },
  {
    title: 'Plain-language reporting',
    description: 'Findings written for the person who has to act on them, not just a data team.',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Feed it real data',
    description: 'Your actual operational history, not a sample set.',
  },
  {
    number: '02',
    title: 'Let it find the pattern',
    description: 'The model surfaces what a person would miss at scale.',
  },
  {
    number: '03',
    title: 'Get the reasoning, not just the result',
    description: 'Every insight comes with a clear "why."',
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

export default function AIInsightsSection() {
  return (
    <section className="ai-section" id="ai-insights" style={{ scrollMarginTop: 100 }}>
      <div className="container">
        <p className="section-eyebrow">Applied Intelligence</p>
        <h2 className="section-title">AI that tells you something you didn't already know.</h2>
        <p className="section-sub">
          Most "AI insights" restate your dashboard in a friendlier font. Ours is built to dig —
          pattern recognition across your operational data that surfaces root causes, not just
          symptoms. We train it on your actual context, not a generic model bolted onto your
          business, so what it finds is specific enough to act on the same day.
        </p>

        <div className="modules__grid">
          {CAPABILITIES.map((c) => (
            <article key={c.title} className="modules__card">
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </article>
          ))}
        </div>

        <div className="process__steps ai-section__steps">
          {STEPS.map((step, index) => (
            <Fragment key={step.number}>
              {index > 0 && <StepArrow />}
              <div className="process__step-wrap">
                <div className="process__step">
                  <span className="process__number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>

        <p className="ai-section__closing">
          If an insight can't explain itself, it's not an insight — it's a guess with good
          formatting.
        </p>
      </div>
    </section>
  )
}
