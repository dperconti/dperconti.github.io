---
title: "Cross-team work without a shared roadmap — note 138"
date: 2025-09-12T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

Another working note on **Cross-team work without a shared roadmap**: same thesis, sharper edges from recent delivery pressure.

Cross-team collaboration gets romanticized as “more communication.” Most teams already communicate constantly. What they lack is a published interface for work that crosses boundaries.

Alignment is a protocol — written inputs, outputs, owners, and failure modes — not a recurring meeting that performs agreement.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Design for the bad day

Load is the honest critic. Incidents, hiring spikes, and vendor outages reveal whether the practice was designed or merely announced.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

Meetings used as a substitute for written interfaces — everyone left “aligned,” nobody can explain ownership later.

Hand-offs that drop context so the receiving team re-learns the sender’s scars.

## Mechanisms worth installing

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

Under load, meetings multiply. Resist. Written interfaces, budgets, and kill switches scale better than status theater.

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

## Tradeoffs worth naming

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

- Collaboration theater: more shared channels, same missing contracts.
- Roadmaps that look shared but hide capacity fiction — platform work scheduled as free.

## Operating principles

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Continuity is the product of clear contracts — not of more conversation.

## The neighboring discipline

This work does not live alone. It couples to Engineering leadership.

Ceremony is optional; continuity is not. Keep the lightest process that still produces decisions, owners, and evidence. Delete the rest without guilt.

Hiring celebrates architects who dazzle in system-design interviews but cannot leave a service operable on-call. Six months later, juniors inherit tribal knowledge. The leadership miss was selecting for theater over inheritance.

Judgment under load is a practiced skill: triage, communicate, decide with incomplete information, and write down what you assumed. Managers who only practice judgment in calm weeks fail the weeks that matter.

## Harnesses beat vibes

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- For every shared system: name a primary owner per failure mode.
- Before joint delivery: publish the interface doc and the escalation path.
- Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.

## The point, again

Protocols beat vibes. Write the boundary, name the owner, make failure legible.

Continuity is the product. Tools and frameworks are optional accessories.

On **Cross-team work without a shared roadmap**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
