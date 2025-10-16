# 🎬 Animations Reference Guide

## Overview

This landing page uses **Framer Motion** for all animations. Here's a complete reference of every animation pattern used.

## Animation Types

### 1. **Fade In on Scroll** ⬆️

**Most common pattern throughout the page**

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content fades in and slides up
</motion.div>
```

**Where used:**
- Section headers
- Feature cards
- Pricing cards
- FAQ items

### 2. **Slide In from Sides** ⬅️➡️

```tsx
// From left
<motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
>

// From right
<motion.div
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
>
```

**Where used:**
- Hero content (left)
- Hero phone mockups (right)
- Contact form sections

### 3. **Staggered Animations** 📊

**Items appear one after another**

```tsx
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}  // ← Stagger delay
  >
    {item}
  </motion.div>
))}
```

**Where used:**
- Feature lists
- Pricing comparison rows
- Tab buttons
- FAQ items

### 4. **Hover Effects** 🖱️

#### Card Lift
```tsx
<motion.div
  whileHover={{ 
    y: -8,  // Lift up
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"  // Add shadow
  }}
  transition={{ duration: 0.3 }}
>
```

#### Button Scale
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
```

#### Color Change
```tsx
<motion.button
  whileHover={{ backgroundColor: "#145d45" }}
  transition={{ duration: 0.2 }}
>
```

**Where used:**
- All cards
- All buttons
- Navigation links
- Download badges

### 5. **Floating Animation** 🎈

**Continuous up-and-down motion**

```tsx
<motion.div
  animate={{
    y: [0, -20, 0],  // Start → Up → Back
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
```

**Where used:**
- Hero phone mockups
- CTA phone mockup
- Contact phone mockup

### 6. **Rotation Animation** 🔄

**Subtle rotation with float**

```tsx
<motion.div
  animate={{
    y: [0, -15, 0],
    rotate: [-5, -3, -5],  // Rotate slightly
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
```

**Where used:**
- Side phone mockups in hero
- Shopping list phone mockup

### 7. **Scale Animation** 📏

**Growing/shrinking effect**

```tsx
<motion.div
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

**Where used:**
- Phone mockups on load
- Icons appearing
- Modal/popup content

### 8. **Tab Transitions** 🔀

**Cross-fade between content**

```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {content}
  </motion.div>
</AnimatePresence>
```

**Where used:**
- Feature tabs
- Testimonial carousel

### 9. **Accordion Animation** 📂

**Smooth expand/collapse**

```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      Content
    </motion.div>
  )}
</AnimatePresence>
```

**Where used:**
- FAQ items

### 10. **Progress Indicator** 📊

**Icon rotation for state**

```tsx
<motion.div
  animate={{ rotate: isOpen ? 180 : 0 }}
  transition={{ duration: 0.3 }}
>
  <Icon />
</motion.div>
```

**Where used:**
- FAQ expand/collapse icons

### 11. **Underline Animation** ___

**Growing underline effect**

```tsx
<span className="relative">
  Text
  <motion.span
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="absolute bottom-2 left-0 h-3 bg-[#f9bd23] opacity-40"
  />
</span>
```

**Where used:**
- Hero headline "Every Recipe"

### 12. **Dots Indicator** ⚫⚫⚫

**Animated width change**

```tsx
<button
  className={`h-2 rounded-full transition-all ${
    isActive ? "w-8 bg-primary" : "w-2 bg-gray"
  }`}
/>
```

**Where used:**
- Testimonial carousel navigation

## Animation Presets

### Quick Start Animations

Copy these ready-to-use presets:

#### Fade Up (Most Common)
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

#### Fade In from Left
```tsx
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

#### Fade In from Right
```tsx
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

#### Scale Up
```tsx
initial={{ scale: 0.8, opacity: 0 }}
whileInView={{ scale: 1, opacity: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
```

#### Button Hover
```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
transition={{ duration: 0.2 }}
```

#### Card Hover
```tsx
whileHover={{ 
  y: -8, 
  boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
}}
transition={{ duration: 0.3 }}
```

## Performance Best Practices

### ✅ DO:

1. **Use `once: true` for scroll animations**
```tsx
viewport={{ once: true }}  // Animate only once
```

2. **Transform properties are GPU-accelerated**
```tsx
// Fast (GPU):
animate={{ x: 100, y: 100, scale: 1.5, rotate: 45 }}

// Slow (CPU):
animate={{ width: 100, height: 100, top: 50, left: 50 }}
```

3. **Keep durations reasonable**
```tsx
transition={{ duration: 0.3 }}  // ✅ Fast
transition={{ duration: 2.0 }}  // ⚠️ Too slow
```

### ❌ DON'T:

1. **Don't animate layout properties**
```tsx
// Bad:
animate={{ width: "100%", marginTop: 50 }}

// Good:
animate={{ scale: 1, y: -50 }}
```

2. **Don't animate too many items at once**
```tsx
// Bad: Animating 100 items
{items.map((item, i) => (
  <motion.div animate={{ ... }}>  // ❌ Slow

// Good: Stagger or group
{items.slice(0, 10).map(...)}  // ✅ Fast
```

3. **Don't use complex easing for simple animations**
```tsx
// Overkill:
transition={{ ease: [0.43, 0.13, 0.23, 0.96] }}

// Better:
transition={{ ease: "easeOut" }}
```

## Custom Easing Functions

```tsx
// Available presets:
ease: "linear"
ease: "easeIn"
ease: "easeOut"
ease: "easeInOut"
ease: "circIn"
ease: "circOut"
ease: "backIn"
ease: "backOut"
ease: "anticipate"

// Custom bezier:
ease: [0.43, 0.13, 0.23, 0.96]
```

## Disable Animations

### For Accessibility

```tsx
import { useReducedMotion } from "framer-motion";

const prefersReducedMotion = useReducedMotion();

<motion.div
  animate={prefersReducedMotion ? {} : { y: -20 }}
>
```

### For Testing

```tsx
// Disable all animations temporarily
const MotionConfig = { skipAnimations: true };

<MotionConfigContext.Provider value={MotionConfig}>
  <App />
</MotionConfigContext.Provider>
```

## Common Issues & Fixes

### Animation not triggering on scroll

**Problem:** Element doesn't animate when scrolling into view

**Fix:** Check viewport prop
```tsx
// Missing viewport:
whileInView={{ ... }}  // ❌ Won't work

// Add viewport:
whileInView={{ ... }}
viewport={{ once: true, amount: 0.3 }}  // ✅ Works
```

### Animation jumps/stutters

**Problem:** Animation not smooth

**Fix:** Use transform properties instead of layout
```tsx
// Causes layout shift:
animate={{ top: 100 }}  // ❌

// GPU-accelerated:
animate={{ y: 100 }}  // ✅
```

### Exit animation not playing

**Problem:** Component disappears instantly

**Fix:** Wrap in AnimatePresence
```tsx
// Without wrapper:
{show && <motion.div exit={{ ... }} />}  // ❌

// With wrapper:
<AnimatePresence>
  {show && <motion.div exit={{ ... }} />}  // ✅
</AnimatePresence>
```

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)
- [Easing Functions](https://easings.net/)

---

Happy animating! 🎉

