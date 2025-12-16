---
title: "TypeScript for financial calculations"
date: 2025-07-16T05:00:00Z
categories: 
  - TypeScript
  - Fintech
draft: false
---

Building international transfer systems at Mercury required precision in financial calculations. JavaScript's floating-point arithmetic is notoriously problematic for money, but TypeScript gives us the type safety we need while working with proper decimal libraries.

#### The Problem with JavaScript Numbers

```typescript
0.1 + 0.2 === 0.3 // false!
```

This classic JavaScript gotcha becomes catastrophic when dealing with currency. We needed a solution that caught these errors at compile time.

#### Our Approach

We used TypeScript with `decimal.js` for all monetary calculations. The type system ensures we never accidentally use native JavaScript numbers for money:

```typescript
import Decimal from 'decimal.js';

type Money = Decimal;

function calculateInterest(principal: Money, rate: Money): Money {
  return principal.mul(rate);
}
```

#### Type Safety Benefits

TypeScript's type system caught dozens of potential bugs during development. When you're dealing with thousands of transactions daily, catching a bug at compile time versus production can save millions.

#### Lessons from Production

After launching international transfers through Wise, we learned that type safety alone isn't enough. You also need:
- Comprehensive test coverage
- Monitoring and alerting
- Clear error handling
- Audit trails for every calculation

