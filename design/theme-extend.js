/**
 * Extended Theme Configuration
 * 
 * This file extends the base theme configuration with design tokens
 * for use in Tailwind CSS and component styling.
 */

const designTokens = require('./tokens.json');

module.exports = {
  // Extend Tailwind colors with design tokens
  colors: {
    // Accent colors
    accent: {
      red: {
        500: designTokens.colors.accent.red[500],
        600: designTokens.colors.accent.red[600],
        light: designTokens.colors.accent.red.light,
        border: designTokens.colors.accent.red.border,
      },
      green: {
        500: designTokens.colors.accent.green[500],
        600: designTokens.colors.accent.green[600],
        light: designTokens.colors.accent.green.light,
        border: designTokens.colors.accent.green.border,
      },
    },
    // Glass morphism colors
    glass: {
      dark: {
        background: designTokens.colors.glass.dark.background,
        border: designTokens.colors.glass.dark.border,
        shadow: designTokens.colors.glass.dark.shadow,
        highlight: designTokens.colors.glass.dark.highlight,
      },
      light: {
        background: designTokens.colors.glass.light.background,
        border: designTokens.colors.glass.light.border,
        shadow: designTokens.colors.glass.light.shadow,
        highlight: designTokens.colors.glass.light.highlight,
      },
    },
  },
  
  // Spacing tokens
  spacing: designTokens.spacing,
  
  // Border radius tokens
  borderRadius: designTokens.borderRadius,
  
  // Transition tokens
  transition: {
    duration: designTokens.transitions.duration,
    easing: designTokens.transitions.easing,
  },
};
