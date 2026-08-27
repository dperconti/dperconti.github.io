---
title: "Measuring compute waste in product teams"
date: 2026-03-13T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

**Measuring compute waste in product teams** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Green software and efficiency gets stuck in slogans when nobody owns a control that changes architecture, schedules, or sizing. Leadership makes the constraint real.

Green software is an engineering constraint: efficiency as reliability and cost discipline, not a branding exercise after the fact.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## What I refuse to romanticize

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Retry storms celebrated as resilience while they burn budget and hide bugs.

Flaky CI accepted as weather instead of a defect.

Greenwashing metrics that never change an architecture decision.

Dashboards of carbon without owners who can change schedules or sizing.

## The operating controls

Those failures map to controls. Install the smallest ones that make failure legible.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

Ephemeralize non-prod by default. Always-on demo and staging fleets are often habit, not requirement.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths. “Just in case” environments need a written justification.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

## Scenes from delivery

Architecture review asks about carbon once, records a slogan, changes no sizing decision. Next quarter the same waste remains. Sustainability reviews need owners who can change schedules or footprint.

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

A team celebrates resilience because the client retries aggressively. Production is stable-ish and the bill is not. They built a retry storm and called it fortitude. Cap retries and fix the root timeout.

## Tradeoffs worth naming

Right-sizing can feel like risk. Mitigate with scale-up paths and load tests, not eternal overprovision.

Deleting pipeline stages requires courage and good eval of what still protects users.

Carbon-aware batch shifts can delay results. Make the delay explicit and reversible.

## Principles under ordinary pressure

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths. “Just in case” environments need a written justification.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## Do not silo the practice

This work does not live alone. It couples to Engineering craft.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

## When models join the workflow

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Evaluating AI assistance without vanity metrics means comparing escaped defects, onboarding time, and review quality — not counting accepted suggestions like arcade tickets.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Budget retries: cap and alert when amplification exceeds a threshold.
- Add one sustainability question to every architecture review with a named follow-up owner.
- Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently.
- Ephemeralize non-prod by default; justify always-on in writing.
- Track flaky test quarantine time as a reliability SLO.
- Report idle environment hours next to cloud spend in engineering reviews.

## What to carry forward

Refuse waste that buys no safety. That is both green and kind to the on-call.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Measuring compute waste in product teams**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
