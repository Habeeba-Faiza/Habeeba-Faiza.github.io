# Next.js Website - Architecture & Component Hierarchy

## Application Structure

```
Next.js App (Next 14 with App Router)
├── Metadata & SEO
├── Global Styles (globals.css)
├── Font Loading (Poppins)
│
└── RootLayout (app/layout.tsx)
    ├── Navigation (sticky header)
    │   ├── Logo/Brand
    │   ├── Nav Links
    │   ├── Mobile Menu
    │   └── CTA Button
    │
    ├── Page Content (app/page.tsx)
    │   ├── Hero Section
    │   ├── About Section
    │   ├── Achievements Section
    │   ├── Experience Section
    │   ├── Expertise Section
    │   ├── Thought Leadership Section
    │   ├── Portfolio Section
    │   ├── CTA Section
    │   └── Contact Section
    │
    └── Footer
        ├── Brand Info
        ├── Quick Links
        ├── Resources
        ├── Social Links
        └── Copyright
```

## Page Sections Flow

```
┌─────────────────────────────────────┐
│      HERO SECTION                   │
│ • Professional positioning          │
│ • Value proposition                 │
│ • Trust indicators (4 stats)         │
│ • Dual CTAs                         │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│      ABOUT SECTION                  │
│ • Professional overview             │
│ • 4 highlight cards                 │
│ • 3 competency areas               │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│    ACHIEVEMENTS SECTION             │
│ • 4 large stat cards                │
│ • 4 impact cards                    │
│ • Measurable results                │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│    EXPERIENCE SECTION               │
│ • Career timeline (3 positions)     │
│ • Achievements per position         │
│ • Professional credentials          │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│     EXPERTISE SECTION               │
│ • 6 expertise cards                 │
│ • 3 service offerings               │
│ • Comprehensive capabilities        │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│   THOUGHT LEADERSHIP SECTION        │
│ • Featured article card             │
│ • Article grid (6 articles)         │
│ • Insights & knowledge              │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│      PORTFOLIO SECTION              │
│ • 3 detailed case studies           │
│ • Success metrics                   │
│ • 3 stats cards                     │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│        CTA SECTION                  │
│ • Motivational headline             │
│ • Dual action buttons               │
│ • Engagement bridge                 │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│      CONTACT SECTION                │
│ • Contact form                      │
│ • 4 contact methods                 │
│ • Next steps guide                  │
│ • Availability info                 │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│         FOOTER                      │
│ • Brand & description               │
│ • Quick links                       │
│ • Resources                         │
│ • Social links                      │
│ • Copyright                         │
└─────────────────────────────────────┘
```

## Component Hierarchy

