# Component Patterns

## Overview

This document outlines reusable component patterns that maintain consistency across the website while leveraging liquid glass morphism aesthetics.

## Glass Card

### Base Pattern
The foundational glass card component with polymorphic styling.

**Structure:**
- Semi-transparent background with backdrop blur
- Subtle border with glass-like appearance
- Soft shadows for depth
- Smooth hover transitions

**Variants:**
- **Default**: Neutral glass effect
- **Red Accent**: Subtle red gradient overlay
- **Green Accent**: Subtle green gradient overlay

**Usage:**
- Hero sections
- Content cards
- Feature highlights
- Call-to-action containers

**Classes:** `glass-card`, `glass-card-red`, `glass-card-green`

## Glass Button

### Interactive Elements
Buttons with glass morphism styling for primary actions.

**States:**
- **Default**: Semi-transparent with blur
- **Hover**: Increased opacity, slight lift
- **Active**: Pressed state with reduced shadow
- **Disabled**: Reduced opacity, no interaction

**Variants:**
- **Primary**: Standard glass button
- **Secondary**: Lighter glass effect
- **Accent**: Red or green accent variant

**Usage:**
- Call-to-action buttons
- Navigation actions
- Form submissions
- Link buttons

**Classes:** `glass-button`, `glass-button-primary`, `glass-button-accent`

## Glass Input

### Form Elements
Input fields with glass morphism styling.

**Features:**
- Backdrop blur effect
- Subtle borders
- Focus states with color accent
- Validation states (red/green borders)

**States:**
- **Default**: Standard glass input
- **Focus**: Accent border with glow
- **Error**: Red border and shadow
- **Success**: Green border and shadow

**Usage:**
- Contact forms
- Search inputs
- Text areas
- Form fields

**Classes:** `glass-input`, `glass-input-error`, `glass-input-success`

## Polymorphic Shapes

### Border Radius Variations
Liquid glass elements use varied border-radius for organic, fluid appearance.

**Patterns:**
- **Small**: `0.5rem` - Subtle rounding
- **Medium**: `1rem` - Standard glass cards
- **Large**: `1.5rem` - Hero sections
- **Asymmetric**: Mixed radius values (e.g., `1rem 2rem 0.5rem 1.5rem`)

**Usage:**
- Create visual interest
- Break monotony
- Emphasize key elements
- Add organic feel

## Navigation Components

### Header Navigation
- Glass background with blur
- Transparent when scrolled to top
- Smooth transitions
- Mobile-responsive menu

### Footer
- Minimal design
- Links with subtle hover effects
- Consistent with overall aesthetic

## Hero Section

### Landing Page Hero
- Large, bold typography
- Glass card container
- Subtle color accents
- Clear call-to-action
- Minimal, focused content

**Structure:**
- Name/Title (H1)
- Tagline (H3 or large body)
- Bio/Description (Body)
- CTA Button (Glass button)

## Content Sections

### Section Layout
- Generous whitespace
- Glass card containers for emphasis
- Consistent spacing between elements
- Responsive grid layouts

### Blog Post Cards
- Glass card styling
- Hover effects
- Image with glass overlay
- Typography hierarchy
- Read more link

## Spacing System

### Consistent Spacing
- **XS**: 0.5rem (8px)
- **SM**: 1rem (16px)
- **MD**: 2rem (32px)
- **LG**: 3rem (48px)
- **XL**: 4rem (64px)
- **2XL**: 6rem (96px)

### Usage
- Padding inside glass cards: MD or LG
- Margins between sections: XL or 2XL
- Gaps in grids: MD
- Element spacing: SM or MD

## Animation Patterns

### Transitions
- **Duration**: 0.3s for most interactions
- **Easing**: `ease` for smooth, natural motion
- **Hover**: Slight lift (translateY -2px)
- **Focus**: Scale and glow effects

### Micro-interactions
- Button hover: Opacity and shadow changes
- Card hover: Lift and enhanced shadow
- Link hover: Color transition
- Form focus: Border glow

## Responsive Behavior

### Mobile
- Stacked layouts
- Reduced padding
- Smaller font sizes
- Touch-friendly targets (min 44px)

### Tablet
- Two-column grids
- Standard spacing
- Medium font sizes

### Desktop
- Multi-column layouts
- Generous spacing
- Full typography scale
- Hover interactions

## Accessibility

### Component Accessibility
- Keyboard navigation support
- Focus indicators visible
- ARIA labels where needed
- Semantic HTML structure
- Screen reader friendly

### Color Contrast
- Text meets WCAG AA standards
- Interactive elements clearly visible
- Focus states distinct
- Error/success states clear

## Best Practices

1. **Consistency**: Use established patterns throughout
2. **Hierarchy**: Maintain clear visual hierarchy
3. **Spacing**: Use spacing system consistently
4. **Performance**: Optimize animations and effects
5. **Accessibility**: Test with keyboard and screen readers
6. **Responsive**: Test across all device sizes
7. **Theme Support**: Ensure dark/light theme compatibility
