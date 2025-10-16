# Quick Customization Guide

## 🎯 Common Customizations

### 1. Change the Main Colors

**Primary Green (`#177654`)**
```tsx
// Find in all files:
bg-[#177654]     → bg-[#YOUR_COLOR]
text-[#177654]   → text-[#YOUR_COLOR]
border-[#177654] → border-[#YOUR_COLOR]
```

**Or define in Tailwind config:**
```js
// tailwind.config.cjs
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#177654',
        accent: '#f9bd23',
        cream: '#f7f4e2',
      }
    }
  }
}

// Then use:
bg-primary, text-accent, bg-cream
```

### 2. Update the Hero Text

**File:** `src/app/_components/landing/Hero.tsx`

```tsx
// Lines 30-52 - Update these:
<motion.h1>
  Every Recipe.  {/* ← Change this */}
</motion.h1>

<motion.div>
  One App.  {/* ← Change this */}
  <span className="text-5xl">🍴</span>  {/* ← Change emoji */}
</motion.div>

<motion.h1>
  Kitchen.  {/* ← Change this */}
</motion.h1>

<motion.p>
  Stop losing recipes... {/* ← Change subtitle */}
</motion.p>
```

### 3. Update Pricing

**File:** `src/app/_components/landing/SimplePricing.tsx`

```tsx
// Lines 8-32 - Edit this array:
const plans = [
  {
    name: "Monthly",
    price: "$4.99",  // ← Change price
    period: "per month",
    features: [
      "Feature 1",  // ← Update features
      "Feature 2",
    ],
  },
  // ... add more plans
];
```

### 4. Add/Remove FAQ Items

**File:** `src/app/_components/landing/FAQ.tsx`

```tsx
// Lines 7-52 - Edit this array:
const faqs = [
  {
    question: "Your question here?",
    answer: "Your answer here.",
  },
  // Add more items...
];
```

### 5. Change Animation Speed

**Slow everything down (more dramatic):**
```tsx
// Find:
transition={{ duration: 0.6 }}

// Change to:
transition={{ duration: 1.2 }}
```

**Speed everything up (snappier):**
```tsx
transition={{ duration: 0.3 }}
```

**Remove animations entirely:**
```tsx
// Remove these props:
initial={{ ... }}
animate={{ ... }}
whileInView={{ ... }}

// Keep only the component and className
```

### 6. Change Hover Effects

**Card hover lift:**
```tsx
// Find:
whileHover={{ y: -8 }}

// Change to:
whileHover={{ y: -12 }}  // Lift more
whileHover={{ y: -4 }}   // Lift less
```

**Button scale:**
```tsx
// Find:
whileHover={{ scale: 1.05 }}

// Change to:
whileHover={{ scale: 1.1 }}   // Grow more
whileHover={{ scale: 1.02 }}  // Subtle
```

### 7. Update Contact Form Action

**File:** `src/app/_components/landing/Contact.tsx`

```tsx
// Line 13-16 - Connect to your backend:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Replace with your API call:
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' },
  });
  
  // Show success message
  alert('Message sent!');
};
```

### 8. Change Phone Mockup Animations

**File:** `src/app/_components/landing/Hero.tsx`

```tsx
// Lines 89-99 - Center phone float:
animate={{
  y: [0, -20, 0],  // ← Adjust float distance
}}
transition={{
  duration: 4,      // ← Adjust speed
  repeat: Infinity,
  ease: "easeInOut",
}}

// Lines 104-113 - Left phone:
animate={{
  y: [0, -15, 0],
  rotate: [-5, -3, -5],  // ← Adjust rotation
}}
```

### 9. Add New Feature Tab

**File:** `src/app/_components/landing/FeatureTabs.tsx`

```tsx
// Lines 6-82 - Add to tabs array:
const tabs = [
  // ... existing tabs
  {
    id: "new-feature",
    title: "Your New Feature",
    features: [
      "Benefit 1",
      "Benefit 2",
      "Benefit 3",
    ],
    description: "Detailed description...",
    tagline: "Short tagline",
  },
];
```

### 10. Modify Testimonials

**File:** `src/app/_components/landing/Testimonials.tsx`

```tsx
// Lines 7-37 - Edit testimonials array:
const testimonials = [
  {
    id: 1,
    name: "Customer Name",
    role: "Their Role",
    image: "/path/to/image.jpg",
    quote: "Their testimonial quote...",
    rating: 5,
  },
  // Add more...
];
```

## 🎨 Advanced Customizations

### Add Gradient Backgrounds

```tsx
// Replace solid colors with gradients:
className="bg-[#177654]"

// Becomes:
className="bg-gradient-to-r from-[#177654] to-[#0f5239]"
```

### Add Parallax Scrolling

```tsx
import { useScroll, useTransform } from "framer-motion";

const { scrollY } = useScroll();
const y = useTransform(scrollY, [0, 500], [0, 150]);

<motion.div style={{ y }}>
  {/* Content moves with scroll */}
</motion.div>
```

### Add Page Transitions

```tsx
// In layout.tsx:
import { AnimatePresence } from "framer-motion";

<AnimatePresence mode="wait">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
</AnimatePresence>
```

### Add Scroll Progress Indicator

```tsx
// In Header.tsx:
const { scrollYProgress } = useScroll();

<motion.div
  className="fixed top-0 left-0 right-0 h-1 bg-[#177654] origin-left z-50"
  style={{ scaleX: scrollYProgress }}
/>
```

## 📱 Responsive Adjustments

### Hide on Mobile

```tsx
className="hidden md:block"  // Hidden on mobile, visible on tablet+
className="md:hidden"         // Visible on mobile, hidden on tablet+
```

### Stack on Mobile

```tsx
className="grid grid-cols-1 md:grid-cols-2"  // 1 col mobile, 2 cols desktop
```

### Adjust Text Size

```tsx
className="text-2xl md:text-4xl lg:text-5xl"  // Responsive text
```

## 🚀 Performance Tips

### Lazy Load Images

```tsx
import Image from "next/image";

<Image
  src="/image.jpg"
  alt="Description"
  width={500}
  height={500}
  loading="lazy"
/>
```

### Reduce Animation on Mobile

```tsx
const isMobile = window.innerWidth < 768;

<motion.div
  animate={isMobile ? {} : { y: -20 }}  // No animation on mobile
>
```

### Optimize Fonts

```tsx
// In globals.css - only load weights you need:
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap');
```

## 🎯 Quick Wins

1. **Add your logo** - Replace emoji in Header.tsx with your logo image
2. **Update colors** - Find/replace hex codes with your brand colors
3. **Replace mockups** - Add real app screenshots in place of gradient placeholders
4. **Connect forms** - Link Contact form to your backend API
5. **Add analytics** - Install Google Analytics or your tracking tool
6. **Test on mobile** - Use Chrome DevTools to check responsive behavior
7. **Optimize images** - Convert to WebP and add to `/public` folder
8. **Add real videos** - Replace placeholder video sources
9. **Update meta tags** - Add SEO metadata in layout.tsx
10. **Deploy** - Push to Vercel for instant deployment

---

Need help? All components are fully commented and follow Next.js best practices!

