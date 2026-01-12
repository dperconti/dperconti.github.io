const theme = require("./config/theme.json");

let font_base = Number(theme.fonts.font_size.base.replace("px", ""));
let font_scale = Number(theme.fonts.font_size.scale);
let h6 = font_base / font_base;
let h5 = h6 * font_scale;
let h4 = h5 * font_scale;
let h3 = h4 * font_scale;
let h2 = h3 * font_scale;
let h1 = h2 * font_scale;
let fontPrimary, fontPrimaryType, fontSecondary, fontSecondaryType;
if (theme.fonts.font_family.primary) {
  fontPrimary = theme.fonts.font_family.primary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontPrimaryType = theme.fonts.font_family.primary_type;
}
if (theme.fonts.font_family.secondary) {
  fontSecondary = theme.fonts.font_family.secondary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontSecondaryType = theme.fonts.font_family.secondary_type;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  safelist: [
    // Ensure backdrop-filter utilities are included
    {
      pattern: /backdrop-filter/,
    },
  ],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        text: theme.colors.default.text_color.default,
        dark: theme.colors.default.text_color.dark,
        primary: theme.colors.default.theme_color.primary,
        body: theme.colors.default.theme_color.body,
        border: theme.colors.default.theme_color.border,
        accent: {
          red: {
            500: theme.colors.default.accent?.red?.[500] || "#ef4444",
            600: theme.colors.default.accent?.red?.[600] || "#dc2626",
            light: theme.colors.default.accent?.red?.light || "rgba(239, 68, 68, 0.1)",
            border: theme.colors.default.accent?.red?.border || "rgba(239, 68, 68, 0.3)",
          },
          green: {
            500: theme.colors.default.accent?.green?.[500] || "#10b981",
            600: theme.colors.default.accent?.green?.[600] || "#059669",
            light: theme.colors.default.accent?.green?.light || "rgba(16, 185, 129, 0.1)",
            border: theme.colors.default.accent?.green?.border || "rgba(16, 185, 129, 0.3)",
          },
        },
      },
      fontSize: {
        base: font_base + "px",
        h1: h1 + "rem",
        "h1-sm": h1 * 0.8 + "rem",
        h2: h2 + "rem",
        "h2-sm": h2 * 0.8 + "rem",
        h3: h3 + "rem",
        "h3-sm": h3 * 0.8 + "rem",
        h4: h4 + "rem",
        h5: h5 + "rem",
        h6: h6 + "rem",
      },
      fontFamily: {
        primary: [fontPrimary, fontPrimaryType],
        secondary: [fontSecondary, fontSecondaryType],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-bootstrap-grid")({ generateContainer: false }),
  ],
};