```
RootLayout
├── Navigation
│   ├── NavContainer
│   │   ├── Logo
│   │   ├── NavLinks (desktop)
│   │   │   ├── Link: About
│   │   │   ├── Link: Experience
│   │   │   ├── Link: Portfolio
│   │   │   ├── Link: Insights
│   │   │   ├── Link: Contact
│   │   │   └── CTA Button
│   │   ├── Hamburger (mobile)
│   │   └── Mobile Menu (conditional)
│   │       ├── Link: About
│   │       ├── Link: Experience
│   │       ├── Link: Portfolio
│   │       ├── Link: Insights
│   │       ├── Link: Contact
│   │       └── CTA Button
│   └── Animation (Framer Motion)
│
├── Main Content
│   ├── Hero
│   │   ├── Badge
│   │   ├── Headline
│   │   ├── Subheading
│   │   ├── Features (4 items with icons)
│   │   ├── Buttons (2x)
│   │   ├── Trust indicator
│   │   ├── Animated decoration
│   │   └── Animations (stagger pattern)
│   │
│   ├── About
│   │   ├── Badge
│   │   ├── Title
│   │   ├── Description
│   │   ├── Highlights Grid (4 cards)
│   │   │   ├── Icon
│   │   │   ├── Title
│   │   │   └── Subtitle
│   │   ├── Competencies Box
│   │   │   ├── Assessment & Evaluation
│   │   │   ├── Documentation & Compliance
│   │   │   └── Technology & Operations
│   │   └── Animations (fade-in, stagger)
│   │
│   ├── Achievements
│   │   ├── Stats Grid (4 large numbers)
│   │   │   ├── Number with gradient
│   │   │   ├── Label
│   │   │   └── Context
│   │   ├── Achievement Grid (4 cards)
│   │   │   ├── Title
│   │   │   └── Description
│   │   └── Animations (scale numbers)
│   │
│   ├── Experience
│   │   ├── Badge
│   │   ├── Title
│   │   ├── Description
│   │   ├── Timeline (3 items)
│   │   │   ├── Timeline dot
│   │   │   ├── Job title
│   │   │   ├── Company
│   │   │   ├── Period (badge)
│   │   │   ├── Description
│   │   │   └── Highlights (4 items)
│   │   ├── Credentials Box
│   │   │   ├── MBA
│   │   │   ├── Certification
│   │   │   ├── ESOL
│   │   │   └── Professional Development
│   │   └── Animations (stagger items)
│   │
│   ├── Expertise
│   │   ├── Badge
│   │   ├── Title
│   │   ├── Description
│   │   ├── Expertise Grid (6 cards)
│   │   │   ├── Category
│   │   │   └── 4 Skills per card
│   │   ├── Services Box (3 columns)
│   │   │   ├── Icon
│   │   │   ├── Title
│   │   │   └── Description
│   │   └── Animations (fade-in)
│   │
│   ├── ThoughtLeadership
│   │   ├── Badge
│   │   ├── Title
│   │   ├── Description
│   │   ├── Featured Article Card
│   │   │   ├── Category badge
│   │   │   ├── Title
│   │   │   ├── Excerpt
│   │   │   ├── Read time
│   │   │   └── CTA link
│   │   ├── Article Grid (3 cards)
│   │   │   ├── Category
│   │   │   ├── Title
│   │   │   ├── Excerpt
│   │   │   ├── Read time
│   │   │   └── Date
│   │   ├── View All Button
│   │   └── Animations (stagger cards)
│   │
│   ├── Portfolio
│   │   ├── Badge
│   │   ├── Title
│   │   ├── Description
│   │   ├── Stats Grid (3 gradient cards)
│   │   │   ├── Stat label
│   │   │   └── Stat value
│   │   ├── Case Studies (3 items)
│   │   │   ├── Student info (side)
│   │   │   ├── Challenge & Solution (middle)
│   │   │   ├── Results & Impact (side)
│   │   │   └── Read full story link
│   │   ├── Final CTA
│   │   └── Animations (fade-in, stagger)
│   │
│   ├── CTA Section
│   │   ├── Headline
│   │   ├── Description
│   │   ├── Primary Button
│   │   ├── Secondary Button
│   │   └── Trust statement
│   │
│   └── Contact
│       ├── Badge
│       ├── Title
│       ├── Description
│       ├── Contact Methods (4 cards)
│       │   ├── Icon
│       │   ├── Method name
│       │   └── Value/link
│       ├── Contact Form (left side)
│       │   ├── Name field
│       │   ├── Email field
│       │   ├── Phone field (optional)
│       │   ├── Message textarea
│       │   ├── Submit button
│       │   └── Response time note
│       ├── Contact Info (right side)
│       │   ├── Next steps guide (3 steps)
│       │   ├── Response time box
│       │   └── Availability box
│       └── Animations (stagger content)
│
└── Footer
    ├── Footer Content (4 columns)
    │   ├── Column 1: Brand
    │   │   ├── Name
    │   │   ├── Tagline
    │   │   └── Description
    │   ├── Column 2: Quick Links
    │   │   ├── About
    │   │   ├── Experience
    │   │   ├── Portfolio
    │   │   └── Contact
    │   ├── Column 3: Resources
    │   │   ├── University Guide
    │   │   ├── Application Tips
    │   │   └── Visa Support
    │   └── Column 4: Connect
    │       ├── LinkedIn icon link
    │       └── Email icon link
    ├── Divider
    └── Copyright & tagline
```

## Data Flow

```
Next.js App
    ↓
Layout.tsx (Root)
    ↓ Provides metadata, fonts, styles
    ↓
Page.tsx (Home)
    ↓ Imports and renders sections
    ↓
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Navigation (persistent)     Footer (end of page)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    ↓ imports all sections ↓
    ├─ Hero.tsx
    ├─ About.tsx
    ├─ Achievements.tsx
    ├─ Experience.tsx
    ├─ Expertise.tsx
    ├─ ThoughtLeadership.tsx
    ├─ Portfolio.tsx
    ├─ CTA.tsx
    └─ Contact.tsx
         ↓ Each section contains
         ├─ Framer Motion animations
         ├─ Tailwind CSS styling
         ├─ React Icons
         ├─ TypeScript types
         └─ Responsive design
```

