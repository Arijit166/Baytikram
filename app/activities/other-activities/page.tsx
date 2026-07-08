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

export default function OtherActivities() {
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
              BEYOND THE SCRIPT
            </span>
            <h1
              className="text-4xl lg:text-6xl font-bold golden-text-glow dramatic-heading text-center"
              style={{ letterSpacing: '3px', marginBottom: '1px' }}
            >
              OTHER ACTIVITIES
            </h1>
            <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" style={{ marginTop: '18px', marginBottom: '20px' }} />
            <p className="text-[#D4AF37] text-lg font-light italic leading-loose max-w-2xl text-center">
              Nurturing the allied arts that give theatre its body, its craft, and its stage
            </p>
          </motion.div>

          {/* ─── Divider ─── */}
          <div className="w-full flex justify-center px-4" style={{ marginBottom: '50px' }}>
            <div className="w-full max-w-5xl velvet-divider" />
          </div>

          {/* ─── Dance Training Unit ─── */}
          <motion.div
            className="w-full flex flex-col items-center px-4"
            style={{ marginBottom: '60px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-6xl">
              <SectionHeading eyebrow="GURU · SANJAY DAS" title="DANCE TRAINING UNIT" />
              <div className="dark-card rounded-2xl" style={{ padding: '2.5rem', marginBottom: '30px' }}>
                <p className="text-gray-300 text-sm text-left leading-[2]" style={{ marginBottom: '18px' }}>
                  Theatre is a composite art form, and dance is one of its essential limbs. Alongside our
                  theatre productions, we run a dedicated dance training unit and stage dance dramas of our
                  own, under the guidance of our dance guru, <span className="text-[#D4AF37] font-semibold">Sanjay Das</span>.
                </p>
                <p className="text-gray-300 text-sm text-left leading-[2]" style={{ marginBottom: '18px' }}>
                  Dance speaks in movement what words often cannot. Guided by a trained guru through each
                  gesture and step, a student learns not just technique but a way to quiet the mind &mdash;
                  dance is known to ease anxiety, depression, and trauma, and to help a person feel more at
                  home in their own body.
                </p>
                <p className="text-gray-300 text-sm text-left leading-[2]">
                  It is this belief that has led us to place special emphasis on dance training &mdash; as a
                  discipline in its own right, and as a form that deepens and enriches the art of theatre itself.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <SlotImage
                  slotKey="dance-1"
                  alt="Dance Training Session"
                  className="w-full aspect-[4/3] object-cover rounded-2xl border-2 border-[#D4AF37]"
                />
                <SlotImage
                  slotKey="dance-2"
                  alt="Dance Drama Performance"
                  className="w-full aspect-[4/3] object-cover rounded-2xl border-2 border-[#D4AF37]"
                />
              </div>
            </div>
          </motion.div>

          {/* ─── Stagecraft ─── */}
          <motion.div
            className="w-full flex flex-col items-center px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-6xl">
              <SectionHeading eyebrow="LED BY DIRECTOR DEBA ROY" title="STAGECRAFT" />
              <div className="dark-card rounded-2xl" style={{ padding: '2.5rem', marginBottom: '30px' }}>
                <p className="text-gray-300 text-sm text-left leading-[2]" style={{ marginBottom: '18px' }}>
                  We conduct year-round workshops to build skills in the art and craft of stage design, led
                  by our group&rsquo;s director, <span className="text-[#D4AF37] font-semibold">Deba Roy</span>.
                  The program runs through every season, with the aim of nurturing an artistic sensibility
                  among adolescents.
                </p>
                <p className="text-gray-300 text-sm text-left leading-[2]">
                  Those drawn to art receive specialised, hands-on training in the intricacies of stagecraft
                  &mdash; from set and prop design to the many quiet crafts that shape what an audience sees
                  once the curtain rises.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <SlotImage
                  slotKey="art-workshop-f3"
                  alt="Stagecraft Workshop"
                  className="w-full sm:col-span-2 aspect-[16/11] object-cover rounded-2xl self-center border-2 border-[#D4AF37]"
                />
                <div className="grid grid-cols-1 gap-8">
                  <SlotImage
                    slotKey="art-workshop-f2"
                    alt="Stage Design Workshop"
                    className="w-full aspect-[4/3] object-cover rounded-2xl border-2 border-[#D4AF37]"
                  />
                  <SlotImage
                    slotKey="art-workshop-f1"
                    alt="Set Craft Session"
                    className="w-full aspect-[4/3] object-cover rounded-2xl border-2 border-[#D4AF37]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ImageManifestProvider>
    </main>
  )
}