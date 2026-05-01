---
title: "TrunkMatch — marketplace matching + queueing for hand-me-downs"
description: "A marketplace for kids' hand-me-downs, matched by age, size, and family needs."
featured: true
product_status: live
role: "Engineering Manager / Tech Lead"
team: "TBD"
stack:
  - "TypeScript"
  - "React"
  - "Next.js"
  - "Postgres"
highlights:
  - "Implemented matching primitives around sizes, age, and fit"
  - "Designed a queueing model to prioritize best matches fairly"
  - "Built seller workflows for listing trunks quickly"
links:
  website: "https://www.trunkmatch.com/"
draft: false
---

## Summary

TrunkMatch is a marketplace for kids' hand-me-downs, matched by age, size, and family needs, with a queue that gives priority access to the best match first.

## The problem

Most marketplaces are “search first”. Here, the core value is *matching*—parents shouldn’t have to guess which listings fit their kids or who should see a trunk first.

## Constraints

- Matching needs to consider changing sizes over time (current vs outgrown).
- Sellers need a low-friction listing flow (photos + sizes + condition).
- Buyers need trust: fair prioritization, clear time windows, predictable access.

## What I shipped

- Matching logic that turns user-provided kid profiles into structured size needs
- A queue/priority model so the first-in-queue buyer gets a deadline, then it moves to the next
- Seller + buyer flows that are simple enough to use on a phone quickly

## Architecture (high level)

- Domain model for kids, sizes, trunks, and queue entries
- Deterministic ranking rules (match strength) and time-based state transitions
- Event-driven notifications (e.g., “you’re up”, “time window expiring”)

## Outcomes

- A matching-first marketplace experience that reduces search burden
- A scalable way to enforce fairness and prioritization without manual moderation