## State Management

```
Component-Level State:
├── Navigation.tsx
│   └── isOpen (mobile menu toggle)
│
└── Contact.tsx
    └── formState
        ├── name
        ├── email
        ├── phone
        └── message

Global State:
└── None (static site - no Redux/Context needed)

Props Flow:
└── Minimal - Components are largely self-contained
    └── Sections receive no props (data hardcoded)
    └── Easy to convert to props-based if needed
```

## Animation Architecture

```
Framer Motion Implementation:

Global Level:
├── Container Variants (stagger children)
│   └── Delay: 0.2s between items
│
├── Item Variants
│   ├── Initial state (opacity: 0, offset)
│   ├── Final state (opacity: 1, no offset)
│   └── Transition duration (0.6s-0.8s)
│
└── Viewport Triggers
    └── whileInView: Animate on scroll into view
    └── once: true (animate only once)
    └── viewport: once (performance optimization)

Component Animations:
├── Eye-catching effects
│   ├── Rotating decorative elements
│   ├── Scaling numbers
│   └── Staggered list animations
│
└── Subtle interactions
    ├── Smooth hover states
    ├── Button color transitions
    └── Card shadow elevation

Performance Considerations:
├── Uses GPU acceleration
├── Reduced motion support (can add)
├── Performance optimized (no layout thrashing)
└── Accessible animations (not mandatory)
```

## File Dependencies

```
Root Dependencies:
├── app/layout.tsx
│   ├── globals.css
│   ├── components/Navigation
│   ├── components/Footer
│   ├── Google Fonts (Poppins)
│   └── Next.js metadata
│
└── app/page.tsx
    ├── components/sections/Hero
    ├── components/sections/About
    ├── components/sections/Achievements
    ├── components/sections/Experience
    ├── components/sections/Expertise
    ├── components/sections/ThoughtLeadership
    ├── components/sections/Portfolio
    ├── components/sections/CTA
    └── components/sections/Contact

Section Dependencies:
└── Each section imports:
    ├── react (useState, type props)
    ├── framer-motion (motion, variants)
    ├── react-icons (various icons)
    └── Tailwind CSS classes (no imports needed)
```

## Styling Architecture

```
CSS Layer Structure:

@layer base
├── HTML scroll behavior
├── Body font & color
└── Button transitions

@layer components
├── .container-max (max-width container)
├── .section-spacing (padding classes)
├── .gradient-primary (brand gradient)
├── .text-gradient (text gradient)
├── .card-raised (card styling)
├── .button-primary (primary button)
├── .button-secondary (secondary button)
├── .button-outline (outline button)
├── .input-field (form input styling)
├── .badge (small label badge)
└── Various other utilities

@layer utilities
├── .animate-fade-in (custom animation)
├── .animate-slide-up (custom animation)
└── Scrollbar styling
```

## Responsive Breakpoint Usage

```
Mobile (320px - 767px):
├── Single column layouts
├── Hamburger navigation
├── Stack vertical content
├── Full-width cards
└── Optimized text sizing

Tablet (768px - 1023px):
├── 2-column grids
├── Horizontal navigation
├── Medium-sized cards
└── Balanced spacing

Desktop (1024px+):
├── 3-4 column grids
├── Full horizontal navigation
├── Optimal card layouts
└── Generous whitespace

Extra Wide (1280px+):
├── Max-width container (7xl)
├── Additional spacing
└── Optimal readability
```

## Performance Optimizations

```
Next.js Built-in:
├── Code splitting
├── Dynamic imports
├── Font optimization
├── Image optimization
├── CSS minification
└── JavaScript minification

Custom Optimizations:
├── Viewport triggers (only animate visible sections)
├── Static content (no unnecessary re-renders)
├── CSS classes (no inline styles)
├── Minimal JavaScript
└── Lazy loading on scroll

Tailwind CSS:
├── Automatic CSS purging
├── Class-based styling
├── No unused CSS shipped
└── Optimal file size
```

---

This architecture ensures:
✅ Clean, maintainable code
✅ Excellent performance
✅ Responsive on all devices
✅ Professional animations
✅ Easy to customize
✅ Scalable structure
✅ Type-safe TypeScript
✅ SEO optimized
