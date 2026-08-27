---
title: "Working agreements that age well: a field note"
date: 2026-04-07T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

A field note on **Working agreements that age well** should be inspectable next week. Mechanisms beat vibes.

When people say they need better Cross-team collaboration, I look for missing contracts: who consumes what, what “done” means, and who gets paged when the joint system lies.

The collaboration tax is paid in ambiguity. Clarity is a kindness and a throughput strategy.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Systems view

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Treat conflict as design input. Resolve it in the interface, not in personality. Productive disagreement about SLOs and capacity envelopes beats political disagreement about who is more strategic.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

Collaboration theater: more shared channels, same missing contracts.

Quarterly: delete channels and meetings that produce no decisions or artifacts.

After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

## Tradeoffs worth naming

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

## Operating principles

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## The neighboring discipline

A durable approach borrows controls from Engineering leadership instead of inventing a parallel religion.

Judgment under load is a practiced skill: triage, communicate, decide with incomplete information, and write down what you assumed. Managers who only practice judgment in calm weeks fail the weeks that matter.

A leader clears a review queue personally for two sprints. Throughput rises, then collapses when they travel. The missing investment was teaching reviewers the standards in writing and calibrating once in a huddle — not becoming the queue.

Hands-on does not mean doing everyone’s job. It means knowing where the system will tax the team and being willing to renegotiate scope when reality asks for it. Stay close enough to feel texture; distant enough that people still own outcomes.

## When models join the workflow

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- The meeting you should replace with a doc is the one that only redistributes status.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- Treat conflict as design input.
- For every shared system: name a primary owner per failure mode.
- Before joint delivery: publish the interface doc and the escalation path.

## What to carry forward

If collaboration feels expensive, check the interface before you hire more coordinators.

Continuity is the product. Tools and frameworks are optional accessories.

On **Working agreements that age well**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
