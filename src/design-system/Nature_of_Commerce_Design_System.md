# Nature of Commerce — Design System (Portable Spec)

> **How to use this file:** Paste the whole thing into any AI (ChatGPT, Claude, Gemini, etc.) and say *"Design/build X using this design system."* It contains everything needed — brand voice, colors, type, spacing, effects, animation, components, and copy patterns — as both human-readable notes and a single machine-readable JSON block at the bottom.

**Brand:** Nature of Commerce LLC — natureofcommerce.com
**Founder:** Zeshan Ahmad
**Tagline:** *"The mechanics of participation. The nature of commerce."*
**Guiding question:** *"What would nature do?"*
**Aesthetic in one line:** Engineering blueprints come to life — electric blue line-work on deep navy-black, glass-morphism panels, generous space, technical precision without coldness.

---

## 1. Brand & Voice

- **Authoritative without ego** — writes as a builder who has done the work, not a marketer.
- **Technically precise** — uses correct domain terms (zk-VaR, EIP-3009, A2A protocol, x402) without dumbing down.
- **First-principles driven** — explains *why* from first principles, not convention.
- **Understated ambition** — confident claims backed by hard evidence ("28% CAGR, 2.07 Sharpe"), never vague superlatives.
- **No emoji. Ever.**
- **Sentence case** for headings and body. Section labels are ALL CAPS with wide tracking (`0.15em`).
- **"We"** for the studio; **"Zeshan"** / first person in bio context.
- **Em dash (—)** for clause separation, never double hyphen. Oxford comma. Numerals for all metrics, even below ten.

**Copy patterns (lift these rhythms):**
- Short punchy intro: *"20 years of creating access to global markets."*
- Spaced tagline fragments: *"Payments.  Trading.  Education.  Ownership."*
- Credential stat: *"$1.2B+ — Financial transactions architected."*
- Why-now framing: *"AI agents are autonomous economic actors — they need native payment infrastructure, not human rails adapted for machines."*

---

## 2. Color

NOC Blue `#4A90D9` is the brand primary — every interactive element, gradient text, border, and glow. Backgrounds are near-black with a navy undertone (not pure black). Borders are *always* translucent blue.

Dark is the default; light is a full sibling theme (see §2b). Blue used as *text* darkens on light; blue used as *fill* stays on brand.

| Role | Dark (default) | Light theme |
|---|---|---|
| Primary | `#4A90D9` | `#4A90D9` |
| Primary light / dark / intense | `#7EB8F0` / `#2563EB` / `#60A5FA` | same |
| BG primary / secondary / tertiary | `#050508` / `#0A0A10` / `#141420` | `#F7F9FC` / `#FFFFFF` / `#EDF2FA` |
| BG card | `rgba(20,20,32,0.70)` | `rgba(255,255,255,0.92)` |
| Text primary / secondary / muted | `#FFFFFF` / `#94A3B8` / `#64748B` | `#0D1526` / `#475569` / `#94A3B8` |
| Border default / hover / active | `rgba(74,144,217,0.12 / 0.35 / 0.50)` | `0.18 / 0.40 / 0.60` |

**Status / venture accents:** Success/Emerald `#34D399` (ReFi Trading, active) · Warning/Amber `#F59E0B` (patents, raising) · Error `#EF4444` · Teal `#2DD4BF` (Wholesome Linen).

---

## 2b. Light Theme

Light is **not an inversion** of dark. The brand metaphor inverts with it:

> **Dark = a glowing blueprint on drafting film. Light = ink printed on drafting paper.**

Three rules drive every light value:

1. **Glows become shadows.** A radial glow (`0 0 60px`) is invisible on white. Every glow shadow is re-cut as a directional blue-tinted drop shadow (`0 4px 24px`) so hover still reads as lift.
2. **Glass becomes paper.** Card surfaces go near-solid white with a cool blue tint (0.92 alpha), `saturate` drops 180% → 140%, glow orbs drop to 0.35 opacity.
3. **Blue darkens for text.** `#7EB8F0` on white is ~1.9:1 — any blue used as TEXT switches to `#2563EB` (~5.2:1). Blue used as FILL or BORDER stays on brand. Fills rise (0.08 → 0.10) because a faint wash vanishes on paper.

