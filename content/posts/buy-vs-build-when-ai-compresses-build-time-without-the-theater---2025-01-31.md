---
title: "Buy vs build when AI compresses build time without the theater"
date: 2025-01-31T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

Without the theater, **Buy vs build when AI compresses build time** is quieter: fewer frameworks, more written owners, less applause for motion.

Buy-versus-build judgment should end with a named internal owner, a runbook, and an exit sketch — otherwise you rented a demo.

Buy commodities. Build the harness that makes your judgment visible: policy, evals, audit, and exit.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Practices with enough detail to copy

Cadence beats intensity. The practice holds when it fits inside weeks people already live.

### 1. Practice

Annual: run a tabletop exit for one critical vendor.

Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill. Soft lock-in is still lock-in.

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

### 2. Practice

Every purchase: name the internal owner and the failure-mode runbook.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

### 3. Practice

Require eval and audit ownership to stay in-house for AI tooling.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

### 4. Practice

Track integration debt items on the same board as features until retired.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

### 5. Practice

Every build: name the commodity you refused to buy and why ownership differs.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

## What I refuse to romanticize

Stop doing these:

- No exit plan; switching costs discovered during an outage or a price hike.
- Custom platforms that reinvent commodity chrome while underfunding the harness.
- Building because pride, buying because fear — neither from ownership analysis.
- Vendor success metrics replacing your product metrics.

## Principles under ordinary pressure

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

If nobody can operate the failure mode, you rented a demo.

## Do not silo the practice

Leaders who isolate the practice from AI in engineering workflows create beautiful local optima and expensive global failure.

Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.

AI on the slide deck: logo, inevitability, no workflow. AI in the workflow: ticket → draft → harness checks → human verification note → review. Only one of those ships safely.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

## When models join the workflow

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every purchase: name the internal owner and the failure-mode runbook.
- Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill.
- Track integration debt items on the same board as features until retired.
- Every build: name the commodity you refused to buy and why ownership differs.
- Require eval and audit ownership to stay in-house for AI tooling.
- Annual: run a tabletop exit for one critical vendor.

## What to carry forward

Own the outcome. Buy time on commodities; keep judgment and exit under your roof.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Buy vs build when AI compresses build time**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
