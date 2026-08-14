# Encegen Website — Content Inventory & Gap Tracker

Read-only content audit of the front-end. Covers every route in [App.tsx](src/App.tsx), the shared Navbar/Footer, and every page component. Content is recorded verbatim in reading order; design/behavior (colors, spacing, animation, carousel behavior) is intentionally excluded. Data-array-sourced content is traced to its source file and the actual values are listed (never collapsed).

---

## Routing map

| Route | File |
|---|---|
| `/` | [src/pages/Home.tsx](src/pages/Home.tsx) |
| `/platform` | [src/pages/Platform.tsx](src/pages/Platform.tsx) |
| `/solutions/ai-agents` | [src/pages/solutions/AiAgents.tsx](src/pages/solutions/AiAgents.tsx) |
| `/solutions/ai-research` | [src/pages/solutions/AiResearch.tsx](src/pages/solutions/AiResearch.tsx) |
| `/solutions/custom-software` | [src/pages/solutions/CustomSoftware.tsx](src/pages/solutions/CustomSoftware.tsx) |
| `/solutions/digital-marketing` | [src/pages/solutions/DigitalMarketing.tsx](src/pages/solutions/DigitalMarketing.tsx) |
| `/solutions/web-ecommerce` | [src/pages/solutions/WebEcommerce.tsx](src/pages/solutions/WebEcommerce.tsx) |
| `/solutions/use-cases` | [src/pages/solutions/UseCases.tsx](src/pages/solutions/UseCases.tsx) |
| `/products/easy-hunt` | [src/pages/products/EasyHunt.tsx](src/pages/products/EasyHunt.tsx) |
| `/products/hr-portal` | [src/pages/products/HrPortal.tsx](src/pages/products/HrPortal.tsx) |
| `/about` | [src/pages/company/About.tsx](src/pages/company/About.tsx) |
| `/our-story` | [src/pages/company/OurStory.tsx](src/pages/company/OurStory.tsx) |
| `/values` | [src/pages/company/Values.tsx](src/pages/company/Values.tsx) |
| `/culture` | [src/pages/company/Culture.tsx](src/pages/company/Culture.tsx) |
| `/careers` | [src/pages/careers/Careers.tsx](src/pages/careers/Careers.tsx) |
| `/careers/why-encegen` | [src/pages/careers/WhyEncegen.tsx](src/pages/careers/WhyEncegen.tsx) |
| `/careers/:slug` | [src/pages/careers/JobDetail.tsx](src/pages/careers/JobDetail.tsx) (data from [src/data/jobs.ts](src/data/jobs.ts)) |
| `/insights` | [src/pages/Insights.tsx](src/pages/Insights.tsx) |
| `/resources` | [src/pages/Resources.tsx](src/pages/Resources.tsx) |
| `/search` | [src/pages/SearchPage.tsx](src/pages/SearchPage.tsx) |
| `*` (wildcard/404) | Renders `Home` — **there is no dedicated 404 page**; any unmatched URL silently shows the homepage. |

Shared on every route via `Layout` in [App.tsx](src/App.tsx): **Navbar**, **Footer**. (`ScrollFX` and `ScrollToTop` are behavioral only, not content.)

---

## Shared components

### Navbar — [src/components/Navbar.tsx](src/components/Navbar.tsx)

- **Logo** (see Logo component below), linking to `#` (hardcoded, not `/`).
- **Primary nav items** (hardcoded array `NAV`):
  - "Solutions" (mega menu)
    - Featured tile: "Success stories" → `/insights`
    - Column "By Transformation": "AI Agents & Automation" → `/solutions/ai-agents`; "AI Research Solutions" → `/solutions/ai-research`; "Custom Software Dev" → `/solutions/custom-software`; "All transformations" → `/solutions/use-cases`
    - Column "By Function": "Digital Marketing & Growth" → `/solutions/digital-marketing`; "Website & Ecommerce Dev" → `/solutions/web-ecommerce`; "Process Excellence" → `/platform`; "All functions" → `/solutions/use-cases`
    - Column "By Industry": "Manufacturing" → `/solutions/use-cases`; "Financial Services" → `/solutions/use-cases`; "Healthcare" → `/solutions/use-cases`; "All industries" → `/solutions/use-cases`
  - "Resources" → `/resources`
  - "Products" (mega menu)
    - Featured tile: "The Encegen Platform" → `/platform`
    - Column "Platform": "Process Mining" → `/platform`; "Execution Management" → `/platform`; "AI Insights" → `/platform`; "Explore the platform" → `/platform`
    - Column "Products": "Easy Hunt" → `/products/easy-hunt`; "HR Portal" → `/products/hr-portal`; "CBMS" → `/platform`; "HMS" → `/platform`
  - "Insights" → `/insights`
  - "Company" (mega menu)
    - Featured tile: "Life at Encegen" → `/careers/why-encegen`
    - Column "Who We Are": "About Us" → `/about`; "Our Story" → `/our-story`
    - Column "How We Work": "Our Values" → `/values`; "Our Culture" → `/culture`
    - Column "Join Us": "Careers" → `/careers`; "Why Encegen" → `/careers/why-encegen`; "All open roles" → `/careers`
- **Search icon link** → `/search`
- **"Get a demo" button** — `href="#"` (dead link)

### Footer — [src/components/Footer.tsx](src/components/Footer.tsx)

- **Logo** (light variant) + tagline copy: "AI-powered solutions for the modern enterprise. Transforming businesses with intelligent automation and research."
- **Column "Solutions"**: AI Agents & Automation → `/solutions/ai-agents`; AI Research Solutions → `/solutions/ai-research`; Custom Software Dev → `/solutions/custom-software`; Digital Marketing & Growth → `/solutions/digital-marketing`; Website & Ecommerce Dev → `/solutions/web-ecommerce`; Use Cases & Industries → `/solutions/use-cases`
- **Column "Products"**: Easy Hunt → `/products/easy-hunt`; HR Portal → `/products/hr-portal`; CBMS → `/platform`; HMS → `/platform`
- **Column "Resources"**: Insights → `/insights`; Case Studies → `/insights`; Knowledge Hub → `/resources`; Research Papers → `/resources`; Documentation → `/resources`
- **Column "Company"**: About Us → `/about`; Careers → `/careers`; Our Values → `/values`; Our Culture → `/culture`
- **Copyright text**: "© 2025 Encegen SE. All rights reserved."
- **Social icons**: LinkedIn (`href="#"`), X/Twitter (`href="#"`), YouTube (`href="#"`) — all dead links
- **Legal links**: "Privacy Policy", "Terms of Use", "Cookie Settings" — all `href="#"` (dead links, no actual policy pages)

### Logo — [src/components/Logo.tsx](src/components/Logo.tsx)

