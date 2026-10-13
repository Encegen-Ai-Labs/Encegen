import fs from 'fs'
import path from 'path'

const outDir = path.resolve('src/assets/generated_panels')
fs.mkdirSync(outDir, { recursive: true })

// 1. live-agent-activity.svg
const liveAgentActivitySvg = `<svg width="540" height="310" viewBox="0 0 540 310" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow1" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#060b27" flood-opacity="0.6"/>
      <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#6366f1" flood-opacity="0.15"/>
    </filter>
    <linearGradient id="bgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0f2e"/>
      <stop offset="100%" stop-color="#060b27"/>
    </linearGradient>
  </defs>

  <rect width="540" height="310" rx="16" fill="url(#bgGrad1)" stroke="rgba(99, 102, 241, 0.32)" stroke-width="1.2" filter="url(#glow1)"/>

  <!-- Top bar -->
  <text x="24" y="38" font-family="'Inter', sans-serif" font-size="12" font-weight="700" letter-spacing="1.2" fill="#818cf8" text-transform="uppercase">LIVE AGENT ACTIVITY</text>
  
  <!-- Live indicator pill -->
  <rect x="444" y="22" width="72" height="24" rx="12" fill="rgba(16, 185, 129, 0.12)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1"/>
  <circle cx="458" cy="34" r="4" fill="#10b981"/>
  <text x="468" y="38" font-family="'Inter', sans-serif" font-size="11" font-weight="700" letter-spacing="0.8" fill="#10b981">LIVE</text>

  <line x1="24" y1="58" x2="516" y2="58" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>

  <!-- Row 1: INV-2847 -->
  <text x="24" y="88" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#ffffff">03:47:00</text>
  <text x="24" y="104" font-family="'Inter', sans-serif" font-size="11" font-weight="500" fill="#94a3b8">Exception detected</text>
  <rect x="424" y="76" width="92" height="26" rx="13" fill="rgba(239, 68, 68, 0.14)" stroke="rgba(239, 68, 68, 0.5)" stroke-width="1"/>
  <text x="470" y="93" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#ef4444" text-anchor="middle">INV-2847</text>

  <!-- Row 2: PO-10293 matched -->
  <text x="24" y="136" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#ffffff">03:47:02</text>
  <text x="24" y="152" font-family="'Inter', sans-serif" font-size="11" font-weight="500" fill="#94a3b8">ERP check</text>
  <rect x="368" y="124" width="148" height="26" rx="13" fill="rgba(46, 224, 142, 0.14)" stroke="rgba(46, 224, 142, 0.5)" stroke-width="1"/>
  <text x="442" y="141" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#2fe08e" text-anchor="middle">PO-10293 matched</text>

  <!-- Row 3: Response received -->
  <text x="24" y="184" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#ffffff">03:47:04</text>
  <text x="24" y="200" font-family="'Inter', sans-serif" font-size="11" font-weight="500" fill="#94a3b8">Vendor query</text>
  <rect x="372" y="172" width="144" height="26" rx="13" fill="rgba(34, 211, 238, 0.14)" stroke="rgba(34, 211, 238, 0.5)" stroke-width="1"/>
  <text x="444" y="189" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#22d3ee" text-anchor="middle">Response received</text>

  <!-- Row 4: No human required -->
  <text x="24" y="232" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#ffffff">03:47:08</text>
  <text x="24" y="248" font-family="'Inter', sans-serif" font-size="11" font-weight="500" fill="#94a3b8">Resolved</text>
  <rect x="374" y="220" width="142" height="26" rx="13" fill="rgba(46, 224, 142, 0.14)" stroke="rgba(46, 224, 142, 0.5)" stroke-width="1"/>
  <text x="445" y="237" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#2fe08e" text-anchor="middle">No human required</text>

  <line x1="24" y1="270" x2="516" y2="270" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>

  <!-- Footer -->
  <text x="24" y="294" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#2fe08e">Resolved in 8 seconds</text>
  <text x="516" y="294" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#2fe08e" text-anchor="end">Autonomy: 100%</text>
</svg>`

fs.writeFileSync(path.join(outDir, 'live-agent-activity.svg'), liveAgentActivitySvg)

