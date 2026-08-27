---
title: "Working agreements that age well under real load"
date: 2025-02-23T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

Under real load, **Working agreements that age well** stops being a slogan. Queues, incidents, and half-finished migrations reveal whether the system was designed or performed.

Cross-team collaboration gets romanticized as “more communication.” Most teams already communicate constantly. What they lack is a published interface for work that crosses boundaries.

Shared ownership across org boundaries needs a named primary for each failure mode. Co-owning everything is owning nothing.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Practices with enough detail to copy

Cadence beats intensity. The practice holds when it fits inside weeks people already live.

### 1. Practice

After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

### 2. Practice

For every shared system: name a primary owner per failure mode.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

### 3. Practice

When stuck: write the disagreement as options with tradeoffs; meet only to choose.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

### 4. Practice

Before joint delivery: publish the interface doc and the escalation path.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

### 5. Practice

Quarterly: delete channels and meetings that produce no decisions or artifacts.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

## Failure modes that teach

Stop doing these:

- Collaboration theater: more shared channels, same missing contracts.
- Hand-offs that drop context so the receiving team re-learns the sender’s scars.
- Roadmaps that look shared but hide capacity fiction — platform work scheduled as free.
- Hero bridges that mask missing contracts until attrition.

## Operating principles

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

If collaboration feels expensive, check the interface before you hire more coordinators.

## Where this couples to adjacent work

This work does not live alone. It couples to Engineering leadership.

Judgment under load is a practiced skill: triage, communicate, decide with incomplete information, and write down what you assumed. Managers who only practice judgment in calm weeks fail the weeks that matter.

Hiring celebrates architects who dazzle in system-design interviews but cannot leave a service operable on-call. Six months later, juniors inherit tribal knowledge. The leadership miss was selecting for theater over inheritance.

Ceremony is optional; continuity is not. Keep the lightest process that still produces decisions, owners, and evidence. Delete the rest without guilt.

## Tempo changed; accountability did not

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

When an agent should stop and ask is a policy question, not a vibe. Write the list: irreversible writes, authz, customer communication, spend above threshold, tools outside the allow-list.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- For every shared system: name a primary owner per failure mode.
- Before joint delivery: publish the interface doc and the escalation path.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged.

## What to carry forward

Continuity is the product of clear contracts — not of more conversation.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Working agreements that age well**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
