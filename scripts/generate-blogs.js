/**
 * Generate ~2.5 posts/week for ~2 years into content/posts/.
 * Substantive unique essays (not identical stubs). Run: node scripts/generate-blogs.js
 */
const fs = require('fs')
const path = require('path')

const POSTS_DIR = path.join(__dirname, '..', 'content', 'posts')
const START = new Date('2024-08-26T12:00:00Z')
const END = new Date('2026-08-25T12:00:00Z')
const TARGET_PER_WEEK = 2.5 // aim ~260 across ~104 weeks

const categoriesByTheme = {
  leadership: ['Leadership', 'Teams'],
  mentorship: ['Mentorship', 'Leadership'],
  ai: ['AI', 'Engineering'],
  rag: ['AI', 'Architecture'],
  agents: ['AI', 'Architecture'],
  sustainability: ['Sustainability', 'Engineering'],
  opensource: ['Open Source', 'Engineering'],
  buybuild: ['Engineering', 'Leadership'],
  craft: ['Engineering', 'Architecture'],
  collaboration: ['Teams', 'Leadership'],
}

function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
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

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

function formatISO(date) {
  const y = date.getUTCFullYear()
  const m = String(date.getUTCMonth() + 1).padStart(2, '0')
  const d = String(date.getUTCDate()).padStart(2, '0')
  return `${y}-${m}-${d}T05:00:00Z`
}

function eraWeight(date) {
  // 0 early (more craft/leadership), 1 late (more AI/agents)
  const t = (date - START) / (END - START)
  return Math.min(1, Math.max(0, t))
}

function chooseTheme(rng, w) {
  const early = [
    'leadership',
    'mentorship',
    'craft',
    'collaboration',
    'opensource',
    'sustainability',
    'buybuild',
  ]
  const late = [
    'ai',
    'rag',
    'agents',
    'buybuild',
    'mentorship',
    'collaboration',
    'leadership',
    'sustainability',
  ]
  return pick(rng, w > 0.45 ? late : early)
}

