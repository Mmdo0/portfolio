import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import ContactForm from './ContactForm'
import CopyButton from './CopyButton'
import InstagramIcon from './icons/InstagramIcon'

export default function Contact() {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'fa'

  return (
    <section id="contact" className="py-20 px-4 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">{t('contact.title')}</h2>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <CopyButton
            service={t('contact.email')}
            id="mohammad.shakri.1384@gmail.com"
            icon={Mail}
            successText={t('contact.copied')}
            isRTL={isRTL}
            colorClass="text-secondary"
          />
          <CopyButton
            service={t('contact.telegram')}
            id="@mmds0"
            icon={Send}
            successText={t('contact.copied')}
            isRTL={isRTL}
            colorClass="text-blue-400"
          />
          <CopyButton
            service={t('contact.instagram')}
            id="mmdo.tv"
            icon={InstagramIcon}
            successText={t('contact.copied')}
            isRTL={isRTL}
            // نیازی به colorClass نیست – آیکون خودش گرادینت دارد
          />
        </div>

        <ContactForm />
      </motion.div>
    </section>
  )
}