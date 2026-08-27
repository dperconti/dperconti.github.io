---
title: "Hand-offs that preserve context"
date: 2024-12-28T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

**Hand-offs that preserve context** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

If you are shipping Agentic systems, design the stop path before the autonomy story. Teams remember the first uncontrolled side effect longer than the first clever demo.

Event-driven agentic workflows only help when every action emits an auditable event: what ran, why, with which tools, and what it changed.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Boring controls that compound

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

## Scenes from delivery

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

## What I refuse to romanticize

Each failure mode below is a missing control. Another meeting will not install it.

- No kill switch; stopping requires redeploying or begging a vendor.
- Omnipotent agents that “just figure it out” until they take the wrong production action.
- Retries without idempotency keys — duplicate side effects under partial failure.
- Hand-offs that drop context, so humans redo the work.

## What you give up

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Harnesses slow the first demo and save the first incident. Sequence matters.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Where this couples to adjacent work

A durable approach borrows controls from Buy-versus-build judgment instead of inventing a parallel religion.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.

Start from ownership. If nobody on your team can operate the failure mode, you did not buy a capability — you rented a demo with a support email.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Keep a named human owner for every agentic workflow that can change production state.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners..
- Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room.
- Define stop-and-ask rules in writing; review them like any other safety control.
- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.

## What to carry forward

Logs, budgets, and kill switches are how leaders sleep.

Continuity is the product. Tools and frameworks are optional accessories.

On **Hand-offs that preserve context**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
