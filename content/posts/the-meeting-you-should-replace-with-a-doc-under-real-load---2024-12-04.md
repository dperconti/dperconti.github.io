---
title: "The meeting you should replace with a doc under real load"
date: 2024-12-04T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

Under real load, **The meeting you should replace with a doc** stops being a slogan. Queues, incidents, and half-finished migrations reveal whether the system was designed or performed.

When people say they need better Cross-team collaboration, I look for missing contracts: who consumes what, what “done” means, and who gets paged when the joint system lies.

Alignment is a protocol — written inputs, outputs, owners, and failure modes — not a recurring meeting that performs agreement.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Design the loop

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

Collaboration theater: more shared channels, same missing contracts.

When stuck: write the disagreement as options with tradeoffs; meet only to choose.

Before joint delivery: publish the interface doc and the escalation path.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

## What you give up

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

## Principles under ordinary pressure

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

Hand-offs that preserve context include decision history, open risks, and the last failed assumption — not only a ticket ID. Context loss is a defect.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Do not silo the practice

This work does not live alone. It couples to Engineering leadership.

Hire and promote for ownership: people who name tradeoffs in writing, ask for help early, and leave systems operable by someone else. Theatrical confidence is cheap in interviews and expensive in production.

A manager absorbs every hard design conversation “to unblock the team.” Velocity looks fine for a quarter. Then vacation happens, and the team discovers it cannot make a medium decision without the manager’s taste. The remedy is timed pairing on the hardest 10% and written decision records for the rest.

Hands-on does not mean doing everyone’s job. It means knowing where the system will tax the team and being willing to renegotiate scope when reality asks for it. Stay close enough to feel texture; distant enough that people still own outcomes.

## Harnesses beat vibes

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Teach distrust of fluent wrongness. Models sound senior. Tests, invariants, and threat models still decide truth.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Before joint delivery: publish the interface doc and the escalation path.
- The meeting you should replace with a doc is the one that only redistributes status.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs.

## Close

Continuity is the product of clear contracts — not of more conversation.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **The meeting you should replace with a doc**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
