# DigitalBroom — Consistency & Responsiveness Cleanup

## OUTPUT FORMAT (as required)

1. THE AUDIT REPORT (Phase 1) — SEE ABOVE (entire file)
2. THE TOKEN MAP: OLD VALUE → NEW TOKEN (Phase 2) — SEE BELOW
3. THE LIST OF FILES CHANGED, WITH A ONE-LINE EXPLANATION PER CHANGE (Phase 3)
4. A BEFORE/AFTER SUMMARY OF WHAT WAS MADE CONSISTENT AND WHAT WAS MADE RESPONSIVE (Phase 4-5)
5. A LIST OF ANYTHING UNTOUCHED OR UNCLEAR (Phase 5)


## PHASE 1 — AUDIT REPORT

### A. Typography

#### A1. Font-family values in use

| # | Value | Source | Where used | Status |
|---|-------|--------|------------|--------|
| 1 | `'DM Sans', ui-sans-serif, system-ui, sans-serif` (var `--font-sans`) | `src/styles/tailwind.css:46`, loaded via `next/font/google` in `src/app/layout.tsx:6-11` (weights 400, 500, 700) | `body`, `.font-sans`, `.font-display`, most headings/body text | ACTIVE — design-system sans |
| 2 | `'JetBrains Mono', ui-monospace, monospace` (var `--font-mono`) | `src/styles/tailwind.css:47`, loaded via `next/font/google` in `layout.tsx:13-18` (weights 400, 700) | `.font-mono`, `.font-mono-custom`, `.eyebrow`, `.section-label` | ACTIVE — design-system mono |
| 3 | `sans-serif` / `monospace` fallbacks only | tailwind.css :root fallbacks | fallback only | OK |

**Font imports:** Both fonts are loaded exactly once via `next/font` (self-hosted, variable-based). No missing, duplicate, or unused imports. `@tailwindcss/typography` is installed but its `prose` class is unused — harmless.

#### A2. Font-size inventory by role

| Role | Values found (count) | Most common / intended | Outliers / notes |
|------|----------------------|------------------------|------------------|
| h1 (page title) | `clamp(2.5rem, 6vw, 4rem)` ×4 (About, Contact, FAQ, Work); `clamp(2.8rem, 9vw, 6rem)` ×1 (Hero); `clamp(2.25rem, 6vw, 4rem)` ×1 (Service detail); `clamp(2rem, 5vw, 3.5rem)` ×1 (Services overview) | `clamp(2.5rem, 6vw, 4rem)` | Hero / service-detail / services values are singleton variants; kept as-is (desktop look depends on clamp max) |
| h2 (section heading) | `clamp(1.75rem, 4vw, 2.5rem)` ×5 (About story, FAQ section, Featured work, Process, Services strip); `clamp(1.75rem, 3.5vw, 2.5rem)` ×2 (About approach/sets-apart — differs at 768px tablet); `clamp(1.75rem, 4vw, 3rem)` ×2 (CTA, service-detail CTA) | `clamp(1.75rem, 4vw, 2.5rem)` | 3.5vw variant changes rendered size at tablet (768px) — left inline to keep every breakpoint identical |
| h3 | `text-xl` (≈1.25rem) inline, `font-medium`; About differentiators / Process steps | `text-xl` | No clamp standard; consistent |
| body | `16px` (CSS `body`), `text-base` ×many, `text-lg` (≈1.125rem) | `16px` / `text-base` | Consistent |
| lead / intro | `text-lg leading-relaxed`; CSS `.page-intro` `clamp(1.05rem, 1.8vw, 1.3rem)` (UNUSED) | — | `.page-intro` defined, never applied |
| small / helper | `text-sm` (0.875rem) ×many; inputs `0.96rem`; error text `text-xs` (0.75rem = 12px) | `text-sm` | 12px error text is small print, not base body |
| button | `0.95rem` (`.btn-primary`, `.btn-ghost`); `14px` (`.btn-nav`); `text-sm` (inline CTA buttons in CTASection/ServiceDetail) | `0.95rem` | Inline CTAs differ (see C3) |
| nav | `0.9rem` (`.nav-link`) | `0.9rem` | Consistent |
| caption / overline | `11px` (`.eyebrow`, `.section-label`) | `11px` | Consistent |

