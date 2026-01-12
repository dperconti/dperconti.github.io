# Color Palette

## Overview

The color system uses a neutral base with subtle red and green accents, designed to work harmoniously with liquid glass morphism effects.

## Base Colors

### Dark Theme (Default)
- **Background**: `#17212b` - Deep, rich background
- **Text Primary**: `#ffffff` - High contrast text
- **Text Secondary**: `#ceced0` - Secondary text elements
- **Border**: `#2f4050` - Subtle borders and dividers

### Light Theme
- **Background**: `#ffffff` - Clean white background
- **Text Primary**: `#111827` - Dark, readable text
- **Text Secondary**: `#4b5563` - Secondary text elements
- **Border**: `rgba(0, 0, 0, 0.1)` - Subtle borders

## Accent Colors

### Subtle Reds
Used sparingly for accents, highlights, and important callouts.

- **Red 500**: `#ef4444` - Primary red accent
- **Red 600**: `#dc2626` - Darker red for hover states
- **Red Light**: `rgba(239, 68, 68, 0.1)` - Subtle red overlay
- **Red Border**: `rgba(239, 68, 68, 0.3)` - Red border accents

**Usage Guidelines:**
- Use for error states (sparingly)
- Accent highlights on important elements
- Subtle gradient overlays on glass cards
- Never use as primary background color

### Subtle Greens
Used for positive indicators, success states, and growth metrics.

- **Green 500**: `#10b981` - Primary green accent
- **Green 600**: `#059669` - Darker green for hover states
- **Green Light**: `rgba(16, 185, 129, 0.1)` - Subtle green overlay
- **Green Border**: `rgba(16, 185, 129, 0.3)` - Green border accents

**Usage Guidelines:**
- Use for success indicators
- Positive metrics and achievements
- Subtle gradient overlays on glass cards
- Accent borders on featured content

## Glass Morphism Colors

### Dark Theme Glass
- **Glass Background**: `rgba(0, 0, 0, 0.6)` - Semi-transparent dark
- **Glass Border**: `rgba(255, 255, 255, 0.05)` - Subtle white border
- **Glass Shadow**: `rgba(0, 0, 0, 0.95)` - Deep shadow for depth
- **Glass Highlight**: `rgba(255, 255, 255, 0.03)` - Subtle inner highlight

### Light Theme Glass
- **Glass Background**: `rgba(255, 255, 255, 0.7)` - Semi-transparent white
- **Glass Border**: `rgba(255, 255, 255, 0.5)` - Bright border
- **Glass Shadow**: `rgba(0, 0, 0, 0.1)` - Soft shadow
- **Glass Highlight**: `rgba(255, 255, 255, 0.8)` - Inner highlight

## Color Application

### Polymorphic Glass Cards
Glass cards can include subtle color overlays:
- **Red Accent**: `linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, transparent 100%)`
- **Green Accent**: `linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%)`
- **Neutral**: No gradient overlay

### Interactive States
- **Hover**: Slight color intensification (10-20% opacity increase)
- **Active**: More pronounced color (30-40% opacity)
- **Focus**: Color border with glow effect

## Accessibility

- All text meets WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Color is never the sole indicator of information
- Focus states are clearly visible
- Dark/light theme support ensures readability in all contexts
