'use client'

import { motion } from 'framer-motion'

export default function Productions() {
  const productions = [
    {
      title: 'Shadows of Bengal',
      year: '2023',
      description: 'A contemporary exploration of Bengali literature through experimental theatrical forms.',
      image: 'bg-gradient-to-br from-[#8B1538] to-[#2C1810]',
    },
    {
      title: 'Urban Chronicles',
      year: '2024',
      description: 'Reflecting modern city life through abstract movement and symbolic narration.',
      image: 'bg-gradient-to-br from-[#D4AF37] to-[#8B1538]',
    },
    {
      title: 'Heritage Voices',
      year: '2024',
      description: 'Celebrating cultural traditions with contemporary artistic expression.',
      image: 'bg-gradient-to-br from-[#2C1810] to-[#1A1A1A]',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="productions" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FEFBF7]">
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
            Our Productions
          </h2>
          <div className="h-1 w-24 bg-[#D4AF37] mx-auto rounded" />
        </motion.div>

        {/* Productions Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {productions.map((production, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg h-64 mb-4">
                <div className={`${production.image} h-full w-full transition-transform duration-300 group-hover:scale-110`} />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#2C1810] px-3 py-1 rounded font-bold">
                  {production.year}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#8B1538] mb-2">
                {production.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {production.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 bg-[#8B1538] text-white font-bold rounded hover:bg-[#6B0F2A] transition-colors">
            View All Productions
          </button>
        </motion.div>
      </div>
    </section>
  )
}
