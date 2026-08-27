---
title: "Efficiency as reliability practice: naming the owner"
date: 2025-01-16T05:00:00Z
categories:
  - Sustainability
  - Engineering
draft: false
---

What Asim Hussain’s green software work asks of us is plain: treat energy and carbon awareness as first-class design inputs.

I will stay on this thesis — no adjacent manifesto, no tour of every neighboring discipline.

On **Efficiency as reliability practice**, refuse waste that buys no safety — retry storms, flaky CI, always-on idle fleets — and assign an owner who can change sizing or schedules. Unowned green metrics are decoration.

When pressure rises, teams drop the unowned practice first. Put **Efficiency as reliability practice** in the path of work — templates, checklists, review norms — or admit it was optional applause.

## Practices with enough detail to copy

Cadence beats intensity. These hold when they fit inside weeks people already live.

### 1

Add one sustainability question to every architecture review with a named follow-up owner.

Put sustainability questions in architecture forums: what did we choose that forces waste forever? If the forum cannot change a decision, it is theater.

### 2

Report idle environment hours next to cloud spend in engineering reviews.

Efficiency as reliability practice shows up when you delete a redundant pipeline stage and incident escape rate does not rise. That is the experiment worth running.

### 3

Ephemeralize non-prod by default; justify always-on in writing.

Sustainable pace and sustainable systems share a refusal: do not buy speed with hidden churn — flaky tests, retry storms, or always-on idle fleets.

### 4

Track flaky test quarantine time as a reliability SLO.

Architecture forums that never change a sizing or schedule decision are performing green theater. Require a reversible experiment with an owner.

The energy cost of flaky CI includes engineer attention. Fix flakes as reliability work with an SLO on quarantine time.

Ephemeralize non-prod by default. Always-on demo and staging fleets are often habit, not requirement.

Write one page while the decision is still warm — context, options, choice, owner, revisit date. Verbal alignment on **Efficiency as reliability practice** evaporates under ordinary calendar pressure, and Slack archaeology is a poor substitute for a decision record.

## Scenes

A team discovers staging mirrors production capacity while serving a handful of QA users. Right-sizing frees budget and reduces the blast radius of bad deploys.

Staging runs at production scale “for realism” while load profiles show it is idle 20 hours a day. Right-sizing is leadership because nobody else can say no cleanly.

Flaky tests burn CI minutes nightly. Engineers ignore failures. Carbon and attention both leak. Quarantine with a deadline beats living with noise.

## Tradeoffs

Right-sizing can feel like risk. Mitigate with scale-up paths and load tests, not eternal overprovision.

Carbon-aware batch shifts can delay results. Make the delay explicit and reversible.

Deleting pipeline stages requires courage and good eval of what still protects users.

Measure what you claim to care about. If **Efficiency as reliability practice** only appears in kickoff slides and never in review, incident, or planning artifacts, it is branding. Put a verification signal where people already look.

Flaky CI burns minutes and attention. Quarantine with deadlines; infinite noise trains people to ignore real failures.

## Failure modes

Each of these is a missing control, not a personality problem:

- Always-on environments for demos that could be ephemeral.
- Greenwashing metrics that never change an architecture decision.
- Dashboards of carbon without owners who can change schedules or sizing.
- Flaky CI accepted as weather instead of a defect.

Measuring compute waste without an owner who can delete or resize is dashboards as decoration. Pair every metric with a decision rights note.

Retry amplification should have a budget and an alert. Unbounded retries are a distributed denial of your own reliability.

Measure compute waste in product teams: idle envs, redundant builds, chatty meshes with no owner. Numbers create permission to delete.

CI minutes are both money and attention. Quarantine flakes with deadlines; infinite quarantine is how noise becomes culture.

Right-size infrastructure as leadership work: challenge defaults that force always-on waste for rarely-used paths. “Just in case” environments need a written justification.

Design for fewer retries, not prettier dashboards. Retries multiply compute and hide root causes. Cap amplification and alert when it exceeds a threshold.

Right-sizing after a traffic shape change is a leadership conversation because finance, platform, and product all feel the “what if” differently. Bring numbers.

Carbon-aware scheduling without slogans means shifting batch work when it is safe and measuring whether load actually moved. Unmeasured virtue is marketing.

Architecture review asks about carbon once, records a slogan, changes no sizing decision. Next quarter the same waste remains. Sustainability reviews need owners who can change schedules or footprint.

Carbon-aware batch jobs shift to night without checking downstream SLA commitments. Green intent creates customer pain. Constraints must be negotiated, not silently applied.

A team celebrates resilience because the client retries aggressively. Production is stable-ish and the bill is not. They built a retry storm and called it fortitude. Cap retries and fix the root timeout.

One more practice worth installing: Budget retries: cap and alert when amplification exceeds a threshold.

The point of writing this down is not documentation theater. It is so the next person does not have to reconstruct intent from Slack.

## Close

Efficiency is operational maturity. Lead it like any other reliability practice.

On **Efficiency as reliability practice**, keep the loop short: write the decision, name the owner, verify the outcome.
