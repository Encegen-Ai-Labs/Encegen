import './Integrations.css'

const INTEGRATIONS = [
  'SAP',
  'Salesforce',
  'ServiceNow',
  'Oracle',
  'Microsoft',
  'Workday',
  'Coupa',
  'Snowflake',
  'Databricks',
  'Google Cloud',
  'AWS',
  'Slack',
]

export default function Integrations() {
  return (
    <section className="integrations">
      <div className="container">
        <p className="section-eyebrow" style={{ color: 'var(--purple-400)' }}>
          INTEGRATIONS
        </p>
        <h2 className="integrations__title">Works with the tools your teams already use.</h2>
        <p className="integrations__sub">
          Encegen is built on open standards to integrate seamlessly with your existing IT infrastructure.
        </p>

        <div className="integrations__grid">
          {INTEGRATIONS.map((name) => (
            <span key={name} className="integrations__pill">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}