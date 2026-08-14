import './Logo.css'

type LogoProps = {
  variant?: 'light' | 'dark'
  size?: number
}

/** Isometric wireframe cube with the brand's pink→orange→violet gradient. */
function CubeMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="cubeGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5ec2f7" />
          <stop offset="0.35" stopColor="#c94fd8" />
          <stop offset="0.7" stopColor="#f7519b" />
          <stop offset="1" stopColor="#f79b4f" />
        </linearGradient>
      </defs>
      <g stroke="url(#cubeGrad)" strokeWidth="2.4" strokeLinejoin="round">
        <path d="M24 4 42 13v22L24 44 6 35V13L24 4Z" />
        <path d="M24 4v18M24 22 6 13M24 22l18-9M24 44V22" />
      </g>
      <g fill="url(#cubeGrad)">
        <circle cx="24" cy="4" r="2.6" />
        <circle cx="42" cy="13" r="2.6" />
        <circle cx="6" cy="13" r="2.6" />
        <circle cx="24" cy="22" r="2.6" />
        <circle cx="42" cy="35" r="2.6" />
        <circle cx="6" cy="35" r="2.6" />
        <circle cx="24" cy="44" r="2.6" />
      </g>
    </svg>
  )
}

export default function Logo({ variant = 'dark', size = 40 }: LogoProps) {
  return (
    <a href="#" className={`logo logo--${variant}`}>
      <CubeMark size={size} />
      <span className="logo__text">
        <span className="logo__name">encegen</span>
        <span className="logo__tag">Ai Labs Pvt Ltd</span>
      </span>
    </a>
  )
}
