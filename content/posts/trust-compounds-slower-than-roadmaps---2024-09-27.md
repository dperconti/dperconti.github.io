---
title: "Trust compounds slower than roadmaps"
date: 2024-09-27T05:00:00Z
categories:
  - Leadership
  - Teams
draft: false
---

**Trust compounds slower than roadmaps** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Cross-team collaboration gets romanticized as “more communication.” Most teams already communicate constantly. What they lack is a published interface for work that crosses boundaries.

Shared ownership across org boundaries needs a named primary for each failure mode. Co-owning everything is owning nothing.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Operating rhythm

Cadence beats intensity. The practice holds when it fits inside weeks people already live.

### 1. Practice

Quarterly: delete channels and meetings that produce no decisions or artifacts.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

### 2. Practice

After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

### 3. Practice

When stuck: write the disagreement as options with tradeoffs; meet only to choose.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

### 4. Practice

Before joint delivery: publish the interface doc and the escalation path.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

### 5. Practice

For every shared system: name a primary owner per failure mode.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

## Failure modes that teach

Stop doing these:

- Collaboration theater: more shared channels, same missing contracts.
- Meetings used as a substitute for written interfaces — everyone left “aligned,” nobody can explain ownership later.
- Hero bridges that mask missing contracts until attrition.
- Roadmaps that look shared but hide capacity fiction — platform work scheduled as free.

## How to hold the standard

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Continuity is the product of clear contracts — not of more conversation.

## Do not silo the practice

This work does not live alone. It couples to Engineering craft.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

Documentation that earns its keep means runbooks and decision records over aspirational diagrams. If freshness has no owner, docs become fiction.

## When models join the workflow

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- Before joint delivery: publish the interface doc and the escalation path.
- Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged.
- Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- For every shared system: name a primary owner per failure mode.

## What to carry forward

If collaboration feels expensive, check the interface before you hire more coordinators.

Continuity is the product. Tools and frameworks are optional accessories.

On **Trust compounds slower than roadmaps**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
