'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [passkey, setPasskey] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passkey }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Invalid passkey')

      window.location.href = 'https://baytikram.vercel.app/activities'

      setIsAuthenticated(true)
      setPasskey('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
      setPasskey('')
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

      {/* ── SPOTLIGHT BEAMS (theatre stage effect) ── */}
      <div className="page-spotlights">
        <div className="page-spotlight-left" />
        <div className="page-spotlight-center" />
        <div className="page-spotlight-right" />
        <div className="page-spotlight-glow" />
      </div>

      {/* ── PAGE CONTENT ── */}
      <div
        className="relative flex items-center justify-center min-h-screen px-4"
        style={{ zIndex: 10, paddingTop: '40px', paddingBottom: '100px' }}
      >
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="dark-card rounded-2xl p-10 sm:p-16 shadow-2xl">
            <h1
              className="text-2xl sm:text-3xl font-bold golden-text-glow dramatic-heading text-center"
              style={{ letterSpacing: '2px', marginBottom: '15px', marginTop: '1rem' }}
            >
              ADMIN PORTAL
            </h1>
            <p
              className="text-[#D4AF37] text-sm font-light italic text-center leading-loose"
              style={{ marginBottom: '20px' }}
            >
              Enter your passkey to access the dashboard.
            </p>

            <form
              onSubmit={handleLogin}
              className="flex flex-col"
              style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem' }}
            >
              <div className="flex flex-col gap-2" style={{ marginBottom: '15px' }}>
                <label className="dark-label text-xs tracking-widest text-left">PASSKEY</label>
                <input
                  type="password"
                  value={passkey}
                  onChange={(e) => {
                    setPasskey(e.target.value)
                    setError('')
                  }}
                  required
                  className="dark-input w-full rounded-lg text-sm"
                  style={{ padding: '1rem 1.25rem' }}
                  placeholder="Enter admin passkey"
                />
              </div>

              {error && (
                <p className="text-sm text-center" style={{ color: '#FF6B6B', marginBottom: '15px' }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#D4AF37] text-[#6B0F1F] font-bold rounded-xl hover:bg-[#F4D03F] transition-all theatrical-button tracking-widest text-sm shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem', marginTop: '0.5rem', marginBottom: '1rem' }}
              >
                {submitting ? 'VERIFYING...' : 'LOGIN'}
              </button>
            </form>

            <div className="velvet-divider" style={{ marginTop: '10px', marginBottom: '20px' }} />

            <p className="text-xs text-center text-[#999999]" style={{ marginBottom: '10px' }}>
              Admin access only. Unauthorized access prohibited.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}