---
title: "Designing for fewer retries, not prettier dashboards (2025)"
date: 2025-06-21T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

**Designing for fewer retries, not prettier dashboards** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

I treat Green software and efficiency as reliability practice. Waste that buys no safety is both an energy problem and an on-call problem.

Sustainable pace for people and sustainable resource use for systems are the same habit: refuse unnecessary churn.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Systems view

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.

Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.

Flaky CI accepted as weather instead of a defect.

Track flaky test quarantine time as a reliability SLO.

Add one sustainability question to every architecture review with a named follow-up owner.

Architecture review asks about carbon once, records a slogan, changes no sizing decision. Next quarter the same waste remains. Sustainability reviews need owners who can change schedules or footprint.

## What you give up

Deleting pipeline stages requires courage and good eval of what still protects users.

Carbon-aware batch shifts can delay results. Make the delay explicit and reversible.

Right-sizing can feel like risk. Mitigate with scale-up paths and load tests, not eternal overprovision.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

## Principles under ordinary pressure

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Ephemeralize non-prod by default. Always-on demo and staging fleets are often habit, not requirement.

Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved. Unmeasured virtue is marketing.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Refuse waste that buys no safety. That is both green and kind to the on-call.

## Where this couples to adjacent work

This work does not live alone. It couples to Engineering leadership.

Make decisions durable. A one-page note with context, options, chosen path, owner, and a revisit date beats a meeting that everyone remembers differently by Thursday. Verbal alignment evaporates under calendar pressure; written decisions compound.

A manager absorbs every hard design conversation “to unblock the team.” Velocity looks fine for a quarter. Then vacation happens, and the team discovers it cannot make a medium decision without the manager’s taste. The remedy is timed pairing on the hardest 10% and written decision records for the rest.

Hire and promote for ownership: people who name tradeoffs in writing, ask for help early, and leave systems operable by someone else. Theatrical confidence is cheap in interviews and expensive in production.

## When models join the workflow

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Track flaky test quarantine time as a reliability SLO.
- Report idle environment hours next to cloud spend in engineering reviews.
- Add one sustainability question to every architecture review with a named follow-up owner.
- Budget retries: cap and alert when amplification exceeds a threshold.
- Ephemeralize non-prod by default; justify always-on in writing.
- Design for fewer retries, not prettier dashboards.

## What to carry forward

Constraints clarify design. Carbon and energy are constraints — use them.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Designing for fewer retries, not prettier dashboards**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
