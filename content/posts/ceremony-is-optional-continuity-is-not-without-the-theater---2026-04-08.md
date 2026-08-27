---
title: "Ceremony is optional; continuity is not without the theater"
date: 2026-04-08T05:00:00Z
categories:
  - Leadership
  - Teams
draft: false
---

Without the theater, **Ceremony is optional; continuity is not** is quieter: fewer frameworks, more written owners, less applause for motion.

Cross-team collaboration is design work. Meetings can choose among options. They cannot permanently store ownership.

Alignment is a protocol — written inputs, outputs, owners, and failure modes — not a recurring meeting that performs agreement.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Sequence under ordinary pressure

Imagine ordinary pressure — not a lab. Someone proposes a change that touches this practice. The first question is not which tool. It is who owns the outcome and what you will verify.

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

Day two is writing. A short decision record: context, options, choice, owner, revisit date. Without that page, the week becomes Slack archaeology.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Midweek friction is expected. Clear drag — access, environments, unclear interfaces — before you add a status meeting that performs leadership.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

By week’s end, success is an operable slice: a log schema, an eval, a runbook, a kill switch, or a freshness owner — plus a human who can reverse the change.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

## How the practice decays

- Collaboration theater: more shared channels, same missing contracts.
- Hand-offs that drop context so the receiving team re-learns the sender’s scars.
- Roadmaps that look shared but hide capacity fiction — platform work scheduled as free.

## The costs of doing it right

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

## How to hold the standard

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Protocols beat vibes. Write the boundary, name the owner, make failure legible.

## Where this couples to adjacent work

This work does not live alone. It couples to Engineering craft.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

## Harnesses beat vibes

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Replace status karaoke with a short decision doc: context, options, choice, date, owner.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface.
- For every shared system: name a primary owner per failure mode.
- Before joint delivery: publish the interface doc and the escalation path.

## The point, again

If collaboration feels expensive, check the interface before you hire more coordinators.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Ceremony is optional; continuity is not**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
