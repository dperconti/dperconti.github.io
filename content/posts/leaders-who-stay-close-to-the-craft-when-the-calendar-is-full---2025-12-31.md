---
title: "Leaders who stay close to the craft: the operable version"
date: 2025-12-31T05:00:00Z
categories:
  - Leadership
  - Teams
draft: false
---

“Leaders who stay close to the craft” stops being abstract the moment you ask who gets paged when it fails.

Cross-team collaboration fails when interfaces are social instead of technical: Slack threads instead of contracts, heroes instead of owners.

What follows stays on that claim: mechanisms, concrete scenes, and the failure modes that appear when the claim is ignored.

Measure what you claim to care about. If **Leaders who stay close to the craft** only appears in kickoff slides and never in review, incident, or planning artifacts, it is branding. Put a verification signal where people already look.

For **Leaders who stay close to the craft**, the inheritance test is blunt: after a week, can someone outside the original room explain what changed, who owns it, and how you will know if it breaks? If the answer depends on hallway memory, you still have a story — not a practice.

## A scene from delivery

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

That scene is the thesis under calendar pressure. The response is not another status meeting — it is a control.

## Mechanisms

Joint incidents need a single incident commander even when two orgs are involved. Dual command is how pages bounce and customers wait.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Resist the urge to expand scope into neighboring slogans. If a control does not make **Leaders who stay close to the craft** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

## Another texture

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

## Tradeoffs

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

Shared roadmaps without shared capacity envelopes are fiction. Publish what each team can carry before you celebrate alignment.

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

## Failure modes

Each of these is a missing control, not a personality problem:

- Meetings used as a substitute for written interfaces — everyone left “aligned,” nobody can explain ownership later.
- Hand-offs that drop context so the receiving team re-learns the sender’s scars.
- Collaboration theater: more shared channels, same missing contracts.
- Roadmaps that look shared but hide capacity fiction — platform work scheduled as free.

## What to do this month

- Before joint delivery: publish the interface doc and the escalation path.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.

Escalation paths that rely on knowing the right person are outages waiting for vacation. Publish who decides, by when, and what “stuck” means.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

## Close

If collaboration feels expensive, check the interface before you hire more coordinators.

On **Leaders who stay close to the craft**, keep the loop short: write the decision, name the owner, verify the outcome.
