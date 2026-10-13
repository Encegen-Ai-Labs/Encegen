Completed a full top-to-bottom inspection of all page frames in the Figma file (`https://www.figma.com/design/4VdZE0TrYFtBxCnBamjQge/Encegne-Website`). Below is the structured breakdown for every page frame, including exact background colors/gradients, layout dimensions/paddings, typography patterns, structural/visual details, and saved screenshot paths.

---

## Global Typography & Color System Across All Frames
- **Primary Font Family:** `Inter` (used across headings, eyebrows, body copy, badges, and buttons)
- **Typography Scale & Weights:**
  - **Hero Display Headings (H1):** `Inter`, `700`–`800` (Bold/ExtraBold), `48px`–`64px`, line-height `110%`–`115%`, letter-spacing `-0.02em`, White `#FFFFFF` on dark heroes, often with a highlighted span in Purple/Indigo (`#8B5CF6` / `#6B4EFF` / `#3B82F6`).
  - **Section Headings (H2):** `Inter`, `700` (Bold), `36px`–`44px`, `#060B27` or `#0A0F1E` on light backgrounds, `#FFFFFF` on dark backgrounds. Often accompanied by a centered `48px × 3px` `#6B4EFF` underline bar below the heading or subtitle.
  - **Eyebrow Labels:** `Inter`, `600`–`700` (SemiBold/Bold), `11px`–`12px`, uppercase, letter-spacing `0.08em`–`0.12em`, Primary Purple `#6B4EFF` / `#7C3AED` (or inside a pill badge with `#6B4EFF` 15% fill and 1px border).
  - **Card Titles (H3):** `Inter`, `600`–`700`, `18px`–`22px`, `#060B27` (light cards) or `#FFFFFF` (dark cards).
  - **Body Copy:** `Inter`, `400` (Regular), `15px`–`18px`, line-height `150%`–`165%`, `#4B5563` / `#64748B` on light sections, `#94A3B8` / `#CBD5E1` on dark sections.
  - **Buttons & Links:** `Inter`, `600` (SemiBold), `14px`–`16px`, `100%` line-height, pill radius (`9999px` or `24px`–`32px`).
- **Core Background Palette:**
  - **Deep Navy Dark:** `#060B27` and `#0A0F1E` (also radial/linear gradients with `#1E1B4B` or `#6B4EFF` at 13%–15%)
  - **Pure White:** `#FFFFFF`
  - **Soft Lavender / Off-White Tint:** `#F8F9FF`, `#F7F7FE`, `#F3F0FF`
  - **Vibrant Purple Banner Gradient:** Linear Gradient `#8B5CF6` -> `#4B2ECC` (or `#7C3AED` -> `#EC4899` magenta-purple on quote/mission bands)

---

## 1. `platform-page` (`node-id=2018-187`, Width: `1440px`)
**Screenshots:**
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\platform_page_1.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\platform_page_2.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\platform_page_3.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\platform_page_4.png`

**Sections & Colors:**
1. **`header`**: `#FFFFFF` navbar (`Solutions v`, `Resources`, `Products v`, `Insights`, `Company v`, Search button, `Get a demo` lavender pill).
2. **`hero` (`node-id=2027-14`)**:
   - **Dimensions & Padding:** `1440px × 620px` (Fixed), Padding `96px` top/bottom, `80px` left/right, Gap `24px`.
   - **Background:** Radial Gradient `#6B4EFF` -> `#060B27`.
   - **Content:** Pill badge `"THE ENCEGEN PLATFORM"`, Heading `"One Platform to Run"` (white) + `"Every Business Process"` (purple `#6B4EFF`), Subtitle `"Encegen connects your data, processes, and systems into a single intelligent layer – giving every team the clarity to act."`
   - **CTAs & Trust Pills:** Two white pill buttons (`"Explore the platform ->"`, `"Watch a 3-min demo [play]"`) + 3 white glassmorphic trust pills (`SOC 2 Certified`, `Global Scale`, `Real-Time`).
3. **`platform-architecture`**:
   - **Background:** `#FFFFFF`.
   - **Content:** Eyebrow `"HOW IT WORKS"`, Heading `"Three layers. One unified platform."` Dark navy container (`#060B27`) with `DATA LAYER` (`LIVE DATA` green dot) and 3 horizontal layer rows (`Process Mining`, `AI & Execution`, `ERP Systems / Automation / Dashboards / Notifications`).
4. **`core-platform-modules` (`node-id=2027-103`)**:
   - **Dimensions & Padding:** `1440px × 931px`, Padding `96px` top/bottom, `80px` left/right, Gap `40px`.
   - **Background:** `#FFFFFF`.
   - **Content:** Eyebrow `"PLATFORM MODULES"`, Heading `"Everything you need, fully integrated."`
   - **3×2 Card Grid** (white cards, `#6B4EFF` top border accent, lavender icon square, title, description, `"Learn more ->"` link):
     1. `Process Mining`
     2. `Execution Management`
     3. `AI Insights`
     4. `Action Flows`
     5. `Studio`
     6. `Data Push API`
5. **`how-it-works`**:
   - **Background:** `#F8F9FF`.
   - **Content:** Heading `"From raw data to real action in three steps."` 3-column horizontal step cards (`Connect Your Data`, `Discover Process Reality`, `Act and Optimize`).
6. **`integrations-ecosystem` (`node-id=2027-191`)**:
   - **Dimensions & Padding:** `1440px × 708px`, Padding `96px` top/bottom, `80px` left/right, Gap `32px`.
   - **Background:** `#060B27`.
   - **Content:** Eyebrow `"INTEGRATIONS"`, Heading `"Works with the tools your teams already use."` 4×3 grid of 12 white rounded pill cards (`SAP`, `Salesforce`, `ServiceNow`, `Oracle`, `Microsoft`, `Workday`, `Coupa`, `Snowflake`, `Databricks`, `Google Cloud`, `AWS`, `Slack`) + white pill CTA `"See all 200+ integrations ->"`.
