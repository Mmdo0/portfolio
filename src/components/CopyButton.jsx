import { useState } from 'react'

export default function CopyButton({ service, id, icon: Icon, successText, isRTL, colorClass = 'text-secondary' }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(id)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Copy failed', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-3 rounded-xl px-6 py-4 transition-all duration-300 group ${
        isRTL ? 'flex-row' : 'flex-row-reverse'
      } ${
        copied
          ? 'bg-white/10 backdrop-blur-xl border border-green-400/40 shadow-[0_0_15px_rgba(34,197,94,0.2)]'
          : 'glass hover:border-secondary/40'
      }`}
    >
      {/* آیکون – isCopied را به کامپوننت پاس می‌دهیم */}
      <Icon size={22} className={copied ? 'text-green-400' : colorClass} isCopied={copied} />

      {/* نام سرویس + دونقطه */}
      <span className={`text-sm font-medium whitespace-nowrap ${copied ? 'text-green-400' : 'text-gray-400'}`}>
        {service}:
      </span>

      {/* آیدی */}
      <span className="relative inline-flex items-center">
        <span className="opacity-0 pointer-events-none text-sm font-medium whitespace-nowrap">
          {id}
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-start text-sm font-medium transition-colors whitespace-nowrap ${
            copied ? 'text-green-400' : 'text-gray-300 group-hover:text-white'
          }`}
        >
          {copied ? successText : id}
        </span>
      </span>
    </button>
  )
}