- Wordmark text: "encegen"
- Tagline text: "Ai Labs Pvt Ltd"
- Wraps in an `<a href="#">` (dead link — doesn't even route home)

### kit.tsx reusable content-bearing components — [src/components/kit.tsx](src/components/kit.tsx)

These are structural templates whose actual text comes from each page (documented per-page below). Slot shapes to note for the gap tracker:
- `Btn` — button/link label + destination (`to`); defaults `to="#"` when unset.
- `PageHero` — badge text, title, subtitle, action buttons, "trusted by" label + logo-name pills.
- `GradBand` — either stat tiles (value+label) or a quote+citation.
- `SectionHead` — eyebrow, title, subtitle.
- `StepFlow` — numbered step: number, title, meta, description, chips.
- `ResultBar` — left statement text, chips, optional action button.
- `UseCaseCard` — tags, title, description, metric, optional comparison string.
- `TestimonialCard` — tag, quote, initials, name, role, metric.
- `ClosingCTA` — trusted-by pills+label, two-line heading, subtitle, primary/secondary button, checklist items.
- `MockPanel` — title, optional right-side label, rows (label/sub/value/chip), footer text. (Decorative dashboard mockups — content is fabricated illustrative data, flagged below where used.)
- `Avatar` — initials text only (no real photos anywhere on the site — every person is represented by two-letter initials on a colored circle).

---

## Home — `/` — [src/pages/Home.tsx](src/pages/Home.tsx)

1. **PageHero**
   - Badge: "Process Intelligence Platform"
   - Title: "Turn Every Process Into a Competitive Advantage"
   - Subtitle: "Encegen gives you the x-ray vision to see, fix, and optimize every business process – in real time, at global scale."
   - Primary button: "Start for free →" → `/platform`
   - Secondary button: "Watch demo" → `#` (dead link, no video wired up)
   - Trusted label: "5,000+ enterprise customers worldwide" (trusted logo pills array passed empty — label renders with no pills)
   - Hero visual stat chip: "Confidence" / "94.2%"
   - Hero visual stat chip: "AI Recommendations" / "Live"
2. **Logo marquee** — label: "Trusted by the world's leading companies"; scrolling logos (text-only, `LOGOS` array): IBM, Airbus, Uber, Siemens, Vodafone, Celanese, Coca-Cola, Wipro
3. **About section**
   - Eyebrow: "About Encegen AI Labs"
   - Heading: "We believe every great business runs on great processes."
   - Body copy: "Encegen AI Labs builds process intelligence technology that gives enterprise teams real-time visibility into how their operations actually run — not how they think they run. Founded by a team of AI researchers and enterprise operators, we are on a mission to make every business process transparent, measurable, and continuously improving."
   - Fact cards (`FACTS` array):
     - "2019" / "Founded" / "Built from enterprise AI research"
     - "3,500+" / "Team" / "Engineers, scientists & operators"
     - "30+" / "Global offices" / "Across North America, Europe & APAC"
4. **Capabilities section** — Eyebrow: "Capabilities"; Title: "Everything you need to achieve process excellence"; cards (`CAPABILITIES` array):
   - "Real-Time Process Mining" — "Discover and visualize every process variant as it actually runs, not how you think it runs."
   - "AI-Powered Recommendations" — "Surface the highest-value improvement opportunities across your entire operation."
   - "Execution Engine" — "Automate fixes and embed intelligence directly into SAP, Salesforce, and ServiceNow."
5. **Platform section**
   - Eyebrow: "The Encegen Platform"
   - Heading: "One platform. Every process. Unlimited potential."
   - Body: "From procurement to order-to-cash, Encegen connects every part of your business into a single, living process intelligence layer."
   - Checklist: "EMS (Execution Management System)"; "Process Analytics & Mining"; "Action Flows & Automation"; "Live Connected Data"
   - Button: "Explore platform" → `/platform`
   - Visual chips: "99.8%", "1.2M", "150ms" (unlabeled fabricated stats)
6. **Industries section**
   - Eyebrow: "Solutions for every industry"
   - Title: "Your Industry. Your Processes. Our Platform."
   - Subtitle: "From finance to manufacturing, Encegen is deployed across 70+ industries to deliver measurable, real-world results."
   - Industry cards (`INDUSTRIES` array), each with a link "Explore solution →" to `/solutions/use-cases`:
     - "Manufacturing" — "Optimize production cycles and supply chain resilience."
     - "Financial Services" — "Streamline risk management and order-to-cash workflows."
     - "Retail" — "Enhance inventory turnover and omnichannel experiences."
     - "Healthcare" — "Improve patient throughput and billing accuracy."
     - "Utilities" — "Manage grid operations and customer service processes."
     - "Automotive" — "Accelerate time-to-market for next-gen vehicle production."
   - CTA button: "See all 70+ industry solutions →" → `/solutions/use-cases`
7. **Stats band** (`STATS` array): "5,000+" Enterprise customers; "$2.4T" Business value delivered; "98%" Customer satisfaction; "300%" Avg. ROI within 12 months
8. **Customer stories section** — Eyebrow: "Customer Stories"; Title: "Trusted by the brands that run the world"; Subtitle: "Trusted by the world's leading enterprises." Testimonial cards (`STORIES` array):
   - Tag "Siemens" — quote: "Encegen gave us end-to-end visibility we never thought possible - transforming how we run global operations." — Anna Müller, VP Supply Chain, Siemens AG — metric: "90% fewer invoice exceptions"
   - Tag "Uber" — quote: "The AI recommendations were actionable from day one. Finance closes the books 5 days faster every single month." — James Park, Head of Finance Ops, Uber — metric: "40% faster invoice processing"
   - Tag "Airbus" — quote: "Process intelligence is now central to our digital transformation - deployed across 14 countries." — Marie Dubois, Chief Digital Officer, Airbus — metric: "94% process compliance"
9. **Resources section** — Heading: "Learn from the experts"; link "View all resources →" → `/resources`. Cards (`RESOURCES` array):
   - Tag "Research" — "The 2026 Process Intelligence Report" — meta: "8 min read"
   - Tag "Masterclass" — "AI at Scale: A CEO Masterclass" — meta: "Available On-Demand"
   - Tag "Technical Paper" — "Download the EMS technical paper" — meta: "Download PDF"
   - (Cards render no working link/href — clicking them does nothing)

---

## Platform — `/platform` — [src/pages/Platform.tsx](src/pages/Platform.tsx)

Composed of components in this order: Hero, HowItWorks, Modules, Process, Integrations, StatsBar, Security, CTA.

### Hero — [src/components/Hero.tsx](src/components/Hero.tsx)
- Badge: "THE ENCEGEN PLATFORM"
- Title: "One Platform to Run Every Business Process"
- Subtitle: "Encegen connects your data, processes, and systems into a single intelligent layer – giving every team the clarity to act."
- CTA link: "Explore the platform" → `href="#"` (dead link)
- CTA link: "Watch a 3-min demo" → `href="#"` (dead link)
- Trust badges (`TRUST_BADGES` array): 🔒 "SOC 2 Certified"; 🌍 "Global Scale"; ⚡ "Real-Time"

### HowItWorks — [src/components/HowItWorks.tsx](src/components/HowItWorks.tsx)
- Eyebrow: "How It Works"
- Title: "Three layers. One unified platform."
- Subtitle: "Connect data, analyze processes, and trigger actions – all from a single, scalable architecture."
- **Data Layer** panel — label "Data Layer"; live indicator text "Live Data"; connected-system chips (`DATA_SOURCES`): SAP, Salesforce, Oracle, Snowflake, ServiceNow, Custom APIs
- **Process Intelligence Engine** panel — label "Process Intelligence Engine"; tag "Mining"
  - Feature list: "AI Process Mining" — "Real-time variant detection"; "Root Cause Analysis" — "ML-powered diagnostics"; mini-label "Map Variants"
  - Mining graph caption: "AI ANALYSIS IN PROGRESS"
  - Feature list: mini-label "Simulation"; "Predict outcomes"; "Recommend actions"
  - Confidence donut: "94%" / "CONFIDENCE" (fabricated illustrative stat)
- **Action Layer** panel — label "Action Layer"; live indicator "Actions Live"; action tiles (`ACTIONS`): "ERP Systems" / "AUTO-EXECUTE"; "Automation" / "TRIGGER FLOWS"; "Dashboards" / "LIVE UPDATE"; "Notifications" / "ALERT TEAMS"

### Modules — [src/components/Modules.tsx](src/components/Modules.tsx)
- Eyebrow: "Platform Modules"
- Title: "Everything you need, fully integrated."
- Subtitle: "Deploy specialized tools that work together to solve complex process problems."
- Module cards (`MODULES` array), each with a "Learn more →" link to `href="#"` (all dead):
  - "Process Mining" — "Automatically map every process variant from your system data in real time."
  - "Execution Management" — "Orchestrate actions across your enterprise from a single control plane."
  - "AI Insights" — "Surface root causes and opportunities with AI-driven process analysis."
  - "Action Flows" — "Trigger automated fixes directly inside SAP, Salesforce, and ServiceNow."
  - "Studio" — "Build custom process apps and dashboards with a no-code visual editor."
  - "Data Push API" — "Connect any data source with pre-built connectors and open APIs."

### Process — [src/components/Process.tsx](src/components/Process.tsx)
- Eyebrow: "The Process"
- Title: "From raw data to real action in three steps."
- Steps (`STEPS` array):
  - "01" — "Connect Your Data" — "Plug Encegen into your existing systems - SAP, Salesforce, Oracle and more - in days, not months."
  - "02" — "Discover Process Reality" — "AI automatically maps, mines, and analyzes every process variant across your entire operation."
  - "03" — "Act and Optimize" — "Push AI-guided recommendations directly back into your systems and automate fixes at scale."

### Integrations — [src/components/Integrations.tsx](src/components/Integrations.tsx)
- Title: "Works with the tools your teams already use."
- Subtitle: "Encegen is built on open standards to integrate seamlessly with your existing IT infrastructure."
- Integration pills (`INTEGRATIONS` array): SAP, Salesforce, ServiceNow, Oracle, Microsoft, Workday, Coupa, Snowflake, Databricks, Google Cloud, AWS, Slack
- Link: "See all 200+ integrations →" → `href="#"` (dead link; also "200+" is an unverified claim vs. the 12 pills actually listed)

### StatsBar — [src/components/StatsBar.tsx](src/components/StatsBar.tsx)
- Stats (`STATS` array): "<1 Day" Average time to first insight; "99.9%" Platform uptime SLA; "200+" Pre-built connectors; "10B+" Events processed daily

### Security — [src/components/Security.tsx](src/components/Security.tsx)
- Eyebrow: "Security & Compliance"
- Title: "Enterprise-grade security, built in from day one."
- Subtitle: "Protect your data and operations with robust controls and independent audits."
- Cards (`CARDS` array): "SOC 2 Type II" — "Independently audited and certified annually."; "GDPR Compliant" — "Full data residency and processing controls."; "SSO & MFA" — "Identity provider integrations with OKTA, Azure AD."; "Role-Based Access" — "Granular permissions across teams and data."
- Badge pills (`BADGES`): SOC2, ISO27001, GDPR, HIPAA, FedRAMP, CSA (last one rendered visually muted, implying "not yet certified" — no certificates/evidence linked for any of them)

### CTA — [src/components/CTA.tsx](src/components/CTA.tsx)
- Title: "Ready to transform your operations?"
- Subtitle: "Join 5,000+ enterprises running smarter with Encegen."
- Button: "Get a personalized demo" → `href="#"` (dead link)
- Button: "Start free trial" → `href="#"` (dead link)

---

## Solutions → AI Agents — `/solutions/ai-agents` — [src/pages/solutions/AiAgents.tsx](src/pages/solutions/AiAgents.tsx)

1. **PageHero** — Badge: "● Encegen AI Labs · Agent Automation"; Title: "Your team is stuck doing work a machine should do."; Sub: "Every day, thousands of process exceptions pile up. Your best people are buried in manual reviews, chasing approvals, copy-pasting between systems – when they could be solving real problems."; Buttons: "See how AI agents fix this →" (`#`, dead), "Watch the demo" (`#`, dead); Trusted pills: IBM, Siemens, Vodafone, Airbus, Wipro
2. **GradBand quote**: "But what if every exception resolved itself?"
3. **Turning-point section** — Eyebrow "Chapter 2 · The Turning Point"; Title "Imagine waking up and finding everything already done."
   - Body: "At 3:47am, an invoice arrives with a discrepancy. In the old world: it sits in a queue until morning. Someone manually reviews it, emails the vendor, waits for a reply."
   - Body: "With Encegen AI Agents: the exception is caught in milliseconds. The agent cross-references your ERP, checks the purchase order, queries the vendor system, reconciles the discrepancy – and resolves it. All before your team's first coffee."
   - Chips: "3:47am — exception detected"; "3:47am — resolved autonomously"; "87% of all exceptions resolved this way"
   - MockPanel "Live Agent Activity" (illustrative/fabricated log): 03:47:00 Exception detected / INV-2847; 03:47:02 ERP check / PO-10293 matched; 03:47:04 Vendor query / Response received; 03:47:08 Resolved / No human required. Footer: "Resolved in 8 seconds"; "Autonomy: 100%"
4. **"Meet the team" section** — Eyebrow "Chapter 3 · The Team"; Title "Meet your new team. They never sleep, never miss, never quit."; Sub "6 specialized AI agents, each trained for a specific mission in your operations." Agent cards (`AGENTS`):
   - "AP Exception Agent" — "Resolves every AP exception before your team sees it." — tag "Finance"
   - "Invoice Matching" — "Matches invoices 3-way across any ERP, automatically." — tag "AP"
   - "Onboarding Agent" — "Gets new hires fully set up across HR, IT and facilities." — tag "HR"
   - "Support Ticket Agent" — "Reads, categorizes, routes and resolves support tickets." — tag "Support"
   - "Compliance Monitor" — "Watches every transaction for violations before they happen." — tag "Compliance"
   - "Demand Planning" — "Reads market signals and adjusts inventory forecasts daily." — tag "Planning"
5. **Use cases section** — Eyebrow "Use Cases"; Title "AI solving the problems that matter." Cards (`USE_CASES`):
   - "Accounts Payable" (tags NLP, Finance) — "Auto-resolve invoice exceptions before they escalate – reconcile discrepancies, validate vendors, and route approvals." — metric "73% fewer exceptions" — compare "Manual: 17% → AI: 73%"
   - "Customer Support" (Vision, Support) — "Auto-triage and resolve tickets without human routing – classify intent, fetch context, and send answers instantly." — metric "45% auto-resolution" — compare "Manual: 17% → AI: 83%" *(inconsistent: metric says 45% but comparison says 83%)*
   - "HR & Onboarding" (ML, HR) — "Fully set up new hires across HR, IT, and facilities – create accounts, assign policies, and notify teams automatically." — metric "3× faster onboarding" — compare "Manual: 1× → AI: 5×" *(inconsistent: 3× vs 5×)*
   - "Supply Chain" (NLP, Supply Chain) — "Monitor demand signals and adjust forecasts daily – read market data, detect anomalies, and update inventory plans." — metric "91% forecast accuracy" — compare "Baseline: 80% → AI: 91%"
   - "Compliance" (Vision, Compliance) — "Watch every transaction for violations in real time – detect anomalies, flag risks, and keep audit trails current." — metric "Zero manual audits" — compare "Manual: 3/day → AI: 0"
   - "Financial Close" (ML, Finance) — "Reconcile accounts and flag anomalies automatically – match transactions, validate journals, and close books faster." — metric "2× faster close" — compare "Manual: 1× → AI: 2×"
6. **Process/step-flow section** — Eyebrow "The Moment"; Title "From the moment it triggers to the moment it's resolved."; Sub "A structured path from trigger to resolution – with clear milestones and measurable outcomes." Steps (`STEPS`): 01 Trigger / Step 1 / "Webhook, schedule, or system event" / chips "Event detected", "Instant"; 02 Context / Step 2 / "ERP, CRM, and system data gathered" / chips "Data fetched", "Cross-system"; 03 Decide / Step 3 / "AI reasoning engine chooses action" / chips "Model inference", "Policy check"; 04 Execute / Step 4 / "Takes action directly in your system" / chips "Action taken", "Logged"; 05 Verify / Step 5 / "Confirms outcome and notifies team" / chips "Audit trail", "Notification"
   - ResultBar: "Average resolution time: 8.3 seconds"; chips "87% resolved autonomously", "+ ZERO HUMAN INTERVENTION REQUIRED"
7. **Proof/testimonials** — Eyebrow "Customer Proof"; Title "Real enterprises. Real results. Real stories." Cards (`TESTIMONIALS`):
   - Tag "Siemens" — "Our AP team used to spend Mondays clearing the exception queue. Now they spend Mondays on strategy." — Anna Müller, VP Supply Chain, Siemens AG — metric "73% fewer exceptions"
   - Tag "Vodafone" — "The agents went live on a Tuesday. By Thursday, 83% of our support tickets were resolving themselves." — Priya Shah, Head of Support Ops, Vodafone — metric "83% auto-resolution"
   - Tag "Airbus" — "Three people used to review compliance logs. Now one person oversees a dashboard the agent keeps current in real time." — Marc Dubois, Compliance Lead, Airbus — metric "Zero manual audits"
8. **ClosingCTA** — Trusted: Siemens, Vodafone, Airbus, IBM; Heading: "Your story starts with one agent."; Sub: "No generic tools. No off-the-shelf models. Just enterprise-grade AI agents built precisely for your operational challenge – deployed in 24 hours."; Primary: "Deploy an agent →" (`#`, dead); Secondary: "Talk to an expert" (`#`, dead); Checks: "SOC 2 protected", "Live in 24 hrs", "No lock-in contract"

---

## Solutions → AI Research — `/solutions/ai-research` — [src/pages/solutions/AiResearch.tsx](src/pages/solutions/AiResearch.tsx)

1. **PageHero** — Badge: "● Encegen AI Labs · Custom AI Research & Engineering"; Title: "AI Built for the Exact Problem No One Else Will Solve"; Sub: "Off-the-shelf AI solves generic problems. We build custom AI – fine-tuned on your data, designed for your workflows, grounded in your business context."; Buttons: "Start a project →" (`#`, dead), "Explore capabilities →" (`#`, dead); Trusted: IBM, Siemens, Vodafone, Airbus, Wipro
2. **GradBand stats**: "94%" Accuracy Avg; "12 wks" To Production; "3×" vs Generic AI; "40%" Cost Reduction
3. **Flagship section** — Eyebrow "Flagship Capability"; Title "LLM Fine-Tuning That Actually Understands Your Business."; Sub-heading "From generic to domain-expert in 12 weeks."; Body: "Most language models know everything about nothing specific. We fine-tune foundation models on your proprietary data – contracts, tickets, SOPs, transaction history – until they understand your business as well as your best employees." Flagship items (`FLAGSHIP_ITEMS`):
   - "Domain-specific training data curation" — "We curate the exact data your model needs to learn your domain." — chips "8% factor in model accuracy", "2.3× better than generic", "<2 wks curation avg"
   - "Proprietary context injection" — "We inject your workflows, terminology and business rules into the model." — chips "Business-rule grounding", "Terminology alignment"
   - "Hallucination elimination techniques" — "We reduce false positives and ensure outputs are grounded in evidence." — chips "<0.5% error rate achieved", "RLHF + RAG combined", "Production-tested method"
   - "Continuous learning pipelines" — "Models stay up-to-date as your business evolves and new data arrives." — chips "+1.2% accuracy per month", "Auto-retraining triggers", "Zero downtime updates"
   - MockPanel "Model Performance" — big stat "95.4%" "Overall Accuracy" "+1.2% vs baseline"; bars: "Financial Document Extraction" (NLP) 96.2%; "Contract Clause Classification" (NLP) 94.8%; "Anomaly Detection Precision" (ML) 97.1%. Footer: "Without custom AI: 71.3% (generic GPT-4)"; "With Encegen: 96.2% (+25%)"
4. **Disciplines section** — Eyebrow "All Capabilities"; Title "Six research disciplines. One expert team."; Sub "Built to solve the problems generic models cannot touch." Cards (`DISCIPLINES`):
   - "LLM Fine-Tuning" — "Custom language models trained on your domain data, documentation and decisions." — tag "Language"
   - "Computer Vision" — "Visual inspection, document parsing, and image classification for your workflows." — tag "Vision"
   - "Predictive Intelligence" — "Forecasting and anomaly detection trained on your operational time-series data." — tag "Forecasting"
   - "NLP & Understanding" — "Extract, classify, and reason over contracts, emails, tickets, and reports." — tag "Text AI"
   - "Reinforcement Learning" — "Agents that learn optimal actions in your environment through guided exploration." — tag "Agents"
   - "Multimodal AI" — "AI that understands text, images, tables, and structured data together – as humans do." — tag "Multimodal"
5. **Process section** — Eyebrow "Our Process"; Title "Research to production in 14 weeks."; Sub "A structured path from problem definition to deployed AI – with clear milestones and measurable outcomes." Steps (`STEPS`):
   - "01" Discovery / Week 1-2 / "Stakeholder workshops, problem framing, data landscape audit, feasibility scoring and ROI estimation." / chips "Problem brief", "Data audit report"
   - "02" Data Strategy / Week 3-5 / "Data sourcing, cleaning pipeline, annotation guidelines, synthetic data generation, and train/test split design." / chips "Clean dataset", "Labeling schema"
   - "03" Architecture / Week 6-7 / "Foundation model selection, fine-tuning strategy, evaluation framework design, and baseline experiment runs." / chips "Model blueprint", "Baseline metrics"
   - "04" Training & Validate / Week 8-11 / "Iterative training runs, hyperparameter tuning, RLHF alignment, red-teaming, and benchmark validation against targets." / chips "Validated model", "Eval scorecard"
   - "05" Deployment / Week 12-14 / "API integration, monitoring setup, A/B testing, team handover, documentation, and 30-day support period." / chips "Live in production", "Full documentation"
   - ResultBar: "14 weeks avg from kickoff to production"; chip "20+ enterprise AI deployments completed"; action button "↓ Download our AI project checklist" (`#`, dead — no file attached)
6. **Use cases section** — Eyebrow "Use Cases"; Title "AI solving the problems that matter." Cards (`USE_CASES`):
   - "Financial Document Intelligence" (NLP, Finance) — "Custom NLP model reads 50,000+ contracts, extracts key clauses, flags anomalies – 98% accuracy vs 72% with generic models." — metric "98% accuracy" — compare "Generic GPT: 72% → Encegen: 98%"
   - "Manufacturing Defect Detection" (Vision, Manufacturing) — "Computer vision model trained on 2M+ product images detects micro-defects invisible to standard models. Zero false negatives." — metric "0.2% miss rate" — compare "Generic: 5.2% → Encegen: 0.2%" *(inconsistent: claims "zero false negatives" but shows a nonzero 0.2% miss rate)*
   - "Demand Forecasting AI" (ML, Supply Chain) — "LSTM model trained on 9 years of client-specific supply chain data outperforms generic forecasting by 3× on out-of-distribution events." — metric "3× accuracy uplift" — compare "Generic: 1× → Encegen: 3×"
7. **Proof/testimonials** — Eyebrow "Customer Proof"; Title "What our clients are building." Cards (`TESTIMONIALS`):
   - Tag "Siemens" — "The Encegen team built a document intelligence system that outperformed everything we tested – including GPT-4. Truly purpose-built AI." — Andreas Müller, Head of AI, Siemens AG — metric "98% accuracy"
   - Tag "Vodafone" — "We went from proof-of-concept to production in 11 weeks. The fine-tuning quality was exceptional – our support AI now resolves 83% of tickets automatically." — Priya Shah, AI Lead, Vodafone — metric "83% auto-resolution"
   - Tag "Airbus" — "Their RL agent reduced our production scheduling time by 67%. It learned our exact constraints and keeps improving with every production cycle." — Marc Dubois, Operations Director, Airbus — metric "67% time reduction"
8. **ClosingCTA** — Trusted: Siemens, Vodafone, Airbus, IBM; Heading: "Tell us your problem. We'll build the AI."; Sub: "No generic tools. No off-the-shelf models. Just research-grade custom AI built precisely for your business challenge – delivered in 14 weeks."; Primary: "Start a project →" (`#`, dead); Secondary: "Talk to a researcher" (`#`, dead); Checks: "NDA-protected engagements", "14-week delivery guarantee", "No lock-in contract"

---

## Solutions → Custom Software — `/solutions/custom-software` — [src/pages/solutions/CustomSoftware.tsx](src/pages/solutions/CustomSoftware.tsx)

1. **PageHero** — Badge: "● Encegen AI Labs · Custom Software · AI-Native · Enterprise Scale"; Title: "Enterprise Software Built for How You Actually Work"; Sub: "We design and build scalable, AI-native software platforms that fit your exact operational needs – not the other way around. Delivered in months, not years."; Buttons: "Start a project →" (`#`, dead), "See case studies" (`#`, dead); Trusted: IBM, Siemens, Vodafone, Airbus, Wipro
2. **GradBand stats**: "20+" Products Shipped; "3-6 months" Avg to Launch; "99.9%" Uptime SLA; "50+" Enterprise Clients
3. **Problem section** — Eyebrow "Chapter 1 · The Problem"; Title "Every day your team works around software that was never built for them."
   - Body: "In the old world: your team opens a 15-year-old system, exports a CSV, pastes it into Excel, formats it manually, emails it to 3 people, and waits 4 days for approvals. Every. Single. Week."
   - Body: "With Encegen custom software: that entire process becomes a single button. Data flows automatically, approvals are instant, and your team finally focuses on work that actually matters."
   - Chips: "4-day process"; "Done in seconds"
   - Stat line: "72% of enterprise workflows can be fully automated with purpose-built software"
   - Checklist: "Full IP ownership - no vendor lock-in, ever"; "Fixed-price delivery - no budget surprises"; "3× higher team adoption vs generic tools"
   - MockPanel "Workflow Comparison" — Before: "BEFORE Automation" (Manual); "1 · Export from ERP" 45 min; "2 · Format in Excel" 2 hrs; "3 · Email approvals" 4 days; "4 · Re-enter data" 1 hr — After: "WITH ENCEGEN" (Automated); "1 · Click Submit" <1 sec; "2 · Auto-routed" 2-4 min; "3 · Approved and synced" 8-10 min; "4 · Done" 0 manual steps. Footer: "Total waste before: 4 days 3 hours"; "Operational time: 12 minutes automated"
4. **"What we build" section** — Eyebrow "What We Build"; Title "Platforms that run businesses." Product cards (`PRODUCTS`):
   - Tag "Talent Management" — "TalentBridge" — "AI-powered internship & placement platform connecting interns, corporates, and TPOs with intelligent matching and tracking." — meta "3-6 months delivery" — note "Enterprise"
   - Tag "Property & Search" — "Easy Hunt" — "Document bifurcation and property search platform — organize large data sheets and annotate documents with intelligent search." — meta "Live in 6 weeks" — note "Startup"
   - Tag "Hostel Mgmt" — "HMS" — "AI-powered hostel management system — room allocation, student onboarding, and occupancy optimization in one platform." — meta "Enterprise-grade" — note "Enterprise"
5. **"How we build" section** — Eyebrow "How We Build"; Title "From brief to production in 3-6 months." Steps (`STEPS`): 01 Discovery / Wk 1-2 / "Requirements, user research, technical scoping"; 02 Architecture / Wk 3-4 / "System design, stack decisions, API contracts"; 03 Design / Wk 5-6 / "UI/UX design, prototyping, user testing"; 04 Build / Wk 7-10 / "Agile sprints, CI/CD pipeline, QA testing"; 05 Test / Wk 11-12 / "Load testing, security audit, UAT"; 06 Launch / Wk 13+ / "Deployment, monitoring, 30-day support"
   - ResultBar: "3-6 month average from kickoff to production · Based on 20+ successful deliveries"; chip "FIXED-PRICE"
6. **Stack section** — Eyebrow "Our Stack"; Title "Modern technologies. Battle-tested in production." Tech chips (`STACK`, name/role): React/Frontend, Next.js/Frontend, TypeScript/Frontend, Node.js/Backend, Python/Backend, FastAPI/Framework, PostgreSQL/Database, MongoDB/Database, Redis/Database, AWS/Cloud, Azure/Cloud, Docker/DevOps, Kubernetes/DevOps, GraphQL/API, Kafka/Streaming, Terraform/Infra
7. **Proof/testimonials** — Eyebrow "Customer Stories"; Title "Products our clients love." Cards (`TESTIMONIALS`):
   - Tag "Enterprise Client" — "TalentBridge replaced 3 legacy HR systems and cut our HR processing time by 60%. The integration was seamless." — attributed only as "CHRO", "5,000-person Enterprise" (no real name/company) — metric "60% time saved"
   - Tag "Startup Client" — "They shipped our MVP in 6 weeks. The UX was better than what we could have designed ourselves. Our users love it." — attributed only as "CEO", "SaaS Startup" — metric "6-week MVP delivery"
   - Tag "Healthcare Client" — "HMS went live in 3-6 months. Zero downtime. Our entire clinical staff adopted it in the first week – the UX was that intuitive." — attributed only as "CTO", "Regional Hospital" — metric "3-6 month delivery"
8. **ClosingCTA** — Trusted: Siemens, Vodafone, Airbus, IBM; Heading: "Ready to build software that fits your business perfectly?"; Sub: "Tell us what you need to build. We'll scope it, design it, and deliver it – in 3-6 months."; Primary: "Start a project →" (`#`, dead); Secondary: "See case studies" (`#`, dead); Checks: "Full IP transfer", "3-6 month delivery", "Fixed-price engagement"

---

## Solutions → Digital Marketing — `/solutions/digital-marketing` — [src/pages/solutions/DigitalMarketing.tsx](src/pages/solutions/DigitalMarketing.tsx)

1. **PageHero** — Badge: "● Encegen AI Labs · Digital Marketing · SEO · Paid Ads · Growth"; Title: "Data-Driven Growth Strategies That Actually Deliver."; Sub: "From AI-powered SEO to full-funnel paid advertising – Encegen builds growth systems that acquire, convert, and retain customers at scale."; Buttons: "Start growing →" (`#`, dead), "See case studies" (`#`, dead); Trusted pills: "D2C Brands", "SaaS Companies", "E-commerce", "Enterprises" — trusted label "growing" (these are generic segment names, not real client logos/names)
2. **GradBand stats**: "6.4×" Avg ROAS; "65%" Lower CAC; "3×" Qualified Leads; "40%" Retention
3. **Problem section** — Eyebrow "The Problem"; Title "Most agencies run ads. Very few build growth systems."
   - Body: "In the old world: your agency reports vanity metrics (impressions, clicks, reach) that don't correlate to revenue. Campaigns are siloed (paid, SEO, email) and attribution is opaque. You can't see which audiences are driving real value, and decisions are made on gut feel rather than data."
   - Body: "With Encegen: you get a full-funnel growth system where every channel works together. AI optimisation runs continuously, and CRM integration gives you a single source of truth. You see exactly which audiences are converting, which messages are working, and which levers to pull next."
   - Checklist: "Full-funnel attribution across paid, SEO, email, and CRM"; "AI-powered optimisation running continuously (24/7)"; "CRM integration for audience ownership and unified reporting"; "Weekly performance reports and ongoing A/B testing"
   - MockPanel "Campaign Performance Comparison" — Before ("TYPICAL AGENCY"): ROAS 1.2×; CAC $210; Conversion Rate 1.9%; Agency response time 3-7 days — After ("WITH ENCEGEN"): ROAS 6.4×; CAC $84; Conversion Rate 5.4%; Response Same day. Footer: "2.4× higher ROAS · Based on 50+ Encegen campaign systems"
4. **Flagship section** — Eyebrow "Flagship Service"; Title "Paid Media That Compounds — Not Just Converts."; Sub-heading "Most ad agencies optimise for clicks. We optimise for LTV."
   - Body: "Every campaign we run is designed around one question: what is the real cost of acquiring a customer who stays? We build full-funnel paid media systems connected to your CRM, optimised by AI, and measured against lifetime revenue — not surface-level vanity metrics."
   - Checklist: "Full-funnel attribution from ad to revenue — track every dollar from click to close"; "AI-powered bid optimisation running 24/7 — continuous improvement without manual fatigue"; "Connected to your CRM and e-commerce data — unified decisioning across channels"; "Weekly performance reports with full transparency — no black boxes; you own the data and the model"
   - Button: "See our paid media approach →" (`#`, dead)
   - MockPanel "Campaign Performance Dashboard" — ROAS 6.4×; CAC Reduction -65%; Conversion Rate +3.2×; "09:12 · Bid optimisation model updated" ✓; "09:45 · Audience sync completed" ✓; "17:30 · Weekly report generated" ✓. Footer: "Industry benchmark: 1.8× ROAS → Encegen: 6.4× ROAS"
5. **Channels section** — Eyebrow "Chapter 2 · How We Grow You"; Title "Six growth channels. One unified strategy." *(only three channel cards are actually listed, not six)* Cards (`CHANNELS`):
   - Tag "SEO & Content" — "Search & Content Marketing" — "Data-driven content strategies and technical SEO that compound over time – building traffic you own." — meta "65% avg lower CAC" — note "Organic"
   - Tag "Paid Advertising" — "Paid Media Management" — "Google, Meta, LinkedIn campaigns managed for maximum ROAS with AI-powered bid optimisation." — meta "6.4× avg ROAS" — note "Paid"
   - Tag "Email & Automation" — "Email & Marketing Automation" — "Automated sequences that nurture leads, retain customers, and drive repeat purchases." — meta "40% higher retention" — note "Automation"
6. **Use cases section** — Eyebrow "Use Cases"; Title "Growth systems built for real businesses." Cards (`USE_CASES`):
   - "D2C Brand Scale-Up" (tags D2C, Brand Scale-Up) — "AI-paid media and email automation that took a D2C fashion brand from $200k to $1.2M MRR in 9 months." — metric "6.4× ROAS" (brand name not disclosed — "a D2C fashion brand")
   - "SaaS Lead Generation" (SaaS, Lead Generation) — "Content and paid search strategy that grew organic qualified leads by 340% while reducing CAC by 65%." — metric "340% lead growth" (company not named)
   - "E-commerce Revenue" (E-commerce, Revenue) — "Email automation and conversion optimisation that added 40% to monthly revenue with zero additional ad spend." — metric "+40% revenue" (company not named)
7. **Process section** — Eyebrow "Chapter 3 · The Process"; Title "From strategy to compounding growth." Steps (`STEPS`): 01 Audit & Strategy / Wk 1-2 / "Full marketing audit, competitor analysis, growth roadmap"; 02 Setup & Launch / Wk 2-4 / "Tracking, attribution, campaign launch, automation setup"; 03 Optimise / Wk 5-8 / "A/B testing, bid optimisation, creative iteration"; 04 Scale / Wk 9+ / "Scale winning campaigns, expand channels, compound results"
   - ResultBar: "Results visible in 30 days · Compounding month over month · Full data transparency"; chip "FIXED-PRICE"
8. **Proof/testimonials** — Eyebrow "Chapter 4 · The Proof"; Title "Growth our clients are building their businesses on." Cards (`TESTIMONIALS`):
   - Tag "D2C Brand" — "Encegen scaled our ROAS from 1.8× to 6.4× in 90 days. Our CAC dropped 65% while revenue tripled." — attributed only as "CMO", "D2C Fashion Brand" — metric "6.4× ROAS"
   - Tag "SaaS Company" — "Our organic traffic grew 340% in 6 months. We now get more qualified leads from SEO than paid ads." — attributed only as "Head of Growth", "B2B SaaS" — metric "340% traffic growth"
   - Tag "E-commerce" — "Email automation alone added 40% to our monthly revenue. The setup paid for itself in week one." — attributed only as "Founder", "Online Store" — metric "40% revenue lift"
9. **ClosingCTA** — Trusted: "D2C Brands", "SaaS", "E-commerce", "Enterprises" (generic labels); Heading: "Your growth story starts with the right data."; Sub: "Tell us your current CAC, revenue goals, and biggest bottleneck. We will build the growth system to get you there."; Primary: "Start growing →" (`#`, dead); Secondary: "View case studies" (`#`, dead); Checks: "30-day support", "2-week setup", "Fixed-price engagement"

---

## Solutions → Website & E-commerce — `/solutions/web-ecommerce` — [src/pages/solutions/WebEcommerce.tsx](src/pages/solutions/WebEcommerce.tsx)

1. **PageHero** — Badge: "● Encegen AI Labs · Web Development · E-commerce · Performance-First"; Title: "Websites That Convert. Stores That Scale."; Sub: "From high-performance marketing sites to full-scale e-commerce platforms – we build digital experiences that drive measurable, compounding growth."; Buttons: "Get a website →" (`#`, dead), "See case studies" (`#`, dead); Trusted: IBM, Siemens, Vodafone, Airbus, Wipro
2. **GradBand stats**: "3×" Avg Conversion; "98/100" Performance Score; "2 weeks" Starter Delivery; "100%" Mobile-First
3. **Problem section** — Eyebrow "The Problem"; Title "Every week, your team loses hours to a website that was built to look good - not to perform."
   - Body: "In the old way: your potential customer lands on your site, waits 6 seconds for it to load, struggles to find what they need, and clicks away. You never know why. Your team rebuilds the same page three times. The agency is already working on the next project."
   - Body: "With Encegen: your site loads in under 1.8 seconds, every page is designed around a specific conversion goal, and you see exactly what is working – with weekly performance reports and ongoing A/B testing."
   - Chips: "6-sec load, 2% conversion"; "Sub-2s, 3× conversion"
   - Stat line: "73% of website visitors leave after 3 seconds of load time – your site speed is costing you customers"
   - Checklist: "Sub-2 second load times - industry-leading performance"; "Conversion-rate optimised from first wireframe"; "Built-in analytics, A/B testing, and weekly reports"
   - MockPanel "Website Performance Comparison" — Before ("TYPICAL AGENCY SITE"): Page loads 6.2 sec avg; Visitor finds CTA 3+ clicks; Conversion attempt 1.8% site avg; Agency responds to issue 5-7 days — After ("WITH ENCEGEN"): Page loads 1.6 sec; Visitor finds CTA "Clear path"; Conversion attempt 5.4% site avg; Issue flagged + fixed Same day. Footer: "3× higher conversion rate · Based on 50+ Encegen-built websites"
4. **Flagship section** — Eyebrow "Flagship Service"; Title "Performance-optimised websites built for revenue, not just awards."; Sub-heading "We design every page with one obsession - getting visitors to take action."
   - Body: "Most websites look good in screenshots. Ours perform in production. Every layout, every load-time millisecond, every CTA is engineered for conversion."
   - Checklist: "Conversion-rate optimised from wireframe one — every element placed for maximum action"; "Sub-2 second load times guaranteed — 98/100 PageSpeed engineered from day one"; "Built-in A/B testing and analytics — data-driven iteration from launch day"; "SEO-ready at the foundation — technical SEO baked in, not bolted on"
   - Button: "Explore our approach →" (`#`, dead)
   - MockPanel "Performance Scoreboard" — PageSpeed Score 98; Conversion Rate +3.2×; Mobile Score 97; "08:12 · Optimised hero CTA" ✓; "09:19 · Deployed A/B test" ✓; "09:54 · Sent weekly report" ✓. Footer: "Industry avg: 62/100 → Encegen avg: 98/100"
5. **"What we build" section** — Eyebrow "What We Build"; Title "Three types of digital products. One conversion-obsessed team."; Sub "High-performance marketing sites, full-scale e-commerce platforms, and bespoke web apps." Cards (`PRODUCTS`):
   - Tag "Marketing Website" — "Marketing Websites" — "High-performance landing pages and brand sites built for speed, SEO, and conversion." — meta "98/100 PageSpeed avg"
   - Tag "E-commerce" — "E-commerce Platforms" — "Full-scale online stores with cart, checkout, inventory, and AI-powered product recommendations." — meta "3× conversion lift"
   - Tag "Custom Web App" — "Custom Web Apps" — "Bespoke dashboards, portals, and tools tailored precisely to your workflow and users." — meta "2-week starter"
6. **Process section** — Eyebrow "How We Deliver"; Title "From a conversation to a live, converting website."; Sub "A clear, transparent process with no surprises — from your first brief to a live site that performs." Steps (`STEPS`): 01 Brief & Strategy / Wk 1 / "Goals, target audience, conversion strategy, and content planning"; 02 Design & Prototype / Wk 2-3 / "High-fidelity screens and an interactive prototype for your sign-off"; 03 Build & Test / Wk 4-6 / "Performance-first code, cross-device testing, and conversion optimisation"; 04 Launch & Grow / Wk 7+ / "Go live with analytics, SEO setup, and 30 days of dedicated support"
   - ResultBar: "2-week starter delivery · 6-week full build · Based on 50+ website projects delivered"; chip "FIXED-PRICE"
7. **Stack section** — Eyebrow "Our Web & E-commerce Stack"; Title "Conversion-optimised technologies. Proven in production."; Sub "We choose every tool in your stack specifically for web performance, e-commerce reliability, and conversion rate optimisation - not just what is popular." Tech chips (`STACK`, name/role): Next.js/Frontend, React/Frontend, TypeScript/Frontend, TailwindCSS/Styling, Shopify Plus/E-commerce, WooCommerce/E-commerce, Medusa.js/E-commerce, Stripe/Payments, Vercel/Cloud, Cloudflare/CDN, AWS/Cloud, Lighthouse CI/Performance, Sanity CMS/Content, Contentful/Content, Figma/Design, Google Analytics/Analytics
   - Caption: "Platform chosen based on your business model - Shopify for scalable stores, headless for custom experiences, WooCommerce for content-first brands."
8. **Proof/testimonials** — Eyebrow "The Proof"; Title "Websites our clients built their growth on." Cards (`TESTIMONIALS`):
   - Tag "Startup Client" — "Our new site converted 3× better from day one. The design was stunning and the engineering was bulletproof. Our users love it." — attributed only as "Head of Marketing", "D2C Brand" — metric "3× conversion lift"
   - Tag "Retail Client" — "They handled our Black Friday sale with 10,000 concurrent users and zero downtime. Incredible engineering." — attributed only as "CTO", "Online Retailer" — metric "10k concurrent users"
   - Tag "SaaS Client" — "We went live in 11 days. The custom portal they built saves every team member 4 hours a week. Zero bugs at launch." — attributed only as "Founder", "SaaS Startup" — metric "11-day delivery"
9. **ClosingCTA** — Trusted: "D2C Brands", "Retailers", "SaaS", "Enterprises" (generic labels); Heading: "Your website story starts with one conversation."; Sub: "Tell us what you need to build. We will design it, build it, and make sure it performs."; Primary: "Get a website →" (`#`, dead); Secondary: "See case studies" (`#`, dead); Checks: "30-day support", "2-week delivery", "Fixed-price engagement"

---

## Solutions → Use Cases — `/solutions/use-cases` — [src/pages/solutions/UseCases.tsx](src/pages/solutions/UseCases.tsx)

1. **PageHero** — Badge: "Encegen AI"; Title: "Put AI to Work Across Every Business Process"; Sub: "Encegen AI doesn't just surface insights - it acts. Embed intelligent automation directly into your SAP, Salesforce, and ServiceNow workflows." (no action buttons on this hero)
2. **"AI understands" section** — Eyebrow "Process Intelligence + AI"; Title "AI that understands your business - not just your data."
   - Body: "Most AI tools analyze data in isolation. Encegen AI understands full process context, identifies breakdowns, and triggers automated fixes directly in operational systems."
   - Link list (`href="#"`, all dead): "Trained on real process event data, not static rules"; "Connects AI insights directly to system actions"; "Continuously learns with every process cycle"
   - Button: "Learn how it works →" (`#`, dead)
   - MockPanel "Traditional AI vs Encegen": ✕ "Siloed data analysis" — "Works on snapshots, misses process context"; ✕ "Static rule-based alerts" — "High false-positive rates, alert fatigue"; ✕ "Manual hand-off required" — "Insights die in dashboards"; ✓ "End-to-end process intelligence" — "Understands full context, not just data points"; ✓ "AI-powered root cause analysis" — "Pinpoints exactly why processes break down"; ✓ "Direct system action" — "Fixes flow into SAP, Salesforce, ServiceNow automatically"; ✓ "Continuously proactive" — "Prevents issues before they impact the business"
3. **Capabilities section** — Eyebrow "AI Capabilities"; Title "Four ways AI transforms your operations." Cards (`CAPABILITIES`):
   - "Process Discovery" — "AI automatically maps every process variant from raw event data - no manual modeling required." — tag "Automated"
   - "Root Cause Analysis" — "AI pinpoints exactly why processes break down - tracing issues through thousands of upstream steps in milliseconds." — tag "Intelligent"
   - "Recommended Actions" — "AI generates prioritized, executable recommendations for each process gap - ranked by business impact." — tag "Proactive"
   - "Continuous Optimization" — "AI monitors processes 24/7, adapts to change and automatically refines recommendations as your business evolves." — tag "Adaptive"
4. **Before/after section** — Eyebrow "The Problem We Solve"; Title "Most enterprises are running blind. Encegen fixes that."; Sub "Your operational data holds the answers - but without process intelligence, it stays locked in your systems. Encegen unlocks it."
   - "Without Encegen" column (`WITHOUT`): "Decisions made on stale data" — "Teams act on reports that are weeks old, missing critical process deviations." — chip "4-6 week lag"; "Exceptions handled manually" — "Every process exception requires human intervention - slowing operations and burning out teams." — chip "70% manual"; "No visibility across systems" — "SAP, Salesforce, and ServiceNow data sit in silos - no unified view of what is actually happening." — chip "12+ systems"; "Reactive, not proactive" — "Problems are discovered after they cause damage - not before they even happen." — chip "$4.3M avg cost"
   - "With Encegen" column (`WITH`): "Real-time process visibility" — "AI maps every process variant the moment it happens - no sampling, no delays, no assumptions." — chip "Live data"; "Automated exception handling" — "AI detects, routes, and resolves process exceptions automatically before they escalate." — chip "87% automated"; "Unified intelligence layer" — "One connected view across SAP, Salesforce, and any other system in your stack." — chip "1 platform"; "Predictive, not reactive" — "AI identifies problems before they occur, recommending action days ahead of impact." — chip "3.2× faster"
   - ResultBar: "87% of AI recommendations are actioned within 24 hours"; chips "3.2× faster response to process disruptions", "5,000+ enterprise deployments worldwide"; action button "See how it works →" (`#`, dead)
5. **Processes section** — Heading: "Optimize the processes that matter most."; Label "By process:"; link list (`PROCESSES`, all `href="#"` dead): "Order-to-Cash"; "Purchase-to-Pay"; "Accounts Payable"; "Logistics & Fulfillment"; "IT Service Management"; "HR Service Delivery"
6. **Use cases section** — Eyebrow "Use Cases"; Title "AI-powered solutions for your most critical processes." Cards (`USE_CASES`):
   - "Accounts Payable Automation" (Finance) — "AI identifies bottlenecks, flags duplicates, and auto-routes exceptions – reducing AP cycle time by up to 65%." — metric "65% faster"
   - "Supply Chain Resilience" (Supply Chain) — "AI monitors supply chain in real time, predicts disruptions, and recommends re-routing actions." — metric "99.4% on-time"
   - "Order-to-Cash Excellence" (Finance) — "AI detects revenue leakage in the O2C cycle, identifies at-risk orders, and triggers automatic remediation." — metric "40% DSO reduction"
   - "IT Service Management" (IT Ops) — "AI auto-resolves routine tickets, predicts service degradation, optimizes ITSM workflows end-to-end." — metric "3× faster resolution"
   - "Manufacturing Operations" (Manufacturing) — "AI monitors production processes, flags compliance deviations, and optimizes throughput in real time." — metric "22% OEE improvement"
   - "Procurement Intelligence" (Procurement) — "AI surfaces savings opportunities, flags maverick spend, and ensures compliance automatically." — metric "$2.4M avg savings"
7. **GradBand stats**: "40%" Avg process improvement; "$2.4T" Business value unlocked; "10B+" Events daily; "5,000+" Enterprise customers
8. **Proof/testimonials** — Eyebrow "Customer Stories"; Title "Enterprises running smarter with Encegen AI." Cards (`TESTIMONIALS`):
   - Tag "Siemens" — "Encegen AI reduced our invoice exception rate by 92% in the first quarter — results we never thought possible with this quality." — Anna Müller, VP Supply Chain, Siemens AG — metric "92% fewer exceptions"
   - Tag "Uber" — "The AI recommendations were actionable from day one. Our finance team closed the books 5 days faster last month." — James Park, Head of Finance Ops, Uber — metric "5 days faster"
   - Tag "Airbus" — "Encegen AI gave us process visibility at a scale we couldn't achieve manually — and it acts on what it finds." — Marie Dubois, Chief Digital Officer, Airbus — metric "94% compliance"
9. **ClosingCTA** — Trusted: Siemens, Uber, Airbus — trusted label "join 5,000+ companies transforming their operations"; Heading: "Ready to put AI to work?"; Sub: "See how Encegen AI can transform your highest-priority processes in 30 days."; Primary: "Get AI demo →" (`#`, dead); Secondary: "Download the AI guide" (`#`, dead — no file attached); Checks: "70+ industries", "300% avg ROI", "$2.4T business value"

---

## Products → Easy Hunt — `/products/easy-hunt` — [src/pages/products/EasyHunt.tsx](src/pages/products/EasyHunt.tsx)

1. **PageHero** — Badge: "✦ AI-Powered Property Intelligence"; Title: "Transform Property Research into Intelligent Decisions"; Sub: "Easy Hunt centralizes fragmented property data into a single intelligent platform — search by owner name, survey number, CTS number, village name, or litigation reference and retrieve complete property records within seconds."; Buttons: "Start Searching →" (`#`, dead), "Book a Demo" (`#`, dead); Trusted pills: "SBI Legal", "National Housing Bank", "HDFC Law", "Shardul Amarchand", "AZB & Partners", "JSA Law" — trusted label "trusted by 500+ property professionals across India" (real Indian law-firm/bank names used as trusted-by logos with no evidence of an actual relationship)
   - Embedded "Console" mock search UI: search bar placeholder text "Mumbai Suburbs Survey No. 10424…"; button "Search AI"; results table (columns: Owner Name, Survey/CTS No., Village, Document Type, Confidence) with rows: "Godrej Properties Ltd" / "Survey 10A/A" / "Vikhroli" / "Mutation Entry (Partial)" / "98% Match"; "Ramesh J. Mehta & Ors" / "CTS 4629" / "Bandra" / "Index II Registry" / "89% Match"; "Tata Housing Development" / "Survey 22/1/B" / "Mulund" / "Litigation Clearance" / "84% Match" — these are fabricated illustrative property records naming real companies (Godrej, Tata Housing) as if they were actual search results
2. **Chapter 01 section** — Eyebrow "Chapter 01"; Title "Most property research still happens the hard way"
   - Body: "Every day, property lawyers, title search consultants, and real estate developers spend hours manually searching across scattered PDFs, Excel files, and government portals. Critical records get buried. Legal risks go unnoticed. Decisions get delayed."
   - Stat tiles (`STAT_TILES`): "4-6 Hours" — "spent on a single title search manually"; "75%" — "of property records are never cross-verified"; "15+" — "fragmented government portals to search"; "₹2.4L" — "average cost of a missed encumbrance"
3. **GradBand quote**: "What if every property decision was backed by complete intelligence — retrieved in 30 seconds, not 30 hours?"
4. **Chapter 02 section** — Eyebrow "Chapter 02"; Title "We believe every property record should be instantly accessible"
   - Body: "Property intelligence should be as fast and reliable as a Google search. Unlike traditional methods, Easy Hunt uses AI to understand context, not just keywords – matching owner names across transliterations, connecting survey numbers to historical records, and surfacing litigation risks automatically."
   - MockPanel "AI Property Profile" (right label "✓ AI Verified"): "2024" — "Godrej Properties (Current Owner)" — chip "Current"; "2018" — "Acquired from Mehta Family Trust" — chip "Transfer"; "1995" — "Original Allotment – Govt of Maharashtra" — chip "Origin". Footer: "LITIGATION & ENCUMBRANCE RISK" / "Low Risk"
5. **"How It Works" section** — Eyebrow "How It Works"; Title "Search. Discover. Decide." Cards (`HOW`):
   - "01 SEARCH" — "Enter any keyword — owner name, survey number, CTS number, village name, or litigation reference across millions of government-sourced records instantly."
   - "02 DISCOVER" — "AI retrieves, ranks, and cross-references matching property records. View complete ownership history, encumbrances, mutations, and linked documents in one place."
   - "03 DECIDE" — "Assess risk, verify titles, and make confident property decisions backed by comprehensive, AI-verified intelligence."
6. **Platform section** — Eyebrow "Platform"; Title "Everything you need in one intelligent platform" Cards (`PLATFORM`):
   - "Intelligent Keyword Search" — "Search by owner, survey number, CTS, village, document type, or litigation reference across millions of records."
   - "Government-Sourced Data" — "Verified records sourced directly from official government datasets, registries, and land record portals."
   - "AI-Powered Matching" — "Smart fuzzy matching handles transliterations, spelling variations, and partial matches across languages."
   - "Instant Due Diligence" — "Complete property intelligence retrieved in seconds — ownership history, encumbrances, mutations, litigation."
   - "Legal Risk Detection" — "Automatically identify title defects, pending litigations, disputed ownership, and encumbrance flags."
   - "Enterprise Security" — "SOC 2 compliant, end-to-end encryption, role-based access, audit trails, and data residency compliance."
7. **Stakeholders section** — Eyebrow "Built For"; Title "Trusted by every stakeholder in the property ecosystem" Cards (`STAKEHOLDERS`):
   - "Property Lawyers & Advocates" — "Accelerate title searches and legal verification with AI-powered due diligence."
   - "Title Search Consultants" — "Complete due diligence reports 10x faster with comprehensive property intelligence."
   - "Real Estate Developers" — "Assess land records, ownership history, and risks before land acquisition."
   - "Banks & NBFCs" — "Verify property titles instantly for mortgage underwriting and loan approvals."
   - "Government Departments" — "Streamline land records management, queries, and inter-departmental verification."
   - "Land Acquisition Teams" — "Research ownership history, encumbrances, and litigation at scale across regions."
8. **GradBand stats**: "10L+" Property Records Indexed; "500+" Organizations Trust Us; "30 Sec" Average Search Time; "99.9%" Platform Uptime
9. **Testimonials section** — Eyebrow "What Users Say"; Title "Trusted by India's leading property professionals" Cards (`TESTIMONIALS`):
   - "Easy Hunt reduced our title search time from 4 hours to 15 minutes. It's transformed how our firm operates." — Advocate Rekha Sharma, Property Law, Mumbai
   - "The AI matching is incredibly accurate. It catches transliteration variations that we would have missed manually." — Priya Nair, Title Search Consultant, Pune
   - "For our mortgage verification team, Easy Hunt is now indispensable. We process 3x more applications with the same team." — Rajesh Kulkarni, VP Risk, National Housing Bank
10. **FAQ section** — Eyebrow "FAQ"; Title "Frequently asked questions" Q&A pairs (`FAQ`):
    - "What is Easy Hunt?" — "Easy Hunt is an AI-powered Property Intelligence Platform that helps professionals search and analyze property records from government-sourced datasets."
    - "Who is Easy Hunt for?" — "Property lawyers, title search consultants, real estate developers, banks, NBFCs, government departments, and land acquisition teams."
    - "How accurate is the data?" — "Our data is sourced directly from official government registries and verified using AI-powered cross-referencing."
    - "Is my data secure?" — "Yes. Easy Hunt is SOC 2 compliant with end-to-end encryption, role-based access control, and audit trails."
    - "How do I get started?" — "Sign up for a free trial at easyhunt.in and start searching property records instantly." (references a domain `easyhunt.in` that is not linked anywhere on the page)
11. **ClosingCTA** — Heading: "This is just the beginning"; Sub: "Join 500+ organizations transforming property research with AI-powered intelligence. Start your free trial today."; Primary: "Start Free Trial →" (`#`, dead); Secondary: "Book a Demo" (`#`, dead); Checks: "Enterprise Security", "24/7 Support", "API Access"

---

## Products → HR Portal (EasyHunt recruitment product) — `/products/hr-portal` — [src/pages/products/HrPortal.tsx](src/pages/products/HrPortal.tsx)

> Note: page title/badges brand this product "EasyHunt" (recruitment) — a **different product from the identically-named "Easy Hunt" property-search product** above. This naming collision is itself a content issue (see tracker).

1. **PageHero** — Badge: "AI-Powered Recruitment"; Title: "Find the Right Talent. Land the Right Job. Powered by AI."; Sub: "EasyHunt uses intelligent matching, automated screening, and real-time analytics to connect the best candidates with the best opportunities – 10x faster than traditional hiring."; Buttons: "Start Hiring →" (`#`, dead), "Find Jobs" (`#`, dead); Trusted pills: "TCS", "Infosys", "Wipro", "HCL", "Accenture", "Deloitte" — trusted label "trusted by 2,000+ companies worldwide" (real company names used as trusted-by logos with no evidence of relationship)
   - Embedded MockPanel "EasyHunt Console — Senior AI Engineer Match Pipeline" (right label "Active Batch"): "Sarah Jenkins" — "ML Platform · 8 yrs · San Francisco" — chip "98% Match"; "David Chen" — "LLM Infra · 6 yrs · Remote" — chip "89% Match"; "Amelia Rodriguez" — "Applied Research · 7 yrs · NYC" — chip "84% Match". Footer: "412 Resumes Processed"; "95% Screening Accuracy"; "12 Days Avg Time to Hire" (fabricated illustrative candidate names/data)
2. **"How it works" section** — Eyebrow "How It Works"; Title "AI that understands talent — not just keywords."; Sub "Traditional recruitment relies on primitive keyword searches, missing top candidates. EasyHunt evaluates semantic skill layers, cultural parameters, and real capabilities."
   - Sub-heading: "The next generation of recruitment intelligence"
   - Body: "EasyHunt translates resumes, online portfolios, and experience summaries into a high-dimensional skills matrix. Our neural matching model accurately predicts candidate success and role compatibility before the first interview."
   - Checklist: "Semantic Skill Assessment — real, demonstrated competencies instead of keyword matching"; "Experience Context Modeling — understands the scale and scope of previous environments (enterprise vs startup)"; "Intent & Growth Analysis — predicts career progression vectors to align candidate aspirations with company growth"
   - Button: "See Matching Architecture →" (`#`, dead)
   - MockPanel "AI Compatibility Match Evaluation" (right label "Contacted"): "Elena Rostova" — "Principal Product Designer" — chip "97.2% Compatibility"; "Technical Competence" 98%; "Craft Versatility" 96%; "Leadership Signals" 94%; "Culture Alignment" 97%. Footer: "→ Passed background verification · 6h ago" (fabricated candidate)
3. **Capabilities section** — Eyebrow "Platform Capabilities"; Title "Four ways AI transforms your hiring."; Sub "Unleash an autonomous pipeline that screens, validates, ranks, and coordinates candidates instantly." Cards (`CAPABILITIES`):
   - "Smart Resume Parsing" — "AI extracts skills, experience, and qualifications from any resume format in seconds."
   - "Intelligent Job Matching" — "Our algorithm matches candidates to roles based on 50+ compatibility factors."
   - "Automated Screening" — "AI-powered pre-screening ranks candidates by fit, saving hours of manual review."
   - "Real-Time Analytics" — "Track pipeline health, time-to-hire and conversion rates with live dashboards."
4. **"The Challenge" section** — Eyebrow "The Challenge"; Title "Most companies are still hiring blind. EasyHunt fixes that."; Sub "In a rapid market, traditional applicant tracking systems act as digital filing cabinets. EasyHunt provides operational execution."
   - Problems (`CHALLENGES`): "Manual Screening" — "Recruiters spend an average of 23 hours screening resumes for a single hire."; "The Black Hole" — "75% of qualified resumes are never seen by a human due to primitive keyword filters."; "Stagnant Pipeline" — "Slow response times cause the best candidates to accept offers elsewhere."
   - Fixes (`FIXES`): "3 Min Automated Screen" — "AI comprehensively reviews and ranks every applicant based on deep semantic understanding." — chip "100% evaluated"; "Zero Missing Talent" — "No resume falls into a black hole; our AI analyzes contextual capabilities, suggesting alternative roles when needed." — chip "Full coverage"; "12 Days Time-to-Hire" — "Automated scheduling and instant feedback loops keep candidates engaged and pipelines moving." — chip "77% speed improvement"
5. **"For Job Seekers" section** — Eyebrow "For Job Seekers"; Title "Your dream job, found by AI."
   - Body: "Stop pasting resumes into generic portals. EasyHunt continuously acts on your behalf – analyzing, suggesting, and facilitating direct connections with premier technical teams."
   - Checklist (`SEEKER_POINTS`): "AI-powered job recommendations tailored to your profile"; "One-click apply to hundreds of matching roles"; "Real-time application status tracking"; "Salary insights and market intelligence"; "Interview preparation powered by AI"
   - Button: "Create Candidate Profile →" (`#`, dead)
   - MockPanel "Candidate Dashboard" (right label "LiveProfile"): "Backend Architect" — "Sr · San Francisco / Remote" — chip "97% Compatible"; "Full Stack Engineer" — "TechCorp · NYC" — chip "94%"; "DevRel Engineer" — "StartupX · Remote" — chip "91%". Footer: "✓ Interview scheduled — Metadata team, SF at 2:00 PM" (fabricated placeholder company names "TechCorp"/"StartupX"/"Metadata team")
6. **"For Employers" section** — Eyebrow "For Employers"; Title "Hire smarter. Hire faster."; Sub "Manage thousands of applications, pinpoint immediate fits, and collaborate across departments with a unified AI platform." Cards (`EMPLOYER_TILES`):
   - "Tech Hiring" — "Scale backend, frontend, ML Ops and research teams with targeted skill vetting."
   - "Executive Search" — "Find senior executives mapped to operational leadership metrics."
   - "Campus Recruitment" — "Filter and hire graduates from 300+ global universities."
   - "Contract Staffing" — "Spin up vetted contract specialists in hours, fully compliant."
   - "Bulk Hiring" — "Deploy parallelized throughput assessment for volume hiring drives."
   - "Diversity Hiring" — "Remove subconscious bias with programmatic blind evaluation profiles."
7. **GradBand stats**: "2M+" Candidates; "50K+" Jobs Posted; "10K+" Successful Hires; "95%" Client Satisfaction
8. **"Success Stories" section** — Eyebrow "Success Stories"; Title "Real companies. Real results. Real hires."; Sub "See how top global enterprises deploy EasyHunt to streamline hiring operations." Cards (`TESTIMONIALS`):
   - Tag "Siemens" — "EasyHunt reduced our engineering hiring time by 50% in the first quarter — results we never thought possible with this quality." — Anna Müller, Head of Talent, Siemens — metric "50% faster hiring"
   - Tag "Uber" — "The AI matches were accurate from day one. Our development team secured 5 critical architectural hires in under 2 weeks." — James Park, Engineering Director, Uber — metric "5 key hires in 2 weeks"
   - Tag "Airbus" — "EasyHunt gave us precise visibility and vetting capability at a scale we couldn't achieve manually — and it acts on what it finds." — Marie Dubois, VP People, Airbus — metric "95% match precision"
9. **Pricing section** — Eyebrow "Simple Pricing"; Title "Plans that scale with your hiring needs."; Sub "Transparent pricing tiers designed for startups up to global enterprises." Plan cards (`PLANS`):
   - "Starter" — price "Free" — "Perfect for startups & small teams getting started with AI hiring." — features: "5 active job posts", "Basic AI matching", "Email support", "Standard candidate profiles" — button "Get Started"
   - "Professional" (marked "Most Popular") — price "$99/mo" — "For growing teams that need unlimited posting and full pipeline automation." — features: "Unlimited job posts", "Advanced AI matching & ranking", "Priority 24/7 support", "Full pipeline analytics", "Automated pre-screening interviews" — button "Start Hiring →"
   - "Enterprise" — price "Custom" — "Dedicated infrastructure and custom models for global hiring operations." — features: "Custom model training", "Unlimited team collaboration", "SSO & advanced security (SOC 2)", "Dedicated success manager", "Direct API access & integrations" — button "Contact Sales"
   - (All plan CTA buttons are non-functional — no checkout/contact flow wired up)
10. **ClosingCTA** — Heading: "Ready to transform your hiring?"; Sub: "Join thousands of global companies securing elite industry talent using EasyHunt's cognitive pipeline. Deployed in under 30 days."; Primary: "Start Free Trial →" (`#`, dead); Secondary: "Book a Demo" (`#`, dead); Checks: "2,000+ companies using EasyHunt", "95% satisfaction", "SOC 2 certified"

---

## Company → About — `/about` — [src/pages/company/About.tsx](src/pages/company/About.tsx)

1. **PageHero** — Badge: "Our Story"; Title: "We Believe Every Process Should Be Understood"; Sub: "Encegen was founded on a simple idea: businesses run on processes, and the best businesses are the ones that truly understand theirs."; Trusted pills: "Founded 2011", "3,500+ Employees", "30+ Global offices" — trusted label "at a glance" *(inconsistent with Home page, which states "2019" as the founding year — see tracker)*
2. **Mission section** — Eyebrow "Our Mission"; Title "Making processes transparent for the world."
   - Body: "We are on a mission to reveal how businesses actually operate. By uncovering hidden inefficiencies and automating solutions, we help the world's most complex organizations become more agile, sustainable, and productive."
   - Body: "Process Intelligence isn't just about data; it's about clarity. It's about giving leaders the confidence to act based on reality, not assumptions."
   - Adjacent decorative photo placeholder (`ArtTile`, no real company photo)
3. **Values section** — Eyebrow "Our Values"; Title "What we stand for" Cards (`VALUES`):
   - "Transparency" — "We believe radical visibility drives better decisions."
   - "Innovation" — "We push boundaries to reimagine what's possible."
   - "Customer First" — "Everything we build starts with customer value."
   - "Integrity" — "We act with honesty in everything we do."
4. **Leadership section** — Heading: "Meet our leadership"; Eyebrow "Leadership"; Body: "A global team of experts committed to driving process excellence." Leader tiles (`LEADERS`, initials-only avatar + name + role — **no real photos**):
   - "Alexander Rinke" — "Co-CEO"
   - "Bastian Nominacher" — "Co-CEO"
   - "Martin Klenk" — "CTO"
   - "Shelly Bhatt" — "CPO"
   - "Lisa Chen" — "CFO"
   - "Raj Patel" — "CMO"
   - "Emma Davis" — "CRO"
   - "Tom Müller" — "COO"
   - *(Note: "Alexander Rinke," "Bastian Nominacher," and "Martin Klenk" are the real co-founder/CTO names of Celonis, a real competing process-mining company — not Encegen. This is almost certainly copied placeholder content, not Encegen's actual leadership.)*
5. **Careers band** — Eyebrow "Careers"; Heading: "Help us transform the way the world works."; Body: "Join a fast-growing team of builders, thinkers, and problem solvers."; Role chips: "Software Engineer", "Product Manager", "Enterprise Sales"; Button: "View all open roles →" → `/careers`; Facts: "4.5★ Glassdoor", "#1 Best Workplace", "Hybrid-first culture", "35 nationalities"
6. **Press section** — Eyebrow "In The Press"; Title "What people are saying about Encegen" Cards (`PRESS`, each with a "Read article" link to `href="#"`, dead):
   - "Forbes" — "Encegen is redefining the category of execution management."
   - "TechCrunch" — "A massive leap forward for enterprise visibility and automation."
   - "Gartner" — "Named a leader in the Magic Quadrant for Process Mining for the 5th year."
   - "WSJ" — "How Encegen is helping the world's largest firms stay lean."
   - *(No links to the actual articles/sources exist anywhere — these read as fabricated press placements.)*
7. **Gradient CTA section** — Heading: "Ready to join the process intelligence revolution?"; Buttons: "Get a demo →" (`#`, dead), "Contact us 📞" (`#`, dead — no phone number or contact form provided)

---

## Company → Our Story — `/our-story` — [src/pages/company/OurStory.tsx](src/pages/company/OurStory.tsx)

1. **PageHero** — Title: "We didn't build an AI company. We built a better future."; Sub: "Encegen was born from a simple frustration – that most enterprise software talks about AI, but very few actually deliver it."; Buttons: "Read the story →" (`#`, dead), "Our values" → `/values`
2. **Chapter 01 — "The Frustration"** — Eyebrow "Chapter 01" / "The Frustration"; Title "Most enterprise software promises transformation. Most delivers dashboards."
   - Body: "We've all been there: the demo is slick, the slides are convincing, and the ROI model looks too good to be true. But when the pilot starts, the reality sets in: brittle models, broken workflows, and decisions delayed by weeks."
   - Body: "The gap between AI hype and real enterprise value isn't a technology problem – it's a trust problem. We built Encegen to close that gap with a different kind of AI: one that runs operations, not just reports them."
   - "The Truth" comparison panel — heading "The Truth" / note "Reality vs. promise"
     - "The Promise" list: "AI that automates everything"; "10x ROI in 30 days"; "Zero integration effort"
     - "The Reality" list: "Models that break in production"; "ROI measured in dashboards"; "Months of 'integration' work"
3. **Chapter 02 — quote + timeline** — Pull-quote: "We sat in a boardroom watching a $4M AI pilot fail in real time. That was the day we decided to build differently." — cited "– ALEX RIVERA, CEO & CO-FOUNDER, 2019"
   - Milestone timeline (`MILESTONES`):
     - "2019" — "The Spark" — "Two founders watched a $4M AI pilot fail in real time. They left their corporate jobs that week to build differently."
     - "2020" — "First Clients" — "Shipped the Encegen platform to 3 pilot clients. Delivered 40% efficiency gains in under 90 days."
     - "2022" — "Series A" — "Raised $18M. Expanded to London, Singapore, and Dubai. Crossed 50 enterprise clients."
     - "202x" — "Global Scale" — "Serving 200+ clients in 18 countries. $2B+ in value created for enterprise partners worldwide." *(literal placeholder year "202x" left unfilled in the source)*
4. **Chapter 03** — Eyebrow "Chapter 03"; Title "We build AI that actually runs your business."
   - Checklist: "No black boxes. Only outcomes. — We measure success by decisions made, not models trained."; "Deployed in weeks, not years. — We ship fast, iterate fast, and improve fast – without breaking workflows."; "Your data never leaves your walls. — We run where you need us: on-prem, in your cloud, or in a secure enclave."
   - MockPanel "AI Deployment Status" (right label "Live"): "Anomaly Detection" Active / "99.2% accuracy"; "Forecasting Engine" Live / "1.5ms latency"; "Compliance Monitor" Running / "0 violations"; "Document Intelligence" Active / "847 docs/day"; "Risk Scoring Engine" Live / "2.3ms response"; "Supplier Validation" Running / "12,400 vendors"; "Data Reconciliation" Active / "99.99% match"; "NLP Classification" Live / "94.7% confidence". Footer: "● 99.9% uptime · All systems operational"; "Updated just now"
5. **Chapter 04 — team** — Eyebrow "Chapter 04"; Title "Built by people who've sat in your seat."; Sub "Our team comes from the operations, finance, and technology floors of the companies we serve. We know what bad data costs." Team cards (`TEAM`, initials-only avatars — **no real photos**):
   - "Alex Rivera" — "CEO & Co-Founder" — "Built and scaled AI-first products for Fortune 500 operations."
   - "Priya Nair" — "CTO" — "Architected enterprise AI platforms with reliability and explainability."
   - "Marcus Böhm" — "Chief AI Officer" — "Led AI research and deployment across finance and operations."
   - "Sophia Chen" — "Chief Revenue Officer" — "Scaled go-to-market for AI-first enterprise software."
   - "Rule bar" statement: "We have one rule at Encegen: if you wouldn't bet your own career on it, we don't ship it." — plus a 5th unlabeled avatar "JD" with no name/role attached
6. **Chapter 05 — values** — Title: "What we stand for." Value tiles (`VALUES`, numbered 01–06):
   - "Honesty over hype" — "We will tell you when AI is the wrong answer."
   - "Speed with integrity" — "We move fast and we never cut corners."
   - "Client obsession" — "Your success is our only KPI."
   - "Radical clarity" — "No jargon. No confusion. Just results."
   - "Built to last" — "We build for 10 years, not the next demo."
   - "Human first" — "AI should amplify people, never replace them."
7. **Stats + logo wall** — Stats (`STATS`): "200+" Clients Transformed; "$2B+" in Value Created; "50+" AI Models in Production; "18" Countries
   - Logo wall (`CLIENT_LOGOS`, text-only, all fictional placeholder company names): "Acme Corp", "Northwind", "Globex", "Initech", "Umbrella", "Stark Ind", "Wayne Ent", "Massimo", "Soylent", "Hooli" *(these are well-known placeholder/parody names from other media — not real clients)*
8. **ClosingCTA** — Trusted: Siemens, Vodafone, Airbus, IBM; Heading: "This story isn't over. It's just getting started."; Sub: "Whether you're a client, a partner, or someone who wants to build the future of enterprise AI – there's a place for you in this story."; Primary: "Join the Team" → `/careers`; Secondary: "Partner with Us" (`#`, dead); Checks: "5,000+ users daily", "99.9% uptime", "SOC 2 certified"

---

## Company → Values — `/values` — [src/pages/company/Values.tsx](src/pages/company/Values.tsx)

1. **PageHero** — Badge: "Our Values"; Title: "We don't just build AI. We raise it."; Sub: "Six core values guide every technical, operational, and interpersonal decision we make at Encegen – from complex neural architecture to human partnership."; Buttons: "Our Story →" → `/our-story`, "Our Culture" → `/culture`
2. **Core principles section** — Eyebrow "Core Principles"; Title "What guides us every day" Cards (`VALUES`, numbered 01–06):
   - "01 Curiosity Over Certainty" — "We will tell you when AI is the wrong answer. We chase the truth relentlessly, even when it challenges our assumptions."
   - "02 Delivering Without Ego" — "We move fast and never cut corners. Velocity without compromise, shipping quality at speed."
   - "03 Build in the Open" — "Your success is our only KPI. Deep partnership over transactional delivery."
   - "04 Speak with Intention" — "No jargon. No confusion. Just results. Every word earns its place."
   - "05 Human-Centered AI" — "AI should amplify people, never replace them. Technology serves humanity."
   - "06 Built to Last" — "We build for 10 years, not the next demo. Durable architecture, sustainable growth."
3. **GradBand quote**: "We have one rule at Encegen: if you wouldn't bet your own career on the performance of our software, we do not ship it." — cited "ALEX RIVERA, CEO & CO-FOUNDER"
4. **"Values in Practice" section** — Eyebrow "Values in Practice"; Title "A rhythm of focus and flow" Timeline rows (`PRACTICES`):
   - "09:00 Honest Retrospectives" — "We reflect on every sprint with radical candor – no blame, only learning."
   - "10:00 Deep Work Blocks" — "Wednesdays are protected for focus. No meetings get in the way of meaningful work."
   - "14:00 Client-First Prioritization" — "We prioritize by business impact, not internal convenience."
   - "16:00 Open Architecture Reviews" — "We share early, iterate publicly, and welcome scrutiny."
   - "17:00 Ship It Fridays" — "We ship working software every week, no matter how small."
   - "18:00 Team Reflection" — "We close the day by reflecting on what we learned together."
5. **Team stats section** — Eyebrow "The Team"; Title "Built by 67 extraordinary humans across 3 continents." Stats (`STATS`): "12" Nationalities; "60%" Engineers; "40%" from Top AI Labs
6. **Voices section** — Eyebrow "Voices"; Title "Don't take our word for it" Quotes (`VOICES`):
   - "I left Google Brain because Encegen felt like the early days of DeepMind — small team, impossible ambition, zero politics." — Dr. Priya Sharma, AI Research Lead
   - "The codebase is the cleanest I've ever worked in. That tells you everything about the culture." — Marcus Chen, Staff Engineer
   - "I've never had a manager who actually blocked their calendar so I could have deep work time. That's Encegen." — Sarah Williams, Product Designer
7. **ClosingCTA** — Trusted: "Enterprise Scale", "99.9% Uptime", "Operational Integrity" — trusted label "built with absolute operational integrity"; Heading: "Live these values with us. Join our engineering team."; Sub: "We are actively looking for researchers, developers, and operators who are exhausted by tech vaporware and want to ship real, durable enterprise value."; Primary: "Explore Open Roles" → `/careers`; Secondary: "Talk to Our Founders" (`#`, dead)

---

## Company → Culture — `/culture` — [src/pages/company/Culture.tsx](src/pages/company/Culture.tsx)

1. **PageHero** — Badge: "Our Culture"; Title: "We don't just build AI. We raise it."; Sub: "At Encegen, intelligence isn't manufactured — it's cultivated. Every model, every agent, every system is built with intention, care, and relentless curiosity."; Buttons: "View Open Roles →" → `/careers`, "Our Values" → `/values`
2. **Principles section** — Eyebrow "Our Principles"; Title "What guides us every day" Numbered list (`PRINCIPLES`, 01–05):
   - "Curiosity Over Certainty" — "We ask questions that haven't been asked. We explore paths that haven't been mapped. Certainty is comfortable; curiosity is how we grow."
   - "Ownership Without Ego" — "Every person here owns their work end to end. We celebrate results, not titles. The best idea wins – regardless of who said it."
   - "Build in the Open" — "We share early, iterate publicly, and welcome scrutiny. Transparency isn't a policy – it's how we think."
   - "Speed with Intention" — "We move fast but never recklessly. Every shortcut we skip today saves us a month tomorrow."
   - "Human-Centered AI" — "Technology serves people, not the other way around. Every feature we ship must make someone's life genuinely better."
   - Pull-quote box: "These aren't posters on a wall. They're how we make decisions, resolve disagreements, and choose what to build next." — cited "– Encegen Leadership Team"
3. **"A Day at Encegen" section** — Eyebrow "A Day at Encegen"; Title "A rhythm of focus and flow"; Sub "How we optimize for meaningful work." Timeline rows (`DAY`):
   - "09:00 Morning Sync" — "Async standup in Slack. No forced calls - just context sharing."
   - "10:30 Deep Work Block" — "3 hours uninterrupted. Calendar blocked, Slack paused. This is when magic happens."
   - "12:00 Lunch & Learn" — "Bi-weekly sessions: GPU optimization to pottery. Anything goes."
   - "14:00 Collaboration Hour" — "Pair programming, design reviews, research discussions. Intentional, not performative."
   - "16:00 Ship It" — "Deploy to production daily. Small, safe, incremental."
   - "17:30 Wind Down" — "Push your branch, close the laptop. Work hard, rest harder."
4. **Team stats section** — Eyebrow "The Team"; Title "Built by 47 extraordinary humans across 3 continents." *(inconsistent with Values page, which says "67 extraordinary humans" for the same team — see tracker)* Stats (`STATS`): "12" Nationalities; "60%" Engineers; "40%" from Top AI Labs
5. **Voices section** — Eyebrow "Voices"; Title "Don't take our word for it" — identical three quotes as on the Values page: Dr. Priya Sharma / AI Research Lead; Marcus Chen / Staff Engineer; Sarah Williams / Product Designer (same text, duplicated verbatim across two pages)
6. **ClosingCTA** — Heading: "Ready to do the best work of your life?"; Sub: "We're not for everyone — and that's the point. If this resonates, we'd love to meet you."; Primary: "View Open Roles →" → `/careers`; Secondary: "Our Story" → `/our-story`; Checks: "Remote-first", "14 open roles" *(the actual jobs data array only lists 14 roles total — this number happens to match, verify before reuse)*, "Backed by Sequoia & Accel" (specific, real, named VC firms with no other corroboration anywhere on the site)

---

## Careers → Careers (job board) — `/careers` — [src/pages/careers/Careers.tsx](src/pages/careers/Careers.tsx)

Data sourced from [src/data/jobs.ts](src/data/jobs.ts).

1. **Hero section** — Badge: "Open Roles"; Title: "Find your place at Encegen."; Body: "Join a team building the future of autonomous AI — we're hiring across engineering, research, product, and more."; Search input placeholder: "Search roles, teams, or keywords…"; Meta line: "🌐 Global team · {n} open roles · Fully remote-friendly" (n is computed live from `JOBS.length`, currently 14)
2. **Department filter buttons** (`DEPARTMENTS`): "All Departments", "Engineering", "AI & Research", "Product", "Sales", "Operations", "Design"
3. **Filter meta row**: "{filtered count} open positions across {n} departments"; link "View all" (functional — resets filters, not a dead link)
4. **Job groups**, each job row showing Title / Department / Type / "Posted X days ago" / Location / "Apply →" link to `/careers/:slug` (`JOBS` array — all 14 roles):
   - "Senior AI Engineer" — AI & Research — Full-time — Remote — Posted 2 days ago
   - "AI Research Scientist" — AI & Research — Full-time — Remote — Posted 11 days ago
   - "ML Platform Engineer" — AI & Research — Full-time — Remote — Posted 3 days ago
   - "NLP Research Lead" — AI & Research — Full-time — Remote — Posted 5 days ago
   - "Solutions Architect" — Engineering — Full-time — Singapore / Remote — Posted 7 days ago
   - "Backend Engineer (Infra)" — Engineering — Full-time — Remote — Posted 4 days ago
   - "Frontend Engineer" — Engineering — Full-time — Remote — Posted 6 days ago
   - "Senior Product Manager" — Product — Full-time — London / Remote — Posted 1 day ago
   - "Product Designer" — Product — Full-time — Remote — Posted 8 days ago
   - "Enterprise Account Executive" — Sales — Full-time — New York — Posted 5 days ago
   - "Growth Marketing Lead" — Sales — Full-time — Remote — Posted 5 days ago
   - "Head of People Operations" — Operations — Full-time — Berlin / Remote — Posted 3 days ago
   - "Legal & Compliance Manager" — Operations — Full-time — London — Posted 9 days ago
   - "Brand Designer" — Design — Full-time — Remote — Posted 2 days ago
   - *(Note: all "posted X days ago" values are static hardcoded strings, not computed from a real posting date — they will read as stale/inaccurate no matter when the site is viewed.)*

---

## Careers → Job Detail — `/careers/:slug` — [src/pages/careers/JobDetail.tsx](src/pages/careers/JobDetail.tsx)

Job-specific fields (title, department, type, location, posted) come from [src/data/jobs.ts](src/data/jobs.ts) per the matching slug. **All narrative content below is identical/generic for every job** — it does not change per role (e.g., a "Brand Designer" posting shows the same "Design and train large language models" bullet as "Senior AI Engineer").

1. **Hero** — Badge: "● {department} · Job Opening"; Breadcrumb: "Careers → All Open Roles → {job title}"; Title: "{job title}"; Meta row: department / type / location / posted; Buttons: "Save Role" (`#`, dead), "Apply Now →" (anchors to on-page form)
2. **"About the Role" section** — Body: "Encegen is building the operating system for autonomous AI agents. As a {job title}, you will join our foundational Research & Engineering team to design, train, and deploy large-scale models that power the next generation of generative interfaces."
   - Body: "You won't just be calling APIs; you'll be building the underlying architecture. This role requires a blend of deep mathematical understanding and the ability to scale inference pipelines to millions of users. You will lead technical decisions on model selection, fine-tuning strategies, and RAG architectures." *(this AI/ML-research-specific description is shown even for non-technical roles like "Enterprise Account Executive" or "Brand Designer")*
3. **"What You'll Do" list** (`WHAT_YOULL_DO`, identical for every job):
   - "Design and train large language models (LLMs) specialized for autonomous tool-use and code generation."
   - "Lead AI research initiatives focused on multi-agent collaboration and long-term memory systems."
   - "Collaborate with product teams to integrate cutting-edge models into seamless user experiences."
   - "Optimize model inference pipelines for low-latency, high-throughput production environments."
   - "Publish original research and represent Encegen at top-tier AI conferences (NeurIPS, ICML, CVPR)."
   - "Mentor junior and mid-level engineers to foster a culture of technical excellence."
   - "Define AI evaluation frameworks to measure model performance, safety, and alignment."
4. **"What We're Looking For" list** (`LOOKING_FOR`, identical for every job):
   - "5+ years of experience in Machine Learning or AI engineering in a high-growth production environment."
   - "PhD or strong research background in Computer Science, Mathematics, or a related quantitative field."
   - "Deep expertise with PyTorch or JAX and experience training models on distributed GPU clusters."
   - "Proven track record of shipping transformer-based architectures or diffusion models at scale."
   - "Strong publication record or significant open-source contributions to the ML community."
   - "Experience with distributed training frameworks like DeepSpeed, Megatron-LM, or FSDP."
5. **"What We Offer" grid** (`OFFERS`, identical for every job):
   - "💰 Competitive Salary" — "$220K–$280K base salary"; "Based on experience & research track record"; "Annual performance reviews with raises"
   - "📈 Equity Package" — "Generous seed-stage equity grants"; "Standard 4-year vesting schedule"; "1-year cliff, monthly thereafter"
   - "🌍 Remote-First" — "Work from anywhere in the world"; "Hubs in San Francisco, NYC & London"; "Home office setup stipend included"
   - "🏥 Health & Wellness" — "Premium medical, dental & vision"; "Coverage for you and dependents"; "Mental health & wellness programs"
   - "📚 Learning Budget" — "$5,000 annual learning stipend"; "Conferences, courses & books"; "Paid time off for certifications"
   - "🏖 25 Days PTO" — "25 days paid time off"; "Flexible scheduling"; "Company-wide recharge weeks"
   - *(Note: salary band "$220K–$280K" is stated as if universal for every role — clearly wrong for e.g. "Brand Designer" or "Legal & Compliance Manager"; hub cities "San Francisco, NYC & London" also conflict with the hub cities listed on the Why Encegen page: "London, Berlin and Singapore.")*
6. **"Apply for this role" form** (sidebar) — Heading: "Apply for this role"; Body: "Join Encegen and help build the future of AI." Fields: "Full Name*" (placeholder "Enter your full name"); "Email Address*" (placeholder "you@example.com"); "Phone Number" (placeholder "+1 (555) 000-0000"); "LinkedIn Profile" (placeholder "linkedin.com/in/username"); "Current Location" (placeholder "e.g. San Francisco, CA"); "Resume / CV*" (upload drop-zone text: "Drag & drop or click to upload" / "PDF, DOC up to 10MB"); "Cover Letter" (placeholder "Briefly describe why you're a good fit…"); "How did you hear about us?" (select options: LinkedIn, Referral, Job board, Other); Submit button: "Submit Application →"
   - **Form does not actually submit anywhere** (`onSubmit={(e) => e.preventDefault()}`) — it is fully non-functional/decorative.
   - Legal line: "By applying, you agree to our Privacy Policy and Terms of Service." — both links `href="#"` (dead; no such pages exist on the site)

---

## Careers → Why Encegen — `/careers/why-encegen` — [src/pages/careers/WhyEncegen.tsx](src/pages/careers/WhyEncegen.tsx)

1. **Hero section** — Badge: "Our story begins with you"; Title: "We're not building an AI company. We're building a better future."; Body: "Join a team of builders, operators, and thinkers solving the hardest problems in enterprise technology."; Buttons: "Explore Open Roles →" → `/careers`, "Our Culture" → `/culture`; Chips: "30+ team members", "Remote-first", "$18M Series A"
2. **GradBand quote**: "We exist to make AI the engine behind every great business decision - and we need exceptional people to make it happen." — cited "Alex Rivera, CEO"
3. **"The Problem" section** — Eyebrow "Chapter 02 · The Problem"; Standalone word: "fails"; Title: "Most enterprise AI fails before it reaches production."
   - Body: "We've seen it firsthand – the $4M pilots, the 18-month deployments, the dashboards that no one looks at. Encegen was built to fix this."
   - Checklist: "We move fast and we show our work"; "We build for outcomes, not demos"; "We hire for impact, not credentials"
   - Comparison panel ("Typical AI Project" vs "With Encegen"): Time to deploy 12 mo → 3 wks; Total cost $2.4M → $180K; User adoption 3% → 74%; Time to value 18 mo → < 30 days
4. **Benefits section** — Eyebrow "Chapter 03 · Why Here"; Title "Everything you need to do your best work." Cards (`BENEFITS`):
   - "📈 Equity for all" — "Every full-time employee gets equity. We win together, period."
   - "🌍 Remote-first" — "Work from wherever you think best. We have hubs in London, Berlin and Singapore." *(conflicts with JobDetail page's stated hubs "San Francisco, NYC & London" — see tracker)*
   - "📚 Learning & growth" — "$3,000 annual stipend for courses, books and conferences." *(conflicts with JobDetail page's stated "$5,000 annual learning stipend" — see tracker)*
   - "🏥 Healthcare" — "Comprehensive health cover for you and your family, globally."
   - "🧘 No meeting days" — "Wednesdays are sacred. Deep work protected by design."
   - "✈️ Team offsites" — "Twice a year, the whole team together. Barcelona, Lisbon, Tokyo."
5. **"The People" section** — Eyebrow "Chapter 04 · The People"; Title "Built by people who've sat in your seat."; Sub "Our team has worked at Siemens, McKinsey, Google, and DeepMind. They left to build something better."
   - Stats (`PEOPLE_STATS`): "9 years" Average experience; "40+" Companies represented; "12" Countries
   - Voice quotes (`VOICES`, initials-only avatars):
     - "I shipped a model that went live in 48 hours. At my last company, that would've taken 6 months of approvals." — Priya N., Principal AI Engineer
     - "The deep work culture here is real. I have actual focus time every day. It changed how I think about work." — Marcus B., Solutions Architect
     - "I own the whole product area. Not a feature, not a roadmap item – the whole area. That kind of ownership is rare." — Sophia C., Senior PM
6. **Departments section** — Eyebrow "Chapter 05 · Where You Fit"; Title "Find where you belong." Cards (`DEPT_CARDS`, each linking "View roles →" to `/careers`):
   - "AI & Research" — "4 open roles" — "Building the models and systems that power Encegen's intelligence layer." — chips: "ML Engineer", "Research Scientist", "AI Lead" *(actual `jobs.ts` data has only 4 AI & Research jobs — consistent)*
   - "Engineering" — "3 open roles" — "Full-stack, systems, infrastructure. We ship fast and we ship real." — chips: "Backend Engineer", "Platform Engineer", "Solutions Architect" *(jobs.ts actually lists 3 Engineering jobs — consistent, though titled slightly differently: "Solutions Architect", "Backend Engineer (Infra)", "Frontend Engineer")*
   - "Product" — "2 open roles" — "Turning complex AI capabilities into experiences enterprises actually want to use." — chips: "Product Manager", "Product Designer"
   - "Go-to-Market" — "3 open roles" — "Sales, marketing, and solutions for a team that's scaling globally." — chips: "Account Executive", "Growth Marketing", "Sales Engineer" *(jobs.ts has no "Go-to-Market" department at all — its department list is Engineering/AI & Research/Product/Sales/Operations/Design; this card's department and chip names don't map to any real job listing)*
7. **"Real Voices" section (with star ratings)** — Eyebrow "Chapter 06 · Real Voices"; Title "Hear from the team." — same three `VOICES` quotes repeated with 5-star rating graphic each
   - Rule bar: "Join 50+ people already building the future of enterprise AI" — link "→ Read reviews on Glassdoor" (`#`, dead)
8. **Roles section** — Eyebrow "Chapter 07 · Your Role"; Title "Where will you make your mark?" — lists first 7 jobs from `JOBS` (same fields as Careers page job rows); Button: "See all {14} open roles →" → `/careers`
9. **Map section** — Title: "Remote-first. Globally connected."; Sub: "Our team works from 18 countries. These are our hub cities." Dot markers + city cards (`CITIES`):
   - "London" — "UK · Hub office"
   - "Berlin" — "Germany · Hub office"
   - "Singapore" — "SG · Hub office"
   - "New York" — "US · Hub office"
   - "San Francisco" — "US · Remote hub"
   - *(5 named hub cities here, but Benefits section above names only "London, Berlin and Singapore" as hubs, and the JobDetail page names "San Francisco, NYC & London" — three different, non-matching hub lists across the site.)*
10. **Recognition section** — Eyebrow "Recognition"; Title "A great place to build."; Sub-quote: "One of the most exciting AI companies in Europe." – Forbes, 2025. Award cards (`AWARDS`):
    - "Glassdoor" — "Best Places to Work · 2025"
    - "Forbes" — "AI 50 · 2024"
    - "Gartner" — "Cool Vendor · 2024"
    - "Deloitte" — "Fast 500 · 2024"
    - "G2" — "Top 50 AI Products · 2025"
    - *(No links/citations to verify any of these awards exist.)*
11. **ClosingCTA** — Heading: "This is where the story gets interesting. And you could be in the next chapter."; Sub: "We're not just hiring. We're building a team of people who give a damn about making AI work for the real world."; Primary: "View All Open Roles" → `/careers`; Secondary: "Send an Open Application" (`#`, dead — no application channel provided)

---

## Insights — `/insights` — [src/pages/Insights.tsx](src/pages/Insights.tsx)

1. **PageHero** — Badge: "Insights Hub"; Title: "Ideas that move enterprise forward"; Sub: "Expert analysis, customer stories, research reports, and hands-on guides — everything you need to stay ahead in process intelligence."; Buttons: "Browse all insights →" (`#`, dead), "Subscribe to newsletter" (`#`, dead — scrolls nowhere, no anchor)
2. **Featured section** — Eyebrow "Featured"; Featured card: chip "Annual Report"; Title "The 2026 State of Process Intelligence: AI, Automation & the Future of Enterprise Operations"; Body "Key findings from 1,200+ enterprise leaders worldwide on how process excellence drives measurable business results in the age of AI."; Meta "📄 52 pages · June 2025 · Free download"; Buttons "Download free report →" (`#`, dead — no PDF attached), "Read preview" (`#`, dead); decorative art tile labeled "2026"
3. **Tab filters** (`TABS`): "All", "Blog", "Reports", "Customer Stories", "Webinars", "Podcasts", "Videos"; sort control text "Latest ▾" (non-functional dropdown)
4. **Article grid** (`ARTICLES`, each card links "Read →"/"Watch →"/"Listen →"/"Download →" to `href="#"`, all dead):
   - Tag "Blog" — "How AI Is Redefining What's Possible in Supply Chain Management" — "AI-powered process mining is transforming how global supply chains respond to disruption and demand shifts." — meta "8 min · May 2025 · Supply Chain" — author "Sarah Chen", "Principal Analyst" — action "Read →"
   - Tag "Customer Story" — "Inside Airbus: A Year of Process Transformation with Encegen" — "How Airbus deployed Encegen across 14 countries to achieve end-to-end visibility in their MRO processes." — meta "15 min · April 2025 · Customer Story" — author "Marcus Brandt", "Senior Editor" — action "Read →"
   - Tag "Webinar" — "Process Mining at Scale: Lessons from 100 Enterprise Deployments" — "Key patterns from 100 real-world deployments – what works, what doesn't, and how to scale process mining." — meta "52 min · On-Demand · Process Mining" — author "Lisa Park", "Solutions Architect" — action "Watch →"
   - Tag "Report" — "2025 Process Intelligence Benchmark Study: Finance Edition" — "Benchmarking finance process maturity across 500+ CFOs - AP, O2C, and treasury process insights." — meta "38 pages · Q1 2025 · Finance" — author "Tom Müller", "Research Director" — action "Download →"
   - Tag "Podcast" — "Ep. 47: Building an AI-First Operations Team from the Ground Up" — "Our Chief AI Officer shares the playbook for building and scaling an AI-native operations team." — meta "34 min · March 2025 · AI & Ops" — author "Aisha Khan", "Chief AI Officer" — action "Listen →"
   - Tag "Blog" — "The Hidden Cost of Manual AP Processes - and How to Fix It" — "Manual AP processing costs enterprises 12x more than automated workflows. Here is how to close the gap." — meta "6 min · March 2025 · Finance Ops" — author "James Rivera", "Finance Lead" — action "Read →"
   - Tag "Customer Story" — "How Vodafone Cut Procurement Cycle Time by 45% in 90 Days" — "Vodafone's 90-day transformation: process mining + automation reduced procurement cycle time by 45%." — meta "10 min · Feb 2025 · Procurement" — author "Elena Vasquez", "Customer Success" — action "Read →"
   - Tag "Video" — "Platform Demo: Encegen AI Recommendations in Action" — "An 18-minute walkthrough of how Encegen AI surfaces and executes recommendations in real SAP environments." — meta "18 min · Product · Demo" — author "Noah Patel", "Product Manager" — action "Watch →"
   - Tag "Report" — "Gartner Recognizes Encegen as a Leader in Process Mining - 2025" — "What the Gartner recognition means for the market and why process intelligence is now a board-level priority." — meta "Analyst Report · 2025 · Gartner" — author "Rachel Stone", "Analyst Relations" — action "Download →"
   - *(None of these nine articles/reports/webinars/podcast episodes actually exist as content anywhere on the site — clicking any of them goes nowhere. Author identities are unverified/likely fabricated.)*
   - "Load more insights →" button (`#`, dead — no pagination wired)
5. **Topics section** — Eyebrow "Browse by Topic"; Title "Find insights for your area" Topic pills (`TOPICS`, non-clickable text): "🔍 Process Mining", "🤖 AI & Automation", "💰 Finance Ops", "🚚 Supply Chain", "🔧 IT Operations", "🏭 Manufacturing"
6. **Newsletter section** — Heading: "Stay ahead of the curve"; Body: "Join 50,000+ process leaders. Weekly insights, reports, and event invites — straight to your inbox."; Email input placeholder "Enter your work email"; Button "Subscribe →" (form `onSubmit` calls `preventDefault()` only — **no actual subscription happens**); Note: "✓ No spam ✓ Unsubscribe anytime ✓ 50,000+ subscribers"

---

## Resources — `/resources` — [src/pages/Resources.tsx](src/pages/Resources.tsx)

1. **PageHero** — Badge: "Resources"; Title: "Learn, Explore, and Master Process Intelligence"; Sub: "Guides, reports, webinars, and documentation to help you get the most out of Encegen." (no action buttons)
2. **"Featured this month" section** — Heading: "Featured this month"; link "View all →" (`#`, dead)
   - Featured card: chip "Annual Report"; Title "The 2026 State of Process Intelligence Report"; Body "Key findings from 1,200+ enterprise leaders worldwide on the future of business execution."; Button "Download free →" (`#`, dead — no file)
   - Side cards (`FEATURED_SIDE`):
     - Tag "On-Demand Webinar" — "AI at Scale: Enterprise Adoption Playbook"
     - Tag "Case Study · 12 min read" — "How Siemens Cut Process Costs by 40%"
3. **Tab filters** (`TABS`): "All", "Blog", "Webinars", "Reports", "Documentation"
4. **Article grid** (`ARTICLES`, each with an author byline that is identical and hardcoded regardless of article — "Alex Rinke", "8 min read" — and a "Read →" link to `href="#"`, dead):
   - "Blog" — "Unlocking hidden value in supply chain operations"
   - "Blog" — "Five signals your AP process is leaking money"
   - "Reports" — "The CFO guide to process intelligence in 2026"
   - "Webinars" — "From pilot to production: scaling process mining"
   - "Blog" — "What real-time process visibility actually requires"
   - "Reports" — "Benchmarking order-to-cash across 500 enterprises"
   - *(Every card attributes authorship to the same person, "Alex Rinke" — the same name used elsewhere on the site as "Co-CEO" on the About page's leadership grid, which doesn't fit a byline for six unrelated articles.)*
5. **Documentation section** — Eyebrow "Documentation"; Title "Everything you need to build on Encegen."; Body "Get your team up and running with our comprehensive developer guides and API references."; Checklist (`DOC_LINKS`, plain text, not actual links): "Getting Started"; "API Reference"; "SDK & Developer Tools"; "Security & Compliance"; Button "Browse docs →" (`#`, dead)
   - Code sample block (illustrative, not necessarily a real/working API):
     ```
     const encegen = new Encegen({
       apiKey: 'process_intelligence_2026',
       environment: 'production'
     });

     await encegen.mining.start({
       source: 'SAP_ERP',
       autoOptimize: true
     });
     ```
6. **Newsletter section** — Heading: "Stay ahead of the curve."; Body: "The latest in process intelligence, delivered weekly."; Email input placeholder "Your work email"; Button "Subscribe" (non-functional, `preventDefault()` only); Note: "Join 50,000+ process professionals. No spam, ever."

---

## Search — `/search` — [src/pages/SearchPage.tsx](src/pages/SearchPage.tsx)

1. **Search hero** — Eyebrow "Search"; Title: "What are you looking for?"; Search bar placeholder: "Search for products, solutions, resources, use cases…"; Button: "Search" (non-functional — no query execution)
   - Suggested-search chips (`SUGGESTIONS`, non-clickable/decorative): "Process Mining", "AI Solutions", "SAP Integration", "Order-to-Cash", "Accounts Payable", "ROI Calculator"
2. **Results tab bar** (`TABS`): "All Results", "Blog", "Resources", "Products", "Solutions", "Videos"; result count label: "2,847 results" (static hardcoded number, not a real query count)
3. **Filter sidebar**:
   - "Filter by Type" checkboxes (`TYPE_FILTERS`): "All Types" (checked by default), "Blog Articles", "Customer Stories", "Whitepapers", "Videos", "Webinars", "Documentation"
   - "Filter by Topic" checkboxes (`TOPIC_FILTERS`): "Process Mining", "AI & Automation", "Supply Chain", "Finance Ops", "IT Operations", "SAP Integration"
   - "Filter by Industry" checkboxes (`INDUSTRY_FILTERS`): "Manufacturing", "Financial Services", "Retail", "Healthcare"
   - Button: "Clear all filters" (functionality not wired to actually filter/clear the static result list)
4. **Result cards** (`RESULTS`, static and identical regardless of any typed search query — the search bar is fully decorative):
   - Tag "Blog" — "How Process Mining Unlocks Hidden Efficiency in SAP Environments" — "Enterprise business processes are often siloed and invisible. Discover how mining your SAP event logs provides the objective truth about how work happens." — meta "8 min read · June 12 2025 · Process Mining" — action "Read article →" (`#`, dead)
   - Tag "Customer Story" — "How Siemens Reduced Invoice Processing by 60% with Encegen AI" — "By identifying bottlenecks in accounts payable, Siemens was able to automate 80% of repetitive manual touches." — meta "12 min · May 28 2025" — action "Read story →" (`#`, dead)
   - Tag "Whitepaper" — "The 2026 State of Process Intelligence Report" — "The definitive guide to how the world's largest enterprises are leveraging AI and mining to drive resilience." — meta "24 pages · PDF Download" — action "Download PDF →" (`#`, dead)
   - Tag "Product" — "Encegen EMS — Product Overview" — "The Execution Management System is the brains of your process intelligence layer. Fix processes directly in your stack." — meta "Core Platform" — action "Explore product →" (`#`, dead) *(references a product "Encegen EMS" that has no dedicated page anywhere in the router)*
   - Tag "Webinar" — "AI at Scale: How Fortune 500s Automate Process Execution" — "Join CDOs from IBM and Airbus for a deep dive into scalable process automation strategies." — meta "Available On-Demand" — action "Watch now →" (`#`, dead)
   - Tag "Documentation" — "Getting Started with the Encegen Process Mining API" — "Everything you need to know about pushing data from custom internal tools directly into the mining layer." — meta "Developer Docs" — action "View docs →" (`#`, dead)
5. **Pagination controls** — Prev "‹" / page buttons "1" "2" "3" / disabled ellipsis "…" / "24" / Next "›" — implies 24 pages of results exist, but only 6 result cards/6 total items are ever rendered regardless of page clicked (page state changes but the result list never updates)

---

# Gaps & Requirements Tracker

Master checklist of every placeholder, fabricated, generic, or non-functional content slot found above. Organized by page in the same order as the inventory.

## Shared: Navbar

1. **Location:** Navbar → Logo → link destination. **Current state:** `href="#"` (dead link, does not even route to `/`). **Required:** working link to homepage `/`.
2. **Location:** Navbar → "Get a demo" button. **Current state:** `href="#"`, non-functional. **Required:** working destination URL — demo request form, Calendly link, or contact page.

## Shared: Footer

3. **Location:** Footer → copyright line. **Current state:** hardcoded "© 2025 Encegen SE." — legal entity name "Encegen SE" not corroborated anywhere else on the site (all other pages call it "Encegen AI Labs" or "Encegen Ai Labs Pvt Ltd" per the Logo). **Required:** confirm the real, single legal entity name and registered jurisdiction; use consistently sitewide.
4. **Location:** Footer → social icon → LinkedIn. **Current state:** `href="#"`, dead. **Required:** real LinkedIn company page URL.
5. **Location:** Footer → social icon → X/Twitter. **Current state:** `href="#"`, dead. **Required:** real X/Twitter profile URL.
6. **Location:** Footer → social icon → YouTube. **Current state:** `href="#"`, dead. **Required:** real YouTube channel URL.
7. **Location:** Footer → legal links → "Privacy Policy". **Current state:** `href="#"`, dead, no page exists. **Required:** real privacy policy page/URL.
8. **Location:** Footer → legal links → "Terms of Use". **Current state:** `href="#"`, dead, no page exists. **Required:** real terms-of-use page/URL.
9. **Location:** Footer → legal links → "Cookie Settings". **Current state:** `href="#"`, dead, no page exists/no cookie-consent tool wired up. **Required:** real cookie settings page or consent-management tool link.

## Shared: Logo

10. **Location:** Logo component → tagline text. **Current state:** "Ai Labs Pvt Ltd" — capitalization/formatting inconsistent with "Encegen AI Labs" used elsewhere; also implies an Indian private-limited entity, conflicting with "Encegen SE" in the footer. **Required:** confirmed, consistent legal/brand name and suffix.

## Home (`/`)

11. **Location:** Home → Hero → secondary button "Watch demo". **Current state:** `href="#"`, dead — no video linked. **Required:** working demo video URL or modal.
12. **Location:** Home → Logo marquee. **Current state:** text-only names of real companies (IBM, Airbus, Uber, Siemens, Vodafone, Celanese, Coca-Cola, Wipro) presented as customers, with no real logos and no evidence of an actual customer relationship. **Required:** verified list of actual customers/partners who have approved logo usage, with real logo assets.
13. **Location:** Home → About section → fact card "2019 / Founded". **Current state:** placeholder founding year; conflicts with About page hero, which states "Founded 2011". **Required:** real, single, confirmed founding year used consistently sitewide.
14. **Location:** Home → About section → fact card "3,500+ / Team". **Current state:** fabricated headcount. **Required:** real current employee count. *(Also conflicts with Values page: "67 extraordinary humans"; Culture page: "47 extraordinary humans"; and Why Encegen page: "30+ team members" — see cross-page conflicts below.)*
15. **Location:** Home → About section → fact card "30+ / Global offices". **Current state:** fabricated. **Required:** real office count and locations.
16. **Location:** Home → Platform section → visual chips "99.8% / 1.2M / 150ms". **Current state:** unlabeled, unexplained fabricated metrics. **Required:** real, labeled platform performance metrics, or remove.
17. **Location:** Home → Industries section → intro copy "70+ industries". **Current state:** unverified claim. **Required:** verified industry-coverage count or removal of the specific number.
18. **Location:** Home → Stats band → "5,000+ Enterprise customers". **Current state:** fabricated. **Required:** real customer count.
19. **Location:** Home → Stats band → "$2.4T Business value delivered". **Current state:** fabricated, implausibly large for the company's apparent size. **Required:** real, defensible value metric or removal.
20. **Location:** Home → Stats band → "98% Customer satisfaction". **Current state:** fabricated. **Required:** real CSAT/NPS figure with methodology, or removal.
21. **Location:** Home → Stats band → "300% Avg. ROI within 12 months". **Current state:** fabricated. **Required:** real, sourced ROI statistic or removal.
22. **Location:** Home → Customer stories → testimonial (Siemens / Anna Müller). **Current state:** fabricated testimonial attributed to a real company and an invented person. **Required:** genuine client name, role, company, quote, and result metric — with permission to publish — or removal.
23. **Location:** Home → Customer stories → testimonial (Uber / James Park). **Current state:** same as above. **Required:** same as above.
24. **Location:** Home → Customer stories → testimonial (Airbus / Marie Dubois). **Current state:** same as above. **Required:** same as above.
25. **Location:** Home → Resources section → three resource cards ("2026 Process Intelligence Report", "AI at Scale: A CEO Masterclass", "EMS technical paper"). **Current state:** no working links/downloads; content referenced (report, masterclass, technical paper) does not appear to exist anywhere on the site. **Required:** real published resource assets and working links, or removal of the section until they exist.

## Platform (`/platform`)

26. **Location:** Platform → Hero → "Explore the platform" link. **Current state:** `href="#"`, dead. **Required:** working destination (in-page anchor or contextual page).
27. **Location:** Platform → Hero → "Watch a 3-min demo" link. **Current state:** `href="#"`, dead. **Required:** working demo video URL.
28. **Location:** Platform → HowItWorks → "94% CONFIDENCE" donut stat. **Current state:** fabricated illustrative figure with no context. **Required:** real metric or explicit "illustrative example" labeling.
29. **Location:** Platform → Modules → all six "Learn more →" links. **Current state:** `href="#"`, dead, no deeper module pages exist. **Required:** working destination pages/anchors per module, or remove the links.
30. **Location:** Platform → Integrations → "See all 200+ integrations →" link. **Current state:** `href="#"`, dead; also only 12 integrations are actually listed against a "200+" claim. **Required:** verified integration count and a working integrations directory page.
31. **Location:** Platform → StatsBar → "<1 Day / 99.9% / 200+ / 10B+" stats. **Current state:** fabricated, unsourced. **Required:** real, sourced platform statistics.
32. **Location:** Platform → Security → badge pills "SOC2, ISO27001, GDPR, HIPAA, FedRAMP, CSA". **Current state:** compliance/certification badges displayed with no evidence, certificates, or trust-center link; "CSA" rendered visually muted implying incomplete status. **Required:** real certification status per badge, with links to certificates/trust center; remove any badge not actually held.
33. **Location:** Platform → CTA → "Get a personalized demo" button. **Current state:** `href="#"`, dead. **Required:** working demo request link.
34. **Location:** Platform → CTA → "Start free trial" button. **Current state:** `href="#"`, dead. **Required:** working signup link.

## Solutions → AI Agents (`/solutions/ai-agents`)

35. **Location:** AI Agents → Hero → both CTA buttons ("See how AI agents fix this →", "Watch the demo"). **Current state:** `href="#"`, dead. **Required:** working destinations.
36. **Location:** AI Agents → "Live Agent Activity" mock panel. **Current state:** fabricated illustrative log data (invoice IDs, timestamps) presented as real system output. **Required:** either real anonymized example or explicit "illustrative" labeling.
37. **Location:** AI Agents → Use cases → "Customer Support" card. **Current state:** internally inconsistent — metric states "45% auto-resolution" while the comparison line states "AI: 83%". **Required:** reconcile to one correct, real figure.
38. **Location:** AI Agents → Use cases → "HR & Onboarding" card. **Current state:** internally inconsistent — metric states "3× faster onboarding" while comparison states "AI: 5×". **Required:** reconcile to one correct, real figure.
39. **Location:** AI Agents → Testimonials (Siemens/Anna Müller, Vodafone/Priya Shah, Airbus/Marc Dubois). **Current state:** fabricated testimonials attributed to real companies. **Required:** genuine testimonials with permission, or removal.
40. **Location:** AI Agents → ClosingCTA → "Deploy an agent →" and "Talk to an expert" buttons. **Current state:** `href="#"`, dead. **Required:** working destinations.

## Solutions → AI Research (`/solutions/ai-research`)

41. **Location:** AI Research → Hero → both CTA buttons. **Current state:** `href="#"`, dead. **Required:** working destinations.
42. **Location:** AI Research → GradBand stats "94% / 12 wks / 3× / 40%". **Current state:** fabricated, unsourced. **Required:** real sourced statistics.
43. **Location:** AI Research → "Model Performance" mock panel (95.4% accuracy, per-model bar chart). **Current state:** fabricated illustrative benchmark data. **Required:** real benchmark data with methodology, or explicit "illustrative" labeling.
44. **Location:** AI Research → Process → ResultBar action "↓ Download our AI project checklist". **Current state:** `href="#"`/no file attached. **Required:** actual downloadable checklist asset.
45. **Location:** AI Research → Use cases → "Manufacturing Defect Detection" card. **Current state:** internally inconsistent — copy claims "Zero false negatives" while the metric shown is a nonzero "0.2% miss rate". **Required:** reconcile to one accurate claim.
46. **Location:** AI Research → Testimonials (Siemens/Andreas Müller, Vodafone/Priya Shah, Airbus/Marc Dubois). **Current state:** fabricated, attributed to real companies (note: "Andreas Müller" here vs. "Anna Müller" for the same "Siemens VP Supply Chain" role elsewhere — inconsistent name for what appears to be the same fabricated persona). **Required:** genuine testimonials with permission, or removal; resolve the name inconsistency.
47. **Location:** AI Research → ClosingCTA buttons. **Current state:** `href="#"`, dead. **Required:** working destinations.

## Solutions → Custom Software (`/solutions/custom-software`)

48. **Location:** Custom Software → Hero → both CTA buttons. **Current state:** `href="#"`, dead. **Required:** working destinations.
49. **Location:** Custom Software → GradBand stats "20+ / 3-6 months / 99.9% / 50+". **Current state:** fabricated. **Required:** real, sourced statistics.
50. **Location:** Custom Software → "What We Build" → TalentBridge product card. **Current state:** describes a product ("TalentBridge") that has no dedicated page anywhere in the router and is not mentioned elsewhere on the site. **Required:** either build/link the actual TalentBridge product page or confirm the product's real status and remove/update this card.
51. **Location:** Custom Software → "What We Build" → HMS product card. **Current state:** describes a product ("HMS", hostel management) that has no dedicated page in the router — only referenced here and in the Nav/Footer mega-menu links (which point to `/platform`, not an HMS page). **Required:** real HMS product page or corrected navigation.
52. **Location:** Custom Software → Testimonials. **Current state:** fabricated quotes attributed only to generic titles ("CHRO", "CEO", "CTO") with no company names. **Required:** genuine, named client testimonials with permission, or removal.
53. **Location:** Custom Software → ClosingCTA buttons. **Current state:** `href="#"`, dead. **Required:** working destinations.

## Solutions → Digital Marketing (`/solutions/digital-marketing`)

54. **Location:** Digital Marketing → Hero → both CTA buttons. **Current state:** `href="#"`, dead. **Required:** working destinations.
55. **Location:** Digital Marketing → GradBand stats "6.4× / 65% / 3× / 40%". **Current state:** fabricated. **Required:** real, sourced growth statistics.
56. **Location:** Digital Marketing → "Channels" section headline. **Current state:** headline promises "Six growth channels" but only 3 channel cards are actually rendered. **Required:** either add the missing three channels with real content, or correct the headline to match what's shown.
57. **Location:** Digital Marketing → Flagship → "See our paid media approach →" button. **Current state:** `href="#"`, dead. **Required:** working destination.
58. **Location:** Digital Marketing → Use cases (D2C brand, SaaS company, e-commerce store). **Current state:** none of the three case studies name the actual client company. **Required:** real client names (or documented anonymization policy) plus verifiable metrics.
59. **Location:** Digital Marketing → Testimonials. **Current state:** fabricated, attributed only to generic titles ("CMO", "Head of Growth", "Founder") with no company names. **Required:** genuine, named client testimonials with permission, or removal.
60. **Location:** Digital Marketing → ClosingCTA buttons. **Current state:** `href="#"`, dead. **Required:** working destinations.

## Solutions → Web & E-commerce (`/solutions/web-ecommerce`)

61. **Location:** Web/E-commerce → Hero → both CTA buttons. **Current state:** `href="#"`, dead. **Required:** working destinations.
62. **Location:** Web/E-commerce → GradBand stats "3× / 98/100 / 2 weeks / 100%". **Current state:** fabricated. **Required:** real, sourced statistics.
63. **Location:** Web/E-commerce → Flagship → "Explore our approach →" button. **Current state:** `href="#"`, dead. **Required:** working destination.
64. **Location:** Web/E-commerce → Testimonials. **Current state:** fabricated, attributed only to generic titles ("Head of Marketing", "CTO", "Founder") with no company names. **Required:** genuine, named client testimonials with permission, or removal.
65. **Location:** Web/E-commerce → ClosingCTA buttons. **Current state:** `href="#"`, dead. **Required:** working destinations.

## Solutions → Use Cases (`/solutions/use-cases`)

66. **Location:** Use Cases → "AI understands" section → three-item link list. **Current state:** all `href="#"`, dead. **Required:** working destinations or convert to plain (non-link) text.
67. **Location:** Use Cases → "Learn how it works →" button. **Current state:** `href="#"`, dead. **Required:** working destination.
68. **Location:** Use Cases → "See how it works →" action button on ResultBar. **Current state:** `href="#"`, dead. **Required:** working destination.
69. **Location:** Use Cases → "Optimize the processes that matter most" → six process links (Order-to-Cash, Purchase-to-Pay, etc.). **Current state:** all `href="#"`, dead. **Required:** real destination pages per process, or convert to plain text.
70. **Location:** Use Cases → GradBand stats "40% / $2.4T / 10B+ / 5,000+". **Current state:** fabricated (and repeats the same "$2.4T" figure used on Home — verify a single real number is used everywhere). **Required:** real, sourced statistics.
71. **Location:** Use Cases → Testimonials (Siemens/Anna Müller, Uber/James Park, Airbus/Marie Dubois). **Current state:** fabricated, reused verbatim/near-verbatim from the Home page testimonials with slightly different metrics (e.g., Siemens metric is "90% fewer invoice exceptions" on Home but "92% fewer exceptions" here for the same quote-giver). **Required:** genuine testimonials, reconciled to one consistent set of facts, with permission, or removal.
72. **Location:** Use Cases → ClosingCTA → "Get AI demo →" and "Download the AI guide" buttons. **Current state:** `href="#"`, dead; "AI guide" has no associated file. **Required:** working destinations and an actual downloadable guide.

## Products → Easy Hunt (`/products/easy-hunt`)

73. **Location:** Easy Hunt → Hero → trusted-by pills (SBI Legal, National Housing Bank, HDFC Law, Shardul Amarchand, AZB & Partners, JSA Law). **Current state:** real, named Indian legal/financial institutions presented as trusted customers with no evidence of relationship. **Required:** verified client list with permission to name them, or generic/removed claim.
74. **Location:** Easy Hunt → Hero → "Start Searching →" and "Book a Demo" buttons. **Current state:** `href="#"`, dead. **Required:** working destinations (product signup / booking flow).
75. **Location:** Easy Hunt → Hero → embedded "Console" mock search results table (Godrej Properties Ltd, Ramesh J. Mehta & Ors, Tata Housing Development rows). **Current state:** fabricated property records naming real companies (Godrej, Tata Housing) as if returned by a live search. **Required:** replace with clearly synthetic/anonymized example data not naming real property owners, or real, permissioned sample output.
76. **Location:** Easy Hunt → Chapter 01 → stat tiles ("4-6 Hours", "75%", "15+", "₹2.4L"). **Current state:** fabricated research statistics. **Required:** real, sourced statistics or removal.
77. **Location:** Easy Hunt → Chapter 02 → "AI Property Profile" mock panel (Godrej Properties ownership history). **Current state:** fabricated record naming a real company. **Required:** synthetic/anonymized example or real permissioned data.
78. **Location:** Easy Hunt → GradBand stats "10L+ / 500+ / 30 Sec / 99.9%". **Current state:** fabricated. **Required:** real, sourced platform statistics.
79. **Location:** Easy Hunt → Testimonials (Advocate Rekha Sharma, Priya Nair, Rajesh Kulkarni/National Housing Bank). **Current state:** fabricated testimonials, one naming a real institution (National Housing Bank). **Required:** genuine, named client testimonials with permission, or removal.
80. **Location:** Easy Hunt → FAQ → "How do I get started?" answer. **Current state:** references domain "easyhunt.in" which is not linked or confirmed as the live product domain anywhere on the site. **Required:** confirm actual product URL and link it.
81. **Location:** Easy Hunt → ClosingCTA → "Start Free Trial →" and "Book a Demo" buttons. **Current state:** `href="#"`, dead. **Required:** working destinations.
82. **Location:** Easy Hunt vs. HR Portal product naming collision. **Current state:** both `/products/easy-hunt` (property intelligence) and `/products/hr-portal` (recruitment, internally branded "EasyHunt" throughout its copy and MockPanel title "EasyHunt Console") use the same product name for two unrelated products. **Required:** rename one product to remove the naming collision, or clarify if this is intentional (unlikely).

## Products → HR Portal (`/products/hr-portal`)

83. **Location:** HR Portal → Hero → trusted-by pills (TCS, Infosys, Wipro, HCL, Accenture, Deloitte). **Current state:** real, named companies presented as trusted customers with no evidence of relationship. **Required:** verified client list with permission, or removal.
84. **Location:** HR Portal → Hero → "Start Hiring →" and "Find Jobs" buttons. **Current state:** `href="#"`, dead. **Required:** working destinations.
85. **Location:** HR Portal → Hero → "EasyHunt Console" mock pipeline (Sarah Jenkins, David Chen, Amelia Rodriguez). **Current state:** fabricated candidate names/data presented as live product output. **Required:** synthetic clearly-labeled example or real permissioned sample.
86. **Location:** HR Portal → "How it works" → "See Matching Architecture →" button. **Current state:** `href="#"`, dead. **Required:** working destination.
87. **Location:** HR Portal → "How it works" → "AI Compatibility Match Evaluation" mock panel (Elena Rostova). **Current state:** fabricated candidate data. **Required:** same as #85.
88. **Location:** HR Portal → "For Job Seekers" → "Create Candidate Profile →" button. **Current state:** `href="#"`, dead. **Required:** working destination (signup flow).
89. **Location:** HR Portal → "For Job Seekers" → "Candidate Dashboard" mock panel (fictional companies "TechCorp", "StartupX", "Metadata team"). **Current state:** fabricated illustrative data. **Required:** same as #85.
90. **Location:** HR Portal → GradBand stats "2M+ / 50K+ / 10K+ / 95%". **Current state:** fabricated. **Required:** real, sourced statistics.
91. **Location:** HR Portal → Testimonials (Siemens/Anna Müller, Uber/James Park, Airbus/Marie Dubois). **Current state:** fabricated — and these exact three names/roles/companies are reused verbatim from the unrelated Home-page and Use-Cases-page testimonials, now with new quotes/metrics attributed to the same "people." **Required:** genuine, distinct testimonials per product with permission, or removal; resolve reused-identity inconsistency.
92. **Location:** HR Portal → Pricing → "Professional" plan price "$99/mo". **Current state:** placeholder pricing with no billing/payment integration behind the buttons. **Required:** real, approved pricing and working checkout flow.
93. **Location:** HR Portal → Pricing → all three plan CTA buttons ("Get Started", "Start Hiring →", "Contact Sales"). **Current state:** non-functional, no destination. **Required:** working signup/sales-contact flows.
94. **Location:** HR Portal → ClosingCTA buttons. **Current state:** `href="#"`, dead. **Required:** working destinations.

## Company → About (`/about`)

95. **Location:** About → Hero → trusted pills "Founded 2011 / 3,500+ Employees / 30+ Global offices". **Current state:** "Founded 2011" directly conflicts with Home page's "2019" founding year. **Required:** single, confirmed founding year used sitewide.
96. **Location:** About → Leadership grid — all eight names/roles (Alexander Rinke, Bastian Nominacher, Martin Klenk, Shelly Bhatt, Lisa Chen, Raj Patel, Emma Davis, Tom Müller). **Current state:** fabricated; the first three names/titles ("Alexander Rinke," "Bastian Nominacher," "Martin Klenk") are the real, publicly known co-founders/CTO of Celonis, a real competitor — almost certainly leftover placeholder content, not Encegen's actual team. No real headshots exist (initials-only avatars). **Required:** URGENT — replace with Encegen's actual leadership team names, titles, and photos; this is a legal/reputational risk as currently written.
97. **Location:** About → Careers band → facts "4.5★ Glassdoor", "#1 Best Workplace", "Hybrid-first culture", "35 nationalities". **Current state:** fabricated. **Required:** real, verifiable figures or removal.
98. **Location:** About → Press section (Forbes, TechCrunch, Gartner, WSJ quotes + "Read article" links). **Current state:** fabricated press mentions attributed to real, well-known outlets, with dead `href="#"` links and no actual articles to point to. **Required:** genuine press coverage with working links, or removal of the section.
99. **Location:** About → Gradient CTA → "Get a demo →" and "Contact us 📞" buttons. **Current state:** `href="#"`, dead; "Contact us" implies a phone number that is never provided anywhere on the site. **Required:** working demo link and a real contact method (phone number, contact page, or email).

## Company → Our Story (`/our-story`)

100. **Location:** Our Story → Hero → "Read the story →" button. **Current state:** `href="#"`, dead (also somewhat redundant since the page itself is the story). **Required:** working destination or remove button.
101. **Location:** Our Story → Milestones timeline → "202x / Global Scale" entry. **Current state:** literal unfilled placeholder year "202x" left in the shipped copy. **Required:** real year.
102. **Location:** Our Story → Milestones → "2022 / Series A — Raised $18M." **Current state:** fabricated funding figure; also conflicts with "$18M Series A" chip on the Why Encegen page (consistent with each other but neither sourced/verified) — but note Our Story's overall founding narrative ("2019 spark") conflicts with About's "Founded 2011." **Required:** verified funding history and reconciled founding date across pages.
103. **Location:** Our Story → pull-quote "CEO & Co-Founder, 2019" (Alex Rivera). **Current state:** names a specific real-sounding person as CEO/Co-Founder — but this identity is never confirmed as real, and no bio/LinkedIn is linked anywhere. **Required:** confirm and link real founder identity, or replace with the real one.
104. **Location:** Our Story → Team grid (Alex Rivera/CEO, Priya Nair/CTO, Marcus Böhm/Chief AI Officer, Sophia Chen/CRO). **Current state:** fabricated/unconfirmed leadership bios, no photos (initials only); also does not match the About page's completely different 8-person leadership list (different names, different titles) for what should be the same company's leadership. **Required:** one single, accurate leadership roster used consistently across About and Our Story, with real photos.
105. **Location:** Our Story → "Rule bar" → unlabeled 5th avatar "JD". **Current state:** an avatar with initials "JD" and no name or role attached anywhere. **Required:** either identify this person or remove the avatar.
106. **Location:** Our Story → Stats "200+ Clients / $2B+ Value Created / 50+ AI Models / 18 Countries". **Current state:** fabricated, and conflicts with other pages' company-scale claims (e.g., Home's "5,000+ enterprise customers," Values page's much smaller team-size numbers). **Required:** one reconciled, real set of scale metrics across the whole site.
107. **Location:** Our Story → Logo wall (Acme Corp, Northwind, Globex, Initech, Umbrella, Stark Ind, Wayne Ent, Massimo, Soylent, Hooli). **Current state:** these are recognizable stock/parody placeholder company names from other media (e.g., "Hooli" from Silicon Valley, "Wayne Ent." from Batman, "Initech" from Office Space) — definitively not real clients. **Required:** replace entirely with real, permissioned client logos, or remove the section.
108. **Location:** Our Story → ClosingCTA → "Partner with Us" button. **Current state:** `href="#"`, dead. **Required:** working destination.

## Company → Values (`/values`)

109. **Location:** Values → Team stats section headline "Built by 67 extraordinary humans across 3 continents." **Current state:** conflicts with Culture page's identical section stating "47 extraordinary humans," and with Home's "3,500+ Team" and Why Encegen's "30+ team members." **Required:** one real, current headcount used consistently sitewide.
110. **Location:** Values → Voices section (Dr. Priya Sharma, Marcus Chen, Sarah Williams). **Current state:** fabricated employee quotes, no photos, duplicated verbatim on the Culture page as if independent content. **Required:** genuine employee quotes (with consent) or removal; de-duplicate across pages.
111. **Location:** Values → ClosingCTA → "Talk to Our Founders" button. **Current state:** `href="#"`, dead. **Required:** working destination.

## Company → Culture (`/culture`)

112. **Location:** Culture → Team stats section headline "Built by 47 extraordinary humans across 3 continents." **Current state:** see #109 — conflicts with Values page's "67" for the apparently same underlying team stat block. **Required:** reconcile with #109.
113. **Location:** Culture → Voices section — identical duplicate of Values page's three quotes. **Current state:** see #110. **Required:** same as #110.
114. **Location:** Culture → ClosingCTA → checklist item "14 open roles". **Current state:** happens to match the current count in jobs.ts (14) but is a hardcoded string that will silently go stale the moment the roles data changes. **Required:** either compute this dynamically from the jobs data (a code change, out of scope for content-only work, but worth flagging) or keep manually in sync — flag as a maintenance risk.
115. **Location:** Culture → ClosingCTA → checklist item "Backed by Sequoia & Accel". **Current state:** names two specific, real, well-known VC firms with zero corroboration anywhere else on the site (no funding/investor page, no press mention). **Required:** confirm real investor names or remove the claim.

## Careers → Careers job board (`/careers`)

116. **Location:** Careers → all 14 job rows → "posted X days ago" field. **Current state:** static hardcoded strings (e.g., "Posted 2 days ago") that do not update with real time and will read as inaccurate/stale immediately. **Required:** either dynamic real posted-dates from an ATS/backend, or accept as a known limitation to refresh manually before each deploy.

## Careers → Job Detail (`/careers/:slug`)

117. **Location:** Job Detail → "About the Role" + "What You'll Do" + "What We're Looking For" body copy. **Current state:** identical AI/ML-research-specific text shown for every single job regardless of actual role (e.g., a "Brand Designer" or "Enterprise Account Executive" posting shows "Design and train large language models," "PhD... in Computer Science," etc.). **Required:** real, role-specific job descriptions and requirements for all 14 roles.
118. **Location:** Job Detail → "What We Offer" → "$220K–$280K base salary" (shown identically for every role). **Current state:** placeholder compensation band applied uniformly to all 14 roles including non-engineering positions. **Required:** real, role-appropriate compensation bands per position (or per level/department).
119. **Location:** Job Detail → "What We Offer" → "Hubs in San Francisco, NYC & London". **Current state:** conflicts with Why Encegen page's stated hubs ("London, Berlin and Singapore") and its separate 5-city map ("London, Berlin, Singapore, New York, San Francisco"). **Required:** one confirmed, consistent list of real office/hub cities across the site.
120. **Location:** Job Detail → "What We Offer" → "$5,000 annual learning stipend". **Current state:** conflicts with Why Encegen page's "$3,000 annual stipend for courses, books and conferences" for what reads as the same benefit. **Required:** one confirmed, consistent figure.
121. **Location:** Job Detail → "Save Role" button. **Current state:** `href="#"`, dead. **Required:** working save/bookmark functionality or remove the button.
122. **Location:** Job Detail → Application form (all fields). **Current state:** entire form is decorative — `onSubmit` only calls `preventDefault()`; no data is sent anywhere. **Required:** real application-submission backend/ATS integration.
123. **Location:** Job Detail → Application form → "Privacy Policy" and "Terms of Service" links in the legal disclaimer. **Current state:** both `href="#"`, dead — pages don't exist (same underlying gap as Footer items #7/#8). **Required:** real linked policy pages.

## Careers → Why Encegen (`/careers/why-encegen`)

124. **Location:** Why Encegen → Hero → chips "30+ team members" and "$18M Series A". **Current state:** "30+ team members" conflicts with every other headcount figure on the site (see #109/#14); "$18M Series A" is unverified and only corroborated by the Our Story milestones timeline (internally consistent with each other, but neither sourced). **Required:** one real, confirmed headcount and funding history, reconciled sitewide.
125. **Location:** Why Encegen → Benefits → "Remote-first... hubs in London, Berlin and Singapore". **Current state:** conflicts with #119 (JobDetail's "San Francisco, NYC & London") and this same page's own later Map section (5 cities). **Required:** reconcile to one real hub-city list.
126. **Location:** Why Encegen → Benefits → "$3,000 annual stipend". **Current state:** conflicts with #120 (JobDetail's "$5,000 annual learning stipend"). **Required:** reconcile to one real figure.
127. **Location:** Why Encegen → Departments → "Go-to-Market" dept card (chips: Account Executive, Growth Marketing, Sales Engineer). **Current state:** "Go-to-Market" is not one of the real departments defined in `jobs.ts` (`DEPARTMENTS` = Engineering, AI & Research, Product, Sales, Operations, Design) and its chip role names don't match any actual job title in the data. **Required:** align this card to the real department taxonomy and real open roles, or update the jobs data to match.
128. **Location:** Why Encegen → "Real Voices" → "Read reviews on Glassdoor" link. **Current state:** `href="#"`, dead. **Required:** real Glassdoor company profile URL.
129. **Location:** Why Encegen → Map section → 5 hub cities (London, Berlin, Singapore, New York, San Francisco). **Current state:** third distinct hub-city list on the site (see #119, #125). **Required:** reconcile to one confirmed list.
130. **Location:** Why Encegen → Recognition → 5 award cards (Glassdoor Best Places to Work 2025, Forbes AI 50 2024, Gartner Cool Vendor 2024, Deloitte Fast 500 2024, G2 Top 50 AI Products 2025). **Current state:** fabricated award claims from real, recognizable award programs, with no citations/links. **Required:** verified real awards with source links, or removal.
131. **Location:** Why Encegen → ClosingCTA → "Send an Open Application" button. **Current state:** `href="#"`, dead — no application channel (email, form) provided. **Required:** working destination.

## Insights (`/insights`)

132. **Location:** Insights → Featured card → "The 2026 State of Process Intelligence... Report" + "Download free report →" / "Read preview" buttons. **Current state:** `href="#"`, dead; no such report file exists anywhere in the project. **Required:** real, published report PDF and working download link.
133. **Location:** Insights → Hero → "Browse all insights →" and "Subscribe to newsletter" buttons. **Current state:** `href="#"`, dead. **Required:** working destinations.
134. **Location:** Insights → all 9 article/report/webinar/podcast cards (listed individually in the page inventory above) → author bylines (Sarah Chen, Marcus Brandt, Lisa Park, Tom Müller, Aisha Khan, James Rivera, Elena Vasquez, Noah Patel, Rachel Stone) and their "Read/Watch/Listen/Download →" actions. **Current state:** none of these 9 pieces of content actually exist; all links are `href="#"`, dead; authors are unconfirmed/likely fabricated names with no bio pages. **Required:** real published content (or remove cards until content exists) and real author attributions with working links.
135. **Location:** Insights → "Load more insights →" button. **Current state:** `href="#"`, dead, no pagination logic. **Required:** real pagination or infinite-scroll wired to a real content source.
136. **Location:** Insights → Newsletter form. **Current state:** `onSubmit` only calls `preventDefault()` — no email is captured/sent anywhere. **Required:** real email-capture backend (ESP integration).
137. **Location:** Insights → Newsletter → "Join 50,000+ process leaders" / "50,000+ subscribers" claim. **Current state:** fabricated subscriber count. **Required:** real subscriber count or removal of the specific number.

## Resources (`/resources`)

138. **Location:** Resources → Featured card → "The 2026 State of Process Intelligence Report" + "Download free →" button. **Current state:** duplicate of the same unpublished report referenced on Insights (#132); `href="#"`, dead. **Required:** real report file and link (should likely be the same single asset referenced consistently, not two separately-described "reports").
139. **Location:** Resources → "View all →" link (featured section header). **Current state:** `href="#"`, dead. **Required:** working destination.
140. **Location:** Resources → Side cards ("AI at Scale: Enterprise Adoption Playbook" webinar; "How Siemens Cut Process Costs by 40%" case study). **Current state:** no links/content behind either card; the Siemens case study repeats a similar (but not identical — 40% here vs. other Siemens figures elsewhere) unverified stat. **Required:** real published content and reconciled Siemens figures, or removal.
141. **Location:** Resources → all 6 article cards → byline "Alex Rinke, 8 min read" (identical on every card). **Current state:** every article attributed to the same person regardless of topic; "Alex Rinke" is also used elsewhere on the site as a fictitious "Co-CEO" (About page) — a title mismatch for a blog byline. **Required:** real, distinct authors per article, or remove bylines until real ones exist.
142. **Location:** Resources → all 6 article cards → "Read →" links. **Current state:** `href="#"`, dead; none of the six pieces of content exist. **Required:** real published articles/reports/webinars with working links.
143. **Location:** Resources → Documentation section → "Browse docs →" button. **Current state:** `href="#"`, dead — no documentation site/pages exist. **Required:** real developer documentation portal and link.
144. **Location:** Resources → Documentation → code sample (`new Encegen({...})`, `encegen.mining.start({...})`). **Current state:** illustrative SDK/API code with no confirmation a real SDK named "Encegen" exists or that this API shape is accurate. **Required:** real, accurate SDK code sample matching the actual product API, or explicit "illustrative" labeling.
145. **Location:** Resources → Newsletter form. **Current state:** `onSubmit` only calls `preventDefault()` — non-functional. **Required:** real email-capture backend.
146. **Location:** Resources → Newsletter → "Join 50,000+ process professionals" claim. **Current state:** fabricated, duplicate of Insights' identical unverified subscriber count. **Required:** real subscriber count or removal.

## Search (`/search`)

147. **Location:** Search → Hero → search input + "Search" button. **Current state:** fully decorative — no query is executed against any content; results below never change based on input. **Required:** real search functionality (search index/backend).
148. **Location:** Search → result count "2,847 results". **Current state:** static hardcoded number unrelated to the 6 cards actually shown. **Required:** real, dynamic result count.
149. **Location:** Search → suggestion chips ("Process Mining", "AI Solutions", "SAP Integration", "Order-to-Cash", "Accounts Payable", "ROI Calculator"). **Current state:** non-clickable/decorative — do not trigger a search. **Required:** wire to real search functionality, or remove if left decorative.
150. **Location:** Search → Filter sidebar (Type/Topic/Industry checkboxes) and "Clear all filters" button. **Current state:** checkboxes do not actually filter the static result list; "Clear all filters" has no effect. **Required:** real filtering logic tied to a real result set.
151. **Location:** Search → 6 result cards (SAP process mining blog, Siemens customer story, 2026 report whitepaper, "Encegen EMS" product overview, Fortune 500 webinar, Process Mining API docs). **Current state:** all `href="#"`, dead; content referenced (including a product called "Encegen EMS" with no dedicated page in the router) does not exist elsewhere on the site. **Required:** real underlying content/pages for every result, or a real search index that only returns content that actually exists.
152. **Location:** Search → Pagination control (implies 24 pages via the "24" button). **Current state:** page state changes on click but the rendered result list never updates — the same 6 static cards show regardless of page. **Required:** real paginated results tied to an actual result set of the implied size, or correct the pagination UI to match the true (much smaller) result count.

## Cross-page consistency issues (do not fit one single page — tracked once here for visibility)

153. **Founding year conflict**: Home says "2019"; About page's "at a glance" trust pills say "Founded 2011"; Our Story's milestone timeline centers its whole narrative on "2019" as "The Spark." **Required:** one confirmed real founding year, corrected everywhere.
154. **Headcount conflict**: Home "3,500+ Team"; Values page "67 extraordinary humans"; Culture page "47 extraordinary humans" (same page template as Values, different number); Why Encegen "30+ team members". **Required:** one real, current headcount, corrected everywhere.
155. **Leadership roster conflict**: About page lists 8 leaders (Alexander Rinke/Co-CEO, Bastian Nominacher/Co-CEO, Martin Klenk/CTO, Shelly Bhatt/CPO, Lisa Chen/CFO, Raj Patel/CMO, Emma Davis/CRO, Tom Müller/COO) — three of these names are the real founders of a competitor company (Celonis). Our Story page lists a completely different 4-person team (Alex Rivera/CEO & Co-Founder, Priya Nair/CTO, Marcus Böhm/Chief AI Officer, Sophia Chen/CRO). **Required:** single, accurate, real leadership roster used consistently on both pages, with real names, titles, and photos.
156. **Office/hub city conflict**: Why Encegen Benefits section says hubs are "London, Berlin and Singapore"; Why Encegen's own Map section (same page) lists 5 different cities (London, Berlin, Singapore, New York, San Francisco); Job Detail's "What We Offer" says hubs are "San Francisco, NYC & London." **Required:** one confirmed, real list of office locations, corrected everywhere.
157. **Learning stipend conflict**: Job Detail states "$5,000 annual learning stipend"; Why Encegen states "$3,000 annual stipend for courses, books and conferences." **Required:** one real figure.
158. **Testimonial identity reuse**: "Anna Müller, VP Supply Chain, Siemens AG" (or "Andreas Müller" on AI Research) and "James Park"/"Marie Dubois" from Airbus/Uber are reused across Home, AI Agents, AI Research (name varies), Use Cases, and HR Portal with different quotes and different metrics each time, as if the same three people gave unique testimonials about four unrelated products/services. **Required:** either genuinely distinct, real testimonials per product, or a single real testimonial reused transparently (not restated with conflicting metrics).
159. **"$2.4T business value" reused across pages** (Home stats band; Use Cases GradBand) as if authoritative, with no source. **Required:** one real, sourced figure or removal.
160. **No working global search, no working newsletter signup, no working demo/trial/contact CTA anywhere on the entire site.** **Current state:** every primary conversion path (demo, trial, contact, newsletter, search, job application) across all 20 pages is either `href="#"` or `preventDefault()`-only. **Required:** treat as the single highest-priority engineering + content gap — no lead-generation or conversion mechanism on the site currently functions.
161. **No dedicated 404/Not Found page.** **Current state:** any unmatched route silently renders the Home page with no "page not found" messaging, confusing users who hit broken/old links. **Required:** a real 404 page with appropriate messaging and navigation back into the site.
162. **"Encegen EMS" and "TalentBridge" referenced as real products** (Search results page; Custom Software page) **with no dedicated product page anywhere in the router.** **Required:** either build the missing product pages or remove these references.
163. **Legal entity name inconsistency**: Footer says "Encegen SE"; Logo tagline says "Ai Labs Pvt Ltd"; body copy across pages says "Encegen AI Labs." **Required:** one confirmed legal entity name and consistent brand naming used sitewide.

