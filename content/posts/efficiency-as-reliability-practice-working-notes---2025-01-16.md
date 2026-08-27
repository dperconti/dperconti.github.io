---
title: "Efficiency as reliability practice — working notes"
date: 2025-01-16T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

A field note on **Efficiency as reliability practice** should be inspectable next week. Mechanisms beat vibes.

Green software and efficiency gets stuck in slogans when nobody owns a control that changes architecture, schedules, or sizing. Leadership makes the constraint real.

Flaky CI, chatty retries, and oversized environments are leadership issues because they burn attention and energy.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## The wreck as syllabus

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Retry storms celebrated as resilience while they burn budget and hide bugs.

Dashboards of carbon without owners who can change schedules or sizing.

Always-on environments for demos that could be ephemeral.

Flaky CI accepted as weather instead of a defect.

## Mechanisms worth installing

Those failures map to controls. Install the smallest ones that make failure legible.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved. Unmeasured virtue is marketing.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

## Where this shows up

Architecture review asks about carbon once, records a slogan, changes no sizing decision. Next quarter the same waste remains. Sustainability reviews need owners who can change schedules or footprint.

A team celebrates resilience because the client retries aggressively. Production is stable-ish and the bill is not. They built a retry storm and called it fortitude. Cap retries and fix the root timeout.

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

## Tradeoffs worth naming

Deleting pipeline stages requires courage and good eval of what still protects users.

Carbon-aware batch shifts can delay results. Make the delay explicit and reversible.

Right-sizing can feel like risk. Mitigate with scale-up paths and load tests, not eternal overprovision.

## How to hold the standard

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Ephemeralize non-prod by default. Always-on demo and staging fleets are often habit, not requirement.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Do not silo the practice

Leaders who isolate the practice from Engineering leadership create beautiful local optima and expensive global failure.

Ceremony is optional; continuity is not. Keep the lightest process that still produces decisions, owners, and evidence. Delete the rest without guilt.

A leader clears a review queue personally for two sprints. Throughput rises, then collapses when they travel. The missing investment was teaching reviewers the standards in writing and calibrating once in a huddle — not becoming the queue.

Trust compounds when leaders absorb uncertainty without dumping it as urgency onto the people closest to the code. Urgency without triage is just anxiety with a deadline.

## Harnesses beat vibes

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Shipping with models without losing craft requires the same standards you already had for human drafts, plus an explicit verification step because fluency hides gaps.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets..
- Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater..
- Ephemeralize non-prod by default; justify always-on in writing.
- Add one sustainability question to every architecture review with a named follow-up owner.
- Track flaky test quarantine time as a reliability SLO.
- Budget retries: cap and alert when amplification exceeds a threshold.

## What to carry forward

Efficiency is operational maturity. Lead it like any other reliability practice.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Efficiency as reliability practice**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
