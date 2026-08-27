---
title: "When an agent should stop and ask"
date: 2026-04-27T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

**When an agent should stop and ask** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Agentic systems attracts demos faster than operability. The difference between useful and dangerous is almost always the harness: logs, budgets, privileges, and a human kill switch.

Event-driven agentic workflows only help when every action emits an auditable event: what ran, why, with which tools, and what it changed.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## The objection, taken seriously

The counterargument is usually speed: we do not have time. That sentence often means you do not have time for the second failure.

Take the objection seriously. Lightweight is good. Invisible is not. The fix is shorter artifacts and clearer owners — not more ceremony.

## What to put in place before the announcement

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

## Concrete cases

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

## Tradeoffs worth naming

Do not build a program office for a one-team problem. Do not invent a framework brand. Do install the smallest control that makes failure legible.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Harnesses slow the first demo and save the first incident. Sequence matters.

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Hand-offs that drop context, so humans redo the work.

## Principles under ordinary pressure

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Own the outcome. Let agents accelerate the safe middle of the workflow.

## Do not silo the practice

This work does not live alone. It couples to Engineering craft.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.
- Keep a named human owner for every agentic workflow that can change production state.
- Require event emission for every tool call in production.
- Define stop-and-ask rules in writing; review them like any other safety control.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step.

## The point, again

Autonomy is earned with observability. Until then, keep the blast radius small.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **When an agent should stop and ask**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
