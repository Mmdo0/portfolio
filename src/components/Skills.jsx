import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Film, Code2 } from 'lucide-react'
// ایمپورت مستقیم مهارت‌ها از فایل‌های ترجمه
import en from '../i18n/en.json'
import fa from '../i18n/fa.json'

export default function Skills() {
  const { t, i18n } = useTranslation()

  // انتخاب آرایه بر اساس زبان جاری
  const translations = i18n.language === 'fa' ? fa : en
  const videoSkills = translations.skills?.items_video || []
  const devSkills = translations.skills?.items_dev || []

  return (
    <section id="skills" className="py-20 px-4 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-white">
          {t('skills.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* کارت ادیت و موشن */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, delay: 0.1 }}
            className="glass rounded-2xl p-8 transition-all duration-300 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Film className="text-secondary" size={28} />
              <h3 className="text-xl font-semibold text-white">{t('skills.video')}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {videoSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: index * 0.05 }}
                  className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium hover:bg-secondary/20 hover:text-secondary transition-colors cursor-default border border-white/5"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* کارت برنامه‌نویسی */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
            className="glass rounded-2xl p-8 transition-all duration-300 hover:border-secondary/40 hover:shadow-lg hover:shadow-secondary/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-secondary" size={28} />
              <h3 className="text-xl font-semibold text-white">{t('skills.dev')}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {devSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: index * 0.05 }}
                  className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium hover:bg-secondary/20 hover:text-secondary transition-colors cursor-default border border-white/5"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}