// 2. truth-reality-vs-promise.svg
const truthRealitySvg = `<svg width="540" height="320" viewBox="0 0 540 320" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow2" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#060b27" flood-opacity="0.6"/>
      <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#8b5cf6" flood-opacity="0.15"/>
    </filter>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b112c"/>
      <stop offset="100%" stop-color="#060b27"/>
    </linearGradient>
  </defs>

  <rect width="540" height="320" rx="16" fill="url(#bgGrad2)" stroke="rgba(139, 92, 246, 0.32)" stroke-width="1.2" filter="url(#glow2)"/>

  <!-- Top bar -->
  <text x="28" y="38" font-family="'Inter', sans-serif" font-size="13" font-weight="800" letter-spacing="1" fill="#ffffff" text-transform="uppercase">THE TRUTH</text>
  <text x="512" y="38" font-family="'Inter', sans-serif" font-size="12" font-weight="500" fill="#a5b4fc" text-anchor="end">Reality vs. promise</text>

  <line x1="28" y1="56" x2="512" y2="56" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>

  <!-- Columns Header -->
  <text x="28" y="90" font-family="'Inter', sans-serif" font-size="12" font-weight="700" letter-spacing="0.8" fill="#c7d2fe" text-transform="uppercase">THE PROMISE</text>
  <text x="280" y="90" font-family="'Inter', sans-serif" font-size="12" font-weight="700" letter-spacing="0.8" fill="#f87171" text-transform="uppercase">THE REALITY</text>

  <!-- Left col items (Promise) -->
  <g transform="translate(28, 114)">
    <circle cx="8" cy="8" r="8" fill="rgba(46, 224, 142, 0.15)"/>
    <text x="8" y="12" font-family="'Inter', sans-serif" font-size="11" font-weight="bold" fill="#2fe08e" text-anchor="middle">✓</text>
    <text x="24" y="12" font-family="'Inter', sans-serif" font-size="13" font-weight="500" fill="#ffffff">AI that automates everything</text>
  </g>

  <g transform="translate(28, 160)">
    <circle cx="8" cy="8" r="8" fill="rgba(46, 224, 142, 0.15)"/>
    <text x="8" y="12" font-family="'Inter', sans-serif" font-size="11" font-weight="bold" fill="#2fe08e" text-anchor="middle">✓</text>
    <text x="24" y="12" font-family="'Inter', sans-serif" font-size="13" font-weight="500" fill="#ffffff">10x ROI in 30 days</text>
  </g>

  <g transform="translate(28, 206)">
    <circle cx="8" cy="8" r="8" fill="rgba(46, 224, 142, 0.15)"/>
    <text x="8" y="12" font-family="'Inter', sans-serif" font-size="11" font-weight="bold" fill="#2fe08e" text-anchor="middle">✓</text>
    <text x="24" y="12" font-family="'Inter', sans-serif" font-size="13" font-weight="500" fill="#ffffff">Zero integration effort</text>
  </g>

  <!-- Vertical Divider -->
  <line x1="264" y1="74" x2="264" y2="246" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>

  <!-- Right col items (Reality) -->
  <g transform="translate(280, 114)">
    <circle cx="8" cy="8" r="8" fill="rgba(239, 68, 68, 0.15)"/>
    <text x="8" y="12" font-family="'Inter', sans-serif" font-size="11" font-weight="bold" fill="#ef4444" text-anchor="middle">✕</text>
    <text x="24" y="12" font-family="'Inter', sans-serif" font-size="13" font-weight="500" fill="#cbd5e1">Models that break in production</text>
  </g>

  <g transform="translate(280, 160)">
    <circle cx="8" cy="8" r="8" fill="rgba(239, 68, 68, 0.15)"/>
    <text x="8" y="12" font-family="'Inter', sans-serif" font-size="11" font-weight="bold" fill="#ef4444" text-anchor="middle">✕</text>
    <text x="24" y="12" font-family="'Inter', sans-serif" font-size="13" font-weight="500" fill="#cbd5e1">ROI measured in dashboards</text>
  </g>

  <g transform="translate(280, 206)">
    <circle cx="8" cy="8" r="8" fill="rgba(239, 68, 68, 0.15)"/>
    <text x="8" y="12" font-family="'Inter', sans-serif" font-size="11" font-weight="bold" fill="#ef4444" text-anchor="middle">✕</text>
    <text x="24" y="12" font-family="'Inter', sans-serif" font-size="13" font-weight="500" fill="#cbd5e1">Months of "integration" work</text>
  </g>

  <line x1="28" y1="264" x2="512" y2="264" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>

  <!-- Bottom note -->
  <text x="28" y="292" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#a78bfa">● Closing the gap between AI hype and real operational execution</text>
</svg>`