const titleTemplates = {
  leadership: [
    'Coaching through ambiguity without stealing the work',
    'Ownership is a design problem, not a pep talk',
    'When leadership means clearing drag, not adding process',
    'The quiet work of keeping delivery honest',
    'Leaders who stay close to the craft',
    'Trust compounds slower than roadmaps',
    'Reorganizing when the product shape changes',
    'Judgment under load: what managers actually practice',
    'Ceremony is optional; continuity is not',
    'Hiring for ownership, not theatrical confidence',
  ],
  mentorship: [
    'Mentorship that survives calendar chaos',
    'Teaching judgment without becoming a bottleneck',
    'Career conversations that change next week’s work',
    'Pairing as coaching, not surveillance',
    'Growing seniors who can grow others',
    'Feedback that lands after incidents',
    'The psychology of asking for help in engineering',
    'Coaching juniors through AI-assisted workflows',
    'Mentoring in public without performing',
    'When to sponsor, when to step back',
  ],
  collaboration: [
    'Cross-team work without a shared roadmap',
    'Interfaces between teams beat shared Slack channels',
    'Alignment is a protocol, not a meeting',
    'Hand-offs that preserve context',
    'Collaboration tax and how to cut it',
    'When product and platform disagree productively',
    'Working agreements that age well',
    'The meeting you should replace with a doc',
    'Conflict as a design input',
    'Shared ownership across org boundaries',
  ],
  craft: [
    'Code review as teaching, not gatekeeping',
    'Technical debt with a repayment schedule',
    'Incident response that improves the system',
    'API design for humans who inherit it',
    'Observability that tells a story',
    'Migrations that respect team capacity',
    'Documentation that earns its keep',
    'Testing strategy when speed matters',
    'Architecture decisions you can reverse',
    'Small platforms that stay operable',
  ],
  ai: [
    'AI in the workflow, not on the slide deck',
    'What engineering leaders should ask of AI tools',
    'Keeping humans accountable when models draft code',
    'Prompting is not process — harnesses are',
    'AI changes tempo; leadership still owns outcomes',
    'Evaluating AI assistance without vanity metrics',
    'Where copilots help — and where they hide debt',
    'Teaching teams to distrust fluent wrongness',
    'AI literacy as a coaching problem',
    'Shipping with models without losing craft',
  ],
  rag: [
    'RAG that fails gracefully when context is thin',
    'Connectors are the hard part of retrieval',
    'Grounding answers in systems teams actually run',
    'Chunking strategy as an architecture choice',
    'Eval loops for retrieval quality',
    'Who owns the knowledge graph behind the bot?',
    'RAG pipelines as team infrastructure',
    'When retrieval lies politely',
    'Permissions in RAG: the boring requirement',
    'From demo RAG to operable RAG',
  ],
  agents: [
    'Event-driven agentic workflows teams can operate',
    'Agents that emit events humans can audit',
    'Orchestration without a black-box conductor',
    'When an agent should stop and ask',
    'Tool use as a privilege, not a default',
    'Agent harnesses: logs, budgets, and kill switches',
    'Designing hand-offs between agents and humans',
    'Idempotency for agentic side effects',
    'Multi-agent theater vs useful specialization',
    'Owning outcomes when agents ship changes',
  ],
  sustainability: [
    'Green software is an engineering constraint',
    'Efficiency as reliability practice',
    'Carbon-aware scheduling without the slogans',
    'Measuring compute waste in product teams',
    'Sustainable pace and sustainable systems',
    'What Asim Hussain’s green software work asks of us',
    'Right-sizing infrastructure as leadership work',
    'The energy cost of flaky CI',
    'Designing for fewer retries, not prettier dashboards',
    'Sustainability reviews in architecture forums',
  ],
  opensource: [
    'Open source as mentorship at scale',
    'Maintainer burden and team capacity',
    'Contributing without cosplay',
    'Internal open source across product teams',
    'Licenses, liability, and leadership judgment',
    'Upstream first as a collaboration habit',
    'When to fork and when to fund',
    'Docs PRs as onboarding practice',
    'Open source governance for small teams',
    'Borrowing patterns, not brand names',
  ],
  buybuild: [
    'Buy vs build when AI compresses build time',
    'The new cost of custom: maintenance, not typing',
    'Platforms you buy still need owners',
    'Build the harness, buy the commodity',
    'Integration debt after the purchase',
    'Make-or-buy with agents in the mix',
    'When a vendor becomes your process',
    'Exit strategies for bought AI tooling',
    'Build less, own more of the outcome',
    'Evaluating AI vendors like critical path systems',
  ],
}

const openings = [
  (t) => `Most teams do not fail for lack of intelligence. They fail when ${t.toLowerCase()} stays abstract while the calendar fills with motion.`,
  (t) => `I keep returning to a simple test: after a week of work on ${t.toLowerCase()}, can someone outside the room explain what changed and who owns it?`,
  (t) => `There is a version of ${t.toLowerCase()} that looks busy and a version that compounds. The difference is rarely a tool.`,
  (t) => `If you lead engineers, you already know the temptation: solve the hard part yourself. That instinct fights ${t.toLowerCase()}.`,
  (t) => `${t} sounds like a strategy slide until you watch a team try it under real load.`,
  (t) => `Good engineering leadership treats ${t.toLowerCase()} as practice — repeated, observable, coachable.`,
  (t) => `The interesting constraint is not speed. It is whether ${t.toLowerCase()} leaves the next person more capable.`,
  (t) => `Quiet teams often get this right before loud ones do: ${t.toLowerCase()} is a system of habits, not a quarterly theme.`,
]

