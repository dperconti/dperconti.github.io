---
title: "Designing hand-offs between agents and humans"
date: 2025-08-22T05:00:00Z
categories:
  - AI
  - Architecture
draft: false
---

**Designing hand-offs between agents and humans** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Agentic systems attracts demos faster than operability. The difference between useful and dangerous is almost always the harness: logs, budgets, privileges, and a human kill switch.

Treat agents like junior systems: limited privileges, explicit tools, budgets, and a human who owns the outcome. Autonomy without audit is distributed risk.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Transferring judgment

If the practice only lives in your head, you have a bus factor of one. Mentorship here means transferring judgment through artifacts.

Feedback that lands after incidents should arrive within days, tied to a specific decision or omission, and paired with a practice rep. Delayed generic feedback teaches nothing useful.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

An agent retries a payment side effect after a timeout. Without idempotency keys, customers see duplicates. Treat agent side effects with the same discipline as payment systems.

Juniors need safe ownership of a thin slice and specific feedback. Seniors need sponsorship to teach — review quality, RFC authorship, incident lead — not only more tickets.

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

## Practices with enough detail to copy

- Require event emission for every tool call in production.
- Keep a named human owner for every agentic workflow that can change production state.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Define stop-and-ask rules in writing; review them like any other safety control.
- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.

## What I refuse to romanticize

- Retries without idempotency keys — duplicate side effects under partial failure.
- Omnipotent agents that “just figure it out” until they take the wrong production action.
- Multi-agent theater without clear interfaces or ownership of outcomes.

## How to hold the standard

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Useful specialization looks like a retrieval agent, a draft agent, and a verifier — each with narrow tools — not five personas arguing in a shared context window for theater value.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## The neighboring discipline

This work does not live alone. It couples to Buy-versus-build judgment.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

Integration debt after purchase: five half-connected identity paths and no single owner for authz bugs. Procurement celebrated; on-call paid.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Tool use as a privilege, not a default.
- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge.
- Define stop-and-ask rules in writing; review them like any other safety control.
- Require event emission for every tool call in production.
- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.

## The point, again

Logs, budgets, and kill switches are how leaders sleep.

Continuity is the product. Tools and frameworks are optional accessories.

On **Designing hand-offs between agents and humans**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
