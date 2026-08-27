---
title: "Career conversations that change next week’s work — note 202"
date: 2026-03-21T05:00:00Z
categories:
  - Mentorship
  - Leadership
draft: false
---

Another working note on **Career conversations that change next week’s work**: same thesis, sharper edges from recent delivery pressure.

Mentorship fails in busy calendars for a predictable reason: it was scheduled as inspiration instead of designed as a feedback loop with an owner.

Growing seniors who can grow others is how organizations scale craft without scaling heroics.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Systems view

Treat the practice as a system with inputs, outputs, and feedback. If any of those are social-only, the system will drift.

Pairing as coaching is not surveillance. Time-box it, name the learning goal, and leave an artifact. Surveillance pairing produces compliance; coaching pairing produces judgment.

The psychology of asking for help is shaped by what got rewarded last time someone asked. If asking is punished as weakness, AI tools will hide mistakes instead of surfacing uncertainty.

Feedback arrives only at performance review. By then it feels political. The fix is weekly specific notes tied to artifacts — PR comments, decision records, incident roles — so the review is a summary, not a surprise.

Useful signals tie to user impact and operability: escaped defects, stale answers, retry amplification, review cycle time, on-call toil. Vanity metrics create vanity leadership.

Feedback that lands after incidents should arrive within days, tied to a specific decision or omission, and paired with a practice rep. Delayed generic feedback teaches nothing useful.

When someone freezes asking for help, treat it as a systems smell. Latency to ask questions predicts incident severity. Psychological safety is an engineering control.

A junior with a strong copilot ships fluent PRs. Mentorship is teaching them to distrust fluent wrongness: invariants, authz edges, and “what breaks at 10x load.” Without that coaching, you accelerate confident mistakes.

AI tools introduced without coaching on verification, data boundaries, or accountability.

Every 1:1: one concrete coaching ask, one ownership shift, one written follow-up.

When AI drafts: require a human verification note in the PR describing what was checked and how.

A mid-level engineer wants promotion. Their manager talks about “visibility.” A better move: sponsor them to own a migration with a written plan, a kill switch, and a teaching review for the team afterward.

## The costs of doing it right

With AI drafting, the tradeoff is review load. Explicit verification notes reduce merge regret more than asking people to “be careful.”

The tradeoff in public sponsorship is risk to your own reputation. Take it. That is part of the job. Private cheerleading costs you nothing and buys them little.

The tradeoff in not stealing the work is short-term speed. You will be slower this afternoon so the team is faster next month. Leaders who cannot tolerate that tradeoff become permanent critical path.

Use review comments as teaching artifacts. Prefer “here is the pattern and why it matters in production” over drive-by nits. A review that only polices style teaches compliance, not craft.

## How to hold the standard

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

When someone freezes asking for help, treat it as a systems smell. Latency to ask questions predicts incident severity. Psychological safety is an engineering control.

Use review comments as teaching artifacts. Prefer “here is the pattern and why it matters in production” over drive-by nits. A review that only polices style teaches compliance, not craft.

Career conversations should change next week’s work: a stretch ownership, a public design, a safer incident role — not only aspirational titles twelve months out.

Keep a light written trail of growth so progress is not a vibe only the manager remembers. Promotion packets should not require archaeology.

Seniors need deliberate practice teaching: lead a review huddle, write the onboarding doc, own feedback quality. If you only reward personal velocity, teaching becomes unpaid overtime.

A senior is excellent individually and absent as a teacher. Promotion criteria still overweight personal output. Leadership then wonders why the bench is thin. Change the scoreboard: teaching artifacts count.

Teach the principles in the artifacts people already touch: PR templates, RFC sections, architecture checklists, and on-call runbooks.

Refuse to scale a workflow you cannot explain on a whiteboard to a new hire in fifteen minutes.

## Where this couples to adjacent work

Leaders who isolate the practice from AI in engineering workflows create beautiful local optima and expensive global failure.

Shared harnesses beat private prompt folklore. If the only way to do it “right” lives in one engineer’s chat history, you do not have a practice.

A team bans AI briefly after a bad merge, then reintroduces it without new controls. The ban was theater; the missing piece was verification and data boundaries.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

## Tempo changed; accountability did not

Models accelerate drafts. They do not absorb production accountability. Keep verification human and visible.

Teach distrust of fluent wrongness. Models sound senior. Tests, invariants, and threat models still decide truth.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- Every 1:1: one concrete coaching ask, one ownership shift, one written follow-up.
- Every PR review: at least one comment that teaches a reusable pattern.
- Quarterly: seniors run a teaching session from a real failure (escaped defect, bad hand-off, stale RAG answer).
- The psychology of asking for help is shaped by what got rewarded last time someone asked.
- When AI drafts: require a human verification note in the PR describing what was checked and how.
- Pairing as coaching is not surveillance.

## Close

If your calendar is full, shrink the loop — do not cancel the coaching.

Continuity is the product. Tools and frameworks are optional accessories.

On **Career conversations that change next week’s work**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
