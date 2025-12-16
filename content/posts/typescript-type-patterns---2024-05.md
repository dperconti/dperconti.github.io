---
title: "Type-safe form validation with TypeScript and Zod"
date: 2025-10-24T05:00:00Z
categories: 
  - TypeScript
  - Fintech
draft: false
---

Form validation is critical in financial applications. At Pangea, we use TypeScript with Zod to create type-safe forms that validate at runtime and provide excellent developer experience.

#### Schema Definition

```typescript
import { z } from 'zod';

const PaymentFormSchema = z.object({
  amount: z.string()
    .regex(/^\d+\.\d{2}$/, 'Amount must be in format 0.00')
    .refine((val) => parseFloat(val) > 0, 'Amount must be greater than 0'),
  currency: z.enum(['USD', 'EUR', 'GBP'], {
    errorMap: () => ({ message: 'Invalid currency' }),
  }),
  recipientId: z.string().uuid('Invalid recipient ID'),
  description: z.string().min(1).max(500),
  metadata: z.record(z.unknown()).optional(),
});

// Infer TypeScript type from schema
type PaymentFormData = z.infer<typeof PaymentFormSchema>;
```

#### Type-Safe Form Component

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

function PaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(PaymentFormSchema),
  });
  
  const onSubmit = async (data: PaymentFormData) => {
    // data is fully typed and validated
    await createPayment({
      amount: new Decimal(data.amount),
      currency: data.currency,
      recipientId: data.recipientId,
      description: data.description,
      metadata: data.metadata,
    });
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('amount')} />
      {errors.amount && <span>{errors.amount.message}</span>}
      
      <select {...register('currency')}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      {errors.currency && <span>{errors.currency.message}</span>}
      
      <input {...register('recipientId')} />
      {errors.recipientId && <span>{errors.recipientId.message}</span>}
      
      <textarea {...register('description')} />
      {errors.description && <span>{errors.description.message}</span>}
      
      <button type="submit">Submit</button>
    </form>
  );
}
```

#### Server-Side Validation

```typescript
// API route handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Validate request body
    const validatedData = PaymentFormSchema.parse(req.body);
    
    // Process payment with validated data
    const payment = await createPayment(validatedData);
    
    return res.status(201).json(payment);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        errors: error.errors,
      });
    }
    
    return res.status(500).json({
      error: 'Internal server error',
    });
  }
}
```

#### Custom Validators

```typescript
const PaymentFormSchema = z.object({
  amount: z.string().refine(
    (val) => {
      const amount = parseFloat(val);
      return amount > 0 && amount <= 1000000;
    },
    { message: 'Amount must be between 0 and 1,000,000' }
  ),
  currency: z.enum(['USD', 'EUR', 'GBP']),
  recipientId: z.string().uuid(),
}).refine(
  (data) => {
    // Cross-field validation
    if (data.currency === 'USD' && parseFloat(data.amount) > 10000) {
      return false;
    }
    return true;
  },
  {
    message: 'USD payments over $10,000 require additional verification',
    path: ['amount'],
  }
);
```

> "Type-safe validation prevents bugs and improves developer experience."

#### Advanced Patterns

**Async Validation:**
```typescript
const PaymentFormSchema = z.object({
  recipientId: z.string().uuid().refine(
    async (id) => {
      const recipient = await checkRecipientExists(id);
      return recipient !== null;
    },
    { message: 'Recipient not found' }
  ),
});
```

**Conditional Validation:**
```typescript
const PaymentFormSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('domestic'),
    routingNumber: z.string().length(9),
  }),
  z.object({
    type: z.literal('international'),
    swiftCode: z.string().regex(/^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}[A-Z0-9]{3}$/),
  }),
]);
```

