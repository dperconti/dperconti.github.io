---
title: "Deb — smart debt management"
description: "Debt management with cash-flow clarity, interest analysis, and payoff strategies."
featured: true
product_status: live
role: "Engineering Manager / Tech Lead"
team: "TBD"
stack:
  - "TypeScript"
  - "React"
  - "Fintech integrations"
highlights:
  - "Built core data model for accounts, debts, and payoff planning"
  - "Implemented analytics primitives for cash-flow-aware debt views"
  - "Designed an iteration loop for strategy recommendations"
links:
  website: "https://www.meetdeb.com/"
draft: false
---

## Summary

Deb is a debt management product focused on clarity: how debt affects cash flow, which interest rates matter, and what payoff strategies are optimal for a user’s situation.

## The problem

Debt tooling often overwhelms users with raw balances. The core experience should answer:

- “What can I safely spend?”
- “Which debt should I pay first, and why?”
- “How does this change month-to-month?”

## Constraints

- Financial data is sensitive and needs careful handling
- Strategies must be explainable (trust matters)
- Categorization and payoff logic should be testable and deterministic

## What I shipped

- Core primitives for debts, rates, and statement schedules
- Cash-flow-aware views that align with when credit card expenses actually hit
- Strategy scaffolding that supports multiple payoff methods with transparent rationale

## Architecture (high level)

- A normalized domain model for accounts + liabilities
- Calculation layer separated from UI for correctness and testability
- A recommendation layer that produces “explainable” outputs (reasons + tradeoffs)

## Outcomes

- A foundation for scaling strategy sophistication while keeping the user experience simple
- Improved ability to iterate on payoff recommendations without rewriting product flows