fs.writeFileSync(path.join(outDir, 'truth-reality-vs-promise.svg'), truthRealitySvg)

// 3. ai-deployment-status.svg
const aiDeploymentSvg = `<svg width="540" height="420" viewBox="0 0 540 420" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow3" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#060b27" flood-opacity="0.6"/>
      <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#6366f1" flood-opacity="0.15"/>
    </filter>
    <linearGradient id="bgGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0f2e"/>
      <stop offset="100%" stop-color="#060b27"/>
    </linearGradient>
  </defs>

  <rect width="540" height="420" rx="16" fill="url(#bgGrad3)" stroke="rgba(99, 102, 241, 0.3)" stroke-width="1.2" filter="url(#glow3)"/>

  <!-- Header -->
  <text x="26" y="38" font-family="'Inter', sans-serif" font-size="13" font-weight="800" fill="#ffffff">AI Deployment Status</text>
  <rect x="446" y="22" width="68" height="24" rx="12" fill="rgba(16, 185, 129, 0.12)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1"/>
  <circle cx="458" cy="34" r="3.5" fill="#10b981"/>
  <text x="468" y="38" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#10b981">Live</text>

  <line x1="26" y1="56" x2="514" y2="56" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>

  <!-- 8 Engines Table -->
  ${[
    { name: 'Anomaly Detection', status: 'Active', statusColor: '#60a5fa', metric: '99.2% accuracy' },
    { name: 'Forecasting Engine', status: 'Live', statusColor: '#34d399', metric: '14ms latency' },
    { name: 'Compliance Monitor', status: 'Running', statusColor: '#a78bfa', metric: '0 violations' },
    { name: 'Document Intelligence', status: 'Active', statusColor: '#60a5fa', metric: '847 docs/day' },
    { name: 'Risk Scoring Engine', status: 'Live', statusColor: '#34d399', metric: '2.3ms response' },
    { name: 'Supplier Validation', status: 'Running', statusColor: '#a78bfa', metric: '12,400 vendors' },
    { name: 'Data Reconciliation', status: 'Active', statusColor: '#60a5fa', metric: '99.98% match' },
    { name: 'NLP Classification', status: 'Live', statusColor: '#34d399', metric: '94.7% confidence' },
  ].map((row, i) => {
    const y = 84 + (i * 35);
    return `
      <g>
        <text x="26" y="${y}" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#ffffff">${row.name}</text>
        <rect x="270" y="${y - 14}" width="64" height="20" rx="10" fill="${row.statusColor}22" stroke="${row.statusColor}66" stroke-width="1"/>
        <text x="302" y="${y}" font-family="'Inter', sans-serif" font-size="10" font-weight="700" fill="${row.statusColor}" text-anchor="middle">${row.status}</text>
        <text x="514" y="${y}" font-family="'Inter', sans-serif" font-size="12" font-weight="500" fill="#94a3b8" text-anchor="end">${row.metric}</text>
        ${i < 7 ? `<line x1="26" y1="${y + 16}" x2="514" y2="${y + 16}" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>` : ''}
      </g>
    `;
  }).join('')}

  <line x1="26" y1="368" x2="514" y2="368" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>

  <!-- Footer -->
  <circle cx="34" cy="392" r="3.5" fill="#10b981"/>
  <text x="44" y="396" font-family="'Inter', sans-serif" font-size="11" font-weight="600" fill="#10b981">99.9% uptime · All systems operational</text>
  <text x="514" y="396" font-family="'Inter', sans-serif" font-size="11" font-weight="500" fill="#64748b" text-anchor="end">Updated just now</text>
</svg>`

