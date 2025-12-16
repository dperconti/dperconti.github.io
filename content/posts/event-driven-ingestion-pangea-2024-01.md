---
title: "Event-driven data ingestion at Pangea"
date: 2023-08-10T05:00:00Z
categories: 
  - Architecture
  - Fintech
draft: false
---

At Pangea, we built event-driven ingestion pipelines using Pub/Sub, Cloud Run, and event sourcing patterns. The system processes financial events reliably and scales automatically.

#### Architecture

```typescript
// Event publisher
class EventPublisher {
  private pubsub: PubSub;
  
  async publishEvent(event: FinancialEvent): Promise<void> {
    const topic = this.pubsub.topic('financial-events');
    await topic.publishMessage({
      json: event,
      attributes: {
        eventType: event.type,
        userId: event.userId,
      },
    });
  }
}

// Event consumer
class EventConsumer {
  private subscription: Subscription;
  
  async start(): Promise<void> {
    this.subscription.on('message', async (message) => {
      try {
        const event = message.json as FinancialEvent;
        await this.processEvent(event);
        message.ack();
      } catch (error) {
        logger.error('Failed to process event', error);
        message.nack();
      }
    });
  }
  
  private async processEvent(event: FinancialEvent): Promise<void> {
    switch (event.type) {
      case 'payment.created':
        await this.handlePaymentCreated(event);
        break;
      case 'transaction.completed':
        await this.handleTransactionCompleted(event);
        break;
      // ... more handlers
    }
  }
}
```

#### Event Sourcing

```typescript
interface Event {
  id: string;
  type: string;
  aggregateId: string;
  data: Record<string, unknown>;
  timestamp: Date;
  version: number;
}

class EventStore {
  async append(aggregateId: string, events: Event[]): Promise<void> {
    // Store events in order
    for (const event of events) {
      await this.store.append(aggregateId, event);
    }
  }
  
  async getEvents(aggregateId: string): Promise<Event[]> {
    return this.store.getEvents(aggregateId);
  }
  
  async replay(aggregateId: string): Promise<AggregateState> {
    const events = await this.getEvents(aggregateId);
    return events.reduce((state, event) => this.applyEvent(state, event), initialState);
  }
}
```

#### Benefits

- Reliable processing
- Automatic scaling
- Event replay capability
- Audit trail
- Loose coupling

> "Event-driven architecture enables reliable, scalable systems."

#### Lessons Learned

1. Design events carefully
2. Handle idempotency
3. Implement proper error handling
4. Monitor event processing
5. Plan for event replay

