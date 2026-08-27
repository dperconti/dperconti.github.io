---
title: "Agent harnesses: logs, budgets, and kill switches"
date: 2025-08-06T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

**Agent harnesses: logs, budgets, and kill switches** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Agentic systems attracts demos faster than operability. The difference between useful and dangerous is almost always the harness: logs, budgets, privileges, and a human kill switch.

Event-driven agentic workflows only help when every action emits an auditable event: what ran, why, with which tools, and what it changed.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## The operating controls

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

## Texture from the work

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

## The wreck as syllabus

Each failure mode below is a missing control. Another meeting will not install it.

- Multi-agent theater without clear interfaces or ownership of outcomes.
- Hand-offs that drop context, so humans redo the work.
- Omnipotent agents that “just figure it out” until they take the wrong production action.
- No kill switch; stopping requires redeploying or begging a vendor.

## Tradeoffs worth naming

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Harnesses slow the first demo and save the first incident. Sequence matters.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

## Principles under ordinary pressure

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## The neighboring discipline

Leaders who isolate the practice from Engineering craft create beautiful local optima and expensive global failure.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Emit events for every tool call in production.
- Require event emission for every tool call in production.
- Owning outcomes when agents ship changes means the human merge still carries production accountability.
- Keep a named human owner for every agentic workflow that can change production state.
- Define stop-and-ask rules in writing; review them like any other safety control.

## Close

Own the outcome. Let agents accelerate the safe middle of the workflow.

Continuity is the product. Tools and frameworks are optional accessories.

On **Agent harnesses: logs, budgets, and kill switches**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
