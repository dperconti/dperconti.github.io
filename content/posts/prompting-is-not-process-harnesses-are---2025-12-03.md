---
title: "Prompting is not process — harnesses are"
date: 2025-12-03T05:00:00Z
categories:
  - AI
  - Engineering
draft: false
---

**Prompting is not process — harnesses are** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

If you are shipping Agentic systems, design the stop path before the autonomy story. Teams remember the first uncontrolled side effect longer than the first clever demo.

Multi-agent theater is specialization without interfaces. Useful specialization is narrow tools, clear side effects, and kill switches.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Interfaces, feedback, ownership

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

Hand-offs that drop context, so humans redo the work.

Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.

Chaos-test retries: kill mid-flight and prove no duplicate side effects.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

## Tradeoffs worth naming

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Harnesses slow the first demo and save the first incident. Sequence matters.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

## Operating principles

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Own the outcome. Let agents accelerate the safe middle of the workflow.

## Where this couples to adjacent work

This work does not live alone. It couples to Engineering craft.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners..
- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.
- Require event emission for every tool call in production.
- Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Define stop-and-ask rules in writing; review them like any other safety control.

## Close

Autonomy is earned with observability. Until then, keep the blast radius small.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Prompting is not process — harnesses are**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
