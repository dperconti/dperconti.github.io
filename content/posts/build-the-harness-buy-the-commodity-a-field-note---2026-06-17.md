---
title: "Build the harness, buy the commodity: evidence over enthusiasm"
date: 2026-06-17T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

Most teams endorse “Build the harness, buy the commodity” quickly and operationalize it slowly. Logs, budgets, and kill switches are leadership tools — not only platform niceties.

What follows stays on that claim: mechanisms, concrete scenes, and the failure modes that appear when the claim is ignored.

Keep the unit of progress small enough to finish under a full calendar: one owner clarification, one verification signal, one reversible control. Grand programs without weekly evidence become status machines.

Measure what you claim to care about. If **Build the harness, buy the commodity** only appears in kickoff slides and never in review, incident, or planning artifacts, it is branding. Put a verification signal where people already look.

## A scene from delivery

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

That scene is the thesis under calendar pressure. The response is not another status meeting — it is a control.

## Mechanisms

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Every tool grant is a privilege expansion. Review tool allow-lists the way you review IAM — on a cadence, with least privilege as the default.

Human resume paths need packaged context: what the agent tried, what failed, and what must not be retried. Empty hand-offs erase the value of automation.

When pressure rises, teams drop the unowned practice first. Put **Build the harness, buy the commodity** in the path of work — templates, checklists, review norms — or admit it was optional applause.

## Another texture

An agent opens twelve draft PRs overnight against a thin test suite. Review debt becomes the real cost. Budgets and merge gates would have been kinder than a demo.

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

## Tradeoffs

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Harnesses slow the first demo and save the first incident. Sequence matters.

Side effects need the same discipline as payments: idempotency, clear hand-offs, and a human who still owns production outcomes. Retries without keys turn partial failure into duplicate harm.

Resist the urge to expand scope into neighboring slogans. If a control does not make **Build the harness, buy the commodity** more operable for the next person, leave it for another note. Dilution is how coherent essays become stitched scrapbooks.

## Failure modes

Each of these is a missing control, not a personality problem:

- No kill switch; stopping requires redeploying or begging a vendor.
- Omnipotent agents that “just figure it out” until they take the wrong production action.
- Retries without idempotency keys — duplicate side effects under partial failure.
- Hand-offs that drop context, so humans redo the work.

## What to do this month

- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.
- Keep a named human owner for every agentic workflow that can change production state.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Budgets are product constraints. Token, time, and blast-radius limits keep agents from optimizing for activity over outcomes.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

## Close

Logs, budgets, and kill switches are how leaders sleep.

If someone new cannot explain **Build the harness, buy the commodity** from your artifacts in fifteen minutes, the practice is still private.
