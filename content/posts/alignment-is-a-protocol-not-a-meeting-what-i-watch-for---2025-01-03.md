---
title: "Alignment is a protocol, not a meeting: what I watch for"
date: 2025-01-03T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

What I watch for is not enthusiasm around **Alignment is a protocol, not a meeting** — it is whether ownership, verification, and the next person’s path got clearer under ordinary calendar pressure.

Cross-team collaboration gets romanticized as “more communication.” Most teams already communicate constantly. What they lack is a published interface for work that crosses boundaries.

Shared ownership across org boundaries needs a named primary for each failure mode. Co-owning everything is owning nothing.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## What to put in place before the announcement

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

## Where this shows up

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

## How the practice decays

Each failure mode below is a missing control. Another meeting will not install it.

- Hero bridges that mask missing contracts until attrition.
- Collaboration theater: more shared channels, same missing contracts.
- Hand-offs that drop context so the receiving team re-learns the sender’s scars.
- Roadmaps that look shared but hide capacity fiction — platform work scheduled as free.

## Tradeoffs worth naming

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

## How to hold the standard

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Continuity is the product of clear contracts — not of more conversation.

## Where this couples to adjacent work

A durable approach borrows controls from Buy-versus-build judgment instead of inventing a parallel religion.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill. Soft lock-in is still lock-in.

## Harnesses beat vibes

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Treat conflict as design input.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- For every shared system: name a primary owner per failure mode.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- Before joint delivery: publish the interface doc and the escalation path.
- Replace status karaoke with a short decision doc: context, options, choice, date, owner.

## Close

If collaboration feels expensive, check the interface before you hire more coordinators.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Alignment is a protocol, not a meeting**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
