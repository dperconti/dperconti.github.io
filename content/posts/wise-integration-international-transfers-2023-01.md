---
title: "Integrating Wise for international transfers"
date: 2025-12-17T05:00:00Z
categories: 
  - TypeScript
  - Fintech
draft: false
---

At Mercury, we integrated Wise to enable international transfers for business customers. The integration expanded our services to more than 30 countries and required careful attention to currency conversion, compliance, and user experience.

#### Why Wise?

Wise (formerly TransferWise) provides:
- Real exchange rates (not marked up)
- Transparent fees
- Fast transfers (often same-day)
- Wide country coverage
- Developer-friendly API

#### The Integration Challenge

International transfers involve:
- Currency conversion
- Compliance checks (KYC, AML)
- Regulatory requirements
- Error handling
- User notifications

#### TypeScript Implementation

```typescript
import { WiseClient } from '@wise/api-client';

interface TransferRequest {
  sourceAccount: string;
  targetAccount: string;
  amount: Decimal;
  sourceCurrency: CurrencyCode;
  targetCurrency: CurrencyCode;
  description: string;
}

class InternationalTransferService {
  private wiseClient: WiseClient;
  
  async createTransfer(request: TransferRequest): Promise<TransferResult> {
    // Validate request
    await this.validateTransfer(request);
    
    // Create quote
    const quote = await this.wiseClient.quotes.create({
      sourceCurrency: request.sourceCurrency,
      targetCurrency: request.targetCurrency,
      sourceAmount: request.amount.toString(),
    });
    
    // Create transfer
    const transfer = await this.wiseClient.transfers.create({
      targetAccount: request.targetAccount,
      quoteUuid: quote.id,
      customerTransactionId: generateId(),
      details: {
        reference: request.description,
      },
    });
    
    // Fund the transfer
    await this.fundTransfer(transfer.id, request.sourceAccount);
    
    return {
      transferId: transfer.id,
      status: transfer.status,
      estimatedDelivery: transfer.estimatedDelivery,
    };
  }
}
```

#### Advanced Error Handling with Retry Logic

```typescript
class TransferError extends Error {
  constructor(
    message: string,
    public code: string,
    public retryable: boolean = false,
    public statusCode?: number
  ) {
    super(message);
    this.name = 'TransferError';
  }
}

class RetryableTransferService {
  private maxRetries = 3;
  private retryDelay = 1000; // 1 second

  async createTransferWithRetry(
    request: TransferRequest
  ): Promise<TransferResult> {
    let lastError: TransferError;
    
    for (let attempt = 0; attempt < this.maxRetries; attempt++) {
      try {
        return await this.createTransfer(request);
      } catch (error) {
        lastError = this.normalizeError(error);
        
        if (!lastError.retryable || attempt === this.maxRetries - 1) {
          throw lastError;
        }
        
        // Exponential backoff
        await this.delay(this.retryDelay * Math.pow(2, attempt));
      }
    }
    
    throw lastError!;
  }

  private normalizeError(error: unknown): TransferError {
    if (error instanceof TransferError) {
      return error;
    }
    
    const apiError = error as any;
    const retryableCodes = ['RATE_LIMIT', 'TEMPORARY_FAILURE', 'NETWORK_ERROR'];
    
    return new TransferError(
      apiError.message || 'Transfer failed',
      apiError.code || 'UNKNOWN',
      retryableCodes.includes(apiError.code),
      apiError.statusCode
    );
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
```

#### Currency Conversion and Rate Locking

