---
title: "The new cost of custom: maintenance, not typing"
date: 2025-08-10T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

“The new cost of custom: maintenance, not typing” stops being abstract the moment you ask who gets paged when it fails.

AI compresses the typing cost of building. It does not compress the ownership cost of running what you built.

I will stay on this thesis — no adjacent manifesto, no tour of every neighboring discipline.

Measure what you claim to care about. If **The new cost of custom: maintenance, not typing** only appears in kickoff slides and never in review, incident, or planning artifacts, it is branding. Put a verification signal where people already look.

For **The new cost of custom: maintenance, not typing**, the inheritance test is blunt: after a week, can someone outside the original room explain what changed, who owns it, and how you will know if it breaks? If the answer depends on hallway memory, you still have a story — not a practice.

## What fails when you skip it

Teams already have scars. Naming the failure modes precisely is faster than inventing a framework brand.

Vendor success metrics replacing your product metrics.

Building because pride, buying because fear — neither from ownership analysis.

No exit plan; switching costs discovered during an outage or a price hike.

Shadow purchases by teams that skip security and data review.

## Controls that answer those failures

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

Resist the urge to expand scope into neighboring slogans. If a control does not make **The new cost of custom: maintenance, not typing** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

## A concrete scene

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.

A price hike arrives and nobody can list what data is trapped where. The exit sketch should have been written at purchase, not at panic.

## Tradeoffs

Keeping harnesses in-house costs engineering time and preserves exit. Worth it for anything on the critical path.

Vendor features arrive fast. Your process still needs translation into owned runbooks.

Building custom feels like control and often buys maintenance. Buying feels like speed and often buys integration debt. Name the debt either way.

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

Keep harnesses you control — evals, policy, audit — even when you buy commodity inference or platforms. That is how judgment stays portable.

## What to do this month

- Annual: run a tabletop exit for one critical vendor.
- Require eval and audit ownership to stay in-house for AI tooling.
- Every build: name the commodity you refused to buy and why ownership differs.
- Every purchase: name the internal owner and the failure-mode runbook.

Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.

Exit drills are cheap insurance. Export a sample, revoke a key, and time how long a degraded mode lasts before you need the vendor again.

Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill. Soft lock-in is still lock-in.

Keep eval suites and audit logs in systems you control even when inference is purchased. That is how you keep judgment portable.

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

Integration debt belongs on the same board as features until retired. Otherwise procurement wins the quarter and on-call pays the year.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

## Close

Harnesses outlive vendors. Invest accordingly.

If someone new cannot explain **The new cost of custom: maintenance, not typing** from your artifacts in fifteen minutes, the practice is still private.
