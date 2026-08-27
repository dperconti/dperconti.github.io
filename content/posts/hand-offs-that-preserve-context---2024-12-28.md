---
title: "Hand-offs that preserve context"
date: 2024-12-28T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

The useful version of “Hand-offs that preserve context” is narrower than the slogan: Multi-agent theater is specialization without interfaces. Useful specialization is narrow tools, clear side effects, and kill switches.

The rest develops that one idea with controls you can install and failure modes you can recognize.

Useful specialization is narrow tools and clear interfaces — not personas arguing in a shared context window for theater value.

For **Hand-offs that preserve context**, the inheritance test is blunt: after a week, can someone outside the original room explain what changed, who owns it, and how you will know if it breaks? If the answer depends on hallway memory, you still have a story — not a practice.

## What fails when you skip it

Teams already have scars. Naming the failure modes precisely is faster than inventing a framework brand.

Omnipotent agents that “just figure it out” until they take the wrong production action.

No kill switch; stopping requires redeploying or begging a vendor.

Hand-offs that drop context, so humans redo the work.

Multi-agent theater without clear interfaces or ownership of outcomes.

## Controls that answer those failures

Budgets are product constraints. Token, time, and blast-radius limits keep agents from optimizing for activity over outcomes.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Human resume paths need packaged context: what the agent tried, what failed, and what must not be retried. Empty hand-offs erase the value of automation.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Side effects need the same discipline as payments: idempotency, clear hand-offs, and a human who still owns production outcomes. Retries without keys turn partial failure into duplicate harm.

## A concrete scene

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

## Tradeoffs

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Harnesses slow the first demo and save the first incident. Sequence matters.

On **Hand-offs that preserve context**, design the stop path before the autonomy story — budgets, allow-listed tools, audit logs, and a kill switch operators can reach without a war room. Autonomy is earned after those exist.

Write one page while the decision is still warm — context, options, choice, owner, revisit date. Verbal alignment on **Hand-offs that preserve context** evaporates under ordinary calendar pressure, and Slack archaeology is a poor substitute for a decision record.

## What to do this month

- Define stop-and-ask rules in writing; review them like any other safety control.
- Require event emission for every tool call in production.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Keep a named human owner for every agentic workflow that can change production state.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Every tool grant is a privilege expansion. Review tool allow-lists the way you review IAM — on a cadence, with least privilege as the default.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

## Close

Autonomy is earned with observability. Until then, keep the blast radius small.

If someone new cannot explain **Hand-offs that preserve context** from your artifacts in fifteen minutes, the practice is still private.
