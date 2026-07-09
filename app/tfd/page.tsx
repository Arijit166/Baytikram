'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function TheatreForDevelopment() {
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
            THEATRE FOR DEVELOPMENT
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" style={{ marginBottom: '20px' }} />
          <p className="text-[#D4AF37] text-lg font-light italic leading-loose max-w-2xl text-center">
           Empowering Oppressed and Marginalized Communities through Theatre for Development (TFD)
          </p>
        </motion.div>

        {/* ─── Divider ─── */}
        <div className="w-full flex justify-center px-4" style={{ marginBottom: '30px' }}>
          <div className="w-full max-w-5xl velvet-divider" />
        </div>

        {/* ─── Two Column Options ─── */}
        <motion.div
          className="w-full flex flex-col items-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

            {/* Awareness Program */}
            <Link href="/tfd/awareness" className="w-full h-full">
              <motion.div
                className="h-full dark-card rounded-2xl flex flex-col items-center text-center cursor-pointer px-6 py-8 sm:px-12 sm:pt-12 sm:pb-8"
                style={{ justifyContent: 'space-between' }}
                whileHover={{ y: -8, boxShadow: '0 12px 35px rgba(212,175,55,0.25)' }}
                transition={{ duration: 0.25 }}
              >
                {/* Top content group */}
                <div className="flex flex-col items-center text-center gap-6" style={{ paddingTop: '8px' }}>
                  <img
                    src="https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/symbols/Awarness%20Programme%20icon.jpeg"
                    alt="Awareness Program"
                    className="object-contain"
                    style={{ width: '56px', height: '56px' }}
                  />
                  <h3 className="text-xl font-bold golden-text-glow dramatic-heading tracking-widest text-center">
                    AWARENESS PROGRAM
                  </h3>
                  <p className="text-gray-300 text-sm text-center leading-[2]">
                    To sensitize marginalized communities on critical issues regarding child rights, women's safety, public health, consumer rights, and civic duties.
                  </p>
                </div>
                {/* EXPLORE pinned to bottom */}
                <span className="text-[#D4AF37] text-xs font-semibold tracking-widest border-b border-[#D4AF37]/40 pb-1" style={{ marginTop: '2rem', paddingBottom: '0.25rem' }}>
                  EXPLORE →
                </span>
              </motion.div>
            </Link>

            {/* Workshop */}
            <Link href="/tfd/workshop" className="w-full h-full">
              <motion.div
                className="h-full dark-card rounded-2xl flex flex-col items-center text-center cursor-pointer px-6 py-8 sm:px-12 sm:pt-12 sm:pb-8"
                style={{ justifyContent: 'space-between' }}
                whileHover={{ y: -8, boxShadow: '0 12px 35px rgba(212,175,55,0.25)' }}
                transition={{ duration: 0.25 }}
              >
                {/* Top content group */}
                <div className="flex flex-col items-center text-center gap-6" style={{ paddingTop: '8px' }}>
                  <img
                    src="https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/symbols/Workshop%20Icon.jpeg"
                    alt="Workshop"
                    className="object-contain"
                    style={{ width: '56px', height: '56px' }}
                  />
                  <h3 className="text-xl font-bold golden-text-glow dramatic-heading tracking-widest text-center">
                    WORKSHOP
                  </h3>
                  <p className="text-gray-300 text-sm text-center leading-[2]">
                    A Powerful Catalyst for Social Change, Personality Development, and Community Intervention.
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