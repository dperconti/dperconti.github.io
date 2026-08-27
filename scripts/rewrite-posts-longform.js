/**
 * Rewrite every post in content/posts/ as one coherent essay.
 * Preserves dates, categories, draft flag, and filenames (URL slugs).
 * Improves formulaic frontmatter titles when needed.
 *
 * Usage:
 *   node scripts/rewrite-posts-longform.js
 *   node scripts/rewrite-posts-longform.js --limit 8
 *   node scripts/rewrite-posts-longform.js --file slug-substring
 *   node scripts/rewrite-posts-longform.js --dry-run
 */
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const BANKS = require('./essay-banks')
const EXTRA = require('./essay-banks-extra')
for (const [theme, extra] of Object.entries(EXTRA)) {
  if (!BANKS[theme]) continue
  BANKS[theme].deep.push(...(extra.deep || []))
  BANKS[theme].scenarios.push(...(extra.scenarios || []))
}

const POSTS_DIR = path.join(__dirname, '..', 'content', 'posts')
const MIN_WORDS = 900
const MAX_WORDS = 1150

function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function hashString(s) {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)]
}

function pickN(rng, arr, n) {
  const copy = [...arr]
  const out = []
  while (out.length < n && copy.length) {
    const i = Math.floor(rng() * copy.length)
    out.push(copy.splice(i, 1)[0])
  }
  return out
}

