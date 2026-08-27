---
title: "Buy vs build when AI compresses build time in practice"
date: 2026-02-02T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

In practice, **Buy vs build when AI compresses build time** is a sequence of controls you can name — not a philosophy deck.

Buy-versus-build judgment should end with a named internal owner, a runbook, and an exit sketch — otherwise you rented a demo.

A purchased platform still needs an owner on-call for failure modes, data handling, and process fit.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Pressure test

Load is the honest critic. Incidents, hiring spikes, and vendor outages reveal whether the practice was designed or merely announced.

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

Custom platforms that reinvent commodity chrome while underfunding the harness.

Shadow purchases by teams that skip security and data review.

## What to put in place before the announcement

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

Under load, meetings multiply. Resist. Written interfaces, budgets, and kill switches scale better than status theater.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

## The costs of doing it right

Vendor features arrive fast. Your process still needs translation into owned runbooks.

Keeping harnesses in-house costs engineering time and preserves exit. Worth it for anything on the critical path.

Building custom feels like control and often buys maintenance. Buying feels like speed and often buys integration debt. Name the debt either way.

- Building because pride, buying because fear — neither from ownership analysis.
- No exit plan; switching costs discovered during an outage or a price hike.

## Principles under ordinary pressure

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.

No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## Do not silo the practice

A durable approach borrows controls from Agentic systems instead of inventing a parallel religion.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

## Harnesses beat vibes

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every purchase: name the internal owner and the failure-mode runbook.
- Track integration debt items on the same board as features until retired.
- Require eval and audit ownership to stay in-house for AI tooling.
- Annual: run a tabletop exit for one critical vendor.
- Every build: name the commodity you refused to buy and why ownership differs.
- The new cost of custom is maintenance, not typing.

## The point, again

If nobody can operate the failure mode, you rented a demo.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Buy vs build when AI compresses build time**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
