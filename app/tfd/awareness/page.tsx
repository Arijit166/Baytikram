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

export default function AwarenessProgram() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ── BACKGROUND IMAGE (starts after navbar) ── */}
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
          <span className="text-[#D4AF37] text-sm font-light italic tracking-widest" style={{ marginBottom: '10px' }}>
            &quot;MUKUR&quot; &mdash; THE MIRROR
          </span>
          <h1
            className="text-4xl lg:text-6xl font-bold golden-text-glow dramatic-heading text-center"
            style={{ letterSpacing: '3px', marginBottom: '1px' }}
          >
            AWARENESS PROGRAM
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" style={{ marginTop: '18px', marginBottom: '20px' }} />
          <p className="text-[#D4AF37] text-lg font-light italic leading-loose max-w-2xl text-center">
            Empowering Oppressed and Marginalized Communities through Theatre for Development (TFD)
          </p>
        </motion.div>

        {/* ─── Divider ─── */}
        <div className="w-full flex justify-center px-4" style={{ marginBottom: '50px' }}>
          <div className="w-full max-w-5xl velvet-divider" />
        </div>

        {/* ─── Background & Justification ─── */}
        <motion.div
          className="w-full flex flex-col items-center px-4"
          style={{ marginBottom: '60px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-6xl">
            <SectionHeading eyebrow="SINCE 2007" title="BACKGROUND & JUSTIFICATION" />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3 dark-card rounded-2xl" style={{ padding: '2.5rem' }}>
                <p className="text-gray-300 text-sm text-left leading-[2]" style={{ marginBottom: '18px' }}>
                  Since 2007, our theatre group, under the guidance and mentorship of director and
                  playwright <span className="text-[#D4AF37] font-semibold">Deba Roy</span>, has been
                  utilizing theatre as a potent tool for social transformation. Theatre is not mere
                  entertainment; it is a mirror to society. For nearly two decades, we have been stepping
                  out of conventional proscenium stages and going directly to the doorsteps of the
                  oppressed, neglected, and marginalized sections of society to educate and sensitize
                  them through live performances.
                </p>
                <p className="text-gray-300 text-sm text-left leading-[2]">
                  Through our extensive field experience, we have observed that grassroots communities are
                  deeply receptive to the messages conveyed through street plays. They engage seriously
                  with the narratives, seeking knowledge to change their realities. This project aims to
                  use theatre to foster resilience, build a fighting spirit against social injustice, and
                  provide the oppressed with relief from their systemic troubles.
                </p>
              </div>
              <div className="lg:col-span-2">
                <img
                  src="https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/awareness/field-perform.jpeg"
                  alt="Field Performance"
                  className="w-full aspect-[3/4] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Project Objectives ─── */}
        <motion.div
          className="w-full flex flex-col items-center px-4"
          style={{ marginBottom: '60px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-6xl">
            <SectionHeading eyebrow="WHAT WE STAND FOR" title="PROJECT OBJECTIVES" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ marginBottom: '30px' }}>
              {[
                {
                  icon: '📢',
                  title: 'AWARENESS & EDUCATION',
                  text: "To sensitize marginalized communities on critical issues regarding child rights, women's safety, public health, consumer rights, and civic duties.",
                },
                {
                  icon: '🤝',
                  title: 'RELIEF FOR THE OPPRESSED',
                  text: 'To give voice to the voiceless, bringing their everyday struggles and oppressions to light, and collectively exploring solutions through interactive theatre.',
                },
                {
                  icon: '🔥',
                  title: 'ACTIVE CITIZENRY',
                  text: 'To transform passive spectators into active agents of social change within their own communities.',
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
              src="https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/awareness/community%20engagement.jpeg"
              alt="Community Engagement"
              className="w-full aspect-[16/6] object-cover rounded-2xl"
            />
          </div>
        </motion.div>

        {/* ─── Core Focus Themes ─── */}
        <motion.div
          className="w-full flex flex-col items-center px-4"
          style={{ marginBottom: '60px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-6xl">
            <SectionHeading eyebrow="DEEP-ROOTED ISSUES" title="CORE FOCUS THEMES" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginBottom: '30px' }}>
              {[
                {
                  title: "CHILD RIGHTS",
                  text: 'Child health, eradication of child labor, reducing school drop-outs, monitoring mid-day meal implementation, preventing child marriage, ensuring child education, and stopping child trafficking.',
                },
                {
                  title: 'WOMEN SAFETY & EMPOWERMENT',
                  text: 'Eradicating domestic violence, preventing women trafficking, ensuring maternal healthcare benefits, and promoting Self-Help Groups (SHGs).',
                },
                {
                  title: 'PUBLIC HEALTH & HYGIENE',
                  text: 'Polio eradication awareness, health and hygiene practices, substance abuse/addiction awareness, traffic rule compliance, and fostering gender equality.',
                },
                {
                  title: 'CONSUMER & ENVIRONMENT',
                  text: 'Consumer rights protection awareness, and educating consumers on their duties regarding fuel and energy conservation.',
                },
              ].map((item, i) => (
                <div key={i} className="dark-card rounded-2xl" style={{ padding: '2rem 2.25rem' }}>
                  <h3 className="text-sm font-bold golden-text-glow dramatic-heading tracking-widest text-left" style={{ marginBottom: '14px' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm text-left leading-[2]">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <img
                src="https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/awareness/child-rights.jpeg"
                alt="Child Rights Skit"
                className="w-full aspect-[4/3] object-cover rounded-2xl"
              />
              <img
                src="https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/awareness/village-play.jpeg"
                alt="Street Play"
                className="w-full aspect-[4/3] object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.div>

        {/* ─── Project Methodology ─── */}
        <motion.div
          className="w-full flex flex-col items-center px-4"
          style={{ marginBottom: '60px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-6xl">
            <SectionHeading eyebrow="HOW WE WORK" title="PROJECT METHODOLOGY" />

            {/* Phase flow strip */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap" style={{ marginBottom: '30px' }}>
              {['PHASE 1 · SCRIPTING & REHEARSALS', 'PHASE 2 · COMMUNITY INTERVENTION', 'PHASE 3 · STREET PLAY PERFORMANCE'].map((step, i, arr) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-[#D4AF37] text-xs font-semibold tracking-widest border border-[#D4AF37]/40 rounded-full" style={{ padding: '0.6rem 1.25rem' }}>
                    {step}
                  </span>
                  {i < arr.length - 1 && <span className="text-[#D4AF37]/60 text-lg">➔</span>}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ marginBottom: '30px' }}>
              <div className="dark-card rounded-2xl" style={{ padding: '2rem 2.25rem' }}>
                <h3 className="text-sm font-bold golden-text-glow dramatic-heading tracking-widest text-left" style={{ marginBottom: '14px' }}>
                  RESEARCH, SCRIPTING & REHEARSALS
                </h3>
                <p className="text-gray-300 text-sm text-left leading-[2]">
                  Under the artistic direction of playwright Deba Roy, our team conducts preliminary
                  research on the targeted social issue. Scripts are written in simple, colloquial language
                  to ensure instant connection, followed by rigorous rehearsals.
                </p>
              </div>
              <div className="dark-card rounded-2xl" style={{ padding: '2rem 2.25rem' }}>
                <h3 className="text-sm font-bold golden-text-glow dramatic-heading tracking-widest text-left" style={{ marginBottom: '14px' }}>
                  COMMUNITY INTERVENTION
                </h3>
                <p className="text-gray-300 text-sm text-left leading-[2]">
                  Before staging the play, our team spends time within the targeted communities, interacting
                  with locals to understand their grievances and forms of oppression &mdash; building trust so the
                  play feels like a true reflection of their lives.
                </p>
              </div>
              <div className="dark-card rounded-2xl" style={{ padding: '2rem 2.25rem' }}>
                <h3 className="text-sm font-bold golden-text-glow dramatic-heading tracking-widest text-left" style={{ marginBottom: '14px' }}>
                  STREET PLAY PERFORMANCE
                </h3>
                <p className="text-gray-300 text-sm text-left leading-[2]">
                  Tailored open-air performances for <span className="text-[#D4AF37]">Slum Communities</span>,{' '}
                  <span className="text-[#D4AF37]">Rural Villages</span>, and{' '}
                  <span className="text-[#D4AF37]">Urban Spaces</span> &mdash; each addressing the specific issues
                  faced by that demographic.
                </p>
              </div>
            </div>
            <img
              src="https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/awareness/rehearsal.jpeg"
              alt="Rehearsal Session"
              className="w-full aspect-[16/8] object-cover rounded-2xl"
            />
          </div>
        </motion.div>

        {/* ─── Expected Outcomes ─── */}
        <motion.div
          className="w-full flex flex-col items-center px-4"
          style={{ marginBottom: '60px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-6xl">
            <SectionHeading eyebrow="THE IMPACT WE SEEK" title="EXPECTED OUTCOMES" />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-2">
                <img
                  src="https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/awareness/slum%20intervention.jpeg"
                  alt="Slum Intervention"
                  className="w-full aspect-[3/3] object-cover rounded-2xl"
                />
              </div>
              <div className="lg:col-span-3 dark-card rounded-2xl" style={{ padding: '2.5rem' }}>
                <ul className="flex flex-col gap-5">
                  {[
                    'Significant reduction in school drop-out rates and child marriage incidents in target areas.',
                    'Increased reporting and community-level resistance against domestic violence and human trafficking.',
                    'Enhanced economic and social awareness among women through active participation in Self-Help Groups.',
                    'Better civic responsibility regarding public health, hygiene, and traffic regulations in urban and semi-urban spaces.',
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4 text-left">
                      <span className="text-[#D4AF37] text-sm" style={{ marginTop: '2px' }}>✦</span>
                      <span className="text-gray-300 text-sm leading-[2]">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Tentative 1-Year Timeline ─── */}
        <motion.div
          className="w-full flex flex-col items-center px-4"
          style={{ marginBottom: '60px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-6xl">
            <SectionHeading eyebrow="12-MONTH ROADMAP" title="TENTATIVE 1-YEAR PROJECT TIMELINE" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginBottom: '30px' }}>
              {[
                {
                  q: 'QUARTER 1',
                  months: 'MONTHS 1&ndash;3',
                  title: 'Research & Phase 1 Launch',
                  points: [
                    "Baseline surveys and community mapping under Deba Roy's direction.",
                    "Writing and polishing of scripts on Child Rights, Women's Safety, and Public Health.",
                    'Intensive script reading, physical training, and rehearsal setups for the team.',
                  ],
                },
                {
                  q: 'QUARTER 2',
                  months: 'MONTHS 4&ndash;6',
                  title: 'Community Intervention & Initial Slum Plays',
                  points: [
                    'Deploying Phase 2 (Community Intervention) in targeted Slum Areas.',
                    'Building trust, holding group discussions, and identifying local oppressed voices.',
                    'Staging the first wave of 15&ndash;20 street plays on domestic violence, child labour, and drop-outs.',
                  ],
                },
                {
                  q: 'QUARTER 3',
                  months: 'MONTHS 7&ndash;9',
                  title: 'Rural Village Outreach',
                  points: [
                    'Shifting focus to Rural Villages for deeper grassroots intervention.',
                    'Adapting performances to highlight child marriage, maternal healthcare, and SHGs.',
                    'Executing 20&ndash;25 rural street plays alongside interactive feedback sessions.',
                  ],
                },
                {
                  q: 'QUARTER 4',
                  months: 'MONTHS 10&ndash;12',
                  title: 'Urban Interventions & Evaluation',
                  points: [
                    'Launching street plays across high-footfall Urban Spaces (crossings, parks, stations).',
                    'Focus on civic duties, traffic laws, and fuel conservation.',
                    'End-of-project impact evaluation and compiling the final project report.',
                  ],
                },
              ].map((item, i) => (
                <div key={i} className="dark-card rounded-2xl" style={{ padding: '2.25rem' }}>
                  <div className="flex items-baseline justify-between flex-wrap gap-2" style={{ marginBottom: '10px' }}>
                    <h3 className="text-base font-bold golden-text-glow dramatic-heading tracking-widest text-left">
                      {item.q}
                    </h3>
                    <span className="text-[#D4AF37]/70 text-xs font-semibold tracking-widest" dangerouslySetInnerHTML={{ __html: item.months }} />
                  </div>
                  <p className="text-[#D4AF37] text-sm font-semibold text-left italic" style={{ marginBottom: '14px' }}>
                    {item.title}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {item.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-3 text-left">
                        <span className="text-[#D4AF37] text-xs" style={{ marginTop: '4px' }}>●</span>
                        <span className="text-gray-300 text-sm leading-[1.9]" dangerouslySetInnerHTML={{ __html: p }} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}