# Design System Specification: High-End Editorial Typography

## 1. Overview & Creative North Star
**Creative North Star: "The Living Manuscript"**
This design system moves beyond the rigid, "boxed-in" nature of traditional web apps to create a digital environment that feels like a premium, tactile editorial piece. For a Kannada Typography Studio, the interface must act as a silent stage for the glyphs themselves. 

We achieve this through **Organic Layering**—the feeling that the UI is composed of sheets of frosted glass and fine vellum stacked within a lush, forest-like atmosphere. We break the template look by using intentional asymmetry, where large-scale Kannada typography overlaps background elements, and smooth-scroll momentum creates a "liquid" navigation experience.

---

## 2. Colors & Surface Philosophy
The palette is rooted in the depth of a tropical forest, transitioning from sunlight-dappled jade to the shadows of deep evergreen.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Sectioning must be achieved through background shifts (e.g., moving from `surface` to `surface-container-low`) or subtle tonal transitions. The eye should perceive boundaries through light and depth, not ink.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack. Use the `surface-container` tiers to create depth:
- **Base Layer:** `surface` (#f5faf9) or the custom Gradient Mesh (#FAFFFE to #F0FAF2).
- **Secondary Sections:** `surface-container-low` (#f0f5f4) to subtly define content areas.
- **Interactive Cards:** `surface-container-lowest` (#ffffff) for a "lifted" paper feel.
- **Overlays/Modals:** `surface-bright` with 80% opacity and a `backdrop-blur(20px)`.

### The Glass & Gradient Rule
To achieve the "Neumorphic-Glassmorphic" aesthetic, utilize the **Jade Accent** (#3AB549) and **Forest Primary** (#006b27). 
- **CTA Soul:** Apply a linear gradient from `primary` (#006b27) to `primary_container` (#21863a) at 135° to give buttons a curved, three-dimensional energy.
- **Glass Floating Elements:** Navigation bars and floating action menus should use a semi-transparent `surface_container_lowest` with a 1px "Ghost Border" (see Section 4).

---

## 3. Typography
The system balances the geometric clarity of **Inter** with the fluid, calligraphic nature of **Noto Sans Kannada**.

- **Display (display-lg/md):** Use for hero statements. Set `display-lg` (3.5rem) with a negative letter-spacing (-0.02em) to create a high-fashion editorial look. Kannada characters should be scaled 10-15% larger than English to maintain visual weight parity.
- **Headline (headline-lg):** The primary storyteller. Use `primary` (#006b27) for headlines to establish brand authority.
- **Body (body-lg/md):** Set in `on_surface_variant` (#3f4a3e). This "off-black" forest grey reduces eye strain and feels more premium than pure black.
- **Labels:** Use sparingly in `tertiary` (#3a645a) for metadata or category tags.

---

## 4. Elevation & Depth
Depth is the core of this system. We avoid the "flat" look by utilizing Tonal Layering.

- **The Layering Principle:** Place a `surface_container_lowest` card atop a `surface_container_low` background. This creates a natural "pop" without the need for heavy shadows.
- **Ambient Shadows:** When a "floating" effect is required (e.g., a sample type specimen card), use a shadow color tinted with `on_surface`: `rgba(23, 29, 28, 0.04)` with a blur of 40px and a spread of -10px. This mimics soft forest light.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline_variant` (#becaba) at 20% opacity. Never use 100% opaque borders.
- **Neumorphic Softness:** For buttons in a "pushed" state, use an inner shadow with `primary_fixed_dim` to simulate a physical depression in the jade surface.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), `xl` (1.5rem) border-radius. No border.
- **Secondary (Glass):** `backdrop-blur(20px)`, 1px "Ghost Border," `on_surface` text.
- **Tertiary:** Text-only with an underline that expands from the center on hover.

### Type Specimen Cards
- **Structure:** No dividers. Use `Spacing 8` (2.75rem) to separate the Kannada glyph from its English description.
- **Background:** `surface_container_low`. On hover, transition to `surface_container_lowest` and apply an ambient shadow.

### Input Fields
- **Styling:** Use the "In-set" look. A background of `surface_container_high` with a subtle inner shadow. 
- **Active State:** The border glows with a 1px `primary` (#006b27) line and a soft `primary_fixed` outer glow.

### Interactive "Specimen" Chips
- Used for selecting font weights or styles.
- **Unselected:** `surface_container_highest` with `on_surface_variant` text.
- **Selected:** `primary` background with `on_primary` text. Use `Rounding: full`.

---

## 6. Do's and Don'ts

### Do
- **Do** allow Kannada characters to break the grid. Let a large 'ಅ' (A) overflow a container boundary to create visual interest.
- **Do** use `Spacing 20` (7rem) or `24` (8.5rem) for section breathing room. Luxury is defined by white space.
- **Do** use smooth-scroll (lenis or similar) to ensure the glassmorphic blurs feel fluid as they pass over background colors.

### Don't
- **Don't** use pure black (#000000) or pure white (#FFFFFF) for UI elements. Use the `surface` and `on_surface` tokens to maintain the organic, forest-inspired tone.
- **Don't** use sharp corners. Every element must adhere to the `xl` (1.5rem) or `full` rounding scale to maintain the "Neumorphic" softness.
- **Don't** use divider lines. If content feels cluttered, increase the spacing scale or shift the background tone.