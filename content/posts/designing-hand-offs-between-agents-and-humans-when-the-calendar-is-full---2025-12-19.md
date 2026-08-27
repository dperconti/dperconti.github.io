---
title: "Designing hand-offs between agents and humans when the calendar is full"
date: 2025-12-19T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

When the calendar is full, **Designing hand-offs between agents and humans** only survives inside short loops. Long programs without owners become status machines.

Agentic systems should feel like junior systems in production: explicit tools, limited blast radius, and a named human who owns outcomes.

Treat agents like junior systems: limited privileges, explicit tools, budgets, and a human who owns the outcome. Autonomy without audit is distributed risk.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## The objection, taken seriously

Some leaders argue culture will handle this without written controls. Culture without artifacts is memory — and memory does not survive hiring waves.

Take the objection seriously. Lightweight is good. Invisible is not. The fix is shorter artifacts and clearer owners — not more ceremony.

## Mechanisms worth installing

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

## Texture from the work

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

## Tradeoffs worth naming

Do not build a program office for a one-team problem. Do not invent a framework brand. Do install the smallest control that makes failure legible.

Harnesses slow the first demo and save the first incident. Sequence matters.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Omnipotent agents that “just figure it out” until they take the wrong production action.

## Operating principles

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Autonomy is earned with observability. Until then, keep the blast radius small.

## Where this couples to adjacent work

Leaders who isolate the practice from AI in engineering workflows create beautiful local optima and expensive global failure.

Shared harnesses beat private prompt folklore. If the only way to do it “right” lives in one engineer’s chat history, you do not have a practice.

A team celebrates merged suggestion counts. Escaped defects rise in authz paths. The metric was vanity; the fix is tagging assisted PRs and reviewing that subset for verification quality.

Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality — not counting accepted suggestions like arcade tickets.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded.
- Define stop-and-ask rules in writing; review them like any other safety control.
- Keep a named human owner for every agentic workflow that can change production state.
- Require event emission for every tool call in production.

## What to carry forward

Logs, budgets, and kill switches are how leaders sleep.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Designing hand-offs between agents and humans**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
