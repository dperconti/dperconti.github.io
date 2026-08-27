---
title: "Agent harnesses: logs, budgets, and kill switches"
date: 2025-08-06T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

I care about “Agent harnesses: logs, budgets, and kill switches” for one practical reason: it either leaves clearer ownership next week, or it was theater.

Multi-agent theater is specialization without interfaces. Useful specialization is narrow tools, clear side effects, and kill switches.

The rest develops that one idea with controls you can install and failure modes you can recognize.

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

Write one page while the decision is still warm — context, options, choice, owner, revisit date. Verbal alignment on **Agent harnesses: logs, budgets, and kill switches** evaporates under ordinary calendar pressure, and Slack archaeology is a poor substitute for a decision record.

## A scene from delivery

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

That scene is the thesis under calendar pressure. The response is not another status meeting — it is a control.

## Mechanisms

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Human resume paths need packaged context: what the agent tried, what failed, and what must not be retried. Empty hand-offs erase the value of automation.

When pressure rises, teams drop the unowned practice first. Put **Agent harnesses: logs, budgets, and kill switches** in the path of work — templates, checklists, review norms — or admit it was optional applause.

## Another texture

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

An agent opens twelve draft PRs overnight against a thin test suite. Review debt becomes the real cost. Budgets and merge gates would have been kinder than a demo.

## Tradeoffs

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Harnesses slow the first demo and save the first incident. Sequence matters.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

On **Agent harnesses: logs, budgets, and kill switches**, design the stop path before the autonomy story — budgets, allow-listed tools, audit logs, and a kill switch operators can reach without a war room. Autonomy is earned after those exist.

Useful specialization is narrow tools and clear interfaces — not personas arguing in a shared context window for theater value.

## Failure modes

Each of these is a missing control, not a personality problem:

- Multi-agent theater without clear interfaces or ownership of outcomes.
- No kill switch; stopping requires redeploying or begging a vendor.
- Retries without idempotency keys — duplicate side effects under partial failure.
- Omnipotent agents that “just figure it out” until they take the wrong production action.

## What to do this month

- Keep a named human owner for every agentic workflow that can change production state.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Every tool grant is a privilege expansion. Review tool allow-lists the way you review IAM — on a cadence, with least privilege as the default.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Budgets are product constraints. Token, time, and blast-radius limits keep agents from optimizing for activity over outcomes.

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

## Close

Autonomy is earned with observability. Until then, keep the blast radius small.

If someone new cannot explain **Agent harnesses: logs, budgets, and kill switches** from your artifacts in fifteen minutes, the practice is still private.