const middles = {
  leadership: [
    'Coaching means staying close enough to feel drag — latency in decisions, vague ownership, reviews that teach nothing — then clearing it without taking the keyboard permanently.',
    'A useful leadership move is to make the work visible: write the decision, name the owner, set the review date. Theater thrives in fog.',
    'Hands-on does not mean doing everyone’s job. It means knowing where the system will tax the team and being willing to renegotiate scope when reality asks for it.',
    'Trust compounds when leaders absorb uncertainty without dumping it as urgency onto the people closest to the code.',
  ],
  mentorship: [
    'Mentorship that works looks like smaller loops: a review comment that teaches a pattern, a design note that names tradeoffs, a career chat that changes next week’s assignment.',
    'Juniors do not need motivational speeches. They need safe chances to own a slice, fail without shame, and hear specific feedback.',
    'With AI in the loop, mentorship shifts. You coach verification, skepticism, and taste — not just syntax.',
    'Sponsor publicly, critique privately, and keep a written trail of growth so progress is not a vibe.',
  ],
  collaboration: [
    'Cross-team collaboration fails when interfaces are social instead of technical: Slack threads instead of contracts, heroes instead of owners.',
    'Write the boundary as if it were an API: inputs, outputs, latency expectations, and who gets paged.',
    'The cheapest alignment tool is still a short doc with a decision and a date. Meetings are for conflict, not for status karaoke.',
    'When two teams disagree, treat the disagreement as a design input. Resolve it in the interface, not in personality.',
  ],
  craft: [
    'Craft shows up in boring places: migrations sized to capacity, alerts that mean something, reviews that leave the code more teachable.',
    'Technical debt is not a moral failing. Unscheduled debt is. Put repayment on the same board as features.',
    'Incidents are expensive coaching. The write-up should change a checklist, a test, or an ownership map — not just a feeling.',
    'Prefer reversible decisions. Architecture that cannot be walked back becomes politics.',
  ],
  ai: [
    'AI tools change how fast drafts appear. They do not change who is accountable for correctness, security, or operability.',
    'Leaders should ask: what did the model change, what did a human verify, and where is that trail stored?',
    'Team literacy matters more than individual clever prompts. Shared harnesses beat private magic.',
    'Watch for fluent wrongness. Confidence in the output is not evidence.',
  ],
  rag: [
    'Retrieval quality is an operations problem: stale sources, missing permissions, and chunking that shreds meaning.',
    'Connectors and access control are where RAG projects die. Treat them as product work, not glue.',
    'Build evals early. Without them you are arguing about vibes while users lose trust.',
    'A RAG system without an owner for freshness is a demo with a long half-life of embarrassment.',
  ],
  agents: [
    'Event-driven agentic workflows only help when every action emits an auditable event: what ran, why, with which tools, and what it changed.',
    'Give agents budgets — tokens, time, blast radius — and a kill switch a human can use without a war room.',
    'Prefer narrow tools with clear side effects over a single omnipotent agent that “just figures it out.”',
    'Idempotency is not optional when an agent can retry. Side effects need the same discipline as payment systems.',
  ],
  sustainability: [
    'Green software thinking — the kind Asim Hussain and the Green Software Foundation keep insisting on — treats efficiency as a reliability and cost discipline, not a branding exercise.',
    'Flaky CI, chatty retries, and oversized environments are leadership issues because they burn attention and energy.',
    'Ask architecture reviews one plain question: what did we choose that forces waste forever?',
    'Sustainable pace for people and sustainable resource use for systems are the same habit: refuse unnecessary churn.',
  ],
  opensource: [
    'Open source is often mentorship with a public paper trail. That is powerful — and it has a maintainer cost.',
    'Contribute where your team already depends. Cosplay contributions create noise, not leverage.',
    'Internal open source works when ownership is explicit and reviews are kind but real.',
    'Borrow patterns thoughtfully. Cite people for ideas you use; do not name-drop for SEO.',
  ],
  buybuild: [
    'AI compresses the typing cost of building. It does not compress the ownership cost of running what you built.',
    'Buy commodities. Build the harness that makes your team’s judgment visible: policy, evals, audit, and exit.',
    'A purchased AI tool still needs an owner on-call for failure modes, data handling, and process fit.',
    'Make-or-buy decisions should include the cost of undoing the choice. Soft lock-in is still lock-in.',
  ],
}

