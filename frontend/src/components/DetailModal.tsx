interface DetailModalProps {
  isOpen: boolean
  onClose: () => void
  tag: string
  title: string
  meta?: string
  body: string
}

// Reader-style modal matching the visual/behavioral pattern already established
// on the Resources page (Frontend/src/pages/Resources.tsx) — same backdrop,
// panel, and close conventions — but generic, so it can present any
// title/tag/meta/body without depending on the Resources page's richer
// ResourceArticle shape (video embeds, Word-doc download, etc).
export default function DetailModal({ isOpen, onClose, tag, title, meta, body }: DetailModalProps) {
  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(10, 15, 29, 0.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: '#ffffff',
          color: '#0f172a',
          borderRadius: '20px',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: '#f1f5f9',
            border: 'none',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.2rem',
            color: '#64748b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ✕
        </button>

        <span
          style={{
            display: 'inline-block',
            padding: '4px 12px',
            background: '#eff6ff',
            color: '#2563eb',
            borderRadius: '20px',
            fontWeight: 600,
            fontSize: '0.8rem',
            marginBottom: '1rem',
          }}
        >
          {tag}
        </span>

        <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: '0 0 1rem 0', color: '#0f172a', lineHeight: 1.25 }}>
          {title}
        </h1>

        {meta && (
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{meta}</p>
        )}

        <div
          style={{
            fontSize: '1.05rem',
            lineHeight: '1.8',
            color: '#334155',
            whiteSpace: 'pre-line',
          }}
        >
          {body}
        </div>
      </div>
    </div>
  )
}
