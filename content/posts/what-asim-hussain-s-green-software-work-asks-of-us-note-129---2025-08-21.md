---
title: "What Asim Hussain’s green software work asks of us — note 129"
date: 2025-08-21T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

Another working note on **What Asim Hussain’s green software work asks of us**: same thesis, sharper edges from recent delivery pressure.

Green software and efficiency is not a separate virtue track. It is the discipline of fewer retries, right-sized environments, and CI that does not burn cycles for vanity.

Flaky CI, chatty retries, and oversized environments are leadership issues because they burn attention and energy.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Cadence that survives calendars

Cadence beats intensity. The practice holds when it fits inside weeks people already live.

### 1. Practice

Report idle environment hours next to cloud spend in engineering reviews.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

### 2. Practice

Track flaky test quarantine time as a reliability SLO.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

### 3. Practice

Ephemeralize non-prod by default; justify always-on in writing.

Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths. “Just in case” environments need a written justification.

A team celebrates resilience because the client retries aggressively. Production is stable-ish and the bill is not. They built a retry storm and called it fortitude. Cap retries and fix the root timeout.

### 4. Practice

Add one sustainability question to every architecture review with a named follow-up owner.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

### 5. Practice

Budget retries: cap and alert when amplification exceeds a threshold.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

## What I refuse to romanticize

Stop doing these:

- Always-on environments for demos that could be ephemeral.
- Dashboards of carbon without owners who can change schedules or sizing.
- Retry storms celebrated as resilience while they burn budget and hide bugs.
- Greenwashing metrics that never change an architecture decision.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## The neighboring discipline

Leaders who isolate the practice from Buy-versus-build judgment create beautiful local optima and expensive global failure.

When a vendor becomes your process, document the process in your words. Otherwise a price hike or outage becomes an identity crisis.

Build the harness, buy the commodity works until someone rebuilds the commodity “for flexibility.” Flexibility without differentiated ownership is usually nostalgia.

Price integration debt explicitly: connectors, identity, logging, eval wiring, and the people who will babysit them. Purchase price is the down payment.

## Harnesses beat vibes

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

Idempotency for agentic side effects — retries must not double-charge, double-page, or double-merge. Partial failure is normal; duplicate effects are optional if you design poorly.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Ephemeralize non-prod by default; justify always-on in writing.
- Add one sustainability question to every architecture review with a named follow-up owner.
- Report idle environment hours next to cloud spend in engineering reviews.
- Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise.
- Budget retries: cap and alert when amplification exceeds a threshold.
- Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater..

## What to carry forward

Efficiency is operational maturity. Lead it like any other reliability practice.

Continuity is the product. Tools and frameworks are optional accessories.

On **What Asim Hussain’s green software work asks of us**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
