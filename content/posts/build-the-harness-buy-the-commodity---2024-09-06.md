---
title: "Build the harness, buy the commodity"
date: 2024-09-06T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

“Build the harness, buy the commodity” stops being abstract the moment you ask who gets paged when it fails.

Treat agents like junior systems: limited privileges, explicit tools, budgets, and a human who owns the outcome. Autonomy without audit is distributed risk.

I will stay on this thesis — no adjacent manifesto, no tour of every neighboring discipline.

Resist the urge to expand scope into neighboring slogans. If a control does not make **Build the harness, buy the commodity** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

Measure what you claim to care about. If **Build the harness, buy the commodity** only appears in kickoff slides and never in review, incident, or planning artifacts, it is branding. Put a verification signal where people already look.

## A scene from delivery

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

That scene is the thesis under calendar pressure. The response is not another status meeting — it is a control.

## Mechanisms

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Budgets are product constraints. Token, time, and blast-radius limits keep agents from optimizing for activity over outcomes.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Useful specialization is narrow tools and clear interfaces — not personas arguing in a shared context window for theater value.

## Another texture

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

## Tradeoffs

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Harnesses slow the first demo and save the first incident. Sequence matters.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

On **Build the harness, buy the commodity**, design the stop path before the autonomy story — budgets, allow-listed tools, audit logs, and a kill switch operators can reach without a war room. Autonomy is earned after those exist.

Side effects need the same discipline as payments: idempotency, clear hand-offs, and a human who still owns production outcomes. Retries without keys turn partial failure into duplicate harm.

## Failure modes

Each of these is a missing control, not a personality problem:

- No kill switch; stopping requires redeploying or begging a vendor.
- Omnipotent agents that “just figure it out” until they take the wrong production action.
- Multi-agent theater without clear interfaces or ownership of outcomes.
- Retries without idempotency keys — duplicate side effects under partial failure.

## What to do this month

- Require event emission for every tool call in production.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Define stop-and-ask rules in writing; review them like any other safety control.

Human resume paths need packaged context: what the agent tried, what failed, and what must not be retried. Empty hand-offs erase the value of automation.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Every tool grant is a privilege expansion. Review tool allow-lists the way you review IAM — on a cadence, with least privilege as the default.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

An agent opens twelve draft PRs overnight against a thin test suite. Review debt becomes the real cost. Budgets and merge gates would have been kinder than a demo.

## Close

Own the outcome. Let agents accelerate the safe middle of the workflow.

On **Build the harness, buy the commodity**, keep the loop short: write the decision, name the owner, verify the outcome.
