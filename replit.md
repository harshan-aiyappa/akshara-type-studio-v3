# Akshara Type Studio V1

A modern web application for a typography studio specializing in Kannada fonts and digital tools. It serves as both a portfolio for their font library and a hub for specialized Kannada language tools.

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 8
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 (with `@tailwindcss/vite` plugin)
- **Animation:** Framer Motion + Lenis (smooth scrolling)
- **Icons:** Lucide React
- **OCR:** Tesseract.js (for Image-to-Text tool)
- **Package Manager:** npm

## Project Structure

- `/src` - Main application source
  - `/components` - Reusable UI components (Navigation, HeroSection, FeaturedFonts, SmoothScroll, etc.)
  - `/pages` - Page views (Fonts, FontDetail, About, Tools, Contact)
  - `/hooks` - Custom React hooks (useTheme)
  - `/lib` - Utilities and static data (fonts.ts, utils.ts)
  - `App.tsx` - Entry point with hash-based routing (`#fonts`, `#detail/<slug>`, `#tools`, `#about`, `#contact`)
  - `index.css` - Global styles + @font-face declarations for all ATS fonts
- `/public` - Static assets
  - `/fonts/bandipura/woff2/` - ATSBandipura-Bold.woff2
  - `/fonts/bengaluru/woff2/` - 10 ATSBengaluru variants (Dot/LED/Pixel/Smooth/Square × Regular/Bold)
  - `/fonts/chikkamagaluru/woff2/` - ATSChikkamagaluru-Regular + ColorRegular
  - `/fonts/*/showcase/` - Real showcase .webp images for each font
  - `/fonts/*/ATS-*.zip` - Downloadable font packages
  - `/tools/ats-eng-to-kan.js` - Google transliteration library
- `/ATS-Website-public` - Legacy HTML/JS reference version

## Real Fonts (Available)

| Font | Slug | Styles | Year | CSS Families |
|------|------|--------|------|--------------|
| Bandipura | `bandipura` | 1 (Bold) | 2022 | ATSBandipura |
| Bengaluru | `bengaluru` | 10 (5 sub-families × Regular/Bold) | 2022 | ATSBengaluru-{Dot,LED,Pixel,Smooth,Square} |
| Chikkamagaluru | `chikkamagaluru` | 2 (Regular, Color Regular) | 2024 | ATSChikkamagaluru, ATSChikkamagaluru-Color |

## Key Features

- Hash-based routing with font slug in URL (`#detail/bandipura`)
- Dark/light mode via custom hook
- Smooth scrolling with Lenis
- Font archive with 13 fonts (3 available, 10 in development)
- Font detail pages with: showcase image gallery, type tester, variant selector, waterfall, download
- **English → Kannada Transliteration**: Google's transliteration API via `/tools/ats-eng-to-kan.js`
- **Speech to Text**: Web Speech API (webkitSpeechRecognition) with Kannada (`kn-IN`) + punctuation keywords
- **Image to Text (OCR)**: Tesseract.js with Kannada + English language data

## Development

```bash
npm run dev    # Start dev server on port 5000
npm run build  # TypeScript check + Vite build
npm run lint   # ESLint
```

## Deployment

Configured as a static site deployment:
- Build command: `npm run build`
- Public directory: `dist`

## Replit Configuration

- Dev server: `0.0.0.0:5000` with `allowedHosts: true` for proxy compatibility
- Workflow: "Start application" runs `npm run dev`
