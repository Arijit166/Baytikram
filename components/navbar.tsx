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

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Productions', href: '/productions' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  // Same dark translucent style on ALL pages and ALL scroll states
  // • Not scrolled → light dark backdrop
  // • Scrolled     → deeper dark backdrop (no red, keeps theatrical feel)
  const navBg = isScrolled
    ? 'bg-black/85 backdrop-blur-lg shadow-xl border-b border-[#D4AF37]/15'
    : 'bg-black/40 backdrop-blur-md'

  const linkClass = 'text-[#D4AF37] hover:text-[#F4D03F]'

  const logoColor = '#D4AF37'   // always gold

  const adminClass = 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/20'

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className="text-xl sm:text-2xl font-bold transition-colors dramatic-heading"
              style={{ color: logoColor }}
            >
              Jadavpur Byatikrom
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
            <Link
              href="/admin"
              className={`text-sm font-semibold px-4 py-1.5 rounded border-2 transition-all duration-300 ${adminClass}`}
            >
              Admin
            </Link>
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
          <div className="md:hidden bg-[#8B1538] py-4 rounded-b-xl shadow-2xl border-t border-[#D4AF37]/20">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-6 py-3 font-medium transition-colors hover:bg-[#6B0F2A] ${
                  pathname === item.href
                    ? 'text-[#D4AF37] font-bold'
                    : 'text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="block px-6 py-3 text-[#D4AF37] font-semibold hover:bg-[#6B0F2A] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
