---
title: "Exit strategies for bought AI tooling — note 236"
date: 2026-07-03T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

Another working note on **Exit strategies for bought AI tooling**: same thesis, sharper edges from recent delivery pressure.

Buy-versus-build judgment debates go wrong when they start from pride or fear instead of ownership: who runs the failure mode, and what does exit cost?

A purchased platform still needs an owner on-call for failure modes, data handling, and process fit.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## What load reveals

Load is the honest critic. Incidents, hiring spikes, and vendor outages reveal whether the practice was designed or merely announced.

No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.

No exit plan; switching costs discovered during an outage or a price hike.

Shadow purchases by teams that skip security and data review.

## Boring controls that compound

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

Under load, meetings multiply. Resist. Written interfaces, budgets, and kill switches scale better than status theater.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

## What you give up

Keeping harnesses in-house costs engineering time and preserves exit. Worth it for anything on the critical path.

Building custom feels like control and often buys maintenance. Buying feels like speed and often buys integration debt. Name the debt either way.

Vendor features arrive fast. Your process still needs translation into owned runbooks.

- Custom platforms that reinvent commodity chrome while underfunding the harness.
- Vendor success metrics replacing your product metrics.

## How to hold the standard

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## The neighboring discipline

A durable approach borrows controls from Engineering leadership instead of inventing a parallel religion.

Ceremony is optional; continuity is not. Keep the lightest process that still produces decisions, owners, and evidence. Delete the rest without guilt.

Hiring celebrates architects who dazzle in system-design interviews but cannot leave a service operable on-call. Six months later, juniors inherit tribal knowledge. The leadership miss was selecting for theater over inheritance.

Judgment under load is a practiced skill: triage, communicate, decide with incomplete information, and write down what you assumed. Managers who only practice judgment in calm weeks fail the weeks that matter.

## When models join the workflow

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Define allowed tools and data boundaries. Copilots without policy become shadow IT with autocomplete. Secrets, customer data, and authz logic need explicit rules.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every build: name the commodity you refused to buy and why ownership differs.
- Every purchase: name the internal owner and the failure-mode runbook.
- The new cost of custom is maintenance, not typing.
- Require eval and audit ownership to stay in-house for AI tooling.
- Annual: run a tabletop exit for one critical vendor.
- Evaluating vendors like critical-path systems includes asking how you pause them.

## Close

Harnesses outlive vendors. Invest accordingly.

Continuity is the product. Tools and frameworks are optional accessories.

On **Exit strategies for bought AI tooling**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