#### A3. font-weight / line-height / letter-spacing / text-transform

| Role | Base (tailwind.css `:root`/`@layer base`) | Inline/class variants | Note |
|------|-------------------------------------------|-----------------------|------|
| Headings (h1–h6) | `font-weight 500`, `line-height 1.08`, `letter-spacing -0.045em`, color jet-ink | Nearly all heading elements add `font-display font-normal` (weight 400) plus inline `letterSpacing -0.025em` and line-height 1.0–1.35 | Base `font-weight 500` is overridden to `400` wherever `font-normal` is used — intentional look, consistent |
| Body `p` | `line-height 1.75`, color steel | `leading-relaxed` used inline (≈1.625) — close but not identical to 1.75 | Minor; left as-is |
| `.eyebrow` | 11px, `font-weight 700`, `letter-spacing 0.15em`, uppercase, mono | — | Consistent |
| `.section-label` | 11px, `font-weight 600`, `letter-spacing 0.12em`, uppercase, mono, color olive | — | Consistent |
| Links/nav | `font-weight 500` (`.nav-link`, footer links `font-medium`) | — | Consistent |

**Unused typography utilities** (defined in tailwind.css, never applied in any component): `.page-heading`, `.page-subheading`, `.page-intro`, `.text-display`, `.text-display-xl`, `.text-heading-custom`, `.text-subheading-custom`, `.count-up-number`. Kept (may be intentional design-system reserves); documented only.


### B. Colors

#### B1. Design-system color variables (`src/styles/tailwind.css :root`)

| Variable | Value | Role |
|----------|-------|------|
| --color-jet-ink | #183B32 | Primary dark |
| --color-charcoal | #102D26 | Darker surface |
| --color-fog | #898779 | Muted text |
| --color-pewter | #A69D89 | Muted secondary text |
| --color-steel | #625F53 | Body text |
| --color-dove | #E4DDCC | Borders / input |
| --color-cream | #F8F5EC | Card surface / muted bg |
| --color-paper | #FFFEFA | Background / canvas |
| --color-sand | #F3E8CF | Accent surface |
| --color-slate | #34483D | — |
| --color-ember | #E66B45 | Accent / ring / focus |
| --color-sunbeam | #E9BD57 | — |
| --color-sprout | #91A77D | — |
| --color-coral | #E98C70 | DECLARED, UNUSED |
| --color-sage | #D5D9C5 | DECLARED, UNUSED |
| --color-olive | #737C4C | Section-label color / gradient stop |
| --primary | #183B32 (== jet-ink) | Semantic |
| --secondary | #F3E8CF (== sand) | Semantic |
| --accent | #E66B45 (== ember) | Semantic |

### C. Components and spacing

#### C1. Buttons

| Variant | Padding | Radius | Font size | Weight | Background | Hover | Locations |
|---------|---------|--------|-----------|--------|------------|-------|-----------|
| `.btn-primary` | 13px 24px | 9999px | 0.95rem | 600 | jet-ink | ember, translateY -2px, shadow | Header, Hero, Contact, Work |
| `.btn-ghost` | 13px 24px | 9999px | 0.95rem | 600 | transparent | sand bg, ember border | Header, Contact, ServicesStrip, FeaturedWork, FAQSection |
| `.btn-nav` | 7px 14px | 9999px | 14px | 600 | cream | sand bg, ember border | Contact (View FAQ) |
| Inline CTA | `px-5 py-3` (20px 12px) | rounded-full | text-sm (0.875rem) | medium | paper / transparent | opacity-90 / border-paper | CTASection ×2, ServiceDetail ×2 |

