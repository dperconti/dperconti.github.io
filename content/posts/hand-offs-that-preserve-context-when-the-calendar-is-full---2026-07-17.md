---
title: "Hand-offs that preserve context: evidence over enthusiasm"
date: 2026-07-17T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

Hand-offs that preserve context attracts demos faster than operability. The difference between useful and dangerous is almost always the harness: logs, budgets, privileges, and a human kill switch.

Logs, budgets, and kill switches are leadership tools — not only platform niceties.

The rest develops that one idea with controls you can install and failure modes you can recognize.

Write one page while the decision is still warm — context, options, choice, owner, revisit date. Verbal alignment on **Hand-offs that preserve context** evaporates under ordinary calendar pressure, and Slack archaeology is a poor substitute for a decision record.

Useful specialization is narrow tools and clear interfaces — not personas arguing in a shared context window for theater value.

## Practices with enough detail to copy

Cadence beats intensity. These hold when they fit inside weeks people already live.

### 1

Keep a named human owner for every agentic workflow that can change production state.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

### 2

Require event emission for every tool call in production.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

### 3

Chaos-test retries: kill mid-flight and prove no duplicate side effects.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

### 4

Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Budgets are product constraints. Token, time, and blast-radius limits keep agents from optimizing for activity over outcomes.

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

## Scenes

An agent opens twelve draft PRs overnight against a thin test suite. Review debt becomes the real cost. Budgets and merge gates would have been kinder than a demo.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

## Tradeoffs

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Harnesses slow the first demo and save the first incident. Sequence matters.

Measure what you claim to care about. If **Hand-offs that preserve context** only appears in kickoff slides and never in review, incident, or planning artifacts, it is branding. Put a verification signal where people already look.

Side effects need the same discipline as payments: idempotency, clear hand-offs, and a human who still owns production outcomes. Retries without keys turn partial failure into duplicate harm.

## Failure modes

Each of these is a missing control, not a personality problem:

- Hand-offs that drop context, so humans redo the work.
- Multi-agent theater without clear interfaces or ownership of outcomes.
- Retries without idempotency keys — duplicate side effects under partial failure.
- Omnipotent agents that “just figure it out” until they take the wrong production action.

Every tool grant is a privilege expansion. Review tool allow-lists the way you review IAM — on a cadence, with least privilege as the default.

Human resume paths need packaged context: what the agent tried, what failed, and what must not be retried. Empty hand-offs erase the value of automation.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

## Close

Autonomy is earned with observability. Until then, keep the blast radius small.

Carry the claim as a habit, not a brand: **Hand-offs that preserve context** either compounds ownership or it was applause.
