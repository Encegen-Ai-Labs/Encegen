# QA bugs EW-001–011 + Search page functionality rework

---

## 2026-08-28 — Search bar wired up (previously fully non-functional)

**Investigation (confirmed before implementing):** the free-text `<input>` and "Search" button in `Frontend/src/pages/SearchPage.tsx`'s hero had zero wiring — no `value`/`onChange` on the input, no `onClick` on the button, no `<form>`, and no query state existed anywhere in the component. Typing or clicking genuinely did nothing. Confirmed the 6 suggestion pills (`SUGGESTIONS`) built in the prior pass are fully independent of the search box — they drive `selectedTopics` only, with no shared state — likely two originally-related ideas that diverged when the pills were repurposed for Topic filtering. Also confirmed neither prior Playwright verification pass (`verify-bugs.mjs`, `verify-search2.mjs`) ever exercised the search input/button — "verified working" claims on this page never covered this element, which is why it sat broken through two passes without being caught.

**Decisions confirmed and implemented:**
- Query matches case-insensitively against `title`, `desc`, `tag`, and `topic` on the existing combined (static + live-resource) result list — no new data source.
- **Overrides**, not AND: typing a non-empty query resets `selectedType` to `'All Types'` and clears `selectedTopics`, so the search box becomes the sole active filter while a query is present — including visibly resetting the Type radio and pill highlighting, not just bypassing them in the filter logic. Clearing the box back to empty restores normal Type/pill filtering.
- Live filtering on every keystroke, consistent with Type/pills. The Search button remains in the UI (`type="button"`, no handler) — present for familiarity, does nothing extra, doesn't error.
- Suggestion pills left fully independent, unchanged in behavior — only their active/highlighted state now correctly clears when a search query overrides them.
- No `<form>` added — kept the existing plain-`div` structure, wired via direct `onChange`.

**Verified working (not just compiled):** `tsc -b` and `vite build` both clean. Ran a Playwright pass that actually exercised the search bar this time: confirmed Type+pill filtering narrows results (1 of 10) before typing; typing "EasyHunt" visibly reset the Type radio to "All Types" and cleared the pill's active state, correctly narrowing to the one matching result; a broader query ("process") matched 8 items across multiple fields; a garbage query correctly showed the "no results" message; clearing the box back to empty restored the full result set and re-selecting a Type filter afterward worked correctly; clicking the Search button did not error or navigate away. Temporary Playwright tooling fully removed afterward (`package.json`/lockfile diff empty).

**Not addressed, not asked for in this pass:** the Tab row (`TABS`) is not reset when a search query overrides Type/pills — its filter is bypassed while searching (consistent with "search box takes over"), but the Tab UI itself doesn't visually reset the way Type/pills now do, since only Type and Topic pills were named in the confirmed decisions. Flagging this asymmetry in case it should be included in a future pass.

## 2026-08-27 — Search page sidebar/pill correction + detail modal parity investigation

Three items addressed in this dated entry: two corrections to the prior pass (implemented), one investigation (findings only, no code change).

