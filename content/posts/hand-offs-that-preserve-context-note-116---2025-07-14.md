---
title: "Hand-offs that preserve context — note 116"
date: 2025-07-14T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

Another working note on **Hand-offs that preserve context**: same thesis, sharper edges from recent delivery pressure.

Agentic systems attracts demos faster than operability. The difference between useful and dangerous is almost always the harness: logs, budgets, privileges, and a human kill switch.

Event-driven agentic workflows only help when every action emits an auditable event: what ran, why, with which tools, and what it changed.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Design for the bad day

Load is the honest critic. Incidents, hiring spikes, and vendor outages reveal whether the practice was designed or merely announced.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

Omnipotent agents that “just figure it out” until they take the wrong production action.

Retries without idempotency keys — duplicate side effects under partial failure.

## Boring controls that compound

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

Under load, meetings multiply. Resist. Written interfaces, budgets, and kill switches scale better than status theater.

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

## What you give up

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Harnesses slow the first demo and save the first incident. Sequence matters.

- No kill switch; stopping requires redeploying or begging a vendor.
- Multi-agent theater without clear interfaces or ownership of outcomes.

## How to hold the standard

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Own the outcome. Let agents accelerate the safe middle of the workflow.

## Where this couples to adjacent work

This work does not live alone. It couples to Engineering craft.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Keep a named human owner for every agentic workflow that can change production state.
- Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded.
- Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge.
- Define stop-and-ask rules in writing; review them like any other safety control.
- Require event emission for every tool call in production.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.

## What to carry forward

Logs, budgets, and kill switches are how leaders sleep.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Hand-offs that preserve context**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
