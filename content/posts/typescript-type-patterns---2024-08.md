---
title: "Type-safe dependency injection with TypeScript"
date: 2025-10-31T05:00:00Z
categories: 
  - TypeScript
  - Fintech
draft: false
---

At Pangea, we use dependency injection with full type safety. This makes testing easier, improves maintainability, and prevents runtime errors. Here's our approach.

#### Service Interfaces

```typescript
interface IPaymentService {
  createPayment(request: CreatePaymentRequest): Promise<Payment>;
  getPayment(id: string): Promise<Payment | null>;
  updatePaymentStatus(id: string, status: PaymentStatus): Promise<Payment>;
}

interface IEmailService {
  sendEmail(to: string, subject: string, body: string): Promise<void>;
}

interface IAuditService {
  logEvent(event: AuditEvent): Promise<void>;
}
```

#### Service Implementation

```typescript
class PaymentService implements IPaymentService {
  constructor(
    private db: IDatabase,
    private emailService: IEmailService,
    private auditService: IAuditService
  ) {}
  
  async createPayment(request: CreatePaymentRequest): Promise<Payment> {
    const payment = await this.db.payments.create({
      amount: request.amount,
      currency: request.currency,
      status: 'PENDING',
    });
    
    await this.emailService.sendEmail(
      request.userEmail,
      'Payment Created',
      `Your payment of ${request.amount} ${request.currency} has been created.`
    );
    
    await this.auditService.logEvent({
      type: 'payment.created',
      paymentId: payment.id,
      userId: request.userId,
    });
    
    return payment;
  }
  
  // Other methods...
}
```

#### Dependency Container

```typescript
class Container {
  private services = new Map<string, any>();
  
  register<T>(key: string, factory: () => T): void {
    this.services.set(key, factory);
  }
  
  resolve<T>(key: string): T {
    const factory = this.services.get(key);
    if (!factory) {
      throw new Error(`Service ${key} not found`);
    }
    return factory();
  }
}

// Setup
const container = new Container();

container.register<IDatabase>('database', () => new Database());
container.register<IEmailService>('email', () => new EmailService());
container.register<IAuditService>('audit', () => new AuditService());

container.register<IPaymentService>('payment', () => {
  return new PaymentService(
    container.resolve<IDatabase>('database'),
    container.resolve<IEmailService>('email'),
    container.resolve<IAuditService>('audit')
  );
});
```

#### Type-Safe Factory Pattern

```typescript
type ServiceFactory<T> = (container: Container) => T;

class TypedContainer {
  private factories = new Map<string, ServiceFactory<any>>();
  
  register<T>(key: string, factory: ServiceFactory<T>): void {
    this.factories.set(key, factory);
  }
  
  resolve<T>(key: string): T {
    const factory = this.factories.get(key);
    if (!factory) {
      throw new Error(`Service ${key} not found`);
    }
    return factory(this) as T;
  }
}

// Usage with type inference
const container = new TypedContainer();

container.register<IPaymentService>('payment', (c) => {
  return new PaymentService(
    c.resolve<IDatabase>('database'),
    c.resolve<IEmailService>('email'),
    c.resolve<IAuditService>('audit')
  );
});

const paymentService = container.resolve<IPaymentService>('payment');
// Fully type-safe!
```

#### Testing with Mocks

```typescript
// Mock implementations for testing
class MockEmailService implements IEmailService {
  private sentEmails: Array<{ to: string; subject: string; body: string }> = [];
  
  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    this.sentEmails.push({ to, subject, body });
  }
  
  getSentEmails(): Array<{ to: string; subject: string; body: string }> {
    return this.sentEmails;
  }
}

// Test setup
const mockEmailService = new MockEmailService();
const paymentService = new PaymentService(
  mockDatabase,
  mockEmailService,
  mockAuditService
);

// Test
await paymentService.createPayment(request);
expect(mockEmailService.getSentEmails()).toHaveLength(1);
```

> "Type-safe dependency injection makes code more testable and maintainable."

#### Benefits

- Easy testing with mock implementations
- Loose coupling between components
- Centralized service management
- Type safety throughout
- Better IDE support

