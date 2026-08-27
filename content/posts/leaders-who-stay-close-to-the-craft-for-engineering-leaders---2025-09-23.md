---
title: "Leaders who stay close to the craft for engineering leaders"
date: 2025-09-23T05:00:00Z
categories:
  - Leadership
  - Teams
draft: false
---

For engineering leaders, **Leaders who stay close to the craft** is a design problem: incentives, interfaces, and feedback loops — not a personality trait.

Cross-team collaboration gets romanticized as “more communication.” Most teams already communicate constantly. What they lack is a published interface for work that crosses boundaries.

Cross-team collaboration fails when interfaces are social instead of technical: Slack threads instead of contracts, heroes instead of owners.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## What load reveals

Load is the honest critic. Incidents, hiring spikes, and vendor outages reveal whether the practice was designed or merely announced.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

Collaboration theater: more shared channels, same missing contracts.

Hero bridges that mask missing contracts until attrition.

## The operating controls

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

Under load, meetings multiply. Resist. Written interfaces, budgets, and kill switches scale better than status theater.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

## What you give up

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

- Roadmaps that look shared but hide capacity fiction — platform work scheduled as free.
- Meetings used as a substitute for written interfaces — everyone left “aligned,” nobody can explain ownership later.

## Operating principles

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## The neighboring discipline

This work does not live alone. It couples to Buy-versus-build judgment.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

## Tempo changed; accountability did not

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Coach AI literacy as judgment: when to draft with a model, when to refuse, when to escalate. Literacy is a coaching problem, not a one-time workshop.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Interfaces between teams beat shared Slack channels.
- For every shared system: name a primary owner per failure mode.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- The meeting you should replace with a doc is the one that only redistributes status.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- Before joint delivery: publish the interface doc and the escalation path.

## The point, again

Continuity is the product of clear contracts — not of more conversation.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Leaders who stay close to the craft**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
