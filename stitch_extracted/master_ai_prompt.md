# Master AI Generation Prompt: Akshara Type Studio V1

**Role**: Senior UI/UX Designer & Creative Technologist
**Goal**: Generate high-end, premium React components (Vite + Tailwind) for a Kannada Typography Studio.
**Aesthetic**: Neumorphic-Glassmorphism, Forest/Jade/Evergreen palette, Smooth Scroll, Parallax Depth.

---

## 🎨 Design System (Tokens)

### Brand Palette
- **Primary (Forest)**: `#2A8D40`
- **Accent (Jade)**: `#3AB549`
- **Deep (Evergreen)**: `#08372F`
- **Background**: `#FAFFFE` (Gradient Mesh to `#F0FAF2`)
- **Typography Contrast**: High (HSL 0, 0%, 6% for headers)

### Typography
- **Display**: 'Inter', sans-serif (Weights: 700, 800, 900)
- **Kannada Serif**: 'Noto Sans Kannada' (High legibility, elegant curves)
- **Body**: 'Inter', sans-serif (Weights: 400, 500)

### Surface Styles
- **Glassmorphic**: `backdrop-blur(20px)`, `border: 1px solid rgba(255,255,255,0.3)`
- **Modern Cards**: Soft shadows, `border-radius: 1.25rem`, subtle hover-lift.

---

## 🚀 Advanced Animation Instructions

1.  **Global Smooth Scroll**: Implement **Lenis** orchestrator. Every scroll action must feel "buttery".
2.  **Parallax Layers**: Use `framer-motion` `useScroll` and `useTransform`. Header elements should move at 0.8x speed, while background elements move at 0.3x speed.
3.  **Lens Scroll Distortion**: Create a "magnifier" overlay that follows the scroll position or cursor. As it passes over Kannada text, it should slightly bulge or distort the characters forward (Z-axis).
4.  **Staggered Reveals**: All list items must enter the viewport with a `y: 30`, `opacity: 0` to `y: 0`, `opacity: 1` staggered transition.

---

## 🏗️ Screen Requirements

### 1. Home (Creative Landings)
- **Hero**: Immersive 3-layer parallax. "Free Kannada Typography" text should feel detached from the background.
- **Showcase**: A horizontal swiper (Embla) that uses a "Lens" effect on the centered card to magnify the font details.
- **Heritage**: Masked typography scroll—as you scroll, traditional images are revealed *inside* the Kannada characters.

### 2. Fonts Library (The Archive)
- **Grid Focus**: Clean 2-column grid.
- **Interactive Preview**: On hover, the font preview text should fluidly change weight (thin to bold).
- **Sticky Filter**: Sidebar category navigation that stays pinned with a glassmorphic blur.

### 3. Font Detail (Specimen Explorer)
- **Character Waterfall**: A scroll section showing characters in decreasing sizes.
- **Micro-Playground**: A textbox where users can type Kannada text and see it reflected in real-time with smooth CSS transitions.

### 4. About (The Story)
- **Drawing Timeline**: A vertical line "strokes" forward as you scroll down the history of the studio.
- **3D Photo Cards**: Portraits/historical photos that tilt based on mouse position.

---

## 🛠️ Tech Integration Prompt
"Please generate these screens as React functional components using:
- **Tailwind CSS** for layout.
- **Framer Motion** for all animations.
- **Lenis** for global scroll.
- **Lucide React** for icons.
Ensure all HTML is semantic and WCAG AA contrast compliant using the Evergreen/Forest palette."
