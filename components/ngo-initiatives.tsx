'use client'

import { motion } from 'framer-motion'

export default function NGOInitiatives() {
  const initiatives = [
    {
      title: 'Theatre for All',
      icon: '🎭',
      description: 'Making theatre accessible to underprivileged communities through free workshops and performances.',
    },
    {
      title: 'Youth Empowerment',
      icon: '🌟',
      description: 'Training young talents in experimental theatre techniques and creative expression.',
    },
    {
      title: 'Cultural Exchange',
      icon: '🌍',
      description: 'Facilitating international collaborations and cultural exchange programs.',
    },
    {
      title: 'Archive & Documentation',
      icon: '📚',
      description: 'Preserving Bengali theatre heritage through comprehensive documentation and archival work.',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#8B1538] mb-4">
            NGO Initiatives
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beyond theatre, we are committed to social development and cultural preservation.
          </p>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto rounded mt-6" />
        </motion.div>

        {/* Initiatives Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4">{initiative.icon}</div>
              <h3 className="text-2xl font-bold text-[#8B1538] mb-3">
                {initiative.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {initiative.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { number: '500+', label: 'Workshop Participants' },
            { number: '50+', label: 'Productions' },
            { number: '15+', label: 'Years Active' },
            { number: '10k+', label: 'Audience Members' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <motion.p
                className="text-4xl font-bold text-[#D4AF37] mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.p>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
