/**
 * Extra theme paragraphs — expands uniqueness across many posts.
 * Merged into essay-banks at rewrite time.
 */
module.exports = {
  leadership: {
    deep: [
      'Continuity planning is leadership work even when the org chart is stable. Ask who can run the critical path if two people are out. If the answer is folklore, you have a continuity defect — schedule the teaching and the written runbook before the calendar forces it.',
      'Ceremony is optional; continuity is not. Keep the lightest process that still produces decisions, owners, and evidence. Delete the rest without guilt.',
      'Judgment under load is a practiced skill: triage, communicate, decide with incomplete information, and write down what you assumed. Managers who only practice judgment in calm weeks fail the weeks that matter.',
      'Strategy without a delivery interface becomes a slide. Delivery without a strategy interface becomes thrash. Put both on the same one-pager: intent, capacity, and the decision you are asking for.',
      'Leaders who narrate every decision teach dependency. Leaders who publish decision criteria teach judgment. Prefer criteria you can point to when you are not in the room.',
      'Protect focus by naming what you will not do this quarter in writing. Unnamed non-goals become ambient guilt and half-started work.',
    ],
    scenarios: [
      'A leader clears a review queue personally for two sprints. Throughput rises, then collapses when they travel. The missing investment was teaching reviewers the standards in writing and calibrating once in a huddle — not becoming the queue.',
      'An org announces a new operating model and keeps the old status meetings. People learn which ritual is real by watching what leaders still attend. Delete or rename; do not stack.',
    ],
  },
  mentorship: {
    deep: [
      'Pairing as coaching is not surveillance. Time-box it, name the learning goal, and leave an artifact. Surveillance pairing produces compliance; coaching pairing produces judgment.',
      'Feedback that lands after incidents should arrive within days, tied to a specific decision or omission, and paired with a practice rep. Delayed generic feedback teaches nothing useful.',
      'The psychology of asking for help is shaped by what got rewarded last time someone asked. If asking is punished as weakness, AI tools will hide mistakes instead of surfacing uncertainty.',
      'Stretch ownership without a safety net is abandonment. Stretch ownership with a named coach, a kill switch, and a debrief is how judgment grows.',
      'Promotion packets should be assembled from artifacts already in the open: RFCs, incident leads, teaching reviews. If the packet requires secret knowledge, mentorship failed earlier.',
      'Teach the verification step out loud when models draft. Juniors copy what seniors check — or what seniors skip.',
    ],
    scenarios: [
      'A senior is excellent individually and absent as a teacher. Promotion criteria still overweight personal output. Leadership then wonders why the bench is thin. Change the scoreboard: teaching artifacts count.',
      'A mentee ships a migration with a written plan and a debrief for the team. That single loop teaches more than six months of vague “visibility” talk.',
    ],
  },
  collaboration: {
    deep: [
      'Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.',
      'The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.',
      'Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.',
      'Shared roadmaps without shared capacity envelopes are fiction. Publish what each team can actually carry before you celebrate alignment.',
      'Escalation paths that rely on knowing the right person are outages waiting for vacation. Publish who decides, by when, and what “stuck” means.',
      'Joint incidents need a single incident commander even when two orgs are involved. Dual command is how pages bounce and customers wait.',
    ],
    scenarios: [
      'Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.',
      'A cross-team launch checklist exists as a wiki page nobody updates. Convert it into a living interface doc with an owner and a last-reviewed date, or delete it.',
    ],
  },
  craft: {
    deep: [
      'Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.',
      'Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.',
      'Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.',
      'Migrations earn trust when each slice leaves the system operable and reversible. Percentage-complete without a kill switch is optimism with a burn-down chart.',
      'API consumer contracts should name required fields, error semantics, and deprecation windows. Optional-everything APIs become archaeology projects.',
      'Review latency is a craft signal. A queue that sits for days teaches people to bypass standards or to ship without teaching comments.',
    ],
    scenarios: [
      'A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.',
      'A service grows a second write path “temporarily.” Eighteen months later both paths are sacred. Temporary needs an expiration owner on the same board as the feature.',
    ],
  },
  ai: {
    deep: [
      'Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality — not counting accepted suggestions like arcade tickets.',
      'Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.',
      'Prompting is not process. Harnesses are: allow-lists, templates, evals, and review norms that survive a teammate leaving.',
      'Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.',
      'AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.',
      'Publish what must never go into a model tool: secrets, unrestricted customer data, unresolved legal holds. Ambiguity here becomes shadow IT with a chat UI.',
      'Treat “the model said so” as a non-reason in design review. Ask for the invariant, the test, or the threat model instead.',
    ],
    scenarios: [
      'A team bans AI briefly after a bad merge, then reintroduces it without new controls. The ban was theater; the missing piece was verification and data boundaries.',
      'A literacy clinic walks through one authz bug introduced by an accepted suggestion. The room learns more than from a generic AI town hall.',
    ],
  },
  rag: {
    deep: [
      'When retrieval lies politely, users blame “the AI” and stop reporting. Instrument feedback and retrieval traces so lies become tickets with owners.',
      'Chunking strategy as an architecture choice belongs in the same review as service boundaries. It changes failure modes and cost profiles.',
      'Permissions bugs in RAG are data breaches with a conversational UI. Treat them with the same severity as any other authz defect.',
      'Freshness SLOs belong next to product SLOs. A corpus that is “usually fine” is how trust erodes without an incident ticket.',
      'Citation quality is part of the answer. An uncited fluent paragraph trains users to treat guesses as documentation.',
      'Partial retrieval should be visible to the user and to ops. Silent degradation is how polite lies scale.',
      'Gold-question suites are living artifacts. Retire questions that no longer match the product; add questions from real support failures.',
    ],
    scenarios: [
      'A connector flakes under rate limits. The bot answers from a partial corpus and sounds complete. Partial retrieval without a warning is a product bug.',
      'Support escalations mention “the bot was wrong last month too.” Without retrieval traces, engineering debates model temperature instead of the stale source.',
    ],
  },
  agents: {
    deep: [
      'When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.',
      'Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.',
      'Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.',
      'Budgets are product constraints. Token, time, and blast-radius limits keep agents from optimizing for activity over outcomes.',
      'Every tool grant is a privilege expansion. Review tool allow-lists the way you review IAM — on a cadence, with least privilege as the default.',
      'Human resume paths need packaged context: what the agent tried, what failed, and what must not be retried. Empty hand-offs erase the value of automation.',
    ],
    scenarios: [
      'A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.',
      'An agent opens twelve draft PRs overnight against a thin test suite. Review debt becomes the real cost. Budgets and merge gates would have been kinder than a demo.',
    ],
  },
  sustainability: {
    deep: [
      'Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.',
      'Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.',
      'Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.',
      'Retry amplification should have a budget and an alert. Unbounded retries are a distributed denial of your own reliability.',
      'CI minutes are both money and attention. Quarantine flakes with deadlines; infinite quarantine is how noise becomes culture.',
      'Architecture forums that never change a sizing or schedule decision are performing green theater. Require a reversible experiment with an owner.',
    ],
    scenarios: [
      'Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.',
      'A team discovers staging mirrors production capacity while serving a handful of QA users. Right-sizing frees budget and reduces the blast radius of bad deploys.',
    ],
  },
  opensource: {
    deep: [
      'Contributing without cosplay means your PRs match your production dependencies and your review standards match what you demand internally.',
      'Licenses are leadership judgment. “Engineering said it was fine” is not a control. Know the license class before you ship.',
      'Internal open source across product teams fails when shared packages have no deprecation path. Fear of breaking consumers freezes the commons.',
      'Maintainer burden is capacity planning. If your team cannot fund review hours, do not advertise contribution pathways that create unpaid queues.',
      'Upstream first fails when legal review is an afterthought. Bring license and export constraints into the same conversation as the technical fix.',
      'Borrowing patterns without citing sources teaches the wrong citizenship. Attribution is part of the craft, not optional polish.',
      'Open source governance for small teams should optimize for trust: security contact, release ownership, and a clear path to say no to scope that the maintainers cannot carry.',
      'Security contacts and release owners are not bureaucracy when they are two names on a page. They are how outsiders know you are serious.',
    ],
    scenarios: [
      'A docs PR from a new hire fixes the onboarding hole everyone walked past. Senior review turns it into a teaching moment and a permanent path improvement.',
      'A team forks to move fast, then discovers CVE patches no longer apply cleanly. The missing artifact was not bravado — it was a merge-back owner and a calendar.',
      'Internal open source thrives when CODEOWNERS answer within a published SLA. Without that, shared packages become political parking lots.',
    ],
  },
  buybuild: {
    deep: [
      'Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.',
      'The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.',
      'Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.',
      'Exit drills are cheap insurance. Export a sample, revoke a key, and time how long a degraded mode lasts before you need the vendor again.',
      'Integration debt belongs on the same board as features until retired. Otherwise procurement wins the quarter and on-call pays the year.',
      'Keep eval suites and audit logs in systems you control even when inference is purchased. That is how you keep judgment portable.',
    ],
    scenarios: [
      'Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.',
      'A price hike arrives and nobody can list what data is trapped where. The exit sketch should have been written at purchase, not at panic.',
    ],
  },
}
