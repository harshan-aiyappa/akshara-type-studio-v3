# Design & Animation Strategy: Akshara Type Studio V1

This plan outlines the modernization of the typography studio using premium web techniques like Lenis smooth scroll, parallax depth, and lens distortion effects.

## User Review Required

> [!IMPORTANT]
> This plan introduces high-performance animation libraries (Lenis, potentially GSAP). 
> **Lens Scroll** specifically often requires WebGL (via `@react-three/fiber`) for high-performance distortion. I will prioritize a high-end CSS/SVG approach first to keep it lightweight, but WebGL is recommended for the "WOW" factor.

## Proposed Changes

### Global Foundation
- **[MODIFY] [index.css](file:///d:/01_Projects/Client/Akshara-Type-Studio-V1/Akshara-Type-Studio-V1/client/src/index.css)**: Add global Lenis styles and utility classes for parallax layers.
- **[NEW] [SmoothScroll.tsx](file:///d:/01_Projects/Client/Akshara-Type-Studio-V1/Akshara-Type-Studio-V1/client/src/components/SmoothScroll.tsx)**: Wrapper component using `lenis` to orchestrate smooth scrolling across the entire app.

---

### Home Page (The "Wow" Experience)
- **[MODIFY] [HeroSection.tsx](file:///d:/01_Projects/Client/Akshara-Type-Studio-V1/Akshara-Type-Studio-V1/client/src/components/HeroSection.tsx)**:
    - Implement multi-layer parallax. The background mesh moves slower than the text, while floating Kannada characters move faster.
    - Add a "Scroll to Explore" indicator with a fluid bounce animation.
- **[MODIFY] [ProductShowcase.tsx](file:///d:/01_Projects/Client/Akshara-Type-Studio-V1/Akshara-Type-Studio-V1/client/src/components/ProductShowcase.tsx)**:
    - Implement a "Horizontal Scroll" section within the vertical flow.
    - Apply a **Lens Distortion** effect to the font previews as they pass through the center of the viewport.
- **[MODIFY] [CulturalHeritage.tsx](file:///d:/01_Projects/Client/Akshara-Type-Studio-V1/Akshara-Type-Studio-V1/client/src/components/CulturalHeritage.tsx)**:
    - Use "Masked Image Scroll" where traditional manuscript images reveal through typography-shaped masks.

---

### Fonts & Discovery
- **[MODIFY] [Fonts.tsx](file:///d:/01_Projects/Client/Akshara-Type-Studio-V1/Akshara-Type-Studio-V1/client/src/pages/Fonts.tsx)**:
    - Staggered grid entrance using Framer Motion.
    - "Dynamic Weight" hover: Fonts fluidly transition between thin and bold weights on hover (if using variable fonts).
- **[MODIFY] [FontDetail.tsx](file:///d:/01_Projects/Client/Akshara-Type-Studio-V1/Akshara-Type-Studio-V1/client/src/pages/FontDetail.tsx)**:
    - "Sticky Specimen": The main character preview stays pinned while the specimen text scrolls behind it with a lens magnification effect.

---

### About & Story
- **[MODIFY] [About.tsx](file:///d:/01_Projects/Client/Akshara-Type-Studio-V1/Akshara-Type-Studio-V1/client/src/pages/About.tsx)**:
    - Interactive Timeline: A vertical stem (like a stylus) that "draws" the timeline as you scroll.
    - 3D Parallax on archival photos.

## Verification Plan

### Automated Tests
- `npm run check`: Ensure no TypeScript errors after adding new libraries.
- `npm run build`: Verify that production build still works with new animation hooks.

### Manual Verification
- **Smoothness Check**: Scroll through the Home page to ensure 60fps performance with Lenis.
- **Parallax Velocity**: Verify that background/foreground layers move at distinct speeds without "stuttering".
- **Lens Effect**: Check the magnification/distortion over typography in the Showcase section.
- **Responsive Check**: Ensure parallax doesn't break layout on mobile (may need to disable or scale down for small screens).
