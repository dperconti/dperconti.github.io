---
title: "Tool use as a privilege, not a default"
date: 2026-04-10T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

**Tool use as a privilege, not a default** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Agentic systems attracts demos faster than operability. The difference between useful and dangerous is almost always the harness: logs, budgets, privileges, and a human kill switch.

Logs, budgets, and kill switches are leadership tools — not only platform niceties.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Practices with enough detail to copy

Cadence beats intensity. The practice holds when it fits inside weeks people already live.

### 1. Practice

Require event emission for every tool call in production.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

### 2. Practice

Define stop-and-ask rules in writing; review them like any other safety control.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

### 3. Practice

Chaos-test retries: kill mid-flight and prove no duplicate side effects.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

### 4. Practice

Keep a named human owner for every agentic workflow that can change production state.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

### 5. Practice

Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

## What I refuse to romanticize

Stop doing these:

- Multi-agent theater without clear interfaces or ownership of outcomes.
- Retries without idempotency keys — duplicate side effects under partial failure.
- Hand-offs that drop context, so humans redo the work.
- Omnipotent agents that “just figure it out” until they take the wrong production action.

## How to hold the standard

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## The neighboring discipline

This work does not live alone. It couples to Engineering craft.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Owning outcomes when agents ship changes means the human merge still carries production accountability.
- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.
- Define stop-and-ask rules in writing; review them like any other safety control.
- Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded.
- Require event emission for every tool call in production.

## What to carry forward

Autonomy is earned with observability. Until then, keep the blast radius small.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Tool use as a privilege, not a default**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