7. **`platform-metrics`**:
   - **Background:** Linear Gradient `#8B5CF6` -> `#4B2ECC`.
   - **Content:** 4 stat columns in white: `<1 Day` (`Average time to first insight`), `99.9%` (`Platform uptime SLA`), `200+` (`Pre-built connectors`), `10B+` (`Events processed daily`).
8. **`enterprise-security` (`node-id=2027-255`)**:
   - **Dimensions & Padding:** `1440px × 659px`, Padding `96px` top/bottom, `80px` left/right, Gap `40px`.
   - **Background:** `#F8F9FF`.
   - **Content:** Eyebrow `"SECURITY & COMPLIANCE"`, Heading `"Enterprise-grade security, built in from day one."` 4 white cards (`SOC 2 Type II`, `GDPR Compliant`, `SSO & MFA`, `Role-Based Access`) + 6 compliance badge pills (`SOC2`, `ISO27001`, `GDPR`, `HIPAA`, `FedRAMP`, `CSA`).
9. **`cta-banner`**:
   - **Background:** Soft lavender neumorphic card (`#EDE9FE` -> `#F8F9FF` radial gradient with top-left/top-right radius) with purple heading `"Ready to transform your operations?"` and 2 pill buttons.
10. **`footer`**: `#060B27` standard footer.

---

## 2. `solutions-page` (`node-id=2018-372`, Width: `1440px`)
**Screenshots:**
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\solutions_page_1.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\solutions_page_2.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\solutions_page_3.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\solutions_page_4.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\solutions_page_5.png`

**Sections & Colors:**
1. **`header`** + **`sub-nav`**: White header + sub-nav bar.
2. **`hero` (`node-id=2018-388`)**:
   - **Dimensions & Padding:** `1440px × 680px` (Fixed), Padding `96px`, Gap `40px`.
   - **Background:** Linear Gradient `#03051A` -> `#0A0F2E`.
   - **Content:** Pill badge `"ENCEGEN AI"`, Heading `"Put AI to Work Across"` (white) + `"Every Business Process"` (sky blue `#38BDF8` / `#3B82F6`), Subtitle `"Encegen AI doesn't just surface insights – it acts. Embed intelligent automation directly into your SAP, Salesforce, and ServiceNow workflows."`
3. **`what-is-ai`**:
   - **Background:** `#FFFFFF`.
   - **Content:** 2-column layout. Left: Eyebrow `"PROCESS INTELLIGENCE + AI"`, Heading `"AI that understands your business - not just your data."` + `"Learn how it works ->"` pill button. Right: Dark comparison card (`Traditional AI` with red `X` items vs `ENCEGEN AI` with green check `"Continuously proactive"`).
4. **`ai-capabilities` (`node-id=2018-395`)**:
   - **Dimensions & Padding:** `1440px × 871px`, Padding `96px`, Gap `48px`.
   - **Background:** `#F8F9FF`.
   - **Content:** Eyebrow `"AI CAPABILITIES"`, Heading `"Four ways AI transforms your operations."`
   - **2×2 Card Grid** (white cards with purple circle icon on left and bottom-right status pill badge):
     1. `Process Discovery` (`AUTOMATED`)
     2. `Root Cause Analysis` (`INTELLIGENT`)
     3. `Recommended Actions` (`PROACTIVE`)
     4. `Continuous Optimization` (`ADAPTIVE`)
5. **`problem-solver`**:
   - **Background:** `#FFFFFF`.
   - **Content:** Heading `"Most enterprises are running blind. Encegen fixes that."` 3-row Before vs. After comparison cards (`Exceptions handled manually` vs `Automated exception handling`, `No visibility across systems` vs `Unified intelligence layer`, `Reactive, not proactive` vs `Predictive, not reactive`) + dark `#060B27` bottom callout banner (`87% of AI recommendations are actioned within 24 hours`, `3.2x faster response`, `5,000+ enterprise deployments`).
6. **`by-process` (`node-id=2034-92`)**:
   - **Dimensions & Padding:** `1440px × 592px`, Horizontal flow, Padding `96px`, Gap `80px`, 1px top/bottom border `#E5E7EB`.
   - **Background:** `#FFFFFF`.
   - **Content:** Heading `"Optimize the processes that matter most."` Left list of 6 processes with purple arrows (`Order-to-Cash`, `Purchase-to-Pay`, `Accounts Payable`, `Logistics & Fulfillment`, `IT Service Management`, `HR Service Delivery`).
7. **`ai-use-cases`**:
   - **Background:** `#060B27`.
   - **Content:** Heading `"AI-powered solutions for your most critical processes."` 3×2 grid of dark navy cards (`#0D1538` with subtle border, purple icon, category pill badge, title, description, and purple metric highlight):
     1. `Accounts Payable Automation` (`FINANCE` — `65% faster`)
     2. `Supply Chain Resilience` (`SUPPLY CHAIN`)
     3. `Order-to-Cash Excellence` (`REVENUE`)
     4. `IT Service Management` (`IT OPS` — `3x faster resolution`)
     5. `Manufacturing Operations` (`MANUFACTURING` — `22% OEE improvement`)
     6. `Procurement Intelligence` (`PROCUREMENT` — `$2.4M avg savings`)
8. **`ai-results` (`node-id=2034-212`)**:
   - **Dimensions & Padding:** `1440px × 478px`, Padding `96px`, Gap `48px`.
   - **Background:** Linear Gradient `#8B5CF6` -> `#4B2ECC`.
   - **Content:** Eyebrow `"PROVEN IMPACT"`, Heading `"Real results from real deployments."` 4 frosted glass stat cards (`40% avg process improvement`, `$2.4T business value unlocked`, `10B+ events daily`, `5,000+ enterprise customers`).
