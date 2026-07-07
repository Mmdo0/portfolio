import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-20 px-4 bg-darker">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
          {t('about.title')}
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          {t('about.content')}
        </p>
      </motion.div>
    </section>
  )
}