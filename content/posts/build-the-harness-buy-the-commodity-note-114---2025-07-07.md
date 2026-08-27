---
title: "Build the harness, buy the commodity — note 114"
date: 2025-07-07T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

Another working note on **Build the harness, buy the commodity**: same thesis, sharper edges from recent delivery pressure.

Agentic systems should feel like junior systems in production: explicit tools, limited blast radius, and a named human who owns outcomes.

Logs, budgets, and kill switches are leadership tools — not only platform niceties.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## A week walking the practice

Imagine ordinary pressure — not a lab. Someone proposes a change that touches this practice. The first question is not which tool. It is who owns the outcome and what you will verify.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

Day two is writing. A short decision record: context, options, choice, owner, revisit date. Without that page, the week becomes Slack archaeology.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Midweek friction is expected. Clear drag — access, environments, unclear interfaces — before you add a status meeting that performs leadership.

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

By week’s end, success is an operable slice: a log schema, an eval, a runbook, a kill switch, or a freshness owner — plus a human who can reverse the change.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

## Failure modes that teach

- Hand-offs that drop context, so humans redo the work.
- Omnipotent agents that “just figure it out” until they take the wrong production action.
- Multi-agent theater without clear interfaces or ownership of outcomes.

## Tradeoffs worth naming

Harnesses slow the first demo and save the first incident. Sequence matters.

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Own the outcome. Let agents accelerate the safe middle of the workflow.

## Do not silo the practice

Leaders who isolate the practice from AI in engineering workflows create beautiful local optima and expensive global failure.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

A team celebrates merged suggestion counts. Escaped defects rise in authz paths. The metric was vanity; the fix is tagging assisted PRs and reviewing that subset for verification quality.

Shared harnesses beat private prompt folklore. If the only way to do it “right” lives in one engineer’s chat history, you do not have a practice.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Owning outcomes when agents ship changes means the human merge still carries production accountability.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- When an agent should stop and ask is a policy question, not a vibe.
- Define stop-and-ask rules in writing; review them like any other safety control.
- Require event emission for every tool call in production.
- Keep a named human owner for every agentic workflow that can change production state.

## Close

Autonomy is earned with observability. Until then, keep the blast radius small.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Build the harness, buy the commodity**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
