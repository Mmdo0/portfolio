import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowDown, Film } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 14 } },
  }

  // اسکرول نرم به بخش پروژه‌های برنامه‌نویسی
  const scrollToDev = (e) => {
    e.preventDefault()
    const devSection = document.getElementById('dev')
    if (devSection) {
      devSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-4 text-center z-10"
      >
        <motion.p variants={item} className="text-lg sm:text-xl text-secondary font-medium mb-4">
          {t('hero.greeting')}
        </motion.p>
        <motion.h1
          variants={item}
          className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          {t('hero.name')}
        </motion.h1>
        <motion.h2 variants={item} className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300 mb-8">
          {t('hero.title')}
        </motion.h2>
        <motion.p variants={item} className="text-gray-400 max-w-2xl mx-auto mb-4 text-lg">
          {t('hero.subtitle')}
        </motion.p>

        {/* خط رنگی جدید */}
        <motion.p variants={item} className="text-lg font-medium mb-12">
          <span className="text-accent"> &lt; </span>
          <span className="text-white">Code</span>
          <span className="text-secondary"> &amp; </span>
          <span className="text-white">Motion</span>
          <span className="text-accent"> /&gt; </span>
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-4">
          {/* دکمه اسکرول نرم به پروژه‌های برنامه‌نویسی */}
          <a
            href="#dev"
            onClick={scrollToDev}
            className="px-8 py-3.5 bg-gradient-to-r from-accent to-secondary text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-secondary/20"
          >
            {t('hero.cta_work')}
          </a>

          {/* دکمه رفتن به صفحه ادیت و موشن */}
          <Link
            to="/video"
            className="px-8 py-3.5 border border-secondary/40 hover:bg-secondary/10 text-secondary font-semibold rounded-full transition-all flex items-center justify-center gap-2 hover:scale-105 shadow-lg shadow-secondary/5"
          >
            <Film size={18} />
            {t('hero.cta_video')}
          </Link>

          {/* دکمه تماس با من */}
          <a
            href="#contact"
            className="px-8 py-3.5 border border-white/20 hover:border-secondary hover:text-secondary rounded-full font-semibold transition-all flex items-center justify-center gap-2 group"
          >
            {t('hero.cta_contact')}
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}