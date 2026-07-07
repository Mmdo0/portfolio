import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import useDominantColor from '../hooks/useDominantColor'

export default function GlowingVideoCard({ video, onClick }) {
  const dominantColor = useDominantColor(video.thumbnail)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.03 }}
      className="relative glass rounded-xl overflow-hidden cursor-pointer transition-all duration-300 group"
      onClick={() => onClick(video)}
    >
      {/* glow بر اساس رنگ غالب تامبنیل */}
      {dominantColor && (
        <div
          className="absolute inset-0 opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${dominantColor}, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />
      )}

      <div className="relative z-10">
        {/* تصویر تامبنیل */}
        <div className="relative overflow-hidden">
          {video.thumbnail ? (
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-48 bg-gray-800 flex items-center justify-center text-gray-500 text-sm">
              بدون تصویر
            </div>
          )}
          {/* لایه play روی تصویر */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Play size={48} className="text-white fill-white drop-shadow-lg" />
          </div>
        </div>

        {/* عنوان ویدیو */}
        <div className="p-4">
          <h3 className="text-white font-semibold group-hover:text-secondary transition-colors">
            {video.title}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}