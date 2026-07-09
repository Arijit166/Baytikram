'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const executiveMembers = [
  {
    id: 1,
    name: 'Anindya Dutta Roy',
    role: 'President',
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/members/1%20Anindya%20Dutta%20Roy%20President.jpeg',
  },
  {
    id: 2,
    name: 'Dipankar Banerjee',
    role: 'Secretary',
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/members/dipankar%20banerjee%20secretary%20%202.jpg.jpeg',
  },
  {
    id: 3,
    name: 'Astik Kumar Naiya',
    role: 'Treasurer',
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/members/3%20Astik%20Kumar%20Naiya%20Treaserer.jpeg',
  },
  {
    id: 5,
    name: 'Gracy Chakraborty',
    role: 'Executive Member',
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/members/gracy%20Madam%20Executive%20Member.jpeg',
  },
  {
    id: 4,
    name: 'Prabir Dey',
    role: 'Executive Member',
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/members/parbir%20dey%20F3.jpg.jpeg',
  },
  {
    id: 6,
    name: 'Sanjay Das',
    role: 'Executive Member and Dance Director',
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/members/6%20Sanjay%20Das%20Executive%20Member%20and%20Dance%20Director.jpeg',
  },
  {
    id: 7,
    name: 'Deba Roy',
    role: 'Executive Member and Director',
    image: 'https://uivhxj5th4bjhbpl.public.blob.vercel-storage.com/members/deba%20roy%20F2.jpg.jpeg',
  },
]

// Row 1 (4 members) occupy an 8-column grid in pairs of columns.
const executiveRowOne = executiveMembers.slice(0, 4)
// Row 2 (3 members) are offset so each sits at the midpoint between two
// photos from row one, columns 2-3, 4-5, 6-7 on the 8-column grid.
const executiveRowTwo = executiveMembers.slice(4, 7)
const rowOneColStarts = [1, 3, 5, 7]
const rowTwoColStarts = [2, 4, 6]

