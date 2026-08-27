---
title: "Efficiency as reliability practice"
date: 2024-12-16T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

**Efficiency as reliability practice** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Green software and efficiency gets stuck in slogans when nobody owns a control that changes architecture, schedules, or sizing. Leadership makes the constraint real.

What Asim Hussain’s green software work asks of us is plain: treat energy and carbon awareness as first-class design inputs.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Grow the next owner

If the practice only lives in your head, you have a bus factor of one. Mentorship here means transferring judgment through artifacts.

Feedback that lands after incidents should arrive within days, tied to a specific decision or omission, and paired with a practice rep. Delayed generic feedback teaches nothing useful.

Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths. “Just in case” environments need a written justification.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

Juniors need safe ownership of a thin slice and specific feedback. Seniors need sponsorship to teach — review quality, RFC authorship, incident lead — not only more tickets.

A team celebrates resilience because the client retries aggressively. Production is stable-ish and the bill is not. They built a retry storm and called it fortitude. Cap retries and fix the root timeout.

Ephemeralize non-prod by default. Always-on demo and staging fleets are often habit, not requirement.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.

## Cadence that survives calendars

- Report idle environment hours next to cloud spend in engineering reviews.
- Add one sustainability question to every architecture review with a named follow-up owner.
- Track flaky test quarantine time as a reliability SLO.
- Ephemeralize non-prod by default; justify always-on in writing.
- Budget retries: cap and alert when amplification exceeds a threshold.

## How the practice decays

- Flaky CI accepted as weather instead of a defect.
- Always-on environments for demos that could be ephemeral.
- Dashboards of carbon without owners who can change schedules or sizing.

## Principles under ordinary pressure

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved. Unmeasured virtue is marketing.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Where this couples to adjacent work

Leaders who isolate the practice from Engineering leadership create beautiful local optima and expensive global failure.

Put repayment of known debt on the same board as features. Unowned debt is future incident prep disguised as optimism. If it cannot compete for capacity in the open, it will compete for sleep during an outage.

An incident write-up is eloquent and changes nothing. No test, no budget, no privilege change, no ownership map update. Leadership failed the expensive coaching moment. Feelings are not remediation.

Make decisions durable. A one-page note with context, options, chosen path, owner, and a revisit date beats a meeting that everyone remembers differently by Thursday. Verbal alignment evaporates under calendar pressure; written decisions compound.

## When models join the workflow

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Prompting is not process. Harnesses are: allow-lists, templates, evals, and review norms that survive a teammate leaving.

Orchestration without a black-box conductor means you can explain the workflow on a whiteboard and pause any step. If you cannot, you cannot operate it.

## Make it observable

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths.
- Budget retries: cap and alert when amplification exceeds a threshold.
- Track flaky test quarantine time as a reliability SLO.
- Design for fewer retries, not prettier dashboards.
- Add one sustainability question to every architecture review with a named follow-up owner.
- Report idle environment hours next to cloud spend in engineering reviews.

## Close

Refuse waste that buys no safety. That is both green and kind to the on-call.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Efficiency as reliability practice**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
