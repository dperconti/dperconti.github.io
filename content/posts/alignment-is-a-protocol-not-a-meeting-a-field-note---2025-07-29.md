---
title: "Alignment is a protocol, not a meeting: a field note"
date: 2025-07-29T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

A field note on **Alignment is a protocol, not a meeting** should be inspectable next week. Mechanisms beat vibes.

When people say they need better Cross-team collaboration, I look for missing contracts: who consumes what, what “done” means, and who gets paged when the joint system lies.

Cross-team collaboration fails when interfaces are social instead of technical: Slack threads instead of contracts, heroes instead of owners.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## How the practice decays

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Roadmaps that look shared but hide capacity fiction — platform work scheduled as free.

Hero bridges that mask missing contracts until attrition.

Collaboration theater: more shared channels, same missing contracts.

Meetings used as a substitute for written interfaces — everyone left “aligned,” nobody can explain ownership later.

## The operating controls

Those failures map to controls. Install the smallest ones that make failure legible.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

## Texture from the work

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

## Tradeoffs worth naming

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## The neighboring discipline

Leaders who isolate the practice from Engineering leadership create beautiful local optima and expensive global failure.

Trust compounds when leaders absorb uncertainty without dumping it as urgency onto the people closest to the code. Urgency without triage is just anxiety with a deadline.

An incident write-up is eloquent and changes nothing. No test, no budget, no privilege change, no ownership map update. Leadership failed the expensive coaching moment. Feelings are not remediation.

Hire and promote for ownership: people who name tradeoffs in writing, ask for help early, and leave systems operable by someone else. Theatrical confidence is cheap in interviews and expensive in production.

## Harnesses beat vibes

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Interfaces between teams beat shared Slack channels.
- For every shared system: name a primary owner per failure mode.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- Replace status karaoke with a short decision doc: context, options, choice, date, owner.

## The point, again

Continuity is the product of clear contracts — not of more conversation.

Continuity is the product. Tools and frameworks are optional accessories.

On **Alignment is a protocol, not a meeting**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
