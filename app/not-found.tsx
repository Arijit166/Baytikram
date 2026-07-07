'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] overflow-hidden flex items-center justify-center">
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
      <motion.div
        className="relative flex flex-col items-center text-center px-4 -mt-16 md:-mt-24"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span
          className="text-[#D4AF37] text-sm font-light italic tracking-widest"
          style={{ marginBottom: '6px' }}
        >
          THE CURTAIN HAS NOT RISEN HERE
        </span>

        <h1
          className="text-7xl lg:text-9xl font-bold golden-text-glow dramatic-heading text-center"
          style={{ letterSpacing: '4px', marginBottom: '2px' }}
        >
          404
        </h1>

        <div
          className="w-28 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          style={{ marginTop: '6px', marginBottom: '14px' }}
        />

        <h2
          className="text-2xl sm:text-3xl font-bold golden-text-glow dramatic-heading text-center"
          style={{ letterSpacing: '2px', marginBottom: '10px' }}
        >
          SCENE NOT FOUND
        </h2>

        <p
          className="text-gray-300 text-sm sm:text-base leading-[2] max-w-md text-center"
          style={{ marginBottom: '24px' }}
        >
          The page you are looking for has either exited the stage or never made it into the
          script. Let&rsquo;s take you back to where the story begins.
        </p>

        <Link href="/">
          <motion.span
            className="inline-block text-[#D4AF37] text-xs font-semibold tracking-widest border border-[#D4AF37]/40 rounded-full cursor-pointer"
            style={{ padding: '0.9rem 2.2rem' }}
            whileHover={{
              y: -4,
              boxShadow: '0 12px 35px rgba(212,175,55,0.25)',
              backgroundColor: 'rgba(212,175,55,0.08)',
            }}
            transition={{ duration: 0.25 }}
          >
            ➔ RETURN TO HOME PAGE
          </motion.span>
        </Link>
      </motion.div>
    </main>
  )
}