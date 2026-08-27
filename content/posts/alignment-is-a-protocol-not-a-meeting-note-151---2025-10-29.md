---
title: "Alignment is a protocol, not a meeting — note 151"
date: 2025-10-29T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

Another working note on **Alignment is a protocol, not a meeting**: same thesis, sharper edges from recent delivery pressure.

Cross-team collaboration is design work. Meetings can choose among options. They cannot permanently store ownership.

Shared ownership across org boundaries needs a named primary for each failure mode. Co-owning everything is owning nothing.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Why smart teams still dodge this

The counterargument is usually speed: we do not have time. That sentence often means you do not have time for the second failure.

Take the objection seriously. Lightweight is good. Invisible is not. The fix is shorter artifacts and clearer owners — not more ceremony.

## The operating controls

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

## Texture from the work

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

## Tradeoffs worth naming

Do not build a program office for a one-team problem. Do not invent a framework brand. Do install the smallest control that makes failure legible.

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

Hero bridges that mask missing contracts until attrition.

## Principles under ordinary pressure

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Continuity is the product of clear contracts — not of more conversation.

## Where this couples to adjacent work

Leaders who isolate the practice from Engineering craft create beautiful local optima and expensive global failure.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

## Tempo changed; accountability did not

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Coach AI literacy as judgment: when to draft with a model, when to refuse, when to escalate. Literacy is a coaching problem, not a one-time workshop.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Working agreements that age well name how to change the agreement.
- Before joint delivery: publish the interface doc and the escalation path.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- Conflict as a design input means capturing the disagreement as constraints and options.
- For every shared system: name a primary owner per failure mode.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.

## What to carry forward

If collaboration feels expensive, check the interface before you hire more coordinators.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Alignment is a protocol, not a meeting**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