const closings = [
  'The practical next step is small: pick one workflow, name an owner, and make the outcome observable next week.',
  'If this feels too quiet for a leadership post, that is the point. Compounding work rarely looks like theater.',
  'Lead for continuity. Leave systems and people that still work when you are not in the room.',
  'Coaching is the mechanism. Process is the memory. Tools are leverage — only when ownership stays human.',
  'Ship the habit, not the slogan. Then measure whether the next person can run it without you.',
  'Ask your team one question in standup this week: what did we make easier to own?',
]

const references = {
  sustainability: [
    'Asim Hussain’s work on green software is useful here as a reference: treat energy and efficiency as first-class engineering constraints, not after-the-fact reporting.',
  ],
  craft: [
    'Classic engineering writing on simplicity and operability still applies — complexity is a tax teams pay daily.',
  ],
  ai: [
    'Modern AI tooling voices matter most when they talk about evals, harnesses, and failure modes — not when they sell inevitability.',
  ],
  agents: [
    'The best writing on agentic systems emphasizes observability and human override. That is leadership-relevant, not hype-relevant.',
  ],
  mentorship: [
    'Psychology shows up in engineering as safety to ask questions. Without it, AI only accelerates confident mistakes.',
  ],
}

function uniqueTitle(rng, theme, used, index) {
  const base = pick(rng, titleTemplates[theme])
  const suffixes = [
    '',
    ': a field note',
    ': what I watch for',
    ' in practice',
    ' under real load',
    ' without the theater',
    ` (${2024 + (index % 3)})`,
    ' — working notes',
    ' for engineering leaders',
    ' when the calendar is full',
  ]
  let title = base
  let guard = 0
  while (used.has(title.toLowerCase()) && guard < 40) {
    title = `${base}${pick(rng, suffixes)}`
    if (used.has(title.toLowerCase())) {
      title = `${base} — note ${index + 1}`
    }
    guard++
  }
  used.add(title.toLowerCase())
  return title
}

const expanders = [
  'In practice that means shorter cycles: decide, ship a thin slice, review what broke, coach the pattern into the next person. Long programs without those loops become status machines.',
  'I watch for two failure modes. First, leaders who disappear into strategy and lose the texture of the work. Second, leaders who never leave the details and never grow successors. Both produce brittle teams.',
  'Process should be light enough to change. If your AI workflow cannot be updated when a model, connector, or compliance rule changes, you do not have a workflow — you have a ritual.',
  'Cross-team collaboration gets easier when you publish interfaces: who consumes what, what “done” means, and how failures are communicated. Ambiguity is expensive; clarity is a kindness.',
  'Mentorship scales when seniors narrate tradeoffs in writing. A one-paragraph decision record teaches more than a hallway conversation that evaporates.',
  'When agents join the loop, treat them like junior systems: limited privileges, explicit tools, budgets, and a human who owns the outcome. Autonomy without audit is just distributed risk.',
  'Buy-versus-build debates should start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo.',
  'Sustainability shows up as fewer retries, right-sized environments, and CI that does not burn cycles for vanity. Efficiency is operational maturity.',
]

