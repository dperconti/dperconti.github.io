---
title: "When a vendor becomes your process: what I watch for"
date: 2025-05-07T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

What I watch for is not enthusiasm around **When a vendor becomes your process** — it is whether ownership, verification, and the next person’s path got clearer under ordinary calendar pressure.

Buy-versus-build judgment should end with a named internal owner, a runbook, and an exit sketch — otherwise you rented a demo.

A purchased platform still needs an owner on-call for failure modes, data handling, and process fit.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Sequence under ordinary pressure

Imagine ordinary pressure — not a lab. Someone proposes a change that touches this practice. The first question is not which tool. It is who owns the outcome and what you will verify.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

Day two is writing. A short decision record: context, options, choice, owner, revisit date. Without that page, the week becomes Slack archaeology.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

Midweek friction is expected. Clear drag — access, environments, unclear interfaces — before you add a status meeting that performs leadership.

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

By week’s end, success is an operable slice: a log schema, an eval, a runbook, a kill switch, or a freshness owner — plus a human who can reverse the change.

No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

## What I refuse to romanticize

- Shadow purchases by teams that skip security and data review.
- Building because pride, buying because fear — neither from ownership analysis.
- Vendor success metrics replacing your product metrics.

## Tradeoffs worth naming

Keeping harnesses in-house costs engineering time and preserves exit. Worth it for anything on the critical path.

Building custom feels like control and often buys maintenance. Buying feels like speed and often buys integration debt. Name the debt either way.

Vendor features arrive fast. Your process still needs translation into owned runbooks.

## Principles under ordinary pressure

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Own the outcome. Buy time on commodities; keep judgment and exit under your roof.

## Where this couples to adjacent work

Leaders who isolate the practice from AI in engineering workflows create beautiful local optima and expensive global failure.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

Someone pastes a production schema into a consumer model tool to “move faster.” Leadership had no published data boundary. That is not an individual ethics failure first — it is a missing control.

Shared harnesses beat private prompt folklore. If the only way to do it “right” lives in one engineer’s chat history, you do not have a practice.

## Tempo changed; accountability did not

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased..
- Every purchase: name the internal owner and the failure-mode runbook.
- Track integration debt items on the same board as features until retired.
- Every build: name the commodity you refused to buy and why ownership differs.
- Require eval and audit ownership to stay in-house for AI tooling.
- Annual: run a tabletop exit for one critical vendor.

## The point, again

Harnesses outlive vendors. Invest accordingly.

Continuity is the product. Tools and frameworks are optional accessories.

On **When a vendor becomes your process**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
