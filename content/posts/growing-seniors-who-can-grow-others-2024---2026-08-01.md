---
title: "Growing seniors who can grow others (2024)"
date: 2026-08-01T05:00:00Z
categories:
  - Mentorship
  - Leadership
draft: false
---

**Growing seniors who can grow others** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Mentorship is engineering work. It produces artifacts: better reviews, clearer decisions, safer incident leads, and people who can teach without you in the room.

Teaching judgment means letting people own a slice, fail without shame, and hear specific feedback before the lesson evaporates.

I am not interested in branding this work. I am interested in whether the next person can run it without a week of hallway archaeology.

## What to put in place before the announcement

Start with mechanisms. For this work, the first controls should be boring on purpose — inspectable, teachable, and cheap to revisit.

Sponsor publicly. Put someone’s name on the design review invite, the RFC author line, the customer-facing postmortem. Private belief in someone does not compound; public sponsorship does.

Feedback that lands after incidents should arrive within days, tied to a specific decision or omission, and paired with a practice rep. Delayed generic feedback teaches nothing useful.

Seniors need deliberate practice teaching: lead a review huddle, write the onboarding doc, own feedback quality. If you only reward personal velocity, teaching becomes unpaid overtime.

Critique privately and specifically. Vague encouragement teaches nothing. Vague criticism teaches fear. Specific critique tied to a reusable pattern teaches judgment.

Keep a light written trail of growth so progress is not a vibe only the manager remembers. Promotion packets should not require archaeology.

When someone freezes asking for help, treat it as a systems smell. Latency to ask questions predicts incident severity. Psychological safety is an engineering control.

## Scenes from delivery

Feedback arrives only at performance review. By then it feels political. The fix is weekly specific notes tied to artifacts — PR comments, decision records, incident roles — so the review is a summary, not a surprise.

A mid-level engineer wants promotion. Their manager talks about “visibility.” A better move: sponsor them to own a migration with a written plan, a kill switch, and a teaching review for the team afterward.

A junior with a strong copilot ships fluent PRs. Mentorship is teaching them to distrust fluent wrongness: invariants, authz edges, and “what breaks at 10x load.” Without that coaching, you accelerate confident mistakes.

## Failure modes that teach

Each failure mode below is a missing control. Another meeting will not install it.

- Mentorship as calendar filler: 1:1s that never change assignments or ownership.
- Stealing the work under the banner of helping — the mentee never practices judgment under load.
- Feedback that arrives only at review time, when grades feel political instead of formative.
- AI tools introduced without coaching on verification, data boundaries, or accountability.

## The costs of doing it right

The tradeoff in public sponsorship is risk to your own reputation. Take it. That is part of the job. Private cheerleading costs you nothing and buys them little.

With AI drafting, the tradeoff is review load. Explicit verification notes reduce merge regret more than asking people to “be careful.”

The tradeoff in not stealing the work is short-term speed. You will be slower this afternoon so the team is faster next month. Leaders who cannot tolerate that tradeoff become permanent critical path.

## Operating principles

Prefer reversible moves. If you cannot say how you would unwind the decision, you are not done designing it.

Critique privately and specifically. Vague encouragement teaches nothing. Vague criticism teaches fear. Specific critique tied to a reusable pattern teaches judgment.

Keep a light written trail of growth so progress is not a vibe only the manager remembers. Promotion packets should not require archaeology.

When someone freezes asking for help, treat it as a systems smell. Latency to ask questions predicts incident severity. Psychological safety is an engineering control.

Use review comments as teaching artifacts. Prefer “here is the pattern and why it matters in production” over drive-by nits. A review that only polices style teaches compliance, not craft.

Pairing as coaching is not surveillance. Time-box it, name the learning goal, and leave an artifact. Surveillance pairing produces compliance; coaching pairing produces judgment.

A senior is excellent individually and absent as a teacher. Promotion criteria still overweight personal output. Leadership then wonders why the bench is thin. Change the scoreboard: teaching artifacts count.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Where this couples to adjacent work

This work does not live alone. It couples to Engineering leadership.

Trust compounds when leaders absorb uncertainty without dumping it as urgency onto the people closest to the code. Urgency without triage is just anxiety with a deadline.

A leader clears a review queue personally for two sprints. Throughput rises, then collapses when they travel. The missing investment was teaching reviewers the standards in writing and calibrating once in a huddle — not becoming the queue.

Reorganizations that change reporting lines without rewriting ownership maps just move the fog. Update runbooks and the “who decides” table in the same week you change the org chart.

## Harnesses beat vibes

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Coach AI literacy as judgment: when to draft with a model, when to refuse, when to escalate. Literacy is a coaching problem, not a one-time workshop.

Event-driven agentic workflows teams can operate look like other event-driven systems: schemas, consumers, dead-letter paths, and owners.

## Checklist you can run

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every PR review: at least one comment that teaches a reusable pattern.
- Every 1:1: one concrete coaching ask, one ownership shift, one written follow-up.
- Feedback that lands after incidents should arrive within days, tied to a specific decision or omission, and paired with a practice rep.
- Sponsor publicly.
- Every month: one public sponsorship act — authorship, presentation, or incident lead.
- Quarterly: seniors run a teaching session from a real failure (escaped defect, bad hand-off, stale RAG answer).

## The point, again

If your calendar is full, shrink the loop — do not cancel the coaching.

If this feels quieter than a keynote, that is intentional. Compounding work rarely looks like theater.

On **Growing seniors who can grow others**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
