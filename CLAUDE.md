# CLAUDE.md — Site Rebuild Rules (macOS)

## What This Project Is
This is a **rebuild** of an existing website — not a new site from scratch. The goal is to recreate or improve an existing site while preserving its content, structure, and brand identity.

## Step 1: Understand the Original Site
Before writing any code, study the source material. One or more of these will be available:

* **`original_site/` folder** — Contains the old site's HTML/CSS/JS files. Read every file. Extract all real copy, images, links, navigation structure, page list, and any embedded data (testimonials, team bios, pricing, etc.).
* **`reference/` folder** — Contains screenshots or exported images of the original site. Study layout, spacing, colors, typography, and section order.
* **Live URL** — If a URL is provided in the prompt, use WebFetch to study the live page. Extract all visible text content, navigation items, section structure, image descriptions, and overall layout approach.

**Do all of the following before writing code:**
1. List every page/section the original site has
2. Extract all real text content — headings, paragraphs, CTAs, navigation labels, footer content
3. Identify the color palette (exact hex values)
4. Identify fonts used (or closest matches)
5. Note the layout pattern of each section (hero, features grid, testimonials carousel, etc.)
6. Catalog all images — note which ones are available in `brand_assets/` or `original_site/`

## Step 2: Preserve Real Content
* **Use the original site's real text** — do not replace it with placeholder copy
* **Use real images** from `brand_assets/` or `original_site/` when available
* Only use `https://placehold.co/WIDTHxHEIGHT` for images you cannot find in the source files
* Keep the same navigation structure and page hierarchy
* Preserve all CTAs, phone numbers, email addresses, and links exactly

## Step 3: Build the Rebuild
* Recreate the site section by section in the same order as the original
* Match the original's content and structure, but apply modern craft (see guardrails below)
* If the user says "match exactly" — replicate the design pixel-for-pixel
* If the user says "modernize" or "improve" — keep content/structure but upgrade the visual design

## Reference Images
* Screenshots in `reference/` are the source of truth for layout and section order
* Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds.
* When comparing: check section order, content accuracy, spacing, font sizes, colors, alignment
* Stop only when no visible differences remain or user says so.