9. **`customer-proof`**:
   - **Background:** `#FFFFFF`.
   - **Content:** Eyebrow `"CUSTOMER STORIES"`, Heading `"Enterprises running smarter with Encegen AI."` 3 quote cards (`SIEMENS`, `UBER`, `AIRBUS`) + `"Read all customer stories ->"` pill button.
10. **`cta-banner` 1**: Soft lavender banner `"Ready to put AI to work?"` (`Get an AI demo ->`, `Download the AI guide`).
11. **`proof` (`node-id=2018-515`)**:
    - **Dimensions & Padding:** `1440px × 478px`, Padding `80px` top/bottom, `96px` left/right, Gap `64px`.
    - **Background:** `#060B27`.
    - **Content:** Heading `"Join 5,000+ companies transforming their operations."`, stats (`70+ INDUSTRIES`, `300% AVG ROI`, `$2.4T BUSINESS VALUE`), logos (`SIEMENS`, `Uber`, `AIRBUS`).
12. **`cta-banner` 2**: Soft lavender banner `"Find your solution."` (`Talk to an expert ->`, `Browse all solutions`).
13. **`footer`**: `#060B27`.

---

## 3. `Resources` (`node-id=2020-188`, Width: `1440px`)
**Screenshots:**
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\resources_page_1.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\resources_page_2.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\resources_page_3.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\resources_page_4.png`

**Sections & Colors:**
1. **`header`**: `#FFFFFF`.
2. **`hero` (`node-id=2020-204`)**:
   - **Dimensions & Padding:** `1440px × 600px`, Padding `180px` top, `120px` bottom, Gap `48px`.
   - **Background:** `#0A0F1E` with `#6B4EFF` radial gradient glow (15% -> 5% -> 0%).
   - **Content:** Pill badge `"RESOURCES"`, Heading `"Learn, Explore, and Master"` (white) + `"Process Intelligence"` (purple `#7C3AED`), Subtitle `"Guides, reports, webinars, and documentation to help you get the most out of Encegen."`
3. **Featured Section (`Frame`, `node-id=2020-213`)**:
   - **Background:** `#FFFFFF`.
   - **Content:** Header row (`FEATURED`, `"Featured this month"`, `"View all ->"`), large darkfeatured banner (`ANNUAL REPORT` — `"The 2026 State of Process Intelligence"`, `"Download free ->"`), plus 2 sub-cards below (`ON-DEMAND WEBINAR`, `CASE STUDY`).
4. **Resource Library Grid (`Frame`, `node-id=2020-241`)**:
   - **Dimensions & Padding:** `1440px × 1093px`, Padding `96px` top/bottom, `80px` left/right, Gap `64px`.
   - **Background:** `#F8F9FF`.
   - **Content:** Filter tabs (`All` active with purple underline, `Blog`, `Webinars`, `Reports`, `Documentation`) + 3×2 grid of 6 resource cards (dark tech thumbnail image, purple `CATEGORY` badge, title `"Unlocking hidden value in supply chain operations"`, author avatar `Alex Rinke`, `8 min read`).
5. **Documentation Section (`Frame`, `node-id=2020-322`)**:
   - **Dimensions & Padding:** `1440px × 688px`, Horizontal 2-column flow, Padding `96px` top/bottom, `80px` left/right, Gap `80px`.
   - **Background:** `#FFFFFF`.
   - **Content:** Left: Eyebrow `"DOCUMENTATION"`, Heading `"Everything you need to build on Encegen."`, 4 checklist items (`Getting Started`, `API Reference`, `SDK & Developer Tools`, `Security & Compliance`), lavender pill CTA `"Browse docs ->"`. Right: macOS-style dark code terminal window (`#060B27`) showing JS SDK initialization (`const encegen = new Encegen(...)`).
6. **Newsletter Banner (`Frame`, `node-id=2020-355`)**:
   - **Dimensions & Padding:** `1440px × 394px`, Padding `80px`, Gap `40px`.
   - **Background:** Linear Gradient `#8B5CF6` -> `#4B2ECC`.
   - **Content:** Heading `"Stay ahead of the curve."`, Subtitle `"The latest in process intelligence, delivered weekly."`, white email input `"Your work email"` + `"Subscribe"` white pill button.
7. **`footer`**: `#060B27`.

---

## 4. `company-page` (`node-id=2020-420`, Width: `1440px`)
**Screenshots:**
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\company_page_1.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\company_page_2.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\company_page_3.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\company_page_4.png`

**Sections & Colors:**
1. **`header`**: `#FFFFFF`.
2. **`hero` (`node-id=2020-436`)**:
   - **Dimensions & Padding:** `1440px × 787px`, Padding `220px` top, `120px` bottom, Gap `48px`.
   - **Background:** `#060B27` (with purple radial glow).
   - **Content:** Pill badge `"OUR STORY"`, Heading `"We Believe Every Process"` (white) + `"Should Be Understood"` (purple `#7C3AED`), Subtitle, and 3 white pill stat badges (`Founded 2011`, `3,500+ Employees`, `30+ Global offices`).
3. **Our Mission (`Frame` 1)**:
   - **Background:** `#FFFFFF`.
   - **Content:** 2-column horizontal layout. Left: Eyebrow `"OUR MISSION"`, Heading `"Making processes work for people, not against them"`, 2 paragraphs of body copy. Right: Boardroom team photo card.
4. **Our Values (`Frame` 2, `node-id=2020-456`)**:
   - **Dimensions & Padding:** `1440px × 556px`, Padding `96px` top/bottom, `80px` left/right, Gap `64px`.
   - **Background:** `#F8F9FF`.
   - **Content:** Eyebrow `"OUR VALUES"`, Heading `"What we stand for"`, 4-column card grid (white cards with purple top border accent): `Transparency`, `Innovation`, `Customer First`, `Integrity`.
5. **Leadership (`Frame` 3)**:
   - **Background:** `#FFFFFF`.
   - **Content:** Heading `"Meet our leadership"`, Eyebrow `"LEADERSHIP"`, 4×2 grid of 8 executive portrait cards with name and purple role label (e.g., `Lisa Chen CPO`, `Raj Patel CMO`, `Emma Davis CRO`, `Tom Müller COO`).
