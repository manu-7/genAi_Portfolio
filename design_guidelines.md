# Design Guidelines: Manu Singh - AI Engineer Portfolio

## Design Approach
**Reference-Based:** Drawing inspiration from modern AI/tech portfolios (Vercel, Linear, Stripe) combined with AI-centric aesthetics. Focus on technical sophistication with glassmorphism and subtle 3D interactions.

## Typography System
- **Primary Font:** Inter or SF Pro Display (Google Fonts CDN)
- **Accent Font:** JetBrains Mono or Fira Code for technical elements
- **Hierarchy:**
  - Hero Headline: text-5xl to text-7xl, font-bold
  - Section Headers: text-3xl to text-4xl, font-semibold
  - Subheadings: text-xl to text-2xl, font-medium
  - Body Text: text-base to text-lg, font-normal
  - Technical Tags: text-sm, font-mono

## Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 24
- Section Padding: py-24 lg:py-32
- Component Gaps: gap-6 to gap-12
- Container: max-w-7xl mx-auto px-6

## Page Structure

### 1. Hero Section (Full viewport)
- **Layout:** Two-column grid (lg:grid-cols-2) with photo on right, content on left
- **Image:** Professional headshot with AI-themed gradient overlay/border effect
- **Content:** Bold headline emphasizing "GenAI Engineer" + animated gradient text effect on key terms, subheading, 2-sentence bio, dual CTA buttons (primary + secondary with blurred background)
- **Background:** Animated gradient mesh or subtle particle effect suggesting neural networks

### 2. About Section
- **Layout:** Single column, max-w-4xl centered
- **Content:** 3-4 paragraphs positioning as GenAI + RAG + Backend specialist
- **Visual Element:** Floating skill badges or animated tech stack icons in background

### 3. Skills Section
- **Layout:** Three-column grid (md:grid-cols-3) with category cards
- **Categories:** "AI & LLM Technologies" | "Backend & Frameworks" | "Developer Tools"
- **Cards:** Glassmorphism effect with subtle border, skill items as chip-style tags
- **Icons:** Heroicons for category headers

### 4. Projects Showcase (Primary Focus)
- **Layout:** Masonry-style grid or 2-column cards (lg:grid-cols-2)
- **Card Design:** 
  - Glassmorphism background with backdrop blur
  - 3D hover effect (transform translateY and scale)
  - Project thumbnail/mockup image at top
  - Title + 2-3 bullet points with metrics
  - Technology tags as colored chips at bottom
  - "View Project" link with arrow icon
- **Projects:** CampusMate (featured larger), Eco Park, Django Task Queue

### 5. Experience & Certifications
- **Layout:** Two-column split (md:grid-cols-2)
- **Left:** UI/UX Internship timeline card with company logo placeholder
- **Right:** Certification badges with credential links (Oracle GenAI, Django Essentials)
- **Visual:** Vertical timeline connector line between items

### 6. Achievements Section
- **Layout:** Four-column grid (md:grid-cols-2 lg:grid-cols-4) for stat cards
- **Content:** CodeQuezt Top 300 | 300+ DSA Problems | UI/UX Finalist | Team Captain
- **Design:** Compact cards with large number + description, subtle glow effect

### 7. Contact Section
- **Layout:** Centered content with social links in horizontal row
- **Elements:** Email, LinkedIn, GitHub icons (Font Awesome), "Download Resume" button
- **Background:** Gradient fade to footer

### 8. Footer
- **Content:** Copyright, navigation links, social media icons
- **Style:** Minimal, py-12

## Component Library

### Navigation
- Fixed/sticky top navigation with backdrop blur
- Logo/name on left, navigation links center, CTA button right
- Mobile: Hamburger menu with slide-in drawer

### Buttons
- Primary: Solid with gradient hover effect, px-8 py-4
- Secondary: Blurred background (backdrop-blur-md), border, px-8 py-4
- All buttons: rounded-lg, font-semibold, transition-all duration-300

### Cards
- Glassmorphism: backdrop-blur-lg, semi-transparent background, 1px border
- Rounded corners: rounded-xl to rounded-2xl
- Padding: p-8
- Hover: transform scale-105 and subtle glow

### Technology Tags/Chips
- Inline-flex, px-3 py-1, rounded-full
- Small text (text-xs to text-sm), font-mono
- Subtle background with contrasting border

### Icons
- **Library:** Font Awesome (CDN) for social/contact icons
- **Size:** Consistent sizing (w-5 h-5 for inline, w-8 h-8 for features)

## Animations (Minimal)
- **Hero:** Subtle gradient animation on background (20s loop)
- **Cards:** Hover transforms (translateY -4px, scale 1.02)
- **Scroll:** Fade-in on viewport entry for sections (Intersection Observer)
- **Text:** Gradient text animation on hero headline keywords
- **No:** Heavy parallax, excessive scroll-triggered animations

## Images

### Hero Image
- **Type:** Professional headshot/portrait photo
- **Treatment:** Circular or rounded-square frame with AI-themed gradient border (2-3px animated gradient)
- **Size:** Approximately 400x400px display size
- **Placement:** Right side of hero grid on desktop, above content on mobile
- **Effect:** Subtle floating animation or glow effect

### Project Thumbnails
- **Type:** Screenshots or mockups of each project interface
- **Size:** 16:9 aspect ratio, full card width
- **Treatment:** Rounded corners (rounded-lg), subtle shadow
- **Placement:** Top of each project card

### Background Elements
- **Type:** Abstract AI-themed graphics (neural network patterns, gradient meshes)
- **Usage:** Subtle, low-opacity background decorations
- **Placement:** Hero section background, scattered in white space

## Accessibility
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus states with visible outline (ring-2 ring-offset-2)
- Sufficient contrast ratios (avoid over-relying on glassmorphism transparency)
- Alt text for all images

## Responsive Behavior
- **Desktop (lg):** Multi-column grids, side-by-side layouts
- **Tablet (md):** Reduce to 2 columns, maintain card layouts
- **Mobile (base):** Single column stack, full-width cards, simplified nav

## Key Design Principles
1. **AI-Centric Aesthetic:** Gradient accents, glassmorphism, technical typography
2. **Technical Sophistication:** Clean layouts, precise spacing, professional polish
3. **Impact-Driven Content:** Metrics, achievements, concrete results
4. **Subtle Interactivity:** 3D hover effects without distraction
5. **Hierarchy:** Clear visual flow from hero → projects → credentials → contact