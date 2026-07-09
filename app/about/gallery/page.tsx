'use client'

import { motion } from 'framer-motion'
import { ImageManifestProvider, SlotImage } from '@/components/SlotImage'
import { EditableCaption } from '@/components/EditableCaption'

const galleryImages = [
  {
    id: 1,
    slotKey: 'gallery-1',
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/gallery/Gallery%201.jpeg',
    caption:
      'Receiving a memento from historian Sudhir Chakraborty at the theatre festival organized by Krishnanagar Sinchan',
  },
  {
    id: 2,
    slotKey: 'gallery-2',
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/gallery/Gallery%202.jpeg',
    caption: 'Playwright Sanjay Chattopadhyay at the Baruipur Angan Theatre Festival',
  },
  {
    id: 3,
    slotKey: 'gallery-3',
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/gallery/Gallery%203.jpeg',
    caption: 'Poet and writer Amitabha Gupta came to watch plays at our theatre festival',
  },
  {
    id: 4,
    slotKey: 'gallery-4',
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/gallery/Gallery%204.jpeg',
    caption: 'Debesh Sarkar and Deba Roy in a moment from the play Kalobag',
  },
  {
    id: 5,
    slotKey: 'gallery-5',
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/gallery/Gallery5.jpeg',
    caption: 'Child artist Titir Roy in the opening scene of the play Char Akshar',
  },
  {
    id: 6,
    slotKey: 'gallery-6',
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/gallery/Gallery%206.jpeg',
    caption: 'Honouring group members',
  },
] as const

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ── BACKGROUND IMAGE (fixed, viewport-relative) ── */}
      <div
        className="page-bg-image"
        style={{ backgroundImage: "url('https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/landing-page.jpeg')" }}
      />
      <div className="page-bg-overlay" />

      {/* ── PAGE CONTENT ── */}
      <ImageManifestProvider>
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
              GALLERY
            </h1>
            <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" style={{ marginBottom: '20px' }} />
            <p className="text-[#D4AF37] text-lg font-light italic leading-loose max-w-2xl text-center">
              Moments from the Stage, the Festivals, and the People Behind Them
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
                Over twenty-five years, Jadavpur Baytikram has shared the stage with fellow artists, historians,
                writers, and audiences across festivals and community gatherings. This gallery is a small window
                into those moments — glimpses of recognition, collaboration, and performance that have shaped our
                journey.
              </p>
            </div>
          </motion.div>

          {/* ─── Gallery Grid ─── */}
          <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
            {galleryImages.map((item, i) => (
              <motion.div
                key={item.id}
                className="dark-card rounded-2xl overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
              >
                <div
                  className="w-full"
                  style={{
                    position: 'relative',
                    aspectRatio: '16 / 10',
                    borderBottom: '1.5px solid rgba(212,175,55,0.35)',
                  }}
                >
                 <SlotImage
                    slotKey={item.slotKey}
                    alt={item.caption}
                    className="object-cover"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                  />
                </div>
                <EditableCaption slotKey={item.slotKey} defaultCaption={item.caption} />
              </motion.div>
            ))}
          </div>

        </div>
      </ImageManifestProvider>
    </main>
  )
}