fs.writeFileSync(path.join(outDir, 'ai-deployment-status.svg'), aiDeploymentSvg)

// 4. typical-vs-encegen-project.svg
const typicalVsEncegenSvg = `<svg width="540" height="360" viewBox="0 0 540 360" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow4" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#060b27" flood-opacity="0.6"/>
      <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#6366f1" flood-opacity="0.15"/>
    </filter>
    <linearGradient id="bgGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0f2e"/>
      <stop offset="100%" stop-color="#060b27"/>
    </linearGradient>
  </defs>

  <rect width="540" height="360" rx="16" fill="url(#bgGrad4)" stroke="rgba(99, 102, 241, 0.3)" stroke-width="1.2" filter="url(#glow4)"/>

  <!-- Top bar -->
  <circle cx="34" cy="38" r="3" fill="#f87171"/>
  <text x="44" y="42" font-family="'Inter', sans-serif" font-size="11" font-weight="700" letter-spacing="1" fill="#f87171" text-transform="uppercase">TYPICAL AI PROJECT</text>
  
  <text x="496" y="42" font-family="'Inter', sans-serif" font-size="11" font-weight="700" letter-spacing="1" fill="#34d399" text-transform="uppercase" text-anchor="end">WITH ENCEGEN</text>
  <circle cx="506" cy="38" r="3" fill="#34d399"/>

  <line x1="26" y1="62" x2="514" y2="62" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>

  <!-- Row 1: Time to Deploy -->
  <text x="26" y="104" font-family="'Inter', sans-serif" font-size="20" font-weight="800" fill="#f87171">12 mo</text>
  <rect x="26" y="114" width="160" height="4" rx="2" fill="#f87171"/>
  <text x="270" y="112" font-family="'Inter', sans-serif" font-size="11" font-weight="500" fill="#94a3b8" text-anchor="middle">Time to Deploy</text>
  <text x="514" y="104" font-family="'Inter', sans-serif" font-size="20" font-weight="800" fill="#34d399" text-anchor="end">3 wks</text>
  <rect x="424" y="114" width="90" height="4" rx="2" fill="#34d399"/>

  <!-- Row 2: Total Cost -->
  <text x="26" y="164" font-family="'Inter', sans-serif" font-size="20" font-weight="800" fill="#f87171">$2.4M</text>
  <rect x="26" y="174" width="180" height="4" rx="2" fill="#f87171"/>
  <text x="270" y="172" font-family="'Inter', sans-serif" font-size="11" font-weight="500" fill="#94a3b8" text-anchor="middle">Total Cost</text>
  <text x="514" y="164" font-family="'Inter', sans-serif" font-size="20" font-weight="800" fill="#34d399" text-anchor="end">$180K</text>
  <rect x="444" y="174" width="70" height="4" rx="2" fill="#34d399"/>

  <!-- Row 3: User Adoption -->
  <text x="26" y="224" font-family="'Inter', sans-serif" font-size="20" font-weight="800" fill="#f87171">3%</text>
  <rect x="26" y="234" width="50" height="4" rx="2" fill="#f87171"/>
  <text x="270" y="232" font-family="'Inter', sans-serif" font-size="11" font-weight="500" fill="#94a3b8" text-anchor="middle">User Adoption</text>
  <text x="514" y="224" font-family="'Inter', sans-serif" font-size="20" font-weight="800" fill="#34d399" text-anchor="end">74%</text>
  <rect x="364" y="234" width="150" height="4" rx="2" fill="#34d399"/>

  <!-- Row 4: Time to Value -->
  <text x="26" y="284" font-family="'Inter', sans-serif" font-size="20" font-weight="800" fill="#f87171">18 mo</text>
  <rect x="26" y="294" width="170" height="4" rx="2" fill="#f87171"/>
  <text x="270" y="292" font-family="'Inter', sans-serif" font-size="11" font-weight="500" fill="#94a3b8" text-anchor="middle">Time to Value</text>
  <text x="514" y="284" font-family="'Inter', sans-serif" font-size="20" font-weight="800" fill="#34d399" text-anchor="end">&lt; 30 days</text>
  <rect x="414" y="294" width="100" height="4" rx="2" fill="#34d399"/>

  <line x1="26" y1="324" x2="514" y2="324" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>

  <!-- Footer -->
  <text x="270" y="344" font-family="'Inter', sans-serif" font-size="11" font-weight="400" fill="#64748b" text-anchor="middle">* Based on average enterprise AI deployments, 2020–2024</text>
</svg>`

