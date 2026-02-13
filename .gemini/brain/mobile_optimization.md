# Mobile Optimization: Premium Real Estate Patterns

As a senior developer specializing in premium web experiences, mobile optimization isn't just about responsiveness; it's about maintaining "Vogue-grade" aesthetics on smaller screens. This document outlines the recurring patterns and "skills" used in this project.

## 1. Typography Hierarchy

On mobile, large headings should be compact to prevent excessive scrolling while maintaining impact.

- **Rule**: Reduce `leading` (line-height) from `1.1` to `1.0` or `1.05` for hero titles.
- **Pattern**: Use `whitespace-nowrap` on short premium phrases (e.g., "Building Legacy") to keep them on one row, adjusting `font-size` (vw or rem) to fit the smallest screen (320px).

## 2. Vertical Rhythm (Section Spacing)

Standard desktop padding (`py-32`) feels like a "gap" on mobile.

- **Rule**: Standardize mobile padding to `py-12` or `py-16` for content-heavy sections.
- **Micro-adjustment**: If two sections have the same background color, skip the bottom padding of the first or top padding of the second to avoid double-spacing.

## 3. Grid & Stats Layouts

Standard vertical stacking can feel boring.

- **Rule**: Use a mix of `grid-cols-2` for quick stats and `border-l` or `border-t` accents to create a structured "editorial" look.
- **Pattern**: In `Philosophy` or `Story` sections, use `border-white/10` or `border-navy/5` to separate items instead of just gaps.

## 4. Interactive Tags & Badges

- **Rule**: Use `flex-wrap` with `gap-3` (instead of `gap-4`) on mobile to keep them tight.
- **Aesthetic**: Use `backdrop-blur-sm` and `bg-white/50` for a glassmorphism effect that feels premium.
- **Typography**: Keep text uppercase and tracking wide (`tracking-widest`) but small (`text-[9px]` or `10px`).

## 5. Image Composition

- **Rule**: Switch `aspect-ratio` to something more portrait-friendly on mobile (like `4/5`) if the desktop uses a landscape ratio.
- **Rule**: Always set `object-position` to focus on the human or key architectural element.
- **Aesthetic**: Use `rounded-[2rem]` or higher for containers to soften the mobile look.

## 6. Scroll Performance

- **Rule**: Snappy beats slow. Reduce Lenis duration to `0.8` or `1.0s` for a more responsive mobile feel.

---

_Created as a living skill guide for the SaurabhGithug/sachiningle project._
