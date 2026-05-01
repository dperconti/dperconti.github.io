---
title: "Projects content model"
draft: true
---

This folder contains portfolio **project case studies**.

## Frontmatter schema

Required:
- `title`: string
- `draft`: boolean

Recommended:
- `description`: short one-liner used on cards and SEO
- `featured`: boolean (shows on home)
- `product_status`: `live` | `coming_soon` | `sunset`
- `role`: your role for the project (e.g. “Engineering Manager / Tech Lead”)
- `team`: short string (e.g. “3 eng, 1 design”)
- `stack`: array of strings (e.g. `["Next.js", "Postgres", "GCP"]`)
- `highlights`: array of short bullets for the project card
- `links`: object (e.g. `{ website: "https://example.com", app_store: "...", demo: "..." }`)
- `date`: ISO date string if you want ordering (optional)
- `url`: custom slug override (optional; if present, it will be used as the route slug)

## Body

Write the case study in sections. Suggested outline:
- Summary
- The problem
- Constraints
- What I shipped
- Architecture
- Outcomes
- What I’d do next (optional)