6. **Careers Highlight (`Frame` 4, `node-id=2020-536`)**:
   - **Dimensions & Padding:** `1440px × 538px`, Horizontal 2-column flow, Padding `96px` top/bottom, `80px` left/right, Gap `80px`.
   - **Background:** `#060B27`.
   - **Content:** Left: Eyebrow `"CAREERS"`, Heading `"Help us transform the way the world works."`, role tags (`Software Engineer`, `Product Manager`, `Enterprise Sales`), white pill CTA `"View all open roles ->"`. Right: 2×2 dark glass stat cards (`4.5★ Glassdoor`, `#1 Best Workplace`, `Hybrid-first culture`, `35 nationalities`).
7. **In the Press (`Frame` 5)**:
   - **Background:** `#FFFFFF`.
   - **Content:** Eyebrow `"IN THE PRESS"`, Heading `"What people are saying about Encegen"`, 4 press quote cards (`Forbes`, `TechCrunch`, `Gartner`, `WSJ`) with `"Read article"` links.
8. **CTA Banner (`Frame` 6, `node-id=2020-584`)**:
   - **Dimensions & Padding:** `1440px × 365px`, Padding `80px`, Gap `40px`.
   - **Background:** Linear Gradient `#8B5CF6` -> `#4B2ECC`.
   - **Content:** Heading `"Ready to join the process intelligence revolution?"` + 2 white pill buttons (`Get a demo ->`, `Contact us`).
9. **`footer`**: `#060B27`.

---

## 5. `About Us - Cinematic Story` (`node-id=2318-156`, Width: `1440px`)
**Screenshots:**
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\about_us_1.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\about_us_2.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\about_us_3.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\about_us_4.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\about_us_5.png`

**Sections & Colors:**
1. **`header`**: `#FFFFFF`.
2. **`chapter-0` (Hero, `node-id=2327-5`)**:
   - **Dimensions & Padding:** `1440px × 640px` (Fixed), Padding `120px` top/bottom, `80px` left/right.
   - **Background:** Linear Gradient `#0A0F1E` -> `#1E1B4B`.
   - **Content:** Heading `"We didn't build an AI company. We built a better future."`, Subtitle `"Encegen was born from a simple frustration – that most enterprise software talks about AI, but very few actually deliver it."`, 2 buttons (`Read the story ->` white pill, `Our values` dark outline pill).
3. **`chapter-1` (`CHAPTER 01` - The Frustration)**:
   - **Background:** `#FFFFFF`.
   - **Content:** 2-column layout. Left: Pill `"CHAPTER 01"`, Red eyebrow `"THE FRUSTRATION"`, Heading `"Most enterprise software promises transformation. Most delivers dashboards."` Right: Dark card `"THE TRUTH: Reality vs. promise"` comparing `THE PROMISE` (checkmarks) vs `THE REALITY` (red `X` marks).
4. **`chapter-2` (`node-id=2327-54` - Founder Quote & Timeline)**:
   - **Dimensions & Padding:** `1440px × 640px`, Padding `96px` top/bottom, `80px` left/right, Gap `32px`.
   - **Background:** `#0A0F1E`.
   - **Content:** Centered quote `"We sat in a boardroom watching a $4M AI pilot fail in real time. That was the day we decided to build differently."` (`- ALEX RIVERA, CEO & CO-FOUNDER, 2019`) + 4-step horizontal timeline (`2019 The Spark`, `2020 First Clients`, `2022 Series A`, `2024 Global Scale`).
5. **`chapter-3` (`CHAPTER 03`)**:
   - **Background:** `#F8F9FF`.
   - **Content:** 2-column layout. Left: Pill `"CHAPTER 03"`, Heading `"We build AI that actually runs your business."` with 3 bullet points (`No black boxes. Only outcomes.`, `Deployed in weeks, not years.`, `Your data never leaves your walls.`). Right: Dark card `"AI DEPLOYMENT STATUS • Live"` showing 7 live engines (`Anomaly Detection`, `Forecasting Engine`, `Compliance Monitor`, etc.).
6. **`chapter-4` (`CHAPTER 04`, `node-id=2327-118`)**:
   - **Dimensions & Padding:** `1440px × 678px`, Padding `80px`, Gap `32px`.
   - **Background:** `#FFFFFF`.
   - **Content:** Pill `"CHAPTER 04"`, Heading `"Built by people who've sat in your seat."`, 4 founder/leader cards (`Alex Rivera`, `Priya Nair`, `Marcus Böhm`, `Sophia Chen`) + dark bottom bar `"We have one rule at Encegen: if you wouldn't bet your own career on it, we don't ship it."`
7. **`chapter-5`**:
   - **Background:** `#0A0F1E`.
   - **Content:** Heading `"What we stand for."` 3×2 grid of 6 colored-tint dark cards (`01 Honesty over hype` purple, `02 Speed with integrity` blue, `03 Client obsession` green, `04 Radical clarity` rust/red, `05 Built to last` olive/gold, `06 Human first` magenta/purple).
8. **`chapter-6` (`node-id=2327-197`)**:
   - **Dimensions & Padding:** `1440px × 429px`, Padding `80px`, Gap `32px`.
   - **Background:** `#F8F9FF`.
   - **Content:** 4 purple stats (`200+ Clients Transformed`, `$2B+ in Value Created`, `50+ AI Models in Production`, `18 Countries`) + 5×2 grid of 10 client name tiles (`Acme Corp`, `Northwind`, `Globex`, `Initech`, `Umbrella`, `Stark Ind`, `Wayne Ent`, `Massive`, `Soylent`, `Hooli`).
