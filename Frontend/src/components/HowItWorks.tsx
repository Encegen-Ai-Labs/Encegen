import { BarChartIcon, BellIcon, DatabaseIcon, ZapIcon } from './icons'
import './HowItWorks.css'

const DATA_SOURCES = [
  { name: 'SAP', color: '#3b82f6' },
  { name: 'Salesforce', color: '#14b8c9' },
  { name: 'Oracle', color: '#f97316' },
  { name: 'Snowflake', color: '#7cc4f8' },
  { name: 'ServiceNow', color: '#22c55e' },
  { name: 'Custom APIs', color: '#8b5cf6' },
]

const ACTIONS = [
  { icon: DatabaseIcon, title: 'ERP Systems', sub: 'AUTO-EXECUTE' },
  { icon: ZapIcon, title: 'Automation', sub: 'TRIGGER FLOWS' },
  { icon: BarChartIcon, title: 'Dashboards', sub: 'LIVE UPDATE' },
  { icon: BellIcon, title: 'Notifications', sub: 'ALERT TEAMS' },
]

/** Dashed data-flow divider with a centered down arrow. */
function FlowConnector() {
  return (
    <div className="hiw-connector" aria-hidden="true">
      <span className="hiw-connector__line" />
      <span className="hiw-connector__arrow">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="2" x2="8" y2="13" />
          <polyline points="3.5 9 8 13.5 12.5 9" />
        </svg>
      </span>
    </div>
  )
}

/** Decorative process-graph visual for the engine's center column. */
function MiningGraph() {
  return (
    <div className="hiw-graph">
      <svg viewBox="0 0 320 130" fill="none" className="hiw-graph__svg" aria-hidden="true">
        <line x1="72" y1="34" x2="288" y2="12" stroke="#38bdf8" strokeWidth="2" />
        <line x1="72" y1="92" x2="288" y2="66" stroke="#38bdf8" strokeWidth="2" />
        <line x1="72" y1="40" x2="72" y2="82" stroke="#8b5cf6" strokeWidth="1.6" />
        <polyline points="67 77 72 84 77 77" stroke="#8b5cf6" strokeWidth="1.6" />
        <polyline points="120 56 132 56" stroke="#8b5cf6" strokeWidth="2" />
        <polyline points="128 51 134 56 128 61" stroke="#8b5cf6" strokeWidth="2" />
        <circle cx="72" cy="34" r="8" fill="#7c5cff" />
        <circle cx="72" cy="92" r="8" fill="#b45cff" />
        <circle cx="168" cy="60" r="14" fill="#ffffff" className="hiw-graph__pulse" />
        <circle cx="288" cy="34" r="9" fill="#22d3ee" />
        <circle cx="288" cy="90" r="9" fill="#4f7cff" />
      </svg>
      <div className="hiw-graph__bar">
        <span className="hiw-graph__bar-fill" />
      </div>
      <span className="hiw-graph__caption">AI ANALYSIS IN PROGRESS</span>
    </div>
  )
}

/** 94% confidence donut. */
function ConfidenceDonut() {
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const filled = circumference * 0.94

  return (
    <div className="hiw-donut">
      <svg viewBox="0 0 110 110" width="128" height="128" aria-hidden="true">
        <defs>
          <linearGradient id="donutGrad" x1="0" y1="0" x2="110" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#4f7cff" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <circle cx="55" cy="55" r={radius} stroke="#1c2158" strokeWidth="11" fill="none" />
        <circle
          cx="55"
          cy="55"
          r={radius}
          stroke="url(#donutGrad)"
          strokeWidth="11"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={`${filled} ${circumference - filled}`}
          transform="rotate(-90 55 55)"
        />
      </svg>
      <div className="hiw-donut__label">
        <strong>94%</strong>
        <span>CONFIDENCE</span>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section className="hiw">
      <div className="container">
        <p className="section-eyebrow">How It Works</p>
        <h2 className="section-title">Three layers. One connected platform.</h2>
        <p className="section-sub">
          Connect your data, understand your processes, and act on what you
          find &ndash; from one architecture that scales.
        </p>

        <div className="hiw__panel">
          {/* Data layer */}
          <div className="hiw__layer">
            <div className="hiw__layer-head">
              <span className="hiw__layer-title hiw__layer-title--purple">Data Layer</span>
              <span className="hiw__live hiw__live--green">
                <span className="hiw__live-dot" />
                Live Data
              </span>
            </div>
            <div className="hiw__chips">
              {DATA_SOURCES.map((source) => (
                <span key={source.name} className="hiw__chip">
                  <span className="hiw__chip-dot" style={{ background: source.color }} />
                  {source.name}
                </span>
              ))}
            </div>
          </div>

          <FlowConnector />

          {/* Process intelligence engine */}
          <div className="hiw__engine">
            <div className="hiw__layer-head">
              <span className="hiw__layer-title hiw__layer-title--purple">
                Process Intelligence Engine
              </span>
              <span className="hiw__engine-tag">Mining</span>
            </div>

            <div className="hiw__engine-grid">
              <div className="hiw__engine-col">
                <ul className="hiw__features">
                  <li>
                    <strong>AI Process Mining</strong>
                    <span>Sees how work really flows, in real time</span>
                  </li>
                  <li>
                    <strong>Root Cause Analysis</strong>
                    <span>ML-powered diagnostics</span>
                  </li>
                </ul>
                <span className="hiw__mini-label">Map Variants</span>
              </div>

              <MiningGraph />

              <div className="hiw__engine-col">
                <span className="hiw__mini-label">Simulation</span>
                <ul className="hiw__features hiw__features--tight">
                  <li>
                    <strong>Predict outcomes</strong>
                  </li>
                  <li>
                    <strong>Recommend actions</strong>
                  </li>
                </ul>
                <ConfidenceDonut />
              </div>
            </div>
          </div>

          <FlowConnector />

          {/* Action layer */}
          <div className="hiw__layer">
            <div className="hiw__layer-head">
              <span className="hiw__layer-title hiw__layer-title--cyan">Action Layer</span>
              <span className="hiw__live hiw__live--green">
                <span className="hiw__live-dot" />
                Actions Live
              </span>
            </div>
            <div className="hiw__actions">
              {ACTIONS.map((action) => (
                <div key={action.title} className="hiw__action">
                  <action.icon size={22} className="hiw__action-icon" />
                  <div>
                    <strong>{action.title}</strong>
                    <span>{action.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
