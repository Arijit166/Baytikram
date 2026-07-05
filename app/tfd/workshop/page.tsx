'use client'

import { motion } from 'framer-motion'

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

      {/* ── SPOTLIGHT BEAMS (theatre stage effect) ── */}
      <div className="page-spotlights">
        <div className="page-spotlight-left" />
        <div className="page-spotlight-center" />
        <div className="page-spotlight-right" />
        <div className="page-spotlight-glow" />
      </div>

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
                <img
                  src="https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/workshop/workshop overview.jpeg"
                  alt="Workshop Overview"
                  className="w-full aspect-[3/2] object-cover rounded-2xl"
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
            <img
              src="https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/workshop/workshop-training.jpeg"
              alt="Workshop Training Session"
              className="w-full aspect-[16/6] object-cover rounded-2xl"
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
                <img
                  src="https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/workshop/street-play.jpeg"
                  alt="Nukkad Natak Street Theatre"
                  className="w-full aspect-[3/2.5] object-cover rounded-2xl"
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
                  style={{ letterSpacing: '1px', marginBottom: '18px' }}
                >
                  NON-RESIDENTIAL WORKSHOPS
                </h3>
                <p className="text-[#D4AF37] text-sm italic text-left" style={{ marginBottom: '18px' }}>
                  Primarily for City People
                </p>
                <div className="flex flex-col gap-4" style={{ marginBottom: '22px' }}>
                  <div>
                    <p className="text-[#D4AF37]/80 text-xs font-semibold tracking-widest text-left" style={{ marginBottom: '6px' }}>
                      TARGET AUDIENCE
                    </p>
                    <p className="text-gray-300 text-sm text-left leading-[1.9]">
                      Urban students, corporate professionals, and city dwellers with tight, clock-bound
                      routines.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#D4AF37]/80 text-xs font-semibold tracking-widest text-left" style={{ marginBottom: '6px' }}>
                      STRUCTURE
                    </p>
                    <p className="text-gray-300 text-sm text-left leading-[1.9]">
                      Conducted for a few hours daily, or exclusively on weekends over a stretched
                      duration, allowing participants to commute from home.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#D4AF37]/80 text-xs font-semibold tracking-widest text-left" style={{ marginBottom: '6px' }}>
                      IMPACT
                    </p>
                    <p className="text-gray-300 text-sm text-left leading-[1.9]">
                      Addresses urban alienation, mental stress, and fast-paced societal challenges without
                      disrupting the participants&apos; daily livelihood or education &mdash; teaching city folks
                      to utilize community spaces for artistic expression.
                    </p>
                  </div>
                </div>
                <img
                  src="https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/workshop/non-residential.jpeg"
                  alt="Non-Residential Workshop"
                  className="w-full aspect-[4/3] object-cover rounded-2xl"
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
                  style={{ letterSpacing: '1px', marginBottom: '18px' }}
                >
                  RESIDENTIAL WORKSHOPS
                </h3>
                <p className="text-[#D4AF37] text-sm italic text-left" style={{ marginBottom: '18px' }}>
                  Primarily for Village People &amp; Intensive Training
                </p>
                <div className="flex flex-col gap-4" style={{ marginBottom: '22px' }}>
                  <div>
                    <p className="text-[#D4AF37]/80 text-xs font-semibold tracking-widest text-left" style={{ marginBottom: '6px' }}>
                      TARGET AUDIENCE
                    </p>
                    <p className="text-gray-300 text-sm text-left leading-[1.9]">
                      Rural youth, folk artists, and core change-makers who require an immersive
                      environment.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#D4AF37]/80 text-xs font-semibold tracking-widest text-left" style={{ marginBottom: '6px' }}>
                      STRUCTURE
                    </p>
                    <p className="text-gray-300 text-sm text-left leading-[1.9]">
                      A fully immersive bootcamp format, typically lasting 5 to 15 days, where participants
                      live, eat, and breathe theatre together under one roof.
                    </p>
                  </div>
                  <div>
                    <p className="text-[#D4AF37]/80 text-xs font-semibold tracking-widest text-left" style={{ marginBottom: '6px' }}>
                      IMPACT
                    </p>
                    <p className="text-gray-300 text-sm text-left leading-[1.9]">
                      Continuous cohabitation fosters a deep sense of brotherhood, breaking down barriers
                      of caste or class &mdash; blending modern theatrical tools with traditional folk media for
                      a highly concentrated impact on village communities.
                    </p>
                  </div>
                </div>
                <img
                  src="https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/workshop/residential.jpeg"
                  alt="Residential Workshop"
                  className="w-full aspect-[4/3] object-cover rounded-2xl"
                  style={{ marginTop: 'auto' }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}