---
title: "Build less, own more of the outcome under real load"
date: 2025-10-22T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

Under real load, **Build less, own more of the outcome** stops being a slogan. Queues, incidents, and half-finished migrations reveal whether the system was designed or performed.

Buy-versus-build judgment should end with a named internal owner, a runbook, and an exit sketch — otherwise you rented a demo.

A purchased platform still needs an owner on-call for failure modes, data handling, and process fit.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## What to put in place before the announcement

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.

Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill. Soft lock-in is still lock-in.

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

## Scenes from delivery

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

## How the practice decays

Each failure mode below is a missing control. Another meeting will not install it.

- No exit plan; switching costs discovered during an outage or a price hike.
- Building because pride, buying because fear — neither from ownership analysis.
- Vendor success metrics replacing your product metrics.
- Shadow purchases by teams that skip security and data review.

## Tradeoffs worth naming

Vendor features arrive fast. Your process still needs translation into owned runbooks.

Building custom feels like control and often buys maintenance. Buying feels like speed and often buys integration debt. Name the debt either way.

Keeping harnesses in-house costs engineering time and preserves exit. Worth it for anything on the critical path.

## How to hold the standard

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Own the outcome. Buy time on commodities; keep judgment and exit under your roof.

## Do not silo the practice

A durable approach borrows controls from AI in engineering workflows instead of inventing a parallel religion.

Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.

AI on the slide deck: logo, inevitability, no workflow. AI in the workflow: ticket → draft → harness checks → human verification note → review. Only one of those ships safely.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

## Harnesses beat vibes

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them.
- Require eval and audit ownership to stay in-house for AI tooling.
- Every build: name the commodity you refused to buy and why ownership differs.
- Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill.
- Annual: run a tabletop exit for one critical vendor.
- Every purchase: name the internal owner and the failure-mode runbook.

## The point, again

Harnesses outlive vendors. Invest accordingly.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Build less, own more of the outcome**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
