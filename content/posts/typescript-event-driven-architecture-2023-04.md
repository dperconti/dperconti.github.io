---
title: "Event-driven architecture with TypeScript"
date: 2025-07-09T05:00:00Z
categories: 
  - TypeScript
  - Architecture
draft: false
---

At Pangea, we built an event-driven architecture for our FX and payments platform. TypeScript's type system made it possible to build reliable, type-safe event handlers across multiple services.

#### Why Event-Driven?

Event-driven architecture provides:
- Loose coupling between services
- Scalability (services scale independently)
- Resilience (failures are isolated)
- Flexibility (easy to add new consumers)

#### The Architecture

We use:
- **Pub/Sub** (Google Cloud Pub/Sub) for messaging
- **TypeScript** for type safety
- **Event schemas** defined in shared packages
- **Dead letter queues** for failed events

#### Event Schema

```typescript
// Shared event types
export interface PaymentCreatedEvent {
  type: 'payment.created';
  paymentId: string;
  amount: Decimal;
  currency: CurrencyCode;
  timestamp: Date;
  metadata: Record<string, unknown>;
}

export interface PaymentFailedEvent {
  type: 'payment.failed';
  paymentId: string;
  reason: string;
  timestamp: Date;
}

export type PaymentEvent = PaymentCreatedEvent | PaymentFailedEvent;
```

#### Event Publisher

```typescript
import { PubSub } from '@google-cloud/pubsub';

class EventPublisher {
  private pubsub: PubSub;
  private topic: Topic;
  
  constructor(topicName: string) {
    this.pubsub = new PubSub();
    this.topic = this.pubsub.topic(topicName);
  }
  
  async publish<T extends PaymentEvent>(event: T): Promise<void> {
    const messageId = await this.topic.publishMessage({
      json: event,
    });
    console.log(`Published ${event.type} with ID ${messageId}`);
  }
}
```

#### Event Consumer

```typescript
class PaymentEventHandler {
  private subscription: Subscription;
  
  constructor(subscriptionName: string) {
    const pubsub = new PubSub();
    this.subscription = pubsub.subscription(subscriptionName);
  }
  
  async start(): Promise<void> {
    this.subscription.on('message', (message) => {
      const event = message.json as PaymentEvent;
      this.handleEvent(event);
      message.ack();
    });
  }
  
  private async handleEvent(event: PaymentEvent): Promise<void> {
    switch (event.type) {
      case 'payment.created':
        await this.handlePaymentCreated(event);
        break;
      case 'payment.failed':
        await this.handlePaymentFailed(event);
        break;
      default:
        console.warn(`Unknown event type: ${(event as any).type}`);
    }
  }
  
  private async handlePaymentCreated(event: PaymentCreatedEvent): Promise<void> {
    // Process payment created event
  }
  
  private async handlePaymentFailed(event: PaymentFailedEvent): Promise<void> {
    // Handle payment failure
  }
}
```

#### Benefits

- Type safety catches errors at compile time
- Easy to add new event types
- Clear contracts between services
- Better IDE support and autocomplete

#### Challenges

- Event ordering (use partitioning keys)
- Idempotency (handle duplicate events)
- Error handling (dead letter queues)
- Testing (mock event publishers)

#### Best Practices

1. Version your event schemas
2. Make events idempotent
3. Use dead letter queues
4. Monitor event processing
5. Document event contracts

> "Events are the contracts between services. Make them explicit and type-safe."

