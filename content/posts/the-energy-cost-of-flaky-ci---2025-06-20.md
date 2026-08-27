---
title: "The energy cost of flaky CI"
date: 2025-06-20T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

**The energy cost of flaky CI** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

I treat Green software and efficiency as reliability practice. Waste that buys no safety is both an energy problem and an on-call problem.

Sustainable pace for people and sustainable resource use for systems are the same habit: refuse unnecessary churn.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## A week walking the practice

Imagine ordinary pressure — not a lab. Someone proposes a change that touches this practice. The first question is not which tool. It is who owns the outcome and what you will verify.

Architecture review asks about carbon once, records a slogan, changes no sizing decision. Next quarter the same waste remains. Sustainability reviews need owners who can change schedules or footprint.

Day two is writing. A short decision record: context, options, choice, owner, revisit date. Without that page, the week becomes Slack archaeology.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Midweek friction is expected. Clear drag — access, environments, unclear interfaces — before you add a status meeting that performs leadership.

Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

By week’s end, success is an operable slice: a log schema, an eval, a runbook, a kill switch, or a freshness owner — plus a human who can reverse the change.

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths. “Just in case” environments need a written justification.

## How the practice decays

- Greenwashing metrics that never change an architecture decision.
- Flaky CI accepted as weather instead of a defect.
- Dashboards of carbon without owners who can change schedules or sizing.

## The costs of doing it right

Carbon-aware batch shifts can delay results. Make the delay explicit and reversible.

Right-sizing can feel like risk. Mitigate with scale-up paths and load tests, not eternal overprovision.

Deleting pipeline stages requires courage and good eval of what still protects users.

## Operating principles

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths. “Just in case” environments need a written justification.

Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved. Unmeasured virtue is marketing.

Ephemeralize non-prod by default. Always-on demo and staging fleets are often habit, not requirement.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Efficiency is operational maturity. Lead it like any other reliability practice.

## The neighboring discipline

Leaders who isolate the practice from Engineering craft create beautiful local optima and expensive global failure.

Technical debt with a repayment schedule appears beside features with an owner and a trigger metric. Unscheduled debt always loses to the loudest roadmap slide.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

## When models join the workflow

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Require a verification trail on assisted work: what the model changed, what a human checked, and where that note lives — PR, ticket, or decision record. Authorship is not ownership of production risk.

Design hand-offs: when an agent must stop and ask, what context is packaged for the human, and how the resume is recorded. Dropped context forces humans to redo work the agent already “knew.”

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Add one sustainability question to every architecture review with a named follow-up owner.
- Track flaky test quarantine time as a reliability SLO.
- Design for fewer retries, not prettier dashboards.
- Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater..
- Budget retries: cap and alert when amplification exceeds a threshold.
- Ephemeralize non-prod by default; justify always-on in writing.

## What to carry forward

Refuse waste that buys no safety. That is both green and kind to the on-call.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **The energy cost of flaky CI**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
