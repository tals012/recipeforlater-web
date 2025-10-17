# RecipeForLater Landing Page

## Overview

This is a pixel-perfect, fully animated landing page built from your Figma design using:

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **TypeScript** for type safety
- **Lucide React** for icons

## Features

### ✨ Animations

- **Smooth scroll animations** - Elements fade and slide in as you scroll
- **Hover effects** - Cards lift and scale on hover
- **Parallax effects** - Phone mockups float and rotate subtly
- **Tab transitions** - Smooth crossfade between feature tabs
- **Testimonial carousel** - Animated testimonial slider with navigation
- **Staggered reveals** - Elements appear one after another for visual flow

### 🎨 Design System

- **Colors from Figma:**

  - Primary: `#177654` (green)
  - Accent: `#f9bd23` (gold)
  - Background: `#f7f4e2` (cream)
  - Text: `#0a090b` (dark), `#4f4d55` (gray)
  - Success: `#c1f4d4` (light green)

- **Fonts:**
  - Oswald (headings & body)
  - Inter (UI elements)

### 📱 Sections

1. **Header** - Sticky navigation with logo and CTAs
2. **Hero** - Large headline with floating phone mockups
3. **Features** - Grid layout showcasing key features
4. **Pricing Comparison** - Competitive analysis table
5. **Feature Tabs** - Interactive tabbed content with 10 feature highlights
6. **Simple Pricing** - Two pricing tiers with clear CTAs
7. **Testimonials** - Carousel with customer reviews
8. **CTA** - Strong call-to-action with app store buttons
9. **Contact** - Contact form with phone mockup
10. **FAQ** - Accordion-style frequently asked questions
11. **Footer** - Simple footer with links

## Setup

All dependencies are already installed:

```json
{
  "framer-motion": "^12.23.24",
  "lucide-react": "latest"
}
```

## Customization

### Adding Images/Videos

Replace these placeholder paths with your actual assets:

**Images:**

- `/app-store.svg` - App Store download badge
- `/google_store.png` - Google Play download badge
- `/feature-1.jpg`, `/feature-2.jpg` - Feature section images
- `/testimonial-1.jpg`, `/testimonial-2.jpg`, `/testimonial-3.jpg` - Testimonial avatars

**Videos:**

- `/hero-video.mp4` - Hero section phone video
- `/cta-video.mp4` - CTA section phone video

### Updating Colors

All colors are defined using Tailwind classes. To change the theme:

1. **Primary Green** (`#177654`):

   - Find: `bg-[#177654]`, `text-[#177654]`, `border-[#177654]`
   - Replace with your color

2. **Accent Gold** (`#f9bd23`):

   - Find: `bg-[#f9bd23]`, `text-[#f9bd23]`, `border-[#f9bd23]`
   - Replace with your color

3. **Background Cream** (`#f7f4e2`):
   - Find: `bg-[#f7f4e2]`
   - Replace with your color

### Updating Content

Each section is a separate component in `src/app/_components/landing/`:

- **Hero.tsx** - Update headline, subheadline, and CTA text
- **Features.tsx** - Modify feature cards and descriptions
- **PricingComparison.tsx** - Edit comparison table rows
- **FeatureTabs.tsx** - Update tab titles and feature lists
- **SimplePricing.tsx** - Change pricing plans and features
- **Testimonials.tsx** - Add/remove testimonials in the array
- **FAQ.tsx** - Update FAQ questions and answers
- **Contact.tsx** - Modify form fields (connects to your backend)

### Animation Customization

To adjust animations, edit the Framer Motion props:

```tsx
// Slow down animations
transition={{ duration: 1.2 }} // instead of 0.6

// Change entrance direction
initial={{ x: -100 }} // slide from left
initial={{ x: 100 }}  // slide from right
initial={{ y: 100 }}  // slide from bottom

// Adjust delays
transition={{ delay: 0.5 }} // wait 0.5s before animating
```

## Variables from Figma

The following design variables are used throughout:

### Colors

- `Global/Neutral Grey/1000`: `#4F4D55`
- `Global/Base/White`: `#FFFFFF`
- `Global/Neutral Grey/1300`: `#0A090B`
- `Global/Green/300`: `#C1F4D4`
- `Global/Blue/200`: `#F5F8FD`
- `Text/primary`: `#000000`
- `Background color/primary`: `#ffffff`

### Typography

- `Medium/14`: Inter Regular, 14px, weight 475, line-height 20px
- `Semibold/20`: Inter Semi Bold, 20px, weight 600, line-height 1.2
- `Regular/16`: Inter Regular, 16px, weight 400, line-height 22px
- `Semibold/14`: Inter Semi Bold, 14px, weight 550, line-height 20px

## Performance Optimizations

### Images

- Use Next.js `<Image>` component for automatic optimization
- Replace placeholder images with WebP format for smaller file sizes
- Add proper alt text for accessibility

### Fonts

- Fonts are loaded from Google Fonts with `display=swap`
- Consider self-hosting fonts for better performance

### Animations

- Uses `will-change` CSS property automatically via Framer Motion
- `AnimatePresence` for smooth unmounting
- `viewport={{ once: true }}` to prevent re-animating on scroll

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements
- Color contrast meets WCAG AA standards

## Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Check for linting errors
npm run lint

# Fix linting errors
npm run lint:fix
```

## Deployment

This landing page is ready to deploy to:

- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any platform that supports Next.js

## Support

For questions or issues, contact your development team or refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

Built with ❤️ using your Figma design
