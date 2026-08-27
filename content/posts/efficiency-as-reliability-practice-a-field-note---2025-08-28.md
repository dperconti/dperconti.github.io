---
title: "Efficiency as reliability practice: a field note"
date: 2025-08-28T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

A field note on **Efficiency as reliability practice** should be inspectable next week. Mechanisms beat vibes.

Green software and efficiency is not a separate virtue track. It is the discipline of fewer retries, right-sized environments, and CI that does not burn cycles for vanity.

Green software is an engineering constraint: efficiency as reliability and cost discipline, not a branding exercise after the fact.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Design the loop

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Ephemeralize non-prod by default. Always-on demo and staging fleets are often habit, not requirement.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.

Greenwashing metrics that never change an architecture decision.

Report idle environment hours next to cloud spend in engineering reviews.

Budget retries: cap and alert when amplification exceeds a threshold.

A team celebrates resilience because the client retries aggressively. Production is stable-ish and the bill is not. They built a retry storm and called it fortitude. Cap retries and fix the root timeout.

## Tradeoffs worth naming

Carbon-aware batch shifts can delay results. Make the delay explicit and reversible.

Right-sizing can feel like risk. Mitigate with scale-up paths and load tests, not eternal overprovision.

Deleting pipeline stages requires courage and good eval of what still protects users.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

## Operating principles

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Efficiency is operational maturity. Lead it like any other reliability practice.

## Do not silo the practice

Leaders who isolate the practice from Engineering craft create beautiful local optima and expensive global failure.

Testing strategy when speed matters protects the invariants customers feel. Coverage percentages without risk focus become theater.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

Incident response that improves the system ends with a control change dated within a week. Timelines without control changes are storytelling.

## When models join the workflow

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Define allowed tools and data boundaries. Copilots without policy become shadow IT with autocomplete. Secrets, customer data, and authz logic need explicit rules.

Tool use as a privilege, not a default. Grant the minimum side effects; expand with evidence. Omnipotent agents that “just figure it out” eventually figure out the wrong production action.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Add one sustainability question to every architecture review with a named follow-up owner.
- Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets..
- Budget retries: cap and alert when amplification exceeds a threshold.
- Report idle environment hours next to cloud spend in engineering reviews.
- Ephemeralize non-prod by default; justify always-on in writing.
- Track flaky test quarantine time as a reliability SLO.

## The point, again

Constraints clarify design. Carbon and energy are constraints — use them.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Efficiency as reliability practice**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
