import { useEffect } from 'react'
import {
  Btn,
  ClosingCTA,
  GradBand,
  MockPanel,
  PageHero,
  SectionHead,
  StepFlow,
} from '../../components/kit'
import './products.css'

const STAT_TILES = [
  { value: '85%', label: 'reduction in manual room allocation time' },
  { value: '100%', label: 'digital tracking for student attendance & gate passes' },
  { value: '3x', label: 'faster fee reconciliation and receipt generation' },
  { value: '24/7', label: 'automated grievance & maintenance dispatch' },
]

const HOW = [
  {
    num: '01',
    title: 'Onboard & Allocate',
    desc: 'Digitally onboard students, verify documentation, and let intelligent room allocation assign beds based on floor, course, and preference criteria.',
  },
  {
    num: '02',
    title: 'Monitor & Manage',
    desc: 'Track daily attendance, digital gate passes, mess schedules, fee payments, and maintenance requests in real-time through centralized dashboards.',
  },
  {
    num: '03',
    title: 'Report & Scale',
    desc: 'Generate comprehensive occupancy analytics, revenue reports, and compliance audits with one-click export for management review.',
  },
]

const CAPABILITIES = [
  { icon: '🏢', title: 'Smart Room Allocation', desc: 'AI-assisted allocation engine that optimizes bed occupancy and room assignment without double-booking.' },
  { icon: '📱', title: 'Digital Gate Pass', desc: 'Automated digital student out-pass workflow with real-time parent notifications and warden approvals.' },
  { icon: '💳', title: 'Automated Fee Management', desc: 'Track installments, generate automated invoices, send payment reminders, and reconcile bank deposits.' },
  { icon: '📊', title: 'Real-Time Occupancy Analytics', desc: 'Interactive dashboards displaying live occupancy, vacancy forecasts, floor-wise distribution, and churn.' },
  { icon: '🛠️', title: 'Maintenance & Grievance Desk', desc: 'Ticket management system for electrical, plumbing, and housekeeping issues with SLA tracking.' },
  { icon: '🔒', title: 'Security & Access Control', desc: 'Role-based access permissions for wardens, administration, security personnel, and students.' },
]

const STAKEHOLDERS = [
  { icon: '🎓', title: 'Universities & Colleges', desc: 'Manage multiple campus hostels and thousands of students with zero paperwork.' },
  { icon: '🏢', title: 'Private Student Hostels', desc: 'Maximize occupancy rates, streamline billing, and deliver premium student experiences.' },
  { icon: '🛡️', title: 'Wardens & Administrators', desc: 'Handle daily operations, roll calls, leaves, and discipline tracking effortlessly.' },
  { icon: '👥', title: 'Parents & Guardians', desc: 'Receive instant notifications regarding leave approvals, safety updates, and fee confirmations.' },
]

const FAQ = [
  {
    q: 'What is Encegen HMS?',
    a: 'Encegen HMS (Hostel Management System) is an enterprise-grade, AI-assisted platform designed to automate student onboarding, room allocation, fee collection, gate pass management, and maintenance workflows for educational institutions and private hostel operators.',
  },
  {
    q: 'Can HMS handle multi-building and multi-campus configurations?',
    a: 'Yes. HMS supports multi-campus, multi-block, floor-wise, and room-wise hierarchy management with customizable capacities and tier pricing.',
  },
  {
    q: 'Does it support parents and student mobile access?',
    a: 'Yes. Students and parents can access dedicated mobile-friendly portals for gate pass requests, leave applications, fee receipts, and announcements.',
  },
  {
    q: 'How quickly can HMS be deployed?',
    a: 'A typical institutional deployment is fully configured, integrated with existing student databases, and operational in under 2 to 4 weeks.',
  },
]

export default function HMS() {
  useEffect(() => {
    document.title = 'HMS — Hostel Management System | Encegen AI Labs'
  }, [])

  return (
    <>
      <PageHero
        badge="Enterprise Hostel Software"
        title={
          <>
            Smart Hostel Management.
            <br />
            <span className="accent-green">Effortless Operations.</span>
          </>
        }
        sub="An AI-assisted hostel management platform that automates room allocation, student onboarding, gate passes, fee reconciliation, and maintenance — all from one unified control plane."
        actions={[
          <Btn key="1" to="/platform#explore-platform" variant="white">
            Schedule a Demo &rarr;
          </Btn>,
          <Btn key="2" to="/solutions/custom-software" variant="outline-light">
            View Custom Solutions
          </Btn>,
        ]}
        trusted={['Multi-Campus Ready', 'Real-time Gate Pass', 'Automated Invoicing']}
        trustedLabel="trusted by top institutions"
      />

      <GradBand stats={STAT_TILES} />

      {/* Workflow Steps */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="How It Works"
            title="Complete hostel operations in three simple steps"
            sub="From initial student enrollment to daily security tracking and final checkout."
          />
          <StepFlow steps={HOW} />
        </div>
      </section>

      {/* Feature Capabilities */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead
            eyebrow="Capabilities"
            title="Everything required to run modern student residences"
            dark
          />
          <div className="dcard-grid">
            {CAPABILITIES.map((c) => (
              <article key={c.title} className="dcard">
                <span className="dcard__icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="section section--light">
        <div className="container">
          <SectionHead
            eyebrow="Built For"
            title="Designed for modern campus ecosystems"
          />
          <div className="cards-3">
            {STAKEHOLDERS.map((s) => (
              <article key={s.title} className="fcard">
                <span className="fcard__icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Mock Panel */}
      <section className="section section--lavender">
        <div className="container">
          <SectionHead
            eyebrow="Live Operations"
            title="A single pane of glass for administrators and wardens"
          />
          <div style={{ maxWidth: 880, margin: '2rem auto 0' }}>
            <MockPanel
              title="Campus North — Hostel Block A Operations"
              right="Live Telemetry"
              rows={[
                { label: 'Total Bed Capacity', sub: 'Block A & B (4 Floors)', value: '450 Beds', chip: '96% Occupied' },
                { label: 'Pending Gate Pass Requests', sub: 'Weekend leaves awaiting approval', value: '14 Requests', chip: 'Auto-verified' },
                { label: 'Monthly Fee Collection', sub: 'Current semester cycle', value: '₹34.2L / ₹35.0L', chip: '98% Cleared' },
                { label: 'Open Maintenance Tickets', sub: 'Plumbing & Electrical', value: '3 Active', chip: 'In SLA' },
              ]}
              footer="Encegen HMS Enterprise Core v4.2 • Connected to Campus ERP"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--light">
        <div className="container">
          <SectionHead eyebrow="FAQ" title="Frequently asked questions" />
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="faq__content">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        dark
        line1="Transform your campus hostel operations."
        sub="Book an institutional walkthrough and see how Encegen HMS eliminates manual paperwork."
        primary={{ label: 'Request Institutional Demo', to: '/platform#explore-platform' }}
        checks={['Role-Based Security', 'ERP Integration Ready', 'Cloud & On-Premises']}
      />
    </>
  )
}
