---
title: "Scaling payments globally with decoupled checkout"
date: 2023-07-28T05:00:00Z
categories: 
  - Architecture
  - Fintech
draft: false
---

At Skillshare, we scaled payments globally by building a decoupled checkout architecture. This allowed us to add new payment providers without modifying core checkout code, supporting 13 new providers across different regions.

#### The Problem

Our original checkout was tightly coupled to Stripe:
- Adding new providers required code changes
- Different regions needed different providers
- Testing was difficult
- Hard to A/B test providers

#### The Solution

We built a decoupled architecture:
- **Checkout service**: Handles UI and user flow
- **Payment abstraction layer**: Provider-agnostic interface
- **Provider adapters**: Implementations for each provider
- **Routing logic**: Select provider based on region/user
- **Unified webhooks**: Normalize provider callbacks

#### Architecture

```typescript
interface PaymentProvider {
  createPaymentIntent(amount: number, currency: string): Promise<PaymentIntent>;
  confirmPayment(paymentId: string): Promise<PaymentResult>;
  handleWebhook(payload: unknown): Promise<WebhookEvent>;
}

class StripeProvider implements PaymentProvider {
  async createPaymentIntent(amount: number, currency: string) {
    const intent = await stripe.paymentIntents.create({
      amount,
      currency,
    });
    return this.normalizePaymentIntent(intent);
  }
}

class PayPalProvider implements PaymentProvider {
  async createPaymentIntent(amount: number, currency: string) {
    const order = await paypal.orders.create({
      purchase_units: [{
        amount: { value: amount.toString(), currency_code: currency },
      }],
    });
    return this.normalizePaymentIntent(order);
  }
}
```

#### Provider Router

```typescript
class PaymentProviderRouter {
  private providers: Map<string, PaymentProvider>;
  
  constructor() {
    this.providers = new Map([
      ['stripe', new StripeProvider()],
      ['paypal', new PayPalProvider()],
      ['adyen', new AdyenProvider()],
      // ... more providers
    ]);
  }
  
  selectProvider(user: User, amount: number, currency: string): PaymentProvider {
    // Route based on region
    if (user.region === 'US') {
      return this.providers.get('stripe');
    } else if (user.region === 'EU') {
      return this.providers.get('adyen');
    } else if (user.region === 'APAC') {
      return this.providers.get('paypal');
    }
    
    // Default fallback
    return this.providers.get('stripe');
  }
}
```

#### Checkout Service

```typescript
class CheckoutService {
  private router: PaymentProviderRouter;
  
  async initiateCheckout(user: User, cart: Cart): Promise<CheckoutSession> {
    const provider = this.router.selectProvider(
      user,
      cart.total,
      cart.currency
    );
    
    const paymentIntent = await provider.createPaymentIntent(
      cart.total,
      cart.currency
    );
    
    return {
      sessionId: generateId(),
      paymentIntentId: paymentIntent.id,
      provider: provider.name,
      clientSecret: paymentIntent.clientSecret,
    };
  }
  
  async confirmPayment(sessionId: string, paymentMethod: PaymentMethod): Promise<PaymentResult> {
    const session = await this.getSession(sessionId);
    const provider = this.router.getProvider(session.provider);
    
    return await provider.confirmPayment(
      session.paymentIntentId,
      paymentMethod
    );
  }
}
```

#### Webhook Normalization

```typescript
class WebhookHandler {
  async handleWebhook(provider: string, payload: unknown): Promise<void> {
    const providerImpl = this.router.getProvider(provider);
    const event = await providerImpl.handleWebhook(payload);
    
    // Normalize to common event format
    const normalizedEvent = this.normalizeEvent(event);
    
    // Process event
    await this.processEvent(normalizedEvent);
  }
  
  private normalizeEvent(event: ProviderWebhookEvent): NormalizedEvent {
    return {
      type: this.mapEventType(event.type),
      paymentId: event.paymentId,
      status: this.mapStatus(event.status),
      amount: event.amount,
      timestamp: event.timestamp,
    };
  }
}
```

#### Benefits

- Easy to add new providers
- Region-specific routing
- A/B testing capabilities
- Better error handling
- Unified monitoring

#### Results

- Added 13 new payment providers
- Expanded to new regions
- Improved conversion rates
- Better user experience
- Reduced checkout friction

> "Decoupling enables flexibility and scale."

#### Lessons Learned

1. Design for extensibility from the start
2. Normalize provider differences
3. Test with multiple providers
4. Monitor provider performance
5. Have fallback providers