function wordCount(text) {
  return text
    .replace(/[#>*_\-`]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length
}

function stripAngleSuffix(title) {
  return title
    .replace(
      /\s*[—:-]\s*(note\s+\d+|a field note|what I watch for|working notes|naming the owner|what fails first|the operable version|evidence over enthusiasm|a shorter feedback loop|keeping it teachable|small controls that stick).*$/i,
      '',
    )
    .replace(
      /\s+(in practice|under real load|without the theater|for engineering leaders|when the calendar is full)$/i,
      '',
    )
    .replace(/\s*\((20\d{2})\)\s*$/i, '')
    .trim()
}

function detectTheme(title, categories = []) {
  const t = title.toLowerCase()
  const cats = categories.map((c) => String(c).toLowerCase())
  if (
    /rag|retrieval|chunk|connector|eval loop|grounding|knowledge graph|permissions in rag/.test(
      t,
    )
  )
    return 'rag'
  if (
    /agent|harness|kill switch|orchestration|idempotenc|multi-agent|hand-?off|tool use|event-driven/.test(
      t,
    )
  )
    return 'agents'
  if (
    /buy|build|vendor|commodity|integration debt|exit strateg|make-or-buy|custom:|platforms you buy/.test(
      t,
    )
  )
    return 'buybuild'
  if (
    /green|carbon|sustainab|efficiency as|retries|energy cost|right-sizing|asim hussain/.test(
      t,
    )
  )
    return 'sustainability'
  if (
    /open source|maintainer|upstream|fork|docs pr|contributing|borrowing patterns|licenses/.test(
      t,
    )
  )
    return 'opensource'
  if (
    /mentor|coaching|junior|career conversation|sponsor|pairing|feedback that|psychology of asking|growing seniors|teaching judgment|ai literacy|ai-assisted|hiring for ownership/.test(
      t,
    )
  )
    return 'mentorship'
  if (
    /\bai\b|copilot|model|prompt|fluent wrong|shipping with models|evaluating ai|workflow, not on the slide/.test(
      t,
    )
  )
    return 'ai'
  if (
    /alignment|cross-team|hand-offs that|collaboration|working agreement|shared ownership|conflict as|meeting you should|interfaces between|product and platform/.test(
      t,
    )
  )
    return 'collaboration'
  if (
    /code review|technical debt|incident|api design|observability|migration|documentation|testing strategy|architecture decision|small platform/.test(
      t,
    )
  )
    return 'craft'
  if (cats.includes('mentorship')) return 'mentorship'
  if (cats.includes('sustainability')) return 'sustainability'
  if (cats.includes('open source')) return 'opensource'
  if (cats.includes('ai')) return 'ai'
  if (cats.includes('teams')) return 'collaboration'
  return 'leadership'
}

/** Natural title variants for posts that share a base topic (Related Posts). */
function improveTitle(rawTitle, ordinalAmongBase) {
  const base = stripAngleSuffix(rawTitle)
  if (ordinalAmongBase === 0) return base
  const join = base.includes(':') ? ' — ' : ': '
  const variants = [
    `naming the owner`,
    `what fails first`,
    `the operable version`,
    `evidence over enthusiasm`,
    `a shorter feedback loop`,
    `keeping it teachable`,
    `small controls that stick`,
  ]
  const v = variants[(ordinalAmongBase - 1) % variants.length]
  return `${base}${join}${v}`
}

function topicDevelopment(topic, theme, rng) {
  const shared = [
    `For **${topic}**, the inheritance test is blunt: after a week, can someone outside the original room explain what changed, who owns it, and how you will know if it breaks? If the answer depends on hallway memory, you still have a story — not a practice.`,
    `Write one page while the decision is still warm — context, options, choice, owner, revisit date. Verbal alignment on **${topic}** evaporates under ordinary calendar pressure, and Slack archaeology is a poor substitute for a decision record.`,
    `Resist the urge to expand scope into neighboring slogans. If a control does not make **${topic}** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.`,
    `Measure what you claim to care about. If **${topic}** only appears in kickoff slides and never in review, incident, or planning artifacts, it is branding. Put a verification signal where people already look.`,
    `Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.`,
    `When pressure rises, teams drop the unowned practice first. Put **${topic}** in the path of work — templates, checklists, review norms — or admit it was optional applause.`,
  ]
  const byTheme = {
    rag: [
      `On **${topic}**, polish the chat UI last. Connectors, authz at retrieval time, freshness owners, and a gold-question suite decide whether users trust the answers. Demo fluency without those controls is a long half-life of embarrassment.`,
      `Treat polite wrongness as a product defect with a trace: query, retrieved IDs, scores, answer, feedback. Without that trail, debates stay stuck on model vibes while users quietly stop asking.`,
      `Thin context should refuse or escalate. Inventing confidence is how retrieval systems lose the room — and how support tickets turn into vague complaints about “the AI.”`,
    ],
    agents: [
      `On **${topic}**, design the stop path before the autonomy story — budgets, allow-listed tools, audit logs, and a kill switch operators can reach without a war room. Autonomy is earned after those exist.`,
      `Side effects need the same discipline as payments: idempotency, clear hand-offs, and a human who still owns production outcomes. Retries without keys turn partial failure into duplicate harm.`,
      `Useful specialization is narrow tools and clear interfaces — not personas arguing in a shared context window for theater value.`,
    ],
    ai: [
      `On **${topic}**, tempo is not the product. Verification notes, data boundaries, and review norms decide whether faster drafts become cheaper defects. Fluency is not evidence.`,
      `Shared harnesses beat private prompt folklore. If the “right way” lives in one chat history, you do not have a team practice — you have a bus factor dressed as productivity.`,
      `Measure assistance with outcomes you already care about: change-fail rate, review quality, escaped defects. Suggestion counts are arcade tickets.`,
    ],
    mentorship: [
      `On **${topic}**, care that never changes next week’s ownership is performance. Stretch a thin slice, coach the decision, and leave an artifact someone else can reuse.`,
      `Specific feedback tied to a PR, RFC, or incident role compounds. Vague encouragement at review time feels kind and teaches nothing.`,
      `Seniors need deliberate practice teaching. If the scoreboard only rewards personal velocity, judgment does not scale past one hero.`,
    ],
    collaboration: [
      `On **${topic}**, publish the interface: inputs, outputs, done criteria, and who gets paged. More Slack is not a substitute for a contract, and hero translators are a continuity risk.`,
      `Meetings can choose among written options. They cannot permanently store ownership across org boundaries. Status karaoke is expensive theater.`,
      `Shared roadmaps without shared capacity envelopes are fiction. Publish what each team can carry before you celebrate alignment.`,
    ],
    craft: [
      `On **${topic}**, craft shows up as reversible decisions, reviews that teach, and remediations that change a control within a week of an incident — not as aesthetics in a diagram.`,
      `Put repayment and operability on the same board as features so debt competes in the open instead of at 2 a.m. Unscheduled debt always loses to the loudest slide.`,
      `Observability should answer what changed for which users, tied to an owner. Orphaned dashboards are decoration.`,
    ],
    leadership: [
      `On **${topic}**, clear drag before you invent ceremony. Ambiguous owners and missing environments tax the team more than a missing standup. Process without path-clearing is motion that performs like delay.`,
      `Stay close enough to feel texture; distant enough that people still own outcomes. Stealing hard problems under the banner of help produces brittle benches and exhausted managers.`,
      `Quiet continuity beats loud frameworks. You are paid for systems and people that still work when you are not narrating.`,
    ],
    sustainability: [
      `On **${topic}**, refuse waste that buys no safety — retry storms, flaky CI, always-on idle fleets — and assign an owner who can change sizing or schedules. Unowned green metrics are decoration.`,
      `Efficiency is reliability practice. If a carbon or cost signal never changes an architecture decision, the forum is performing virtue.`,
      `Flaky CI burns minutes and attention. Quarantine with deadlines; infinite noise trains people to ignore real failures.`,
    ],
    opensource: [
      `On **${topic}**, contribute where you already depend, fund maintainer time, and write exit criteria before you fork. Cosplay contributions create noise, not leverage.`,
      `Citizenship without capacity planning creates unpaid queues and brittle commons. Own what you share, including docs freshness and security contacts.`,
      `Upstream first keeps collaboration cheap. Private patches bit-rot; upstream fixes travel with every pull.`,
    ],
    buybuild: [
      `On **${topic}**, start from ownership of the failure mode and the exit path. Purchase price is the down payment; integration debt is the mortgage.`,
      `Keep harnesses you control — evals, policy, audit — even when you buy commodity inference or platforms. That is how judgment stays portable.`,
      `If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.`,
    ],
  }
  const pool = [...shared, ...(byTheme[theme] || [])]
  return pickN(rng, pool, 5)
}

function normalizeKey(p) {
  return p
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80)
    .toLowerCase()
}

function dedupeParagraphs(parts) {
  const seen = new Set()
  const out = []
  for (const p of parts) {
    if (!p || !String(p).trim()) continue
    const key = normalizeKey(String(p))
    // Always keep headings
    if (String(p).startsWith('## ') || String(p).startsWith('### ')) {
      out.push(p)
      continue
    }
    if (seen.has(key)) continue
    seen.add(key)
    out.push(p)
  }
  return out
}

function bullets(items) {
  return items.map((i) => `- ${i}`).join('\n')
}

function makeOpening(topic, thesis, bank, rng) {
  const openers = [
    thesis,
    `Most teams endorse “${topic}” quickly and operationalize it slowly. ${thesis}`,
    `The useful version of “${topic}” is narrower than the slogan: ${thesis}`,
    `I care about “${topic}” for one practical reason: it either leaves clearer ownership next week, or it was theater.`,
    `“${topic}” stops being abstract the moment you ask who gets paged when it fails.`,
    `${pick(rng, bank.openings)(topic)}`,
  ]
  return pick(rng, openers)
}

function buildEssay({ title, categories, rng }) {
  const topic = stripAngleSuffix(title)
  const theme = detectTheme(title, categories)
  const bank = BANKS[theme]
  const structure = pick(rng, [
    'mechanisms',
    'failure_first',
    'scene_led',
    'practices',
  ])

  // Exhaustive unique picks — never reuse a paragraph in the same essay
  const used = new Set()
  const take = (arr, n) => {
    const avail = arr.filter((x) => x && !used.has(x))
    const picks = pickN(rng, avail, n)
    picks.forEach((p) => used.add(p))
    return picks
  }
  const takeOne = (arr) => {
    const [x] = take(arr, 1)
    return x
  }

  const thesis = takeOne(bank.theses)
  const deep = take(bank.deep, 6)
  const scenes = take(bank.scenarios, 3)
  const trades = take(bank.tradeoffs, 3)
  const fails = take(bank.failures, 4)
  const practices = take(bank.practices, 4)
  const close = takeOne(bank.closes)
  const topicParas = topicDevelopment(topic, theme, rng)
  topicParas.forEach((p) => used.add(p))

  const parts = []

  // 1. Opening — clear human thesis (one idea)
  parts.push(makeOpening(topic, thesis, bank, rng))
  if (!parts[0].includes(thesis.slice(0, 40))) {
    parts.push(thesis)
  }
  parts.push(
    pick(rng, [
      `What follows stays on that claim: mechanisms, concrete scenes, and the failure modes that appear when the claim is ignored.`,
      `I will stay on this thesis — no adjacent manifesto, no tour of every neighboring discipline.`,
      `The rest develops that one idea with controls you can install and failure modes you can recognize.`,
    ]),
  )
  parts.push(topicParas[0])
  parts.push(topicParas[1])

  // 2. Develop the idea
  if (structure === 'mechanisms') {
    parts.push('## How it actually works')
    parts.push(
      pick(rng, [
        `Start with controls that are boring on purpose: written owners, verification, and a path for the next person.`,
        `Install the smallest set of mechanisms that make success and failure legible. Skip the program name.`,
      ]),
    )
    deep.forEach((d) => parts.push(d))
    if (topicParas[2]) parts.push(topicParas[2])
    parts.push('## Where this shows up')
    scenes.forEach((s) => parts.push(s))
    parts.push('## Tradeoffs')
    trades.forEach((t) => parts.push(t))
  } else if (structure === 'failure_first') {
    parts.push('## What fails when you skip it')
    parts.push(
      `Teams already have scars. Naming the failure modes precisely is faster than inventing a framework brand.`,
    )
    fails.forEach((f) => parts.push(f))
    parts.push('## Controls that answer those failures')
    deep.forEach((d) => parts.push(d))
    if (topicParas[2]) parts.push(topicParas[2])
    parts.push('## A concrete scene')
    scenes.forEach((s) => parts.push(s))
    parts.push('## Tradeoffs')
    trades.forEach((t) => parts.push(t))
  } else if (structure === 'scene_led') {
    parts.push('## A scene from delivery')
    parts.push(scenes[0])
    parts.push(
      `That scene is the thesis under calendar pressure. The response is not another status meeting — it is a control.`,
    )
    parts.push('## Mechanisms')
    deep.forEach((d) => parts.push(d))
    if (topicParas[2]) parts.push(topicParas[2])
    if (scenes[1]) {
      parts.push('## Another texture')
      parts.push(scenes[1])
      if (scenes[2]) parts.push(scenes[2])
    }
    parts.push('## Tradeoffs')
    trades.forEach((t) => parts.push(t))
  } else {
    parts.push('## Practices with enough detail to copy')
    parts.push(
      `Cadence beats intensity. These hold when they fit inside weeks people already live.`,
    )
    practices.forEach((p, i) => {
      parts.push(`### ${i + 1}`)
      parts.push(p)
      if (deep[i]) parts.push(deep[i])
    })
    deep.slice(practices.length).forEach((d) => parts.push(d))
    if (topicParas[2]) parts.push(topicParas[2])
    parts.push('## Scenes')
    scenes.forEach((s) => parts.push(s))
    parts.push('## Tradeoffs')
    trades.forEach((t) => parts.push(t))
  }

  if (topicParas[3]) parts.push(topicParas[3])
  if (topicParas[4]) parts.push(topicParas[4])

  // 3. Failure modes tied to THIS thesis only
  if (structure === 'failure_first') {
    parts.push('## What to do this month')
    parts.push(bullets(practices))
  } else if (structure === 'practices') {
    parts.push('## Failure modes')
    parts.push(
      `Each of these is a missing control, not a personality problem:`,
    )
    parts.push(bullets(fails))
  } else {
    parts.push('## Failure modes')
    parts.push(
      `Each of these is a missing control, not a personality problem:`,
    )
    parts.push(bullets(fails))
    parts.push('## What to do this month')
    parts.push(bullets(practices.slice(0, 3)))
  }

  // 4. Short close — land the point (no cross-theme bridge, no off-topic AI inject)
  parts.push('## Close')
  parts.push(close)
  parts.push(
    pick(rng, [
      `On **${topic}**, keep the loop short: write the decision, name the owner, verify the outcome.`,
      `If someone new cannot explain **${topic}** from your artifacts in fifteen minutes, the practice is still private.`,
      `Carry the claim as a habit, not a brand: **${topic}** either compounds ownership or it was applause.`,
    ]),
  )

  let body = dedupeParagraphs(parts).join('\n\n')

  // Grow carefully toward target without duplicating or drifting themes
  let guard = 0
  while (wordCount(body) < MIN_WORDS && guard < 15) {
    const unusedDeep = bank.deep.filter(
      (d) => !used.has(d) && !body.includes(d.slice(0, 48)),
    )
    const unusedScene = bank.scenarios.filter(
      (s) => !used.has(s) && !body.includes(s.slice(0, 48)),
    )
    const unusedTrade = bank.tradeoffs.filter(
      (t) => !used.has(t) && !body.includes(t.slice(0, 48)),
    )
    const unusedPractice = bank.practices.filter(
      (p) => !used.has(p) && !body.includes(p.slice(0, 48)),
    )
    let addition = null
    if (unusedDeep.length) {
      addition = pick(rng, unusedDeep)
      used.add(addition)
    } else if (unusedScene.length) {
      addition = pick(rng, unusedScene)
      used.add(addition)
    } else if (unusedTrade.length) {
      addition = pick(rng, unusedTrade)
      used.add(addition)
    } else if (unusedPractice.length) {
      const p = pick(rng, unusedPractice)
      used.add(p)
      addition = `One more practice worth installing: ${p}`
    } else {
      addition = pick(rng, [
        `If you need a program office to explain **${topic}**, the design is too heavy. Prefer artifacts people already touch — reviews, runbooks, decision records.`,
        `Ambiguity is expensive. Spell out what “good” looks like for **${topic}** in one paragraph a new teammate can reuse.`,
        `Optimism without an owner is how demos become liabilities. Name the human before you name the tool.`,
        `The point of writing this down is not documentation theater. It is so the next person does not have to reconstruct intent from Slack.`,
        `Prefer reversible moves on **${topic}**. If you cannot say how you would unwind the decision, you are not done designing it.`,
        `Hold three standards at once for **${topic}**: a named owner, a written control, and a verification signal.`,
      ])
      if (used.has(addition) || body.includes(addition.slice(0, 48))) {
        addition = `Make the next step on **${topic}** visible this week — even if it is only naming the owner of the failure mode and the date you will check evidence.`
        if (body.includes(addition.slice(0, 48))) break
      }
      used.add(addition)
    }
    if (/\n## Close\n/.test(body)) {
      body = body.replace(/\n## Close\n/, `\n${addition}\n\n## Close\n`)
    } else {
      body += '\n\n' + addition
    }
    body = dedupeParagraphs(body.split(/\n\n+/)).join('\n\n')
    guard++
  }

  // Soft trim if over target
  if (wordCount(body) > MAX_WORDS + 120) {
    const blocks = body.split(/\n\n+/)
    const closeIdx = blocks.findIndex((b) => b === '## Close')
    if (closeIdx > 8) {
      for (
        let i = closeIdx - 1;
        i > 4 && wordCount(blocks.join('\n\n')) > MAX_WORDS;
        i--
      ) {
        if (!blocks[i].startsWith('#') && !blocks[i].startsWith('- ')) {
          blocks.splice(i, 1)
        }
      }
      body = blocks.join('\n\n')
    }
  }

  return {
    body,
    theme,
    structure,
    words: wordCount(body),
  }
}

function extractDateRaw(raw) {
  const m = raw.match(/^---\n[\s\S]*?^date:\s*(.+)$/m)
  return m ? m[1].trim() : null
}

function serialize({ data, dateRaw, body }) {
  const title = String(data.title).replace(/"/g, '\\"')
  const cats = (data.categories || []).map((c) => `  - ${c}`).join('\n')
  const draft = data.draft === true ? 'true' : 'false'
  return `---
title: "${title}"
date: ${dateRaw}
categories:
${cats}
draft: ${draft}
---

${body.trim()}
`
}

function buildTitlePlan(files) {
  /** @type {Map<string, {file: string, title: string, date: string}[]>} */
  const byBase = new Map()
  for (const file of files) {
    const full = path.join(POSTS_DIR, file)
    const raw = fs.readFileSync(full, 'utf8')
    const parsed = matter(raw)
    const base = stripAngleSuffix(String(parsed.data.title))
    const date = extractDateRaw(raw) || ''
    if (!byBase.has(base)) byBase.set(base, [])
    byBase.get(base).push({ file, title: parsed.data.title, date })
  }
  for (const arr of byBase.values()) {
    arr.sort((a, b) => a.date.localeCompare(b.date) || a.file.localeCompare(b.file))
  }
  /** @type {Map<string, string>} */
  const fileToTitle = new Map()
  for (const [base, arr] of byBase) {
    arr.forEach((item, i) => {
      fileToTitle.set(item.file, improveTitle(base, i))
    })
  }
  return fileToTitle
}

function main() {
  const args = process.argv.slice(2)
  const dry = args.includes('--dry-run')
  const limitIdx = args.indexOf('--limit')
  const limit = limitIdx >= 0 ? Number(args[limitIdx + 1]) : null
  const fileIdx = args.indexOf('--file')
  const fileSub = fileIdx >= 0 ? args[fileIdx + 1] : null

  let files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .sort()

  if (fileSub) files = files.filter((f) => f.includes(fileSub))
  if (limit) files = files.slice(0, limit)

  // Title plan across the full corpus when rewriting all / many
  const allFiles = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .sort()
  const titlePlan = buildTitlePlan(allFiles)

  const stats = []
  let written = 0
  let titlesChanged = 0

  for (const file of files) {
    const full = path.join(POSTS_DIR, file)
    const raw = fs.readFileSync(full, 'utf8')
    const parsed = matter(raw)
    const dateRaw = extractDateRaw(raw)
    const newTitle = titlePlan.get(file) || stripAngleSuffix(String(parsed.data.title))
    if (newTitle !== parsed.data.title) titlesChanged++

    const seed = hashString(file + '|' + newTitle + '|v6-coherent')
    const rng = mulberry32(seed)
    const { body, theme, structure, words } = buildEssay({
      title: newTitle,
      categories: parsed.data.categories || [],
      rng,
    })

    const data = { ...parsed.data, title: newTitle }
    stats.push({ file, words, theme, structure, title: newTitle })

    if (!dry) {
      fs.writeFileSync(full, serialize({ data, dateRaw, body }), 'utf8')
      written++
    }
  }

  const lengths = stats.map((s) => s.words).sort((a, b) => a - b)
  const avg = Math.round(
    lengths.reduce((a, b) => a + b, 0) / (lengths.length || 1),
  )
  const short = stats.filter((s) => s.words < MIN_WORDS)
  const long = stats.filter((s) => s.words > MAX_WORDS + 100)

  console.log(`Posts: ${stats.length}`)
  console.log(`Written: ${written}${dry ? ' (dry-run)' : ''}`)
  console.log(`Titles improved: ${titlesChanged}`)
  console.log(
    `Words: min=${lengths[0]} median=${lengths[Math.floor(lengths.length / 2)]} avg=${avg} max=${lengths[lengths.length - 1]}`,
  )
  console.log(`Below ${MIN_WORDS}: ${short.length}`)
  console.log(`Above ${MAX_WORDS + 100}: ${long.length}`)
  if (short.length)
    short.slice(0, 15).forEach((s) => console.log(`  - ${s.words} ${s.file}`))

  const byTheme = {}
  const byStruct = {}
  for (const s of stats) {
    byTheme[s.theme] = (byTheme[s.theme] || 0) + 1
    byStruct[s.structure] = (byStruct[s.structure] || 0) + 1
  }
  console.log('Themes:', byTheme)
  console.log('Structures:', byStruct)
  console.log('\nSample:')
  for (const s of stats.slice(0, Math.min(8, stats.length))) {
    console.log(`  ${s.words}w [${s.theme}/${s.structure}] ${s.title}`)
  }
}

main()
