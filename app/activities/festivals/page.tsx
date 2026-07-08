'use client'

import { motion } from 'framer-motion'
import { ImageManifestProvider, SlotImage } from '@/components/SlotImage'

/* ─── Section Heading ─── */
function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="w-full flex flex-col items-center text-center" style={{ marginBottom: '30px' }}>
      <span className="text-[#D4AF37]/70 text-xs font-semibold tracking-[0.3em]" style={{ marginBottom: '10px' }}>
        {eyebrow}
      </span>
      <h2
        className="text-2xl sm:text-3xl font-bold golden-text-glow dramatic-heading text-center"
        style={{ letterSpacing: '2px' }}
      >
        {title}
      </h2>
      <div className="w-16 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" style={{ marginTop: '14px' }} />
    </div>
  )
}

export default function Festivals() {
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
            <span className="text-[#D4AF37] text-sm font-light italic tracking-widest" style={{ marginBottom: '10px' }}>
              WHERE THE CURTAIN RISES
            </span>
            <h1
              className="text-4xl lg:text-6xl font-bold golden-text-glow dramatic-heading text-center"
              style={{ letterSpacing: '3px', marginBottom: '1px' }}
            >
              FESTIVALS
            </h1>
            <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" style={{ marginTop: '18px', marginBottom: '20px' }} />
            <p className="text-[#D4AF37] text-lg font-light italic leading-loose max-w-2xl text-center">
              Carrying theatre beyond the proscenium &mdash; into village courtyards, open fields, and intimate rooms across Bengal
            </p>
          </motion.div>

          {/* ─── Divider ─── */}
          <div className="w-full flex justify-center px-4" style={{ marginBottom: '50px' }}>
            <div className="w-full max-w-5xl velvet-divider" />
          </div>

          {/* ─── Muktamancha Theatre Festival ─── */}
          <motion.div
            className="w-full flex flex-col items-center px-4"
            style={{ marginBottom: '60px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-6xl">
              <SectionHeading eyebrow="SINCE 2008 · FIFTEEN YEARS RUNNING" title="MUKTAMANCHA THEATRE FESTIVAL" />
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
                <div className="lg:col-span-3 dark-card rounded-2xl" style={{ padding: '2.5rem' }}>
                  <span
                    className="inline-block text-[#D4AF37] text-xs font-semibold tracking-widest border border-[#D4AF37]/40 rounded-full"
                    style={{ padding: '0.5rem 1.1rem', marginBottom: '18px' }}
                  >
                    AN OPEN AIR THEATRE FESTIVAL
                  </span>
                  <p className="text-gray-300 text-sm text-left leading-[2]" style={{ marginBottom: '18px' }}>
                    Since 2008, Muktamancha &mdash; &quot;the open stage&quot; &mdash; has carried our theatre out
                    under the sky, free of walls, wings, and ticket counters. For fifteen years running, we have
                    pitched this open-air festival in the villages of{' '}
                    <span className="text-[#D4AF37]">Shobhanagar</span> (Mathurapur, South 24 Parganas),{' '}
                    <span className="text-[#D4AF37]">Gayeshpur</span>, <span className="text-[#D4AF37]">Garia</span>,
                    and <span className="text-[#D4AF37]">Baruipur</span>, turning open fields and village
                    courtyards into stages lit only by the moon and a few borrowed lamps.
                  </p>
                  <p className="text-gray-300 text-sm text-left leading-[2]">
                    There is no proscenium here, no distance between actor and audience &mdash; only the open
                    sky above and the gathered village below. Year after year, Muktamancha has become a fixture
                    of the local calendar, a night when the village square itself becomes a mirror to its own stories.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <SlotImage
                    slotKey="festival-1"
                    alt="Muktamancha Open Air Theatre Festival"
                    className="w-full aspect-[3/3] object-cover rounded-2xl border-2 border-[#D4AF37]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Antaranga Theatre Festival ─── */}
          <motion.div
            className="w-full flex flex-col items-center px-4"
            style={{ marginBottom: '60px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-6xl">
              <SectionHeading eyebrow="NEWLY LAUNCHED · JADAVPUR, KOLKATA" title="ANTARANGA THEATRE FESTIVAL" />
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
                <div className="lg:col-span-2 lg:order-1 order-2">
                  <SlotImage
                    slotKey="festival-5"
                    alt="Antaranga Intimate Theatre Festival"
                    className="w-full aspect-[3/3] object-cover rounded-2xl border-2 border-[#D4AF37]"
                  />
                </div>
                <div className="lg:col-span-3 lg:order-2 order-1 dark-card rounded-2xl" style={{ padding: '2.5rem' }}>
                  <span
                    className="inline-block text-[#D4AF37] text-xs font-semibold tracking-widest border border-[#D4AF37]/40 rounded-full"
                    style={{ padding: '0.5rem 1.1rem', marginBottom: '18px' }}
                  >
                    AN INTIMATE THEATRE FESTIVAL
                  </span>
                  <p className="text-gray-300 text-sm text-left leading-[2]" style={{ marginBottom: '18px' }}>
                    This year, we brought theatre back indoors &mdash; closer, quieter, and face to face &mdash;
                    with the launch of Antaranga, meaning &quot;the inner space,&quot; in the{' '}
                    <span className="text-[#D4AF37]">Jadavpur</span> area of Kolkata. Where Muktamancha spills
                    outward into open fields, Antaranga draws in: small rooms, close seating, and performances
                    built for nearness rather than scale.
                  </p>
                  <p className="text-gray-300 text-sm text-left leading-[2]">
                    Designed as an intimate theatre festival, Antaranga makes space for quieter, more personal
                    works &mdash; the plays that ask to be watched from an arm&rsquo;s length, where every
                    breath and pause in the performance reaches the audience directly.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Festival Gallery ─── */}
          <motion.div
            className="w-full flex flex-col items-center px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-6xl">
              <SectionHeading eyebrow="MOMENTS FROM THE STAGE" title="FESTIVAL GALLERY" />
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                <SlotImage
                  slotKey="festival-3"
                  alt="Festival Moment 1"
                  className="w-full sm:col-span-2 aspect-[4/3] object-cover rounded-2xl border-2 border-[#D4AF37]"
                />
                <SlotImage
                  slotKey="festival-4"
                  alt="Festival Moment 2"
                  className="w-full sm:col-span-2 aspect-[4/3] object-cover rounded-2xl border-2 border-[#D4AF37]"
                />
                <SlotImage
                  slotKey="festival-2"
                  alt="Festival Moment 3"
                  className="w-full sm:col-span-2 aspect-[16/10] object-cover rounded-2xl border-2 border-[#D4AF37]"
                />
                <SlotImage
                  slotKey="festival-6"
                  alt="Festival Moment 4"
                  className="w-full sm:col-span-2 aspect-[16/10] object-cover rounded-2xl border-2 border-[#D4AF37]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </ImageManifestProvider>
    </main>
  )
}