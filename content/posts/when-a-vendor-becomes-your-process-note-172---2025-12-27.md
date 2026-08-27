---
title: "When a vendor becomes your process — note 172"
date: 2025-12-27T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

Another working note on **When a vendor becomes your process**: same thesis, sharper edges from recent delivery pressure.

Buy-versus-build judgment should end with a named internal owner, a runbook, and an exit sketch — otherwise you rented a demo.

AI compresses the typing cost of building. It does not compress the ownership cost of running what you built.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Interfaces, feedback, ownership

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

No exit plan; switching costs discovered during an outage or a price hike.

Require eval and audit ownership to stay in-house for AI tooling.

Annual: run a tabletop exit for one critical vendor.

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

## Tradeoffs worth naming

Building custom feels like control and often buys maintenance. Buying feels like speed and often buys integration debt. Name the debt either way.

Vendor features arrive fast. Your process still needs translation into owned runbooks.

Keeping harnesses in-house costs engineering time and preserves exit. Worth it for anything on the critical path.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

## How to hold the standard

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

If nobody can operate the failure mode, you rented a demo.

## Do not silo the practice

Leaders who isolate the practice from AI in engineering workflows create beautiful local optima and expensive global failure.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

Someone pastes a production schema into a consumer model tool to “move faster.” Leadership had no published data boundary. That is not an individual ethics failure first — it is a missing control.

Shared harnesses beat private prompt folklore. If the only way to do it “right” lives in one engineer’s chat history, you do not have a practice.

## Tempo changed; accountability did not

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- When a vendor becomes your process, document the process in your words.
- Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them.
- Every build: name the commodity you refused to buy and why ownership differs.
- Track integration debt items on the same board as features until retired.
- Require eval and audit ownership to stay in-house for AI tooling.
- Every purchase: name the internal owner and the failure-mode runbook.

## The point, again

Own the outcome. Buy time on commodities; keep judgment and exit under your roof.

Continuity is the product. Tools and frameworks are optional accessories.

On **When a vendor becomes your process**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
