---
title: "Build the harness, buy the commodity: naming the owner"
date: 2024-11-08T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

I care about “Build the harness, buy the commodity” for one practical reason: it either leaves clearer ownership next week, or it was theater.

Logs, budgets, and kill switches are leadership tools — not only platform niceties.

I will stay on this thesis — no adjacent manifesto, no tour of every neighboring discipline.

Resist the urge to expand scope into neighboring slogans. If a control does not make **Build the harness, buy the commodity** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

Side effects need the same discipline as payments: idempotency, clear hand-offs, and a human who still owns production outcomes. Retries without keys turn partial failure into duplicate harm.

## What fails when you skip it

Teams already have scars. Naming the failure modes precisely is faster than inventing a framework brand.

No kill switch; stopping requires redeploying or begging a vendor.

Hand-offs that drop context, so humans redo the work.

Omnipotent agents that “just figure it out” until they take the wrong production action.

Multi-agent theater without clear interfaces or ownership of outcomes.

## Controls that answer those failures

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

On **Build the harness, buy the commodity**, design the stop path before the autonomy story — budgets, allow-listed tools, audit logs, and a kill switch operators can reach without a war room. Autonomy is earned after those exist.

## A concrete scene

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

## Tradeoffs

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Harnesses slow the first demo and save the first incident. Sequence matters.

When pressure rises, teams drop the unowned practice first. Put **Build the harness, buy the commodity** in the path of work — templates, checklists, review norms — or admit it was optional applause.

For **Build the harness, buy the commodity**, the inheritance test is blunt: after a week, can someone outside the original room explain what changed, who owns it, and how you will know if it breaks? If the answer depends on hallway memory, you still have a story — not a practice.

## What to do this month

- Require event emission for every tool call in production.
- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Keep a named human owner for every agentic workflow that can change production state.

Budgets are product constraints. Token, time, and blast-radius limits keep agents from optimizing for activity over outcomes.

Every tool grant is a privilege expansion. Review tool allow-lists the way you review IAM — on a cadence, with least privilege as the default.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Human resume paths need packaged context: what the agent tried, what failed, and what must not be retried. Empty hand-offs erase the value of automation.

## Close

Logs, budgets, and kill switches are how leaders sleep.

On **Build the harness, buy the commodity**, keep the loop short: write the decision, name the owner, verify the outcome.