export default function About() {
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
            className="text-5xl lg:text-6xl font-bold golden-text-glow dramatic-heading text-center"
            style={{ letterSpacing: '3px', marginBottom: '1px' }}
          >
            ABOUT US
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" style={{ marginBottom: '20px' }} />
          <p className="text-[#D4AF37] text-lg font-light italic leading-loose max-w-2xl text-center">
            Twenty-Five Years of Artistic Collaboration and Cultural Contribution
          </p>
        </motion.div>

        {/* ─── Divider ─── */}
        <div className="w-full flex justify-center px-4" style={{ marginBottom: '30px' }}>
          <div className="w-full max-w-5xl velvet-divider" />
        </div>

        {/* ─── About Text ─── */}
        <motion.div
          className="w-full max-w-5xl px-4"
          style={{ marginBottom: '4rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="dark-card rounded-2xl" style={{ padding: '2.5rem' }}>
            <p className="text-gray-300 text-sm leading-[1.9]" style={{ marginBottom: '1.2rem' }}>
              Established in 2001, Jadavpur Baytikram is a Kolkata-based theatre group dedicated to the continuous
              practice and promotion of meaningful theatrical expression. Over the past twenty-five years, the
              group has actively engaged with diverse forms of performance, including proscenium theatre, street
              play, and intimate theatre, creating productions that reflect both artistic exploration and social
              engagement.
            </p>
            <p className="text-gray-300 text-sm leading-[1.9]" style={{ marginBottom: '1.2rem' }}>
              The journey of Jadavpur Baytikram began with the production of &ldquo;Siri Bhenge Surjo&rdquo; by
              Indranath Banerjee, directed by Apurba Kumar Mukhoti. Since its inception, the group has consistently
              worked towards developing theatre as a powerful medium of communication, creativity, and cultural
              dialogue.
            </p>
            <p className="text-gray-300 text-sm leading-[1.9]" style={{ marginBottom: '1.2rem' }}>
              Among the group&rsquo;s street theatre productions, Sabar Roy&rsquo;s &ldquo;Kalobag&rdquo; has emerged
              as one of its most widely performed and appreciated works. In proscenium theatre &apos;&apos;Sanrashi&apos;&apos;
              and &ldquo;Char Akshar(Story Mani Mukhopadhay)&rdquo; written and directed by Deba Roy, received
              significant recognition for its artistic presentation and audience appeal.
            </p>
            <p className="text-gray-300 text-sm leading-[1.9]" style={{ marginBottom: '1.2rem' }}>
              The group&rsquo;s repertoire further includes acclaimed productions such as Rabindranath Tagore&rsquo;s
              &ldquo;Karna Kunti Sangbad&rdquo;, Samaresh Majumdar&apos;s &apos;&apos;Mahabidya Adhikontu&apos;&apos;
              and Sabar Roy&rsquo;s &ldquo;Favorite Bou&rdquo; and &ldquo;Kidnap Kando.&rdquo; Its non-proscenium and
              experimental productions include Deba Roy&rsquo;s &ldquo;Bhaat&rdquo;, &apos;&apos;Durniti
              Dorpon&apos;&apos;, &ldquo;Le Jhilli&rdquo; and &apos;&apos;Opekkha&apos;&apos; along with Sabar
              Roy&rsquo;s &ldquo;Bhagavan Dot Dot&rdquo;, &ldquo;2973190&rdquo; and &apos;&apos;E
              Porobashe&apos;&apos;.
            </p>
            <p className="text-gray-300 text-sm leading-[1.9]" style={{ marginBottom: '1.2rem' }}>
              Jadavpur Baytikram&rsquo;s latest experimental application, &ldquo;Jampuri Jamjamat&rdquo;, inspired by
              Dinabandhu Mitra&rsquo;s &ldquo;Jamalaye Jibanto Manush&rdquo;, is written and directed by Deba Roy.
              The production reflects the group&rsquo;s continued commitment to innovative storytelling and
              socially relevant theatre.
            </p>
            <p className="text-gray-300 text-sm leading-[1.9]">
              As Jadavpur Baytikram celebrates the event, the group proudly acknowledges twenty-five years of
              artistic collaboration, perseverance, and cultural contribution. With gratitude to its members,
              audiences, and well-wishers, the group remains committed to carrying forward its journey of creative
              excellence and theatrical practice in the years to come.
            </p>
          </div>
        </motion.div>

        {/* ─── Executive Members ─── */}
        <motion.div
          className="w-full flex flex-col items-center text-center px-4"
          style={{ marginBottom: '2.5rem' }}
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl lg:text-5xl font-bold golden-text-glow dramatic-heading text-center"
            style={{ letterSpacing: '2px', marginBottom: '1px' }}
          >
            EXECUTIVE MEMBERS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" style={{ marginTop: '12px' }} />
        </motion.div>

        <div className="w-full max-w-5xl px-4" style={{ marginBottom: '5rem' }}>
          {/* Row 1 - 4 members across an 8-column grid, each spanning 2 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-y-10 gap-x-4" style={{ marginBottom: '2.5rem' }}>
            {executiveRowOne.map((member, i) => (
              <motion.div
                key={member.id}
                className="flex flex-col items-center text-center md:col-span-2"
                style={{ gridColumnStart: undefined }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div
                  className="w-24 h-24 sm:w-[140px] sm:h-[140px] rounded-full overflow-hidden shrink-0"
                  style={{
                    border: '2px solid rgba(212,175,55,0.5)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    position: 'relative',
                    marginBottom: '1rem',
                  }}
                >
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="140px" />
                </div>
                <h3 className="text-lg font-bold golden-text-glow dramatic-heading tracking-wide">{member.name}</h3>
                <span className="text-[#D4AF37]/80 text-xs" style={{ marginTop: '0.25rem' }}>
                  {member.role}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Row 2 - 3 members, offset to sit at the midpoint between the photos above */}
          <div className="hidden md:grid grid-cols-8 gap-x-4">
            {executiveRowTwo.map((member, i) => (
              <motion.div
                key={member.id}
                className="flex flex-col items-center text-center col-span-2"
                style={{ gridColumnStart: rowTwoColStarts[i] }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div
                  className="w-24 h-24 sm:w-[140px] sm:h-[140px] rounded-full overflow-hidden shrink-0"
                  style={{
                    border: '2px solid rgba(212,175,55,0.5)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    position: 'relative',
                    marginBottom: '1rem',
                  }}
                >
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="140px" />
                </div>
                <h3 className="text-lg font-bold golden-text-glow dramatic-heading tracking-wide">{member.name}</h3>
                <span className="text-[#D4AF37]/80 text-xs" style={{ marginTop: '0.25rem' }}>
                  {member.role}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Mobile fallback for row 2 (stacked grid, no offset math needed on small screens) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-10 gap-x-4 md:hidden">
            {executiveRowTwo.map((member, i) => (
              <motion.div
                key={member.id}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div
                  className="w-24 h-24 sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden shrink-0"
                  style={{
                    border: '2px solid rgba(212,175,55,0.5)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    position: 'relative',
                    marginBottom: '1rem',
                  }}
                >
                  <Image src={member.image} alt={member.name} fill className="object-cover" sizes="120px" />
                </div>
                <h3 className="text-lg font-bold golden-text-glow dramatic-heading tracking-wide">{member.name}</h3>
                <span className="text-[#D4AF37]/80 text-xs" style={{ marginTop: '0.25rem' }}>
                  {member.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── Divider ─── */}
        <div className="w-full flex justify-center px-4" style={{ marginBottom: '30px' }}>
          <div className="w-full max-w-5xl velvet-divider" />
        </div>

        {/* ─── Gallery & Paper Reviews Options ─── */}
        <motion.div
          className="w-full flex flex-col items-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

            {/* Gallery */}
            <Link href="/about/gallery" className="w-full h-full">
              <motion.div
                className="h-full dark-card rounded-2xl flex flex-col items-center text-center cursor-pointer px-6 py-8 sm:px-12 sm:pt-12 sm:pb-8"
                style={{ justifyContent: 'space-between' }}
                whileHover={{ y: -8, boxShadow: '0 12px 35px rgba(212,175,55,0.25)' }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex flex-col items-center text-center gap-6">
                  <span className="text-5xl">📸</span>
                  <h3 className="text-xl font-bold golden-text-glow dramatic-heading tracking-widest text-center">
                    GALLERY
                  </h3>
                  <p className="text-gray-300 text-sm text-center leading-[2]">
                    Moments captured from our productions, festivals, and community gatherings over the years.
                  </p>
                </div>
                <span className="text-[#D4AF37] text-xs font-semibold tracking-widest border-b border-[#D4AF37]/40 pb-1" style={{ marginTop: '2rem', paddingBottom: '0.25rem' }}>
                  EXPLORE →
                </span>
              </motion.div>
            </Link>

            {/* Paper Reviews */}
            <Link href="/about/paper-review" className="w-full h-full">
              <motion.div
                className="h-full dark-card rounded-2xl flex flex-col items-center text-center cursor-pointer px-6 py-8 sm:px-12 sm:pt-12 sm:pb-8"
                style={{ justifyContent: 'space-between' }}
                whileHover={{ y: -8, boxShadow: '0 12px 35px rgba(212,175,55,0.25)' }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex flex-col items-center text-center gap-6">
                  <span className="text-5xl">📰</span>
                  <h3 className="text-xl font-bold golden-text-glow dramatic-heading tracking-widest text-center">
                    PAPER REVIEWS
                  </h3>
                  <p className="text-gray-300 text-sm text-center leading-[2]">
                    Press coverage and reviews documenting our productions across two and a half decades.
                  </p>
                </div>
                <span className="text-[#D4AF37] text-xs font-semibold tracking-widest border-b border-[#D4AF37]/40 pb-1" style={{ marginTop: '2rem', paddingBottom: '0.25rem' }}>
                  EXPLORE →
                </span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}