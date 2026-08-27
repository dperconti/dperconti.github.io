---
title: "Interfaces between teams beat shared Slack channels — note 115"
date: 2025-07-10T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

Another working note on **Interfaces between teams beat shared Slack channels**: same thesis, sharper edges from recent delivery pressure.

Cross-team collaboration gets romanticized as “more communication.” Most teams already communicate constantly. What they lack is a published interface for work that crosses boundaries.

The collaboration tax is paid in ambiguity. Clarity is a kindness and a throughput strategy.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Failure modes that teach

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Roadmaps that look shared but hide capacity fiction — platform work scheduled as free.

Meetings used as a substitute for written interfaces — everyone left “aligned,” nobody can explain ownership later.

Hand-offs that drop context so the receiving team re-learns the sender’s scars.

Hero bridges that mask missing contracts until attrition.

## The operating controls

Those failures map to controls. Install the smallest ones that make failure legible.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

## Concrete cases

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

## The costs of doing it right

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Continuity is the product of clear contracts — not of more conversation.

## The neighboring discipline

A durable approach borrows controls from Buy-versus-build judgment instead of inventing a parallel religion.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.

## Harnesses beat vibes

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- The meeting you should replace with a doc is the one that only redistributes status.
- Before joint delivery: publish the interface doc and the escalation path.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- Interfaces between teams beat shared Slack channels.
- For every shared system: name a primary owner per failure mode.

## What to carry forward

If collaboration feels expensive, check the interface before you hire more coordinators.

Continuity is the product. Tools and frameworks are optional accessories.

On **Interfaces between teams beat shared Slack channels**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
