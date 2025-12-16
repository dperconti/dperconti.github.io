---
title: "Building type-safe APIs with TypeScript"
date: 2025-11-20T05:00:00Z
categories: 
  - TypeScript
  - Fintech
draft: false
---

At Pangea, we built REST APIs that are fully type-safe from client to server. This prevents entire classes of bugs and makes refactoring safer. Here's how we achieved end-to-end type safety.

#### Shared Type Definitions

```typescript
// shared/types.ts
export interface CreatePaymentRequest {
  amount: Decimal;
  currency: CurrencyCode;
  recipientId: string;
  description: string;
  metadata?: Record<string, unknown>;
}

export interface PaymentResponse {
  id: string;
  amount: Decimal;
  currency: CurrencyCode;
  status: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}
```

#### Type-Safe API Client

```typescript
// client/api.ts
class ApiClient {
  async createPayment(
    request: CreatePaymentRequest
  ): Promise<PaymentResponse> {
    const response = await fetch('/api/payments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });
    
    if (!response.ok) {
      const error: ApiError = await response.json();
      throw new ApiError(error.code, error.message, error.details);
    }
    
    return response.json() as Promise<PaymentResponse>;
  }
  
  async getPayment(id: string): Promise<PaymentResponse> {
    const response = await fetch(`/api/payments/${id}`);
    
    if (!response.ok) {
      const error: ApiError = await response.json();
      throw new ApiError(error.code, error.message, error.details);
    }
    
    return response.json() as Promise<PaymentResponse>;
  }
}
```

#### Type-Safe Server Handlers

```typescript
// server/handlers.ts
import type { CreatePaymentRequest, PaymentResponse } from '@shared/types';

class PaymentHandler {
  async createPayment(
    request: CreatePaymentRequest
  ): Promise<PaymentResponse> {
    // TypeScript ensures request matches CreatePaymentRequest
    const payment = await this.paymentService.create({
      amount: request.amount,
      currency: request.currency,
      recipientId: request.recipientId,
      description: request.description,
      metadata: request.metadata,
    });
    
    return {
      id: payment.id,
      amount: payment.amount,
      currency: payment.currency,
      status: payment.status,
      createdAt: payment.createdAt,
      updatedAt: payment.updatedAt,
    };
  }
}
```

#### Runtime Validation with Zod

```typescript
import { z } from 'zod';

const CreatePaymentSchema = z.object({
  amount: z.string().regex(/^\d+\.\d{2}$/),
  currency: z.enum(['USD', 'EUR', 'GBP']),
  recipientId: z.string().uuid(),
  description: z.string().min(1).max(500),
  metadata: z.record(z.unknown()).optional(),
});

// Infer TypeScript type from Zod schema
type ValidatedCreatePaymentRequest = z.infer<typeof CreatePaymentSchema>;

function validateRequest(
  body: unknown
): ValidatedCreatePaymentRequest {
  return CreatePaymentSchema.parse(body);
}
```

#### Type-Safe Route Handlers

```typescript
// Using Next.js API routes
import type { NextApiRequest, NextApiResponse } from 'next';
import type { CreatePaymentRequest, PaymentResponse, ApiError } from '@shared/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PaymentResponse | ApiError>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      code: 'METHOD_NOT_ALLOWED',
      message: 'Only POST method is allowed',
    });
  }
  
  try {
    const request = validateRequest(req.body);
    const payment = await paymentHandler.createPayment(request);
    return res.status(201).json(payment);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        code: 'VALIDATION_ERROR',
        message: 'Invalid request body',
        details: error.errors,
      });
    }
    
    return res.status(500).json({
      code: 'INTERNAL_ERROR',
      message: 'An unexpected error occurred',
    });
  }
}
```

#### OpenAPI Type Generation

```typescript
// Generate types from OpenAPI spec
// openapi-typescript openapi.yaml --output types/api.ts

import type { paths } from './types/api';

type CreatePaymentPath = paths['/api/payments']['post'];
type CreatePaymentRequest = CreatePaymentPath['requestBody']['content']['application/json'];
type CreatePaymentResponse = CreatePaymentPath['responses']['201']['content']['application/json'];
```

> "Type-safe APIs catch integration bugs before they reach production. The investment in shared types pays dividends."

#### Benefits

- Compile-time error detection
- Automatic refactoring safety
- Better IDE autocomplete
- Self-documenting APIs
- Reduced integration bugs

