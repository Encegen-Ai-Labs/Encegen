import './RunsBusiness.css';

const BULLETS = [
  {
    lead: 'No black boxes. Only outcomes.',
    sub: 'We measure success by decisions made, not models trained.',
  },
  {
    lead: 'Deployed in weeks, not years.',
    sub: 'We ship fast, iterate fast, and improve fast – without breaking workflows.',
  },
  {
    lead: 'Your data never leaves your walls.',
    sub: 'We run where you need us: on-prem, in your cloud, or in a secure enclave.',
  },
];

const SYSTEMS = [
  { name: 'Anomaly Detection', status: 'Active', metric: '99.2% accuracy' },
  { name: 'Forecasting Engine', status: 'Live', metric: '14ms latency' },
  { name: 'Compliance Monitor', status: 'Running', metric: '0 violations' },
  { name: 'Document Intelligence', status: 'Active', metric: '847 docs/day' },
  { name: 'Risk Scoring Engine', status: 'Live', metric: '2.3ms response' },
  { name: 'Supplier Validation', status: 'Running', metric: '12,400 vendors' },
  { name: 'Data Reconciliation', status: 'Active', metric: '99.98% match' },
  { name: 'NLP Classification', status: 'Live', metric: '94.7% confidence' },
];

const STATUS_CLASS = {
  Active: 'status-active',
  Live: 'status-live',
  Running: 'status-running',
};

export default function RunsBusiness() {
  return (
    <section className="runs-business-section">
      <div className="container runs-business-container">
        <div className="runs-business-copy">
          <span className="eyebrow">CHAPTER 03</span>
          <h2 className="runs-business-heading">
            We build AI that actually runs your business.
          </h2>

          <ul className="runs-business-bullets">
            {BULLETS.map((b) => (
              <li key={b.lead}>
                <span className="runs-business-lead">{b.lead}</span>
                <span className="runs-business-sub">{b.sub}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="deployment-card">
          <div className="deployment-header">
            <span className="deployment-title">AI Deployment Status</span>
            <span className="deployment-live-badge">
              <span className="deployment-dot" aria-hidden="true"></span> Live
            </span>
          </div>

          <div className="deployment-list">
            {SYSTEMS.map((sys) => (
              <div className="deployment-row" key={sys.name}>
                <span className="deployment-name">{sys.name}</span>
                <span className={`deployment-status ${STATUS_CLASS[sys.status]}`}>
                  {sys.status}
                </span>
                <span className="deployment-metric">{sys.metric}</span>
              </div>
            ))}
          </div>

          <div className="deployment-footer">
            <span className="deployment-uptime">
              <span className="deployment-dot deployment-dot--footer" aria-hidden="true"></span>
              99.9% uptime · All systems operational
            </span>
            <span className="deployment-updated">Updated just now</span>
          </div>
        </div>
      </div>
    </section>
  );
}
