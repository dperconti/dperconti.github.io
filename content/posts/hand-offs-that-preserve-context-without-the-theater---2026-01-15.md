---
title: "Hand-offs that preserve context without the theater"
date: 2026-01-15T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

Without the theater, **Hand-offs that preserve context** is quieter: fewer frameworks, more written owners, less applause for motion.

Agentic systems attracts demos faster than operability. The difference between useful and dangerous is almost always the harness: logs, budgets, privileges, and a human kill switch.

Event-driven agentic workflows only help when every action emits an auditable event: what ran, why, with which tools, and what it changed.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## The objection, taken seriously

Another objection: we bought a tool for this. Tools without owners become expensive folklore.

Take the objection seriously. Lightweight is good. Invisible is not. The fix is shorter artifacts and clearer owners — not more ceremony.

## The operating controls

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

## Concrete cases

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

## The costs of doing it right

Do not build a program office for a one-team problem. Do not invent a framework brand. Do install the smallest control that makes failure legible.

Harnesses slow the first demo and save the first incident. Sequence matters.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Hand-offs that drop context, so humans redo the work.

## Principles under ordinary pressure

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Autonomy is earned with observability. Until then, keep the blast radius small.

## The neighboring discipline

Leaders who isolate the practice from AI in engineering workflows create beautiful local optima and expensive global failure.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

A team bans AI briefly after a bad merge, then reintroduces it without new controls. The ban was theater; the missing piece was verification and data boundaries.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Emit events for every tool call in production.
- Require event emission for every tool call in production.
- When an agent should stop and ask is a policy question, not a vibe.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.
- Define stop-and-ask rules in writing; review them like any other safety control.

## Close

Own the outcome. Let agents accelerate the safe middle of the workflow.

Continuity is the product. Tools and frameworks are optional accessories.

On **Hand-offs that preserve context**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
