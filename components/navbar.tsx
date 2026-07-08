'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

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
    <nav className={`sticky top-0 w-full z-50 transition-all duration-500 ${navBg}`}>
      <div className="navbar-inner">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className="text-xl sm:text-2xl font-bold transition-colors dramatic-heading"
              style={{ color: logoColor }}
            >
              Jadavpur Baytikram
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
          </div>
        )}
      </div>
    </nav>
  )
}