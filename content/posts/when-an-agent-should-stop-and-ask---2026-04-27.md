---
title: "When an agent should stop and ask"
date: 2026-04-27T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

“When an agent should stop and ask” stops being abstract the moment you ask who gets paged when it fails.

Logs, budgets, and kill switches are leadership tools — not only platform niceties.

What follows stays on that claim: mechanisms, concrete scenes, and the failure modes that appear when the claim is ignored.

For **When an agent should stop and ask**, the inheritance test is blunt: after a week, can someone outside the original room explain what changed, who owns it, and how you will know if it breaks? If the answer depends on hallway memory, you still have a story — not a practice.

When pressure rises, teams drop the unowned practice first. Put **When an agent should stop and ask** in the path of work — templates, checklists, review norms — or admit it was optional applause.

## What fails when you skip it

Teams already have scars. Naming the failure modes precisely is faster than inventing a framework brand.

Hand-offs that drop context, so humans redo the work.

Retries without idempotency keys — duplicate side effects under partial failure.

Omnipotent agents that “just figure it out” until they take the wrong production action.

No kill switch; stopping requires redeploying or begging a vendor.

## Controls that answer those failures

Budgets are product constraints. Token, time, and blast-radius limits keep agents from optimizing for activity over outcomes.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Every tool grant is a privilege expansion. Review tool allow-lists the way you review IAM — on a cadence, with least privilege as the default.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Side effects need the same discipline as payments: idempotency, clear hand-offs, and a human who still owns production outcomes. Retries without keys turn partial failure into duplicate harm.

## A concrete scene

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

## Tradeoffs

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Harnesses slow the first demo and save the first incident. Sequence matters.

Resist the urge to expand scope into neighboring slogans. If a control does not make **When an agent should stop and ask** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

Measure what you claim to care about. If **When an agent should stop and ask** only appears in kickoff slides and never in review, incident, or planning artifacts, it is branding. Put a verification signal where people already look.

## What to do this month

- Require event emission for every tool call in production.
- Keep a named human owner for every agentic workflow that can change production state.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Define stop-and-ask rules in writing; review them like any other safety control.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Human resume paths need packaged context: what the agent tried, what failed, and what must not be retried. Empty hand-offs erase the value of automation.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

## Close

Autonomy is earned with observability. Until then, keep the blast radius small.

On **When an agent should stop and ask**, keep the loop short: write the decision, name the owner, verify the outcome.
