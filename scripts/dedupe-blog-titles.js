/**
 * Removes duplicate blog titles by assigning each post a unique title from a large pool.
 * Run from repo root: node scripts/dedupe-blog-titles.js
 */
const fs = require('fs')
const path = require('path')
const { topicTitles } = require('./topic-titles')

const categories = [
  'Leadership', 'Engineering', 'Fintech', 'TypeScript', 'Wellbeing',
  'Team Management', 'Python', 'Payments',   'Architecture',
]

// (topic list now in topic-titles.js)

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

function formatDateISO(y, m, d) {
  const mm = String(m).padStart(2, '0')
  const dd = String(d).padStart(2, '0')
  return `${y}-${mm}-${dd}T05:00:00Z`
}

function main() {
  const baseDir = path.join(__dirname, '..', 'content', 'posts')
  const files = fs.readdirSync(baseDir).filter((f) => f.endsWith('.md'))
  // Parse date from filename: something---YYYY-MM-DD.md
  const withDates = files.map((f) => {
    const match = f.match(/---(\d{4})-(\d{2})-(\d{2})\.md$/)
    if (!match) return { file: f, date: new Date(0) }
    const [, y, m, d] = match
    return { file: f, date: new Date(Number(y), Number(m) - 1, Number(d)), y, m: Number(m), d: Number(d) }
  })
  withDates.sort((a, b) => a.date - b.date)

  if (topicTitles.length < withDates.length) {
    console.error(`Need at least ${withDates.length} titles, have ${topicTitles.length}. Add more to topicTitles.`)
    process.exit(1)
  }

  let updated = 0
  const toDelete = []
  for (let i = 0; i < withDates.length; i++) {
    const { file, date, y, m, d } = withDates[i]
    const title = topicTitles[i]
    const newSlug = `${generateSlug(title)}---${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    const newFilename = `${newSlug}.md`
    if (newFilename === file) continue // already unique, skip

    const filePath = path.join(baseDir, file)
    let content = fs.readFileSync(filePath, 'utf8')
    const cats = pickCategories()
    const dateStr = formatDateISO(y, m, d)
    content = `---
title: "${title}"
date: ${dateStr}
categories: 
${cats.map((c) => `  - ${c}`).join('\n')}
draft: false
---

Placeholder for "${title}". Target: 2-3 posts per week on dperconti.github.io.

Replace this with your draft.
`
    const newPath = path.join(baseDir, newFilename)
    fs.writeFileSync(newPath, content, 'utf8')
    toDelete.push(filePath)
    updated++
    if (updated % 100 === 0) console.log(`Updated ${updated} posts...`)
  }

  toDelete.forEach((p) => fs.unlinkSync(p))
  console.log(`\n✅ Dedupe complete: ${updated} posts assigned unique titles.`)
  console.log(`   Total posts: ${withDates.length}. Deleted ${toDelete.length} old files.`)
}

main()
