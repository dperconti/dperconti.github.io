---
title: "Sustainability reviews in architecture forums — note 155"
date: 2025-11-09T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

Another working note on **Sustainability reviews in architecture forums**: same thesis, sharper edges from recent delivery pressure.

Green software and efficiency is not a separate virtue track. It is the discipline of fewer retries, right-sized environments, and CI that does not burn cycles for vanity.

Flaky CI, chatty retries, and oversized environments are leadership issues because they burn attention and energy.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Cadence that survives calendars

Cadence beats intensity. The practice holds when it fits inside weeks people already live.

### 1. Practice

Ephemeralize non-prod by default; justify always-on in writing.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

### 2. Practice

Budget retries: cap and alert when amplification exceeds a threshold.

Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved. Unmeasured virtue is marketing.

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

### 3. Practice

Track flaky test quarantine time as a reliability SLO.

Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.

Architecture review asks about carbon once, records a slogan, changes no sizing decision. Next quarter the same waste remains. Sustainability reviews need owners who can change schedules or footprint.

### 4. Practice

Report idle environment hours next to cloud spend in engineering reviews.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

### 5. Practice

Add one sustainability question to every architecture review with a named follow-up owner.

Ephemeralize non-prod by default. Always-on demo and staging fleets are often habit, not requirement.

## How the practice decays

Stop doing these:

- Dashboards of carbon without owners who can change schedules or sizing.
- Flaky CI accepted as weather instead of a defect.
- Retry storms celebrated as resilience while they burn budget and hide bugs.
- Greenwashing metrics that never change an architecture decision.

## Operating principles

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

Ephemeralize non-prod by default. Always-on demo and staging fleets are often habit, not requirement.

Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths. “Just in case” environments need a written justification.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## The neighboring discipline

Leaders who isolate the practice from Engineering craft create beautiful local optima and expensive global failure.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

A team ships a “temporary” dual-write and forgets the delete ticket. Six months later both paths are load-bearing. Craft would have put a repayment date next to the feature flag.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

## Harnesses beat vibes

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Measure assistance by outcomes you already care about — change-fail rate, review cycle time, incident escape — not vanity “lines generated” or “acceptance rate.”

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Add one sustainability question to every architecture review with a named follow-up owner.
- Track flaky test quarantine time as a reliability SLO.
- Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved.
- The energy cost of flaky CI includes engineer attention.
- Report idle environment hours next to cloud spend in engineering reviews.
- Budget retries: cap and alert when amplification exceeds a threshold.

## What to carry forward

Efficiency is operational maturity. Lead it like any other reliability practice.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Sustainability reviews in architecture forums**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
