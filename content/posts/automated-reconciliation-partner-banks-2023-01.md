---
title: "Automated reconciliation with partner banks"
date: 2023-03-29T05:00:00Z
categories: 
  - Python
  - Fintech
draft: false
---

At Mercury, we built an automated reconciliation system that reduced manual effort by 60%. The system matches transactions between our ledger and partner bank statements automatically, flagging discrepancies for review.

#### The Problem

Manual reconciliation was:
- Time-consuming (hours per day)
- Error-prone (human mistakes)
- Not scalable (more transactions = more time)
- Expensive (high labor costs)

#### The Solution

We built an automated system using:
- Python for data processing
- Pandas for matching logic
- PostgreSQL for transaction storage
- Scheduled jobs for daily reconciliation
- Alerting for discrepancies

#### Matching Algorithm

```python
import pandas as pd
from decimal import Decimal

def reconcile_transactions(
    ledger_transactions: pd.DataFrame,
    bank_statement: pd.DataFrame
) -> pd.DataFrame:
    """
    Match transactions between ledger and bank statement.
    """
    # Normalize amounts
    ledger_transactions['amount_abs'] = ledger_transactions['amount'].abs()
    bank_statement['amount_abs'] = bank_statement['amount'].abs()
    
    # Match by amount and date (within 2 days)
    matches = pd.merge_asof(
        ledger_transactions.sort_values('date'),
        bank_statement.sort_values('date'),
        left_on='date',
        right_on='date',
        by='amount_abs',
        tolerance=pd.Timedelta('2 days'),
        direction='nearest'
    )
    
    # Find unmatched transactions
    matched_ledger_ids = matches['ledger_id'].dropna()
    unmatched_ledger = ledger_transactions[
        ~ledger_transactions['id'].isin(matched_ledger_ids)
    ]
    
    matched_bank_ids = matches['bank_id'].dropna()
    unmatched_bank = bank_statement[
        ~bank_statement['id'].isin(matched_bank_ids)
    ]
    
    return {
        'matched': matches.dropna(),
        'unmatched_ledger': unmatched_ledger,
        'unmatched_bank': unmatched_bank,
    }
```

#### Handling Edge Cases

- **Timing differences**: Transactions posted on different days
- **Fees**: Bank fees not in our ledger
- **Reversals**: Failed transactions that were reversed
- **Duplicates**: Same transaction appearing twice
- **Rounding**: Small differences due to rounding

#### Automation

```python
from apscheduler.schedulers.blocking import BlockingScheduler

def daily_reconciliation():
    """Run reconciliation daily at 2 AM."""
    ledger = fetch_ledger_transactions()
    bank_statement = fetch_bank_statement()
    
    results = reconcile_transactions(ledger, bank_statement)
    
    # Alert on discrepancies
    if len(results['unmatched_ledger']) > 0:
        send_alert('Unmatched ledger transactions', results['unmatched_ledger'])
    
    if len(results['unmatched_bank']) > 0:
        send_alert('Unmatched bank transactions', results['unmatched_bank'])
    
    # Store results
    save_reconciliation_results(results)

scheduler = BlockingScheduler()
scheduler.add_job(daily_reconciliation, 'cron', hour=2)
scheduler.start()
```

#### Results

- 60% reduction in manual effort
- Faster reconciliation (minutes vs hours)
- Fewer errors
- Better audit trail
- Scalable to more transactions

> "Automation frees up time for higher-value work."

#### Best Practices

1. Start with simple matching rules
2. Iterate based on results
3. Handle edge cases explicitly
4. Log everything for debugging
5. Alert on discrepancies promptly

