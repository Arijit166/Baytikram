'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Activities() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ── BACKGROUND IMAGE (fixed, viewport-relative) ── */}
      <div
        className="page-bg-image"
        style={{ backgroundImage: "url('https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/landing-page.jpeg')" }}
      />
      <div className="page-bg-overlay" />

      {/* ── PAGE CONTENT ── */}
      <div className="relative flex flex-col items-center" style={{ zIndex: 10, paddingTop: '40px', paddingBottom: '120px' }}>

        {/* ─── Page Header ─── */}
        <motion.div
          className="w-full flex flex-col items-center text-center px-4"
          style={{ marginBottom: '20px' }}
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-5xl lg:text-6xl font-bold golden-text-glow dramatic-heading text-center"
            style={{ letterSpacing: '3px', marginBottom: '1px' }}
          >
            ACTIVITIES
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" style={{ marginBottom: '20px' }} />
          <p className="text-[#D4AF37] text-lg font-light italic leading-loose max-w-2xl text-center">
           A Glimpse into Our Productions, Festivals, and Community Engagements
          </p>
        </motion.div>

        {/* ─── Divider ─── */}
        <div className="w-full flex justify-center px-4" style={{ marginBottom: '30px' }}>
          <div className="w-full max-w-5xl velvet-divider" />
        </div>

        {/* ─── Three Column Options ─── */}
        <motion.div
          className="w-full flex flex-col items-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">

            {/* Productions */}
            <Link href="/activities/productions" className="w-full h-full">
              <motion.div
                className="h-full dark-card rounded-2xl flex flex-col items-center text-center cursor-pointer"
                style={{ padding: '3rem 3rem 2rem 3rem', justifyContent: 'space-between' }}
                whileHover={{ y: -8, boxShadow: '0 12px 35px rgba(212,175,55,0.25)' }}
                transition={{ duration: 0.25 }}
              >
                {/* Top content group */}
                <div className="flex flex-col items-center text-center gap-6">
                  <span className="text-5xl">🎬</span>
                  <h3 className="text-xl font-bold golden-text-glow dramatic-heading tracking-widest text-center">
                    PRODUCTIONS
                  </h3>
                  <p className="text-gray-300 text-sm text-center leading-[2]">
                    Original stage productions bringing powerful stories of resilience, justice, and change to life.
                  </p>
                </div>
                {/* EXPLORE pinned to bottom */}
                <span className="text-[#D4AF37] text-xs font-semibold tracking-widest border-b border-[#D4AF37]/40 pb-1" style={{ marginTop: '2rem', paddingBottom: '0.25rem' }}>
                  EXPLORE →
                </span>
              </motion.div>
            </Link>

            {/* Festivals */}
            <Link href="/activities/festivals" className="w-full h-full">
              <motion.div
                className="h-full dark-card rounded-2xl flex flex-col items-center text-center cursor-pointer"
                style={{ padding: '3rem 3rem 2rem 3rem', justifyContent: 'space-between' }}
                whileHover={{ y: -8, boxShadow: '0 12px 35px rgba(212,175,55,0.25)' }}
                transition={{ duration: 0.25 }}
              >
                {/* Top content group */}
                <div className="flex flex-col items-center text-center gap-6">
                  <span className="text-5xl">🎪</span>
                  <h3 className="text-xl font-bold golden-text-glow dramatic-heading tracking-widest text-center">
                    FESTIVALS
                  </h3>
                  <p className="text-gray-300 text-sm text-center leading-[2]">
                    Celebrating culture and community through vibrant theatre festivals and collaborative gatherings.
                  </p>
                </div>
                {/* EXPLORE pinned to bottom */}
                <span className="text-[#D4AF37] text-xs font-semibold tracking-widest border-b border-[#D4AF37]/40 pb-1" style={{ marginTop: '2rem', paddingBottom: '0.25rem' }}>
                  EXPLORE →
                </span>
              </motion.div>
            </Link>

            {/* Other Activities */}
            <Link href="/activities/other-activities" className="w-full h-full">
              <motion.div
                className="h-full dark-card rounded-2xl flex flex-col items-center text-center cursor-pointer"
                style={{ padding: '3rem 3rem 2rem 3rem', justifyContent: 'space-between' }}
                whileHover={{ y: -8, boxShadow: '0 12px 35px rgba(212,175,55,0.25)' }}
                transition={{ duration: 0.25 }}
              >
                {/* Top content group */}
                <div className="flex flex-col items-center text-center gap-6">
                  <span className="text-5xl">🤝</span>
                  <h3 className="text-xl font-bold golden-text-glow dramatic-heading tracking-widest text-center">
                    OTHER ACTIVITIES
                  </h3>
                  <p className="text-gray-300 text-sm text-center leading-[2]">
                    Workshops, outreach initiatives, and community events extending our impact beyond the stage.
                  </p>
                </div>
                {/* EXPLORE pinned to bottom */}
                <span className="text-[#D4AF37] text-xs font-semibold tracking-widest border-b border-[#D4AF37]/40 pb-1" style={{ marginTop: '2rem', paddingBottom: '0.25rem' }}>
                  EXPLORE →
                </span>
              </motion.div>
            </Link>

          </div>
        </motion.div>

      </div>
    </main>
  )
}