```typescript
interface ExchangeRate {
  rate: Decimal;
  sourceCurrency: CurrencyCode;
  targetCurrency: CurrencyCode;
  expiresAt: Date;
  quoteId: string;
}

class RateLockService {
  private rateCache: Map<string, ExchangeRate> = new Map();
  private lockDuration = 30000; // 30 seconds

  async getLockedRate(
    sourceCurrency: CurrencyCode,
    targetCurrency: CurrencyCode
  ): Promise<ExchangeRate> {
    const cacheKey = `${sourceCurrency}-${targetCurrency}`;
    const cached = this.rateCache.get(cacheKey);
    
    // Return cached rate if still valid
    if (cached && cached.expiresAt > new Date()) {
      return cached;
    }
    
    // Fetch new quote from Wise
    const quote = await this.wiseClient.quotes.create({
      sourceCurrency,
      targetCurrency,
    });
    
    const rate: ExchangeRate = {
      rate: new Decimal(quote.rate),
      sourceCurrency,
      targetCurrency,
      expiresAt: new Date(Date.now() + this.lockDuration),
      quoteId: quote.id,
    };
    
    this.rateCache.set(cacheKey, rate);
    return rate;
  }
}
```

#### Idempotency and Transaction Safety

```typescript
class IdempotentTransferService {
  private transferStore: Map<string, TransferResult> = new Map();
  
  async createTransfer(
    request: TransferRequest,
    idempotencyKey: string
  ): Promise<TransferResult> {
    // Check if transfer already exists
    const existing = this.transferStore.get(idempotencyKey);
    if (existing) {
      return existing;
    }
    
    // Create transfer with idempotency key
    const transfer = await this.wiseClient.transfers.create({
      ...request,
      idempotencyKey,
    });
    
    const result: TransferResult = {
      transferId: transfer.id,
      status: transfer.status,
      estimatedDelivery: transfer.estimatedDelivery,
    };
    
    // Store for idempotency
    this.transferStore.set(idempotencyKey, result);
    
    return result;
  }
}
```

#### Webhook Handling and State Management

```typescript
interface TransferWebhook {
  eventType: 'transfer_state_change' | 'transfer_funds_debited' | 'transfer_funds_refunded';
  resourceId: string;
  currentState: TransferState;
  previousState?: TransferState;
  occurredAt: Date;
}

class TransferWebhookHandler {
  async handleWebhook(payload: TransferWebhook): Promise<void> {
    const transfer = await this.getTransfer(payload.resourceId);
    
    switch (payload.eventType) {
      case 'transfer_state_change':
        await this.handleStateChange(transfer, payload);
        break;
      case 'transfer_funds_debited':
        await this.updateLedger(transfer, 'debit');
        break;
      case 'transfer_funds_refunded':
        await this.handleRefund(transfer);
        break;
    }
    
    // Update local state
    await this.updateTransferState(transfer.id, payload.currentState);
    
    // Notify user
    await this.notifyUser(transfer.userId, payload);
  }
  
  private async handleStateChange(
    transfer: Transfer,
    webhook: TransferWebhook
  ): Promise<void> {
    // State machine validation
    const validTransitions: Record<TransferState, TransferState[]> = {
      'pending': ['processing', 'failed'],
      'processing': ['outgoing_payment_sent', 'funds_refunded'],
      'outgoing_payment_sent': ['funds_converted', 'funds_refunded'],
      'funds_converted': ['outgoing_payment_sent', 'funds_refunded'],
      'bounced_back': ['funds_refunded'],
      'funds_refunded': [],
      'cancelled': [],
      'charged_back': [],
    };
    
    if (!validTransitions[transfer.status]?.includes(webhook.currentState)) {
      throw new Error(`Invalid state transition: ${transfer.status} -> ${webhook.currentState}`);
    }
  }
}
```

#### Compliance and Regulatory Handling

```typescript
class ComplianceService {
  async validateTransfer(request: TransferRequest): Promise<ComplianceResult> {
    // KYC check
    const kycStatus = await this.checkKYC(request.userId);
    if (kycStatus !== 'verified') {
      throw new ComplianceError('KYC verification required', 'KYC_NOT_VERIFIED');
    }
    
    // AML screening
    const amlResult = await this.screenTransaction({
      amount: request.amount,
      sourceCurrency: request.sourceCurrency,
      targetCurrency: request.targetCurrency,
      userId: request.userId,
    });
    
    if (amlResult.riskLevel === 'high') {
      await this.flagForReview(request);
      throw new ComplianceError('Transaction flagged for review', 'AML_FLAGGED');
    }
    
    // Sanctions check
    const sanctionsCheck = await this.checkSanctions(request.targetAccount);
    if (sanctionsCheck.isSanctioned) {
      throw new ComplianceError('Recipient is sanctioned', 'SANCTIONS_VIOLATION');
    }
    
    // Regulatory limits
    const limits = await this.getRegulatoryLimits(request.userId, request.sourceCurrency);
    if (request.amount.gt(limits.dailyLimit)) {
      throw new ComplianceError('Daily limit exceeded', 'LIMIT_EXCEEDED');
    }
    
    return {
      approved: true,
      amlRiskLevel: amlResult.riskLevel,
      requiresReporting: amlResult.requiresReporting,
    };
  }
}
```

