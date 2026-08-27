---
title: "Working agreements that age well"
date: 2024-10-04T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

**Working agreements that age well** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Cross-team collaboration is design work. Meetings can choose among options. They cannot permanently store ownership.

Alignment is a protocol — written inputs, outputs, owners, and failure modes — not a recurring meeting that performs agreement.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Design for the bad day

Load is the honest critic. Incidents, hiring spikes, and vendor outages reveal whether the practice was designed or merely announced.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

Meetings used as a substitute for written interfaces — everyone left “aligned,” nobody can explain ownership later.

Roadmaps that look shared but hide capacity fiction — platform work scheduled as free.

## Boring controls that compound

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

Under load, meetings multiply. Resist. Written interfaces, budgets, and kill switches scale better than status theater.

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

## What you give up

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

- Collaboration theater: more shared channels, same missing contracts.
- Hero bridges that mask missing contracts until attrition.

## How to hold the standard

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## Where this couples to adjacent work

This work does not live alone. It couples to Buy-versus-build judgment.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

## Harnesses beat vibes

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Define allowed tools and data boundaries. Copilots without policy become shadow IT with autocomplete. Secrets, customer data, and authz logic need explicit rules.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Interfaces between teams beat shared Slack channels.
- Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID.
- Before joint delivery: publish the interface doc and the escalation path.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- For every shared system: name a primary owner per failure mode.

## What to carry forward

Continuity is the product of clear contracts — not of more conversation.

Continuity is the product. Tools and frameworks are optional accessories.

On **Working agreements that age well**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
