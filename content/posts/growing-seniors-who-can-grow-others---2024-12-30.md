---
title: "Growing seniors who can grow others"
date: 2024-12-30T05:00:00Z
categories:
  - Mentorship
  - Leadership
draft: false
---

**Growing seniors who can grow others** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Mentorship is engineering work. It produces artifacts: better reviews, clearer decisions, safer incident leads, and people who can teach without you in the room.

Growing seniors who can grow others is how organizations scale craft without scaling heroics.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## Design the loop

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Seniors need deliberate practice teaching: lead a review huddle, write the onboarding doc, own feedback quality. If you only reward personal velocity, teaching becomes unpaid overtime.

When someone freezes asking for help, treat it as a systems smell. Latency to ask questions predicts incident severity. Psychological safety is an engineering control.

A mid-level engineer wants promotion. Their manager talks about “visibility.” A better move: sponsor them to own a migration with a written plan, a kill switch, and a teaching review for the team afterward.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Pair on the decision, not only the code. Have the mentee write the tradeoff paragraph first, then implement. Judgment is a writing skill under time pressure as much as it is a coding skill.

Keep a light written trail of growth so progress is not a vibe only the manager remembers. Promotion packets should not require archaeology.

A senior is excellent individually and absent as a teacher. Promotion criteria still overweight personal output. Leadership then wonders why the bench is thin. Change the scoreboard: teaching artifacts count.

AI tools introduced without coaching on verification, data boundaries, or accountability.

Quarterly: seniors run a teaching session from a real failure (escaped defect, bad hand-off, stale RAG answer).

Every PR review: at least one comment that teaches a reusable pattern.

A junior with a strong copilot ships fluent PRs. Mentorship is teaching them to distrust fluent wrongness: invariants, authz edges, and “what breaks at 10x load.” Without that coaching, you accelerate confident mistakes.

## The costs of doing it right

The tradeoff in public sponsorship is risk to your own reputation. Take it. That is part of the job. Private cheerleading costs you nothing and buys them little.

The tradeoff in not stealing the work is short-term speed. You will be slower this afternoon so the team is faster next month. Leaders who cannot tolerate that tradeoff become permanent critical path.

With AI drafting, the tradeoff is review load. Explicit verification notes reduce merge regret more than asking people to “be careful.”

Feedback that lands after incidents should arrive within days, tied to a specific decision or omission, and paired with a practice rep. Delayed generic feedback teaches nothing useful.

## Principles under ordinary pressure

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Keep a light written trail of growth so progress is not a vibe only the manager remembers. Promotion packets should not require archaeology.

Feedback that lands after incidents should arrive within days, tied to a specific decision or omission, and paired with a practice rep. Delayed generic feedback teaches nothing useful.

Use review comments as teaching artifacts. Prefer “here is the pattern and why it matters in production” over drive-by nits. A review that only polices style teaches compliance, not craft.

Pairing as coaching is not surveillance. Time-box it, name the learning goal, and leave an artifact. Surveillance pairing produces compliance; coaching pairing produces judgment.

Career conversations should change next week’s work: a stretch ownership, a public design, a safer incident role — not only aspirational titles twelve months out.

AI-assisted workflows arrive without coaching norms. People paste secrets into tools, accept insecure snippets, and skip tests because the model “looked sure.” Literacy clinics on one failure mode per month beat a single all-hands about AI.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Keep the feedback loop short enough that the team can feel the practice working before the next planning cycle.

## The neighboring discipline

Leaders who isolate the practice from Engineering craft create beautiful local optima and expensive global failure.

Observability that tells a story correlates user impact → service → change → owner. Orphaned dashboards are decoration. Alerts that fire for noise train people to ignore harm.

An architecture review celebrates a new service boundary. Nobody asks who owns the failure mode across the new network hop. Three incidents later, the boundary is rewritten — this time with an owner map.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

## When models join the workflow

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Update review norms when copilots arrive. If you do not, you will approve fluent bugs faster. Slow the merge until verification is explicit.

Orchestration without a black-box conductor: prefer explicit workflows over an opaque planner nobody can debug. Debuggability is a product requirement.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every PR review: at least one comment that teaches a reusable pattern.
- Quarterly: seniors run a teaching session from a real failure (escaped defect, bad hand-off, stale RAG answer).
- When AI drafts: require a human verification note in the PR describing what was checked and how.
- Seniors need deliberate practice teaching: lead a review huddle, write the onboarding doc, own feedback quality.
- Every month: one public sponsorship act — authorship, presentation, or incident lead.
- Every 1:1: one concrete coaching ask, one ownership shift, one written follow-up.

## Close

If your calendar is full, shrink the loop — do not cancel the coaching.

Continuity is the product. Tools and frameworks are optional accessories.

On **Growing seniors who can grow others**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
