'use client'

import { Suspense, useEffect, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import useAlert from '../hooks/useAlert'
import Alert from './Alert'

const VALID = ['vollzeit', 'freiberuflich']

function parseModeFromUrl(pathname, searchParams) {
  const p = (pathname || '').toLowerCase()
  if (p.includes('/vollzeit')) return 'vollzeit'
  if (p.includes('/freiberuflich')) return 'freiberuflich'
  const qp = searchParams?.get?.('modus')
  if (VALID.includes(qp)) return qp
  return 'freiberuflich'
}

function urlHasExplicitMode(pathname, searchParams) {
  const p = (pathname || '').toLowerCase()
  if (p.includes('/vollzeit') || p.includes('/freiberuflich')) return true
  const qp = searchParams?.get?.('modus')
  return VALID.includes(qp)
}

function ContactInner({ locale = 'de' }) {
  const isDE = locale === 'de'
  const storageKey = isDE ? 'modus-de' : 'modus-en'

  const formRef = useRef(null)
  const { alert, showAlert, hideAlert } = useAlert()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [mode, setMode] = useState(() => parseModeFromUrl(pathname, searchParams))

  useEffect(() => {
    setMode(parseModeFromUrl(pathname, searchParams))
  }, [pathname, searchParams?.toString()])

  useEffect(() => {
    const explicit = urlHasExplicitMode(pathname, searchParams)
    if (!explicit && typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey)
      if (VALID.includes(stored)) setMode(stored)
    }
    function onStorage(e) {
      if (!explicit && e.key === storageKey && VALID.includes(e.newValue)) {
        setMode(e.newValue)
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [pathname, searchParams?.toString(), storageKey])

  const handleChange = ({ target: { name, value } }) =>
    setForm((f) => ({ ...f, [name]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('https://contact.portfolio-marko.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          modus: mode,
          locale,
          path: pathname,
        }),
      })
      if (!res.ok) throw new Error('Server returned error')

      setLoading(false)
      showAlert({
        show: true,
        text: isDE ? 'Danke für deine Nachricht' : 'Thanks for your message',
        type: 'success',
      })
      setTimeout(() => {
        hideAlert()
        setForm({ name: '', email: '', message: '' })
      }, 3000)
    } catch (err) {
      console.error(err)
      setLoading(false)
      showAlert({
        show: true,
        text: isDE ? 'Ich habe deine Nachricht leider nicht erhalten' : "I didn't receive your message",
        type: 'danger',
      })
    }
  }

  const introCopy = isDE
    ? mode === 'vollzeit'
      ? 'Sie suchen eine Verstärkung in Festanstellung? Ich fokussiere robuste Frontends (React/Next.js), UI-Integration und Junior Full-Stack (Node/Go). Schreiben Sie mir kurz Rolle, Team-Setup und Starttermin.'
      : 'Projektbasiert: schnelle, kosteneffiziente Web-Lösungen (Next.js, Go+htmx) sowie Video Editing & Motion Graphics. Bitte Ziel, Timing und Scope nennen – ich melde mich zeitnah.'
    : mode === 'vollzeit'
      ? 'Hiring for a full-time role? I focus on robust frontends (React/Next.js), UI integration, and junior full-stack (Node/Go). Share the role, team setup, and start date.'
      : 'Project-based: fast, cost-effective web solutions (Next.js, Go+htmx) plus video editing & motion graphics. Please include goal, timing, and scope — I’ll get back quickly.'

  const labels = isDE
    ? {
        name: 'Vollständiger Name',
        email: 'E-Mail-Adresse',
        message: 'Deine Nachricht',
        namePh: 'z. B. John Doe',
        emailPh: 'z. B. johndoe@gmail.com',
        messagePh: 'Teile deine Gedanken oder Anfragen…',
        send: 'Nachricht senden',
        sending: 'Senden...',
        heading: 'Lass uns sprechen',
      }
    : {
        name: 'Full name',
        email: 'Email address',
        message: 'Your message',
        namePh: 'e.g. John Doe',
        emailPh: 'e.g. johndoe@gmail.com',
        messagePh: 'Share your thoughts or request…',
        send: 'Send message',
        sending: 'Sending...',
        heading: "Let's talk",
      }

  return (
    <section className="px-2 sm:px-10 my-0 mb-16 sm:my-20" id="contact">
      {alert.show && <Alert {...alert} />}
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.webp" alt="terminal-bg" className="absolute inset-0 min-h-screen" />
        <div className="contact-container text-white-600">
          <h3 className="sm:text-4xl text-3xl font-semibold mt-16 md:mt-0">{labels.heading}</h3>
          <p className="text-lg mt-3">{introCopy}</p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">{labels.name}</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder={labels.namePh}
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">{labels.email}</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder={labels.emailPh}
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">{labels.message}</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder={labels.messagePh}
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? labels.sending : labels.send}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function Contact({ locale = 'de' }) {
  return (
    <Suspense fallback={null}>
      <ContactInner locale={locale} />
    </Suspense>
  )
}
