---
title: "Build the harness, buy the commodity — note 146"
date: 2025-10-11T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

Another working note on **Build the harness, buy the commodity**: same thesis, sharper edges from recent delivery pressure.

Agentic systems attracts demos faster than operability. The difference between useful and dangerous is almost always the harness: logs, budgets, privileges, and a human kill switch.

Multi-agent theater is specialization without interfaces. Useful specialization is narrow tools, clear side effects, and kill switches.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Systems view

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

Omnipotent agents that “just figure it out” until they take the wrong production action.

Define stop-and-ask rules in writing; review them like any other safety control.

Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

## The costs of doing it right

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Harnesses slow the first demo and save the first incident. Sequence matters.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

## Principles under ordinary pressure

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## Where this couples to adjacent work

This work does not live alone. It couples to AI in engineering workflows.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

Someone pastes a production schema into a consumer model tool to “move faster.” Leadership had no published data boundary. That is not an individual ethics failure first — it is a missing control.

Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Define stop-and-ask rules in writing; review them like any other safety control.
- Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge.
- Keep a named human owner for every agentic workflow that can change production state.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Require event emission for every tool call in production.
- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.

## What to carry forward

Own the outcome. Let agents accelerate the safe middle of the workflow.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Build the harness, buy the commodity**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
