import './CapabilityArt.css'

interface CapabilityArtProps {
  id: string
  className?: string
}

export function CapabilityArt({ id, className = '' }: CapabilityArtProps) {
  switch (id) {
    case 'llm-fine-tuning':
    case 'purple':
      return (
        <div className={`cap-art cap-art--purple ${className}`}>
          <svg className="cap-art__svg" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="purpleGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#7e22ce" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#090514" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="purpleLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <filter id="purpleBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <rect width="400" height="200" fill="#0c071e" />
            <circle cx="200" cy="100" r="140" fill="url(#purpleGlow)" opacity="0.6" />
            
            {/* Neural Synapse Pathways */}
            <g filter="url(#purpleBlur)" stroke="url(#purpleLineGrad)" strokeWidth="1.5" opacity="0.75">
              <path d="M0,100 Q100,30 200,100 T400,100" fill="none" />
              <path d="M0,130 Q120,170 200,90 T400,110" fill="none" />
              <path d="M0,70 Q140,40 220,120 T400,80" fill="none" />
              <path d="M30,160 Q150,80 260,110 T380,40" fill="none" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M40,30 Q160,140 280,70 T370,160" fill="none" strokeWidth="1" strokeDasharray="4 2" />
            </g>

            {/* Neural Nodes / Synapses */}
            <g fill="#e9d5ff">
              <circle cx="200" cy="100" r="4" filter="url(#purpleBlur)" />
              <circle cx="140" cy="65" r="3" />
              <circle cx="260" cy="120" r="3" />
              <circle cx="80" cy="100" r="2.5" />
              <circle cx="320" cy="95" r="2.5" />
              <circle cx="110" cy="140" r="2" />
              <circle cx="290" cy="60" r="2" />
              <circle cx="200" cy="40" r="2" />
              <circle cx="200" cy="160" r="2" />
            </g>

            {/* Glowing Center Core */}
            <ellipse cx="200" cy="100" rx="45" ry="12" fill="#d8b4fe" opacity="0.4" filter="url(#purpleBlur)" />
            <path d="M160,100 C180,85 220,115 240,100" stroke="#ffffff" strokeWidth="2" filter="url(#purpleBlur)" />
          </svg>
        </div>
      )

    case 'computer-vision':
    case 'cyan':
      return (
        <div className={`cap-art cap-art--cyan ${className}`}>
          <svg className="cap-art__svg" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#0891b2" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#02141c" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="gridGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <rect width="400" height="200" fill="#03131a" />
            <circle cx="200" cy="100" r="130" fill="url(#cyanGlow)" opacity="0.6" />

            {/* 3D Perspective Grid Floor */}
            <g stroke="#0891b2" strokeWidth="1" opacity="0.45">
              <line x1="200" y1="100" x2="0" y2="200" />
              <line x1="200" y1="100" x2="80" y2="200" />
              <line x1="200" y1="100" x2="160" y2="200" />
              <line x1="200" y1="100" x2="240" y2="200" />
              <line x1="200" y1="100" x2="320" y2="200" />
              <line x1="200" y1="100" x2="400" y2="200" />
              <line x1="120" y1="140" x2="280" y2="140" />
              <line x1="70" y1="165" x2="330" y2="165" />
              <line x1="20" y1="190" x2="380" y2="190" />
            </g>

            {/* Cybernetic Optic Lens */}
            <circle cx="200" cy="95" r="48" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.8" />
            <circle cx="200" cy="95" r="36" stroke="#06b6d4" strokeWidth="2" opacity="0.9" />
            <circle cx="200" cy="95" r="22" stroke="#67e8f9" strokeWidth="1.5" />
            <circle cx="200" cy="95" r="8" fill="#a5f3fc" />
            <circle cx="200" cy="95" r="3" fill="#ffffff" />

            {/* Crosshair / Reticle Marks */}
            <line x1="130" y1="95" x2="155" y2="95" stroke="#22d3ee" strokeWidth="1.5" />
            <line x1="245" y1="95" x2="270" y2="95" stroke="#22d3ee" strokeWidth="1.5" />
            <line x1="200" y1="35" x2="200" y2="55" stroke="#22d3ee" strokeWidth="1.5" />
            <line x1="200" y1="135" x2="200" y2="155" stroke="#22d3ee" strokeWidth="1.5" />
            
            {/* Target Detection Box */}
            <path d="M165,65 L155,65 L155,75 M235,65 L245,65 L245,75 M165,125 L155,125 L155,115 M235,125 L245,125 L245,115" stroke="#67e8f9" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      )

    case 'predictive-intelligence':
    case 'orange':
      return (
        <div className={`cap-art cap-art--orange ${className}`}>
          <svg className="cap-art__svg" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="orangeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#d97706" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1a0c02" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="amberWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
            </defs>
            <rect width="400" height="200" fill="#140a03" />
            <circle cx="230" cy="90" r="140" fill="url(#orangeGlow)" opacity="0.5" />

            {/* Background Telemetry Grid */}
            <g stroke="#78350f" strokeWidth="0.75" opacity="0.35" strokeDasharray="3 3">
              <line x1="20" y1="40" x2="380" y2="40" />
              <line x1="20" y1="80" x2="380" y2="80" />
              <line x1="20" y1="120" x2="380" y2="120" />
              <line x1="20" y1="160" x2="380" y2="160" />
              <line x1="100" y1="20" x2="100" y2="180" />
              <line x1="200" y1="20" x2="200" y2="180" />
              <line x1="300" y1="20" x2="300" y2="180" />
            </g>

            {/* Glowing Golden Wave Time-Series */}
            <path
              d="M10,140 Q60,160 110,110 T200,85 T280,45 T340,95 T390,60"
              fill="none"
              stroke="url(#amberWaveGrad)"
              strokeWidth="3.5"
            />
            <path
              d="M10,145 Q60,170 110,120 T200,95 T280,55 T340,105 T390,70"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1.5"
              opacity="0.6"
            />

            {/* Floating Data Nodes and Candlesticks */}
            <g fill="#fef08a">
              <circle cx="110" cy="110" r="4" />
              <circle cx="200" cy="85" r="4.5" />
              <circle cx="280" cy="45" r="5" />
              <circle cx="340" cy="95" r="3.5" />
              <circle cx="390" cy="60" r="4" />
            </g>

            {/* Forecast Area Box */}
            <rect x="250" y="30" width="130" height="90" rx="8" fill="rgba(245, 158, 11, 0.08)" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 2" />
            <text x="260" y="48" fill="#fbbf24" fontSize="9" fontWeight="bold" fontFamily="monospace">FORECAST 99.2%</text>
          </svg>
        </div>
      )

    case 'nlp-understanding':
    case 'blue':
      return (
        <div className={`cap-art cap-art--blue ${className}`}>
          <svg className="cap-art__svg" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="blueGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#4338ca" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#080720" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="400" height="200" fill="#080720" />
            <circle cx="200" cy="100" r="130" fill="url(#blueGlow)" opacity="0.6" />

            {/* Semantic Constellation Mesh */}
            <g stroke="#818cf8" strokeWidth="1" opacity="0.6">
              <line x1="80" y1="60" x2="160" y2="90" />
              <line x1="160" y1="90" x2="220" y2="70" />
              <line x1="220" y1="70" x2="310" y2="60" />
              <line x1="160" y1="90" x2="190" y2="140" />
              <line x1="220" y1="70" x2="260" y2="130" />
              <line x1="190" y1="140" x2="260" y2="130" />
              <line x1="260" y1="130" x2="330" y2="140" />
              <line x1="100" y1="130" x2="160" y2="90" />
            </g>

            {/* Floating Semantic Token Words */}
            <g fill="#c7d2fe" fontFamily="monospace" fontSize="9" fontWeight="600">
              <text x="60" y="58">CONTEXT</text>
              <text x="140" y="88" fill="#ffffff" fontSize="10" fontWeight="bold">EMBEDDING</text>
              <text x="210" y="68">SENTIMENT</text>
              <text x="300" y="58">SYNTAX</text>
              <text x="165" y="152">PARSER</text>
              <text x="245" y="142" fill="#a5b4fc">DECODING</text>
              <text x="320" y="152">ENTITIES</text>
            </g>

            {/* Token Nodes */}
            <g fill="#e0e7ff">
              <circle cx="80" cy="60" r="3" />
              <circle cx="160" cy="90" r="4.5" fill="#ffffff" />
              <circle cx="220" cy="70" r="3.5" />
              <circle cx="310" cy="60" r="3" />
              <circle cx="190" cy="140" r="3" />
              <circle cx="260" cy="130" r="4" />
              <circle cx="330" cy="140" r="3" />
            </g>
          </svg>
        </div>
      )

    case 'reinforcement-learning':
    case 'green':
      return (
        <div className={`cap-art cap-art--green ${className}`}>
          <svg className="cap-art__svg" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="greenGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#059669" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#021a0f" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="400" height="200" fill="#03170e" />
            <circle cx="200" cy="100" r="130" fill="url(#greenGlow)" opacity="0.5" />

            {/* Isometric Policy Network Matrix */}
            <g stroke="#059669" strokeWidth="1" opacity="0.4" strokeDasharray="3 3">
              <path d="M60,120 L200,50 L340,120 L200,190 Z" fill="none" />
              <path d="M100,120 L200,70 L300,120 L200,170 Z" fill="none" />
            </g>

            {/* Optimal Policy Route (Glowing Green Line) */}
            <path
              d="M80,130 L150,95 L200,125 L270,80 L330,110"
              fill="none"
              stroke="#34d399"
              strokeWidth="3"
            />
            <path
              d="M150,95 L220,65 L270,80"
              fill="none"
              stroke="#6ee7b7"
              strokeWidth="1.5"
              strokeDasharray="4 2"
            />

            {/* Decision Reward Nodes */}
            <g fill="#a7f3d0">
              <circle cx="80" cy="130" r="4" />
              <circle cx="150" cy="95" r="5" fill="#ffffff" />
              <circle cx="200" cy="125" r="4.5" />
              <circle cx="220" cy="65" r="3.5" />
              <circle cx="270" cy="80" r="5.5" fill="#34d399" />
              <circle cx="330" cy="110" r="4" />
            </g>

            {/* State Target Indicator */}
            <circle cx="270" cy="80" r="14" stroke="#6ee7b7" strokeWidth="1.5" strokeDasharray="4 2" fill="none" />
            <text x="290" y="75" fill="#6ee7b7" fontSize="9" fontWeight="bold" fontFamily="monospace">REWARD +1.0</text>
          </svg>
        </div>
      )

    case 'marketing-website':
      return (
        <div className={`cap-art cap-art--marketing ${className}`}>
          <svg className="cap-art__svg" viewBox="0 0 420 210" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="mwPurpleGlow" cx="68%" cy="32%" r="55%">
                <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.55" />
                <stop offset="55%" stopColor="#3b0764" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#0b091b" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="mwFrameSide" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e1938" />
                <stop offset="50%" stopColor="#2d2654" />
                <stop offset="100%" stopColor="#0e0b20" />
              </linearGradient>
            </defs>
            {/* Base dark background */}
            <rect width="420" height="210" fill="#0b091b" />
            <rect width="420" height="210" fill="url(#mwPurpleGlow)" />

            {/* Side metallic frame pillars matching screenshot */}
            <rect x="0" y="0" width="26" height="210" fill="url(#mwFrameSide)" opacity="0.85" />
            <line x1="26" y1="0" x2="26" y2="210" stroke="#3b3366" strokeWidth="1" />
            <rect x="394" y="0" width="26" height="210" fill="url(#mwFrameSide)" opacity="0.85" />
            <line x1="394" y1="0" x2="394" y2="210" stroke="#3b3366" strokeWidth="1" />

            {/* Inner screen container */}
            <rect x="38" y="8" width="344" height="194" rx="8" fill="#0f0c24" fillOpacity="0.7" stroke="#231d45" strokeWidth="1" />

            {/* Top-left Headline & Subtitle */}
            <text x="68" y="48" fill="#ffffff" fontSize="13.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.03em">
              UNLEASH PEAK DIGITAL
            </text>
            <text x="68" y="65" fill="#ffffff" fontSize="13.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.03em">
              PERFORMANCE
            </text>
            <text x="68" y="80" fill="#8b87ab" fontSize="7.2" fontWeight="500" fontFamily="sans-serif">
              Experience unmatched speed &amp; conversion
            </text>

            {/* Top-right 98 PageSpeed Gauge */}
            <g transform="translate(306, 56)">
              <circle cx="0" cy="0" r="24" stroke="#251e47" strokeWidth="3.5" fill="#120e2b" />
              <circle
                cx="0"
                cy="0"
                r="24"
                stroke="#8b5cf6"
                strokeWidth="3.5"
                strokeDasharray="132 160"
                strokeLinecap="round"
                transform="rotate(-125)"
              />
              <text x="0" y="2" fill="#ffffff" fontSize="14.5" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">
                98
              </text>
              <text x="0" y="11" fill="#94a3b8" fontSize="5.2" fontWeight="600" fontFamily="sans-serif" textAnchor="middle">
                PageSpeed
              </text>
              {/* Tiny green trend indicator at bottom right */}
              <path d="M22,18 L28,12 L28,18 Z" fill="#10b981" />
              <line x1="20" y1="19" x2="29" y2="19" stroke="#10b981" strokeWidth="1.2" />
            </g>

            {/* Bottom 3 Feature Boxes */}
            {/* Box 1 */}
            <g transform="translate(68, 114)">
              <rect width="84" height="62" rx="6" fill="#141229" stroke="#252142" strokeWidth="1" />
              <circle cx="42" cy="20" r="7" stroke="#8b5cf6" strokeWidth="1.3" fill="none" />
              <path d="M42,20 L46,16" stroke="#a78bfa" strokeWidth="1.3" strokeLinecap="round" />
              <text x="42" y="40" fill="#cbd5e1" fontSize="5.4" fontWeight="700" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.04em">
                ULTRA-FAST
              </text>
              <text x="42" y="48" fill="#94a3b8" fontSize="5.2" fontWeight="600" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.04em">
                LOAD TIMES
              </text>
            </g>

            {/* Box 2 */}
            <g transform="translate(164, 114)">
              <rect width="84" height="62" rx="6" fill="#141229" stroke="#252142" strokeWidth="1" />
              <rect x="36" y="13" width="12" height="14" rx="2" stroke="#8b5cf6" strokeWidth="1.3" fill="none" />
              <line x1="39" y1="17" x2="45" y2="17" stroke="#a78bfa" strokeWidth="1.1" />
              <line x1="39" y1="21" x2="43" y2="21" stroke="#a78bfa" strokeWidth="1.1" />
              <text x="42" y="40" fill="#cbd5e1" fontSize="5.4" fontWeight="700" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.04em">
                AI-POWERED
              </text>
              <text x="42" y="48" fill="#94a3b8" fontSize="5.2" fontWeight="600" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.04em">
                OPTIMIZATION
              </text>
            </g>

            {/* Box 3 */}
            <g transform="translate(260, 114)">
              <rect width="84" height="62" rx="6" fill="#141229" stroke="#252142" strokeWidth="1" />
              <circle cx="42" cy="20" r="4" stroke="#8b5cf6" strokeWidth="1.3" fill="none" />
              <circle cx="42" cy="20" r="7.5" stroke="#8b5cf6" strokeWidth="1.2" strokeDasharray="2 2.5" fill="none" />
              <text x="42" y="40" fill="#cbd5e1" fontSize="5.4" fontWeight="700" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.04em">
                SEAMLESS USER
              </text>
              <text x="42" y="48" fill="#94a3b8" fontSize="5.2" fontWeight="600" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.04em">
                EXPERIENCE
              </text>
            </g>
          </svg>
        </div>
      )

    case 'ecommerce-platform':
      return (
        <div className={`cap-art cap-art--ecommerce ${className}`}>
          <svg className="cap-art__svg" viewBox="0 0 420 210" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="ecWarmGlow" cx="20%" cy="15%" r="60%">
                <stop offset="0%" stopColor="#d97706" stopOpacity="0.32" />
                <stop offset="55%" stopColor="#78350f" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#14131a" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="420" height="210" fill="#16151d" />
            <rect width="420" height="210" fill="url(#ecWarmGlow)" />

            {/* Storefront Window Frame */}
            <rect x="26" y="0" width="368" height="206" fill="#14141c" stroke="#2b2938" strokeWidth="1" />

            {/* Top Navbar */}
            <rect x="26" y="0" width="368" height="18" fill="#191923" />
            <text x="36" y="11" fill="#ffffff" fontSize="6" fontWeight="800" fontFamily="sans-serif">LOGO</text>
            <text x="128" y="11" fill="#94a3b8" fontSize="5.2" fontFamily="sans-serif">Home</text>
            <rect x="150" y="0" width="28" height="18" fill="#f59e0b" fillOpacity="0.18" />
            <rect x="150" y="16.5" width="28" height="1.5" fill="#f59e0b" />
            <text x="154" y="11" fill="#fbbf24" fontSize="5.2" fontWeight="700" fontFamily="sans-serif">Catalog</text>
            <text x="186" y="11" fill="#94a3b8" fontSize="5.2" fontFamily="sans-serif">Orders</text>
            <text x="212" y="11" fill="#94a3b8" fontSize="5.2" fontFamily="sans-serif">Profile</text>
            <rect x="312" y="4" width="68" height="10" rx="5" fill="#232331" stroke="#343446" strokeWidth="0.7" />
            <text x="320" y="10.5" fill="#64748b" fontSize="4.5" fontFamily="sans-serif">Search products...</text>

            {/* Left Filter Sidebar */}
            <rect x="32" y="24" width="54" height="174" rx="4" fill="#181822" stroke="#262636" strokeWidth="0.8" />
            <text x="37" y="35" fill="#94a3b8" fontSize="5" fontWeight="600" fontFamily="sans-serif">Category</text>
            <line x1="37" y1="40" x2="80" y2="40" stroke="#262636" strokeWidth="0.7" />
            <text x="37" y="52" fill="#94a3b8" fontSize="4.8" fontFamily="sans-serif">Brand</text>
            <rect x="70" y="48" width="10" height="5" rx="2.5" fill="#f59e0b" />
            <circle cx="77.5" cy="50.5" r="1.8" fill="#fff" />
            <text x="37" y="64" fill="#94a3b8" fontSize="4.8" fontFamily="sans-serif">In Stock</text>
            <rect x="70" y="60" width="10" height="5" rx="2.5" fill="#f59e0b" />
            <circle cx="77.5" cy="62.5" r="1.8" fill="#fff" />
            <text x="37" y="80" fill="#94a3b8" fontSize="4.8" fontFamily="sans-serif">Price Range</text>
            <line x1="37" y1="88" x2="80" y2="88" stroke="#333347" strokeWidth="1.5" />
            <line x1="44" y1="88" x2="68" y2="88" stroke="#f59e0b" strokeWidth="1.5" />
            <circle cx="44" cy="88" r="2.2" fill="#f59e0b" />
            <circle cx="68" cy="88" r="2.2" fill="#f59e0b" />
            <text x="37" y="106" fill="#94a3b8" fontSize="4.8" fontFamily="sans-serif">Rating</text>
            <circle cx="40" cy="115" r="2" fill="#f59e0b" />
            <circle cx="76" cy="115" r="2" fill="#f59e0b" />
            <rect x="37" y="126" width="14" height="5" rx="2.5" fill="#f59e0b" />

            {/* Center 4x2 Product Grid */}
            {[
              { x: 92, y: 24, price: '$249.99', accent: '#6366f1', shape: 'box' },
              { x: 146, y: 24, price: '$349.99', accent: '#ec4899', shape: 'watch' },
              { x: 200, y: 24, price: '$249.99', accent: '#38bdf8', shape: 'cam' },
              { x: 254, y: 24, price: '$349.99', accent: '#f97316', shape: 'bag' },
              { x: 92, y: 112, price: '$249.99', accent: '#a855f7', shape: 'laptop' },
              { x: 146, y: 112, price: '$349.99', accent: '#22d3ee', shape: 'phone' },
              { x: 200, y: 112, price: '$249.99', accent: '#f59e0b', shape: 'shoe' },
              { x: 254, y: 112, price: '$349.99', accent: '#10b981', shape: 'screen' },
            ].map((item, idx) => (
              <g key={idx} transform={`translate(${item.x}, ${item.y})`}>
                <rect width="50" height="84" rx="4" fill="#1c1c27" stroke="#2c2c3c" strokeWidth="0.8" />
                {/* Product image area */}
                <rect x="4" y="4" width="42" height="34" rx="2.5" fill="#12121a" />
                <circle cx="25" cy="21" r="11" fill={item.accent} fillOpacity="0.22" />
                <rect x="17" y="13" width="16" height="16" rx="3" fill={item.accent} fillOpacity="0.75" />
                {/* Title & Price */}
                <text x="5" y="47" fill="#cbd5e1" fontSize="4.6" fontWeight="600" fontFamily="sans-serif">
                  Product Item
                </text>
                <text x="5" y="57" fill="#ffffff" fontSize="6.5" fontWeight="800" fontFamily="sans-serif">
                  {item.price}
                </text>
                {/* Add to Cart Button */}
                <rect x="5" y="66" width="40" height="11" rx="5.5" fill="#f59e0b" />
                <text x="25" y="73" fill="#111827" fontSize="3.8" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">
                  ADD TO CART
                </text>
              </g>
            ))}

            {/* Right Cart Drawer */}
            <rect x="310" y="24" width="76" height="174" rx="4" fill="#181822" stroke="#262636" strokeWidth="0.8" />
            <text x="316" y="34" fill="#e2e8f0" fontSize="5.2" fontWeight="700" fontFamily="sans-serif">Cart (4)</text>
            {[0, 1, 2, 3, 4].map((row) => (
              <g key={row} transform={`translate(316, ${42 + row * 22})`}>
                <rect width="12" height="12" rx="2" fill="#252536" />
                <circle cx="6" cy="6" r="3.5" fill={row % 2 === 0 ? '#f59e0b' : '#38bdf8'} />
                <text x="16" y="5.5" fill="#cbd5e1" fontSize="4.2" fontWeight="600" fontFamily="sans-serif">Order Item</text>
                <text x="16" y="11" fill="#fbbf24" fontSize="4.2" fontWeight="700" fontFamily="sans-serif">$249.99</text>
                <line x1="0" y1="17" x2="64" y2="17" stroke="#252534" strokeWidth="0.6" />
              </g>
            ))}
            <text x="316" y="160" fill="#94a3b8" fontSize="4.5" fontWeight="700" fontFamily="sans-serif">SUBTOTAL</text>
            <text x="380" y="160" fill="#ffffff" fontSize="5" fontWeight="800" fontFamily="sans-serif" textAnchor="end">$999.96</text>
            <rect x="316" y="168" width="64" height="13" rx="6.5" fill="#f59e0b" />
            <text x="348" y="176" fill="#111827" fontSize="4.5" fontWeight="800" fontFamily="sans-serif" textAnchor="middle">
              CHECKOUT
            </text>
          </svg>
        </div>
      )

    case 'custom-web-app':
      return (
        <div className={`cap-art cap-art--webapp ${className}`}>
          <svg className="cap-art__svg" viewBox="0 0 420 210" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="waTealArea" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.48" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <rect width="420" height="210" fill="#071317" />

            {/* Dashboard App Window */}
            <rect x="28" y="0" width="364" height="206" fill="#141920" stroke="#23313a" strokeWidth="1" />

            {/* Left Sidebar */}
            <rect x="28" y="0" width="62" height="206" fill="#0d2127" />
            <line x1="90" y1="0" x2="90" y2="206" stroke="#1b3842" strokeWidth="1" />
            {/* Logo cube */}
            <rect x="52" y="8" width="14" height="14" rx="3" stroke="#14b8a6" strokeWidth="1.2" fill="#09181d" />
            <circle cx="59" cy="15" r="3" fill="#14b8a6" />

            {/* Sidebar menu items */}
            {[
              { label: 'Dashboard', y: 38, active: true },
              { label: 'Data Analytics', y: 54, active: false },
              { label: 'Workflows', y: 70, active: false },
              { label: 'Users', y: 86, active: false },
              { label: 'Reports', y: 102, active: false },
              { label: 'Settings', y: 118, active: false },
            ].map((nav, i) => (
              <g key={i} transform={`translate(34, ${nav.y})`}>
                <circle cx="4" cy="-2" r="2" fill={nav.active ? '#14b8a6' : '#475569'} />
                <text x="10" y="0" fill={nav.active ? '#2dd4bf' : '#94a3b8'} fontSize="4.8" fontWeight={nav.active ? '700' : '500'} fontFamily="sans-serif">
                  {nav.label}
                </text>
              </g>
            ))}

            {/* Top Header */}
            <text x="100" y="16" fill="#ffffff" fontSize="9" fontWeight="700" fontFamily="sans-serif">
              Enterprise Portal
            </text>

            {/* Widget 1: Recent Activities (Top-Left) */}
            <rect x="100" y="26" width="138" height="80" rx="5" fill="#1a2029" stroke="#283240" strokeWidth="0.8" />
            <text x="108" y="38" fill="#e2e8f0" fontSize="5.8" fontWeight="700" fontFamily="sans-serif">
              Recent Activities
            </text>
            {[0, 1, 2, 3, 4].map((r) => (
              <g key={r} transform={`translate(108, ${48 + r * 11})`}>
                <circle cx="2" cy="-2" r="1.5" fill="#14b8a6" />
                <rect x="8" y="-4" width="42" height="3.2" rx="1.5" fill="#475569" />
                <rect x="62" y="-4" width="24" height="3.2" rx="1.5" fill="#334155" />
                <rect x="98" y="-4" width="22" height="3.2" rx="1.5" fill="#14b8a6" fillOpacity="0.35" />
                <line x1="0" y1="3" x2="122" y2="3" stroke="#232c38" strokeWidth="0.6" />
              </g>
            ))}

            {/* Widget 2: Sales Performance (Top-Right) */}
            <rect x="244" y="26" width="138" height="80" rx="5" fill="#1a2029" stroke="#283240" strokeWidth="0.8" />
            <text x="252" y="38" fill="#e2e8f0" fontSize="5.8" fontWeight="700" fontFamily="sans-serif">
              Sales Performance
            </text>
            {/* Area chart */}
            <path
              d="M252,88 L264,78 L276,82 L288,68 L300,73 L312,58 L324,62 L324,94 L252,94 Z"
              fill="url(#waTealArea)"
            />
            <path
              d="M252,88 L264,78 L276,82 L288,68 L300,73 L312,58 L324,62"
              fill="none"
              stroke="#14b8a6"
              strokeWidth="1.6"
            />
            {/* Glowing Donut Chart */}
            <circle cx="354" cy="70" r="15" stroke="#23353d" strokeWidth="5.5" fill="none" />
            <circle
              cx="354"
              cy="70"
              r="15"
              stroke="#06b6d4"
              strokeWidth="5.5"
              strokeDasharray="75 100"
              strokeLinecap="round"
              transform="rotate(-90 354 70)"
              fill="none"
            />

            {/* Widget 3: Project Overview (Bottom-Left) */}
            <rect x="100" y="112" width="138" height="84" rx="5" fill="#1a2029" stroke="#283240" strokeWidth="0.8" />
            <text x="108" y="124" fill="#e2e8f0" fontSize="5.8" fontWeight="700" fontFamily="sans-serif">
              Project Overview
            </text>
            {[0, 1, 2, 3, 4].map((r) => (
              <g key={r} transform={`translate(108, ${135 + r * 11})`}>
                <rect x="0" y="-4" width="38" height="3.2" rx="1.5" fill="#475569" />
                <rect x="48" y="-4" width="36" height="3.2" rx="1.5" fill="#14b8a6" fillOpacity="0.45" />
                <rect x="96" y="-4" width="24" height="3.2" rx="1.5" fill="#334155" />
                <line x1="0" y1="3" x2="122" y2="3" stroke="#232c38" strokeWidth="0.6" />
              </g>
            ))}

            {/* Widget 4a: User Management (Bottom-Right Top) */}
            <rect x="244" y="112" width="138" height="40" rx="5" fill="#1a2029" stroke="#283240" strokeWidth="0.8" />
            <text x="252" y="122" fill="#e2e8f0" fontSize="5.2" fontWeight="700" fontFamily="sans-serif">
              User Management
            </text>
            <circle cx="260" cy="136" r="7" fill="#334155" />
            <circle cx="260" cy="134" r="2.5" fill="#cbd5e1" />
            <path d="M255,141 C255,138 265,138 265,141" fill="#cbd5e1" />
            <rect x="272" y="132" width="36" height="3.5" rx="1.5" fill="#64748b" />
            <rect x="272" y="138" width="24" height="3" rx="1.5" fill="#475569" />
            <rect x="352" y="129" width="20" height="7" rx="3.5" fill="#10b981" />
            <rect x="352" y="139" width="20" height="7" rx="3.5" fill="#ef4444" />

            {/* Widget 4b: Workflow Automation (Bottom-Right Bottom) */}
            <rect x="244" y="156" width="138" height="40" rx="5" fill="#1a2029" stroke="#283240" strokeWidth="0.8" />
            <text x="252" y="166" fill="#e2e8f0" fontSize="5.2" fontWeight="700" fontFamily="sans-serif">
              Workflow Automation
            </text>
            <rect x="254" y="174" width="26" height="11" rx="2.5" fill="#112a30" stroke="#14b8a6" strokeWidth="0.8" />
            <line x1="280" y1="179.5" x2="296" y2="179.5" stroke="#14b8a6" strokeWidth="0.8" />
            <rect x="296" y="174" width="26" height="11" rx="2.5" fill="#112a30" stroke="#14b8a6" strokeWidth="0.8" />
            <line x1="322" y1="179.5" x2="338" y2="179.5" stroke="#14b8a6" strokeWidth="0.8" />
            <rect x="338" y="174" width="26" height="11" rx="2.5" fill="#112a30" stroke="#14b8a6" strokeWidth="0.8" />
          </svg>
        </div>
      )

    case 'multimodal-ai':
    case 'magenta':
    default:
      return (
        <div className={`cap-art cap-art--magenta ${className}`}>
          <svg className="cap-art__svg" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="pinkGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
                <stop offset="40%" stopColor="#8b5cf6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#120419" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="multiGradA" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <linearGradient id="multiGradB" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
            </defs>
            <rect width="400" height="200" fill="#120419" />
            <circle cx="200" cy="100" r="130" fill="url(#pinkGlow)" opacity="0.6" />

            {/* Cross-Modal Flare Beams */}
            <path d="M30,170 Q130,120 200,100 T370,30" stroke="url(#multiGradA)" strokeWidth="3" fill="none" />
            <path d="M30,30 Q130,80 200,100 T370,170" stroke="url(#multiGradB)" strokeWidth="3" fill="none" />
            
            {/* Secondary Harmonic Waves */}
            <path d="M60,100 Q130,40 200,100 T340,100" stroke="#f472b6" strokeWidth="1.5" fill="none" opacity="0.7" />
            <path d="M60,100 Q130,160 200,100 T340,100" stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity="0.7" />

            {/* Fusion Core */}
            <circle cx="200" cy="100" r="16" fill="#ffffff" opacity="0.9" />
            <circle cx="200" cy="100" r="28" stroke="#f472b6" strokeWidth="2" strokeDasharray="6 3" />
            <circle cx="200" cy="100" r="42" stroke="#38bdf8" strokeWidth="1.5" opacity="0.5" />

            {/* Modality Chips Floating */}
            <g fill="#fdf2f8" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">
              <rect x="50" y="45" width="45" height="18" rx="4" fill="rgba(236,72,153,0.3)" stroke="#ec4899" />
              <text x="58" y="58">VISION</text>

              <rect x="305" y="45" width="45" height="18" rx="4" fill="rgba(6,182,212,0.3)" stroke="#06b6d4" />
              <text x="316" y="58">AUDIO</text>

              <rect x="50" y="140" width="45" height="18" rx="4" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" />
              <text x="61" y="153">TEXT</text>

              <rect x="305" y="140" width="48" height="18" rx="4" fill="rgba(244,63,94,0.3)" stroke="#f43f5e" />
              <text x="312" y="153">TABLES</text>
            </g>
          </svg>
        </div>
      )
  }
}
