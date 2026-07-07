import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from './Modal'
import GlowingVideoCard from './GlowingVideoCard'
import videos from '../data/videos'

const categoryLabels = {
  fa: {
    all: 'همه',
    'motion-ads': 'موشن‌گرافی و تبلیغات',
    instagram: 'اینستاگرامی',
    youtube: 'یوتیوب',
    blender: 'بلندر',
  },
  en: {
    all: 'All',
    'motion-ads': 'Motion & Ads',
    instagram: 'Instagram',
    youtube: 'YouTube',
    blender: 'Blender',
  },
}

export default function PortfolioVideo() {
  const { t, i18n } = useTranslation()
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const lang = i18n.language === 'fa' ? 'fa' : 'en'
  const labels = categoryLabels[lang] || categoryLabels.en

  const categories = [
    { key: 'all', label: labels.all },
    { key: 'motion-ads', label: labels['motion-ads'] },
    { key: 'instagram', label: labels.instagram },
    { key: 'youtube', label: labels.youtube },
    { key: 'blender', label: labels.blender },
  ]

  const filteredVideos =
    activeCategory === 'all'
      ? videos
      : videos.filter((v) => v.category === activeCategory)

  return (
    <section id="video" className="py-20 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white"
        >
          {t('portfolio_video.title')}
        </motion.h2>

        {/* تب‌های دسته‌بندی */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-secondary/20 text-secondary border border-secondary/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                  : 'glass text-gray-300 hover:text-white hover:border-secondary/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* گرید ویدیوها با کارت‌های دارای glow هوشمند */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video) => (
              <GlowingVideoCard
                key={video.id}
                video={video}
                onClick={setSelectedVideo}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {selectedVideo && (
        <Modal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.videoUrl}
          title={selectedVideo.title}
          description={selectedVideo.description}
          thumbnail={selectedVideo.thumbnail}
        />
      )}
    </section>
  )
}