'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const galleryImages = [
  { id: 1, title: 'Performance 1', category: 'Performance', gradient: 'from-[#8B1538] to-[#D4AF37]' },
  { id: 2, title: 'Workshop', category: 'Workshop', gradient: 'from-[#D4AF37] to-[#8B1538]' },
  { id: 3, title: 'Performance 2', category: 'Performance', gradient: 'from-[#2C1810] to-[#8B1538]' },
  { id: 4, title: 'Team Photo', category: 'Team', gradient: 'from-[#1A1A1A] to-[#2C1810]' },
  { id: 5, title: 'Stage Setup', category: 'Production', gradient: 'from-[#8B1538] to-[#1A1A1A]' },
  { id: 6, title: 'Behind the Scenes', category: 'Behind Scenes', gradient: 'from-[#D4AF37] to-[#2C1810]' },
]

const categories = ['All', 'Performance', 'Workshop', 'Team', 'Production', 'Behind Scenes']

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const selectedImg = galleryImages.find(img => img.id === selectedImage)

  return (
    <main className="min-h-screen stage-background" style={{ paddingTop: '120px', paddingBottom: '120px' }}>

      {/* ─── Page Header ─── */}
      <motion.div
        className="w-full flex flex-col items-center text-center px-4 mb-16"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl lg:text-7xl font-bold golden-text-glow dramatic-heading text-center mb-6">
          GALLERY
        </h1>
        <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8" />
        <p className="text-[#D4AF37] text-lg font-light italic leading-loose max-w-xl text-center">
          Capturing the essence of our theatrical performances and behind-the-scenes moments
        </p>
      </motion.div>

      {/* ─── Category Filters ─── */}
      <motion.div
        className="w-full flex flex-wrap justify-center gap-4 px-4 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-7 py-2.5 border-2 font-semibold rounded-full transition-all duration-300 theatrical-button tracking-widest text-xs ${
              activeCategory === cat
                ? 'bg-[#D4AF37] text-[#6B0F1F] border-[#D4AF37] scale-105 shadow-lg'
                : 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/15'
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </motion.div>

      {/* ─── Image Grid ─── */}
      <motion.div
        className="w-full flex flex-col items-center px-4"
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {filtered.map((image, index) => (
              <motion.div
                key={image.id}
                className="w-full relative cursor-pointer overflow-hidden stage-frame group rounded-2xl shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedImage(image.id)}
              >
                <div className={`bg-gradient-to-br ${image.gradient} h-64 w-full transition-transform duration-500 group-hover:scale-110`} />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/65 transition-colors duration-300 flex items-end">
                  <div className="w-full p-6 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col items-center">
                    <h3 className="text-[#D4AF37] font-bold text-lg dramatic-heading tracking-wider text-center">
                      {image.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1.5 uppercase tracking-[0.2em] text-center">
                      {image.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ─── Lightbox ─── */}
      {selectedImage && selectedImg && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative stage-frame bg-[#12082A] max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.93, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-[#D4AF37] rounded-full p-2 transition-all"
            >
              <X size={22} />
            </button>
            <div className="p-6 sm:p-8 space-y-5">
              <div className={`bg-gradient-to-br ${selectedImg.gradient} h-72 w-full rounded-xl`} />
              <div className="flex flex-col items-center text-center space-y-2">
                <h2 className="text-3xl font-bold golden-text-glow dramatic-heading text-center">
                  {selectedImg.title}
                </h2>
                <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-semibold text-center">
                  {selectedImg.category}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

    </main>
  )
}
