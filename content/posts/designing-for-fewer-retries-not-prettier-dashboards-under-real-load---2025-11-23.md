---
title: "Designing for fewer retries, not prettier dashboards under real load"
date: 2025-11-23T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

Under real load, **Designing for fewer retries, not prettier dashboards** stops being a slogan. Queues, incidents, and half-finished migrations reveal whether the system was designed or performed.

Green software and efficiency gets stuck in slogans when nobody owns a control that changes architecture, schedules, or sizing. Leadership makes the constraint real.

Sustainable pace for people and sustainable resource use for systems are the same habit: refuse unnecessary churn.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Boring controls that compound

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths. “Just in case” environments need a written justification.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

## Concrete cases

Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

## How the practice decays

Each failure mode below is a missing control. Another meeting will not install it.

- Retry storms celebrated as resilience while they burn budget and hide bugs.
- Greenwashing metrics that never change an architecture decision.
- Always-on environments for demos that could be ephemeral.
- Dashboards of carbon without owners who can change schedules or sizing.

## What you give up

Carbon-aware batch shifts can delay results. Make the delay explicit and reversible.

Deleting pipeline stages requires courage and good eval of what still protects users.

Right-sizing can feel like risk. Mitigate with scale-up paths and load tests, not eternal overprovision.

## Principles under ordinary pressure

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

A team celebrates resilience because the client retries aggressively. Production is stable-ish and the bill is not. They built a retry storm and called it fortitude. Cap retries and fix the root timeout.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Efficiency is operational maturity. Lead it like any other reliability practice.

## Do not silo the practice

This work does not live alone. It couples to Engineering craft.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

## When models join the workflow

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Define allowed tools and data boundaries. Copilots without policy become shadow IT with autocomplete. Secrets, customer data, and authz logic need explicit rules.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Track flaky test quarantine time as a reliability SLO.
- Ephemeralize non-prod by default; justify always-on in writing.
- Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner.
- Add one sustainability question to every architecture review with a named follow-up owner.
- Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths.
- Budget retries: cap and alert when amplification exceeds a threshold.

## Close

Refuse waste that buys no safety. That is both green and kind to the on-call.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Designing for fewer retries, not prettier dashboards**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
