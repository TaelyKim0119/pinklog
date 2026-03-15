export default function PinkLogLogo({ size = 'md' }) {
  const sizes = {
    sm: { svg: 28, text: 'text-lg' },
    md: { svg: 36, text: 'text-xl' },
    lg: { svg: 44, text: 'text-2xl' },
  }
  const s = sizes[size] || sizes.md

  return (
    <span className="flex items-center gap-2">
      <svg
        width={s.svg}
        height={s.svg}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f490b1" />
            <stop offset="100%" stopColor="#e8628a" />
          </linearGradient>
          <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbb6ce" />
            <stop offset="100%" stopColor="#f490b1" />
          </linearGradient>
        </defs>
        {/* Rounded square background */}
        <rect x="2" y="2" width="44" height="44" rx="14" fill="url(#pinkGrad)" />
        {/* Stylized ribbon / heart mark */}
        <path
          d="M24 38C24 38 12 30 12 21.5C12 17.5 15 14 19 14C21.5 14 23.5 15.5 24 17C24.5 15.5 26.5 14 29 14C33 14 36 17.5 36 21.5C36 30 24 38 24 38Z"
          fill="white"
          opacity="0.95"
        />
        {/* Pink ribbon loop */}
        <path
          d="M22 20C22 20 19 17 17 19C15 21 18 24 22 27C22 27 19 23 19 21C19 19 20.5 18.5 22 20Z"
          fill="url(#ribbonGrad)"
          opacity="0.7"
        />
        <path
          d="M26 20C26 20 29 17 31 19C33 21 30 24 26 27C26 27 29 23 29 21C29 19 27.5 18.5 26 20Z"
          fill="url(#ribbonGrad)"
          opacity="0.7"
        />
        {/* Small cross / plus for medical */}
        <rect x="22.5" y="10" width="3" height="8" rx="1.5" fill="white" opacity="0.5" />
        <rect x="20" y="12.5" width="8" height="3" rx="1.5" fill="white" opacity="0.5" />
      </svg>
      <span className={`${s.text} font-extrabold tracking-tight`}>
        <span className="text-primary">Pink</span>
        <span className="text-slate-800">Log</span>
      </span>
    </span>
  )
}
