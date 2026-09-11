import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import ContactModal from './ContactModal'
import './kit.css'

/* ---------- Buttons ---------- */

type BtnProps = {
  to?: string
  variant?: 'white' | 'outline-light' | 'purple' | 'outline-dark' | 'lavender'
  children: ReactNode
  onClick?: () => void
  newTab?: boolean
}

export function Btn({ to = '#', variant = 'white', children, onClick, newTab }: BtnProps) {
  const cls = `kbtn kbtn--${variant}`
  if (onClick && to === '#') {
    return (
      <button type="button" onClick={onClick} className={cls} style={{ border: 'none', cursor: 'pointer' }}>
        {children}
      </button>
    )
  }
  if (to.startsWith('#') || to.startsWith('http')) {
    return (
      <a
        href={to}
        onClick={onClick}
        className={cls}
        {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <Link to={to} onClick={onClick} className={cls}>
      {children}
    </Link>
  )
}


/* ---------- Dark page hero ---------- */

type PageHeroProps = {
  badge?: ReactNode
  title: ReactNode
  sub?: ReactNode
  actions?: ReactNode
  trusted?: string[]
  trustedLabel?: string
  children?: ReactNode
}

export function PageHero({ badge, title, sub, actions, trusted, trustedLabel = 'trusted by', children }: PageHeroProps) {
  return (
    <section className="phero">
      <div className="container phero__inner">
        {badge && <span className="phero__badge">{badge}</span>}
        <h1 className="phero__title">{title}</h1>
        {sub && <p className="phero__sub">{sub}</p>}
        {actions && <div className="phero__actions">{actions}</div>}
        {children}
        {trusted && (
          <div className="phero__trusted">
            <span className="phero__trusted-label">{trustedLabel}</span>
            <div className="phero__trusted-logos">
              {trusted.map((t) => (
                <span key={t} className="phero__trusted-item">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

/* ---------- Gradient band (stats or quote) ---------- */

type GradBandProps = {
  stats?: { value: string; label: string }[]
  quote?: ReactNode
  cite?: string
  tone?: 'purple' | 'orange'
}

export function GradBand({ stats, quote, cite, tone = 'purple' }: GradBandProps) {
  return (
    <section className={`gband gband--${tone}`}>
      <div className="container">
        {stats && (
          <div className="gband__stats">
            {stats.map((s) => (
              <div key={s.label} className="gband__stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        )}
        {quote && (
          <div className="gband__quote">
            <p>{quote}</p>
            {cite && <cite>– {cite}</cite>}
          </div>
        )}
      </div>
    </section>
  )
}

/* ---------- Section heading ---------- */

type SectionHeadProps = {
  eyebrow?: string
  title: ReactNode
  sub?: ReactNode
  dark?: boolean
}

export function SectionHead({ eyebrow, title, sub, dark }: SectionHeadProps) {
  return (
    <div className={`shead ${dark ? 'shead--dark' : ''}`}>
      {eyebrow && <p className="shead__eyebrow">{eyebrow}</p>}
      <h2 className="shead__title">{title}</h2>
      {sub && <p className="shead__sub">{sub}</p>}
    </div>
  )
}

/* ---------- Chapter tag ---------- */

export function ChapterTag({ children }: { children: ReactNode }) {
  return <span className="chapter-tag">{children}</span>
}

/* ---------- Step flow ---------- */

type Step = { num: string; title: string; meta?: string; desc?: string; chips?: string[] }

export function StepFlow({ steps, dark }: { steps: Step[]; dark?: boolean }) {
  return (
    <div className={`stepflow ${dark ? 'stepflow--dark' : ''}`} style={{ ['--step-count' as string]: steps.length }}>
      {steps.map((s) => (
        <div key={s.num} className="stepflow__step">
          <span className="stepflow__num">{s.num}</span>
          <h4>{s.title}</h4>
          {s.meta && <span className="stepflow__meta">{s.meta}</span>}
          {s.desc && <p>{s.desc}</p>}
          {s.chips && (
            <div className="stepflow__chips">
              {s.chips.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/* ---------- Result bar (dark rounded strip under sections) ---------- */

export function ResultBar({ left, chips, action }: { left: ReactNode; chips?: string[]; action?: ReactNode }) {
  return (
    <div className="resultbar">
      <span className="resultbar__left">{left}</span>
      {chips && (
        <span className="resultbar__chips">
          {chips.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </span>
      )}
      {action}
    </div>
  )
}

/* ---------- Use-case dark card ---------- */

type UseCaseProps = {
  tags: string[]
  color?: string
  title: string
  desc: string
  metric: string
  compare?: string
  id?: string
}

export function UseCaseCard({ tags, color = '#22c55e', title, desc, metric, compare, id }: UseCaseProps) {
  return (
    <article id={id} className="ucase" style={{ ['--uc-color' as string]: color }}>
      <div className="ucase__tags">
        {tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="ucase__footer">
        <span className="ucase__metric">{metric}</span>
        {compare && <span className="ucase__compare">{compare}</span>}
      </div>
    </article>
  )
}

/* ---------- Stars ---------- */

export function Stars() {
  return (
    <span className="stars" aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  )
}

/* ---------- Avatar ---------- */

export function Avatar({ text, hue = 255, size = 44 }: { text: string; hue?: number; size?: number }) {
  return (
    <span
      className="avatar"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        background: `linear-gradient(135deg, hsl(${hue} 70% 55%), hsl(${hue + 40} 70% 45%))`,
      }}
    >
      {text}
    </span>
  )
}

/* ---------- Testimonial card ---------- */

type TestimonialProps = {
  tag?: string
  color?: string
  quote: string
  initials: string
  name: string
  role: string
  metric?: string
  hue?: number
}

export function TestimonialCard({ tag, color = '#22c55e', quote, initials, name, role, metric, hue = 255 }: TestimonialProps) {
  return (
    <article className="tcard" style={{ ['--tc-color' as string]: color }}>
      <div className="tcard__head">
        {tag && <span className="tcard__tag">{tag}</span>}
        <Stars />
      </div>
      <p className="tcard__quote">“{quote}”</p>
      <div className="tcard__foot">
        <div className="tcard__person">
          <Avatar text={initials} hue={hue} size={42} />
          <span className="tcard__who">
            <strong>{name}</strong>
            <span>{role}</span>
          </span>
        </div>
        {metric && (
          <div className="tcard__meta-bar">
            <span className="tcard__metric">{metric}</span>
          </div>
        )}
      </div>
    </article>
  )
}

/* ---------- Closing CTA ---------- */

type ClosingCTAProps = {
  eyebrow?: ReactNode
  trusted?: string[]
  trustedLabel?: string
  line1: ReactNode
  line2?: ReactNode
  sub?: ReactNode
  primary?: { label: string; to?: string; newTab?: boolean; variant?: 'purple' | 'white' | 'lavender'; onClick?: () => void }
  secondary?: { label: string; to?: string; newTab?: boolean; variant?: 'outline-dark' | 'outline-light' | 'white'; onClick?: () => void }
  checks?: Array<string | { text: string; icon?: ReactNode }>
  note?: ReactNode
  dark?: boolean
}

export function ClosingCTA({
  eyebrow,
  trusted,
  trustedLabel = 'trusted by our enterprise partners & clients',
  line1,
  line2,
  sub,
  primary,
  secondary,
  checks,
  note,
  dark,
}: ClosingCTAProps) {
  const [showContact, setShowContact] = useState(false)
  let activePrimary = primary
  let activeSecondary = secondary

  if (activePrimary && /start\s+(a\s+)?project/i.test(activePrimary.label)) {
    activePrimary = undefined
    if (!activeSecondary) {
      activeSecondary = { label: 'Talk to an expert', to: '/contact' }
    }
  } else if (!activePrimary && !activeSecondary) {
    activePrimary = { label: 'Talk to an expert', to: '/contact' }
  }

  return (
    <section className={`closing ${dark ? 'closing--dark' : ''}`}>
      <div className="closing__inner">
        {eyebrow && <span className="closing__eyebrow">{eyebrow}</span>}
        {trusted && trusted.length > 0 && (
          <div className="closing__trusted">
            <span className="closing__trusted-label">— {trustedLabel}</span>
            <div className="closing__trusted-pills">
              {trusted.map((t) => (
                <span key={t} className="closing__trusted-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
        <h2 className="closing__title">
          {line1}
          {line2 && (
            <>
              <br />
              <span className="closing__accent">{line2}</span>
            </>
          )}
        </h2>
        {sub && <p className="closing__sub">{sub}</p>}
        {(activePrimary || activeSecondary) && (
          <div className="closing__actions">
            {activePrimary && (
              <Btn
                to={activePrimary.to === '/contact' ? '#' : activePrimary.to}
                onClick={
                  activePrimary.onClick
                    ? activePrimary.onClick
                    : activePrimary.to === '/contact'
                      ? () => setShowContact(true)
                      : undefined
                }
                variant={activePrimary.variant ?? (dark ? 'purple' : 'lavender')}
                newTab={activePrimary.newTab}
              >
                {activePrimary.label}
              </Btn>
            )}
            {activeSecondary && (
              <Btn
                to={activeSecondary.to === '/contact' ? '#' : activeSecondary.to}
                onClick={
                  activeSecondary.onClick
                    ? activeSecondary.onClick
                    : activeSecondary.to === '/contact'
                      ? () => setShowContact(true)
                      : undefined
                }
                variant={activeSecondary.variant ?? (dark ? 'outline-light' : 'outline-dark')}
                newTab={activeSecondary.newTab}
              >
                {activeSecondary.label}
              </Btn>
            )}
          </div>
        )}
        {checks && checks.length > 0 && (
          <div className="closing__checks">
            {checks.map((c, i) => {
              const text = typeof c === 'string' ? c : c.text
              const icon = typeof c === 'object' && c.icon
                ? c.icon
                : (i === 0 && !text.includes('🔒') ? '🔒' : undefined)
              return (
                <span key={i} className="closing__check-item">
                  {icon && <span className="closing__check-icon">{icon}</span>}
                  <span>{text}</span>
                </span>
              )
            })}
          </div>
        )}
        {note && <div className="closing__note">{note}</div>}
      </div>
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </section>
  )
}

/* ---------- Mock dashboard panel ---------- */

type MockRow = { label: string; sub?: string; value?: string; chip?: string; chipColor?: string }

type MockPanelProps = {
  title: string
  right?: ReactNode
  rows: MockRow[]
  footer?: ReactNode
  className?: string
}

export function MockPanel({ title, right, rows, footer, className = '' }: MockPanelProps) {
  return (
    <div className={`mock ${className}`}>
      <div className="mock__head">
        <span className="mock__title">{title}</span>
        {right && <span className="mock__right">{right}</span>}
      </div>
      <div className="mock__rows">
        {rows.map((r, i) => (
          <div key={i} className="mock__row">
            <span className="mock__label">
              {r.label}
              {r.sub && <em>{r.sub}</em>}
            </span>
            {r.value && <span className="mock__value">{r.value}</span>}
            {r.chip && (
              <span className="mock__chip" style={{ color: r.chipColor ?? '#2fe08e', borderColor: 'currentColor' }}>
                {r.chip}
              </span>
            )}
          </div>
        ))}
      </div>
      {footer && <div className="mock__footer">{footer}</div>}
    </div>
  )
}

/* ---------- Live dot ---------- */

export function LiveDot({ label, color = '#2fe08e' }: { label: string; color?: string }) {
  return (
    <span className="livedot" style={{ color }}>
      <span className="livedot__dot" style={{ background: color }} />
      {label}
    </span>
  )
}

import { CapabilityArt } from './CapabilityArt'

/* ---------- Abstract art tile (placeholder for design imagery) ---------- */

export function ArtTile({ variant = 'purple', className = '' }: { variant?: string; className?: string }) {
  return <CapabilityArt id={variant} className={className} />
}
