---
title: "Right-sizing infrastructure as leadership work (2026)"
date: 2026-02-10T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

**Right-sizing infrastructure as leadership work** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Green software and efficiency gets stuck in slogans when nobody owns a control that changes architecture, schedules, or sizing. Leadership makes the constraint real.

Flaky CI, chatty retries, and oversized environments are leadership issues because they burn attention and energy.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## What I refuse to romanticize

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Flaky CI accepted as weather instead of a defect.

Dashboards of carbon without owners who can change schedules or sizing.

Always-on environments for demos that could be ephemeral.

Retry storms celebrated as resilience while they burn budget and hide bugs.

## What to put in place before the announcement

Those failures map to controls. Install the smallest ones that make failure legible.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved. Unmeasured virtue is marketing.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.

## Where this shows up

Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.

A team celebrates resilience because the client retries aggressively. Production is stable-ish and the bill is not. They built a retry storm and called it fortitude. Cap retries and fix the root timeout.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

## Tradeoffs worth naming

Carbon-aware batch shifts can delay results. Make the delay explicit and reversible.

Deleting pipeline stages requires courage and good eval of what still protects users.

Right-sizing can feel like risk. Mitigate with scale-up paths and load tests, not eternal overprovision.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## The neighboring discipline

A durable approach borrows controls from Engineering leadership instead of inventing a parallel religion.

Put repayment of known debt on the same board as features. Unowned debt is future incident prep disguised as optimism. If it cannot compete for capacity in the open, it will compete for sleep during an outage.

Hiring celebrates architects who dazzle in system-design interviews but cannot leave a service operable on-call. Six months later, juniors inherit tribal knowledge. The leadership miss was selecting for theater over inheritance.

Reorganizations that change reporting lines without rewriting ownership maps just move the fog. Update runbooks and the “who decides” table in the same week you change the org chart.

## When models join the workflow

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Prompting is not process. Harnesses are: allow-lists, templates, evals, and review norms that survive a teammate leaving.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Track flaky test quarantine time as a reliability SLO.
- Ephemeralize non-prod by default; justify always-on in writing.
- Add one sustainability question to every architecture review with a named follow-up owner.
- Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved.
- Budget retries: cap and alert when amplification exceeds a threshold.
- Report idle environment hours next to cloud spend in engineering reviews.

## What to carry forward

Refuse waste that buys no safety. That is both green and kind to the on-call.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Right-sizing infrastructure as leadership work**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