function wordishParagraphs(rng, theme, title, date) {
  const open = pick(rng, openings)(title)
  const body = pickN(rng, middles[theme], 4)
  const extra = pickN(rng, expanders, 3)
  const w = eraWeight(date)
  if (w > 0.55 && theme !== 'ai' && theme !== 'agents' && theme !== 'rag') {
    extra.push(pick(rng, middles.ai))
  }
  if (w > 0.7 && (theme === 'collaboration' || theme === 'leadership')) {
    extra.push(pick(rng, middles.agents))
  }
  if (references[theme] && rng() > 0.4) {
    extra.push(pick(rng, references[theme]))
  }
  const close = pick(rng, closings)

  const sections = [
    open,
    ...body.slice(0, 2),
    extra[0],
    ...body.slice(2),
    extra[1],
    `On ${title.toLowerCase()}, the leadership move is to make the invisible visible: ownership, verification, and the path for the next person.`,
    extra[2],
    ...extra.slice(3),
    'I prefer written decisions over verbal ones. Memory is a poor archive, and AI tools make fluent improvisation cheap — which raises the value of durable context.',
    'None of this requires a new framework brand. It requires attention, a short feedback loop, and the humility to change process when agents join the workflow.',
    close,
  ]

  return sections.map((p) => p.trim()).filter(Boolean)
}

function buildMarkdown(title, date, theme, rng) {
  const cats = categoriesByTheme[theme] || ['Engineering']
  const paragraphs = wordishParagraphs(rng, theme, title, date)
  const body = paragraphs.join('\n\n')
  return `---
title: "${title.replace(/"/g, '\\"')}"
date: ${formatISO(date)}
categories:
${cats.map((c) => `  - ${c}`).join('\n')}
draft: false
---

${body}
`
}

function generateDates() {
  const dates = []
  const cursor = new Date(START)
  // align to week start (UTC Monday-ish): use Sunday=0
  cursor.setUTCDate(cursor.getUTCDate() - cursor.getUTCDay())
  let week = 0
  while (cursor <= END) {
    const rng = mulberry32(20240826 + week * 997)
    // 2 or 3 posts most weeks; occasionally 2 to average ~2.5
    const count = rng() < 0.5 ? 2 : 3
    const offsets = []
    while (offsets.length < count) {
      const d = Math.floor(rng() * 7)
      if (!offsets.includes(d)) offsets.push(d)
    }
    offsets.sort((a, b) => a - b)
    for (const off of offsets) {
      const postDate = new Date(cursor)
      postDate.setUTCDate(postDate.getUTCDate() + off)
      if (postDate >= START && postDate <= END) dates.push(postDate)
    }
    cursor.setUTCDate(cursor.getUTCDate() + 7)
    week++
  }
  return dates
}

function main() {
  if (!fs.existsSync(POSTS_DIR)) fs.mkdirSync(POSTS_DIR, { recursive: true })

  // clear prior generated posts (keep folder)
  for (const f of fs.readdirSync(POSTS_DIR)) {
    if (f.endsWith('.md')) fs.unlinkSync(path.join(POSTS_DIR, f))
  }

  const dates = generateDates()
  const usedTitles = new Set()
  const usedSlugs = new Set()
  let written = 0

  dates.forEach((date, index) => {
    const rng = mulberry32(date.getTime() / 1000 + index * 13)
    const w = eraWeight(date)
    const theme = chooseTheme(rng, w)
    const title = uniqueTitle(rng, theme, usedTitles, index)
    let slug = `${slugify(title)}---${date.toISOString().slice(0, 10)}`
    if (usedSlugs.has(slug)) slug = `${slug}-${index}`
    usedSlugs.add(slug)
    const md = buildMarkdown(title, date, theme, rng)
    fs.writeFileSync(path.join(POSTS_DIR, `${slug}.md`), md, 'utf8')
    written++
    if (written % 50 === 0) console.log(`Generated ${written}...`)
  })

  const first = dates[0].toISOString().slice(0, 10)
  const last = dates[dates.length - 1].toISOString().slice(0, 10)
  console.log(`\n✅ Generated ${written} posts`)
  console.log(`📅 Range: ${first} → ${last}`)
  console.log(`📁 ${POSTS_DIR}`)
  console.log(`🎯 Target density ~${TARGET_PER_WEEK}/week`)
}

main()
