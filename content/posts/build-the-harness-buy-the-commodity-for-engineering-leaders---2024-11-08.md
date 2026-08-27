---
title: "Build the harness, buy the commodity for engineering leaders"
date: 2024-11-08T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

For engineering leaders, **Build the harness, buy the commodity** is a design problem: incentives, interfaces, and feedback loops — not a personality trait.

Agentic systems attracts demos faster than operability. The difference between useful and dangerous is almost always the harness: logs, budgets, privileges, and a human kill switch.

Treat agents like junior systems: limited privileges, explicit tools, budgets, and a human who owns the outcome. Autonomy without audit is distributed risk.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Systems view

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

Retries without idempotency keys — duplicate side effects under partial failure.

Require event emission for every tool call in production.

Define stop-and-ask rules in writing; review them like any other safety control.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

## The costs of doing it right

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Harnesses slow the first demo and save the first incident. Sequence matters.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

## How to hold the standard

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Own the outcome. Let agents accelerate the safe middle of the workflow.

## The neighboring discipline

Leaders who isolate the practice from AI in engineering workflows create beautiful local optima and expensive global failure.

Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality — not counting accepted suggestions like arcade tickets.

A strong IC becomes a bottleneck because only they know the “good prompts.” Codify the harness: templates, allow-listed tools, eval snippets, and examples of refusals.

Shared harnesses beat private prompt folklore. If the only way to do it “right” lives in one engineer’s chat history, you do not have a practice.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.
- Emit events for every tool call in production.
- Define stop-and-ask rules in writing; review them like any other safety control.
- Require event emission for every tool call in production.
- Keep a named human owner for every agentic workflow that can change production state.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.

## Close

Autonomy is earned with observability. Until then, keep the blast radius small.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Build the harness, buy the commodity**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