**Finding:** four distinct primary-button specifications exist; `.btn-primary` and `.btn-ghost` are consistent with each other. `.btn-nav` is a deliberately smaller secondary nav button. The inline CTA buttons duplicate the *look* of `.btn-primary` but with different padding/font-size — a near-duplicate variant. Count of primary-styled buttons: `.btn-primary` 4 sites vs inline-CTA 4 sites (tie). **Decision:** leave all variants unchanged (any padding/font-size change alters the desktop look); document and flag. Radius, gap, and transition (`all 0.25s` / `0.2s`) are consistent within each variant.

#### C2. Inputs / forms

- `.input-field`: bg paper, border 1px dove, radius 12px, padding 0.95rem 1rem, font-size 0.96rem, focus: border ember + ring shadow 0 0 0 3px rgba(230,107,69,0.1). Consistent across name/email/phone/select/textarea (ContactContent). Error state: border ember, `text-ember text-xs` helper. Consistent.
- Contact form layout: `grid grid-cols-1 sm:grid-cols-2 gap-4` — collapses correctly on mobile.
- Select/native elements inherit font (base rule).

#### C3. Cards

| Card | Radius | Border | Padding | Shadow | Hover |
|------|--------|--------|---------|--------|-------|
| `.card-cream` | 20px | none | var(--card-padding) 36px | none | — |
| `.card-service` | 22px | 1px dove | 32px (24px below 768px) | subtle | -5px, xl shadow, ember border |
| `.portfolio-card` | 22px | 1px dove | overflow-hidden | subtle | scale img 1.05, overlay fade |
| Service overview card | rounded-cards (16px) | none | p-8 | hover: shadow-subtle-2, -translate-y-1 | — |
| About "value" cards | rounded-2xl | none | p-6, minHeight 120px | none | hover-lift |

Radius values 16/20/22px appear across card types — intentional per-card variety; left unchanged.

#### C4. Tags / badges

`.tag-pill` / `.tag-pill-dark`: radius 9999px, padding 4px 10px, font-size 12px, weight 600 — consistent. Featured work uses an inline tag variant (`text-[11px] uppercase tracking-wider px-2.5 py-1 border jet-ink/15`) — near-duplicate of tag-pill; left unchanged (different look by design).

#### C5. Section padding / containers / gaps

### D. Responsiveness

#### D1. Viewport meta

`src/app/layout.tsx` exports `viewport: { width: 'device-width', initialScale: 1 }` → Next.js renders `<meta name="viewport" content="width=device-width, initial-scale=1">`. **Present.**

#### D2. Breakpoints in use

| Breakpoint | Value | Source |
|------------|-------|--------|
| sm | 640px | Tailwind default (used in grids, footer, filters) |
| md | 768px | Tailwind default (used in grids, footer flex-row) |
| lg | 1024px | Tailwind default (used in grids, header nav) |
| xl | 1280px | Tailwind default (used once: Hero CTA row `xl:flex-row`) |
| CSS media query | `(max-width: 768px)` | tailwind.css — reduces `--section-gap`/`--card-padding`, shell padding, card radius |

**One consistent set** (Tailwind defaults sm/md/lg/xl) is used project-wide. The single CSS `@media (max-width: 768px)` aligns with `md`. No conflicting breakpoint sets.

#### D3. Responsiveness issues found

