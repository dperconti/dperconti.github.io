---
title: "Alignment is a protocol, not a meeting — note 76"
date: 2025-04-02T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

Another working note on **Alignment is a protocol, not a meeting**: same thesis, sharper edges from recent delivery pressure.

Cross-team collaboration is design work. Meetings can choose among options. They cannot permanently store ownership.

Shared ownership across org boundaries needs a named primary for each failure mode. Co-owning everything is owning nothing.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Why smart teams still dodge this

Another objection: we bought a tool for this. Tools without owners become expensive folklore.

Take the objection seriously. Lightweight is good. Invisible is not. The fix is shorter artifacts and clearer owners — not more ceremony.

## Boring controls that compound

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

## Texture from the work

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

## Tradeoffs worth naming

Do not build a program office for a one-team problem. Do not invent a framework brand. Do install the smallest control that makes failure legible.

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

Hand-offs that drop context so the receiving team re-learns the sender’s scars.

## How to hold the standard

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## Do not silo the practice

Leaders who isolate the practice from Engineering craft create beautiful local optima and expensive global failure.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

## Harnesses beat vibes

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Working agreements that age well name how to change the agreement.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- Before joint delivery: publish the interface doc and the escalation path.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- For every shared system: name a primary owner per failure mode.

## Close

Protocols beat vibes. Write the boundary, name the owner, make failure legible.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Alignment is a protocol, not a meeting**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
