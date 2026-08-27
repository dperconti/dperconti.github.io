---
title: "The energy cost of flaky CI when the calendar is full"
date: 2025-12-21T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

When the calendar is full, **The energy cost of flaky CI** only survives inside short loops. Long programs without owners become status machines.

Green software and efficiency is not a separate virtue track. It is the discipline of fewer retries, right-sized environments, and CI that does not burn cycles for vanity.

Green software is an engineering constraint: efficiency as reliability and cost discipline, not a branding exercise after the fact.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## The operating controls

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved. Unmeasured virtue is marketing.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

## Where this shows up

Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.

Architecture review asks about carbon once, records a slogan, changes no sizing decision. Next quarter the same waste remains. Sustainability reviews need owners who can change schedules or footprint.

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

## How the practice decays

Each failure mode below is a missing control. Another meeting will not install it.

- Retry storms celebrated as resilience while they burn budget and hide bugs.
- Greenwashing metrics that never change an architecture decision.
- Always-on environments for demos that could be ephemeral.
- Flaky CI accepted as weather instead of a defect.

## The costs of doing it right

Carbon-aware batch shifts can delay results. Make the delay explicit and reversible.

Deleting pipeline stages requires courage and good eval of what still protects users.

Right-sizing can feel like risk. Mitigate with scale-up paths and load tests, not eternal overprovision.

## How to hold the standard

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved. Unmeasured virtue is marketing.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Ephemeralize non-prod by default. Always-on demo and staging fleets are often habit, not requirement.

A team celebrates resilience because the client retries aggressively. Production is stable-ish and the bill is not. They built a retry storm and called it fortitude. Cap retries and fix the root timeout.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## The neighboring discipline

This work does not live alone. It couples to Engineering craft.

Architecture decisions you can reverse include a rollback path and a date to re-evaluate assumptions. Inevitable-looking diagrams are often just unchallenged ones.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

Small platforms that stay operable refuse features that cannot be owned on-call by the same team that ships them. Unowned platform features are product debt wearing infrastructure clothing.

## Harnesses beat vibes

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Coach AI literacy as judgment: when to draft with a model, when to refuse, when to escalate. Literacy is a coaching problem, not a one-time workshop.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Report idle environment hours next to cloud spend in engineering reviews.
- Track flaky test quarantine time as a reliability SLO.
- Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise.
- Budget retries: cap and alert when amplification exceeds a threshold.
- Ephemeralize non-prod by default; justify always-on in writing.
- Add one sustainability question to every architecture review with a named follow-up owner.

## What to carry forward

Constraints clarify design. Carbon and energy are constraints — use them.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **The energy cost of flaky CI**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