fs.writeFileSync(path.join(outDir, 'typical-vs-encegen-project.svg'), typicalVsEncegenSvg)

// 5. traditional-vs-encegen-ai.svg
const traditionalVsEncegenSvg = `<svg width="540" height="340" viewBox="0 0 540 340" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow5" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#060b27" flood-opacity="0.6"/>
      <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#6366f1" flood-opacity="0.15"/>
    </filter>
    <linearGradient id="bgGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b112c"/>
      <stop offset="100%" stop-color="#060b27"/>
    </linearGradient>
  </defs>

  <rect width="540" height="340" rx="16" fill="url(#bgGrad5)" stroke="rgba(99, 102, 241, 0.3)" stroke-width="1.2" filter="url(#glow5)"/>

  <!-- Top bar -->
  <text x="28" y="36" font-family="'Inter', sans-serif" font-size="12" font-weight="700" letter-spacing="1" fill="#94a3b8" text-transform="uppercase">TRADITIONAL AI</text>
  <text x="512" y="36" font-family="'Inter', sans-serif" font-size="12" font-weight="700" letter-spacing="1" fill="#a78bfa" text-transform="uppercase" text-anchor="end">ENCEGEN AI</text>

  <line x1="28" y1="52" x2="512" y2="52" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>

  <!-- Item 1: Manual hand-off -->
  <circle cx="40" cy="80" r="8" fill="rgba(239, 68, 68, 0.15)"/>
  <text x="40" y="84" font-family="'Inter', sans-serif" font-size="11" font-weight="bold" fill="#ef4444" text-anchor="middle">✕</text>
  <text x="58" y="84" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#ef4444">Manual hand-off required</text>
  <text x="58" y="100" font-family="'Inter', sans-serif" font-size="11" font-weight="500" fill="#64748b">Insights sit in dashboards, never reach actual transactional systems</text>

  <!-- Item 2: Manual triage -->
  <circle cx="40" cy="135" r="8" fill="rgba(239, 68, 68, 0.15)"/>
  <text x="40" y="139" font-family="'Inter', sans-serif" font-size="11" font-weight="bold" fill="#ef4444" text-anchor="middle">✕</text>
  <text x="58" y="139" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#ef4444">Manual triage</text>
  <text x="58" y="155" font-family="'Inter', sans-serif" font-size="11" font-weight="500" fill="#64748b">Alerts trigger, teams investigate anomalies manually over hours</text>

  <!-- Item 3: Post-mortem analysis -->
  <circle cx="40" cy="190" r="8" fill="rgba(239, 68, 68, 0.15)"/>
  <text x="40" y="194" font-family="'Inter', sans-serif" font-size="11" font-weight="bold" fill="#ef4444" text-anchor="middle">✕</text>
  <text x="58" y="194" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#ef4444">Post-mortem analysis</text>
  <text x="58" y="210" font-family="'Inter', sans-serif" font-size="11" font-weight="500" fill="#64748b">Root cause found days after the operational damage is already done</text>

  <line x1="28" y1="230" x2="512" y2="230" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>

  <!-- Encegen Active Resolution -->
  <rect x="28" y="244" width="484" height="72" rx="12" fill="rgba(46, 224, 142, 0.08)" stroke="rgba(46, 224, 142, 0.35)" stroke-width="1"/>
  <circle cx="50" cy="272" r="9" fill="rgba(46, 224, 142, 0.2)"/>
  <text x="50" y="276" font-family="'Inter', sans-serif" font-size="12" font-weight="bold" fill="#2fe08e" text-anchor="middle">✓</text>
  <text x="70" y="270" font-family="'Inter', sans-serif" font-size="14" font-weight="700" fill="#2fe08e">Continuously proactive</text>
  <text x="70" y="288" font-family="'Inter', sans-serif" font-size="12" font-weight="500" fill="#ffffff">Prevents issues before they impact business transactions</text>

  <rect x="368" y="260" width="130" height="24" rx="12" fill="rgba(99, 102, 241, 0.2)" stroke="rgba(99, 102, 241, 0.5)" stroke-width="1"/>
  <text x="433" y="276" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#a5b4fc" text-anchor="middle">Process impact: High</text>
</svg>`

