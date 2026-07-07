import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, X } from 'lucide-react'

export default function ContactForm() {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [toastVisible, setToastVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = t('contact.error_name', 'لطفاً نام خود را وارد کنید')
    }
    if (!formData.email.trim()) {
      newErrors.email = t('contact.error_email', 'لطفاً ایمیل خود را وارد کنید')
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contact.error_email_invalid', 'ایمیل معتبر نیست')
    }
    if (!formData.message.trim()) {
      newErrors.message = t('contact.error_message', 'لطفاً پیام خود را بنویسید')
    }
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setToastVisible(false)

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setLoading(false)
    setFormData({ name: '', email: '', message: '' })
    setToastVisible(true)
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        {/* نام */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t('contact.form_name')}
            className={`w-full bg-dark border rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-secondary transition-colors ${
              errors.name ? 'border-red-400' : 'border-white/10'
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-400 text-start">{errors.name}</p>}
        </div>

        {/* ایمیل */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('contact.form_email')}
            className={`w-full bg-dark border rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-secondary transition-colors ${
              errors.email ? 'border-red-400' : 'border-white/10'
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400 text-start">{errors.email}</p>}
        </div>

        {/* پیام */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t('contact.form_message')}
            rows="4"
            className={`w-full bg-dark border rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-secondary transition-colors ${
              errors.message ? 'border-red-400' : 'border-white/10'
            }`}
          ></textarea>
          {errors.message && <p className="mt-1 text-xs text-red-400 text-start">{errors.message}</p>}
        </div>

        {/* دکمه ارسال */}
        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-accent to-secondary text-white font-semibold py-3 rounded-lg transition hover:shadow-lg hover:shadow-secondary/20 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              {t('contact.form_sending', 'در حال ارسال...')}
            </span>
          ) : (
            t('contact.form_send')
          )}
        </button>
      </form>

      {/* Toast موفقیت – بالاتر، کمی چپ‌تر، بزرگتر */}
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="fixed bottom-20 right-10 z-50 w-80 group"
          >
            <div className="bg-gray-900/95 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden border border-green-500/30">
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-3 text-green-400">
                  <CheckCircle size={20} />
                  <span className="text-base font-medium">
                    {t('contact.success', 'پیام با موفقیت ارسال شد')}
                  </span>
                </div>
                <button
                  onClick={() => setToastVisible(false)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-green-400 hover:text-green-200"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="h-1.5 bg-white/10">
                <motion.div
                  initial={{ width: '100%' }}
                  animate={{ width: '0%' }}
                  transition={{ duration: 5, ease: 'linear' }}
                  className="h-full bg-green-400"
                  onAnimationComplete={() => setToastVisible(false)}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}