9. **`final-cta` (`node-id=2332-416`)**:
   - **Dimensions & Padding:** `1440px × 512px`, Top-left/Top-right radius `50px`, Neumorphic radial gradient `#EDE9FE` -> `#F8F9FF`.
   - **Content:** Trust pills (`Siemens`, `Vodafone`, `Airbus`, `IBM`), Heading `"This story isn't over."` (`#0A0F1E`) + `"It's just getting started."` (`#7C3AED`), 2 pill buttons (`Join the Team`, `Partner with Us`).
10. **`footer`**: `#060B27`.

---

## 6. `Insights` (`node-id=2046-186`, Width: `1440px`)
**Screenshots:**
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\insights_page_1.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\insights_page_2.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\insights_page_3.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\insights_page_4.png`

**Sections & Colors:**
1. **`header`**: `#FFFFFF`.
2. **`insights-hero` (`node-id=2046-217`)**:
   - **Dimensions & Padding:** `1440px × 437px`, Padding `80px`.
   - **Background:** `#060B27` with `#6B4EFF` (13.33%) radial gradient.
   - **Content:** Pill `"INSIGHTS HUB"`, Heading `"Ideas that move enterprise forward"`, Subtitle, 2 white pill buttons (`Browse all insights ->`, `Subscribe to newsletter`).
3. **`featured-article` (`node-id=2046-228`)**:
   - **Dimensions & Padding:** `1440px × 618px`, Padding `80px` top, `40px` bottom, Gap `32px`.
   - **Background:** `#FFFFFF`.
   - **Content:** Eyebrow `"FEATURED"`, large 2-column dark navy/indigo banner (`ANNUAL REPORT` — `"The 2026 State of Process Intelligence: AI, Automation & the Future of Enterprise Operations"`, `"Download free report ->"`, `"Read preview"`, right graphic `"2026 STATE OF PROCESS INTELLIGENCE"`).
4. **`content-filters`**:
   - **Background:** `#FFFFFF` with bottom border.
   - **Content:** Left filter pills (`All` active purple pill, `Blog`, `Reports`, `Customer Stories`, `Webinars`, `Podcasts`, `Videos`) + Right sort dropdown (`Latest v`).
5. **`insights-grid` (`node-id=2046-269`)**:
   - **Dimensions & Padding:** `1440px × 1613px`, Padding `96px` top/bottom, `80px` left/right, Gap `64px`.
   - **Background:** `#F8F9FF`.
   - **Content:** 3×3 grid of 9 article cards (white cards with top photo, colored category pill `BLOG` / `CUSTOMER STORY` / `WEBINAR` / `REPORT` / `PODCAST` / `VIDEO`, title, excerpt, metadata, author avatar + name/role, and action link `Read ->` / `Watch ->` / `Download ->` / `Listen ->`) + centered lavender pill button `"Load more insights ->"`.
6. **`topics-strip`**:
   - **Background:** `#FFFFFF`.
   - **Content:** Eyebrow `"BROWSE BY TOPIC"`, Heading `"Find insights for your area"`, 6 gray/lavender pill tags with icons (`Process Mining`, `AI & Automation`, `Finance Ops`, `Supply Chain`, `IT Operations`, `Manufacturing`).
7. **`newsletter` (`node-id=2046-383`)**:
   - **Dimensions & Padding:** `1440px × 280px` (Fixed), Padding `64px` top/bottom, `80px` left/right, Gap `32px`.
   - **Background:** Linear Gradient `#8B5CF6` -> `#4B2ECC`.
   - **Content:** Heading `"Stay ahead of the curve"`, email input `"Enter your work email"` + `"Subscribe ->"` button + trust microcopy (`✓ No spam • ✓ Unsubscribe anytime • ✓ 50,000+ subscribers`).
8. **`footer`**: `#060B27`.

---

## 7. `careers-page` (`node-id=2334-3`, Width: `1440px`)
**Screenshots:**
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\careers_1.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\careers_2.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\careers_why_join.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\careers_3.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\careers_4.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\careers_5.png`

**Sections & Colors:**
1. **`header`**: `#FFFFFF`.
2. **`hero` (`node-id=2338-5`)**:
   - **Dimensions & Padding:** `1440px × 854px`, Horizontal 2-column flow, Padding `120px`, Gap `48px`.
   - **Background:** `#0A0F1E`.
   - **Content:** Left: Eyebrow `"OUR STORY BEGINS HERE"`, Heading `"We're not building an AI company. We're building a better future."`, 2 buttons (`Explore Open Roles ↓` white pill, `Our Culture` outline pill), 3 dark pill tags (`• 50+ team members`, `• Remote-first`, `• $18M Series A`). Right: 2×2 grid of 4 neon-lit team silhouette photos.
3. **`mission-band`**:
   - **Background:** Purple-to-pink linear gradient (`#7C3AED` -> `#EC4899`).
   - **Content:** Italic quote `"We exist to make AI the engine behind every great business decision - and we need exceptional people to make it happen." — Alex Rivera, CEO`.
4. **`chapter-01-problem` (`node-id=2339-11`)**:
   - **Dimensions & Padding:** `1440px × 776px`, Padding `80px` top/bottom, `120px` left/right.
   - **Background:** `#0A0F1E`.
   - **Content:** Left: Pill `"CHAPTER 01 • THE PROBLEM"`, red word `"fails"`, Heading `"Most enterprise AI fails before it reaches production."`, 3 arrow bullets. Right: Dark comparison card (`TYPICAL AI PROJECT` red bars vs `WITH ENCEGEN` green bars: `12 mo vs 3 wks`, `$2.4M vs $180K`, `3% vs 74%`, `18 mo vs < 30 days`).
5. **`why-join` (`node-id=2338-41`)**:
   - **Dimensions & Padding:** `1440px × 656px`, Padding `80px` top/bottom, `120px` left/right, Gap `40px`.
   - **Background:** `#F3F0FF` (soft lavender).
   - **Content:** Eyebrow `"CHAPTER 02 • WHY HERE"`, Heading `"Everything you need to do your best work."` 3×2 grid of 6 white perk cards (`Equity for all`, `Remote-first`, `Learning & growth`, `Healthcare`, `No-meeting days`, `Team offsites`).
