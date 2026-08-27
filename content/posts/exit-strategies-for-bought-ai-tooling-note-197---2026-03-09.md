---
title: "Exit strategies for bought AI tooling — note 197"
date: 2026-03-09T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

Another working note on **Exit strategies for bought AI tooling**: same thesis, sharper edges from recent delivery pressure.

In an AI-accelerated world, Buy-versus-build judgment is less about typing speed and more about maintenance, integration debt, and who owns outcomes.

If you cannot unwind it, you did not buy a tool — you adopted a dependency with a logo.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Design for the bad day

Load is the honest critic. Incidents, hiring spikes, and vendor outages reveal whether the practice was designed or merely announced.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

Building because pride, buying because fear — neither from ownership analysis.

Custom platforms that reinvent commodity chrome while underfunding the harness.

## What to put in place before the announcement

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill. Soft lock-in is still lock-in.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

Under load, meetings multiply. Resist. Written interfaces, budgets, and kill switches scale better than status theater.

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

## What you give up

Keeping harnesses in-house costs engineering time and preserves exit. Worth it for anything on the critical path.

Building custom feels like control and often buys maintenance. Buying feels like speed and often buys integration debt. Name the debt either way.

Vendor features arrive fast. Your process still needs translation into owned runbooks.

- Vendor success metrics replacing your product metrics.
- No exit plan; switching costs discovered during an outage or a price hike.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill. Soft lock-in is still lock-in.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Own the outcome. Buy time on commodities; keep judgment and exit under your roof.

## Where this couples to adjacent work

A durable approach borrows controls from Agentic systems instead of inventing a parallel religion.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

## Harnesses beat vibes

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every build: name the commodity you refused to buy and why ownership differs.
- Annual: run a tabletop exit for one critical vendor.
- Every purchase: name the internal owner and the failure-mode runbook.
- Require eval and audit ownership to stay in-house for AI tooling.
- Track integration debt items on the same board as features until retired.
- Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries..

## Close

Harnesses outlive vendors. Invest accordingly.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Exit strategies for bought AI tooling**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