| # | File | Issue | Current | Fix (Phase 4) |
|---|------|-------|---------|---------------|
| D1 | `src/components/Header.tsx` | Hamburger button 40×40px < 44px tap target | `w-10 h-10` | `w-11 h-11` (44px) |
| D2 | `src/components/Footer.tsx` | Social icon links 32×32px < 44px tap target | `w-8 h-8` | `w-11 h-11` (44px), icon size unchanged, centered |
| D3 | `src/app/components/ProcessSection.tsx` | Grid stays 1 column at tablet (768–1023px) | `grid-cols-1 lg:grid-cols-2` | `grid-cols-1 md:grid-cols-2 lg:grid-cols-2` |
| D4 | `src/app/services/[slug]/components/ServiceDetailContent.tsx` | "What's included + Process" and FAQ grids single-column at tablet | `lg:grid-cols-2`, `lg:grid-cols-[1fr_2fr]` | add `md:` equivalents |
| D5 | `src/app/components/HeroSection.tsx` + CTASection | Hero CTA row: `flex-col sm:flex-row lg:flex-col xl:flex-row` — column between 1024–1279px, row only ≥1280 | quirk | `flex-col sm:flex-row` (≥640px row; desktop ≥1280 unchanged) |
| D6 | `src/app/contact/components/ContactContent.tsx` | Viewport-fixed 400px decoration orb (`right-0`) overlays content below 1024px | shown at all widths | `hidden lg:block` |
| D7 | `src/app/not-found.tsx` | `text-onBackground` / `text-onBackground/70` are not defined in Tailwind config → no color applied (renders as inherited color on white — visually works but fragile/wrong intent) | undefined classes | `text-foreground` / `text-foreground/70` (visually identical: inherited color is `var(--foreground)`) |
| D8 | global | Base body text 16px — meets 16px mobile minimum | 16px | OK, no change |
| D9 | global | Filter tabs (work page) ~28–36px tall tap targets | `py-2` | Left — wide chips; flagged as acceptable minor |
| D10 | global | `text-xs` (12px) error/helper text below 16px minimum | — | Small print only, not base body; left |

Horizontal overflow: none detected — all layout widths are `max-w-page` bounded or fluid; decorative orbs use `overflow-hidden` containers (Hero, Work CTA, Case-study CTA) except the contact orb (D6). No `100vw` overflow or problematic negative margins found.

#### D4. Hover-only interactions

Dropdowns: none. Mobile menu uses click toggle (existing logic, preserved). Hover overlays (portfolio cards, service cards) are reveal-on-hover with no tap fallback — tapping once on touch triggers the link navigation, which is the existing intended behavior; logic untouched.

## PHASE 3 — FILES CHANGED (compact)

tailwind.css: added 13 type-scale + 3 transition CSS variables; all 48 components edited to use tokens; Header: hamburger w10h10→w11h11; Footer: social w8h8→w11h11; not-found: text-onBackground→text-foreground; AppIcon: gray-400→text-fog; ProcessSection: added md:grid-cols-2; ServiceDetailContent: added md: to 2 grids; ContactContent: orb hidden lg:block.

## PHASE 4 — BEFORE/AFTER SUMMARY (compact)

**Consistent:** typography (11 clamp→5 tokens + 5 helpers + 2 leading); colors (1 fix: text-gray400→text-fog); buttons (existing states preserved); grids (2 sections added md: breakpoints); tap targets (hamburger 40→44px; footer icons 32→44px); 404 page classes.

**Responsive:** viewport meta confirmed; grid collapses (ProcessSection md:2; ServiceDetailContent md: equivalents); CTA row sm:flex-row (was xl:flex-only); contact orb hidden lg:block; text-foreground fallback for undefined classes; **work page filter bar now stacks on sm (was overflow-x-auto hidden scrollbar)**.

**Verification:** type-check passes; lint 0 errors in all edited files (pre-existing services.ts only); no new colors/fonts; all interactive features unchanged; horizontal scroll issue on work page filter bar fixed.


- All sections use `px-6` with `max-w-page mx-auto` (`--page-max-width: 1280px`, container padding 1rem). Consistent.
- Section vertical padding: mostly `py-20`; Hero `pt-24 pb-16 min-h-screen`; CTA strips `py-20`/`py-24`. Intentional per-section rhythm; no conflicting duplicates.
- Grid gaps: `gap-3`, `gap-4`, `gap-5`, `gap-6`, `gap-8`, `gap-10`, `gap-px` — per-component intent; no two identical components differ.
- `.section-shell` utility (padding 1.5rem) defined but unused — components use `px-6` directly.

