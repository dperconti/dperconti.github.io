---
title: "Feedback that lands after incidents"
date: 2026-05-05T05:00:00Z
categories:
  - Mentorship
  - Leadership
draft: false
---

**Feedback that lands after incidents** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Mentorship is engineering work. It produces artifacts: better reviews, clearer decisions, safer incident leads, and people who can teach without you in the room.

Teaching judgment means letting people own a slice, fail without shame, and hear specific feedback before the lesson evaporates.

The standard is inheritance. If a new teammate cannot find the owner, the control, and the evidence, you have a story — not a practice.

## The wreck as syllabus

I teach from failure modes because teams already have scars. Naming them precisely is faster than inventing a framework brand.

Feedback that arrives only at review time, when grades feel political instead of formative.

Seniors rewarded only for personal output, so teaching becomes unpaid overtime.

Mentorship as calendar filler: 1:1s that never change assignments or ownership.

Stealing the work under the banner of helping — the mentee never practices judgment under load.

## Boring controls that compound

Those failures map to controls. Install the smallest ones that make failure legible.

Pairing as coaching is not surveillance. Time-box it, name the learning goal, and leave an artifact. Surveillance pairing produces compliance; coaching pairing produces judgment.

When someone freezes asking for help, treat it as a systems smell. Latency to ask questions predicts incident severity. Psychological safety is an engineering control.

Use review comments as teaching artifacts. Prefer “here is the pattern and why it matters in production” over drive-by nits. A review that only polices style teaches compliance, not craft.

Keep a light written trail of growth so progress is not a vibe only the manager remembers. Promotion packets should not require archaeology.

Seniors need deliberate practice teaching: lead a review huddle, write the onboarding doc, own feedback quality. If you only reward personal velocity, teaching becomes unpaid overtime.

Pair on the decision, not only the code. Have the mentee write the tradeoff paragraph first, then implement. Judgment is a writing skill under time pressure as much as it is a coding skill.

## Scenes from delivery

Feedback arrives only at performance review. By then it feels political. The fix is weekly specific notes tied to artifacts — PR comments, decision records, incident roles — so the review is a summary, not a surprise.

A senior is excellent individually and absent as a teacher. Promotion criteria still overweight personal output. Leadership then wonders why the bench is thin. Change the scoreboard: teaching artifacts count.

A junior with a strong copilot ships fluent PRs. Mentorship is teaching them to distrust fluent wrongness: invariants, authz edges, and “what breaks at 10x load.” Without that coaching, you accelerate confident mistakes.

## What you give up

With AI drafting, the tradeoff is review load. Explicit verification notes reduce merge regret more than asking people to “be careful.”

The tradeoff in not stealing the work is short-term speed. You will be slower this afternoon so the team is faster next month. Leaders who cannot tolerate that tradeoff become permanent critical path.

The tradeoff in public sponsorship is risk to your own reputation. Take it. That is part of the job. Private cheerleading costs you nothing and buys them little.

## Operating principles

Hold three standards at once: a named owner, a written control, and a verification signal. Missing any one turns the practice into performance.

Keep a light written trail of growth so progress is not a vibe only the manager remembers. Promotion packets should not require archaeology.

Seniors need deliberate practice teaching: lead a review huddle, write the onboarding doc, own feedback quality. If you only reward personal velocity, teaching becomes unpaid overtime.

Pair on the decision, not only the code. Have the mentee write the tradeoff paragraph first, then implement. Judgment is a writing skill under time pressure as much as it is a coding skill.

Critique privately and specifically. Vague encouragement teaches nothing. Vague criticism teaches fear. Specific critique tied to a reusable pattern teaches judgment.

Career conversations should change next week’s work: a stretch ownership, a public design, a safer incident role — not only aspirational titles twelve months out.

A mid-level engineer wants promotion. Their manager talks about “visibility.” A better move: sponsor them to own a migration with a written plan, a kill switch, and a teaching review for the team afterward.

None of these principles require a new program name. They require attention in the path of work — reviews, design notes, procurement, and post-incident follow-through.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Do not silo the practice

A durable approach borrows controls from Engineering craft instead of inventing a parallel religion.

Migrations that respect capacity use thin slices, dual-write windows, and a kill switch. Big-bang weekends consume goodwill and leave half-migrated states.

API consumers invent conflicting interpretations of optional fields because the contract never said which fields are load-bearing. A one-page consumer expectation doc would have been cheaper than the outage.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

## When models join the workflow

If agents or copilots touch this workflow, add budgets, logs, and a kill switch before you add autonomy.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

Emit events for every tool call in production. Incidents without forensics become superstition. Event-driven design is how you keep humans in the loop without standing over the process.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every month: one public sponsorship act — authorship, presentation, or incident lead.
- Every 1:1: one concrete coaching ask, one ownership shift, one written follow-up.
- When AI drafts: require a human verification note in the PR describing what was checked and how.
- When someone freezes asking for help, treat it as a systems smell.
- Quarterly: seniors run a teaching session from a real failure (escaped defect, bad hand-off, stale RAG answer).
- Every PR review: at least one comment that teaches a reusable pattern.

## What to carry forward

The measure of mentorship is whether the next hard problem can be owned by someone else — with you still available, not required.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Feedback that lands after incidents**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
