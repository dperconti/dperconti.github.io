---
title: "When product and platform disagree productively without the theater"
date: 2025-04-01T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

Without the theater, **When product and platform disagree productively** is quieter: fewer frameworks, more written owners, less applause for motion.

Cross-team collaboration gets romanticized as “more communication.” Most teams already communicate constantly. What they lack is a published interface for work that crosses boundaries.

Cross-team collaboration fails when interfaces are social instead of technical: Slack threads instead of contracts, heroes instead of owners.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Transferring judgment

If the practice only lives in your head, you have a bus factor of one. Mentorship here means transferring judgment through artifacts.

Feedback that lands after incidents should arrive within days, tied to a specific decision or omission, and paired with a practice rep. Delayed generic feedback teaches nothing useful.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

Juniors need safe ownership of a thin slice and specific feedback. Seniors need sponsorship to teach — review quality, RFC authorship, incident lead — not only more tickets.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

## Operating rhythm

- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- Before joint delivery: publish the interface doc and the escalation path.
- For every shared system: name a primary owner per failure mode.

## The wreck as syllabus

- Collaboration theater: more shared channels, same missing contracts.
- Meetings used as a substitute for written interfaces — everyone left “aligned,” nobody can explain ownership later.
- Hand-offs that drop context so the receiving team re-learns the sender’s scars.

## Operating principles

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## The neighboring discipline

A durable approach borrows controls from Buy-versus-build judgment instead of inventing a parallel religion.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

## Harnesses beat vibes

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality — not counting accepted suggestions like arcade tickets.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- For every shared system: name a primary owner per failure mode.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- Prefer async artifacts for continuity.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- Before joint delivery: publish the interface doc and the escalation path.
- Treat conflict as design input.

## What to carry forward

If collaboration feels expensive, check the interface before you hire more coordinators.

Continuity is the product. Tools and frameworks are optional accessories.

On **When product and platform disagree productively**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
