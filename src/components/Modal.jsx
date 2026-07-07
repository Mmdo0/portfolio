import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play } from 'lucide-react'

export default function Modal({ isOpen, onClose, videoUrl, title, description, thumbnail }) {
  const [playing, setPlaying] = useState(false)

  const handleClose = () => {
    setPlaying(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            className="relative w-full sm:max-w-4xl sm:rounded-2xl rounded-t-2xl bg-darker shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* هدر */}
            <div className="flex items-center justify-between p-4 border-b border-white/5">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <button onClick={handleClose} className="p-1 hover:bg-white/10 rounded-full transition">
                <X size={20} />
              </button>
            </div>

            {/* بخش ویدیو + توضیحات */}
            <div>
              {/* ویدیو یا پیش‌نمایش */}
              <AnimatePresence mode="wait">
                {!playing ? (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative"
                  >
                    <img
                      src={thumbnail}
                      alt={title}
                      className="w-full aspect-video object-cover brightness-75"
                    />
                    <button
                      onClick={() => setPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/40 transition">
                        <Play size={32} className="text-white fill-white ml-1" />
                      </div>
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <video
                      className="w-full aspect-video"
                      controls
                      autoPlay
                      src={videoUrl}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* توضیحات – همیشه نمایش داده می‌شود (اگر وجود داشته باشد) */}
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 text-gray-300 text-sm border-t border-white/5"
                >
                  {description}
                </motion.p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}