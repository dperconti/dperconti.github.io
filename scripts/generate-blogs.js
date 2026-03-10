const fs = require('fs')
const path = require('path')

// Target: 2-3 blog posts per week for dperconti.github.io
const POSTS_PER_WEEK_MIN = 2
const POSTS_PER_WEEK_MAX = 3

const categories = [
  'Leadership',
  'Engineering',
  'Fintech',
  'TypeScript',
  'Wellbeing',
  'Team Management',
  'Python',
  'Payments',
  'Architecture',
]

const topicTitles = [
  'Engineering Leadership in Remote Teams',
  'TypeScript Patterns for Financial Systems',
  'Building Sustainable Engineering Cultures',
  'Payment System Design Principles',
  'Mentoring Junior Engineers',
  'Technical Debt and When to Pay It Down',
  'Scaling Teams Without Losing Quality',
  'Work-Life Balance in Startups',
  'API Design for Fintech',
  'Running Effective Code Reviews',
  'Incident Response Best Practices',
  'Career Development for Engineers',
  'Python in Production at Scale',
  'Stakeholder Communication',
  'System Design for Payments',
]

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function pickCategories() {
  const count = 1 + Math.floor(Math.random() * 2)
  const shuffled = [...categories].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

function formatDateISO(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}T05:00:00Z`
}

function generatePost(date, index) {
  const title = topicTitles[(date.getTime() + index) % topicTitles.length]
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  const slug = `${generateSlug(title)}---${y}-${m}-${d}`
  const cats = pickCategories()
  const dateStr = formatDateISO(date)
  const content = `---
title: "${title}"
date: ${dateStr}
categories: 
${cats.map((c) => `  - ${c}`).join('\n')}
draft: false
---

Placeholder for "${title}". Target: 2-3 posts per week on dperconti.github.io.

Replace this with your draft.
`
  return { slug: `${slug}.md`, content }
}

function main() {
  const baseDir = path.join(__dirname, '..', 'content', 'posts')
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true })
  }

  const startDate = new Date('2024-01-01')
  const endDate = new Date('2025-12-31')
  const currentDate = new Date(startDate)
  let totalPosts = 0

  while (currentDate <= endDate) {
    const postsThisWeek =
      POSTS_PER_WEEK_MIN +
      Math.floor(Math.random() * (POSTS_PER_WEEK_MAX - POSTS_PER_WEEK_MIN + 1))
    const dayOffsets = []
    while (dayOffsets.length < postsThisWeek) {
      const d = Math.floor(Math.random() * 7)
      if (!dayOffsets.includes(d)) dayOffsets.push(d)
    }
    dayOffsets.sort((a, b) => a - b)

    for (let i = 0; i < dayOffsets.length; i++) {
      const postDate = new Date(currentDate)
      postDate.setDate(postDate.getDate() + dayOffsets[i])
      if (postDate > endDate) continue

      const { slug, content } = generatePost(postDate, i)
      const filePath = path.join(baseDir, slug)
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, content, 'utf8')
        totalPosts++
        if (totalPosts % 50 === 0) console.log(`Generated ${totalPosts} posts...`)
      }
    }

    currentDate.setDate(currentDate.getDate() + 7)
  }

  console.log(`\n✅ dperconti.github.io: generated ${totalPosts} blog posts`)
  console.log(`📁 Posts are in: ${baseDir}`)
  console.log(`📅 Target: ${POSTS_PER_WEEK_MIN}-${POSTS_PER_WEEK_MAX} posts per week`)
}

main()
