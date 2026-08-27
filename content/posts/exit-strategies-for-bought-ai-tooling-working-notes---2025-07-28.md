---
title: "Exit strategies for bought AI tooling — working notes"
date: 2025-07-28T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

A field note on **Exit strategies for bought AI tooling** should be inspectable next week. Mechanisms beat vibes.

Buy-versus-build judgment debates go wrong when they start from pride or fear instead of ownership: who runs the failure mode, and what does exit cost?

A purchased platform still needs an owner on-call for failure modes, data handling, and process fit.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Operating rhythm

Cadence beats intensity. The practice holds when it fits inside weeks people already live.

### 1. Practice

Track integration debt items on the same board as features until retired.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.

### 2. Practice

Every build: name the commodity you refused to buy and why ownership differs.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

### 3. Practice

Every purchase: name the internal owner and the failure-mode runbook.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

### 4. Practice

Require eval and audit ownership to stay in-house for AI tooling.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

### 5. Practice

Annual: run a tabletop exit for one critical vendor.

Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill. Soft lock-in is still lock-in.

## What I refuse to romanticize

Stop doing these:

- No exit plan; switching costs discovered during an outage or a price hike.
- Custom platforms that reinvent commodity chrome while underfunding the harness.
- Building because pride, buying because fear — neither from ownership analysis.
- Shadow purchases by teams that skip security and data review.

## Operating principles

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill. Soft lock-in is still lock-in.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Own the outcome. Buy time on commodities; keep judgment and exit under your roof.

## The neighboring discipline

A durable approach borrows controls from AI in engineering workflows instead of inventing a parallel religion.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

A team celebrates merged suggestion counts. Escaped defects rise in authz paths. The metric was vanity; the fix is tagging assisted PRs and reviewing that subset for verification quality.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

## Tempo changed; accountability did not

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every build: name the commodity you refused to buy and why ownership differs.
- Annual: run a tabletop exit for one critical vendor.
- Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries..
- Track integration debt items on the same board as features until retired.
- Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override.
- Require eval and audit ownership to stay in-house for AI tooling.

## What to carry forward

If nobody can operate the failure mode, you rented a demo.

Continuity is the product. Tools and frameworks are optional accessories.

On **Exit strategies for bought AI tooling**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
