'use client'

import { motion } from 'framer-motion'

const teamMembers = [
  { name: 'Amit Roy', role: 'Founder & Director', bio: 'A visionary artist with 20 years of experience in experimental theatre.' },
  { name: 'Priya Sharma', role: 'Co-Director', bio: 'Expert in contemporary theatre techniques and community engagement.' },
  { name: 'Rajesh Mukherjee', role: 'Head of Production', bio: 'Master of technical theatre and stage design.' },
  { name: 'Sneha Das', role: 'Education Coordinator', bio: 'Dedicated to workshop development and youth training programs.' },
]

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '500+', label: 'Workshop Participants' },
  { value: '50+', label: 'Productions Staged' },
  { value: '10,000+', label: 'Audience Members' },
]

const values = [
  { emoji: '🎨', title: 'ARTISTIC EXCELLENCE', desc: 'We strive for the highest standards in theatrical innovation, creativity, and performance quality across all our productions.' },
  { emoji: '🤝', title: 'COMMUNITY FIRST', desc: 'Our work is deeply rooted in social change, inclusivity, and making art accessible to every member of society.' },
  { emoji: '📚', title: 'CULTURAL PRESERVATION', desc: 'We honour our rich Bengali heritage while pioneering new theatrical frontiers for contemporary audiences and artists.' },
]

export default function About() {
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
          ABOUT US
        </h1>
        <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8" />
        <p className="text-[#D4AF37] text-lg sm:text-xl font-light italic leading-loose max-w-2xl text-center">
          Pushing the boundaries of Bengali experimental theatre and driving meaningful social change through performance
        </p>
      </motion.div>

      {/* ─── Our Story ─── */}
      <motion.div
        className="w-full flex flex-col items-center px-4 mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-3xl flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold golden-text-glow dramatic-heading text-center mb-10">
            Our Story
          </h2>
          <div className="w-full space-y-7 text-gray-300 text-lg text-center leading-[1.9]">
            <p className="text-center">
              Jadavpur Byatikrom was founded with a vision to revolutionize theatre in Bengal through experimental and innovative approaches. For over a decade, we have been pushing the boundaries of traditional theatre, creating performances that challenge, inspire, and transform audiences.
            </p>
            <p className="text-center">
              Our commitment extends beyond the stage. We are deeply invested in community engagement, cultural preservation, and fostering the next generation of theatrical artists through workshops, residencies, and outreach programmes.
            </p>
            <p className="text-[#D4AF37] text-center leading-[1.9]">
              Every production we create is a testament to our belief that theatre can be a powerful medium for social change and cultural enrichment that touches every walk of life.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ─── Stats ─── */}
      <motion.div
        className="w-full flex flex-col items-center px-4 mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-5xl flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold golden-text-glow dramatic-heading text-center mb-14">
            Our Impact
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="w-full dark-card rounded-2xl p-10 flex flex-col items-center text-center"
                whileHover={{ y: -10, boxShadow: '0 16px 40px rgba(212,175,55,0.3)' }}
                transition={{ duration: 0.25 }}
              >
                <span className="text-5xl font-extrabold golden-text-glow text-center mb-3">{s.value}</span>
                <span className="text-[#D4AF37] text-sm uppercase tracking-widest font-light leading-relaxed text-center">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ─── Team ─── */}
      <motion.div
        className="w-full flex flex-col items-center px-4 mb-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-5xl flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold golden-text-glow dramatic-heading text-center mb-14">
            MEET OUR TEAM
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="w-full dark-card rounded-2xl p-8 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -10, boxShadow: '0 16px 40px rgba(212,175,55,0.3)' }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#6B0F1F] flex items-center justify-center text-3xl mb-6 shadow-lg">
                  🎭
                </div>
                <h3 className="text-xl font-bold golden-text-glow dramatic-heading text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-[#D4AF37] text-xs uppercase tracking-widest font-semibold text-center mb-4">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed text-center">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ─── Values ─── */}
      <motion.div
        className="w-full flex flex-col items-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-5xl dark-card rounded-2xl p-12 sm:p-16 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold golden-text-glow dramatic-heading text-center mb-14">
            OUR VALUES
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="w-full flex flex-col items-center text-center p-8 rounded-xl bg-black/30"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-5xl mb-6 text-center">{v.emoji}</span>
                <h3 className="text-base font-bold text-[#D4AF37] dramatic-heading tracking-widest text-center mb-4">
                  {v.title}
                </h3>
                <p className="text-gray-300 text-sm leading-[1.9] text-center">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

    </main>
  )
}
