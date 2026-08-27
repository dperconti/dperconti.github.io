---
title: "Hand-offs that preserve context: what fails first"
date: 2025-07-14T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

Most teams endorse “Hand-offs that preserve context” quickly and operationalize it slowly. Logs, budgets, and kill switches are leadership tools — not only platform niceties.

What follows stays on that claim: mechanisms, concrete scenes, and the failure modes that appear when the claim is ignored.

Useful specialization is narrow tools and clear interfaces — not personas arguing in a shared context window for theater value.

On **Hand-offs that preserve context**, design the stop path before the autonomy story — budgets, allow-listed tools, audit logs, and a kill switch operators can reach without a war room. Autonomy is earned after those exist.

## A scene from delivery

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

That scene is the thesis under calendar pressure. The response is not another status meeting — it is a control.

## Mechanisms

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Write one page while the decision is still warm — context, options, choice, owner, revisit date. Verbal alignment on **Hand-offs that preserve context** evaporates under ordinary calendar pressure, and Slack archaeology is a poor substitute for a decision record.

## Another texture

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

## Tradeoffs

Harnesses slow the first demo and save the first incident. Sequence matters.

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Measure what you claim to care about. If **Hand-offs that preserve context** only appears in kickoff slides and never in review, incident, or planning artifacts, it is branding. Put a verification signal where people already look.

When pressure rises, teams drop the unowned practice first. Put **Hand-offs that preserve context** in the path of work — templates, checklists, review norms — or admit it was optional applause.

## Failure modes

Each of these is a missing control, not a personality problem:

- Multi-agent theater without clear interfaces or ownership of outcomes.
- Hand-offs that drop context, so humans redo the work.
- No kill switch; stopping requires redeploying or begging a vendor.
- Omnipotent agents that “just figure it out” until they take the wrong production action.

## What to do this month

- Define stop-and-ask rules in writing; review them like any other safety control.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Keep a named human owner for every agentic workflow that can change production state.

Human resume paths need packaged context: what the agent tried, what failed, and what must not be retried. Empty hand-offs erase the value of automation.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Every tool grant is a privilege expansion. Review tool allow-lists the way you review IAM — on a cadence, with least privilege as the default.

Budgets are product constraints. Token, time, and blast-radius limits keep agents from optimizing for activity over outcomes.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

An agent opens twelve draft PRs overnight against a thin test suite. Review debt becomes the real cost. Budgets and merge gates would have been kinder than a demo.

## Close

Logs, budgets, and kill switches are how leaders sleep.

On **Hand-offs that preserve context**, keep the loop short: write the decision, name the owner, verify the outcome.
