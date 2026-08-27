---
title: "Shared ownership across org boundaries — note 71"
date: 2025-03-21T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

Another working note on **Shared ownership across org boundaries**: same thesis, sharper edges from recent delivery pressure.

Cross-team collaboration is design work. Meetings can choose among options. They cannot permanently store ownership.

Cross-team collaboration fails when interfaces are social instead of technical: Slack threads instead of contracts, heroes instead of owners.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Sequence under ordinary pressure

Imagine ordinary pressure — not a lab. Someone proposes a change that touches this practice. The first question is not which tool. It is who owns the outcome and what you will verify.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

Day two is writing. A short decision record: context, options, choice, owner, revisit date. Without that page, the week becomes Slack archaeology.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Midweek friction is expected. Clear drag — access, environments, unclear interfaces — before you add a status meeting that performs leadership.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

By week’s end, success is an operable slice: a log schema, an eval, a runbook, a kill switch, or a freshness owner — plus a human who can reverse the change.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

## What I refuse to romanticize

- Hero bridges that mask missing contracts until attrition.
- Collaboration theater: more shared channels, same missing contracts.
- Hand-offs that drop context so the receiving team re-learns the sender’s scars.

## Tradeoffs worth naming

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

## Operating principles

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Continuity is the product of clear contracts — not of more conversation.

## Do not silo the practice

Leaders who isolate the practice from Engineering craft create beautiful local optima and expensive global failure.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

## Tempo changed; accountability did not

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- Before joint delivery: publish the interface doc and the escalation path.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- Conflict as a design input means capturing the disagreement as constraints and options.
- For every shared system: name a primary owner per failure mode.

## What to carry forward

If collaboration feels expensive, check the interface before you hire more coordinators.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Shared ownership across org boundaries**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
