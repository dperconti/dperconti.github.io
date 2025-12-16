# Donato Perconti's Blog

A personal blog built with Next.js, featuring technical content on TypeScript, Python, Fintech, Leadership, and Wellbeing.

## Tech Stack

- **Framework**: Next.js 13
- **Styling**: Tailwind CSS
- **Content**: Markdown files
- **Deployment**: GitHub Pages (static export)
- **Language**: JavaScript/TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

The site will be available at `http://localhost:3000`

### Build

```bash
# Generate posts JSON and build for production
npm run build
```

The static site will be generated in the `out/` directory.

### Export for GitHub Pages

```bash
# Build static export
npm run export
```

## Project Structure

```
├── config/           # Configuration files
│   ├── config.json  # Site configuration
│   ├── menu.json    # Navigation menu
│   ├── social.json  # Social media links
│   └── theme.json   # Theme configuration
├── content/         # Content files
│   ├── posts/       # Blog posts (Markdown)
│   ├── contact.md   # Contact page
│   └── 404.md       # 404 page
├── layouts/         # Layout components
│   ├── components/  # Reusable components
│   ├── partials/    # Partial layouts
│   └── shortcodes/  # Markdown shortcodes
├── lib/             # Utility functions
│   ├── jsonGenerator.js  # Generates posts.json from markdown
│   └── utils/       # Helper utilities
├── pages/            # Next.js pages
│   ├── index.js     # Homepage
│   ├── posts/       # Post pages
│   └── categories/  # Category pages
└── styles/          # SCSS stylesheets
```

## Adding New Posts

1. Create a new Markdown file in `content/posts/`
2. Add frontmatter:

```markdown
---
title: "Your Post Title"
date: 2025-12-25T05:00:00Z
categories: 
  - TypeScript
  - Fintech
draft: false
---

Your post content here...
```

3. Run `npm run dev` to regenerate posts.json and see your new post

## Configuration

### Site Settings

Edit `config/config.json` to update:
- Site title and metadata
- Profile information
- Pagination settings
- Blog folder name

### Navigation

Edit `config/menu.json` to modify the navigation menu.

### Social Links

Edit `config/social.json` to update social media links and contact information.

## Deployment

This site is configured for GitHub Pages deployment using GitHub Actions.

### Automatic Deployment

1. Push to the `main` branch
2. GitHub Actions will automatically:
   - Generate posts.json
   - Build the Next.js site
   - Deploy to GitHub Pages

### Manual Deployment

```bash
# Build the site
npm run build

# The static files will be in the 'out' directory
# Upload these to your GitHub Pages repository
```

## Features

- ✅ Markdown-based blog posts
- ✅ Category filtering
- ✅ Pagination
- ✅ Dark/Light theme toggle
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Static site generation
- ✅ GitHub Pages compatible

## License

Private - All rights reserved

## Author

**Donato Perconti**

Engineering Executive | Health, Wellness, and Fintech

- Blog: [dperconti.github.io](https://dperconti.github.io)
- Email: donato.perconti@gmail.com
