'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const paperReviews = [
  {
    id: 1,
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/paper-review/paper%20review%20inoguration%201.jpeg',
    caption: 'Paper review inauguration',
  },
  {
    id: 2,
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/paper-review/6%20paper%20review%20kalobag%2016.jpeg',
    caption: 'Paper review Kalobag',
  },
  {
    id: 3,
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/paper-review/5%20paper%20review%20favourite%20bou%207.jpeg',
    caption: 'Paper review Favourite Bou',
  },
  {
    id: 4,
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/paper-review/2%20paper%20review%20sharashi%203_Fotor.jpeg',
    caption: 'Paper review Sanrashi',
  },
  {
    id: 5,
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/paper-review/7%20paper%20review%20char%20akhswar%2014.jpeg',
    caption: 'Paper review Char Akshwar',
  },
  {
    id: 6,
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/paper-review/4%20paper%20review%20favourite%20bou%208.jpeg',
    caption: 'Paper review Favourite Bou',
  },
  {
    id: 7,
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/paper-review/paper%20review%20faregiaste%2015_Fotor.jpeg',
    caption: 'Paper review Pharrheziasth',
  },
  {
    id: 8,
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/paper-review/8%20paper%20review%20char%20akhsawr%2013.jpeg',
    caption: 'Paper review Char Akshwar',
  },
]

export default function PaperReviewPage() {
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold golden-text-glow dramatic-heading text-center"
            style={{ letterSpacing: '3px', marginBottom: '1px' }}
          >
            PAPER REVIEWS
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" style={{ marginBottom: '20px' }} />
          <p className="text-[#D4AF37] text-lg font-light italic leading-loose max-w-2xl text-center">
            Press Coverage Documenting Our Journey on Stage
          </p>
        </motion.div>

        {/* ─── Divider ─── */}
        <div className="w-full flex justify-center px-4" style={{ marginBottom: '30px' }}>
          <div className="w-full max-w-5xl velvet-divider" />
        </div>

        {/* ─── Intro Text ─── */}
        <motion.div
          className="w-full max-w-5xl px-4"
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="dark-card rounded-2xl" style={{ padding: '2.5rem' }}>
            <p className="text-gray-300 text-sm leading-[1.9]">
              Our productions have been reviewed and covered by local publications throughout the years, reflecting
              the reach and reception of Jadavpur Baytikram&rsquo;s work within the wider theatre community. This
              collection preserves that press coverage as a record of our ongoing journey.
            </p>
          </div>
        </motion.div>

        {/* ─── Paper Reviews Grid ─── */}
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
          {paperReviews.map((item, i) => (
            <motion.div
              key={item.id}
              className="dark-card rounded-2xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            >
              <div
                className="w-full flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[520px]"
                style={{
                  position: 'relative',
                  background: 'rgba(0,0,0,0.35)',
                  borderBottom: '1.5px solid rgba(212,175,55,0.35)',
                }}
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ padding: '0.75rem' }}
                />
              </div>
              <p className="text-gray-300 text-xs leading-[1.8] text-center" style={{ padding: '1rem' }}>
                {item.caption}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  )
}