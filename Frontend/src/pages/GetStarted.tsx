import { useState, type ChangeEvent, type FormEvent, type FocusEvent } from 'react'
import { Link } from 'react-router-dom'
import API_BASE_URL from '../config/api'
import './GetStarted.css'

interface SubmissionResponse {
  error?: string
}

const FORM_FIELDS = ['name', 'email', 'company', 'phone', 'message', 'consent'] as const
type FormField = typeof FORM_FIELDS[number]
type ContactFormValues = Record<FormField, string>

const INITIAL_VALUES: ContactFormValues = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
  consent: '',
}

const EMAIL_PATTERN = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i
const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}\s.'’-]*$/u
const MESSAGE_CONTROL_PATTERN = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/

function isFormField(field: string): field is FormField {
  return (FORM_FIELDS as readonly string[]).includes(field)
}

function validateField(field: FormField, values: ContactFormValues): string {
  const value = values[field].trim()

  switch (field) {
    case 'name':
      if (!value) return 'Enter your full name.'
      if (value.length < 2) return 'Name must be at least 2 characters.'
      if (value.length > 100) return 'Name must be 100 characters or fewer.'
      if (!NAME_PATTERN.test(value)) return 'Use letters, spaces, apostrophes, periods, or hyphens only.'
      return ''
    case 'email':
      if (!value) return 'Enter your work email.'
      {
        const [localPart] = value.split('@')
        if (
          value.length > 254 ||
          localPart.length > 64 ||
          localPart.startsWith('.') ||
          localPart.endsWith('.') ||
          value.includes('..') ||
          !EMAIL_PATTERN.test(value)
        ) return 'Enter a valid email address.'
      }
      return ''
    case 'company':
      if (!value) return 'Enter your company name.'
      if (value.length < 2) return 'Company name must be at least 2 characters.'
      if (value.length > 120) return 'Company name must be 120 characters or fewer.'
      if (/\p{Cc}/u.test(value)) return 'Company name contains unsupported characters.'
      return ''
    case 'phone': {
      if (!value) return 'Enter your 10-digit phone number.'
      return /^\d{10}$/.test(value) ? '' : 'Phone number must contain exactly 10 digits.'
    }
    case 'message':
      if (!value) return 'Tell us a little about what you would like to achieve.'
      if (value.length < 10) return 'Please enter at least 10 characters.'
      if (value.length > 2000) return 'Message must be 2,000 characters or fewer.'
      if (MESSAGE_CONTROL_PATTERN.test(value)) return 'Message contains unsupported characters.'
      return ''
    case 'consent':
      return value === 'true' ? '' : 'Please agree before submitting your request.'
  }
}

