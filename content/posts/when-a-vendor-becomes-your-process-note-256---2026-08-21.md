---
title: "When a vendor becomes your process — note 256"
date: 2026-08-21T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

Another working note on **When a vendor becomes your process**: same thesis, sharper edges from recent delivery pressure.

In an AI-accelerated world, Buy-versus-build judgment is less about typing speed and more about maintenance, integration debt, and who owns outcomes.

Buy commodities. Build the harness that makes your judgment visible: policy, evals, audit, and exit.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Systems view

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill. Soft lock-in is still lock-in.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.

Vendor success metrics replacing your product metrics.

Require eval and audit ownership to stay in-house for AI tooling.

Every purchase: name the internal owner and the failure-mode runbook.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

## Tradeoffs worth naming

Vendor features arrive fast. Your process still needs translation into owned runbooks.

Building custom feels like control and often buys maintenance. Buying feels like speed and often buys integration debt. Name the debt either way.

Keeping harnesses in-house costs engineering time and preserves exit. Worth it for anything on the critical path.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

## Principles under ordinary pressure

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Own the outcome. Buy time on commodities; keep judgment and exit under your roof.

## Do not silo the practice

A durable approach borrows controls from Agentic systems instead of inventing a parallel religion.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

## Harnesses beat vibes

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every purchase: name the internal owner and the failure-mode runbook.
- Annual: run a tabletop exit for one critical vendor.
- Start from ownership.
- Require eval and audit ownership to stay in-house for AI tooling.
- Track integration debt items on the same board as features until retired.
- Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill.

## What to carry forward

If nobody can operate the failure mode, you rented a demo.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **When a vendor becomes your process**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
