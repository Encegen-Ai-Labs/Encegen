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
