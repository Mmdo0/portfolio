import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import fa from './fa.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fa: { translation: fa },
  },
  lng: 'fa', // زبان پیش‌فرض فارسی
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already safes from XSS
  },
})

export default i18n