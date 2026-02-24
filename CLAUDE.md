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
