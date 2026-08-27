---
title: "When a vendor becomes your process"
date: 2024-12-18T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

**When a vendor becomes your process** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

In an AI-accelerated world, Buy-versus-build judgment is less about typing speed and more about maintenance, integration debt, and who owns outcomes.

If you cannot unwind it, you did not buy a tool — you adopted a dependency with a logo.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## The objection, taken seriously

Another objection: we bought a tool for this. Tools without owners become expensive folklore.

Take the objection seriously. Lightweight is good. Invisible is not. The fix is shorter artifacts and clearer owners — not more ceremony.

## The operating controls

Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models. Copilots make greenfield look cheap until on-call inherits it.

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

## Scenes from delivery

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

A team builds a custom agent platform because it feels strategic. Six months later they maintain auth, quotas, and UI chrome instead of product differentiation. Commodity inference plus an in-house harness would have been enough.

No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.

## Tradeoffs worth naming

Do not build a program office for a one-team problem. Do not invent a framework brand. Do install the smallest control that makes failure legible.

Vendor features arrive fast. Your process still needs translation into owned runbooks.

Keeping harnesses in-house costs engineering time and preserves exit. Worth it for anything on the critical path.

Building custom feels like control and often buys maintenance. Buying feels like speed and often buys integration debt. Name the debt either way.

Building because pride, buying because fear — neither from ownership analysis.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Evaluate AI vendors like critical-path systems: SLOs, incident communication, subprocessors, kill switches, and data boundaries.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## The neighboring discipline

A durable approach borrows controls from Engineering leadership instead of inventing a parallel religion.

Clear drag before you add ceremony. Review queues, ambiguous interfaces, missing environments, and decision latency tax the team more than a missing standup. Leaders who invent process without clearing path create motion that feels like management and performs like delay.

Hiring celebrates architects who dazzle in system-design interviews but cannot leave a service operable on-call. Six months later, juniors inherit tribal knowledge. The leadership miss was selecting for theater over inheritance.

Separate sponsorship from surveillance. Be present enough to feel latency in decisions; distant enough that the work remains theirs. Stealing hard problems under the banner of help produces brittle teams and exhausted managers.

## Tempo changed; accountability did not

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- The new cost of custom is maintenance, not typing.
- Require eval and audit ownership to stay in-house for AI tooling.
- Every build: name the commodity you refused to buy and why ownership differs.
- Track integration debt items on the same board as features until retired.
- Build less, own more of the outcome: prefer thin custom layers over reimplementing commodity models.
- Annual: run a tabletop exit for one critical vendor.

## Close

If nobody can operate the failure mode, you rented a demo.

Continuity is the product. Tools and frameworks are optional accessories.

On **When a vendor becomes your process**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
