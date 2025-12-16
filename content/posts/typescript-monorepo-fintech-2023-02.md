---
title: "TypeScript monorepos in fintech"
date: 2025-09-27T05:00:00Z
categories: 
  - TypeScript
  - Fintech
draft: false
---

At Pangea, we're using an Nx monorepo to manage our FX and payments platform. The monorepo approach has been transformative for code sharing, type safety, and developer experience.

#### Why Monorepo for Fintech?

Financial services require tight integration between services. A monorepo allows us to:
- Share types across services (critical for API contracts)
- Enforce consistent patterns
- Make refactoring safer across service boundaries
- Improve developer experience with shared tooling

#### The Nx Advantage

Nx provides:
- Dependency graph visualization
- Affected project detection
- Caching for faster builds
- Code generation for consistency

#### Type Safety Across Services

```typescript
// Shared types package
export interface PaymentRequest {
  amount: Decimal;
  currency: CurrencyCode;
  recipientId: string;
}

// Used in both API and worker services
import { PaymentRequest } from '@pangea/shared-types';
```

This ensures that changes to payment types are caught at compile time across all services.

#### Challenges

- Build times can grow
- Need discipline around dependencies
- CI/CD complexity increases
- Requires team buy-in

#### Best Practices

1. Keep shared code in dedicated packages
2. Use strict dependency rules
3. Invest in CI/CD optimization
4. Document the monorepo structure
5. Regular dependency audits

The monorepo has been a game-changer for maintaining consistency and type safety across our platform.

