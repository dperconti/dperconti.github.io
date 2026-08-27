---
title: "The meeting you should replace with a doc"
date: 2024-10-07T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

**The meeting you should replace with a doc** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

When people say they need better Cross-team collaboration, I look for missing contracts: who consumes what, what “done” means, and who gets paged when the joint system lies.

The collaboration tax is paid in ambiguity. Clarity is a kindness and a throughput strategy.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Coaching lens

If the practice only lives in your head, you have a bus factor of one. Mentorship here means transferring judgment through artifacts.

Seniors need deliberate practice teaching: lead a review huddle, write the onboarding doc, own feedback quality. If you only reward personal velocity, teaching becomes unpaid overtime.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

Juniors need safe ownership of a thin slice and specific feedback. Seniors need sponsorship to teach — review quality, RFC authorship, incident lead — not only more tickets.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

## Practices with enough detail to copy

- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- Before joint delivery: publish the interface doc and the escalation path.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- For every shared system: name a primary owner per failure mode.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.

## How the practice decays

- Hand-offs that drop context so the receiving team re-learns the sender’s scars.
- Hero bridges that mask missing contracts until attrition.
- Meetings used as a substitute for written interfaces — everyone left “aligned,” nobody can explain ownership later.

## Operating principles

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Continuity is the product of clear contracts — not of more conversation.

## The neighboring discipline

This work does not live alone. It couples to Buy-versus-build judgment.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

## Harnesses beat vibes

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs.
- For every shared system: name a primary owner per failure mode.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- Prefer async artifacts for continuity.
- Before joint delivery: publish the interface doc and the escalation path.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.

## Close

If collaboration feels expensive, check the interface before you hire more coordinators.

Continuity is the product. Tools and frameworks are optional accessories.

On **The meeting you should replace with a doc**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
