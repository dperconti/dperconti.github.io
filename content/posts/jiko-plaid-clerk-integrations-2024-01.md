---
title: "Integrating Jiko, Plaid, Clerk, and Xata at Pangea"
date: 2023-10-30T05:00:00Z
categories: 
  - TypeScript
  - Fintech
draft: false
---

At Pangea, we integrated multiple third-party services: Jiko for banking, Plaid for account connectivity, Clerk for authentication, and Xata for data storage. Each integration required careful design and error handling.

#### Integration Architecture

```typescript
// Authentication with Clerk
import { Clerk } from '@clerk/clerk-sdk-node';

class AuthService {
  private clerk: Clerk;
  
  async authenticateUser(token: string): Promise<User> {
    const user = await this.clerk.verifyToken(token);
    return this.mapClerkUserToUser(user);
  }
}

// Account connectivity with Plaid
import { PlaidApi } from 'plaid';

class AccountService {
  private plaid: PlaidApi;
  
  async linkAccount(userId: string): Promise<LinkToken> {
    const response = await this.plaid.linkTokenCreate({
      user: { client_user_id: userId },
      client_name: 'Pangea',
      products: ['transactions', 'auth'],
      country_codes: ['US'],
    });
    
    return response.data.link_token;
  }
}

// Banking with Jiko
class BankingService {
  async createAccount(userId: string, accountData: AccountData): Promise<Account> {
    const response = await fetch('https://api.jiko.com/accounts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.JIKO_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        ...accountData,
      }),
    });
    
    return response.json();
  }
}

// Data storage with Xata
import { XataClient } from '@xata.io/client';

class DataService {
  private xata: XataClient;
  
  async storeTransaction(transaction: Transaction): Promise<void> {
    await this.xata.db.transactions.create(transaction);
  }
}
```

#### Unified Service Layer

```typescript
class PangeaService {
  constructor(
    private auth: AuthService,
    private accounts: AccountService,
    private banking: BankingService,
    private data: DataService,
  ) {}
  
  async onboardUser(authToken: string, accountData: AccountData): Promise<OnboardingResult> {
    // Authenticate user
    const user = await this.auth.authenticateUser(authToken);
    
    // Create bank account
    const bankAccount = await this.banking.createAccount(user.id, accountData);
    
    // Link Plaid account
    const linkToken = await this.accounts.linkAccount(user.id);
    
    // Store in Xata
    await this.data.storeTransaction({
      userId: user.id,
      accountId: bankAccount.id,
      type: 'onboarding',
    });
    
    return {
      userId: user.id,
      bankAccountId: bankAccount.id,
      linkToken,
    };
  }
}
```

#### Error Handling

```typescript
class IntegrationError extends Error {
  constructor(
    message: string,
    public service: string,
    public code: string,
  ) {
    super(message);
  }
}

async function handleIntegrationError(error: unknown, service: string): Promise<never> {
  if (error instanceof IntegrationError) {
    // Log and handle service-specific errors
    logger.error(`Integration error in ${service}`, error);
    throw error;
  }
  
  // Handle unexpected errors
  logger.error(`Unexpected error in ${service}`, error);
  throw new IntegrationError('Unexpected error', service, 'UNKNOWN');
}
```

#### Testing Integrations

```typescript
describe('PangeaService', () => {
  it('should onboard user successfully', async () => {
    // Mock integrations
    jest.spyOn(authService, 'authenticateUser').mockResolvedValue(mockUser);
    jest.spyOn(bankingService, 'createAccount').mockResolvedValue(mockAccount);
    
    const result = await pangeaService.onboardUser('token', accountData);
    
    expect(result.userId).toBeDefined();
    expect(result.bankAccountId).toBeDefined();
  });
});
```

#### Best Practices

- Use SDKs when available
- Handle errors gracefully
- Implement retries with backoff
- Monitor integration health
- Cache when appropriate
- Document integration contracts

> "Third-party integrations require careful design and error handling."

#### Lessons Learned

1. Use official SDKs
2. Handle all error cases
3. Implement proper retries
4. Monitor integration health
5. Test with sandbox environments

