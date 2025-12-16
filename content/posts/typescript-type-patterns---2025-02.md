---
title: "Type-safe database queries with TypeScript"
date: 2025-11-13T05:00:00Z
categories: 
  - TypeScript
  - Fintech
draft: false
---

At Pangea, we use TypeScript with Prisma to create type-safe database queries. This prevents SQL injection, ensures data consistency, and makes refactoring safer. Here's our approach.

#### Prisma Schema Definition

```prisma
model Payment {
  id        String   @id @default(uuid())
  amount    Decimal  @db.Decimal(10, 2)
  currency  String
  status    PaymentStatus
  userId    String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  user      User     @relation(fields: [userId], references: [id])
  
  @@index([userId])
  @@index([status, createdAt])
}

enum PaymentStatus {
  PENDING
  PROCESSING
  COMPLETED
  FAILED
  REFUNDED
}
```

#### Type-Safe Queries

```typescript
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

// Type-safe find
async function getPayment(id: string): Promise<Payment | null> {
  return prisma.payment.findUnique({
    where: { id },
    include: { user: true },
  });
}

// Type-safe create with validation
async function createPayment(
  data: Prisma.PaymentCreateInput
): Promise<Payment> {
  // TypeScript ensures all required fields are present
  return prisma.payment.create({
    data: {
      amount: data.amount,
      currency: data.currency,
      status: 'PENDING',
      user: {
        connect: { id: data.user.connect.id },
      },
    },
  });
}

// Type-safe updates
async function updatePaymentStatus(
  id: string,
  status: PaymentStatus
): Promise<Payment> {
  return prisma.payment.update({
    where: { id },
    data: { status },
  });
}
```

#### Complex Queries with Type Safety

```typescript
// Type-safe aggregations
async function getPaymentStats(
  userId: string,
  startDate: Date,
  endDate: Date
): Promise<{
  totalAmount: Decimal;
  count: number;
  byStatus: Record<PaymentStatus, number>;
}> {
  const payments = await prisma.payment.findMany({
    where: {
      userId,
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    },
  });
  
  const totalAmount = payments.reduce(
    (sum, p) => sum.plus(p.amount),
    new Decimal(0)
  );
  
  const byStatus = payments.reduce((acc, p) => {
    acc[p.status] = (acc[p.status] || 0) + 1;
    return acc;
  }, {} as Record<PaymentStatus, number>);
  
  return {
    totalAmount,
    count: payments.length,
    byStatus,
  };
}
```

#### Transaction Safety

```typescript
async function transferFunds(
  fromAccountId: string,
  toAccountId: string,
  amount: Decimal
): Promise<void> {
  await prisma.$transaction(async (tx) => {
    // Type-safe transaction context
    const fromAccount = await tx.account.findUnique({
      where: { id: fromAccountId },
    });
    
    if (!fromAccount || fromAccount.balance.lt(amount)) {
      throw new Error('Insufficient funds');
    }
    
    await tx.account.update({
      where: { id: fromAccountId },
      data: { balance: { decrement: amount } },
    });
    
    await tx.account.update({
      where: { id: toAccountId },
      data: { balance: { increment: amount } },
    });
    
    await tx.transaction.create({
      data: {
        fromAccountId,
        toAccountId,
        amount,
        type: 'TRANSFER',
      },
    });
  });
}
```

#### Type-Safe Raw Queries

```typescript
// Even raw queries can be type-safe
async function getPaymentTotalsByCurrency(): Promise<
  Array<{ currency: string; total: Decimal }>
> {
  const results = await prisma.$queryRaw<
    Array<{ currency: string; total: Decimal }>
  >`
    SELECT 
      currency,
      SUM(amount) as total
    FROM Payment
    WHERE status = 'COMPLETED'
    GROUP BY currency
  `;
  
  return results;
}
```

> "Type-safe database queries prevent entire classes of bugs and make refactoring safer."

#### Best Practices

1. Use Prisma for type-safe ORM
2. Define schemas carefully - they become your types
3. Use transactions for multi-step operations
4. Validate inputs before database operations
5. Use raw queries sparingly, but type them when needed
6. Index frequently queried fields
7. Use enums for constrained values