Status accents darken: Success `#15803D`, Warning `#B45309`, Error `#DC2626`, Emerald `#059669`, Teal `#0D9488`.

**Usage:** `<html data-theme="light">` · `<html data-theme="auto">` (follows OS) · `<html>` = dark default. Both themes are scopeable, so either nests inside the other — a dark footer on a light page is `<footer data-theme="dark">`.

**When to use which:** Dark for marketing, decks, product surfaces — it is the brand's face. Light for documents read at length or printed (whitepapers, one-pagers, invoices, data tables), and anywhere the output sits in an already-light host.

---

## 3. Typography

- **Display** — Space Grotesk (geometric, techy). All headings. Bold (700), very tight tracking (`-0.03` to `-0.05em`).
- **Body** — Inter. All body, labels, UI.
- **Mono** — Fira Code (self-hosted, variable 300–700). Era dates, code, numbered indicators.

Loaded via Google Fonts CDN: `Inter` + `Space Grotesk`. Fira Code is self-hosted (`fonts/FiraCode-*.ttf`).

Key sizes: hero `clamp(3rem,8vw,6rem)` / weight 700 / tracking `-0.04em` · display `clamp(2.5rem,6vw,4.5rem)` · section labels `11px` uppercase tracking `0.15em`. Type scale runs `--text-2xs` 10px → `--text-7xl` 72px.

---

## 4. Spacing, Radius, Layout

4px base unit (`--space-1`=4px … `--space-32`=128px). Section vertical padding is fluid `clamp(80px,12vw,160px)` — generous breathing room. Max content width `1280px`, gutter `clamp(16px,4vw,24px)`.

Radius: sm 8px · md 12px (chips) · lg 16px (small cards, buttons, inputs) · xl 24px (large cards) · 2xl 32px · full 9999px (pills).

---

## 5. Effects, Surfaces, Motion

- **Glass card** (primary surface): `rgba(20,20,32,0.7)` bg, `backdrop-filter: blur(16px)`, `1px solid rgba(74,144,217,0.12)` border. Hover → border brightens to `0.35` + glow shadow.
- **Interactive card** hover: `translateY(-8px) scale(1.01)` + intense glow at `0.50` border.
- **Glow shadows:** `--shadow-glow` `0 0 60px rgba(74,144,217,0.20)` → `--shadow-glow-intense`.
- **Backgrounds:** blueprint grid (translucent blue 60px grid + center radial), glow orbs (`blur(100px)` off-screen radial blobs), mesh gradient. No stock photos, no generic illustrations.
- **Gradient text:** `linear-gradient(135deg,#7EB8F0,#4A90D9,#60A5FA,#7EB8F0)` clipped to text, `background-position` looping 8s.
- **Easing:** standard `cubic-bezier(0.4,0,0.2,1)` · spring `cubic-bezier(0.34,1.56,0.64,1)`. Durations: fast 150ms · base 300ms · slow 500ms.
- **Hover:** buttons `translateY(-3px)` + shadow intensifies (active `-1px`); nav links underline expands from center; focus ring `2px solid #4A90D9` offset 3px.
- Respects `prefers-reduced-motion`.

---

## 6. Iconography

**Lucide** (`lucide-react@0.344.0`) — stroke-based, ~2px weight, 24px grid, `currentColor`. CDN for prototypes: `https://unpkg.com/lucide@latest/dist/umd/lucide.js`. Sizes: 16px inline · 20px standard · 24px navbar · 32–48px decorative. Common icons: ArrowRight, ExternalLink, Shield, Cpu, TrendingUp, BookOpen, Github, CheckCircle, Layers, Menu, X, Linkedin, Mail, Lock, ArrowUpRight.

---

## 7. Components (utility-class recipes — no framework needed)

Drop these classes/markup straight into any HTML. (React component versions also exist in the full system.)

**Button** — `.btn-primary` (blue gradient fill, glow, lifts on hover) · `.btn-secondary` (transparent, blue border on hover). Sizes via padding: sm 10/20px, md 16/32px, lg 20/40px.

