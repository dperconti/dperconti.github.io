---
title: "With Light — DBT tools + guided AI coaching"
description: "A DBT-first emotional wellness product: fast tracking, personalized skill recommendations, and guided exercises."
featured: true
product_status: live
role: "Engineering Manager / Tech Lead"
team: "TBD"
stack:
  - "Web + mobile"
  - "TypeScript"
  - "React"
  - "Next.js"
  - "Postgres"
  - "AI (LLM)"
highlights:
  - "Designed a modular architecture for skills + guided exercises"
  - "Built a reliable content pipeline for DBT tools and in-app guidance"
  - "Shipped UX flows optimized for low-friction emotional check-ins"
links:
  website: "https://withlight.ai/"
draft: false
---

## Summary

With Light is a DBT-first emotional wellness product that helps users track emotions and situations, then guides them to the DBT skills and exercises they need in the moment.

## The problem

When someone is dysregulated, they need help quickly. The product experience needs to be:

- fast (few taps to log)
- guided (clear next steps)
- structured (skills are evidence-based, not generic advice)
- safe (sensitive data, careful UX)

## Constraints

- The system must support a growing library of DBT skills/exercises without hard-coding flows.
- “Personalization” needs to be explainable and controllable (avoid random-feeling recommendations).
- Privacy expectations are high (users are logging sensitive situations).

## What I shipped

- A skills library that can power multiple surfaces (browse, search, “recommended for you”, guided exercise flows)
- A matching layer that maps user state (emotion + context + distress) → relevant skills and next steps
- Guided exercises that break down DBT tools into step-by-step interactions

## Architecture (high level)

- A content model representing skills, exercises, and prompts as composable modules
- A recommendation/matching subsystem with deterministic fallbacks and guardrails
- Telemetry designed around product iteration (drop-offs, completion rates, time-to-first-tool)

## Outcomes

- A product foundation that supports adding new DBT tools quickly and consistently
- Clear separation between content, matching logic, and UI surfaces (improves maintainability and experimentation)

## What I’d do next

- Add lightweight experimentation (A/B) around tool matching and exercise completion
- Expand “insights” to help users see patterns while keeping the UX simple and non-judgmental
