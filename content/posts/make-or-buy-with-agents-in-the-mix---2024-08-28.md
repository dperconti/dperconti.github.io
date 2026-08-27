---
title: "Make-or-buy with agents in the mix"
date: 2024-08-28T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

**Make-or-buy with agents in the mix** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

If you are shipping Agentic systems, design the stop path before the autonomy story. Teams remember the first uncontrolled side effect longer than the first clever demo.

Multi-agent theater is specialization without interfaces. Useful specialization is narrow tools, clear side effects, and kill switches.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## The seductive counterargument

The counterargument is usually speed: we do not have time. That sentence often means you do not have time for the second failure.

Take the objection seriously. Lightweight is good. Invisible is not. The fix is shorter artifacts and clearer owners — not more ceremony.

## The operating controls

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

## Concrete cases

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

## The costs of doing it right

Do not build a program office for a one-team problem. Do not invent a framework brand. Do install the smallest control that makes failure legible.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Harnesses slow the first demo and save the first incident. Sequence matters.

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Retries without idempotency keys — duplicate side effects under partial failure.

## How to hold the standard

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Own the outcome. Let agents accelerate the safe middle of the workflow.

## Do not silo the practice

Leaders who isolate the practice from AI in engineering workflows create beautiful local optima and expensive global failure.

Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.

Someone pastes a production schema into a consumer model tool to “move faster.” Leadership had no published data boundary. That is not an individual ethics failure first — it is a missing control.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Owning outcomes when agents ship changes means the human merge still carries production accountability.
- Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value..
- Require event emission for every tool call in production.
- Keep a named human owner for every agentic workflow that can change production state.
- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.

## The point, again

Autonomy is earned with observability. Until then, keep the blast radius small.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Make-or-buy with agents in the mix**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
