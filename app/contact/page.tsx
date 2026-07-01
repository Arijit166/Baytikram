'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen stage-background" style={{ paddingTop: '120px', paddingBottom: '120px' }}>

      {/* ─── Page Header ─── */}
      <motion.div
        className="w-full flex flex-col items-center text-center px-4 mb-24"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl lg:text-6xl font-bold golden-text-glow dramatic-heading text-center mb-6">
          GET IN TOUCH
        </h1>
        <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8" />
        <p className="text-[#D4AF37] text-lg font-light italic leading-loose max-w-xl text-center">
          Have a question or want to collaborate? We&apos;d love to hear from you.
        </p>
      </motion.div>

      {/* ─── Info Cards ─── */}
      <motion.div
        className="w-full flex flex-col items-center px-4 mb-20"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {[
              {
                icon: '📍', title: 'ADDRESS',
                content: (
                  <p className="text-gray-300 text-sm text-center leading-[1.9]">
                    Jadavpur, Kolkata<br />West Bengal, India
                  </p>
                ),
              },
              {
                icon: '✉️', title: 'EMAIL',
                content: (
                  <a
                    href="mailto:info@jadavpurbyatikrom.com"
                    className="text-[#D4AF37] hover:text-[#F4D03F] font-semibold text-sm text-center break-all leading-loose transition-colors"
                  >
                    info@jadavpurbyatikrom.com
                  </a>
                ),
              },
              {
                icon: '📞', title: 'PHONE',
                content: (
                  <a
                    href="tel:+919876543210"
                    className="text-[#D4AF37] hover:text-[#F4D03F] font-semibold text-sm text-center leading-loose transition-colors"
                  >
                    +91 98765 43210
                  </a>
                ),
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="w-full dark-card rounded-2xl p-10 flex flex-col items-center text-center gap-5"
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

      {/* ─── Social Bar ─── */}
      <motion.div
        className="w-full flex flex-col items-center text-center px-4 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-sm font-bold golden-text-glow dramatic-heading tracking-widest text-center mb-6">
          FOLLOW US
        </h3>
        <div className="flex justify-center gap-10 flex-wrap">
          {['Facebook', 'Instagram', 'YouTube'].map(s => (
            <a
              key={s}
              href="#"
              className="text-[#D4AF37] hover:text-[#F4D03F] text-sm font-semibold tracking-widest transition-all hover:scale-105 pb-1 border-b border-[#D4AF37]/40 hover:border-[#F4D03F]"
            >
              {s.toUpperCase()}
            </a>
          ))}
        </div>
      </motion.div>

      {/* ─── Divider ─── */}
      <div className="w-full flex justify-center px-4 mb-20">
        <div className="w-full max-w-5xl velvet-divider" />
      </div>

      {/* ─── Contact Form ─── */}
      <motion.div
        className="w-full flex flex-col items-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-3xl dark-card rounded-2xl p-10 sm:p-14 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold golden-text-glow dramatic-heading text-center mb-10">
            SEND US A MESSAGE
          </h2>

          {submitted ? (
            <motion.div
              className="flex flex-col items-center text-center py-16 gap-5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <span className="text-6xl">✅</span>
              <h3 className="text-2xl font-bold golden-text-glow dramatic-heading text-center">THANK YOU!</h3>
              <p className="text-[#D4AF37] font-light leading-loose text-center">
                Your message has been sent. We&apos;ll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="dark-label text-xs tracking-widest text-left">NAME</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="dark-input w-full px-5 py-3.5 rounded-lg text-sm" placeholder="Your name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="dark-label text-xs tracking-widest text-left">EMAIL</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="dark-input w-full px-5 py-3.5 rounded-lg text-sm" placeholder="your@email.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="dark-label text-xs tracking-widest text-left">SUBJECT</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required
                  className="dark-input w-full px-5 py-3.5 rounded-lg text-sm" placeholder="What's this about?" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="dark-label text-xs tracking-widest text-left">MESSAGE</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={7}
                  className="dark-textarea w-full px-5 py-3.5 rounded-lg text-sm resize-none" placeholder="Your message..." />
              </div>
              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-[#6B0F1F] font-bold py-4 rounded-lg hover:bg-[#F4D03F] transition-all theatrical-button tracking-widest text-sm shadow-lg"
              >
                SEND MESSAGE
              </button>
            </form>
          )}
        </div>
      </motion.div>

    </main>
  )
}