6. **`chapter-03-people`**:
   - **Background:** `#0A0F1E`.
   - **Content:** Eyebrow `"CHAPTER 03 • THE PEOPLE"`, Heading `"Built by people who've done it before."` Left stats table (`Average experience: 9 years`, `Companies represented: 40+`, `Countries: 18`, `PhDs on team: 7`). Right: 3 horizontal team member quote rows (`Priya N.`, `Marcus B.`, `Sophia C.`).
7. **`teams` (`node-id=2338-78`)**:
   - **Dimensions & Padding:** `1440px × 752px`, Padding `80px` top/bottom, `120px` left/right, Gap `40px`.
   - **Background:** `#FFFFFF`.
   - **Content:** Eyebrow `"CHAPTER 04 • WHERE YOU FIT"`, Heading `"Find where you belong."` 2×2 grid of department cards with colored top borders (`AI & Research` purple `8 open roles`, `Engineering` blue `12 open roles`, `Product` teal `5 open roles`, `Go-to-Market` orange `9 open roles`).
8. **`employee-stories`**:
   - **Background:** `#F8F9FF`.
   - **Content:** 3 employee testimonial cards with 5-star ratings + dark callout bar `"Join 50+ people already building the future of enterprise AI. -> Read more stories on Glassdoor"`.
9. **`open-roles` (`node-id=2338-152`)**:
   - **Dimensions & Padding:** `1440px × 1285px`, Padding `80px` top/bottom, `120px` left/right, Gap `40px`.
   - **Background:** `#FFFFFF`.
   - **Content:** Eyebrow `"CHAPTER 06 • YOUR ROLE"`, Heading `"Where will you make your mark?"` + green `"Actively hiring"` pill. Search input `"Search roles..."`, department filter pills (`All Departments` active purple, `Engineering`, `AI & Research`, `Product`, `Sales`, `Operations`, `Design`), and 8 stacked job listing rows (`Senior AI Engineer`, `ML Platform Engineer`, `Senior Product Manager`, `Enterprise Account Executive`, `AI Research Scientist`, `Solutions Architect`, `Head of People Operations`, `Growth Marketing Lead`) each with a purple `"Apply ->"` button + `"See all 34 open roles ->"` link. (Note: dedicated sub-frames `all-open-roles` and `apply-senior-ai-engineer` also exist in the sidebar).
10. **`locations`**:
    - **Background:** `#0A0F1E`.
    - **Content:** Heading `"Remote-first. Globally connected."` Dark world map with glowing hub pins + 5 hub cards (`London`, `Berlin`, `Singapore`, `New York`, `San Francisco`).
11. **`awards` (`node-id=2338-300`)**:
    - **Dimensions & Padding:** `1440px × 474px`, Padding `80px` top/bottom, `120px` left/right, Gap `40px`.
    - **Background:** `#F8F9FF`.
    - **Content:** Eyebrow `"RECOGNITION"`, Heading `"A great place to build."`, 5 award cards (`Glassdoor Best Places to Work 2024`, `Forbes AI 50 2024`, `Gartner Cool Vendor`, `Deloitte Fast 500`, `G2 Top 50 AI Products`).
12. **`final-cta`**: Neumorphic lavender card (`#EDE9FE` -> `#F8F9FF`, top radius `50px`), Heading `"This is where the story gets interesting. And you could be in the next chapter."` (`View All Open Roles`, `Send an Open Application`).
13. **`footer`**: `#060B27`.

---

## 8. `our-culture` (`node-id=2365-187`, Width: `1440px`)
**Screenshots:**
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\our_culture_1.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\our_culture_2.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\our_culture_3.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\our_culture_4.png`

**Sections & Colors:**
1. **`header`**: `#FFFFFF`.
2. **`Hero` (`node-id=2365-201`)**:
   - **Dimensions & Padding:** `1440px × 600px` (Fixed), Padding `120px` left/right, Gap `32px`.
   - **Background:** `#0A0F1E` with `#6B4EFF` radial gradient.
   - **Content:** Solid purple pill `"OUR CULTURE"`, Heading `"We don't just build AI. We raise it."`, Subtitle `"At Encegen, intelligence isn't manufactured — it's cultivated. Every model, every agent, every system is built with intention, care, and relentless curiosity."`, 2 pill buttons (`View Open Roles ->` white, `Our Culture` dark outline).
3. **`Principles` (`node-id=2365-212`)**:
   - **Dimensions & Padding:** `1440px × 873px`, Padding `60px` top/bottom, `80px` left/right, Gap `48px`.
   - **Background:** `#FFFFFF`.
   - **Content:** Eyebrow `"OUR PRINCIPLES"`, Heading `"What guides us every day"`. 5 numbered cards (`01 Curiosity Over Certainty`, `02 Ownership Without Ego`, `03 Build in the Open`, `04 Speed with Intention`, `05 Human-Centered AI`) + lavender quote banner `"These aren't posters on a wall. They're how we make decisions, resolve disagreements, and choose what to build next."`
4. **`DayAtEncogen` (`node-id=2365-245`)**:
   - **Dimensions & Padding:** `1440px × 1625px`, Padding `120px`, Gap `80px`.
   - **Background:** `#F8F9FF`.
   - **Content:** Eyebrow `"A DAY AT ENCEGEN"`, Heading `"A rhythm of focus and flow"`. Vertical timeline with purple time pills (`09:00 Morning Sync`, `10:00 Deep Work Block`, `12:30 Lunch & Learn`, `14:00 Collaboration Hour`, `16:00 Ship It`, `17:30 Wind Down`) and white cards with colored left borders.
5. **`Team`**:
   - **Background:** `#FFFFFF`.
   - **Content:** Left: Eyebrow `"THE TEAM"`, Heading `"Built by 47 extraordinary humans across 3 continents."` Right: 3 stat cards (`12 Nationalities`, `60% Engineers`, `40% from Top AI Labs`).
