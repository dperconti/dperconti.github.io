---
title: "Working agreements that age well — note 68"
date: 2025-03-13T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

Another working note on **Working agreements that age well**: same thesis, sharper edges from recent delivery pressure.

Cross-team collaboration gets romanticized as “more communication.” Most teams already communicate constantly. What they lack is a published interface for work that crosses boundaries.

Alignment is a protocol — written inputs, outputs, owners, and failure modes — not a recurring meeting that performs agreement.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Interfaces, feedback, ownership

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Replace status karaoke with a short decision doc: context, options, choice, date, owner. Status belongs in a dashboard or a running doc; meetings are for conflict and irreversible choices.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

Meetings used as a substitute for written interfaces — everyone left “aligned,” nobody can explain ownership later.

For every shared system: name a primary owner per failure mode.

Before joint delivery: publish the interface doc and the escalation path.

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

## What you give up

Written interfaces cost an afternoon. Unwritten interfaces cost a quarter. Choose deliberately.

Strict ownership can feel cold. Ambiguous ownership feels warm until the page. Prefer clear primary owners with named collaborators.

Fewer meetings feel risky to managers who equate presence with control. Measure outcomes and escaped misunderstandings instead of seat time.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

## How to hold the standard

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

A working group creates a Slack channel for “alignment.” Six weeks later the channel is noise and decisions still live in side DMs. Delete the channel or convert it into a decision log with owners.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

If collaboration feels expensive, check the interface before you hire more coordinators.

## Where this couples to adjacent work

Leaders who isolate the practice from Engineering leadership create beautiful local optima and expensive global failure.

Ceremony is optional; continuity is not. Keep the lightest process that still produces decisions, owners, and evidence. Delete the rest without guilt.

Hiring celebrates architects who dazzle in system-design interviews but cannot leave a service operable on-call. Six months later, juniors inherit tribal knowledge. The leadership miss was selecting for theater over inheritance.

Judgment under load is a practiced skill: triage, communicate, decide with incomplete information, and write down what you assumed. Managers who only practice judgment in calm weeks fail the weeks that matter.

## When models join the workflow

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Where copilots help: boilerplate, test scaffolding, exploratory refactors with strong suites. Where they hide debt: security boundaries, concurrency, and domain invariants nobody wrote down.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- For every shared system: name a primary owner per failure mode.
- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.
- Replace status karaoke with a short decision doc: context, options, choice, date, owner.
- The meeting you should replace with a doc is the one that only redistributes status.

## The point, again

Protocols beat vibes. Write the boundary, name the owner, make failure legible.

Continuity is the product. Tools and frameworks are optional accessories.

On **Working agreements that age well**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
