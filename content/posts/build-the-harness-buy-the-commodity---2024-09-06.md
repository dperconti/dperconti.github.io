---
title: "Build the harness, buy the commodity"
date: 2024-09-06T05:00:00Z
categories:
  - Engineering
  - Leadership
draft: false
---

**Build the harness, buy the commodity** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

If you are shipping Agentic systems, design the stop path before the autonomy story. Teams remember the first uncontrolled side effect longer than the first clever demo.

Event-driven agentic workflows only help when every action emits an auditable event: what ran, why, with which tools, and what it changed.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Systems view

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

Under real load, an agent without budgets burns tokens, opens noisy PRs, and creates review debt faster than value. Budgets are not pessimism; they are product constraints.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Stop-and-ask rules were informal. The agent emails a customer. Now you have a process problem and a trust problem. Irreversible writes, authz changes, and customer communication belong on an allow-list with human gates.

Omnipotent agents that “just figure it out” until they take the wrong production action.

Chaos-test retries: kill mid-flight and prove no duplicate side effects.

Keep a named human owner for every agentic workflow that can change production state.

A kill switch exists but only in a vendor dashboard with three click-throughs and no on-call ownership. That is not a kill switch; that is a hope. Put the switch where operators already work.

## Tradeoffs worth naming

Human hand-offs add latency. Unbounded autonomy adds blast radius. Pick the latency.

Harnesses slow the first demo and save the first incident. Sequence matters.

Narrow tools feel less magical than one omnipotent agent. Magic is not an operability strategy.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

## Operating principles

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

A multi-agent demo impresses leadership. In production, nobody can explain which agent wrote which file or why. Specialization without interfaces is just distributed confusion.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Own the outcome. Let agents accelerate the safe middle of the workflow.

## Do not silo the practice

This work does not live alone. It couples to Buy-versus-build judgment.

Build the harness, buy the commodity: keep eval suites, policy, and audit logs in systems you control even if inference is purchased.

A vendor’s success metrics replace product metrics in leadership reviews. That is lock-in of attention. Keep your north-star metrics in-house.

Evaluating vendors like critical-path systems includes asking how you pause them. No pause path means no operational maturity.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Chaos-test retries: kill mid-flight and prove no duplicate side effects.
- Owning outcomes when agents ship changes means the human merge still carries production accountability.
- Keep a named human owner for every agentic workflow that can change production state.
- Ship the harness before the autonomy: budget, log schema, kill switch, allow-listed tools.
- Define stop-and-ask rules in writing; review them like any other safety control.
- Require event emission for every tool call in production.

## Close

Logs, budgets, and kill switches are how leaders sleep.

Continuity is the product. Tools and frameworks are optional accessories.

On **Build the harness, buy the commodity**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