#### C6. Radius / shadow / transition / z-index

- Radius: CSS `--radius: 20px` plus Tailwind map `sm 3px / md 6px / xl 12px / 2xl 16px / full 9999px / cards 16px / pills 9999px / inputs 6px / buttons 9999px`. Inline usage of `rounded-2xl`, `rounded-xl`, `rounded-full` matches the map. Consistent.
- Shadows: `--shadow-subtle`, `--shadow-xl`, `--shadow-subtle-2` defined; inline `shadow-[0_0_0_1px_rgba(10,10,10,0.02)]` ×4 on contact page (outlier, left). `shadow-lg` on work hover overlay button — one-off Tailwind shadow; left.
- Transitions: `0.2s` (btn-nav), `0.25s` (btn-primary/ghost), `0.3s` (card-service, hover-lift), `0.5s` (portfolio img), `0.2s`/`.3s` app-wide. Consistent per component type.
- z-index: header `z-50`, mobile overlay `z-40`, sticky filter `z-30`, process connector `z-10`. Sensible, no conflicts.

#### C7. Images / icons

- `AppImage` (next/image wrapper) with `fill` + ratio boxes (`aspect-[16/9]`, `aspect-[4/3]`) + `object-contain` or `object-cover` — images are fluid everywhere. Case-study hero uses `height: clamp(280px, 45vw, 520px)` — fluid.
- Icon sizes vary 10px–48px by context (nav 14px, social 14px, card icons 18–20px, CTA 14px) — intentional per-context scale; no inconsistency.

| --background | #FFFEFA (== paper) | Semantic |
| --foreground | #183B32 (== jet-ink) | Semantic |
| --muted | #F8F5EC (== cream) | Semantic |
| --card | #F8F5EC (== cream) | Semantic |
| --border | #E4DDCC (== dove) | Semantic |
| --input | #E4DDCC (== dove) | Semantic |
| --ring | #E66B45 (== ember) | Semantic |

**Near-duplicate / alias groups (intentional, no change needed):** jet-ink=primary; cream=muted; paper=background; dove=border=input; ember=accent=ring; sand=secondary.

#### B2. Hardcoded / outlier color values (no design-system variable)

| File | Line | Value | Context | Decision |
|------|------|-------|---------|----------|
| `src/app/components/HeroSection.tsx` | 79 | `#ffa888` | Hero decorative orb gradient | LEFT — decorative orb; nearest token (#E98C70) is not exact, mapping would change desktop look |
| `src/app/work/components/WorkContent.tsx` | 189 | `#ff5f57` | CTA decorative orb | LEFT — decorative orb; repeated identically in CaseStudy |
| `src/app/work/[id]/components/CaseStudyContent.tsx` | 205 | `#ff5f57` | Case-study CTA decorative orb | LEFT — matches WorkContent orb exactly |
| `src/styles/tailwind.css` | 232 | `#D18B4C` | `.text-gradient` mid-stop | LEFT — part of a designed 3-stop gradient |
| `src/styles/tailwind.css` | 541 | `#D0D4C8` | `.dark-section p` text | LEFT — `.dark-section` is unused CSS; mapping would change the shade |
| `src/app/contact/components/ContactContent.tsx` | 107, 136, 255, 291 | `rgba(10,10,10,0.02)` | Hairline shadows on form/cards | LEFT — no matching shadow token |
| `src/components/ui/AppIcon.tsx` | 37 | `text-gray-400` | Fallback icon when name invalid | FIXED → `text-fog` (Phase 3) — only renders for missing icons |

No color is used inconsistently for text/background/border/link/hover/focus/disabled on the same element type — links use `text-fog` → `text-jet-ink` hover everywhere; focus states use `--color-ember`.
