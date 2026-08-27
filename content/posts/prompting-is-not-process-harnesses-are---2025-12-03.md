---
title: "Prompting is not process — harnesses are"
date: 2025-12-03T05:00:00Z
categories:
  - AI
  - Engineering
draft: false
---

The useful version of “Prompting is not process — harnesses are” is narrower than the slogan: Logs, budgets, and kill switches are leadership tools — not only platform niceties.

What follows stays on that claim: mechanisms, concrete scenes, and the failure modes that appear when the claim is ignored.

On **Prompting is not process — harnesses are**, design the stop path before the autonomy story — budgets, allow-listed tools, audit logs, and a kill switch operators can reach without a war room. Autonomy is earned after those exist.

Useful specialization is narrow tools and clear interfaces — not personas arguing in a shared context window for theater value.

## What fails when you skip it

Teams already have scars. Naming the failure modes precisely is faster than inventing a framework brand.

Hand-offs that drop context, so humans redo the work.

Retries without idempotency keys — duplicate side effects under partial failure.

No kill switch; stopping requires redeploying or begging a vendor.

Multi-agent theater without clear interfaces or ownership of outcomes.

## Controls that answer those failures

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Every tool grant is a privilege expansion. Review tool allow-lists the way you review IAM — on a cadence, with least privilege as the default.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Measure what you claim to care about. If **Prompting is not process — harnesses are** only appears in kickoff slides and never in review, incident, or planning artifacts, it is branding. Put a verification signal where people already look.

## A concrete scene

An agent opens twelve draft PRs overnight against a thin test suite. Review debt becomes the real cost. Budgets and merge gates would have been kinder than a demo.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

## Tradeoffs

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Harnesses slow the first demo and save the first incident. Sequence matters.

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Resist the urge to expand scope into neighboring slogans. If a control does not make **Prompting is not process — harnesses are** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

When pressure rises, teams drop the unowned practice first. Put **Prompting is not process — harnesses are** in the path of work — templates, checklists, review norms — or admit it was optional applause.

## What to do this month

- Keep a named human owner for every agentic workflow that can change production state.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Define stop-and-ask rules in writing; review them like any other safety control.
- Require event emission for every tool call in production.

Human resume paths need packaged context: what the agent tried, what failed, and what must not be retried. Empty hand-offs erase the value of automation.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Budgets are product constraints. Token, time, and blast-radius limits keep agents from optimizing for activity over outcomes.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

## Close

Autonomy is earned with observability. Until then, keep the blast radius small.

On **Prompting is not process — harnesses are**, keep the loop short: write the decision, name the owner, verify the outcome.