## Local Server
* Always serve on localhost — never screenshot a file:/// URL.
* Start the dev server: `node serve.mjs` (serves the project root at http://localhost:3000)
* serve.mjs lives in the project root. Start it in the background before taking any screenshots.
* If the server is already running, do not start a second instance.

## Screenshot Workflow
* Puppeteer is installed globally via npm. Chrome cache is at ~/.cache/puppeteer/.
* Always screenshot from localhost: `node screenshot.mjs http://localhost:3000`
* Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
* Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
* screenshot.mjs lives in the project root. Use it as-is.
* After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
* Check: content accuracy first, then spacing/padding, font size/weight, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
* Single index.html file, all styles inline, unless user says otherwise
* Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
* Mobile-first responsive
* Preserve the original site's page title and meta description

## Brand Assets
* Always check `brand_assets/` before designing. It may contain logos, color guides, style guides, or images.
* Always check `original_site/` for images, icons, and assets from the old build.
* If assets exist, use them. Do not use placeholders where real assets are available.
* If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.
* If no brand assets exist, extract colors and style from the original site or reference screenshots.

## Anti-Generic Guardrails
* **Colors**: Never use default Tailwind palette (indigo-500, blue-600, etc.). Use the original site's brand colors or derive from them.
* **Shadows**: Never use flat shadow-md. Use layered, color-tinted shadows with low opacity.
* **Typography**: Never use the same font for headings and body. Match the original's font pairing, or pair a display/serif with a clean sans. Apply tight tracking (-0.03em) on large headings, generous line-height (1.7) on body.
* **Gradients**: Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
* **Animations**: Only animate transform and opacity. Never transition-all. Use spring-style easing.
* **Interactive states**: Every clickable element needs hover, focus-visible, and active states. No exceptions.
* **Images**: Add a gradient overlay (bg-gradient-to-t from-black/60) and a color treatment layer with mix-blend-multiply.
* **Spacing**: Use intentional, consistent spacing tokens — not random Tailwind steps.
* **Depth**: Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
* Do not invent content — use only what exists in the original site
* Do not remove sections that exist in the original unless the user says to
* Do not add sections that don't exist in the original unless the user says to
* Do not replace real copy with Lorem Ipsum or placeholder text
* Do not stop after one screenshot pass
* Do not use transition-all
* Do not use default Tailwind blue/indigo as primary color

## Design System

### Aesthetic
Cinematic prestige editorial portfolio for a two-time Grammy-winning musical architect. Dark, authoritative, and confident — like a film title card or concert poster come to life. Bridges the gravitas of the symphony hall with the raw energy of hip-hop culture through condensed display typography, a minimal burnt-orange accent, and textured depth.
Star of the show: Full-bleed cinematic hero with film grain texture and oversized Bebas Neue name, plus accent-orange footer with clipped oversized name.
Visual rhyming: Uppercase tracking system across all labels and headings, burnt orange (#e34510) used surgically on section labels/hover/footer, border-white10 dividers create editorial rhythm, film grain texture at varying opacities.

### Fonts
- **Display**: Bebas Neue (headings, hero text, footer name) — 400
- **Body**: Inter (paragraphs, UI text, labels, navigation) — 300, 400, 500, 600, 700
- Source: Google Fonts (next/font/google)

### Colors
- **Background**: #050505 (Near Black)
- **Surface**: #0a0a0a (Dark Surface)
- **Card**: #111111 (Card Dark)
- **Text**: #FFFFFF (White)
- **Text Secondary**: rgba(255,255,255,0.6) (White 60%)
- **Text Tertiary**: rgba(255,255,255,0.2) (White 20%)
- **Accent**: #e34510 (Burnt Orange)
- **Accent Dark**: #B83A0E (Deep Orange — active/pressed)
- **Accent Glow**: rgba(227,69,16,0.15) (Color-tinted hover shadows)
- **Border**: rgba(255,255,255,0.1) (White 10%)
- **Border Hover**: rgba(255,255,255,0.25) (White 25%)
- **Warm White**: #F5F0E8 (Cream — pull quotes, highlights)

### Typography Classes
- `.heading-hero` — Bebas Neue, clamp(3.2rem, 11vw, 11rem), -0.03em tracking, line-height 0.88, uppercase
- `.heading-xl` — Bebas Neue, clamp(3rem, 8vw, 7.5rem), -0.02em tracking, line-height 0.95, uppercase
- `.heading-lg` — Bebas Neue, clamp(2rem, 5vw, 4.5rem), -0.02em tracking, line-height 1, uppercase
- `.heading-md` — Bebas Neue, clamp(1.5rem, 3.5vw, 2.75rem), -0.01em tracking, line-height 1.1, uppercase
- `.heading-sm` — Inter, clamp(1.125rem, 2vw, 1.375rem), 700 weight, -0.01em tracking, uppercase
- `.footer-name` — Bebas Neue, clamp(5rem, 18vw, 18rem), -0.04em tracking, line-height 0.82, uppercase
- `.section-label` — Inter, 0.6875rem, 500 weight, 0.12em tracking, uppercase, accent color
- `.body-lg` — Inter, 1.0625rem, line-height 1.7, text-secondary color
- `.nav-link` — Inter, 0.75rem, 400 weight, 0.08em tracking, uppercase, text-secondary color

### Button Classes
- `.btn-pill` — Border border-white25, rounded-full, px-6 py-3, Inter 0.6875rem uppercase, 0.08em tracking, arrow suffix →

### Design Rules
- Type scale: Fluid with clamp() — Bebas Neue for display, Inter for body/UI
- Spacing: 8pt grid (Tailwind default multiples of 4/8)
- Container: max-w-[75rem], px-6 mobile / px-10 desktop
- Section padding: py-24 md:py-32 (standard), py-32 md:py-40 (major)
- Shadows: Color-tinted accent glow rgba(227,69,16,0.15) on hover states
- Border radius: rounded-md for cards, rounded-full for pill buttons
- Animations: Framer Motion — fade up + translateY(20px→0) on scroll, 0.6s ease-out, stagger 0.1s. Only animate transform and opacity. Respect prefers-reduced-motion.
- Depth: Film grain SVG noise at 3.5% hero / 2% sections. Three-tier surface system (bg → surface → card). Gradient transitions between sections.
- Hero: Full-bleed image, no entrance animation, instant presence. Film grain is the only motion.
- Marquee: Continuous CSS horizontal scroll, Bebas Neue heading-xl, 20s linear infinite.

### Layout Patterns
- Container: max-w-[75rem], px-6 sm:px-10
- Section padding: py-24 md:py-32 default, py-32 md:py-40 major sections
- Hero (Home): Full-viewport image, edge-to-edge, dual gradients, film grain overlay, bottom-left Bebas Neue name
- Hero (Interior): min-h-[60vh], bottom-aligned text, accent label + Bebas heading, no image
- Navigation: Fixed header, bg-bg/90 backdrop-blur, logo left, inline nav right (desktop), hamburger overlay (mobile)
- Project Cards: Border border-white10, rounded-md, 16:10 image with hover scale(1.03), card lift translateY(-2px)
- Credit Rows: Grid year|description|tag, border-top white10, Inter 13px
- Footer: Full accent-orange background, 4-column info grid, oversized clipped Bebas Neue name at bottom
