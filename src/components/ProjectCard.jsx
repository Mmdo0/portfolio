import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const THEMES = {
  amber: {
    card: 'border-amber-400/40 shadow-[0_0_28px_rgba(251,191,36,0.16)] hover:border-amber-400/80 hover:shadow-[0_0_36px_rgba(251,191,36,0.3)] bg-gradient-to-br from-amber-500/[0.08] via-black/40 to-black/60',
    iconBox: 'bg-amber-500/15 border-amber-400/35 text-amber-400',
    btn: 'bg-amber-500/20 border-amber-400/50 text-amber-200 hover:bg-amber-500 hover:text-slate-950 shadow-[0_0_18px_rgba(251,191,36,0.22)]',
  },
  cyan: {
    card: 'border-cyan-400/40 shadow-[0_0_28px_rgba(34,211,238,0.16)] hover:border-cyan-400/80 hover:shadow-[0_0_36px_rgba(34,211,238,0.3)] bg-gradient-to-br from-cyan-500/[0.08] via-black/40 to-black/60',
    iconBox: 'bg-cyan-500/15 border-cyan-400/35 text-cyan-400',
    btn: 'bg-cyan-500/20 border-cyan-400/50 text-cyan-200 hover:bg-cyan-400 hover:text-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.22)]',
  },
  emerald: {
    card: 'border-emerald-400/40 shadow-[0_0_28px_rgba(16,185,129,0.16)] hover:border-emerald-400/80 hover:shadow-[0_0_36px_rgba(16,185,129,0.3)] bg-gradient-to-br from-emerald-500/[0.08] via-black/40 to-black/60',
    iconBox: 'bg-emerald-500/15 border-emerald-400/35 text-emerald-400',
    btn: 'bg-emerald-500/20 border-emerald-400/50 text-emerald-200 hover:bg-emerald-400 hover:text-slate-950 shadow-[0_0_18px_rgba(16,185,129,0.22)]',
  },
}

export default function ProjectCard({ project, index, gameMode = false }) {
  const { t } = useTranslation()

  // انتخاب خودکار تم رنگی بر اساس نوع پروژه
  const isAlpr = project.liveUrl?.includes('alpr')
  const isBone = project.liveUrl?.includes('bone')
  const themeKey = gameMode ? 'amber' : isAlpr ? 'cyan' : isBone ? 'emerald' : 'cyan'
  const theme = THEMES[themeKey]
  const hasLiveLink = project.liveUrl && project.liveUrl !== '#'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`relative flex flex-col justify-between rounded-2xl p-6 backdrop-blur-md border transition-all duration-300 ${theme.card}`}
    >
      <div>
        {/* آیکون اختصاصی بالای کارت */}
        <div className="flex justify-end mb-4">
          <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${theme.iconBox}`}>
            {gameMode ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" />
                <circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" />
                <circle cx="8.5" cy="15.5" r="1.2" fill="currentColor" />
                <circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" />
                <circle cx="12" cy="12" r="1.2" fill="currentColor" />
              </svg>
            ) : isAlpr ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="6" width="20" height="12" rx="2.5" />
                <line x1="6" y1="12" x2="10" y2="12" />
                <line x1="14" y1="12" x2="18" y2="12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            )}
          </div>
        </div>

        {/* عنوان و توضیحات */}
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300/85 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* تگ‌های تکنولوژی */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* دکمه برجسته دمو زنده */}
      <div className="pt-2">
        <a
          href={project.liveUrl}
          target={hasLiveLink ? '_blank' : undefined}
          rel={hasLiveLink ? 'noopener noreferrer' : undefined}
          className={`inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border text-sm font-bold transition-all duration-200 ${theme.btn}`}
        >
          <span>{t('portfolio_dev.live_demo')}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </motion.div>
  )
}
