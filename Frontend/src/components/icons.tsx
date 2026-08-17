import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function base({ size = 24, ...props }: IconProps): SVGProps<SVGSVGElement> {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...props,
  }
}

export const SearchIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.5" y2="16.5" />
  </svg>
)

export const ChevronDown = (p: IconProps) => (
  <svg {...base(p)}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="13 5 20 12 13 19" />
  </svg>
)

export const PlaySquare = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <polygon points="10 8.5 16 12 10 15.5" fill="currentColor" stroke="none" />
  </svg>
)

export const ZapIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <polygon points="13 2 3 14 11 14 10 22 21 9 13 9" />
  </svg>
)

export const SparklesIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 L14 9.5 L20.5 11.5 L14 13.5 L12 20 L10 13.5 L3.5 11.5 L10 9.5 Z" />
    <circle cx="19" cy="4.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="5" cy="19" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const RefreshIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20 11a8 8 0 0 0-14.9-3" />
    <polyline points="4.6 3.5 5.1 8 9.6 7.6" />
    <path d="M4 13a8 8 0 0 0 14.9 3" />
    <polyline points="19.4 20.5 18.9 16 14.4 16.4" />
  </svg>
)

export const PenIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M16.5 3.5 20.5 7.5 8 20 3.5 20.5 4 16 Z" />
    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
  </svg>
)

export const CodeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <polyline points="8 7 3 12 8 17" />
    <polyline points="16 7 21 12 16 17" />
  </svg>
)

export const PlugIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M8 7V3" />
    <path d="M16 7V3" />
    <path d="M6 7h12v4a6 6 0 0 1-12 0Z" />
    <path d="M12 17v4" />
  </svg>
)

export const DatabaseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <ellipse cx="12" cy="5.5" rx="8" ry="3" />
    <path d="M4 5.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    <path d="M4 11.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
  </svg>
)

export const BarChartIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <line x1="5" y1="20" x2="5" y2="13" />
    <line x1="12" y1="20" x2="12" y2="5" />
    <line x1="19" y1="20" x2="19" y2="9" />
  </svg>
)

export const BellIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M18 9a6 6 0 0 0-12 0c0 6-2.5 7.5-2.5 7.5h17S18 15 18 9" />
    <path d="M10 20.5a2.2 2.2 0 0 0 4 0" />
  </svg>
)

export const ShieldIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6Z" />
  </svg>
)

export const FileTextIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8Z" />
    <polyline points="14 3 14 8 19 8" />
    <line x1="9" y1="13" x2="15" y2="13" />
    <line x1="9" y1="17" x2="13" y2="17" />
  </svg>
)

export const LockIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4.5" y="11" width="15" height="9.5" rx="2" />
    <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
  </svg>
)

export const UsersIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M17.5 14.5c2.2.4 3.5 2.2 3.5 4.5" />
  </svg>
)

export const LinkedInIcon = (p: IconProps) => (
  <svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.63 0-3.03 2.05-3.03 4.16V23H8V8Z" />
  </svg>
)

export const XIcon = (p: IconProps) => (
  <svg {...base({ ...p, fill: 'currentColor', stroke: 'none' })}>
    <path d="M18.24 2H21.5l-7.13 8.16L22.75 22h-6.57l-5.14-6.73L5.15 22H1.88l7.63-8.72L.5 2h6.74l4.65 6.15L18.24 2Zm-1.15 18h1.81L7.26 3.86H5.31L17.09 20Z" />
  </svg>
)

export const YoutubeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="4" />
    <polygon points="10 9 15.5 12 10 15" fill="currentColor" stroke="none" />
  </svg>
)

export const GlobeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

export const CheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

