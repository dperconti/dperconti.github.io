---
title: "Interfaces between teams beat shared Slack channels"
date: 2024-11-29T05:00:00Z
categories:
  - Teams
  - Leadership
draft: false
---

**Interfaces between teams beat shared Slack channels** is easy to endorse and hard to operationalize. The difference is whether you can point to owners, controls, and evidence.

Cross-team collaboration gets romanticized as “more communication.” Most teams already communicate constantly. What they lack is a published interface for work that crosses boundaries.

The collaboration tax is paid in ambiguity. Clarity is a kindness and a throughput strategy.

Most failures here are ordinary: ambiguous owners, missing verification, and calendars that reward motion over continuity.

## Operating rhythm

Cadence beats intensity. The practice holds when it fits inside weeks people already live.

### 1. Practice

For every shared system: name a primary owner per failure mode.

Working agreements that age well name how to change the agreement. Static culture docs become wallpaper within a quarter.

Product wants a feature; platform wants stability. Without a capacity envelope and SLO, every conversation becomes moral. With them, the conversation becomes scheduling and tradeoffs.

### 2. Practice

When stuck: write the disagreement as options with tradeoffs; meet only to choose.

Conflict as a design input means capturing the disagreement as constraints and options. Personality narratives are a dead end; interface narratives ship.

A hand-off ticket says “ready for platform.” Platform discovers missing authz assumptions in production. Ready now means: runbook, rollback, and a joint drill — not a status emoji.

### 3. Practice

Before joint delivery: publish the interface doc and the escalation path.

The meeting you should replace with a doc is the one that only redistributes status. Keep the meeting that resolves contested decisions — and require options in writing before it starts.

Two teams “share a roadmap.” Neither owns the shared schema. Breaking changes collide. The repair is a schema owner, a deprecation clock, and an explicit consumer list — not a longer joint standup.

### 4. Practice

After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

### 5. Practice

Quarterly: delete channels and meetings that produce no decisions or artifacts.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

## What I refuse to romanticize

Stop doing these:

- Roadmaps that look shared but hide capacity fiction — platform work scheduled as free.
- Collaboration theater: more shared channels, same missing contracts.
- Hand-offs that drop context so the receiving team re-learns the sender’s scars.
- Hero bridges that mask missing contracts until attrition.

## How to hold the standard

Optimize for the next person's onboarding cost. Every undocumented exception becomes a tax on hiring and incident response.

Write the boundary as an API: inputs, outputs, latency expectations, error semantics, and who gets paged. If you cannot write that page, you do not have alignment — you have hope.

Hero bridges — one person who translates between teams — feel invaluable until they burn out and the org discovers it had no interface. Document what the hero knows while they are still standing.

Interfaces between teams beat shared Slack channels. Channels are transport; interfaces are contracts. Confusing the two creates ambient anxiety and no ownership.

Prefer async artifacts for continuity. Use meetings when the decision is contested or irreversible. Calendar density is not collaboration quality.

Publish “done” definitions across teams before joint work starts — especially for platform and product hand-offs. Ambiguous done is how resentments form.

Two orgs share on-call for a boundary service. Without a primary for each failure mode, pages bounce. Shared ownership without primaries is a page-routing bug.

If your calendar cannot fit a one-page decision record, it also cannot fit the rework that follows from skipping it.

Protocols beat vibes. Write the boundary, name the owner, make failure legible.

## The neighboring discipline

A durable approach borrows controls from Engineering craft instead of inventing a parallel religion.

Observability that cannot answer “what changed for which users?” is incomplete. Build the story path before you build the fifteenth chart.

A migration is “done” at 80% with a cleanup ticket in the backlog forever. Craft would have treated 100% with kill-switch removal as the definition of done.

Code review as teaching: require at least one pattern comment. Reject gatekeeping that only polices style without teaching why. Slow, unkind reviews are a leadership failure disguised as standards.

## Tempo changed; accountability did not

Fluent output raises the value of written invariants. Improvisation got cheaper; durable context got more precious.

Keeping humans accountable when models draft code means the merge still carries a name and a verification note. Anonymized autocomplete is not an accountability model.

Owning outcomes when agents ship changes means the human merge still carries production accountability. Agents accelerate the middle; humans own the edge.

## A plan for the next seven days

Pick one workflow. Name an owner. Choose one control. Make the outcome visible in seven days. If you cannot point to a change, you performed interest — you did not install a practice.

- When stuck: write the disagreement as options with tradeoffs; meet only to choose.
- Before joint delivery: publish the interface doc and the escalation path.
- After hand-off: verify the receiving team can operate the failure mode without a Slack ping to the sender.
- Working agreements that age well name how to change the agreement.
- Conflict as a design input means capturing the disagreement as constraints and options.
- Quarterly: delete channels and meetings that produce no decisions or artifacts.

## The point, again

If collaboration feels expensive, check the interface before you hire more coordinators.

Write the decision. Name the owner. Verify the outcome. Repeat until the next person can run it.

On **Interfaces between teams beat shared Slack channels**, use the inheritance test: after a week, can someone outside the original room explain what changed, who owns it, and how we will know if it breaks?