export default function GetStarted() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<Partial<Record<FormField, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<FormField, boolean>>>({})

  function updateField(field: FormField, value: string) {
    const nextValues = { ...values, [field]: value }
    setValues(nextValues)
    setStatus(null)

    if (touched[field]) {
      setErrors((current) => ({ ...current, [field]: validateField(field, nextValues) }))
    }
  }

  function handleFieldChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { currentTarget } = event
    if (!isFormField(currentTarget.name)) return
    const value = currentTarget.name === 'phone'
      ? currentTarget.value.replace(/\D/g, '').slice(0, 10)
      : currentTarget instanceof HTMLInputElement && currentTarget.type === 'checkbox'
        ? String(currentTarget.checked)
        : currentTarget.value
    updateField(currentTarget.name, value)
  }

  function handleFieldBlur(event: FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const field = event.currentTarget.name
    if (!isFormField(field)) return
    setTouched((current) => ({ ...current, [field]: true }))
    setErrors((current) => ({ ...current, [field]: validateField(field, values) }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus(null)

    const form = event.currentTarget
    const nextErrors = Object.fromEntries(
      FORM_FIELDS.map((field) => [field, validateField(field, values)])
    ) as Record<FormField, string>
    setErrors(nextErrors)
    setTouched(Object.fromEntries(FORM_FIELDS.map((field) => [field, true])))

    const firstInvalidField = FORM_FIELDS.find((field) => nextErrors[field])
    if (firstInvalidField) {
      form.querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)?.focus()
      setStatus({ type: 'error', message: 'Please correct the highlighted fields and try again.' })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim(),
          phone: values.phone,
          message: values.message.trim(),
        }),
      })
      const result = await response.json() as SubmissionResponse

      if (!response.ok) {
        throw new Error(result.error || 'We could not send your request. Please try again.')
      }

      setValues(INITIAL_VALUES)
      setErrors({})
      setTouched({})
      setStatus({
        type: 'success',
        message: 'Thanks for reaching out. Our team will be in touch soon.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error
          ? error.message
          : 'We could not send your request. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="get-started-page">
      <div className="get-started-shell">
        <div className="get-started-intro">
          <span className="get-started-eyebrow">Let’s get started</span>
          <h1>Tell us what you’re looking to achieve.</h1>
          <p>
            Share a little about your goals. Our team will reach out to understand
            what you need and recommend the right next step.
          </p>
          <div className="get-started-promise">
            <span aria-hidden="true">✦</span>
            A real conversation with our team. No pressure, no generic sales pitch.
          </div>
        </div>

        <form className="get-started-form" noValidate onSubmit={handleSubmit}>
          <div className="get-started-form-heading">
            <h2>Start a conversation</h2>
            <p>Tell us how we can help.</p>
          </div>

          <div className="get-started-fields">
            <label className="get-started-field">
              <span>Full name <b aria-hidden="true">*</b></span>
              <input
                autoComplete="name"
                aria-describedby={errors.name ? 'get-started-name-error' : undefined}
                aria-invalid={Boolean(errors.name)}
                maxLength={100}
                name="name"
                onBlur={handleFieldBlur}
                onChange={handleFieldChange}
                placeholder="Your name"
                required
                value={values.name}
              />
              {errors.name && <small className="get-started-field-error" id="get-started-name-error">{errors.name}</small>}
            </label>

            <label className="get-started-field">
              <span>Work email <b aria-hidden="true">*</b></span>
              <input
                autoComplete="email"
                aria-describedby={errors.email ? 'get-started-email-error' : undefined}
                aria-invalid={Boolean(errors.email)}
                maxLength={254}
                name="email"
                onBlur={handleFieldBlur}
                onChange={handleFieldChange}
                placeholder="you@company.com"
                required
                type="email"
                value={values.email}
              />
              {errors.email && <small className="get-started-field-error" id="get-started-email-error">{errors.email}</small>}
            </label>

            <label className="get-started-field">
              <span>Company <b aria-hidden="true">*</b></span>
              <input
                autoComplete="organization"
                aria-describedby={errors.company ? 'get-started-company-error' : undefined}
                aria-invalid={Boolean(errors.company)}
                maxLength={120}
                name="company"
                onBlur={handleFieldBlur}
                onChange={handleFieldChange}
                placeholder="Company name"
                required
                value={values.company}
              />
              {errors.company && <small className="get-started-field-error" id="get-started-company-error">{errors.company}</small>}
            </label>

            <label className="get-started-field">
              <span>Phone (10 digits) <b aria-hidden="true">*</b></span>
              <input
                autoComplete="tel"
                aria-describedby={errors.phone ? 'get-started-phone-error' : undefined}
                aria-invalid={Boolean(errors.phone)}
                inputMode="numeric"
                maxLength={10}
                name="phone"
                onBlur={handleFieldBlur}
                onChange={handleFieldChange}
                pattern="[0-9]{10}"
                placeholder="Enter 10 digits"
                required
                type="tel"
                value={values.phone}
              />
              {errors.phone && <small className="get-started-field-error" id="get-started-phone-error">{errors.phone}</small>}
            </label>

            <label className="get-started-field get-started-field--full">
              <span>What would you like to achieve? <b aria-hidden="true">*</b></span>
              <textarea
                aria-describedby={errors.message ? 'get-started-message-error' : undefined}
                aria-invalid={Boolean(errors.message)}
                maxLength={2000}
                minLength={10}
                name="message"
                onBlur={handleFieldBlur}
                onChange={handleFieldChange}
                placeholder="Tell us about the challenge or opportunity you have in mind..."
                required
                rows={4}
                value={values.message}
              />
              <small className="get-started-character-count">{values.message.length}/2000</small>
              {errors.message && <small className="get-started-field-error" id="get-started-message-error">{errors.message}</small>}
            </label>
          </div>

          <label className="get-started-consent">
            <input
              aria-describedby={errors.consent ? 'get-started-consent-error' : undefined}
              aria-invalid={Boolean(errors.consent)}
              checked={values.consent === 'true'}
              name="consent"
              onBlur={handleFieldBlur}
              onChange={handleFieldChange}
              required
              type="checkbox"
            />
            <span>
              I agree that Encegen may contact me about this request. See our{' '}
              <Link to="/privacy-policy">Privacy Policy</Link>.
            </span>
          </label>
          {errors.consent && <small className="get-started-field-error get-started-consent-error" id="get-started-consent-error">{errors.consent}</small>}

          <button className="get-started-submit" disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Sending…' : 'Get started'}
            {!isSubmitting && <span aria-hidden="true">→</span>}
          </button>

          {status && (
            <p
              aria-live="polite"
              className={`get-started-status get-started-status--${status.type}`}
              role={status.type === 'error' ? 'alert' : 'status'}
            >
              {status.message}
            </p>
          )}

          <p className="get-started-secure">
            Your information is only used to respond to your enquiry.
          </p>
        </form>
      </div>
    </section>
  )
}
