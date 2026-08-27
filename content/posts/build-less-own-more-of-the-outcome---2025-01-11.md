---
title: "Build less, own more of the outcome"
date: 2025-01-11T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

**Build less, own more of the outcome** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Buy-versus-build judgment should end with a named internal owner, a runbook, and an exit sketch — otherwise you rented a demo.

A purchased platform still needs an owner on-call for failure modes, data handling, and process fit.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## How the practice decays

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Custom platforms that reinvent commodity chrome while underfunding the harness.

No exit plan; switching costs discovered during an outage or a price hike.

Vendor success metrics replacing your product metrics.

Building because pride, buying because fear — neither from ownership analysis.

## The operating controls

Those failures map to controls. Install the smallest ones that make failure legible.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

## Concrete cases

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

## Tradeoffs worth naming

Vendor features arrive fast. Your process still needs translation into owned runbooks.

Keeping harnesses in-house costs engineering time and preserves exit. Worth it for anything on the critical path.

Building custom feels like control and often buys maintenance. Buying feels like speed and often buys integration debt. Name the debt either way.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Own the outcome. Buy time on commodities; keep judgment and exit under your roof.

## Where this couples to adjacent work

Leaders who isolate the practice from Engineering leadership create beautiful local optima and expensive global failure.

Continuity planning is leadership work even when the org chart is stable. Ask who can run the critical path if two people are out. If the answer is folklore, you have a continuity defect — schedule the teaching and the written runbook before the calendar forces it.

Hiring celebrates architects who dazzle in system-design interviews but cannot leave a service operable on-call. Six months later, juniors inherit tribal knowledge. The leadership miss was selecting for theater over inheritance.

Hands-on does not mean doing everyone’s job. It means knowing where the system will tax the team and being willing to renegotiate scope when reality asks for it. Stay close enough to feel texture; distant enough that people still own outcomes.

## Harnesses beat vibes

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Require eval and audit ownership to stay in-house for AI tooling.
- Track integration debt items on the same board as features until retired.
- Every purchase: name the internal owner and the failure-mode runbook.
- Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override.
- Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation.
- Annual: run a tabletop exit for one critical vendor.

## Close

If nobody can operate the failure mode, you rented a demo.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Build less, own more of the outcome**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
