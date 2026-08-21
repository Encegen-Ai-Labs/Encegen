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
        <h2 className="integrations__title">Works with the tools your teams already use.</h2>
        <p className="integrations__sub">
          Built on open standards, so it fits into your existing setup
          instead of fighting it.
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
