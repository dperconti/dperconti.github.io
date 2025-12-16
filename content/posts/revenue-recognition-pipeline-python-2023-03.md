---
title: "Building a revenue recognition pipeline in Python"
date: 2025-03-17T05:00:00Z
categories: 
  - Python
  - Fintech
draft: false
---

At Skillshare, I led the payments team in building a revenue recognition pipeline that accurately tracked revenue according to accounting standards. The system processed millions of transactions and generated financial reports.

#### The Challenge

Revenue recognition requires:
- Accurate timing (when to recognize revenue)
- Proper categorization (subscription vs one-time)
- Compliance with accounting standards (ASC 606)
- Audit trails for all calculations
- Reporting for finance team

#### Architecture

We built:
- **Data pipeline**: Extract transactions from payment processors
- **Recognition engine**: Apply recognition rules
- **Storage**: PostgreSQL for recognized revenue
- **Reporting**: Generate financial reports
- **Reconciliation**: Match with payment processor data

#### Recognition Rules

```python
from decimal import Decimal
from datetime import datetime, timedelta
from enum import Enum

class RecognitionMethod(Enum):
    IMMEDIATE = "immediate"
    DEFERRED = "deferred"
    SUBSCRIPTION = "subscription"

def recognize_revenue(
    transaction: Transaction,
    method: RecognitionMethod
) -> List[RevenueRecognition]:
    """
    Recognize revenue based on method.
    """
    if method == RecognitionMethod.IMMEDIATE:
        return [RevenueRecognition(
            amount=transaction.amount,
            date=transaction.date,
            transaction_id=transaction.id,
        )]
    
    elif method == RecognitionMethod.SUBSCRIPTION:
        # Recognize over subscription period
        period_start = transaction.date
        period_end = transaction.subscription_end_date
        days = (period_end - period_start).days
        
        recognitions = []
        daily_amount = transaction.amount / Decimal(str(days))
        
        current_date = period_start
        while current_date <= period_end:
            recognitions.append(RevenueRecognition(
                amount=daily_amount,
                date=current_date,
                transaction_id=transaction.id,
            ))
            current_date += timedelta(days=1)
        
        return recognitions
```

#### Data Pipeline

```python
import pandas as pd

def process_revenue_recognition(date: datetime) -> pd.DataFrame:
    """
    Process revenue recognition for a specific date.
    """
    # Fetch transactions
    transactions = fetch_transactions(date)
    
    # Apply recognition rules
    recognitions = []
    for transaction in transactions:
        method = determine_recognition_method(transaction)
        revenue = recognize_revenue(transaction, method)
        recognitions.extend(revenue)
    
    # Aggregate by date
    df = pd.DataFrame(recognitions)
    daily_revenue = df.groupby('date')['amount'].sum().reset_index()
    
    # Store in database
    store_revenue_recognition(daily_revenue)
    
    return daily_revenue
```

#### Reporting

```python
def generate_revenue_report(start_date: datetime, end_date: datetime) -> pd.DataFrame:
    """
    Generate revenue report for date range.
    """
    query = """
        SELECT 
            date,
            SUM(amount) as recognized_revenue,
            COUNT(DISTINCT transaction_id) as transaction_count
        FROM revenue_recognitions
        WHERE date BETWEEN %s AND %s
        GROUP BY date
        ORDER BY date
    """
    
    df = pd.read_sql(query, conn, params=[start_date, end_date])
    return df
```

#### Reconciliation

```python
def reconcile_revenue(
    recognized_revenue: Decimal,
    payment_processor_revenue: Decimal,
    date: datetime
) -> ReconciliationResult:
    """
    Reconcile recognized revenue with payment processor data.
    """
    difference = abs(recognized_revenue - payment_processor_revenue)
    threshold = Decimal('0.01')  # Allow small rounding differences
    
    if difference > threshold:
        return ReconciliationResult(
            status='discrepancy',
            difference=difference,
            date=date,
        )
    
    return ReconciliationResult(
        status='reconciled',
        difference=difference,
        date=date,
    )
```

#### Testing

```python
def test_subscription_revenue_recognition():
    transaction = Transaction(
        id='t1',
        amount=Decimal('100.00'),
        date=datetime(2023, 1, 1),
        subscription_end_date=datetime(2023, 1, 31),
    )
    
    recognitions = recognize_revenue(transaction, RecognitionMethod.SUBSCRIPTION)
    
    assert len(recognitions) == 31  # 31 days
    assert sum(r.amount for r in recognitions) == Decimal('100.00')
```

#### Results

- Accurate revenue recognition
- Compliance with accounting standards
- Automated reporting
- Better financial visibility
- Reduced manual effort

> "Revenue recognition requires precision and compliance."

#### Lessons Learned

1. Understand accounting standards thoroughly
2. Test with real transaction data
3. Maintain detailed audit trails
4. Reconcile regularly
5. Work closely with finance team