**Tag/pill** — `.tag` — 11px uppercase, translucent blue. Conventions: blue = protocol/studio, emerald = active/verified, amber = raising/patents, teal = Wholesome Linen.

**Section label** — `.section-label` — always precedes an h1/h2; 11px uppercase pill with optional pulsing dot.

**Card** — glass surface; add `.card-spotlight` for the top spotlight line on hover.

**Input** — `.input-field` + `.input-label` — dark bg, focus ring `0 0 0 4px rgba(74,144,217,0.15)`.

**Stat** — `.stat-value` (gradient display number) + `.stat-label` (uppercase muted caption).

---

## 8. Full Machine-Readable Spec (JSON)

```json
{
  "name": "Nature of Commerce Design System",
  "brand": {
    "company": "Nature of Commerce LLC",
    "url": "https://natureofcommerce.com",
    "founder": "Zeshan Ahmad",
    "tagline": "The mechanics of participation. The nature of commerce.",
    "guidingQuestion": "What would nature do?",
    "aesthetic": "Engineering blueprints in electric blue on deep navy-black; glass-morphism; generous space; technical precision."
  },
  "voice": {
    "traits": ["authoritative without ego", "technically precise", "first-principles", "understated ambition"],
    "emoji": false,
    "casing": "Sentence case for headings/body; section labels ALL CAPS tracking 0.15em",
    "pronouns": "We (studio); Zeshan/first-person (bio)",
    "punctuation": "Em dash for clauses; Oxford comma; numerals for all metrics"
  },
  "color": {
    "brand": {
      "blue": "#4A90D9",
      "blueLight": "#7EB8F0",
      "blueDark": "#2563EB",
      "blueIntense": "#60A5FA",
      "blueGlow": "rgba(74,144,217,0.4)"
    },
    "dark": {
      "bgPrimary": "#050508",
      "bgSecondary": "#0A0A10",
      "bgTertiary": "#141420",
      "bgCard": "rgba(20,20,32,0.70)",
      "bgElevated": "rgba(30,30,50,0.50)",
      "textPrimary": "#FFFFFF",
      "textSecondary": "#94A3B8",
      "textMuted": "#64748B",
      "border": "rgba(74,144,217,0.12)",
      "borderHover": "rgba(74,144,217,0.35)",
      "borderActive": "rgba(74,144,217,0.50)",
      "gridLine": "rgba(74,144,217,0.03)",
      "navBgScrolled": "rgba(10,10,16,0.95)",
      "cardGradientEnd": "rgba(10,10,16,0.80)",
      "decorativeNum": "rgba(255,255,255,0.08)"
    },
    "light": {
      "bgPrimary": "#F7F9FC",
      "bgSecondary": "#FFFFFF",
      "bgTertiary": "#EDF2FA",
      "bgCard": "rgba(255,255,255,0.92)",
      "bgElevated": "rgba(237,242,250,0.80)",
      "textPrimary": "#0D1526",
      "textSecondary": "#475569",
      "textMuted": "#94A3B8",
      "border": "rgba(74,144,217,0.18)",
      "borderHover": "rgba(74,144,217,0.40)",
      "borderActive": "rgba(74,144,217,0.60)",
      "gridLine": "rgba(74,144,217,0.07)",
      "navBgScrolled": "rgba(247,249,252,0.97)",
      "cardGradientEnd": "rgba(255,255,255,0.90)",
      "decorativeNum": "rgba(0,0,0,0.06)"
    },
    "status": { "success": "#22C55E", "warning": "#F59E0B", "error": "#EF4444" },
    "venture": { "emerald": "#34D399", "teal": "#2DD4BF", "amber": "#F59E0B" }
  },
  "themes": {
    "default": "dark",
    "usage": "<html data-theme=\"light\"> | <html data-theme=\"auto\"> (follows OS) | <html> = dark. Both themes are scopeable to any subtree, so either nests inside the other.",
    "principle": "Light is not an inversion. Dark = glowing blueprint on drafting film; light = ink printed on drafting paper.",
    "rules": [
      "Glows become directional shadows — a radial glow is invisible on white.",
      "Glass becomes paper — near-solid white, saturate 180% -> 140%, orbs to 0.35 opacity.",
      "Blue darkens for text (#7EB8F0 -> #2563EB); blue as fill or border stays on brand; fills rise because a faint wash vanishes on paper."
    ],
    "whenToUse": {
      "dark": "Marketing site, decks, product surfaces — the brand's face.",
      "light": "Documents read at length or printed (whitepapers, one-pagers, invoices, data tables); output hosted inside an already-light surface."
    },
    "light": {
      "primaryText": "#2563EB",
      "fills": { "subtle": "rgba(74,144,217,0.10)", "tag": "rgba(74,144,217,0.12)", "tagHover": "rgba(74,144,217,0.22)", "borderTag": "rgba(74,144,217,0.28)", "borderTagHover": "rgba(74,144,217,0.40)" },
      "status": { "success": "#15803D", "warning": "#B45309", "error": "#DC2626", "emerald": "#059669", "teal": "#0D9488", "amber": "#B45309" },
      "shadow": {
        "glow": "0 4px 24px rgba(74,144,217,0.18)",
        "glowLg": "0 12px 48px rgba(74,144,217,0.22)",
        "glowIntense": "0 8px 32px rgba(74,144,217,0.30), 0 0 60px rgba(74,144,217,0.10)",
        "card": "0 4px 20px rgba(13,21,38,0.08)",
        "elevated": "0 20px 45px -12px rgba(13,21,38,0.16)",
        "btn": "0 4px 15px rgba(74,144,217,0.25)",
        "btnHover": "0 12px 32px rgba(74,144,217,0.35)",
        "btnSm": "0 6px 20px rgba(74,144,217,0.14)"
      },
      "glass": {
        "panelBg": "linear-gradient(135deg, rgba(255,255,255,0.90) 0%, rgba(247,249,252,0.95) 100%)",
        "cardInteractiveBg": "linear-gradient(135deg, rgba(255,255,255,0.78) 0%, rgba(237,242,250,0.88) 100%)",
        "saturate": "140%"
      },
      "textGradientStops": "#2563EB 0%, #4A90D9 40%, #1D4ED8 80%, #2563EB 100%",
      "statGradientStops": "#2563EB 0%, #4A90D9 100%",
      "mesh": { "stop1": "rgba(74,144,217,0.10)", "stop2": "rgba(96,165,250,0.07)", "stop3": "rgba(74,144,217,0.05)" },
      "glowOrbOpacity": 0.35
    },
    "addingThemeSensitiveValues": "Never hardcode a dark rgba in a utility. Add the token to :root, restate it in BOTH theme-dark.css and theme-light.css, then reference the token."
  },
  "typography": {
    "families": {
      "display": "'Space Grotesk', system-ui, sans-serif",
      "body": "'Inter', system-ui, sans-serif",
      "mono": "'Fira Code', 'SF Mono', 'Cascadia Code', monospace"
    },
    "webfonts": {
      "googleFontsImport": "https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      "selfHosted": ["Fira Code (variable 300-700) — fonts/FiraCode-VariableFont_wght.ttf"]
    },
    "scale": {
      "2xs": "0.625rem", "xs": "0.6875rem", "sm": "0.8125rem", "base": "1rem",
      "lg": "1.125rem", "xl": "1.25rem", "2xl": "1.5rem", "3xl": "1.875rem",
      "4xl": "2.25rem", "5xl": "3rem", "6xl": "3.75rem", "7xl": "4.5rem"
    },
    "leading": { "none": 1, "tight": 1.1, "snug": 1.35, "normal": 1.6, "relaxed": 1.7 },
    "tracking": { "hero": "-0.05em", "display": "-0.03em", "tight": "-0.02em", "normal": "0em", "wide": "0.02em", "wider": "0.05em", "widest": "0.15em" },
    "presets": {
      "hero": "font:700 clamp(3rem,8vw,6rem)/1 'Space Grotesk'; letter-spacing:-0.04em",
      "display": "font:700 clamp(2.5rem,6vw,4.5rem)/1.1 'Space Grotesk'; letter-spacing:-0.03em",
      "bodyLarge": "font:400 clamp(1.125rem,2vw,1.375rem)/1.7 'Inter'; color:secondary",
      "sectionLabel": "font:700 11px 'Inter'; text-transform:uppercase; letter-spacing:0.15em"
    },
    "headingWeights": { "h1": 700, "h2": 700, "h3": 600, "h4": 600, "h5": 500, "h6": 500 }
  },
  "spacing": {
    "baseUnit": "4px",
    "scale": { "1":"4px","2":"8px","3":"12px","4":"16px","5":"20px","6":"24px","7":"28px","8":"32px","9":"36px","10":"40px","12":"48px","14":"56px","16":"64px","20":"80px","24":"96px","32":"128px","40":"160px" },
    "section": "clamp(80px,12vw,160px)",
    "containerMax": "1280px",
    "containerPadding": "clamp(16px,4vw,24px)"
  },
  "radius": { "sm":"8px","md":"12px","lg":"16px","xl":"24px","2xl":"32px","full":"9999px" },
  "effects": {
    "shadow": {
      "glow": "0 0 60px rgba(74,144,217,0.20)",
      "glowLg": "0 0 120px rgba(74,144,217,0.25)",
      "glowIntense": "0 0 80px rgba(74,144,217,0.40), 0 0 160px rgba(74,144,217,0.20)",
      "card": "0 8px 32px rgba(0,0,0,0.40)",
      "elevated": "0 25px 50px -12px rgba(0,0,0,0.50)",
      "btn": "0 4px 15px rgba(74,144,217,0.30)",
      "btnHover": "0 12px 40px rgba(74,144,217,0.40)",
      "btnSm": "0 8px 25px rgba(74,144,217,0.15)"
    },
    "blur": { "sm":"8px","md":"16px","lg":"20px","xl":"40px","orb":"100px" },
    "glassCard": "background:rgba(20,20,32,0.7); backdrop-filter:blur(16px); border:1px solid rgba(74,144,217,0.12)",
    "blueprintGrid": "linear-gradient(rgba(74,144,217,0.03) 1px,transparent 1px), linear-gradient(90deg,rgba(74,144,217,0.03) 1px,transparent 1px); background-size:60px 60px",
    "textGradient": "linear-gradient(135deg,#7EB8F0 0%,#4A90D9 40%,#60A5FA 80%,#7EB8F0 100%) clipped to text, animated 8s",
    "gradientBorder": "linear-gradient(135deg,#4A90D9,transparent,#7EB8F0) via mask-composite"
  },
  "motion": {
    "easing": { "standard":"cubic-bezier(0.4,0,0.2,1)","spring":"cubic-bezier(0.34,1.56,0.64,1)","bounce":"cubic-bezier(0.68,-0.55,0.265,1.55)" },
    "duration": { "fast":"150ms","base":"300ms","slow":"500ms","spring":"600ms" },
    "keyframes": ["gradient-flow (8s)","glow-pulse (3s)","float-organic (12s)","pulse-organic (4s)","drift (15s)","scale-breathe (6s)","shimmer-slide (3s)","spin-slow (20s)"],
    "entrance": "opacity 0->1 + translateY(40px->0), 700ms ease-standard",
    "hover": { "button":"translateY(-3px) + shadow intensifies (active -1px)", "card":"translateY(-8px) scale(1.01) + intense glow", "navLink":"underline expands from center; color -> white" },
    "focusRing": "2px solid #4A90D9, offset 3px",
    "reducedMotion": "honored"
  },
  "iconography": {
    "system": "Lucide (lucide-react@0.344.0)",
    "cdn": "https://unpkg.com/lucide@latest/dist/umd/lucide.js",
    "style": "stroke-based, ~2px weight, 24px grid, currentColor",
    "sizes": { "inline":"16px","standard":"20px","navbar":"24px","decorative":"32-48px" },
    "emoji": false
  },
  "components": {
    "Button": {
      "variants": ["primary (blue gradient fill, glow, lifts)", "secondary (transparent, blue border on hover)", "ghost (text-only, blue->white)"],
      "sizes": { "sm":"10/20px","md":"16/32px","lg":"20/40px" },
      "css": ".btn-primary{display:inline-flex;gap:8px;font:600 15px 'Inter';color:#fff;padding:16px 32px;border-radius:16px;border:none;background:linear-gradient(135deg,#4A90D9,#2563EB);box-shadow:0 4px 15px rgba(74,144,217,0.30);transition:all 300ms} .btn-primary:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(74,144,217,0.40)}"
    },
    "Tag": {
      "colors": { "blue":"protocol/studio","emerald":"active/verified","amber":"raising/patents","teal":"Wholesome Linen" },
      "css": ".tag{display:inline-flex;padding:6px 14px;font:600 11px 'Inter';text-transform:uppercase;letter-spacing:0.05em;background:rgba(74,144,217,0.10);color:#7EB8F0;border:1px solid rgba(74,144,217,0.20);border-radius:9999px}"
    },
    "SectionLabel": {
      "use": "Always precedes h1/h2. Optional pulsing dot.",
      "css": ".section-label{display:inline-flex;align-items:center;gap:10px;font:700 11px 'Inter';letter-spacing:0.15em;text-transform:uppercase;color:#4A90D9;padding:10px 20px;background:rgba(74,144,217,0.08);border:1px solid rgba(74,144,217,0.20);border-radius:9999px}"
    },
    "Card": {
      "variants": ["default","elevated (blur 20px saturate 180%)","interactive (lifts -8px scale 1.01)"],
      "css": ".glass-card{background:rgba(20,20,32,0.7);backdrop-filter:blur(16px);border:1px solid rgba(74,144,217,0.12);border-radius:24px;transition:all 300ms}.glass-card:hover{border-color:rgba(74,144,217,0.35);box-shadow:0 0 60px rgba(74,144,217,0.20)}"
    },
    "Input": {
      "css": ".input-field{width:100%;padding:16px 20px;font:400 16px 'Inter';color:#fff;background:#141420;border:1px solid rgba(74,144,217,0.12);border-radius:16px}.input-field:focus{border-color:#4A90D9;box-shadow:0 0 0 4px rgba(74,144,217,0.15)}.input-label{display:block;font:600 13px 'Inter';color:#94A3B8;margin-bottom:8px}"
    },
    "Stat": {
      "css": ".stat-value{font:700 clamp(2.5rem,5vw,4rem) 'Space Grotesk';background:linear-gradient(135deg,#7EB8F0,#4A90D9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1}.stat-label{font:500 0.75rem 'Inter';color:#64748B;margin-top:12px;text-transform:uppercase;letter-spacing:0.1em}"
    }
  },
  "products": [
    { "name":"P402.io", "url":"https://www.p402.io", "desc":"Agentic payment infrastructure — routes 300+ AI models, settles via x402 on Base L2", "status":"Active", "accent":"blue" },
    { "name":"ReFi Trading", "url":"https://refi.trading", "desc":"RL trading agents — 28% CAGR, 2.07 Sharpe; USPTO patent filed", "status":"Raising Seed", "accent":"emerald" },
    { "name":"RapMath", "url":"https://www.rapmath.com", "desc":"Math education through hip-hop", "status":"Active", "accent":"blue" },
    { "name":"EYEcercise", "url":"https://eyecercise.com", "desc":"Vision-training RPG for Apple Vision Pro / Meta Quest", "status":"Building", "accent":"blue" },
    { "name":"Wholesome Linen", "url":"https://wholesomelinen.com", "desc":"Organic baby/toddler bedding, OEKO-TEX certified", "status":"Active", "accent":"teal" }
  ],
  "sources": {
    "websiteCodebase": "https://github.com/Z333Q/NoC-2026-Website",
    "p402Protocol": "https://github.com/Z333Q/p402-protocol",
    "liveSite": "https://natureofcommerce.com"
  }
}
```

---

*Generated from the Nature of Commerce design system. Primary source of truth: [github.com/Z333Q/NoC-2026-Website](https://github.com/Z333Q/NoC-2026-Website).*
