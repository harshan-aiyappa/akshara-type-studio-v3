# Akshara Type Studio V1

A modern web application for a typography studio specializing in Kannada fonts and digital tools. It serves as both a portfolio for their font library and a hub for specialized Kannada language tools.

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 8
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 (with `@tailwindcss/vite` plugin)
- **Animation:** Framer Motion + Lenis (smooth scrolling)
- **Icons:** Lucide React
- **Package Manager:** npm

## Project Structure

- `/src` - Main application source
  - `/components` - Reusable UI components (Navigation, HeroSection, SmoothScroll, etc.)
  - `/pages` - Page views (Home/App, Fonts, About, Tools, Contact)
  - `/hooks` - Custom React hooks (useTheme)
  - `/lib` - Utilities and static data (fonts.ts, utils.ts)
  - `App.tsx` - Entry point with hash-based routing
  - `main.tsx` - React DOM mount point
- `/public` - Static assets
- `/ATS-Website-public` - Legacy HTML/JS version of the site
- `/content` - Reference documentation

## Key Features

- Hash-based routing
- Dark mode support via custom hook
- Smooth scrolling with Lenis
- Kannada font showcase library
- Kannada language tools (Image-to-Text, Speech-to-Text via Tesseract.js)

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
