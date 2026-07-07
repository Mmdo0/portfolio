import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'

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
          {/* پروژه واقعی (مونوپولی) */}
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              gameMode={project.id === 1}
            />
          ))}

          {/* کارت‌های «به‌زودی» */}
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
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-0.5 bg-white/5 rounded-full text-gray-300"
                    >
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