---
title: "AI literacy as a coaching problem: what I watch for"
date: 2026-04-30T05:00:00Z
categories:
  - AI
  - Engineering
draft: false
---

What I watch for is not enthusiasm around **AI literacy as a coaching problem** — it is whether ownership, verification, and the next person’s path got clearer under ordinary calendar pressure.

Mentorship is engineering work. It produces artifacts: better reviews, clearer decisions, safer incident leads, and people who can teach without you in the room.

With AI in the loop, mentorship shifts toward verification, taste, and accountability. Syntax was never the hard part.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## Pressure test

Load is the honest critic. Incidents, hiring spikes, and vendor outages reveal whether the practice was designed or merely announced.

A senior is excellent individually and absent as a teacher. Promotion criteria still overweight personal output. Leadership then wonders why the bench is thin. Change the scoreboard: teaching artifacts count.

AI tools introduced without coaching on verification, data boundaries, or accountability.

Stealing the work under the banner of helping — the mentee never practices judgment under load.

## What to put in place before the announcement

Pair on the decision, not only the code. Have the mentee write the tradeoff paragraph first, then implement. Judgment is a writing skill under time pressure as much as it is a coding skill.

Sponsor publicly. Put someone’s name on the design review invite, the RFC author line, the customer-facing postmortem. Private belief in someone does not compound; public sponsorship does.

Critique privately and specifically. Vague encouragement teaches nothing. Vague criticism teaches fear. Specific critique tied to a reusable pattern teaches judgment.

Seniors need deliberate practice teaching: lead a review huddle, write the onboarding doc, own feedback quality. If you only reward personal velocity, teaching becomes unpaid overtime.

Use review comments as teaching artifacts. Prefer “here is the pattern and why it matters in production” over drive-by nits. A review that only polices style teaches compliance, not craft.

Feedback that lands after incidents should arrive within days, tied to a specific decision or omission, and paired with a practice rep. Delayed generic feedback teaches nothing useful.

A junior with a strong copilot ships fluent PRs. Mentorship is teaching them to distrust fluent wrongness: invariants, authz edges, and “what breaks at 10x load.” Without that coaching, you accelerate confident mistakes.

Under load, meetings multiply. Resist. Written interfaces, budgets, and kill switches scale better than status theater.

Feedback arrives only at performance review. By then it feels political. The fix is weekly specific notes tied to artifacts — PR comments, decision records, incident roles — so the review is a summary, not a surprise.

## Tradeoffs worth naming

The tradeoff in public sponsorship is risk to your own reputation. Take it. That is part of the job. Private cheerleading costs you nothing and buys them little.

The tradeoff in not stealing the work is short-term speed. You will be slower this afternoon so the team is faster next month. Leaders who cannot tolerate that tradeoff become permanent critical path.

With AI drafting, the tradeoff is review load. Explicit verification notes reduce merge regret more than asking people to “be careful.”

- Seniors rewarded only for personal output, so teaching becomes unpaid overtime.
- Mentorship as calendar filler: 1:1s that never change assignments or ownership.

## Principles under ordinary pressure

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Seniors need deliberate practice teaching: lead a review huddle, write the onboarding doc, own feedback quality. If you only reward personal velocity, teaching becomes unpaid overtime.

Use review comments as teaching artifacts. Prefer “here is the pattern and why it matters in production” over drive-by nits. A review that only polices style teaches compliance, not craft.

Feedback that lands after incidents should arrive within days, tied to a specific decision or omission, and paired with a practice rep. Delayed generic feedback teaches nothing useful.

Pairing as coaching is not surveillance. Time-box it, name the learning goal, and leave an artifact. Surveillance pairing produces compliance; coaching pairing produces judgment.

Keep a light written trail of growth so progress is not a vibe only the manager remembers. Promotion packets should not require archaeology.

A mid-level engineer wants promotion. Their manager talks about “visibility.” A better move: sponsor them to own a migration with a written plan, a kill switch, and a teaching review for the team afterward.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## The neighboring discipline

This work does not live alone. It couples to Engineering craft.

API design for inheritors: name invariants, versioning rules, and what “breaking” means before the first client. Clever endpoints without consumer contracts become permanent politics.

Incident response produces a beautiful timeline and no permanent control. The next similar failure arrives on schedule. Remediation means a test, a rate limit, a privilege change, or a budget — something that bites.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

## When models join the workflow

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.

Harnesses first: logs, token/time budgets, blast-radius limits, and a kill switch a human can use without a war room. Autonomy is earned after those exist.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Quarterly: seniors run a teaching session from a real failure (escaped defect, bad hand-off, stale RAG answer).
- When AI drafts: require a human verification note in the PR describing what was checked and how.
- Sponsor publicly.
- Every PR review: at least one comment that teaches a reusable pattern.
- Every month: one public sponsorship act — authorship, presentation, or incident lead.
- Every 1:1: one concrete coaching ask, one ownership shift, one written follow-up.

## What to carry forward

If your calendar is full, shrink the loop — do not cancel the coaching.

Continuity is the product. Tools and frameworks are optional accessories.

On **AI literacy as a coaching problem**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
