---
title: "Carbon-aware scheduling without the slogans"
date: 2024-11-07T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

**Carbon-aware scheduling without the slogans** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

I treat Green software and efficiency as reliability practice. Waste that buys no safety is both an energy problem and an on-call problem.

Green software is an engineering constraint: efficiency as reliability and cost discipline, not a branding exercise after the fact.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Design the loop

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved. Unmeasured virtue is marketing.

Architecture review asks about carbon once, records a slogan, changes no sizing decision. Next quarter the same waste remains. Sustainability reviews need owners who can change schedules or footprint.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.

Greenwashing metrics that never change an architecture decision.

Ephemeralize non-prod by default; justify always-on in writing.

Track flaky test quarantine time as a reliability SLO.

A team celebrates resilience because the client retries aggressively. Production is stable-ish and the bill is not. They built a retry storm and called it fortitude. Cap retries and fix the root timeout.

## Tradeoffs worth naming

Right-sizing can feel like risk. Mitigate with scale-up paths and load tests, not eternal overprovision.

Carbon-aware batch shifts can delay results. Make the delay explicit and reversible.

Deleting pipeline stages requires courage and good eval of what still protects users.

Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths. “Just in case” environments need a written justification.

## Operating principles

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths. “Just in case” environments need a written justification.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Efficiency is operational maturity. Lead it like any other reliability practice.

## Where this couples to adjacent work

This work does not live alone. It couples to Buy-versus-build judgment.

Platforms you buy still need owners — for identity integration, data retention, incident comms, and process translation. Procurement does not create ownership.

No exit plan. Price increases. Suddenly “switching costs” are discovered during budget season. A tabletop unwind once a year is cheaper than surprise.

The new cost of custom is maintenance, not typing. AI makes that easy to forget until the second quarter of on-call.

## Tempo changed; accountability did not

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Teach distrust of fluent wrongness. Models sound senior. Tests, invariants, and threat models still decide truth.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Budget retries: cap and alert when amplification exceeds a threshold.
- Ephemeralize non-prod by default; justify always-on in writing.
- Report idle environment hours next to cloud spend in engineering reviews.
- Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved.
- Track flaky test quarantine time as a reliability SLO.
- Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise.

## What to carry forward

Constraints clarify design. Carbon and energy are constraints — use them.

Continuity is the product. Tools and frameworks are optional accessories.

On **Carbon-aware scheduling without the slogans**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
