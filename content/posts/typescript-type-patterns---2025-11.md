---
title: "Advanced TypeScript type patterns for financial systems"
date: 2025-12-04T05:00:00Z
categories: 
  - TypeScript
  - Fintech
draft: false
---

Building financial systems at Pangea requires type safety that goes beyond basic TypeScript. We've developed advanced type patterns that prevent entire classes of bugs and make our codebase more maintainable. Here are the patterns that have proven most valuable.

#### Discriminated Unions for Payment States

```typescript
type PaymentState =
  | { status: 'pending'; initiatedAt: Date }
  | { status: 'processing'; processorId: string; startedAt: Date }
  | { status: 'completed'; completedAt: Date; transactionId: string }
  | { status: 'failed'; failedAt: Date; errorCode: string; errorMessage: string }
  | { status: 'refunded'; refundedAt: Date; refundId: string; originalTransactionId: string };

function handlePaymentState(state: PaymentState): void {
  switch (state.status) {
    case 'pending':
      // TypeScript knows state.initiatedAt exists
      console.log(`Initiated at ${state.initiatedAt}`);
      break;
    case 'processing':
      // TypeScript knows state.processorId exists
      console.log(`Processing with ${state.processorId}`);
      break;
    case 'completed':
      // TypeScript knows state.transactionId exists
      console.log(`Completed: ${state.transactionId}`);
      break;
    case 'failed':
      // TypeScript knows error details exist
      console.error(`Failed: ${state.errorCode} - ${state.errorMessage}`);
      break;
    case 'refunded':
      // TypeScript knows refund details exist
      console.log(`Refunded: ${state.refundId}`);
      break;
  }
}
```

#### Branded Types for Financial Values

```typescript
// Prevent mixing different types of money
type Money = number & { readonly __brand: 'Money' };
type USD = Money & { readonly __currency: 'USD' };
type EUR = Money & { readonly __currency: 'EUR' };

function createUSD(amount: number): USD {
  return amount as USD;
}

function createEUR(amount: number): EUR {
  return amount as EUR;
}

// This will cause a compile error:
// const usd: USD = createEUR(100); // Error!

// Type-safe currency conversion
function convertCurrency(amount: USD, rate: number): EUR {
  return (amount * rate) as EUR;
}
```

#### Const Assertions and Template Literal Types

```typescript
const CURRENCY_CODES = ['USD', 'EUR', 'GBP', 'JPY'] as const;
type CurrencyCode = typeof CURRENCY_CODES[number]; // 'USD' | 'EUR' | 'GBP' | 'JPY'

type PaymentEvent = 
  | `payment.${CurrencyCode}.created`
  | `payment.${CurrencyCode}.completed`
  | `payment.${CurrencyCode}.failed`;

// Type-safe event handling
function handlePaymentEvent(event: PaymentEvent): void {
  if (event.startsWith('payment.USD.')) {
    // Handle USD payment events
  }
}
```

#### Mapped Types for API Contracts

```typescript
type ApiResponse<T> = {
  data: T;
  status: 'success' | 'error';
  timestamp: Date;
  requestId: string;
};

type ApiError = {
  code: string;
  message: string;
  details?: Record<string, unknown>;
};

type PaymentApiResponse = ApiResponse<Payment> | ApiResponse<ApiError>;

// Type guard
function isSuccessResponse<T>(
  response: ApiResponse<T | ApiError>
): response is ApiResponse<T> {
  return response.status === 'success' && !('code' in response.data);
}
```

#### Conditional Types for Flexible APIs

```typescript
type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type ApiRequest<T extends ApiMethod> = 
  T extends 'GET' 
    ? { method: T; params: Record<string, string> }
    : { method: T; body: unknown; params?: Record<string, string> };

function makeRequest<T extends ApiMethod>(
  request: ApiRequest<T>
): Promise<unknown> {
  // Implementation
}

// Usage - TypeScript enforces correct structure
makeRequest({ method: 'GET', params: { id: '123' } });
makeRequest({ method: 'POST', body: { amount: 100 }, params: { id: '123' } });
```

#### Utility Types for Transformations

```typescript
// Make all properties optional except required ones
type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

interface Payment {
  id: string;
  amount: number;
  currency: string;
  userId: string;
  status: string;
}

// Update payment - only id required, rest optional
type PaymentUpdate = PartialExcept<Payment, 'id'>;

function updatePayment(id: string, updates: PaymentUpdate): void {
  // Implementation
}
```

#### Recursive Types for Complex Structures

```typescript
type JsonValue = 
  | string
  | number
  | boolean
  | null
  | JsonObject
  | JsonArray;

interface JsonObject {
  [key: string]: JsonValue;
}

interface JsonArray extends Array<JsonValue> {}

// Type-safe JSON parsing
function parseJson<T extends JsonValue>(json: string): T {
  return JSON.parse(json) as T;
}
```

#### Type-Level Programming

```typescript
// Extract return type of async function
type Awaited<T> = T extends Promise<infer U> ? U : T;

async function fetchPayment(id: string): Promise<Payment> {
  // Implementation
}

type PaymentResult = Awaited<ReturnType<typeof fetchPayment>>; // Payment

// Extract function parameters
type PaymentParams = Parameters<typeof updatePayment>; // [string, PaymentUpdate]
```

> "Advanced TypeScript types catch bugs at compile time that would otherwise cause runtime errors in production. In financial systems, this is invaluable."

#### Best Practices

1. Use discriminated unions for state machines
2. Brand types to prevent mixing incompatible values
3. Leverage template literal types for type-safe strings
4. Use conditional types for flexible APIs
5. Create utility types for common transformations
6. Document complex types with JSDoc
7. Test type definitions, not just implementations

