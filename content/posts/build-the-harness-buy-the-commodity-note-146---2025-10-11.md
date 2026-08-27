---
title: "Build the harness, buy the commodity: the operable version"
date: 2025-10-11T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

“Build the harness, buy the commodity” stops being abstract the moment you ask who gets paged when it fails.

Multi-agent theater is specialization without interfaces. Useful specialization is narrow tools, clear side effects, and kill switches.

What follows stays on that claim: mechanisms, concrete scenes, and the failure modes that appear when the claim is ignored.

Measure what you claim to care about. If **Build the harness, buy the commodity** only appears in kickoff slides and never in review, incident, or planning artifacts, it is branding. Put a verification signal where people already look.

Write one page while the decision is still warm — context, options, choice, owner, revisit date. Verbal alignment on **Build the harness, buy the commodity** evaporates under ordinary calendar pressure, and Slack archaeology is a poor substitute for a decision record.

## Practices with enough detail to copy

Cadence beats intensity. These hold when they fit inside weeks people already live.

### 1

Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

### 2

Define stop-and-ask rules in writing; review them like any other safety control.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

### 3

Chaos-test retries: kill mid-flight and prove no duplicate side effects.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

### 4

Require event emission for every tool call in production.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Budgets are product constraints. Token, time, and blast-radius limits keep agents from optimizing for activity over outcomes.

On **Build the harness, buy the commodity**, design the stop path before the autonomy story — budgets, allow-listed tools, audit logs, and a kill switch operators can reach without a war room. Autonomy is earned after those exist.

## Scenes

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

An agent opens twelve draft PRs overnight against a thin test suite. Review debt becomes the real cost. Budgets and merge gates would have been kinder than a demo.

## Tradeoffs

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Harnesses slow the first demo and save the first incident. Sequence matters.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Side effects need the same discipline as payments: idempotency, clear hand-offs, and a human who still owns production outcomes. Retries without keys turn partial failure into duplicate harm.

Useful specialization is narrow tools and clear interfaces — not personas arguing in a shared context window for theater value.

## Failure modes

Each of these is a missing control, not a personality problem:

- Hand-offs that drop context, so humans redo the work.
- No kill switch; stopping requires redeploying or begging a vendor.
- Retries without idempotency keys — duplicate side effects under partial failure.
- Omnipotent agents that “just figure it out” until they take the wrong production action.

Human resume paths need packaged context: what the agent tried, what failed, and what must not be retried. Empty hand-offs erase the value of automation.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Every tool grant is a privilege expansion. Review tool allow-lists the way you review IAM — on a cadence, with least privilege as the default.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

## Close

Autonomy is earned with observability. Until then, keep the blast radius small.

Carry the claim as a habit, not a brand: **Build the harness, buy the commodity** either compounds ownership or it was applause.
