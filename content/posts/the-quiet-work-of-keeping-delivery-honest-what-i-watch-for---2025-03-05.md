---
title: "The quiet work of keeping delivery honest: what I watch for"
date: 2025-03-05T05:00:00Z
categories:
  - Leadership
  - Teams
draft: false
---

What I watch for is not enthusiasm around **The quiet work of keeping delivery honest** — it is whether ownership, verification, and the next person’s path got clearer under ordinary calendar pressure.

Cross-team collaboration gets romanticized as “more communication.” Most teams already communicate constantly. What they lack is a published interface for work that crosses boundaries.

The collaboration tax is paid in ambiguity. Clarity is a kindness and a throughput strategy.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Design the loop

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

Hand-offs that drop context so the receiving team re-learns the sender’s scars.

Quarterly: delete channels and meetings that produce no decisions or artifacts.

When stuck: write the disagreement as options with tradeoffs; meet only to choose.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

## Tradeoffs worth naming

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

## Principles under ordinary pressure

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Continuity is the product of clear contracts — not of more conversation.

## The neighboring discipline

A durable approach borrows controls from Buy-versus-build judgment instead of inventing a parallel religion.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

## Tempo changed; accountability did not

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- For every shared system: name a primary owner per failure mode.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- Before joint delivery: publish the interface doc and the escalation path.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.

## What to carry forward

If collaboration feels expensive, check the interface before you hire more coordinators.

Continuity is the product. Tools and frameworks are optional accessories.

On **The quiet work of keeping delivery honest**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
