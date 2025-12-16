---
title: "Advanced TypeScript utility types for financial data"
date: 2025-11-07T05:00:00Z
categories: 
  - TypeScript
  - Fintech
draft: false
---

Working with financial data requires precision. TypeScript's utility types help us create robust abstractions that prevent errors. Here are the patterns we use at Pangea.

#### Deep Partial and Required

```typescript
// Make nested properties optional
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Make nested properties required
type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

interface Payment {
  id: string;
  amount: Decimal;
  metadata?: {
    source?: string;
    reference?: string;
  };
}

type PartialPayment = DeepPartial<Payment>;
// All properties optional, including nested ones

type RequiredPayment = DeepRequired<Payment>;
// All properties required, including nested ones
```

#### Readonly Deep

```typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

const payment: DeepReadonly<Payment> = {
  id: '123',
  amount: new Decimal('100.00'),
  metadata: {
    source: 'api',
  },
};

// payment.metadata.source = 'web'; // Error: Cannot assign to readonly property
```

#### NonNullable for Financial Calculations

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;

function calculateTotal(
  payments: Array<Payment | null | undefined>
): Decimal {
  return payments
    .filter((p): p is NonNullable<typeof p> => p != null)
    .reduce((sum, p) => sum.plus(p.amount), new Decimal(0));
}
```

#### Extract and Exclude for Filtering

```typescript
type PaymentStatus = 'pending' | 'processing' | 'completed' | 'failed';
type ActiveStatus = Exclude<PaymentStatus, 'failed'>; // 'pending' | 'processing' | 'completed'
type FinalStatus = Extract<PaymentStatus, 'completed' | 'failed'>; // 'completed' | 'failed'

function handleActivePayment(status: ActiveStatus): void {
  // TypeScript knows status cannot be 'failed'
}
```

#### Record Types for Mappings

```typescript
type CurrencyCode = 'USD' | 'EUR' | 'GBP';
type ExchangeRates = Record<CurrencyCode, Decimal>;

const rates: ExchangeRates = {
  USD: new Decimal('1.00'),
  EUR: new Decimal('0.85'),
  GBP: new Decimal('0.73'),
};

// TypeScript ensures all currencies are present
```

#### Pick and Omit for Transformations

```typescript
// Create public API response (omit internal fields)
type PublicPayment = Omit<Payment, 'internalId' | 'deletedAt'>;

// Create update payload (pick only updatable fields)
type PaymentUpdate = Pick<Payment, 'status' | 'metadata'>;
```

#### Conditional Types for Smart Defaults

```typescript
type DefaultValue<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : never;

function getConfigValue<T>(
  key: string,
  defaultValue: DefaultValue<T>
): T {
  // Implementation
}

// Usage
const timeout = getConfigValue<number>('timeout', 5000); // Type-safe
```

> "Utility types make TypeScript code more maintainable and prevent entire classes of bugs."

#### Practical Applications

**Type-Safe Configuration:**
```typescript
type Config = {
  apiUrl: string;
  timeout: number;
  retries: number;
  features: {
    payments: boolean;
    fx: boolean;
  };
};

type PartialConfig = DeepPartial<Config>;

function mergeConfig(
  base: Config,
  overrides: PartialConfig
): Config {
  // Type-safe merge
}
```

