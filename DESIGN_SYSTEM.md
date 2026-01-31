# Design System Documentation

## Egyptian Co. for Metal Works - Website Design

### 🎨 Color Palette (Extracted from Logo)

**Primary Colors:**

- **Industrial Red**: `#B91C1C` - Main brand color for CTAs and accents
- **Red Dark**: `#7F1D1D` - Hover states and depth
- **Red Light**: `#DC2626` - Highlights

**Neutrals:**

- **Industrial Black**: `#0A0A0A` - Primary background
- **Steel Gray Series**:
  - 900: `#18181B` (Deep sections)
  - 800: `#27272A` (Cards, borders)
  - 700: `#3F3F46` (Dividers)
  - 600: `#52525B` (Muted text)
  - 500: `#71717A` (Secondary text)

**Accent Grays:**

- 400: `#9CA3AF` - Tertiary text
- 300: `#D1D5DB` - Light text on dark
- 100: `#F3F4F6` - Nearly white
- 50: `#F9FAFB` - Pure content text

---

### 📝 Typography

**English (LTR):**

- **Headings**: Montserrat (Black/800/700) - Bold, industrial, commanding
- **Body**: Inter (Regular/Medium/Semibold) - Clean, modern, readable
- **Display**: Montserrat for large hero text

**Arabic (RTL):**

- **All Text**: Cairo (Regular/Bold/Black) - Professional Arabic font with excellent readability

**Hierarchy:**

- Hero Title: 5xl-8xl, font-black, uppercase, tracking-tight
- Section Titles: 4xl-6xl, font-black, uppercase
- Subsections: 2xl-3xl, font-bold
- Body: base-lg, regular weight, leading-relaxed

---

### 🏗️ Layout Structure

**1. Hero Section**

- Full viewport height with parallax background
- Large, bold headline with red accent word
- Dual CTAs (Primary: Red, Secondary: Outlined)
- Industrial grid overlay
- Scroll indicator animation
- Logo placement top-left
- Trust line with red accent divider

**2. Services Section**

- Dark background with grid pattern
- 3-column grid (responsive)
- Icon-based cards with hover effects
- Red accent line animation on hover
- Feature lists with bullet points
- Gradient glow effects

**3. About Section**

- Alternate gray background
- 2-column layout (image + content)
- Statistics grid (4 boxes)
- Border accents in red
- Grayscale to color image transition

**4. Projects/Gallery**

- Masonry-style grid (3 columns)
- Hover-reveal descriptions
- Category tags
- Red accent line animation
- Grayscale with color on hover

**5. Contact Section**

- 2-column layout (info + form)
- Contact cards with icons
- Full-width form inputs
- Industrial form styling
- Red focus states

---

### 🎭 Design Principles

**Visual Identity:**

- **Strong & Bold**: Heavy typography, sharp edges
- **Industrial**: Metal textures, grid patterns, engineering aesthetics
- **Minimal**: Spacious layouts, clean hierarchy
- **Premium**: Subtle animations, quality shadows, professional polish

**Motion & Interaction:**

- Parallax scrolling on hero
- Fade-in-up animations on scroll
- Hover state transformations
- Red glow effects on interactive elements
- Smooth transitions (300-500ms)

**Spacing:**

- Section padding: 24-32 (py-24 lg:py-32)
- Container max-width: 7xl
- Grid gaps: 6-8 (gap-6 lg:gap-8)
- Generous whitespace for premium feel

---

### 🔧 Technical Implementation

**Framework Stack:**

- Next.js 16 (App Router)
- Tailwind CSS 4
- Framer Motion (animations & parallax)
- next-intl (i18n for EN/AR)

**Components:**

- Hero.tsx - Parallax hero section
- Services.tsx - Service cards with animations
- About.tsx - Company story + stats
- Projects.tsx - Gallery showcase
- Contact.tsx - Contact form + info

**Responsive Strategy:**

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Stack columns on mobile
- Reduce font sizes proportionally
- Maintain touch-friendly targets (44px min)

---

### 🌐 RTL Support

**Arabic Language Considerations:**

- Automatic text-right in RTL mode
- Flex-row-reverse for icon alignments
- Cairo font for all Arabic text
- Mirrored layouts (keeping design integrity)
- Proper number formatting (keep Western numerals)

---

### ✨ Premium Features

**Visual Effects:**

- Grid background patterns
- Red glow shadows on hover
- Grayscale to color transitions
- Parallax depth
- Gradient overlays
- Border accent animations

**UX Details:**

- Scroll-triggered animations
- Smooth anchor scrolling
- Form validation states
- Loading states (implement later)
- Microinteractions on all CTAs

---

### 📐 Component Patterns

**Card Pattern:**

```
- Border: 1-2px, dark gray
- Background: Semi-transparent black/steel
- Hover: Red border, shadow-industrial
- Accent: Top border animation (red line)
```

**Button Pattern:**

```
Primary: Red background, white text, dark red hover
Secondary: Outlined, transparent, hover red fill
```

**Section Header Pattern:**

```
- Red divider lines (left + right)
- Uppercase subtitle (tracking-widest)
- Large title (font-black)
- Gray description paragraph
```

---

### 🎯 Brand Personality Match

The design captures the logo's essence:

- **Red stacked shapes** = Layered sections, structured layout
- **Bold typography** = Strong, industrial aesthetic
- **Clean geometry** = Grid systems, aligned elements
- **Professional black** = Dark, premium background
- **Engineering precision** = Exact spacing, mathematical proportions

**Target Audience:** B2B industrial clients, manufacturing companies, heavy machinery operators
**Goal:** Inspire confidence, demonstrate capability, establish authority
