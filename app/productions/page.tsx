'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const productions = [
  { id: 1, title: 'Shadows of Bengal', year: 2023, description: 'A profound exploration of identity and heritage through experimental storytelling', image: 'linear-gradient(135deg, #8B1538 0%, #D4AF37 100%)' },
  { id: 2, title: 'Urban Chronicles', year: 2024, description: 'Contemporary tales of city life blending tradition with modernity', image: 'linear-gradient(135deg, #6B0F1F 0%, #C0A060 100%)' },
  { id: 3, title: 'Heritage Voices', year: 2024, description: 'A celebration of cultural continuity and artistic expression across generations', image: 'linear-gradient(135deg, #4A0F1F 0%, #B8860B 100%)' },
  { id: 4, title: 'Silent Stories', year: 2023, description: 'Theatre without words — a journey through gesture and pure emotion', image: 'linear-gradient(135deg, #9B2C3E 0%, #E6B800 100%)' },
  { id: 5, title: 'Echoes of Time', year: 2022, description: 'Revisiting historical moments through a modern theatrical perspective', image: 'linear-gradient(135deg, #7A0E2E 0%, #DAA520 100%)' },
  { id: 6, title: 'Cultural Fusion', year: 2024, description: 'Blending multiple art forms into one immersive boundary-pushing experience', image: 'linear-gradient(135deg, #5C0A1F 0%, #FFD700 100%)' },
]

export default function ProductionsPage() {
  return (
    <main className="min-h-screen stage-background" style={{ paddingTop: '120px', paddingBottom: '120px' }}>

      {/* ─── Page Header ─── */}
      <motion.div
        className="w-full flex flex-col items-center text-center px-4 mb-24"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold golden-text-glow dramatic-heading text-center mb-6">
          Our Productions
        </h1>
        <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8" />
        <p className="text-[#D4AF37] text-lg sm:text-xl font-light leading-loose max-w-2xl text-center">
          Experimental theatre works that push creative boundaries and celebrate the richness of artistic expression
        </p>
      </motion.div>

      {/* ─── Productions Grid ─── */}
      <motion.div
        className="w-full flex flex-col items-center px-4 mb-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {productions.map((prod, idx) => (
              <motion.div
                key={prod.id}
                className="w-full group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                whileHover={{ y: -12 }}
              >
                <div className="stage-frame overflow-hidden rounded-2xl relative shadow-xl flex flex-col" style={{ height: '420px' }}>
                  {/* Poster */}
                  <div
                    className="flex-1 transition-transform duration-500 group-hover:scale-105"
                    style={{ background: prod.image }}
                  />
                  {/* Info */}
                  <div className="bg-[#12082A] px-7 py-6 flex flex-col items-center text-center gap-2">
                    <h3 className="text-xl font-bold golden-text-glow dramatic-heading text-center group-hover:text-[#F4D03F] transition-colors">
                      {prod.title}
                    </h3>
                    <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] text-center">
                      {prod.year}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed text-center line-clamp-2 mt-1">
                      {prod.description}
                    </p>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                    <button className="px-8 py-3 bg-[#D4AF37] text-[#6B0F1F] font-bold rounded-lg hover:bg-[#F4D03F] transition-all tracking-widest text-sm shadow-lg theatrical-button">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ─── Divider ─── */}
      <div className="w-full flex justify-center px-4 mb-20">
        <div className="w-full max-w-5xl velvet-divider" />
      </div>

      {/* ─── CTA ─── */}
      <motion.div
        className="w-full flex flex-col items-center text-center px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[#D4AF37] text-xl font-light leading-loose text-center mb-10">
          Want to be part of our artistic journey?
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/contact">
            <button className="px-10 py-4 bg-[#D4AF37] text-[#6B0F1F] font-bold rounded-lg hover:bg-[#F4D03F] transition-all theatrical-button tracking-widest text-sm shadow-lg">
              GET INVOLVED
            </button>
          </Link>
          <Link href="/gallery">
            <button className="px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-lg hover:bg-[#D4AF37]/10 transition-all tracking-widest text-sm">
              VIEW GALLERY
            </button>
          </Link>
        </div>
      </motion.div>

    </main>
  )
}
