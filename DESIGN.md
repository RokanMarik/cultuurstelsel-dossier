---
schemaVersion: 2
name: Cultuurstelsel Curatorial Monograph Design System
brand:
  archetype: Curatorial Exhibition Monograph
  personality: [rigorous, archival, restrained, editorial, scholarly]
typography:
  fonts:
    serif: "Spectral, Georgia, serif"
    sans: "Source Sans 3, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    mono: "JetBrains Mono, Menlo, monospace"
  weights: [400, 500, 600]
colors:
  paper: "#f4f4f2"
  card: "#ffffff"
  recessed: "#eaeae6"
  plate: "#181816"
  inkPrimary: "#171715"
  inkSecondary: "#3b3b36"
  inkMuted: "#575750"
  accentBurgundy: "#8a1c14"
  accentOchre: "#6b4c0b"
  accentPrussian: "#184a50"
  accentVerdigris: "#1d4e38"
  borderSubtle: "#d8d8d4"
  borderStrong: "#b8b8b0"
elevation:
  none: "none"
  subtle: "0 1px 3px rgba(23, 23, 21, 0.05)"
  card: "0 2px 6px rgba(23, 23, 21, 0.06)"
  modal: "0 16px 36px rgba(23, 23, 21, 0.35)"
---

# Cultuurstelsel Curatorial Monograph Design System

Normative design specification and craft guidelines for the digital publication *Cultuurstelsel (1830–1870): Eksploitasi Kolonial, Resistensi Sosial, & Debat Moral Parlemen*.

---

## 1. Architecture & Design Direction

### 1.1 Curatorial Monograph Concept
The application is formatted as an exhibition monograph and open ledger, modeled after curatorial publications of the Rijksmuseum Amsterdam and KITLV Leiden. It discards modern SaaS conventions, AI template tropes, and saturated gradients in favor of archival restraint, crisp typography, and high historical integrity.

### 1.2 Core Pillars
1. **Zero AI Slop (0 Anti-Patterns):** No kicker eyebrows, no colored side-tabs (`border-left > 1px`), no cards nested inside cards, no saturated neon glows, no repeating striped gradients, and zero emojis in UI controls.
2. **True Historical Dataset Preservation:** 100% of datasets, Staatsblad articles, Jan Breman socio-economic metrics, 15 public-domain archival paintings, interactive geospatial cartography, 11×12 Batavia crossword puzzle, and colonial simulation engines remain fully functional.
3. **Tabular Fiscal Ledger Discipline:** Numbers, years, percentages, and financial sums use `JetBrains Mono` with `font-variant-numeric: tabular-nums` for precise vertical alignment.

---

## 2. Color Ramp & Palette Tokens

All colors strictly satisfy WCAG AA (and AA+) contrast requirements across light paper backgrounds.

| Token | Hex Value | Purpose / Role | Minimum Contrast |
| :--- | :--- | :--- | :--- |
| `--bg-paper` | `#f4f4f2` | Primary page canvas (Mineral Cotton Rag) | Canvas Base |
| `--bg-card` | `#ffffff` | Archival sheets, reading cards, data tables | Card Base |
| `--surface-recessed` | `#eaeae6` | Recessed backgrounds, stat chips, toolbars | 1.12:1 to paper |
| `--surface-plate` | `#181816` | Archival dark frames, atlas canvas, modal image box | High-contrast frame |
| `--ink-primary` | `#171715` | Headings, primary narrative body, table values | ≥ 16.5:1 on paper |
| `--ink-secondary` | `#3b3b36` | Subtitles, colophons, body commentary | ≥ 9.6:1 on paper |
| `--ink-muted` | `#575750` | Footnotes, accession tags, table column headers | ≥ 6.2:1 on paper |
| `--accent-burgundy` | `#8a1c14` | Primary brand accent (Staatsblad Wax Seal) | ≥ 7.2:1 on paper |
| `--accent-ochre` | `#6b4c0b` | Archival bronze / monetary currency values | ≥ 6.8:1 on paper |
| `--accent-prussian` | `#184a50` | Geopolitical sea labels, administrative maritime notes | ≥ 9.4:1 on paper |
| `--accent-verdigris` | `#1d4e38` | Agricultural metrics, verified facts, ethical critique | ≥ 8.7:1 on paper |
| `--border-subtle` | `#d8d8d4` | Hairline dividers, card outlines, table rows (1px) | Hairline boundary |
| `--border-strong` | `#b8b8b0` | Active borders, input borders, column rules (1px) | Structural boundary |

---

## 3. Typography Hierarchy

### 3.1 Typefaces
- **Primary Serif:** `Spectral`, Georgia, serif (Headings, monumental citations, curatorial titles)
- **Primary Sans:** `Source Sans 3`, -apple-system, sans-serif (Body text, narrative passages, UI buttons)
- **Primary Mono:** `JetBrains Mono`, Menlo, monospace (Years, Gulden sums, percentages, coordinates)

