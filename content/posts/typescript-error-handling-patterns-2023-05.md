---
title: "TypeScript error handling patterns"
date: 2025-07-02T05:00:00Z
categories: 
  - TypeScript
  - Best Practices
draft: false
---

Error handling in TypeScript can be tricky. After building payment systems where errors can cost money, I've learned that good error handling is about more than try/catch-it's about creating a robust error handling strategy.

#### The Problem

JavaScript's error handling is limited:
- No discriminated unions for errors
- Easy to forget error cases
- No type safety for error types
- Inconsistent error patterns

#### Pattern 1: Result Type

```typescript
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

function processPayment(amount: number): Result<Payment, PaymentError> {
  if (amount <= 0) {
    return { success: false, error: new PaymentError('Invalid amount') };
  }
  // Process payment...
  return { success: true, data: payment };
}

// Usage
const result = processPayment(100);
if (result.success) {
  console.log(result.data); // TypeScript knows this is Payment
} else {
  console.error(result.error); // TypeScript knows this is PaymentError
}
```

#### Pattern 2: Custom Error Classes

```typescript
class PaymentError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 400
  ) {
    super(message);
    this.name = 'PaymentError';
  }
}

class InsufficientFundsError extends PaymentError {
  constructor(public balance: number, public requested: number) {
    super(
      `Insufficient funds: ${balance} < ${requested}`,
      'INSUFFICIENT_FUNDS',
      402
    );
  }
}
```

#### Pattern 3: Error Handling Middleware

```typescript
async function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof PaymentError) {
    return res.status(error.statusCode).json({
      error: {
        code: error.code,
        message: error.message,
      },
    });
  }
  
  // Log unexpected errors
  console.error('Unexpected error:', error);
  return res.status(500).json({
    error: {
      code: 'INTERNAL_ERROR',
      message: 'An unexpected error occurred',
    },
  });
}
```

#### Pattern 4: Async Error Wrapper

```typescript
function asyncHandler<T extends RequestHandler>(
  fn: T
): RequestHandler {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

// Usage
app.post('/payments', asyncHandler(async (req, res) => {
  const payment = await processPayment(req.body);
  res.json(payment);
}));
```

#### Best Practices

1. Use specific error types
2. Include context in errors
3. Log errors appropriately
4. Don't expose internals to users
5. Handle errors at the right level
6. Use type guards for error checking

> "Good error handling makes debugging easier and improves user experience."

