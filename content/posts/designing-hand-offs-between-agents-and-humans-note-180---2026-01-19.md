---
title: "Designing hand-offs between agents and humans — note 180"
date: 2026-01-19T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

Another working note on **Designing hand-offs between agents and humans**: same thesis, sharper edges from recent delivery pressure.

Agentic systems attracts demos faster than operability. The difference between useful and dangerous is almost always the harness: logs, budgets, privileges, and a human kill switch.

Event-driven agentic workflows only help when every action emits an auditable event: what ran, why, with which tools, and what it changed.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## The objection, taken seriously

The counterargument is usually speed: we do not have time. That sentence often means you do not have time for the second failure.

Take the objection seriously. Lightweight is good. Invisible is not. The fix is shorter artifacts and clearer owners — not more ceremony.

## What to put in place before the announcement

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

## Scenes from delivery

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

## What you give up

Do not build a program office for a one-team problem. Do not invent a framework brand. Do install the smallest control that makes failure legible.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Harnesses slow the first demo and save the first incident. Sequence matters.

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Omnipotent agents that “just figure it out” until they take the wrong production action.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Autonomy is earned with observability. Until then, keep the blast radius small.

## The neighboring discipline

Leaders who isolate the practice from AI in engineering workflows create beautiful local optima and expensive global failure.

Shared harnesses beat private prompt folklore. If the only way to do it “right” lives in one engineer’s chat history, you do not have a practice.

Someone pastes a production schema into a consumer model tool to “move faster.” Leadership had no published data boundary. That is not an individual ethics failure first — it is a missing control.

Define allowed tools and data boundaries. Copilots without policy become shadow IT with autocomplete. Secrets, customer data, and authz logic need explicit rules.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Require event emission for every tool call in production.
- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.
- Define stop-and-ask rules in writing; review them like any other safety control.
- Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge.

## The point, again

Own the outcome. Let agents accelerate the safe middle of the workflow.

Continuity is the product. Tools and frameworks are optional accessories.

On **Designing hand-offs between agents and humans**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
