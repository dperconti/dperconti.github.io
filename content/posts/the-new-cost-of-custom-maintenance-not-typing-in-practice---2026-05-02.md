---
title: "The new cost of custom: maintenance, not typing in practice"
date: 2026-05-02T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

In practice, **The new cost of custom: maintenance, not typing** is a sequence of controls you can name — not a philosophy deck.

Buy-versus-build judgment debates go wrong when they start from pride or fear instead of ownership: who runs the failure mode, and what does exit cost?

A purchased platform still needs an owner on-call for failure modes, data handling, and process fit.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Pressure test

Load is the honest critic. Incidents, hiring spikes, and vendor outages reveal whether the practice was designed or merely announced.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

Custom platforms that reinvent commodity chrome while underfunding the harness.

Shadow purchases by teams that skip security and data review.

## What to put in place before the announcement

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

Under load, meetings multiply. Resist. Written interfaces, budgets, and kill switches scale better than status theater.

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

## The costs of doing it right

Keeping harnesses in-house costs engineering time and preserves exit. Worth it for anything on the critical path.

Building custom feels like control and often buys maintenance. Buying feels like speed and often buys integration debt. Name the debt either way.

Vendor features arrive fast. Your process still needs translation into owned runbooks.

- Vendor success metrics replacing your product metrics.
- Building because pride, buying because fear — neither from ownership analysis.

## Operating principles

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill. Soft lock-in is still lock-in.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## The neighboring discipline

Leaders who isolate the practice from Agentic systems create beautiful local optima and expensive global failure.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

## Tempo changed; accountability did not

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Require eval and audit ownership to stay in-house for AI tooling.
- Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation.
- Every build: name the commodity you refused to buy and why ownership differs.
- Every purchase: name the internal owner and the failure-mode runbook.
- Track integration debt items on the same board as features until retired.
- Annual: run a tabletop exit for one critical vendor.

## What to carry forward

If nobody can operate the failure mode, you rented a demo.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **The new cost of custom: maintenance, not typing**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
