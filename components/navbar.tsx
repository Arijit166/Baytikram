'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const [isAdmin, setIsAdmin] = useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/admin/session')
      .then((res) => setIsAdmin(res.ok))
      .catch(() => setIsAdmin(false))
  }, [pathname])

  async function handleLogout() {
    setShowLogoutModal(false)
    await fetch('/api/admin/logout', { method: 'POST' })
    setIsAdmin(false)
    router.push('/')
    router.refresh()
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Force scroll to top on route change to fix Next.js scroll restoration
  // issues with framer-motion page transitions/animations
  useEffect(() => {
    window.scrollTo(0, 0)
    setIsOpen(false) // also close mobile menu just in case
  }, [pathname])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Activities', href: '/activities' },
    { label: 'TFD', href: '/tfd' },
    { label: 'Contact Us', href: '/contact' },
  ]

  // Always use solid dark red background for consistency across all pages
  const navBg = 'bg-gradient-to-r from-[#5C0B19] via-[#8B1538] to-[#5C0B19] shadow-[0_4px_32px_rgba(139,21,56,0.6)] border-b-2 border-[#D4AF37]'

  const linkClass = 'text-[#F0C040] hover:text-[#FFE07A] drop-shadow-[0_1px_6px_rgba(212,175,55,0.5)]'
  const logoColor = '#F0C040'
  const adminClass = 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/20'

  return (
    <>
      {/* ── Custom Logout Confirmation Modal ── */}
      {showLogoutModal && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: 9999, background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(4px)' }}
        >
          <motion.div
            className="dark-card rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center"
            style={{ maxWidth: '380px', width: '90%', boxShadow: '0 0 60px rgba(212,175,55,0.25)' }}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.22 }}
          >
            {/* Icon */}
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(212,175,55,0.12)',
                border: '2px solid #D4AF37',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                fontSize: '1.5rem',
              }}
            >
              🚪
            </div>

            <h3
              className="dramatic-heading golden-text-glow"
              style={{ fontSize: '1.05rem', letterSpacing: '2px', marginBottom: '0.6rem' }}
            >
              CONFIRM LOGOUT
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed" style={{ marginBottom: '1.5rem' }}>
              Are you sure you want to log out of the admin portal? You will need your passkey to log in again.
            </p>

            <div className="velvet-divider w-full" style={{ marginBottom: '1.5rem' }} />

            <div className="flex gap-3 w-full">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 font-semibold rounded-xl text-sm transition-all"
                style={{
                  padding: '0.75rem 1rem',
                  background: 'rgba(255,255,255,0.07)',
                  color: '#D4AF37',
                  border: '1.5px solid rgba(212,175,55,0.35)',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 font-semibold rounded-xl text-sm transition-all"
                style={{
                  padding: '0.75rem 1rem',
                  background: '#6B0F1F',
                  color: '#D4AF37',
                  border: '1.5px solid #D4AF37',
                }}
              >
                Logout
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <nav className={`sticky top-0 w-full z-50 transition-all duration-500 ${navBg}`}>
      <div className="navbar-inner">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img
              src="https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/logo_Fotor.jpeg"
              alt="Jadavpur Baytikram Logo"
              className="object-contain flex-shrink-0 w-14 h-auto sm:w-20 md:w-24 lg:w-28"
            />
            <span
              className="font-bold transition-colors dramatic-heading flex flex-col sm:flex-row sm:items-baseline sm:gap-1.5 leading-tight min-w-0"
              style={{ color: logoColor }}
            >
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap">Jadavpur</span>
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl whitespace-nowrap">Baytikram</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-all duration-300 ${linkClass} ${
                  pathname === item.href
                    ? 'opacity-100 underline underline-offset-4 decoration-[#D4AF37] decoration-2'
                    : 'opacity-75 hover:opacity-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {isAdmin && (
              <button
                onClick={() => setShowLogoutModal(true)}
                className="text-xs font-semibold rounded-md border transition-colors"
                style={{ padding: '0.5rem 1rem', borderColor: '#D4AF37', color: '#D4AF37' }}
              >
                LOGOUT
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#D4AF37] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg py-4 rounded-b-xl shadow-2xl border-t border-[#D4AF37]/20">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-6 py-3 font-medium transition-colors hover:bg-[#D4AF37]/10 ${
                  pathname === item.href
                    ? 'text-[#D4AF37] font-bold'
                    : 'text-[#D4AF37]/80'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {isAdmin && (
              <button
                onClick={() => { setShowLogoutModal(true); setIsOpen(false) }}
                className="block w-full text-left px-6 py-3 font-medium text-[#D4AF37]/80 hover:bg-[#D4AF37]/10 transition-colors"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
      </nav>
    </>
  )
}