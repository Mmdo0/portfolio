import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Code2, Film } from 'lucide-react'

function SpinningGlow({ colors, isActive }) {
  return (
    <motion.div
      animate={{ rotate: isActive ? 360 : 0, opacity: isActive ? 0.4 : 0 }}
      transition={{ rotate: { repeat: Infinity, duration: 10, ease: 'linear' }, opacity: { duration: 0.2 } }}
      className="absolute inset-0 rounded-full blur-xl"
      style={{ background: `conic-gradient(from 0deg, ${colors.join(', ')})` }}
    />
  )
}

export default function WhatIDo() {
  const { t } = useTranslation()
  const [hoverDev, setHoverDev] = useState(false)
  const [hoverVideo, setHoverVideo] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, delay: i * 0.1 },
    }),
  }

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-16">
          {t('what_i_do.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Front-End */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            onMouseEnter={() => setHoverDev(true)}
            onMouseLeave={() => setHoverDev(false)}
            className="glass rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-200 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10"
          >
            <div className="relative mb-8 w-24 h-24 flex items-center justify-center">
              <SpinningGlow colors={['#06b6d4', '#8b5cf6', '#ec4899']} isActive={hoverDev} />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center backdrop-blur-sm border border-white/10"
              >
                <Code2 size={32} className="text-secondary" />
              </motion.div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('what_i_do.dev_title')}
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              {t('what_i_do.dev_desc')}
            </p>
          </motion.div>

          {/* Video */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            onMouseEnter={() => setHoverVideo(true)}
            onMouseLeave={() => setHoverVideo(false)}
            className="glass rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-200 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
          >
            <div className="relative mb-8 w-24 h-24 flex items-center justify-center">
              <SpinningGlow colors={['#8b5cf6', '#ec4899', '#06b6d4']} isActive={hoverVideo} />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center backdrop-blur-sm border border-white/10"
              >
                <Film size={32} className="text-accent" />
              </motion.div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              {t('what_i_do.video_title')}
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              {t('what_i_do.video_desc')}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}