---
title: "Designing for fewer retries, not prettier dashboards: a field note"
date: 2026-08-19T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

A field note on **Designing for fewer retries, not prettier dashboards** should be inspectable next week. Mechanisms beat vibes.

Green software and efficiency gets stuck in slogans when nobody owns a control that changes architecture, schedules, or sizing. Leadership makes the constraint real.

Flaky CI, chatty retries, and oversized environments are leadership issues because they burn attention and energy.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Boring controls that compound

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved. Unmeasured virtue is marketing.

Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

## Concrete cases

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

## Failure modes that teach

Each failure mode below is a missing control. Another meeting will not install it.

- Retry storms celebrated as resilience while they burn budget and hide bugs.
- Always-on environments for demos that could be ephemeral.
- Dashboards of carbon without owners who can change schedules or sizing.
- Greenwashing metrics that never change an architecture decision.

## Tradeoffs worth naming

Right-sizing can feel like risk. Mitigate with scale-up paths and load tests, not eternal overprovision.

Deleting pipeline stages requires courage and good eval of what still protects users.

Carbon-aware batch shifts can delay results. Make the delay explicit and reversible.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

A team celebrates resilience because the client retries aggressively. Production is stable-ish and the bill is not. They built a retry storm and called it fortitude. Cap retries and fix the root timeout.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Where this couples to adjacent work

Leaders who isolate the practice from Buy-versus-build judgment create beautiful local optima and expensive global failure.

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

Make-or-buy with agents in the mix still requires you to define tool allow-lists and human override. Buying the runtime does not buy judgment.

## When models join the workflow

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

AI changes tempo; leadership still owns outcomes. If escaped defects rise while suggestion counts rise, you optimized the wrong dashboard.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Report idle environment hours next to cloud spend in engineering reviews.
- Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater..
- Budget retries: cap and alert when amplification exceeds a threshold.
- Add one sustainability question to every architecture review with a named follow-up owner.
- The energy cost of flaky CI includes engineer attention.
- Ephemeralize non-prod by default; justify always-on in writing.

## Close

Constraints clarify design. Carbon and energy are constraints — use them.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Designing for fewer retries, not prettier dashboards**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
