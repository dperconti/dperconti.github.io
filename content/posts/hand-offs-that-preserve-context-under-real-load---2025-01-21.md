---
title: "Hand-offs that preserve context under real load"
date: 2025-01-21T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

Under real load, **Hand-offs that preserve context** stops being a slogan. Queues, incidents, and half-finished migrations reveal whether the system was designed or performed.

Agentic systems should feel like junior systems in production: explicit tools, limited blast radius, and a named human who owns outcomes.

Event-driven agentic workflows only help when every action emits an auditable event: what ran, why, with which tools, and what it changed.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## From ambiguity to an operable slice

Imagine ordinary pressure — not a lab. Someone proposes a change that touches this practice. The first question is not which tool. It is who owns the outcome and what you will verify.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

Day two is writing. A short decision record: context, options, choice, owner, revisit date. Without that page, the week becomes Slack archaeology.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Midweek friction is expected. Clear drag — access, environments, unclear interfaces — before you add a status meeting that performs leadership.

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

By week’s end, success is an operable slice: a log schema, an eval, a runbook, a kill switch, or a freshness owner — plus a human who can reverse the change.

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

## What I refuse to romanticize

- No kill switch; stopping requires redeploying or begging a vendor.
- Hand-offs that drop context, so humans redo the work.
- Multi-agent theater without clear interfaces or ownership of outcomes.

## What you give up

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Harnesses slow the first demo and save the first incident. Sequence matters.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

## Operating principles

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## The neighboring discipline

Leaders who isolate the practice from AI in engineering workflows create beautiful local optima and expensive global failure.

Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.

A team celebrates merged suggestion counts. Escaped defects rise in authz paths. The metric was vanity; the fix is tagging assisted PRs and reviewing that subset for verification quality.

Shared harnesses beat private prompt folklore. If the only way to do it “right” lives in one engineer’s chat history, you do not have a practice.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Keep a named human owner for every agentic workflow that can change production state.
- Require event emission for every tool call in production.
- Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Define stop-and-ask rules in writing; review them like any other safety control.
- Emit events for every tool call in production.

## Close

Logs, budgets, and kill switches are how leaders sleep.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Hand-offs that preserve context**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
