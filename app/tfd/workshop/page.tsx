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

export default function Workshop() {
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
              JADAVPUR BAYTIKRAM PRESENTS
            </span>
            <h1
              className="text-4xl lg:text-6xl font-bold golden-text-glow dramatic-heading text-center"
              style={{ letterSpacing: '3px', marginBottom: '1px' }}
            >
              THEATRE WORKSHOP
            </h1>
            <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" style={{ marginTop: '18px', marginBottom: '20px' }} />
            <p className="text-[#D4AF37] text-lg font-light italic leading-loose max-w-2xl text-center">
              A Powerful Catalyst for Social Change, Personality Development, and Community Intervention
            </p>
          </motion.div>

          {/* ─── Divider ─── */}
          <div className="w-full flex justify-center px-4" style={{ marginBottom: '50px' }}>
            <div className="w-full max-w-5xl velvet-divider" />
          </div>

          {/* ─── Overview ─── */}
          <motion.div
            className="w-full flex flex-col items-center px-4"
            style={{ marginBottom: '60px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-6xl">
              <SectionHeading eyebrow="MORE THAN A SCHOOL FOR ACTING" title="OVERVIEW" />
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
                <div className="lg:col-span-3 dark-card rounded-2xl" style={{ padding: '2.5rem' }}>
                  <p className="text-gray-300 text-sm text-left leading-[2]">
                    Under the guidance of noted theatre personality{' '}
                    <span className="text-[#D4AF37] font-semibold">Deba Roy</span>, this initiative by{' '}
                    <span className="text-[#D4AF37] font-semibold">Jadavpur Baytikram</span> transforms the
                    traditional concept of a theatre workshop. It is not merely a school for acting, but a
                    profound platform for the personality development, rehabilitation, and empowerment of
                    underprivileged students. This initiative stands as a prime example of{' '}
                    <span className="text-[#D4AF37]">Theatre for Development (TfD)</span> &mdash; where art
                    merges with activism to fight social evils.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <SlotImage
                    slotKey="workshop-overview"
                    alt="Workshop Overview"
                    className="w-full aspect-[3/2] object-cover rounded-2xl border-2 border-[#D4AF37]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Key Objectives & Utilities ─── */}
          <motion.div
            className="w-full flex flex-col items-center px-4"
            style={{ marginBottom: '60px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-6xl">
              <SectionHeading eyebrow="WHY WE TRAIN" title="KEY OBJECTIVES & UTILITIES" />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ marginBottom: '30px' }}>
                {[
                  {
                    icon: '🎙️',
                    title: 'GIVING VOICE TO THE MARGINALIZED',
                    text: 'The primary drive of this workshop is to empower backward and marginalized youth, instilling the confidence they need to articulately speak up about their struggles, rights, and issues before society.',
                  },
                  {
                    icon: '✨',
                    title: 'REVIVING CREATIVE ABILITY',
                    text: 'Through rigorous theatrical exercises, the workshop rejuvenates the latent creative potential of these students, deeply connecting them with the nuances of art and expression.',
                  },
                  {
                    icon: '⚔️',
                    title: 'AN ACTIVE WEAPON AGAINST SOCIAL ODDS',
                    text: 'This learning process goes beyond stagecraft, serving as a direct, active countermeasure against deep-rooted social injustices, superstitions, and un-social activities.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="dark-card rounded-2xl flex flex-col items-center text-center gap-5"
                    style={{ padding: '2.5rem 2rem' }}
                    whileHover={{ y: -8, boxShadow: '0 12px 35px rgba(212,175,55,0.25)' }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="text-4xl">{item.icon}</span>
                    <h3 className="text-base font-bold golden-text-glow dramatic-heading tracking-widest text-center">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm text-center leading-[2]">{item.text}</p>
                  </motion.div>
                ))}
              </div>
              <SlotImage
                slotKey="workshop-training"
                alt="Workshop Training Session"
                className="w-full aspect-[16/6] object-cover rounded-2xl border-2 border-[#D4AF37]"
              />
            </div>
          </motion.div>

          {/* ─── Nukkad Natak ─── */}
          <motion.div
            className="w-full flex flex-col items-center px-4"
            style={{ marginBottom: '60px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-6xl">
              <SectionHeading eyebrow="STREET THEATRE" title="COMMUNITY INTERVENTION THROUGH NUKKAD NATAK" />
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
                <div className="lg:col-span-2 order-2 lg:order-1">
                  <SlotImage
                    slotKey="street-play"
                    alt="Nukkad Natak Street Theatre"
                    className="w-full aspect-[3/2.5] object-cover rounded-2xl border-2 border-[#D4AF37]"
                  />
                </div>
                <div className="lg:col-span-3 dark-card rounded-2xl order-1 lg:order-2" style={{ padding: '2.5rem' }}>
                  <p className="text-gray-300 text-sm text-left leading-[2]" style={{ marginBottom: '18px' }}>
                    The core training provided by Deba Roy focuses heavily on{' '}
                    <span className="text-[#D4AF37] font-semibold">Nukkad Natak (Street Theatre)</span>.
                    Students are taught the mechanics of script-weaving, voice modulation, and minimalistic
                    production.
                  </p>
                  <p className="text-gray-300 text-sm text-left leading-[2]">
                    Once equipped, these educated young minds venture directly into rural heartlands and
                    urban slum pockets for community intervention. By staging powerful street plays right in
                    the middle of these neighbourhoods, they spark dialogue on critical issues, challenge
                    local taboos, and actively guide the community toward a progressive future.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ─── Dual Methodologies (Special Focus) ─── */}
          <motion.div
            className="w-full flex flex-col items-center px-4"
            style={{ marginBottom: '60px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-6xl">
              <SectionHeading eyebrow="TAILORED FOR CITY & VILLAGE LIFE" title="DUAL METHODOLOGIES" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Non-Residential */}
                <motion.div
                  className="dark-card rounded-2xl flex flex-col"
                  style={{ padding: '2.5rem' }}
                  whileHover={{ y: -8, boxShadow: '0 12px 35px rgba(212,175,55,0.25)' }}
                  transition={{ duration: 0.25 }}
                >
                  <h3
                    className="text-xl font-bold golden-text-glow dramatic-heading text-left"
                    style={{ letterSpacing: '1px', marginBottom: '24px' }}
                  >
                    NON-RESIDENTIAL WORKSHOPS
                  </h3>
                  <div className="flex flex-col gap-4" style={{ marginBottom: '22px' }}>
                    <div>
                      <p className="text-[#D4AF37]/80 text-xs font-semibold tracking-widest text-left" style={{ marginBottom: '6px' }}>
                        HOW IT WORKS
                      </p>
                      <p className="text-gray-300 text-sm text-left leading-[1.9]">
                        Participants do not stay overnight at the venue. They attend the workshop
                        during the day and return home or to their own accommodation each evening.
                      </p>
                    </div>
                    <div>
                      <p className="text-[#D4AF37]/80 text-xs font-semibold tracking-widest text-left" style={{ marginBottom: '6px' }}>
                        INCLUSIONS
                      </p>
                      <p className="text-gray-300 text-sm text-left leading-[1.9]">
                        Tea, snacks, or lunch may be provided during sessions, but accommodation
                        is not included.
                      </p>
                    </div>
                    <div>
                      <p className="text-[#D4AF37]/80 text-xs font-semibold tracking-widest text-left" style={{ marginBottom: '6px' }}>
                        EXAMPLE
                      </p>
                      <p className="text-gray-300 text-sm text-left leading-[1.9]">
                        A 3-day theatre workshop from 10:00 AM to 5:00 PM — every evening,
                        participants return home.
                      </p>
                    </div>
                  </div>
                  <SlotImage
                    slotKey="residential"
                    alt="Non-Residential Workshop"
                    className="w-full aspect-[4/3] object-cover rounded-2xl border-2 border-[#D4AF37]"
                    style={{ marginTop: 'auto' }}
                  />
                </motion.div>

                {/* Residential */}
                <motion.div
                  className="dark-card rounded-2xl flex flex-col"
                  style={{ padding: '2.5rem' }}
                  whileHover={{ y: -8, boxShadow: '0 12px 35px rgba(212,175,55,0.25)' }}
                  transition={{ duration: 0.25 }}
                >
                  <h3
                    className="text-xl font-bold golden-text-glow dramatic-heading text-left"
                    style={{ letterSpacing: '1px', marginBottom: '24px' }}
                  >
                    RESIDENTIAL WORKSHOPS
                  </h3>
                  <div className="flex flex-col gap-4" style={{ marginBottom: '22px' }}>
                    <div>
                      <p className="text-[#D4AF37]/80 text-xs font-semibold tracking-widest text-left" style={{ marginBottom: '6px' }}>
                        HOW IT WORKS
                      </p>
                      <p className="text-gray-300 text-sm text-left leading-[1.9]">
                        Participants stay at the workshop venue or nearby accommodation for the
                        entire duration. Activities may continue into the evenings, allowing for
                        deeper, more immersive learning.
                      </p>
                    </div>
                    <div>
                      <p className="text-[#D4AF37]/80 text-xs font-semibold tracking-widest text-left" style={{ marginBottom: '6px' }}>
                        INCLUSIONS
                      </p>
                      <p className="text-gray-300 text-sm text-left leading-[1.9]">
                        Accommodation and meals are usually included, with participants living
                        together throughout the programme.
                      </p>
                    </div>
                    <div>
                      <p className="text-[#D4AF37]/80 text-xs font-semibold tracking-widest text-left" style={{ marginBottom: '6px' }}>
                        EXAMPLE
                      </p>
                      <p className="text-gray-300 text-sm text-left leading-[1.9]">
                        A 7-day theatre camp where participants live together in a hostel or
                        dormitory &mdash; with morning warm-ups, daytime rehearsals, evening
                        performances, and group discussions.
                      </p>
                    </div>
                  </div>
                  <SlotImage
                    slotKey="non-residential"
                    alt="Residential Workshop"
                    className="w-full aspect-[4/3] object-cover rounded-2xl border-2 border-[#D4AF37]"
                    style={{ marginTop: 'auto' }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </ImageManifestProvider>
    </main>
  )
}