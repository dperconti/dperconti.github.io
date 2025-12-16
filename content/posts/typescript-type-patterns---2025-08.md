---
title: "Type-safe event handling with TypeScript"
date: 2025-11-27T05:00:00Z
categories: 
  - TypeScript
  - Fintech
draft: false
---

At Pangea, we built an event-driven architecture for our FX trading platform. TypeScript's type system enabled us to create type-safe event handlers that catch errors at compile time. Here's how we structured it.

#### Event Type Definitions

```typescript
// Base event structure
interface BaseEvent {
  eventId: string;
  timestamp: Date;
  version: string;
}

// Specific event types
interface PaymentCreatedEvent extends BaseEvent {
  type: 'payment.created';
  payload: {
    paymentId: string;
    amount: Decimal;
    currency: CurrencyCode;
    userId: string;
  };
}

interface PaymentFailedEvent extends BaseEvent {
  type: 'payment.failed';
  payload: {
    paymentId: string;
    reason: string;
    errorCode: string;
  };
}

interface FXRateUpdatedEvent extends BaseEvent {
  type: 'fx.rate.updated';
  payload: {
    pair: CurrencyPair;
    rate: Decimal;
    source: 'market' | 'manual';
  };
}

// Union type for all events
type PaymentEvent = PaymentCreatedEvent | PaymentFailedEvent;
type FXEvent = FXRateUpdatedEvent;
type SystemEvent = PaymentEvent | FXEvent;
```

#### Type-Safe Event Handlers

```typescript
type EventHandler<T extends SystemEvent> = (event: T) => Promise<void>;

class EventDispatcher {
  private handlers: Map<string, EventHandler<any>[]> = new Map();
  
  on<T extends SystemEvent>(
    eventType: T['type'],
    handler: EventHandler<T>
  ): void {
    if (!this.handlers.has(eventType)) {
      this.handlers.set(eventType, []);
    }
    this.handlers.get(eventType)!.push(handler);
  }
  
  async emit<T extends SystemEvent>(event: T): Promise<void> {
    const handlers = this.handlers.get(event.type) || [];
    await Promise.all(handlers.map(handler => handler(event)));
  }
}

// Usage - fully type-safe
const dispatcher = new EventDispatcher();

dispatcher.on('payment.created', async (event) => {
  // TypeScript knows event.payload has paymentId, amount, currency, userId
  console.log(`Payment ${event.payload.paymentId} created`);
});

dispatcher.on('payment.failed', async (event) => {
  // TypeScript knows event.payload has paymentId, reason, errorCode
  console.error(`Payment ${event.payload.paymentId} failed: ${event.payload.reason}`);
});
```

#### Event Schema Validation

```typescript
import { z } from 'zod';

const PaymentCreatedSchema = z.object({
  type: z.literal('payment.created'),
  eventId: z.string().uuid(),
  timestamp: z.date(),
  version: z.string(),
  payload: z.object({
    paymentId: z.string().uuid(),
    amount: z.string().regex(/^\d+\.\d{2}$/),
    currency: z.enum(['USD', 'EUR', 'GBP']),
    userId: z.string().uuid(),
  }),
});

type ValidatedPaymentCreatedEvent = z.infer<typeof PaymentCreatedSchema>;

function validateEvent(event: unknown): ValidatedPaymentCreatedEvent {
  return PaymentCreatedSchema.parse(event);
}
```

#### Pattern Matching with Exhaustiveness Checking

```typescript
function processEvent(event: SystemEvent): void {
  switch (event.type) {
    case 'payment.created':
      handlePaymentCreated(event); // TypeScript narrows type
      break;
    case 'payment.failed':
      handlePaymentFailed(event); // TypeScript narrows type
      break;
    case 'fx.rate.updated':
      handleRateUpdate(event); // TypeScript narrows type
      break;
    default:
      // Exhaustiveness check - TypeScript error if we miss a case
      const _exhaustive: never = event;
      throw new Error(`Unknown event type: ${_exhaustive}`);
  }
}
```

> "Type-safe event handling prevents entire classes of bugs in distributed systems."

#### Advanced Patterns

**Event Versioning:**
```typescript
type EventV1 = { version: '1'; data: OldFormat };
type EventV2 = { version: '2'; data: NewFormat };
type VersionedEvent = EventV1 | EventV2;

function handleVersionedEvent(event: VersionedEvent): void {
  if (event.version === '1') {
    // Handle v1 format
  } else {
    // Handle v2 format
  }
}
```

**Event Transformation:**
```typescript
type EventTransformer<T extends SystemEvent, U extends SystemEvent> = (
  event: T
) => U;

function transformPaymentEvent(
  event: PaymentCreatedEvent
): PaymentCreatedEvent {
  return {
    ...event,
    payload: {
      ...event.payload,
      amount: event.payload.amount.mul(100), // Convert to cents
    },
  };
}
```