#### Monitoring and Observability

```typescript
class TransferMonitoringService {
  async trackTransfer(transferId: string): Promise<void> {
    // Track metrics
    this.metrics.increment('transfers.initiated');
    this.metrics.histogram('transfer.amount', transfer.amount.toNumber());
    
    // Log structured data
    this.logger.info('Transfer initiated', {
      transferId,
      amount: transfer.amount.toString(),
      currency: transfer.currency,
      userId: transfer.userId,
      timestamp: new Date().toISOString(),
    });
    
    // Set up alerts for long-running transfers
    setTimeout(async () => {
      const status = await this.getTransferStatus(transferId);
      if (status === 'processing') {
        this.alerts.warn('Transfer taking longer than expected', { transferId });
      }
    }, 3600000); // 1 hour
  }
}
```

#### Error Handling

```typescript
class TransferErrorHandler {
  async handleError(error: unknown, context: TransferContext): Promise<void> {
    const transferError = this.normalizeError(error);
    
    // Log error with context
    this.logger.error('Transfer error', {
      error: transferError.message,
      code: transferError.code,
      transferId: context.transferId,
      userId: context.userId,
      stack: transferError.stack,
    });
    
    // Handle specific error types
    switch (transferError.code) {
      case 'INSUFFICIENT_FUNDS':
        await this.notifyUser(context.userId, {
          type: 'insufficient_funds',
          message: 'Your account has insufficient funds for this transfer',
        });
        break;
        
      case 'INVALID_RECIPIENT':
        await this.notifyUser(context.userId, {
          type: 'invalid_recipient',
          message: 'The recipient account details are invalid',
        });
        break;
        
      case 'COMPLIANCE_CHECK_FAILED':
        await this.escalateToCompliance(context);
        await this.notifyUser(context.userId, {
          type: 'compliance_review',
          message: 'Your transfer is under review for compliance',
        });
        break;
        
      case 'RATE_EXPIRED':
        // Retry with new rate
        return this.retryWithNewRate(context);
        
      default:
        await this.notifyUser(context.userId, {
          type: 'transfer_failed',
          message: 'Your transfer could not be completed. Please try again.',
        });
    }
    
    // Update transfer status
    await this.updateTransferStatus(context.transferId, 'failed', {
      errorCode: transferError.code,
      errorMessage: transferError.message,
    });
  }
}
```

#### Results

- Expanded to 30+ countries with proper compliance
- Faster transfer times (average 2 hours vs 3-5 days)
- Lower fees for customers (saved ~$50K annually)
- Better user experience with real-time status updates
- Increased customer satisfaction (NPS +15 points)
- Zero compliance violations
- 99.9% transfer success rate

> "International transfers require careful attention to compliance, error handling, and user experience. TypeScript's type system was crucial for catching errors before they reached production."

#### Lessons Learned

1. **Idempotency is critical**: Use idempotency keys for all transfer operations
2. **Rate locking matters**: Lock exchange rates to prevent user confusion
3. **Webhook reliability**: Implement proper webhook handling with retries
4. **Compliance first**: Build compliance checks into the core flow, not as an afterthought
5. **Monitoring is essential**: Track all transfer states and set up alerts
6. **Error handling depth**: Handle every possible error case with user-friendly messages
7. **State machine validation**: Use state machines to prevent invalid transitions
8. **Testing**: Test with sandbox environment extensively before production

