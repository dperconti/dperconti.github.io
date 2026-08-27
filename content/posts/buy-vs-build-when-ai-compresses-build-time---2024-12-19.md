---
title: "Buy vs build when AI compresses build time"
date: 2024-12-19T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

**Buy vs build when AI compresses build time** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

In an AI-accelerated world, Buy-versus-build judgment is less about typing speed and more about maintenance, integration debt, and who owns outcomes.

A purchased platform still needs an owner on-call for failure modes, data handling, and process fit.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## A week walking the practice

Imagine ordinary pressure — not a lab. Someone proposes a change that touches this practice. The first question is not which tool. It is who owns the outcome and what you will verify.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

Day two is writing. A short decision record: context, options, choice, owner, revisit date. Without that page, the week becomes Slack archaeology.

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Midweek friction is expected. Clear drag — access, environments, unclear interfaces — before you add a status meeting that performs leadership.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

By week’s end, success is an operable slice: a log schema, an eval, a runbook, a kill switch, or a freshness owner — plus a human who can reverse the change.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

## How the practice decays

- Custom platforms that reinvent commodity chrome while underfunding the harness.
- No exit plan; switching costs discovered during an outage or a price hike.
- Shadow purchases by teams that skip security and data review.

## What you give up

Keeping harnesses in-house costs engineering time and preserves exit. Worth it for anything on the critical path.

Vendor features arrive fast. Your process still needs translation into owned runbooks.

Building custom feels like control and often buys maintenance. Buying feels like speed and often buys integration debt. Name the debt either way.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Do not silo the practice

This work does not live alone. It couples to AI in engineering workflows.

Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.

Someone pastes a production schema into a consumer model tool to “move faster.” Leadership had no published data boundary. That is not an individual ethics failure first — it is a missing control.

Teach distrust of fluent wrongness. Models sound senior. Tests, invariants, and threat models still decide truth.

## When models join the workflow

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Start from ownership.
- Every purchase: name the internal owner and the failure-mode runbook.
- Every build: name the commodity you refused to buy and why ownership differs.
- The new cost of custom is maintenance, not typing.
- Track integration debt items on the same board as features until retired.
- Annual: run a tabletop exit for one critical vendor.

## The point, again

Harnesses outlive vendors. Invest accordingly.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Buy vs build when AI compresses build time**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