### 3.2 Type Scale
- **Display Hero Title:** `clamp(2.4rem, 4.6vw, 3.8rem)` | Weight: 600 | Line-height: 1.12
- **Section Heading (`h2`):** `clamp(1.75rem, 3.2vw, 2.35rem)` | Weight: 600 | Line-height: 1.18
- **Subsection Heading (`h3`):** `clamp(1.18rem, 2vw, 1.45rem)` | Weight: 600 | Line-height: 1.25
- **Card Title (`h4`):** `1.05rem` | Weight: 600 | Line-height: 1.35
- **Narrative Body:** `clamp(0.96rem, 1.1vw, 1.05rem)` | Weight: 400 | Line-height: 1.68 | Max-width: 68ch
- **UI Small / Caption:** `0.78rem` to `0.85rem` (≥ 12px / 0.75rem at all times)

---

## 4. Elevation & Surfaces

- **Zero Colored Glows:** No glowing colored halos (`box-shadow: 0 0 ... rgba(...)`) on dark or light backgrounds.
- **Physical Paper Elevation:**
  - Standard cards: `0 1px 3px rgba(23, 23, 21, 0.05)` with `1px solid var(--border-subtle)`
  - Elevated modals: `0 16px 36px rgba(23, 23, 21, 0.35)` with `1px solid var(--border-subtle)`
- **Corner Radii:**
  - Sharp / Minor: `2px` (`var(--radius-xs)`) for labels, tags, stamps
  - Standard: `4px` (`var(--radius-sm)`) for buttons, cards, images
  - Medium: `6px` (`var(--radius-md)`) for major dialogs
  - Fully Rounded: `9999px` reserved strictly for circular icon buttons

---

## 5. Layout & Spatial Grid

- **Base Rhythm:** Multiples of `4px` (8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px).
- **Section Headers:** 2-column asynchronous header layout with direct `h2.section-title` and `<p className="section-subtitle">` (max-width: 60ch), separated by a subtle 1px hairline rule.
- **Line Length Discipline:** All narrative body paragraphs and lists enforce `max-width: 68ch` to maintain comfortable optical tracking without reader fatigue.
- **Open Ledger Architecture:** Internal sub-blocks within cards use open 1px hairline rules (`border-top: 1px solid var(--border-subtle)`) rather than boxed nested cards.

---

## 6. Component Specifications

### 6.1 Masthead Navigation
Single-tier, low-profile navigation bar fixed at page top with mineral rag backdrop (`rgba(244, 244, 242, 0.94)`), 1px bottom border, zero gradients, and quiet active link indicator.

### 6.2 Rijksmuseum Curatorial Split Hero
An asymmetric 7:5 ratio layout:
- Left column (7/12): Academic title, colophon dek, 4-stat open ledger strip with `tabular-nums`, and 4-act monograph digest.
- Right column (5/12): Exhibition plate frame showcasing 3 selectable public-domain high-resolution paintings (*Van den Bosch*, *Penangkapan Diponegoro*, and *Revolusi Belgia*) with accession plate captions.

### 6.3 Curatorial Dossier Tabs
Underline segmented control with quiet 2px burgundy bottom bar on active tab. Tab pills display counts with high-contrast text and neutral backgrounds.

### 6.4 Geospatial Cartography & Interactive Tools
- Canvas container styled as an archival atlas with dark plaque framing.
- Natural Earth 1:10m geo-coordinates with dual camera perspective (Nusantara <-> Jawa & Madura).
- Jan Breman socio-economic calculator and moral dilemma scenarios rendered as open sheets with zero card nesting.

### 6.5 Javasche Courant Gazette Arcade
- 11×12 Crossword puzzle with authentic solid-ink blocked cells (zero diagonal striped gradients).
- Tactile keyboard buttons with crisp 1px borders and neutral shadows.
- Historical satire quiz with clear factual epilogues and colonial commission rank certificates.

---

## 7. Accessibility & Motion

- **Contrast Ratios:** Exceeds WCAG 2.1 AA across 100% of rendered DOM elements (body text ≥ 4.5:1, large headings ≥ 3.0:1, UI components ≥ 3.0:1).
- **Keyboard Navigation:** Custom focus indicator with `2px solid var(--accent-burgundy)` and `2px` offset.
- **Accessible Touch Targets:** Minimum `44px × 44px` for interactive targets on mobile viewports.
- **Reduced Motion:** All animations respect `@media (prefers-reduced-motion: reduce)` by falling back to immediate opacity changes.

---

## 8. Quality Rules & Anti-Pattern Bans

1. `[side-tab]`: Never use `border-left` or `border-right` > 1px as a card accent or callout border.
2. `[nested-cards]`: Never nest a card container inside another bordered/colored card container. Use open hairline dividers.
3. `[kicker-above-heading]`: Never place small uppercase text directly above an `h2` or `h3` heading.
4. `[dark-glow]`: Never apply colored or blurred zero-offset shadows on dark surfaces.
5. `[repeating-stripes-gradient]`: Never use striped repeating linear gradients in UI backgrounds.
6. `[emoji-in-ui]`: Never use raw emojis in interface buttons or status badges; use semantic `lucide-react` line icons (`strokeWidth={1.5}`).
7. `[undersized-ui-text]`: Never use font sizes below `12px` (`0.75rem`).
8. `[overused-font]`: Avoid generic AI fonts like `Plus Jakarta Sans` or `Inter`; employ characterful editorial pairings (`Spectral` + `Source Sans 3` + `JetBrains Mono`).

