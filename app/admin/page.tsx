'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AdminDashboard from '@/components/admin-dashboard'

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [passkey, setPasskey] = useState('')
  const [error, setError] = useState('')

  const ADMIN_PASSKEY = process.env.NEXT_PUBLIC_ADMIN_PASSKEY || 'admin2024'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (passkey === ADMIN_PASSKEY) {
      setIsAuthenticated(true)
      setError('')
      setPasskey('')
      console.log('[v0] Admin login successful')
    } else {
      setError('Invalid passkey')
      setPasskey('')
      console.log('[v0] Admin login failed')
    }
  }

  if (isAuthenticated) {
    return <AdminDashboard onLogout={() => setIsAuthenticated(false)} />
  }

  return (
    <main className="pt-24 pb-12 min-h-screen flex items-center justify-center px-4" style={{
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1A0F2E 50%, #0A0A0A 100%)',
    }}>
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="dark-card rounded-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold golden-text-glow mb-2 dramatic-heading">
              ADMIN PORTAL
            </h1>
            <p className="text-[#D4AF37] font-light">Enter passkey to continue</p>
          </div>

          {/* Divider */}
          <div className="velvet-divider mb-8" />

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Passkey Input */}
            <div>
              <label className="dark-label block text-sm mb-2">
                Passkey
              </label>
              <input
                type="password"
                value={passkey}
                onChange={(e) => {
                  setPasskey(e.target.value)
                  setError('')
                }}
                className="dark-input w-full px-4 py-3 rounded"
                placeholder="Enter admin passkey"
              />
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                className="bg-red-900/20 border border-red-700 text-red-400 px-4 py-3 rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#D4AF37] text-[#6B0F1F] font-bold py-3 rounded hover:bg-[#F4D03F] transition-all theatrical-button"
            >
              LOGIN
            </button>
          </form>

          {/* Divider */}
          <div className="velvet-divider my-6" />

          {/* Info */}
          <div className="text-center">
            <p className="text-xs text-[#999999]">
              Admin access only. Unauthorized access prohibited.
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
