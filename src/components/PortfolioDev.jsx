import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ExternalLink, Dice6 } from 'lucide-react'
import projects from '../data/projects'

function ProjectCard({ project, index, gameMode = false }) {
  const { t } = useTranslation()
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ type: 'spring', stiffness: 100, delay: index * 0.04 }}
      whileHover={{ scale: 1.02 }}
      className={`relative rounded-xl p-6 transition-all duration-300 group overflow-hidden ${
        gameMode
          ? 'pt-16 border-2 border-amber-400/40 bg-gradient-to-br from-amber-400/10 via-dark/80 to-dark shadow-[0_0_20px_rgba(251,191,36,0.15)]'
          : 'glass border border-white/5 hover:border-secondary/40'
      }`}
    >
      {gameMode && (
        <motion.div
          className="absolute top-3 left-3"
          animate={{ rotateY: [0, 12, 0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d', perspective: 200 }}
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-400/5 backdrop-blur-sm border border-amber-400/30 flex items-center justify-center shadow-[0_6px_12px_-3px_rgba(251,191,36,0.25)]">
            <Dice6 size={24} className="text-amber-400" />
          </div>
        </motion.div>
      )}

      {/* محتوای اصلی (همانند کارت‌های معمولی) */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-secondary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech?.map((tech) => (
            <span key={tech} className="text-xs px-2.5 py-0.5 bg-white/5 rounded-full text-gray-300 border border-white/5">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-secondary hover:underline text-sm font-medium"
        >
          {t('portfolio_dev.live_demo')}
          <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  )
}

const dummyProjects = [
  {
    id: 'soon-1',
    title: 'Dashboard UI',
    description: 'Admin panel with dark mode and interactive charts.',
    tech: ['React', 'Tailwind', 'Chart.js'],
  },
  {
    id: 'soon-2',
    title: 'API Integration',
    description: 'Real-time data syncing and RESTful API design.',
    tech: ['Node.js', 'Express', 'MongoDB'],
  },
]

export default function PortfolioDev() {
  const { t } = useTranslation()

  return (
    <section id="dev" className="py-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
        >
          {t('portfolio_dev.title')}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              gameMode={project.id === 1}
            />
          ))}

          {dummyProjects.map((dummy, idx) => (
            <motion.div
              key={dummy.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (projects.length + idx) * 0.05 }}
              className="relative glass rounded-xl p-6 backdrop-blur-md border border-white/5 hover:border-secondary/20 transition-all overflow-hidden"
            >
              <div className="opacity-20 blur-[3px] select-none pointer-events-none">
                <h3 className="text-xl font-semibold text-white mb-2">{dummy.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{dummy.description}</p>
                <div className="flex flex-wrap gap-2">
                  {dummy.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-0.5 bg-white/5 rounded-full text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-3xl sm:text-4xl font-black text-white/60 tracking-widest select-none">
                  {t('portfolio_dev.coming_soon')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}