6. **`Voices` (`node-id=2365-320`)**:
   - **Dimensions & Padding:** `1440px × 671px`, Padding `120px`, Gap `64px`.
   - **Background:** `#F8F9FF`.
   - **Content:** Eyebrow `"VOICES"`, Heading `"Don't take our word for it"`, 3 white quote cards (`Dr. Priya Sharma`, `Marcus Chen`, `Sarah Williams`).
7. **`JoinUs`**:
   - **Background:** `#FFFFFF`.
   - **Content:** Heading `"Ready to do the best work of your life?"`, 2 pill buttons.
8. **`footer`**: `#060B27`.

---

## 9. `our-values` (`node-id=2380-187`, Width: `1440px`)
**Screenshots:**
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\our_values_1.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\our_values_overview.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\our_values_2.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\our_values_stats.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\our_values_3.png`

**Sections & Colors:**
1. **`header`**: `#FFFFFF`.
2. **`Hero Section` (`node-id=2380-202`)**:
   - **Dimensions & Padding:** `1440px × 749px`, Padding `160px` top, `140px` bottom, `96px` left/right, Gap `32px`.
   - **Background:** `#0A0F1E`.
   - **Content:** Dark pill `"OUR VALUES"`, Heading `"We don't just build AI. We raise it."`, Subtitle `"Six core values guide every technical, operational, and interpersonal decision we make at Encegen – from complex neural architecture to human partnership."`, 2 pill buttons (`Our Story ->` white, `Our Culture` outline).
3. **`Values Overview` (`node-id=2380-214`)**:
   - **Dimensions & Padding:** `1440px × 2038px`, Padding `120px` top/bottom, `96px` left/right, Gap `48px`.
   - **Background:** `#FFFFFF`.
   - **Content:** Eyebrow `"CORE PRINCIPLES"`, Heading `"What guides us every day"`. 2×3 grid of 6 large cards with dark futuristic 3D/sci-fi illustrations at top (`01 Curiosity Over Certainty`, `02 Ownership Without Ego`, `03 Build in the Open`, `04 Speak with Intention`, `05 Human-Centered AI`, `06 Built to Last`).
4. **`Quote Banner`**:
   - **Background:** Purple-to-pink linear gradient (`#7C3AED` -> `#EC4899`).
   - **Content:** Quote `"We have one rule at Encegen: if you wouldn't bet your own career on the performance of our software, we do not ship it." — ALEX RIVERA, CEO & CO-FOUNDER`.
5. **`Values in Practice` (`node-id=2380-270`)**:
   - **Dimensions & Padding:** `1440px × 1538px`, Padding `120px` top/bottom, `96px` left/right, Gap `48px`.
   - **Background:** `#FFFFFF`.
   - **Content:** Eyebrow `"VALUES IN PRACTICE"`, Heading `"A rhythm of focus and flow"`. Vertical timeline with 6 cards (`09:30 Honest Retrospectives`, `10:30 Deep Work Blocks`, `14:00 Client-First Prioritization`, `16:00 Open Architecture Reviews`, `17:00 Ship It Fridays`, `18:00 Team Reflection`).
6. **`Stats Section` (`node-id=2383-89`)**:
   - **Dimensions & Padding:** `1440px × 579px`, Padding `120px` top/bottom, `96px` left/right, Gap `48px`.
   - **Background:** `#FFFFFF`.
   - **Content:** Eyebrow `"THE TEAM"`, Heading `"Built by 67 extraordinary humans across 3 continents."`, 3 large white cards with shadow (`12 Nationalities`, `60% Engineers`, `40% from Top AI Labs`).
7. **`Testimonials`**:
   - **Background:** `#0A0F1E`.
   - **Content:** Eyebrow `"VOICES"`, Heading `"Don't take our word for it"`, 3 glowing white cards (`Dr. Priya Sharma`, `Marcus Chen`, `Sarah Williams`).
8. **`CTA Section` (`node-id=2383-132`)**:
   - **Dimensions & Padding:** `1440px × 588px`, Top-left/right radius `50px`, Neumorphic radial gradient `#EDE9FE` -> `#F8F9FF`.
   - **Content:** Heading `"Live these values with us."` (`#0A0F1E`) + `"Join our engineering team."` (`#7C3AED`), buttons `Explore Open Roles` and `Talk to Our Founders`.
9. **`footer`**: `#060B27`.

---

## 10. `Product - Easy Hunt` & `easyhunt-landing` (Both Variants + `Search`)
There are **two distinct Easy Hunt product page designs** in the Figma sidebar, plus the **`Search`** page frame:

### 10A. `Product - Easy Hunt` (Property Intelligence Platform — `node-id=2399-187` & `node-id=2402-4`)
**Screenshots:**
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\product_easyhunt_1.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\product_easyhunt_2.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\product_easyhunt_3.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\product_easyhunt_4.png`
- Overview screenshots: `product_easy_hunt_a.png` (`node-id=2402-4`) & `product_easy_hunt_b.png` (`node-id=2399-187`)

**Sections & Colors:**
1. **`Hero` (`node-id=2399-203`)**:
   - **Dimensions & Padding:** `1440px × 1114px`, Padding `96px` top/bottom, `80px` left/right, Gap `40px`.
   - **Background:** Radial Gradient `#1E1B4B` -> `#060B27`.
   - **Content:** Pill `"⚡ AI-POWERED PROPERTY INTELLIGENCE"`, Heading `"Experience Speed and Confidence with Easy Hunt"` (or `"Transform Property Research Into Intelligent Decisions"` in `2402-4`), 2 buttons (`Get Started ->` purple pill `#6B4EFF`, `Learn More` dark outline pill), dark app mockup table (`Mumbai Suburbs Survey No. 104/A...`, `Search AI` button, rows for `Godrej Properties Ltd`, `Ramesh J. Mehta & Ors`, `Tata Housing Development` with `98% Match` green badges), and trust strip (`SBI Legal`, `National Housing Bank`, `HDFC Law`, `Shardul Amarchand`, `AZB & Partners`, `JSA Law`).
