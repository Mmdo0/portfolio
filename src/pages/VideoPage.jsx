import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Film, Mail, Send, Camera } from 'lucide-react'
import PortfolioVideo from '../components/PortfolioVideo'
import ContactForm from '../components/ContactForm'
import CopyButton from '../components/CopyButton'

export default function VideoPage() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'fa'

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark to-black relative overflow-hidden">
      {/* پس‌زمینه تزئینی */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl bottom-10 right-10 animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 pt-10 pb-20">
        {/* هدر صفحه */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80 }}
          className="text-center mb-16 px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 border border-secondary/30 mb-6"
          >
            <Film size={36} className="text-secondary" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            {t('portfolio_video.title')}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('videoPage.subtitle')}
          </p>
        </motion.div>

        {/* گالری ویدیوها */}
        <PortfolioVideo />

        {/* بخش تماس با دکمه‌های کپی و فرم تماس */}
        <section id="contact-video" className="py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              {t('contact.title')}
            </h2>

            {/* دکمه‌های کپی – آیکون همیشه راست */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <CopyButton
                service={t('contact.email')}
                id="mohammad.shakri.1384@gmail.com"
                icon={Mail}
                successText={t('contact.copied')}
                isRTL={isRTL}
              />
              <CopyButton
                service={t('contact.telegram')}
                id="@mmds0"
                icon={Send}
                successText={t('contact.copied')}
                isRTL={isRTL}
              />
              <CopyButton
                service={t('contact.instagram')}
                id="mmdo.tv"
                icon={Camera}
                successText={t('contact.copied')}
                isRTL={isRTL}
              />
            </div>

            {/* فرم تماس */}
            <ContactForm />
          </motion.div>
        </section>
      </div>
    </div>
  )
}