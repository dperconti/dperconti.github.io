---
title: "The new cost of custom: maintenance, not typing"
date: 2025-08-10T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

**The new cost of custom: maintenance, not typing** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Buy-versus-build judgment debates go wrong when they start from pride or fear instead of ownership: who runs the failure mode, and what does exit cost?

If you cannot unwind it, you did not buy a tool — you adopted a dependency with a logo.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## A week walking the practice

Imagine ordinary pressure — not a lab. Someone proposes a change that touches this practice. The first question is not which tool. It is who owns the outcome and what you will verify.

No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.

Day two is writing. A short decision record: context, options, choice, owner, revisit date. Without that page, the week becomes Slack archaeology.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill. Soft lock-in is still lock-in.

Midweek friction is expected. Clear drag — access, environments, unclear interfaces — before you add a status meeting that performs leadership.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

By week’s end, success is an operable slice: a log schema, an eval, a runbook, a kill switch, or a freshness owner — plus a human who can reverse the change.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

## What I refuse to romanticize

- Custom platforms that reinvent commodity chrome while underfunding the harness.
- No exit plan; switching costs discovered during an outage or a price hike.
- Vendor success metrics replacing your product metrics.

## What you give up

Keeping harnesses in-house costs engineering time and preserves exit. Worth it for anything on the critical path.

Vendor features arrive fast. Your process still needs translation into owned runbooks.

Building custom feels like control and often buys maintenance. Buying feels like speed and often buys integration debt. Name the debt either way.

## Operating principles

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Own the outcome. Buy time on commodities; keep judgment and exit under your roof.

## The neighboring discipline

A durable approach borrows controls from Agentic systems instead of inventing a parallel religion.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

## When models join the workflow

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Teach distrust of fluent wrongness. Models sound senior. Tests, invariants, and threat models still decide truth.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models.
- Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill.
- Require eval and audit ownership to stay in-house for AI tooling.
- Annual: run a tabletop exit for one critical vendor.
- Every build: name the commodity you refused to buy and why ownership differs.
- Every purchase: name the internal owner and the failure-mode runbook.

## Close

If nobody can operate the failure mode, you rented a demo.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **The new cost of custom: maintenance, not typing**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