fs.writeFileSync(path.join(outDir, 'traditional-vs-encegen-ai.svg'), traditionalVsEncegenSvg)

// 6. easyhunt-property-profile.svg
const easyhuntPropertySvg = `<svg width="540" height="330" viewBox="0 0 540 330" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="glow6" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#060b27" flood-opacity="0.6"/>
      <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#6366f1" flood-opacity="0.15"/>
    </filter>
    <linearGradient id="bgGrad6" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0f2e"/>
      <stop offset="100%" stop-color="#060b27"/>
    </linearGradient>
  </defs>

  <rect width="540" height="330" rx="16" fill="url(#bgGrad6)" stroke="rgba(99, 102, 241, 0.3)" stroke-width="1.2" filter="url(#glow6)"/>

  <!-- Header -->
  <text x="26" y="38" font-family="'Inter', sans-serif" font-size="13" font-weight="800" fill="#ffffff">AI Property Profile</text>
  <rect x="382" y="22" width="132" height="24" rx="12" fill="rgba(16, 185, 129, 0.12)" stroke="rgba(16, 185, 129, 0.4)" stroke-width="1"/>
  <circle cx="394" cy="34" r="3.5" fill="#10b981"/>
  <text x="404" y="38" font-family="'Inter', sans-serif" font-size="11" font-weight="700" fill="#10b981">98% Match · Verified</text>

  <line x1="26" y1="56" x2="514" y2="56" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>

  <!-- Property & Owner -->
  <text x="26" y="84" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#818cf8">SURVEY NO. 104/A · PUNE METRO REGION</text>
  <text x="26" y="106" font-family="'Inter', sans-serif" font-size="16" font-weight="800" fill="#ffffff">Godrej Properties Development Site</text>

  <!-- Ownership History Timeline -->
  <text x="26" y="142" font-family="'Inter', sans-serif" font-size="11" font-weight="700" letter-spacing="0.8" fill="#94a3b8" text-transform="uppercase">OWNERSHIP HISTORY TIMELINE</text>

  <g transform="translate(26, 158)">
    <circle cx="6" cy="6" r="6" fill="#10b981"/>
    <text x="22" y="10" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ffffff">2024</text>
    <text x="64" y="10" font-family="'Inter', sans-serif" font-size="12" font-weight="500" fill="#94a3b8">· Clear Title Certified (Zero Encumbrances)</text>

    <line x1="6" y1="18" x2="6" y2="34" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1.5" stroke-dasharray="2 2"/>

    <circle cx="6" cy="42" r="5" fill="#60a5fa"/>
    <text x="22" y="46" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ffffff">2018</text>
    <text x="64" y="46" font-family="'Inter', sans-serif" font-size="12" font-weight="500" fill="#94a3b8">· Conveyance Deed Registered with Haveli SRO</text>

    <line x1="6" y1="54" x2="6" y2="70" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1.5" stroke-dasharray="2 2"/>

    <circle cx="6" cy="78" r="4" fill="#a78bfa"/>
    <text x="22" y="82" font-family="'Inter', sans-serif" font-size="12" font-weight="700" fill="#ffffff">1995</text>
    <text x="64" y="82" font-family="'Inter', sans-serif" font-size="12" font-weight="500" fill="#94a3b8">· Original Revenue Grant &amp; Mutation Entry 4182</text>
  </g>

  <line x1="26" y1="268" x2="514" y2="268" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>

  <!-- Risk Bar -->
  <text x="26" y="296" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#10b981">Risk Assessment: Low Risk (0.02%)</text>
  <text x="514" y="296" font-family="'Inter', sans-serif" font-size="11" font-weight="500" fill="#a5b4fc" text-anchor="end">Instant 40-Year Legal Verification</text>
</svg>`

fs.writeFileSync(path.join(outDir, 'easyhunt-property-profile.svg'), easyhuntPropertySvg)

console.log('Successfully generated all 6 panel SVGs in', outDir)