### 1. Sidebar layout correction — implemented
**File:** `Frontend/src/pages/SearchPage.tsx`
The sidebar previously showed three filter groups (Type/Topic/Industry). Corrected to show **only** "Filter by Type" (unchanged single-select radio group) plus the "Clear all filters" button (still resets Type only). The "Filter by Topic" and "Filter by Industry" checkbox sections were removed from the sidebar markup.
- `selectedTopics`/`toggleTopic` and the `topic` field on each result were **kept** — reused by item 2 below.
- `selectedIndustries`/`toggleIndustry`/`INDUSTRY_FILTERS` and the `industry` field were **removed entirely**, not just hidden — nothing continues to reference them after this change (Industry wasn't part of the pill-row requirement in item 2), so keeping them would have been dead, unreachable code rather than genuinely-reused state. Flagging this choice explicitly since it goes slightly beyond "markup only," but it was the more honest option versus leaving an orphaned filter mechanism with no UI able to drive it.

### 2. Horizontal pill row wired up — implemented
**File:** `Frontend/src/pages/SearchPage.tsx`, `Frontend/src/pages/content.css`
The `SUGGESTIONS` pill row (`'Process Mining', 'AI Solutions', 'SAP Integration', 'Order-to-Cash', 'Accounts Payable', 'ROI Calculator'` — confirmed exact current values) was converted from inert `<span>` elements to `<button>` elements, multi-select, each toggling membership in the existing `selectedTopics` array (the same state/logic the removed Topic checkboxes used — reused, not rebuilt). Active pills get a filled purple style (`.search-hero__suggestions button.active`, new CSS). Pills combine with the sidebar Type filter via AND, exactly matching how Type/Topic/Industry combined before. Pills are unaffected by "Clear all filters" (confirmed via visual test — clicking Clear while pills are active leaves them active and only resets Type back to "All Types").

**Data-backing investigation (as requested — not silently assumed):**

| Pill | Backing data? |
|---|---|
| Process Mining | ✅ Real match — 3 results carry `topic: 'Process Mining'`. |
| AI Solutions | ⚠️ **No exact match.** Two results carry `topic: 'AI & Automation'`, a related but differently-worded value. Since the pill matches by exact string equality (same as the prior Topic checkboxes did), selecting "AI Solutions" alone currently matches **zero** results. I did not rename either value to force a match — flagging this gap for a decision rather than inventing one. |
| SAP Integration | ⚠️ **No match currently, but a legitimate category** — this exact string was one of the old `TOPIC_FILTERS` options, but no result in the current dataset (static or live-fetched) carries `topic: 'SAP Integration'`. Selecting it shows zero results — an honest "nothing tagged this yet" outcome, not a bug. |
| Order-to-Cash | ❌ **No backing data at all.** This string never appeared in `TOPIC_FILTERS`/`INDUSTRY_FILTERS` and no result's `topic` field is close to it. Appears to be a placeholder search-suggestion label with nothing behind it yet. |
| Accounts Payable | ❌ Same as Order-to-Cash — no backing data, not a known filter category. |
| ROI Calculator | ❌ Same — no backing data; reads more like a tool/feature name than a content topic, so it may not belong in a content-matching pill row at all. |

**Recommendation (not implemented, flagging for your call):** either (a) add `topic: 'AI Solutions'`/`'SAP Integration'` to relevant results and content so those two pills have real matches, and treat Order-to-Cash/Accounts Payable/ROI Calculator as needing new backing content entirely, or (b) replace those three placeholder-only pills with values that already have real data behind them. Left as-is for now since inventing matches wasn't asked for.

### 3. Detail modal data parity with Resources — investigated, no code change

**What `DetailModal` currently receives/renders:** `tag`, `title`, `meta` (optional), `body` — four fields total, rendered as a category chip, `<h1>` title, a byline/meta line, and a single body paragraph block. No cover image, no video embed, no download/external-link actions.

**For a resource-sourced result specifically — confirmed gap:** In `SearchPage.tsx`'s fetch handler, each API article is mapped to a `SearchItem` with `desc: r.summary || ''` — **`r.content` (the full article body) is fetched over the wire but never captured anywhere in the mapping.** `DetailModal`'s `body` prop is populated from `selectedResult.desc`, which for resource-sourced items is that same short `summary`, not the fuller multi-paragraph `content` field. This is a real, confirmed data-parity gap: Resources.tsx's own reader modal shows the `summary` as a styled pull-quote lead-in **and then separately renders the full `content`** below it; Search's modal for the identical article shows only the short summary text and nothing else.

Additional fields Resources' modal renders that `DetailModal`/`SearchItem` don't carry at all: `cover_image` (image, shown when no video), `media_url` → video embed (YouTube/Vimeo iframe), and the Reports-category Word-doc download action. None of these are captured in the `SearchItem` shape or passed to `DetailModal` today.

**Where exactly the data is dropped:** `SearchPage.tsx`, inside the `useEffect` fetch handler's `.map()` call — the object literal only sets `id`, `source`, `tag`, `title`, `desc` (from `summary`), `meta`, `action`, `color`. `r.content`, `r.cover_image`, and `r.media_url` are all available on the fetched `r` object but are never read.

**Not fixed in this pass, per instruction** — this is a report for your decision. If you want parity, the fix would extend `SearchItem` with optional `content`/`cover_image`/`media_url` fields, populate them in the fetch mapping, and either extend `DetailModal`'s props to render them (video/image/download) or pass `content` as `body` instead of `summary` for a lighter-weight fix that at least gets the full text without the richer media.

## Context
A `git pull` (commit `e459147`, "resolved bugs from 12-22") landed between the original QA triage and this pass. That commit already fully resolved EW-009 (Navbar dropdown) and made unrelated typo/asset fixes. Every bug below was re-verified against the current post-pull source before any fix was written — nothing was assumed from the prior analysis. Scope for this pass: EW-001 through EW-011, plus a full functionality rework of the Search page. EW-011 is held pending a product decision; everything else in scope is implemented.

## Part 1 — Bugs EW-001 through EW-011

### EW-001 — Search bar filtering — FIXED
**File:** `Frontend/src/pages/SearchPage.tsx`
**Root cause:** All 16 filter checkboxes (Type/Topic/Industry) were fully uncontrolled — no `checked`/`onChange`, no filter state existed. `RESULTS` rendered via plain `.map()` with no `.filter()` ever applied.
**Fix:** Implemented as part of the full Search rework (see Part 2c). Type is now a single-select radio group; Topic and Industry are multi-select checkbox groups; all three combine as an AND filter over a real `filteredResults` derivation.

### EW-002 — Clear All Filters button — FIXED
**File:** `Frontend/src/pages/SearchPage.tsx`
**Root cause:** The button had no `onClick` at all.
**Fix:** Wired to reset the Type filter back to `'All Types'` (confirmed scope: Topic, Industry, and the active Tab are intentionally left untouched by this button).

### EW-003 — Pagination — FIXED (resolved by removal)
**File:** `Frontend/src/pages/SearchPage.tsx`
**Root cause:** Prev/Next/page-number buttons updated `page` state but `page` was never used to slice `RESULTS` — the same 6 results always rendered regardless of page.
**Fix:** Pagination removed entirely, per instruction. All filtered results now render in one list.

### EW-004 — Duplicate CTA (CustomSoftware.tsx) — FIXED
**File:** `Frontend/src/pages/solutions/CustomSoftware.tsx`
**Root cause:** Hero CTA ("See case studies →", `to="/insights"`) and a closing-CTA secondary button with the same destination/near-identical label both existed.
**Fix:** Deleted the hero CTA (and the now-empty `actions` prop it was the sole entry of). Closing-CTA secondary button left untouched. Removed the now-unused `Btn` import. Verified visually — hero reads as complete with no gap.

### EW-005 — Duplicate CTA (DigitalMarketing.tsx) — FIXED
**File:** `Frontend/src/pages/solutions/DigitalMarketing.tsx`
**Fix:** Same treatment — hero CTA and its `actions` prop deleted, closing-CTA secondary ("View case studies") kept, unused `Btn` import removed. Verified visually.

### EW-006 — Duplicate CTA (WebEcommerce.tsx) — FIXED
**File:** `Frontend/src/pages/solutions/WebEcommerce.tsx`
**Fix:** Same treatment — hero CTA and its `actions` prop deleted, closing-CTA secondary kept, unused `Btn` import removed. Verified visually.

### EW-007 — Compliance standards inconsistent color — FIXED
**File:** `Frontend/src/components/Security.tsx`
**Root cause:** `index === BADGES.length - 1 ? 'security__badge--muted' : ''` muted whichever badge was last in the array (currently CSA) to a dark color, purely positional — not a CSA-specific rule.
**Fix:** Removed the conditional entirely; all 6 badges now render with the plain `security__badge` class (consistent purple). Verified visually — all 6 badges match.

### EW-008 — Duplicate CTA (UseCases.tsx) — FIXED
**File:** `Frontend/src/pages/solutions/UseCases.tsx`
**Root cause:** No hero CTA existed on this page; the actual duplicate was two identically-worded "See how it works →" buttons in two body sections (an early "AI understands your business" section, and a later "Before/after" `ResultBar`).
**Fix:** Deleted the earlier occurrence (in the "AI understands" section), kept the later one (in the `ResultBar`), per the "earlier deleted, later kept" principle applied to this page's actual structure. Verified only one "See how it works" instance remains sitewide on this page, and the section it was removed from reads as complete with no gap.

### EW-009 — Dropdown cannot be closed — ALREADY RESOLVED (no fix needed)
**File:** `Frontend/src/components/Navbar.tsx`, `Navbar.css`
Confirmed the recent pull already fully resolved this: `Navbar.tsx` now has complete JS-controlled state (`activeDesktopMenu`), a click-toggle handler, hover-enter/leave handlers with a close delay, a `useEffect` with both click-outside and Escape-key listeners, and an additional effect closing all menus on route change. `Navbar.css` gates visibility purely via the `.navbar__group.is-open` class. No changes made.

### EW-010 — Compliance standards inconsistent color (Product Page) — FIXED
**File:** Same as EW-007 — `Frontend/src/components/Security.tsx` (confirmed single instance sitewide, rendered once via `Platform.tsx`)
**Fix:** Resolved by the same EW-007 change.

### EW-011 — EasyHunt Platform card wrong export label — HELD, NOT IMPLEMENTED
**File:** `Frontend/src/pages/products/EasyHunt.tsx` (`PLATFORM[4]`)
**Root cause:** Current text is "Export to PDF or Excel." QA expects "Export to Word."
**Status:** Not implemented. Re-confirmed: this page's `HOW` array step 3 and this same card both independently and consistently describe PDF/Excel export; nothing in the file supports Word export as a real capability. Held pending a product decision on whether Word export is an actual, intended feature before any copy change is made.

## Part 2 — Search page functionality rework

**File:** `Frontend/src/pages/SearchPage.tsx`, plus new `Frontend/src/components/DetailModal.tsx`

### 2a. Results count text — removed
The hardcoded "2,847 results" text is gone, with no replacement.

### 2b. Pagination — removed
The full pagination block and its `page` state are gone. All filtered results render in one list.

### 2c. Filters — implemented with confirmed semantics
- **Type**: single-select (native `<input type="radio" name="type-filter">` group), default `'All Types'`.
- **Topic**: multi-select checkboxes, any number selected (including none).
- **Industry**: multi-select checkboxes, any number selected (including none).
- **Combining logic**: Type AND (any selected Topics match, OR'd) AND (any selected Industries match, OR'd). An empty Topic/Industry selection applies no constraint from that group.
- Added `topic`/`industry` fields to each static result entry so filtering is a real match, not text-guessing.
- Tag-to-Type-filter-label matching uses an explicit lookup table (`TAG_TO_TYPE_FILTER`) plus a singular/plural fallback, since the two naming schemes don't match 1:1 (e.g. "Blog" vs. "Blog Articles").

### 2d. "Clear all filters" — implemented, confirmed scope
Resets **only** the Type filter back to `'All Types'`. Topic selections, Industry selections, and the active Tab are left untouched, per explicit instruction.

### 2e. Category tab buttons — implemented
The `TABS` row ('All Results', 'Blog', 'Resources', 'Products', 'Solutions', 'Videos') now actually filters the combined result list (matching on `tag` for Blog/Products, on `source === 'resource'` for the Resources tab, and a closest-analog mapping for Videos → Webinar-tagged items, since no item is literally tagged "Video" in the current mock/live data).

### 2f. Detail modal on result click — implemented
Built a new, generic `Frontend/src/components/DetailModal.tsx`, matching the Resources page's reader-modal visual/behavioral pattern (same backdrop blur, white rounded panel, ✕ close button, backdrop-click-to-close) but with generic `title`/`tag`/`meta`/`body` props so it doesn't depend on the Resources page's richer `ResourceArticle` shape. `Resources.tsx` itself was **not** touched or refactored — this avoids touching unrelated, already-working code. Each search result's action link now opens this modal instead of being an inert `href="#"`.

### 2g. Search now surfaces Resources content — implemented
**Where Resources data lives (confirmed):** `Resources.tsx` fetches live from `${API_BASE_URL}/resources` (defaulting to `http://localhost:5000/api/resources`) and fully replaces its static fallback array with the response. Nothing in `Resources.tsx` was exported for reuse.
**Implementation:** `SearchPage.tsx` independently calls the same existing endpoint (no new backend code, no schema change — confirmed acceptable), maps each returned article into the same internal `SearchItem` shape used by the static results, and merges both into one combined list that all filtering (2c) and the Tab buttons (2e) operate over. If the fetch fails (e.g., backend unreachable), it fails gracefully and the page falls back to just the static result set — mirroring the same resilience pattern already used in `Resources.tsx`.
**Explicitly out of scope, not implemented:** the free-text search input/button in the hero was not wired to anything — it wasn't part of the 2a-2g list and wasn't touched, to avoid scope creep.

## Files touched
- `Frontend/src/pages/SearchPage.tsx` — full rework (Part 1 EW-001/002/003 + all of Part 2).
- `Frontend/src/components/DetailModal.tsx` — new file (Part 2f).
- `Frontend/src/pages/solutions/CustomSoftware.tsx`, `DigitalMarketing.tsx`, `WebEcommerce.tsx`, `UseCases.tsx` — one duplicate CTA removed each (EW-004/005/006/008), plus unused `Btn` import cleanup on the first three.
- `Frontend/src/components/Security.tsx` — removed the muted-last-badge conditional (EW-007/010).
- **Not touched:** `Frontend/src/components/Navbar.tsx`/`.css` (EW-009 already resolved), `Frontend/src/pages/products/EasyHunt.tsx` (EW-011 held), `Frontend/src/pages/Resources.tsx` (not refactored).

## Verification performed
- `npx tsc -b` — clean, no errors (confirmed no orphaned imports, matching the earlier `Hero.tsx`/`ArrowRight` lesson).
- `npx vite build` — clean.
- Visual verification via a temporary Playwright pass (installed and fully removed afterward — `package.json`/lockfile diff confirmed empty):
  - `/search`: Type radio + Topic checkbox combine correctly (AND logic) to narrow results; no results-count text; no pagination; clicking a result opens the new detail modal (closes via ✕); "Clear all filters" resets Type only while the Topic checkbox stays checked and the narrowed list updates accordingly.
  - `/solutions/custom-software`, `/digital-marketing`, `/web-ecommerce`: each hero now shows badge → title → sub → trusted-logos with no button and no visible gap.
  - `/solutions/use-cases`: confirmed exactly one "See how it works" button remains sitewide; the section it was removed from reads as complete.
  - `/platform`: all 6 Security badges (SOC2, ISO27001, GDPR, HIPAA, FedRAMP, CSA) render in matching color.
- Backend (`localhost:5000`) was not running in this environment, so the live Resources-merge in 2g could not be visually confirmed end-to-end here — the fetch fails gracefully (caught, logged, falls back to static results) exactly as designed, mirroring `Resources.tsx`'s own already-proven pattern. Recommend a live check once the backend is up.
