---
title: "Hand-offs that preserve context when the calendar is full"
date: 2026-07-17T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

When the calendar is full, **Hand-offs that preserve context** only survives inside short loops. Long programs without owners become status machines.

Agentic systems attracts demos faster than operability. The difference between useful and dangerous is almost always the harness: logs, budgets, privileges, and a human kill switch.

Multi-agent theater is specialization without interfaces. Useful specialization is narrow tools, clear side effects, and kill switches.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## What I refuse to romanticize

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Retries without idempotency keys — duplicate side effects under partial failure.

Multi-agent theater without clear interfaces or ownership of outcomes.

Omnipotent agents that “just figure it out” until they take the wrong production action.

No kill switch; stopping requires redeploying or begging a vendor.

## Boring controls that compound

Those failures map to controls. Install the smallest ones that make failure legible.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

## Texture from the work

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

## Tradeoffs worth naming

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Harnesses slow the first demo and save the first incident. Sequence matters.

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Autonomy is earned with observability. Until then, keep the blast radius small.

## Where this couples to adjacent work

This work does not live alone. It couples to Buy-versus-build judgment.

Write exit strategies for bought AI tooling before procurement: data export, prompt/eval portability, and a 90-day unwind drill. Soft lock-in is still lock-in.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room.
- Define stop-and-ask rules in writing; review them like any other safety control.
- Require event emission for every tool call in production.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Owning outcomes when agents ship changes means the human merge still carries production accountability.
- Keep a named human owner for every agentic workflow that can change production state.

## Close

Own the outcome. Let agents accelerate the safe middle of the workflow.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Hand-offs that preserve context**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
