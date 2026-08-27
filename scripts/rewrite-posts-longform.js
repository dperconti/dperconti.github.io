/**
 * Rewrite every post in content/posts/ with a long-form essay body.
 * Preserves frontmatter (title, date, categories, draft). Regenerates body only.
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
const CROSS = BANKS.CROSS
const EXTRA = require('./essay-banks-extra')
for (const [theme, extra] of Object.entries(EXTRA)) {
  if (!BANKS[theme]) continue
  BANKS[theme].deep.push(...(extra.deep || []))
  BANKS[theme].scenarios.push(...(extra.scenarios || []))
}

const POSTS_DIR = path.join(__dirname, '..', 'content', 'posts')
const MIN_WORDS = 900

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

function shuffle(rng, arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
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
      /\s*[—:-]\s*(note\s+\d+|a field note|what I watch for|working notes).*$/i,
      '',
    )
    .replace(
      /\s+(in practice|under real load|without the theater|for engineering leaders|when the calendar is full)$/i,
      '',
    )
    .replace(/\s*\((20\d{2})\)\s*$/i, '')
    .trim()
}

function detectAngle(title) {
  const t = title.toLowerCase()
  if (/what i watch for/.test(t)) return 'watch'
  if (/field note|working notes/.test(t)) return 'field'
  if (/in practice/.test(t)) return 'practice'
  if (/under real load/.test(t)) return 'load'
  if (/without the theater/.test(t)) return 'theater'
  if (/when the calendar is full/.test(t)) return 'calendar'
  if (/for engineering leaders/.test(t)) return 'leaders'
  if (/note \d+/.test(t)) return 'note'
  return 'core'
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
    /mentor|coaching|junior|career conversation|sponsor|pairing|feedback that|psychology of asking|growing seniors|teaching judgment|ai literacy|ai-assisted/.test(
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

const ANGLE_LINE = {
  watch: (topic) =>
    `What I watch for is not enthusiasm around **${topic}** — it is whether ownership, verification, and the next person’s path got clearer under ordinary calendar pressure.`,
  field: (topic) =>
    `A field note on **${topic}** should be inspectable next week. Mechanisms beat vibes.`,
  practice: (topic) =>
    `In practice, **${topic}** is a sequence of controls you can name — not a philosophy deck.`,
  load: (topic) =>
    `Under real load, **${topic}** stops being a slogan. Queues, incidents, and half-finished migrations reveal whether the system was designed or performed.`,
  theater: (topic) =>
    `Without the theater, **${topic}** is quieter: fewer frameworks, more written owners, less applause for motion.`,
  calendar: (topic) =>
    `When the calendar is full, **${topic}** only survives inside short loops. Long programs without owners become status machines.`,
  leaders: (topic) =>
    `For engineering leaders, **${topic}** is a design problem: incentives, interfaces, and feedback loops — not a personality trait.`,
  note: (topic) =>
    `Another working note on **${topic}**: same thesis, sharper edges from recent delivery pressure.`,
  core: (topic) =>
    `**${topic}** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.`,
}

const STRUCTURES = [
  'mechanisms',
  'failure_first',
  'week_walkthrough',
  'practices',
  'counterargument',
  'pressure',
  'coaching',
  'systems',
]

const H = {
  mech: [
    'Mechanisms worth installing',
    'The operating controls',
    'What to put in place before the announcement',
    'Boring controls that compound',
  ],
  fail: [
    'Failure modes that teach',
    'How the practice decays',
    'What I refuse to romanticize',
    'The wreck as syllabus',
  ],
  scene: [
    'Scenes from delivery',
    'Where this shows up',
    'Concrete cases',
    'Texture from the work',
  ],
  trade: [
    'Tradeoffs worth naming',
    'What you give up',
    'The costs of doing it right',
  ],
  bridge: [
    'Where this couples to adjacent work',
    'Do not silo the practice',
    'The neighboring discipline',
  ],
  ai: [
    'When models join the workflow',
    'Tempo changed; accountability did not',
    'Harnesses beat vibes',
  ],
  plan: [
    'A plan for the next seven days',
    'Make it observable',
    'Checklist you can run',
  ],
  close: ['Close', 'The point, again', 'What to carry forward'],
  week: [
    'A week walking the practice',
    'From ambiguity to an operable slice',
    'Sequence under ordinary pressure',
  ],
  practice: [
    'Cadence that survives calendars',
    'Practices with enough detail to copy',
    'Operating rhythm',
  ],
  counter: [
    'The seductive counterargument',
    'Why smart teams still dodge this',
    'The objection, taken seriously',
  ],
  pressure: [
    'Pressure test',
    'What load reveals',
    'Design for the bad day',
  ],
  coach: [
    'Coaching lens',
    'Transferring judgment',
    'Grow the next owner',
  ],
  systems: [
    'Systems view',
    'Interfaces, feedback, ownership',
    'Design the loop',
  ],
}

function h(rng, key) {
  return pick(rng, H[key])
}

function bullets(items) {
  return items.map((i) => `- ${i}`).join('\n')
}

function buildEssay({ title, categories, rng }) {
  const topic = stripAngleSuffix(title)
  const angle = detectAngle(title)
  const theme = detectTheme(title, categories)
  const bank = BANKS[theme]
  const structure = pick(rng, STRUCTURES)
  const crossKey = pick(rng, CROSS[theme] || ['leadership'])
  const cross = BANKS[crossKey]

  const thesis = pick(rng, bank.theses)
  const topicShort = topic.length > 48 ? bank.label : topic
  const openingFn = pick(rng, bank.openings)
  const deep = pickN(rng, bank.deep, 6)
  const scenes = pickN(rng, bank.scenarios, 3)
  const trades = pickN(rng, bank.tradeoffs, 3)
  const fails = pickN(rng, bank.failures, 4)
  const practices = pickN(rng, bank.practices, 5)
  const close = pick(rng, bank.closes)
  const crossDeep = pickN(rng, cross.deep, 2)
  const crossScene = pick(rng, cross.scenarios)

  const parts = []

  // --- Opening ---
  parts.push(ANGLE_LINE[angle](topic))
  parts.push(openingFn(bank.label))
  parts.push(thesis)
  parts.push(
    pick(rng, [
      `The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.`,
      `I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.`,
      `Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.`,
    ]),
  )

  // --- Body by structure ---
  if (structure === 'mechanisms') {
    parts.push(`## ${h(rng, 'mech')}`)
    parts.push(
      `Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.`,
    )
    deep.forEach((d) => parts.push(d))
    parts.push(`## ${h(rng, 'scene')}`)
    scenes.forEach((s) => parts.push(s))
    parts.push(`## ${h(rng, 'fail')}`)
    parts.push(
      `Each failure mode below is a missing control. Another meeting will not install it.`,
    )
    parts.push(bullets(fails))
    parts.push(`## ${h(rng, 'trade')}`)
    trades.forEach((t) => parts.push(t))
  } else if (structure === 'failure_first') {
    parts.push(`## ${h(rng, 'fail')}`)
    parts.push(
      `I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.`,
    )
    fails.forEach((f) => parts.push(f))
    parts.push(`## ${h(rng, 'mech')}`)
    parts.push(`Those failures map to controls. Install the smallest ones that make failure legible.`)
    deep.forEach((d) => parts.push(d))
    parts.push(`## ${h(rng, 'scene')}`)
    scenes.forEach((s) => parts.push(s))
    parts.push(`## ${h(rng, 'trade')}`)
    trades.forEach((t) => parts.push(t))
  } else if (structure === 'week_walkthrough') {
    parts.push(`## ${h(rng, 'week')}`)
    parts.push(
      `Imagine ordinary pressure — not a lab. Someone proposes a change that touches this practice. The first question is not which tool. It is who owns the outcome and what you will verify.`,
    )
    parts.push(scenes[0])
    parts.push(
      `Day two is writing. A short decision record: context, options, choice, owner, revisit date. Without that page, the week becomes Slack archaeology.`,
    )
    parts.push(deep[0])
    parts.push(deep[1])
    parts.push(
      `Midweek friction is expected. Clear drag — access, environments, unclear interfaces — before you add a status meeting that performs leadership.`,
    )
    parts.push(scenes[1])
    parts.push(deep[2])
    parts.push(
      `By week’s end, success is an operable slice: a log schema, an eval, a runbook, a kill switch, or a freshness owner — plus a human who can reverse the change.`,
    )
    parts.push(scenes[2])
    parts.push(deep[3])
    parts.push(`## ${h(rng, 'fail')}`)
    parts.push(bullets(fails.slice(0, 3)))
    parts.push(`## ${h(rng, 'trade')}`)
    trades.forEach((t) => parts.push(t))
  } else if (structure === 'practices') {
    parts.push(`## ${h(rng, 'practice')}`)
    parts.push(
      `Cadence beats intensity. The practice holds when it fits inside weeks people already live.`,
    )
    practices.forEach((p, i) => {
      parts.push(`### ${i + 1}. Practice`)
      parts.push(p)
      parts.push(deep[i % deep.length])
      if (i < scenes.length) parts.push(scenes[i])
    })
    parts.push(`## ${h(rng, 'fail')}`)
    parts.push(`Stop doing these:`)
    parts.push(bullets(fails))
  } else if (structure === 'counterargument') {
    parts.push(`## ${h(rng, 'counter')}`)
    parts.push(
      pick(rng, [
        `The counterargument is usually speed: we do not have time. That sentence often means you do not have time for the second failure.`,
        `Some leaders argue culture will handle this without written controls. Culture without artifacts is memory — and memory does not survive hiring waves.`,
        `Another objection: we bought a tool for this. Tools without owners become expensive folklore.`,
      ]),
    )
    parts.push(
      `Take the objection seriously. Lightweight is good. Invisible is not. The fix is shorter artifacts and clearer owners — not more ceremony.`,
    )
    parts.push(`## ${h(rng, 'mech')}`)
    deep.slice(0, 4).forEach((d) => parts.push(d))
    parts.push(`## ${h(rng, 'scene')}`)
    scenes.forEach((s) => parts.push(s))
    parts.push(`## ${h(rng, 'trade')}`)
    parts.push(
      `Do not build a program office for a one-team problem. Do not invent a framework brand. Do install the smallest control that makes failure legible.`,
    )
    trades.forEach((t) => parts.push(t))
    parts.push(fails[0])
  } else if (structure === 'pressure') {
    parts.push(`## ${h(rng, 'pressure')}`)
    parts.push(
      `Load is the honest critic. Incidents, hiring spikes, and vendor outages reveal whether the practice was designed or merely announced.`,
    )
    parts.push(scenes[0])
    parts.push(fails[0])
    parts.push(fails[1])
    parts.push(`## ${h(rng, 'mech')}`)
    deep.forEach((d) => parts.push(d))
    parts.push(scenes[1])
    parts.push(
      `Under load, meetings multiply. Resist. Written interfaces, budgets, and kill switches scale better than status theater.`,
    )
    parts.push(scenes[2])
    parts.push(`## ${h(rng, 'trade')}`)
    trades.forEach((t) => parts.push(t))
    parts.push(bullets(fails.slice(2)))
  } else if (structure === 'coaching') {
    parts.push(`## ${h(rng, 'coach')}`)
    parts.push(
      `If the practice only lives in your head, you have a bus factor of one. Mentorship here means transferring judgment through artifacts.`,
    )
    parts.push(pick(rng, BANKS.mentorship.deep))
    parts.push(deep[0])
    parts.push(deep[1])
    parts.push(scenes[0])
    parts.push(
      `Juniors need safe ownership of a thin slice and specific feedback. Seniors need sponsorship to teach — review quality, RFC authorship, incident lead — not only more tickets.`,
    )
    parts.push(scenes[1])
    parts.push(deep[2])
    parts.push(deep[3])
    parts.push(scenes[2])
    parts.push(`## ${h(rng, 'practice')}`)
    parts.push(bullets(practices))
    parts.push(`## ${h(rng, 'fail')}`)
    parts.push(bullets(fails.slice(0, 3)))
  } else {
    // systems
    parts.push(`## ${h(rng, 'systems')}`)
    parts.push(
      `Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.`,
    )
    parts.push(deep[0])
    parts.push(deep[1])
    parts.push(scenes[0])
    parts.push(
      `Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.`,
    )
    parts.push(deep[2])
    parts.push(deep[3])
    parts.push(scenes[1])
    parts.push(fails[0])
    parts.push(practices[0])
    parts.push(practices[1])
    parts.push(scenes[2])
    parts.push(`## ${h(rng, 'trade')}`)
    trades.forEach((t) => parts.push(t))
    parts.push(deep[4] || deep[0])
  }

  // --- Principles (always; adds depth without filler) ---
  parts.push(`## ${pick(rng, ['Operating principles', 'Principles under ordinary pressure', 'How to hold the standard'])}`)
  parts.push(pick(rng, [
    `Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.`,
    `Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.`,
    `Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.`,
  ]))
  const leftover = deep.slice(3)
  leftover.forEach((d) => parts.push(d))
  // pull additional unused bank material for depth
  const moreDeep = pickN(rng, bank.deep.filter((d) => !deep.includes(d)), 2)
  moreDeep.forEach((d) => parts.push(d))
  const moreScene = pickN(rng, bank.scenarios.filter((s) => !scenes.includes(s)), 1)
  moreScene.forEach((s) => parts.push(s))
  parts.push(pick(rng, [
    `None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.`,
    `If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.`,
    `Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.`,
  ]))
  const moreTrade = bank.tradeoffs.filter((t) => !trades.includes(t))
  if (moreTrade.length) parts.push(pick(rng, moreTrade))
  parts.push(pick(rng, bank.closes.filter((c) => c !== close) .concat([
    `Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.`,
    `Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.`,
  ])))

  // --- Bridge ---
  parts.push(`## ${h(rng, 'bridge')}`)
  parts.push(
    pick(rng, [
      `This work does not live alone. It couples to ${cross.label}.`,
      `Leaders who isolate the practice from ${cross.label} create beautiful local optima and expensive global failure.`,
      `A durable approach borrows controls from ${cross.label} instead of inventing a parallel religion.`,
    ]),
  )
  parts.push(crossDeep[0])
  parts.push(crossScene)
  if (crossDeep[1]) parts.push(crossDeep[1])

  // --- AI note when not already AI/agents ---
  if (theme !== 'ai' && theme !== 'agents' && theme !== 'rag') {
    parts.push(`## ${h(rng, 'ai')}`)
    parts.push(
      pick(rng, [
        `Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.`,
        `If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.`,
        `Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.`,
      ]),
    )
    parts.push(pick(rng, BANKS.ai.deep))
    if (rng() > 0.4) parts.push(pick(rng, BANKS.agents.deep))
  } else if (theme === 'rag') {
    parts.push(`## ${h(rng, 'ai')}`)
    parts.push(
      `Retrieval systems sit next to agentic workflows. The same discipline applies: privileges, audit trails, and human override when context is thin or side effects are irreversible.`,
    )
    parts.push(pick(rng, BANKS.agents.deep))
  }

  // --- Seven-day plan ---
  parts.push(`## ${h(rng, 'plan')}`)
  parts.push(
    `Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.`,
  )
  parts.push(bullets(shuffle(rng, [...practices, ...deep.slice(0, 2).map((d) => d.split('. ')[0] + '.')]).slice(0, 6)))

  // --- Closing ---
  parts.push(`## ${h(rng, 'close')}`)
  parts.push(close)
  parts.push(
    pick(rng, [
      `Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.`,
      `Continuity is the product. Tools and frameworks are optional accessories.`,
      `If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.`,
    ]),
  )
  parts.push(
    `On **${topic}**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?`,
  )

  let body = parts.filter(Boolean).join('\n\n')
  // Ensure floor without repetitive filler: add unused bank material once
  let guard = 0
  while (wordCount(body) < MIN_WORDS && guard < 4) {
    const unusedDeep = bank.deep.filter((d) => !body.includes(d.slice(0, 40)))
    const unusedScene = bank.scenarios.filter((sc) => !body.includes(sc.slice(0, 40)))
    const unusedFail = bank.failures.filter((f) => !body.includes(f.slice(0, 40)))
    const chunk = []
    chunk.push(`## ${pick(rng, ['One more control worth naming', 'Additional texture', 'Further on the operating standard'])}`)
    if (unusedDeep.length) chunk.push(pick(rng, unusedDeep))
    if (unusedScene.length) chunk.push(pick(rng, unusedScene))
    if (unusedFail.length) chunk.push(`Watch for this decay mode: ${pick(rng, unusedFail)}`)
    chunk.push(pick(rng, [
      `Write it down the same week. Unpublished standards do not survive the next hiring wave or the next incident.`,
      `If you only remember one move: name the owner of the failure mode before you celebrate the happy path.`,
      `Treat this as reversible until proven otherwise — and say what reverse looks like.`,
    ]))
    // insert before final Close heading
    if (/\n## (Close|The point, again|What to carry forward)\n/.test(body)) {
      body = body.replace(/\n## (Close|The point, again|What to carry forward)\n/, `\n${chunk.join('\n\n')}\n\n## $1\n`)
    } else {
      body += '\n\n' + chunk.join('\n\n')
    }
    guard++
  }
  return { body, theme, structure, words: wordCount(body), angle }
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

  const stats = []
  let written = 0

  for (const file of files) {
    const full = path.join(POSTS_DIR, file)
    const raw = fs.readFileSync(full, 'utf8')
    const parsed = matter(raw)
    const dateRaw = extractDateRaw(raw)
    const seed = hashString(file + '|' + parsed.data.title + '|v5')
    const rng = mulberry32(seed)
    const { body, theme, structure, words, angle } = buildEssay({
      title: parsed.data.title,
      categories: parsed.data.categories || [],
      rng,
    })

    stats.push({ file, words, theme, structure, angle, title: parsed.data.title })

    if (!dry) {
      fs.writeFileSync(
        full,
        serialize({ data: parsed.data, dateRaw, body }),
        'utf8',
      )
      written++
    }
  }

  const lengths = stats.map((s) => s.words).sort((a, b) => a - b)
  const avg = Math.round(lengths.reduce((a, b) => a + b, 0) / (lengths.length || 1))
  const short = stats.filter((s) => s.words < MIN_WORDS)

  console.log(`Posts: ${stats.length}`)
  console.log(`Written: ${written}${dry ? ' (dry-run)' : ''}`)
  console.log(
    `Words: min=${lengths[0]} median=${lengths[Math.floor(lengths.length / 2)]} avg=${avg} max=${lengths[lengths.length - 1]}`,
  )
  console.log(`Below ${MIN_WORDS}: ${short.length}`)
  if (short.length) short.slice(0, 15).forEach((s) => console.log(`  - ${s.words} ${s.file}`))

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
    console.log(`  ${s.words}w [${s.theme}/${s.structure}/${s.angle}] ${s.title}`)
  }
}

main()
