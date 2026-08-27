module.exports = {
  "leadership": {
    "deep": [
      "Continuity planning is leadership work even when the org chart is stable. Ask who can run the critical path if two people are out. If the answer is folklore, you have a continuity defect \u2014 schedule the teaching and the written runbook before the calendar forces it.",
      "Ceremony is optional; continuity is not. Keep the lightest process that still produces decisions, owners, and evidence. Delete the rest without guilt.",
      "Judgment under load is a practiced skill: triage, communicate, decide with incomplete information, and write down what you assumed. Managers who only practice judgment in calm weeks fail the weeks that matter."
    ],
    "scenarios": [
      "A leader clears a review queue personally for two sprints. Throughput rises, then collapses when they travel. The missing investment was teaching reviewers the standards in writing and calibrating once in a huddle \u2014 not becoming the queue."
    ]
  },
  "mentorship": {
    "deep": [
      "Pairing as coaching is not surveillance. Time-box it, name the learning goal, and leave an artifact. Surveillance pairing produces compliance; coaching pairing produces judgment.",
      "Feedback that lands after incidents should arrive within days, tied to a specific decision or omission, and paired with a practice rep. Delayed generic feedback teaches nothing useful.",
      "The psychology of asking for help is shaped by what got rewarded last time someone asked. If asking is punished as weakness, AI tools will hide mistakes instead of surfacing uncertainty."
    ],
    "scenarios": [
      "A senior is excellent individually and absent as a teacher. Promotion criteria still overweight personal output. Leadership then wonders why the bench is thin. Change the scoreboard: teaching artifacts count."
    ]
  },
  "collaboration": {
    "deep": [
      "Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.",
      "The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions \u2014 and require options in writing before it starts.",
      "Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship."
    ],
    "scenarios": [
      "Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug."
    ]
  },
  "craft": {
    "deep": [
      "Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.",
      "Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.",
      "Observability that cannot answer \u201cwhat changed for which users?\u201d is incomplete. Build the story path before you build the fifteenth chart."
    ],
    "scenarios": [
      "A migration is \u201cdone\u201d at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done."
    ]
  },
  "ai": {
    "deep": [
      "Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality \u2014 not counting accepted suggestions like arcade tickets.",
      "Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.",
      "Prompting is not process. Harnesses are: allow-lists, templates, evals, and review norms that survive a teammate leaving.",
      "Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.",
      "AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard."
    ],
    "scenarios": [
      "A team bans AI briefly after a bad merge, then reintroduces it without new controls. The ban was theater; the missing piece was verification and data boundaries."
    ]
  },
  "rag": {
    "deep": [
      "When retrieval lies politely, users blame \u201cthe AI\u201d and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.",
      "Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.",
      "Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect."
    ],
    "scenarios": [
      "A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug."
    ]
  },
  "agents": {
    "deep": [
      "When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.",
      "Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.",
      "Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners."
    ],
    "scenarios": [
      "A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work."
    ]
  },
  "sustainability": {
    "deep": [
      "Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.",
      "Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn \u2014 flaky tests, retry storms, or always-on idle fleets.",
      "Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the \u201cwhat if\u201d differently. Bring numbers."
    ],
    "scenarios": [
      "Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied."
    ]
  },
  "opensource": {
    "deep": [
      "Contributing without cosplay means your PRs match your production dependencies and your review standards match what you demand internally.",
      "Licenses are leadership judgment. \u201cEngineering said it was fine\u201d is not a control. Know the license class before you ship.",
      "Internal open source across product teams fails when shared packages have no deprecation path. Fear of breaking consumers freezes the commons.",
      "Maintainer burden is capacity planning. If your team cannot fund review hours, do not advertise contribution pathways that create unpaid queues.",
      "Upstream first fails when legal review is an afterthought. Bring license and export constraints into the same conversation as the technical fix.",
      "Borrowing patterns without citing sources teaches the wrong citizenship. Attribution is part of the craft, not optional polish.",
      "Open source governance for small teams should optimize for trust: security contact, release ownership, and a clear path to say no to scope that the maintainers cannot carry."
    ],
    "scenarios": [
      "A docs PR from a new hire fixes the onboarding hole everyone walked past. Senior review turns it into a teaching moment and a permanent path improvement.",
      "A team forks to move fast, then discovers CVE patches no longer apply cleanly. The missing artifact was not bravado \u2014 it was a merge-back owner and a calendar.",
      "Internal open source thrives when CODEOWNERS answer within a published SLA. Without that, shared packages become political parking lots."
    ]
  },
  "buybuild": {
    "deep": [
      "Platforms you buy still need owners \u2014 for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.",
      "The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.",
      "Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity."
    ],
    "scenarios": [
      "Build the harness, buy the commodity works until someone rebuilds the commodity \u201cfor flexibility.\u201d Flexibility without differentiated ownership is usually nostalgia."
    ]
  }
}
