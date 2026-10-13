import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import './ContactModal.css'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const PHONES = ['+91 7030555126']

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const origOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = origOverflow
    }
  }, [isOpen])

  if (!isOpen) return null

  return createPortal(
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="contact-modal-header">
          <span className="contact-modal-badge">Get in Touch</span>
          <h2>Talk to an expert</h2>
          <p>Have a project in mind? Give our team a call and let’s get started.</p>
        </div>

        <div className="contact-modal-group contact-modal-primary">
          <span className="contact-modal-label">Call us directly</span>
          <div className="contact-modal-phones">
            {PHONES.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-modal-phone">
                <span className="contact-modal-phone-number">{phone}</span>
                <span className="contact-modal-call-action">
                  Call now <span aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-modal-group contact-modal-email-group">
          <span className="contact-modal-label">Email</span>
          <a href="mailto:info@encegenailabs.com" className="contact-modal-email">
            info@encegenailabs.com
          </a>
        </div>
      </div>
    </div>,
    document.body
  )
}
