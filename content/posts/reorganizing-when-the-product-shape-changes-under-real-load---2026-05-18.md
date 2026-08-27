---
title: "Reorganizing when the product shape changes under real load"
date: 2026-05-18T05:00:00Z
categories:
  - Leadership
  - Teams
draft: false
---

Under real load, **Reorganizing when the product shape changes** stops being a slogan. Queues, incidents, and half-finished migrations reveal whether the system was designed or performed.

Cross-team collaboration is design work. Meetings can choose among options. They cannot permanently store ownership.

Shared ownership across org boundaries needs a named primary for each failure mode. Co-owning everything is owning nothing.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Grow the next owner

If the practice only lives in your head, you have a bus factor of one. Mentorship here means transferring judgment through artifacts.

Keep a light written trail of growth so progress is not a vibe only the manager remembers. Promotion packets should not require archaeology.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

Juniors need safe ownership of a thin slice and specific feedback. Seniors need sponsorship to teach — review quality, RFC authorship, incident lead — not only more tickets.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

## Cadence that survives calendars

- For every shared system: name a primary owner per failure mode.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- Before joint delivery: publish the interface doc and the escalation path.

## What I refuse to romanticize

- Roadmaps that look shared but hide capacity fiction — platform work scheduled as free.
- Hand-offs that drop context so the receiving team re-learns the sender’s scars.
- Meetings used as a substitute for written interfaces — everyone left “aligned,” nobody can explain ownership later.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Do not silo the practice

Leaders who isolate the practice from Buy-versus-build judgment create beautiful local optima and expensive global failure.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

## Harnesses beat vibes

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Before joint delivery: publish the interface doc and the escalation path.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- For every shared system: name a primary owner per failure mode.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- Conflict as a design input means capturing the disagreement as constraints and options.

## What to carry forward

If collaboration feels expensive, check the interface before you hire more coordinators.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Reorganizing when the product shape changes**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
