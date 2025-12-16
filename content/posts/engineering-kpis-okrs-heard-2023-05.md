---
title: "Establishing engineering KPIs tied to company OKRs"
date: 2023-08-03T05:00:00Z
categories: 
  - Leadership
  - Engineering
draft: false
---

At Heard, I established engineering KPIs tied to company OKRs, increasing feature delivery velocity by 12% and retention by 15%. The key was aligning engineering metrics with business outcomes.

#### The Problem

Traditional engineering metrics (lines of code, commits, velocity) don't connect to business value. We needed metrics that:
- Align with company goals
- Measure outcomes, not outputs
- Drive the right behaviors
- Are actionable

#### Our Approach

**1. Start with Company OKRs**
Understand what the company is trying to achieve.

**2. Map Engineering Work to OKRs**
Connect engineering initiatives to business outcomes.

**3. Define Measurable KPIs**
Create metrics that track progress toward OKRs.

**4. Review Regularly**
Weekly reviews, monthly deep dives, quarterly planning.

#### Example: User Retention OKR

**Company OKR:**
- Increase user retention by 20%

**Engineering Contribution:**
- Reduce time to value (onboarding)
- Improve product reliability
- Fix critical bugs faster

**Engineering KPIs:**
- Time to first value: < 5 minutes
- Uptime: > 99.9%
- Critical bug resolution: < 4 hours

#### KPI Dashboard

```typescript
interface EngineeringKPIs {
  // Feature Delivery
  featureDeliveryVelocity: number; // features per week
  timeToMarket: number; // days from idea to production
  
  // Quality
  bugRate: number; // bugs per feature
  uptime: number; // percentage
  customerSatisfaction: number; // NPS score
  
  // Team Health
  retention: number; // percentage
  engagement: number; // survey score
  burnoutRisk: number; // calculated metric
}

function calculateKPIs(metrics: Metrics): EngineeringKPIs {
  return {
    featureDeliveryVelocity: calculateVelocity(metrics),
    timeToMarket: calculateTTM(metrics),
    bugRate: calculateBugRate(metrics),
    uptime: calculateUptime(metrics),
    customerSatisfaction: metrics.nps,
    retention: calculateRetention(metrics),
    engagement: metrics.engagementScore,
    burnoutRisk: calculateBurnoutRisk(metrics),
  };
}
```

#### Tracking and Reporting

**Weekly Reviews**
- Review KPIs vs targets
- Identify blockers
- Adjust priorities

**Monthly Deep Dives**
- Analyze trends
- Root cause analysis
- Action planning

**Quarterly Planning**
- Set new KPIs
- Align with company OKRs
- Plan initiatives

#### Results

- 12% increase in feature delivery velocity
- 15% increase in retention
- Better alignment with business goals
- More focused engineering work
- Improved team motivation

> "What gets measured gets managed."

#### Lessons Learned

1. Align metrics with business outcomes
2. Measure outcomes, not outputs
3. Review regularly
4. Adjust based on results
5. Keep it simple

#### Common Pitfalls

- Too many metrics (focus on 5-7)
- Vanity metrics (measure what matters)
- Setting and forgetting (review regularly)
- Ignoring context (understand why metrics change)
- Gaming the system (prevent manipulation)