2. **`Chapter 1` (`HOW IT WORKS`)**: `#FFFFFF` background, 2-column layout with 3 step cards (`Step 1: Search by...`, `Step 2: AI Matches`, `Step 3: Get Instant Results`).
3. **`Interstitial Banner`**: Purple-to-pink linear gradient (`#7C3AED` -> `#EC4899`) with quote `"Stay on top of your property research"`.
4. **`Chapter 2` (`node-id=2399-286`)**: `1440px × 540px`, `#FFFFFF` background, 2-column layout (`INTELLIGENCE` — `"Stay on top of your property research"` + dark card `AI Property Profile` with `OWNERSHIP HISTORY TIMELINE` 2024/2018/1995 and `Low Risk` bar).
5. **`Chapter 3`**: `#F8F9FF` background, `"Search and verify effortlessly"`, 3 numbered cards (`01 Smart Search`, `02 AI Verification`, `03 Complete Reports`).
6. **`Chapter 4` (`node-id=2399-339`)**: `1440px × 846px`, `#060B27` background, Pill `"PLATFORM"`, Heading `"Everything you need in one platform"`, 3×2 grid of dark cards (`Smart Property Search`, `Document Intelligence`, `Risk Assessment`, `Ownership Tracking`, `Government Data Access`, `Enterprise API`).
7. **`Chapter 5`**: `#FFFFFF` background, audience/stakeholder cards.
8. **`By the Numbers`**: Purple-to-pink gradient bar (`10L+ Property Records Indexed`, `500+ Organizations Trust Us`, `30 Sec Average Search Time`, `99.9% Platform Uptime`).
9. **`Chapter 6` (`node-id=2399-424`)**: `1440px × 1087px`, `#FFFFFF` background, Pill `"FAQ"`, Heading `"Frequently asked questions"`, 5 stacked accordion/FAQ cards (`What is Easy Hunt?`, `Who is Easy Hunt for?`, `How accurate is the data?`, `Is my data secure?`, `How do I get started?`).
10. **`Final CTA`**: `#060B27` dark section `"Join Easy Hunt today"`.
11. **`footer`**: `#060B27`.

### 10B. `easyhunt-landing` (AI-Powered Recruitment — `node-id=2389-187`)
**Screenshots:**
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\easyhunt_1.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\easyhunt_2.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\easyhunt_3.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\easyhunt_4.png`
- `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\easyhunt_5.png`

**Sections & Colors:**
1. **`hero` (`node-id=2389-203`)**: `1440px × 1211.13px`, `#060B27`, Pill `"AI-POWERED RECRUITMENT"`, Heading `"Find the Right Talent. Land the Right Job. Powered by AI."`, buttons (`Start Hiring ->` purple pill, `Find Jobs` outline pill), dark `EasyHunt Console` mockup (`Senior AI Engineer Match Pipeline`), trust logos (`TCS`, `Infosys`, `Wipro`, `HCL`, `Accenture`, `Deloitte`).
2. **`how-it-works`**: `#FFFFFF`, 2-column layout.
3. **`capabilities` (`node-id=2389-372`)**: `1440px × 971px`, `#F8F9FF`, Eyebrow `"PLATFORM CAPABILITIES"`, Heading `"Four ways AI transforms your hiring."`, 2×2 grid (`Smart Resume Parsing`, `Intelligent Job Matching`, `Automated Screening`, `Real-Time Analytics`).
4. **`problem-solver`**: `#FFFFFF`, `"Most companies are hiring blind. EasyHunt fixes that."` Before/After comparison rows.
5. **`for-job-seekers` (`node-id=2389-460`)**: `1440px × 778px`, `#060B27`, Pill `"FOR JOB SEEKERS"`, Heading `"Your dream job, found by AI."` + `CANDIDATE DASHBOARD` dark card.
6. **`for-employers`**: `#FFFFFF`, Eyebrow `"FOR EMPLOYERS"`, `"Hire 10x faster."`
7. **`stats`**: Purple-to-pink gradient bar (`2M+ Candidates`, `50K+ Jobs Posted`, `10K+ Successful Hires`, `95% Client Satisfaction`).
8. **`testimonials` (`node-id=2389-585`)**: `1440px × 738px`, `#FFFFFF`, `"Real companies. Real results. Real hires."` (`SIEMENS`, `UBER`, `AIRBUS`).
9. **`pricing` (`node-id=2389-619`)**: `1440px × 906px`, `#F8F9FF`, `"Plans that scale with your hiring needs."` 3 pricing cards: `Starter` (`Free`, white card), `Professional` (`$99/mo`, dark `#060B27` highlighted card), `Enterprise` (`Custom`, white card).
10. **`cta-banner`** & **`footer`**: `#060B27`.

### 10C. Additional Sub-page Frames Present in Left Sidebar
- **`Search` (`node-id=2041-186`)**: Screenshot saved at `C:\Users\Laptop\.gemini\antigravity\brain\afe6610d-81c3-4153-ab7d-52936ab1308f\search_page.png` (`1440px × 2380px`, `#FFFFFF`, light lavender search hero `"What are you looking for?"`, topic pills, left filter sidebar `FILTER BY TYPE` / `FILTER BY TOPIC`, right search results list with pagination).
- **Solution & Role Detail Frames** (also visible in `our_values_overview.png` / `solutions_page_3.png`): `apply-senior-ai-engineer`, `all-open-roles`, `digital-marketing-growth`, `website-ecommerce-dev`, `ai-research-solutions`, `ai-agents-automation`, `custom-software-dev`, `supply-chain-solution`, `technology-saas`.

Note: The recording of this session is available in the conversation artifacts.