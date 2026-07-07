import { useTranslation } from 'react-i18next'
import { ExternalLink } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-white/5 py-8 px-4 bg-dark">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">{t('footer.copyright')}</p>

        {/* شبکه‌های اجتماعی (می‌توانی بعداً لینک‌های خودت را بگذاری) */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-accent transition">
            <ExternalLink size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-accent transition">
            <ExternalLink size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-accent transition">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}