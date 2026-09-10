import './ContactModal.css'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const PHONES = ['+91 7798715090', '+91 7030555123', '+91 9226113909', '+91 7030555126']

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="contact-modal-header">
          <span className="contact-modal-badge">Get in Touch</span>
          <h2>Talk to an expert</h2>
        </div>

        <div className="contact-modal-group">
          <span className="contact-modal-label">Email</span>
          <a href="mailto:info@encegenailabs.com" className="contact-modal-email">
            info@encegenailabs.com
          </a>
        </div>

        <div className="contact-modal-group">
          <span className="contact-modal-label">Contact</span>
          <div className="contact-modal-phones">
            {PHONES.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-modal-phone">
                {phone}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
