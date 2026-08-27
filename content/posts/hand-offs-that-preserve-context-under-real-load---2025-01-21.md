---
title: "Hand-offs that preserve context: naming the owner"
date: 2025-01-21T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

Most teams endorse “Hand-offs that preserve context” quickly and operationalize it slowly. Logs, budgets, and kill switches are leadership tools — not only platform niceties.

What follows stays on that claim: mechanisms, concrete scenes, and the failure modes that appear when the claim is ignored.

Useful specialization is narrow tools and clear interfaces — not personas arguing in a shared context window for theater value.

Resist the urge to expand scope into neighboring slogans. If a control does not make **Hand-offs that preserve context** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

## How it actually works

Start with controls that are boring on purpose: written owners, verification, and a path for the next person.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Human resume paths need packaged context: what the agent tried, what failed, and what must not be retried. Empty hand-offs erase the value of automation.

Every tool grant is a privilege expansion. Review tool allow-lists the way you review IAM — on a cadence, with least privilege as the default.

Measure what you claim to care about. If **Hand-offs that preserve context** only appears in kickoff slides and never in review, incident, or planning artifacts, it is branding. Put a verification signal where people already look.

## Where this shows up

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

## Tradeoffs

Harnesses slow the first demo and save the first incident. Sequence matters.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

On **Hand-offs that preserve context**, design the stop path before the autonomy story — budgets, allow-listed tools, audit logs, and a kill switch operators can reach without a war room. Autonomy is earned after those exist.

Side effects need the same discipline as payments: idempotency, clear hand-offs, and a human who still owns production outcomes. Retries without keys turn partial failure into duplicate harm.

## Failure modes

Each of these is a missing control, not a personality problem:

- Omnipotent agents that “just figure it out” until they take the wrong production action.
- No kill switch; stopping requires redeploying or begging a vendor.
- Hand-offs that drop context, so humans redo the work.
- Retries without idempotency keys — duplicate side effects under partial failure.

## What to do this month

- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.
- Define stop-and-ask rules in writing; review them like any other safety control.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Budgets are product constraints. Token, time, and blast-radius limits keep agents from optimizing for activity over outcomes.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

An agent opens twelve draft PRs overnight against a thin test suite. Review debt becomes the real cost. Budgets and merge gates would have been kinder than a demo.

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

## Close

Logs, budgets, and kill switches are how leaders sleep.

On **Hand-offs that preserve context**, keep the loop short: write the decision, name the owner, verify the outcome.
