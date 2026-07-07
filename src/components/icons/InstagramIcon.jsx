export default function InstagramIcon({ size = 22, className = '', isCopied = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {isCopied ? (
        // نسخه ساده سبز
        <>
          <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="17" cy="7" r="1.5" fill="currentColor" />
        </>
      ) : (
        // نسخه گرادینت بنفش-صورتی
        <>
          <defs>
            <linearGradient id="insta-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#insta-gradient)" strokeWidth="2" fill="none" />
          <circle cx="12" cy="12" r="5" stroke="url(#insta-gradient)" strokeWidth="2" fill="none" />
          <circle cx="17" cy="7" r="1.5" fill="url(#insta-gradient)" />
        </>
      )}
    </svg>
  )
}