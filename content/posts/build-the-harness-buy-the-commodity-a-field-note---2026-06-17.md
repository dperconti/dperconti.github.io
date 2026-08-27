---
title: "Build the harness, buy the commodity: a field note"
date: 2026-06-17T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

A field note on **Build the harness, buy the commodity** should be inspectable next week. Mechanisms beat vibes.

Agentic systems attracts demos faster than operability. The difference between useful and dangerous is almost always the harness: logs, budgets, privileges, and a human kill switch.

Treat agents like junior systems: limited privileges, explicit tools, budgets, and a human who owns the outcome. Autonomy without audit is distributed risk.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Cadence that survives calendars

Cadence beats intensity. The practice holds when it fits inside weeks people already live.

### 1. Practice

Chaos-test retries: kill mid-flight and prove no duplicate side effects.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

### 2. Practice

Define stop-and-ask rules in writing; review them like any other safety control.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

### 3. Practice

Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

### 4. Practice

Require event emission for every tool call in production.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

### 5. Practice

Keep a named human owner for every agentic workflow that can change production state.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

## What I refuse to romanticize

Stop doing these:

- Omnipotent agents that “just figure it out” until they take the wrong production action.
- Hand-offs that drop context, so humans redo the work.
- Multi-agent theater without clear interfaces or ownership of outcomes.
- No kill switch; stopping requires redeploying or begging a vendor.

## Principles under ordinary pressure

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## Where this couples to adjacent work

A durable approach borrows controls from Engineering craft instead of inventing a parallel religion.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Define stop-and-ask rules in writing; review them like any other safety control.
- Owning outcomes when agents ship changes means the human merge still carries production accountability.
- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.
- Require event emission for every tool call in production.
- Keep a named human owner for every agentic workflow that can change production state.

## Close

Autonomy is earned with observability. Until then, keep the blast radius small.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Build the harness, buy the commodity**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
