---
title: "When a vendor becomes your process: a field note"
date: 2026-07-19T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

A field note on **When a vendor becomes your process** should be inspectable next week. Mechanisms beat vibes.

Buy-versus-build judgment debates go wrong when they start from pride or fear instead of ownership: who runs the failure mode, and what does exit cost?

If you cannot unwind it, you did not buy a tool — you adopted a dependency with a logo.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## The objection, taken seriously

The counterargument is usually speed: we do not have time. That sentence often means you do not have time for the second failure.

Take the objection seriously. Lightweight is good. Invisible is not. The fix is shorter artifacts and clearer owners — not more ceremony.

## Boring controls that compound

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

## Scenes from delivery

No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

## The costs of doing it right

Do not build a program office for a one-team problem. Do not invent a framework brand. Do install the smallest control that makes failure legible.

Vendor features arrive fast. Your process still needs translation into owned runbooks.

Keeping harnesses in-house costs engineering time and preserves exit. Worth it for anything on the critical path.

Building custom feels like control and often buys maintenance. Buying feels like speed and often buys integration debt. Name the debt either way.

Custom platforms that reinvent commodity chrome while underfunding the harness.

## Principles under ordinary pressure

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Where this couples to adjacent work

This work does not live alone. It couples to AI in engineering workflows.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

A team celebrates merged suggestion counts. Escaped defects rise in authz paths. The metric was vanity; the fix is tagging assisted PRs and reviewing that subset for verification quality.

Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality — not counting accepted suggestions like arcade tickets.

## Harnesses beat vibes

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Start from ownership.
- Every purchase: name the internal owner and the failure-mode runbook.
- Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them.
- Every build: name the commodity you refused to buy and why ownership differs.
- Annual: run a tabletop exit for one critical vendor.
- Track integration debt items on the same board as features until retired.

## The point, again

If nobody can operate the failure mode, you rented a demo.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **When a vendor becomes your process**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
