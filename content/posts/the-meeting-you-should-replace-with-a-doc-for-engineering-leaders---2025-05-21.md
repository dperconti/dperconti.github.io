---
title: "The meeting you should replace with a doc for engineering leaders"
date: 2025-05-21T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

For engineering leaders, **The meeting you should replace with a doc** is a design problem: incentives, interfaces, and feedback loops — not a personality trait.

Cross-team collaboration gets romanticized as “more communication.” Most teams already communicate constantly. What they lack is a published interface for work that crosses boundaries.

Alignment is a protocol — written inputs, outputs, owners, and failure modes — not a recurring meeting that performs agreement.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Failure modes that teach

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Hand-offs that drop context so the receiving team re-learns the sender’s scars.

Hero bridges that mask missing contracts until attrition.

Meetings used as a substitute for written interfaces — everyone left “aligned,” nobody can explain ownership later.

Collaboration theater: more shared channels, same missing contracts.

## The operating controls

Those failures map to controls. Install the smallest ones that make failure legible.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

## Scenes from delivery

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

## The costs of doing it right

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## The neighboring discipline

A durable approach borrows controls from Buy-versus-build judgment instead of inventing a parallel religion.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill. Soft lock-in is still lock-in.

## Harnesses beat vibes

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Prefer async artifacts for continuity.
- For every shared system: name a primary owner per failure mode.
- Before joint delivery: publish the interface doc and the escalation path.
- Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.

## Close

Continuity is the product of clear contracts — not of more conversation.

Continuity is the product. Tools and frameworks are optional accessories.

On **The meeting you should replace with a doc**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
