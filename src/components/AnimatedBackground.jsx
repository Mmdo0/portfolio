import { motion } from 'framer-motion'

const orbs = [
  { size: 300, color: 'rgba(139, 92, 246, 0.15)', left: '10%', top: '20%', delay: 0 },
  { size: 400, color: 'rgba(6, 182, 212, 0.1)', left: '70%', top: '10%', delay: 2 },
  { size: 250, color: 'rgba(139, 92, 246, 0.1)', left: '40%', top: '60%', delay: 4 },
  { size: 350, color: 'rgba(6, 182, 212, 0.08)', left: '80%', top: '70%', delay: 1 },
]

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.left,
            top: orb.top,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 20 + i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  )
}