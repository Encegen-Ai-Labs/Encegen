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
  className?: string
}

export function PageHero({ badge, title, sub, actions, trusted, trustedLabel = 'trusted by', children, className }: PageHeroProps) {
  return (
    <section className={`phero ${className ?? ''}`.trim()}>
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
  className?: string
  eyebrow?: string
  title?: ReactNode
}

export function GradBand({ stats, quote, cite, tone = 'purple', className = '', eyebrow, title }: GradBandProps) {
  return (
    <section className={`gband gband--${tone} ${className}`.trim()}>
      <div className="container">
        {(eyebrow || title) && (
          <div className="gband__heading">
            {eyebrow && <p className="gband__eyebrow">{eyebrow}</p>}
            {title && <h2 className="gband__title">{title}</h2>}
          </div>
        )}
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

export function ResultBar({
  left,
  chips,
  action,
  className = '',
}: {
  left: ReactNode
  chips?: ReactNode[]
  action?: ReactNode
  className?: string
}) {
  const hasFixedPriceChip = chips?.some(
    (chip) => typeof chip === 'string' && chip.trim().toUpperCase() === 'FIXED-PRICE',
  )

  return (
    <div className={`resultbar ${hasFixedPriceChip ? 'resultbar--fixed-price' : ''} ${className}`.trim()}>
      <span className="resultbar__left">{left}</span>
      {chips && (
        <span className="resultbar__chips">
          {chips.map((chip, index) => (
            <span
              key={index}
              className={
                typeof chip === 'string' && chip.trim().toUpperCase() === 'FIXED-PRICE'
                  ? 'resultbar__chip--fixed-price'
                  : undefined
              }
            >
              {chip}
            </span>
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
  icon?: ReactNode
  title: string
  desc: string
  metric: string
  compare?: string
  id?: string
}

export function UseCaseCard({ tags, color = '#22c55e', icon, title, desc, metric, compare, id }: UseCaseProps) {
  const compareParts = compare && compare.includes('→') ? compare.split('→').map((s) => s.trim()) : null

  return (
    <article id={id} className={`ucase ${icon ? 'ucase--with-icon' : ''}`.trim()} style={{ ['--uc-color' as string]: color }}>
      {icon ? (
        <div className="ucase__top ucase__top--icon">
          <span className="ucase__icon" aria-hidden="true">{icon}</span>
          <div className="ucase__head-text">
            <div className="ucase__tags">
              {tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <h3>{title}</h3>
          </div>
        </div>
      ) : (
        <>
          <div className="ucase__top">
            <div className="ucase__tags">
              {tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
          <h3>{title}</h3>
        </>
      )}
      <p>{desc}</p>
      <div className="ucase__footer">
        <span className="ucase__metric">{metric}</span>
        {compare && (
          <span className="ucase__compare">
            {compareParts ? (
              <>
                <span className="ucase__compare-before">{compareParts[0]}</span>
                <span className="ucase__compare-arrow" aria-hidden="true">→</span>
                <strong className="ucase__compare-after">{compareParts[1]}</strong>
              </>
            ) : (
              compare
            )}
          </span>
        )}
      </div>
    </article>
  )
}

/* ---------- Stars ---------- */

export function Stars({ outline = false }: { outline?: boolean } = {}) {
  return (
    <span className="stars" aria-label="5 out of 5 stars">
      {outline ? '☆☆☆☆☆' : '★★★★★'}
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
  metricIcon?: ReactNode
  hue?: number
  outlineStars?: boolean
}

export function TestimonialCard({
  tag,
  color = '#6553ee',
  quote,
  initials,
  name,
  role,
  metric,
  metricIcon,
  hue = 255,
  outlineStars = true,
}: TestimonialProps) {
  return (
    <article className="tcard" style={{ ['--tc-color' as string]: color }}>
      <div className="tcard__head">
        {tag && <span className="tcard__tag">{tag}</span>}
        <Stars outline={outlineStars} />
      </div>
      <div className="tcard__quote-mark" aria-hidden="true">
        “
      </div>
      <p className="tcard__quote">“{quote}”</p>
      <div className="tcard__foot">
        <div className="tcard__person">
          <Avatar text={initials} hue={hue} size={36} />
          <span className="tcard__who">
            <strong>{name}</strong>
            <span>{role}</span>
          </span>
        </div>
        {metric && (
          <div className="tcard__meta-bar">
            <span className="tcard__metric">
              {metricIcon && (
                <span className="tcard__metric-icon" aria-hidden="true">
                  {metricIcon}
                </span>
              )}
              {metric}
            </span>
          </div>
        )}
      </div>
    </article>
  )
}

/* ---------- Closing CTA ---------- */

type ClosingCTAProps = {
  className?: string
  eyebrow?: ReactNode
  trusted?: string[]
  trustedLabel?: string
  line1: ReactNode
  line2?: ReactNode
  sub?: ReactNode
  primary?: { label: string; to?: string; newTab?: boolean; variant?: 'purple' | 'white' | 'lavender'; onClick?: () => void }
  secondary?: { label: string; to?: string; newTab?: boolean; variant?: 'outline-dark' | 'outline-light' | 'white' | 'purple' | 'lavender'; onClick?: () => void }
  checks?: Array<string | { text: string; icon?: ReactNode }>
  note?: ReactNode
  dark?: boolean
}

export function ClosingCTA({
  className = '',
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
    <section className={`closing ${dark ? 'closing--dark' : ''} ${className}`.trim()}>
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
              const defaultIcons = [
                (
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="12" height="12" rx="3" />
                    <path d="M5.2 8.2l2 2 3.6-4" />
                  </svg>
                ),
                (
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2.5" width="12" height="11" rx="2.5" />
                    <path d="M2 6.2h12M2 9.8h12" />
                  </svg>
                ),
                (
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2.5" y="2" width="11" height="12" rx="2.5" />
                    <path d="M6 2v2.2h4V2" />
                  </svg>
                ),
              ]
              const icon =
                typeof c === 'object' && c.icon && typeof c.icon !== 'string'
                  ? c.icon
                  : defaultIcons[i % defaultIcons.length]
              return (
                <span key={i} className="closing__check-item">
                  <span className="closing__check-icon" aria-hidden="true">{icon}</span>
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
