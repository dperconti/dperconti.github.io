---
title: "Buy vs build when AI compresses build time: naming the owner"
date: 2025-01-31T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

Most teams endorse “Buy vs build when AI compresses build time” quickly and operationalize it slowly. A purchased platform still needs an owner on-call for failure modes, data handling, and process fit.

What follows stays on that claim: mechanisms, concrete scenes, and the failure modes that appear when the claim is ignored.

If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Keep harnesses you control — evals, policy, audit — even when you buy commodity inference or platforms. That is how judgment stays portable.

## Practices with enough detail to copy

Cadence beats intensity. These hold when they fit inside weeks people already live.

### 1

Require eval and audit ownership to stay in-house for AI tooling.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

### 2

Track integration debt items on the same board as features until retired.

Exit drills are cheap insurance. Export a sample, revoke a key, and time how long a degraded mode lasts before you need the vendor again.

### 3

Every build: name the commodity you refused to buy and why ownership differs.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

### 4

Every purchase: name the internal owner and the failure-mode runbook.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

## Scenes

A price hike arrives and nobody can list what data is trapped where. The exit sketch should have been written at purchase, not at panic.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

## Tradeoffs

Building custom feels like control and often buys maintenance. Buying feels like speed and often buys integration debt. Name the debt either way.

Keeping harnesses in-house costs engineering time and preserves exit. Worth it for anything on the critical path.

Vendor features arrive fast. Your process still needs translation into owned runbooks.

Resist the urge to expand scope into neighboring slogans. If a control does not make **Buy vs build when AI compresses build time** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

When pressure rises, teams drop the unowned practice first. Put **Buy vs build when AI compresses build time** in the path of work — templates, checklists, review norms — or admit it was optional applause.

## Failure modes

Each of these is a missing control, not a personality problem:

- Vendor success metrics replacing your product metrics.
- Custom platforms that reinvent commodity chrome while underfunding the harness.
- Building because pride, buying because fear — neither from ownership analysis.
- No exit plan; switching costs discovered during an outage or a price hike.

Keep eval suites and audit logs in systems you control even when inference is purchased. That is how you keep judgment portable.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

Integration debt belongs on the same board as features until retired. Otherwise procurement wins the quarter and on-call pays the year.

Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill. Soft lock-in is still lock-in.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

One more practice worth installing: Annual: run a tabletop exit for one critical vendor.

## Close

Harnesses outlive vendors. Invest accordingly.

If someone new cannot explain **Buy vs build when AI compresses build time** from your artifacts in fifteen minutes, the practice is still private.
