'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    <path fill="#fff" d="M16.79 12.073h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.514V5.002s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.647H7.078v3.47h3.047v8.385a12.09 12.09 0 003.75 0v-8.385h2.796l.532-3.47z" />
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="20%" stopColor="#e6683c" />
        <stop offset="40%" stopColor="#dc2743" />
        <stop offset="60%" stopColor="#cc2366" />
        <stop offset="80%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="url(#ig-grad)" />
    <rect width="16" height="16" x="4" y="4" rx="4" ry="4" fill="none" stroke="#fff" strokeWidth="2" />
    <circle cx="12" cy="12" r="3.5" fill="none" stroke="#fff" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="#fff" />
  </svg>
)

interface JoinFormData {
  name: string
  email: string
  age: string
  phone: string
  gender: string
  profession: string
  education: string
  address: string
  reason: string
}

export default function Contact() {
  const [formData, setFormData] = useState<JoinFormData>({
    name: '', email: '', age: '', phone: '', gender: '', profession: '', education: '', address: '', reason: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleGenderSelect = (value: string) => {
    setFormData(prev => ({ ...prev, gender: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    if (!formData.gender) {
      setError('Please select a gender.')
      setSubmitting(false)
      return
    }
    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')

      setSubmitted(true)
      setTimeout(() => {
        setFormData({ name: '', email: '', age: '', phone: '', gender: '', profession: '', education: '', address: '', reason: '' })
        setSubmitted(false)
      }, 4000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ── BACKGROUND IMAGE (fixed, viewport-relative) ── */}
      <div
        className="page-bg-image"
        style={{ backgroundImage: "url('https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/landing-page.jpeg')" }}
      />
      <div className="page-bg-overlay" />

      {/* ── PAGE CONTENT ── */}
      <div className="relative" style={{ zIndex: 10, paddingTop: '40px', paddingBottom: '100px' }}>

        {/* ─── Page Header ─── */}
        <motion.div
          className="w-full flex flex-col items-center text-center px-4"
          style={{ marginBottom: '30px' }}
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-3xl lg:text-5xl font-bold golden-text-glow dramatic-heading text-center"
            style={{ letterSpacing: '3px', marginBottom: '1px' }}
          >
            GET IN TOUCH
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" style={{ marginBottom: '10px' }} />
          <p className="text-[#D4AF37] text-lg font-light italic leading-loose max-w-xl text-center">
            Have a question or want to collaborate? We&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* ─── Info Cards ─── */}
        <motion.div
          className="w-full flex flex-col items-center px-4"
          style={{ marginBottom: '40px' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
              {[
                {
                  icon: '📍', title: 'ADDRESS',
                  content: (
                    <p className="text-gray-300 text-sm text-center leading-[2]">
                      11 Bikramgarh, Kolkata- 32
                    </p>
                  ),
                },
                {
                  icon: '✉️', title: 'EMAIL',
                  content: (
                    <a
                      href="mailto:jadavpurbaytikram2001@gmail.com"
                      className="!text-gray-300 hover:!text-[#F4D03F] font-semibold text-sm text-center break-all leading-loose transition-colors"
                    >
                        jadavpurbaytikram2001@gmail.com
                    </a>
                  ),
                },
                {
                  icon: '📞', title: 'PHONE',
                  content: (
                    <a
                      href="tel:+919007185494"
                      className="!text-gray-300 hover:!text-[#F4D03F] font-semibold text-sm text-center leading-loose transition-colors"
                    >
                      +91 9007185494 
                    </a>
                  ),
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  className="w-full dark-card rounded-2xl p-6 sm:p-8 lg:p-12 flex flex-col items-center text-center gap-6"
                  whileHover={{ y: -8, boxShadow: '0 12px 35px rgba(212,175,55,0.25)' }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-4xl text-center">{card.icon}</span>
                  <h3 className="text-base font-bold golden-text-glow dramatic-heading tracking-widest text-center">
                    {card.title}
                  </h3>
                  {card.content}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ─── Social Bar  ─── */}
        <motion.div
          className="w-full flex flex-col items-center text-center px-4"
          style={{ marginBottom: '50px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-sm font-bold golden-text-glow dramatic-heading tracking-widest text-center" style={{ marginBottom: '20px' }}>
            FOLLOW US
          </h3>
          <div className="flex justify-center gap-12 flex-wrap">
            {[
              {
                label: 'Facebook',
                url: 'https://www.facebook.com/ray.debasish.3?mibextid=rS40aB7S9Ucbxw6v',
                icon: <FacebookIcon />
              },
              {
                label: 'Instagram',
                url: 'https://www.instagram.com/jadavpurbaytikram?igsh=MThkaTJmdjBwdmV4eA==',
                icon: <InstagramIcon />
              },
            ].map(s => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 !text-gray-300 hover:!text-[#F4D03F] text-sm font-semibold tracking-widest transition-all hover:scale-105 pb-1 border-b border-[#D4AF37]/40 hover:!border-[#F4D03F]"
              >
                {s.icon}
                <span>{s.label.toUpperCase()}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ─── Divider ─── */}
        <div className="w-full flex justify-center px-4" style={{ marginBottom: '50px' }}>
          <div className="w-full max-w-5xl velvet-divider" />
        </div>

        {/* ─── Join Us Form ─── */}
        <motion.div
          className="w-full flex flex-col items-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-3xl dark-card rounded-2xl p-6 sm:p-10 lg:p-16 shadow-2xl">
            <h2
              className="text-2xl sm:text-3xl font-bold golden-text-glow dramatic-heading text-center"
              style={{ letterSpacing: '2px', marginBottom: '15px', marginTop: '1rem' }}
            >
              MEMBERSHIP APPLICATION
            </h2>
            <p className="text-[#D4AF37] text-sm font-light italic text-center leading-loose" style={{ marginBottom: '20px' }}>
              Fill this out to apply for membership — a confirmation letter is generated automatically.
            </p>

            {submitted ? (
              <motion.div
                className="flex flex-col items-center text-center py-16 gap-5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="text-6xl">✅</span>
                <h3 className="text-2xl font-bold golden-text-glow dramatic-heading text-center">THANK YOU!</h3>
                <p className="text-[#D4AF37] font-light leading-loose text-center max-w-md">
                  Your application has been received and a confirmation letter has been generated.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0 flex flex-col" style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7" style={{ marginBottom: '15px' }}>
                  <div className="flex flex-col gap-2">
                    <label className="dark-label text-xs tracking-widest text-left">NAME</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="dark-input w-full rounded-lg text-sm" style={{ padding: '1rem 1.25rem' }} placeholder="Your full name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="dark-label text-xs tracking-widest text-left">EMAIL</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="dark-input w-full rounded-lg text-sm" style={{ padding: '1rem 1.25rem' }} placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7" style={{ marginBottom: '15px' }}>
                  <div className="flex flex-col gap-2">
                    <label className="dark-label text-xs tracking-widest text-left">AGE</label>
                    <input type="number" name="age" min={1} max={120} value={formData.age} onChange={handleChange} required
                      className="dark-input w-full rounded-lg text-sm" style={{ padding: '1rem 1.25rem' }} placeholder="Your age" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="dark-label text-xs tracking-widest text-left">PHONE NUMBER</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                      className="dark-input w-full rounded-lg text-sm" style={{ padding: '1rem 1.25rem' }} placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div className="flex flex-col gap-2" style={{ marginBottom: '15px' }}>
                  <label className="dark-label text-xs tracking-widest text-left">GENDER</label>
                  <div className="flex gap-3 flex-wrap">
                    {['Male', 'Female', 'Other'].map(option => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleGenderSelect(option)}
                        className={`flex-1 min-w-[100px] rounded-lg text-sm font-semibold tracking-wide transition-all ${
                          formData.gender === option
                            ? 'bg-[#D4AF37] text-[#6B0F1F]'
                            : 'dark-input text-[#D4AF37]'
                        }`}
                        style={{ padding: '0.85rem 1rem' }}
                      >
                        {option.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7" style={{ marginBottom: '15px' }}>
                  <div className="flex flex-col gap-2">
                    <label className="dark-label text-xs tracking-widest text-left">PROFESSION</label>
                    <input type="text" name="profession" value={formData.profession} onChange={handleChange} required
                      className="dark-input w-full rounded-lg text-sm" style={{ padding: '1rem 1.25rem' }} placeholder="Your occupation" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="dark-label text-xs tracking-widest text-left">EDUCATION</label>
                    <input type="text" name="education" value={formData.education} onChange={handleChange} required
                      className="dark-input w-full rounded-lg text-sm" style={{ padding: '1rem 1.25rem' }} placeholder="Highest qualification" />
                  </div>
                </div>

                <div className="flex flex-col gap-2" style={{ marginBottom: '15px' }}>
                  <label className="dark-label text-xs tracking-widest text-left">ADDRESS</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} required
                    className="dark-input w-full rounded-lg text-sm" style={{ padding: '1rem 1.25rem' }} placeholder="Your full address" />
                </div>
                <div className="flex flex-col gap-2" style={{ marginBottom: '28px' }}>
                  <label className="dark-label text-xs tracking-widest text-left">WHY WOULD YOU LIKE TO JOIN OUR GROUP?</label>
                  <textarea name="reason" value={formData.reason} onChange={handleChange} required rows={7}
                    className="dark-textarea w-full rounded-lg text-sm resize-none" style={{ padding: '1rem 1.25rem' }} placeholder="Tell us a bit about yourself..." />
                </div>

                {error && (
                  <p className="text-sm text-center" style={{ color: '#FF6B6B' }}>{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#D4AF37] text-[#6B0F1F] font-bold rounded-xl hover:bg-[#F4D03F] transition-all theatrical-button tracking-widest text-sm shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem', marginTop: '0.5rem', marginBottom: '1rem' }}
                >
                  {submitting ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
                </button>
              </form>
            )}
          </div> 
        </motion.div>

      </div>
    </main>
  )
}