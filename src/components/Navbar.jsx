import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe, Home, User, Wrench, Code2, Film, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ toggleLanguage, currentLang }) {
  const { t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // تعیین لینک Contact بر اساس مسیر فعلی
  const contactHref = location.pathname === '/video' ? '/video#contact-video' : '/#contact'

  const navLinks = [
    { label: t('nav.home'), href: '/', icon: Home },
    { label: t('nav.about'), href: '/#about', icon: User },
    { label: t('nav.skills'), href: '/#skills', icon: Wrench },
    { label: t('nav.portfolio_dev'), href: '/#dev', icon: Code2 },
    { label: t('nav.portfolio_video'), href: '/video', icon: Film },
    { label: t('nav.contact'), href: contactHref, icon: Mail },
  ]

  const isActive = (path) => {
    const base = path.split('#')[0]
    return location.pathname === base
  }

  const handleSmoothScroll = (e, href) => {
    const [path, hash] = href.split('#')
    if (!hash) {
      if (path === '/video') return // Link کار خودش را بکند
      if (path === '/') {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    e.preventDefault()
    const doScroll = (id) => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    // اگر در همان مسیر هستیم
    if (location.pathname === path) {
      doScroll(hash)
    } else {
      // ابتدا به مسیر مورد نظر برو سپس اسکرول
      navigate(path)
      // کمی صبر برای بارگذاری صفحه
      setTimeout(() => doScroll(hash), 150)
    }
  }

  const langLabel = currentLang === 'fa' ? t('language.fa') : t('language.en')
  const langFlag = currentLang === 'fa' ? '🇮🇷' : '🇬🇧'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark/80 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/5'
          : 'bg-transparent backdrop-blur-sm border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 relative">
        <Link to="/" className="text-2xl font-black bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 shrink-0">
          MMDS
        </Link>

        {/* لینک‌های وسط */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            const Icon = link.icon
            const hasHash = link.href.includes('#')
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => hasHash && handleSmoothScroll(e, link.href)}
                className={`relative group flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                  active ? 'text-secondary' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-secondary/20 via-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                <Icon size={16} className="relative z-10" />
                <span className="relative z-10">{link.label}</span>
                {active && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-secondary"
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* دکمه زبان */}
        <div className="hidden md:flex items-center absolute right-4 top-1/2 -translate-y-1/2" dir="ltr">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105"
          >
            <Globe size={16} className="text-secondary" />
            <span className="text-gray-300">{langLabel}</span>
            <motion.span key={currentLang} initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 0.4 }}>
              {langFlag}
            </motion.span>
          </button>
        </div>

        {/* موبایل */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleLanguage} className="bg-white/5 hover:bg-white/10 p-2 rounded-full transition-transform hover:scale-110 flex items-center gap-1">
            <Globe size={16} className="text-secondary" />
            <span className="text-xs font-medium">{langLabel}</span>
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-full hover:bg-white/5 transition-colors">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* منوی موبایل */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-dark/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href)
                const Icon = link.icon
                const hasHash = link.href.includes('#')
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={(e) => {
                      setMobileOpen(false)
                      if (hasHash) handleSmoothScroll(e, link.href)
                    }}
                    className={`relative group flex items-center gap-3 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                      active ? 'bg-secondary/10 text-secondary' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                    <Icon size={18} className="relative z-10" />
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}