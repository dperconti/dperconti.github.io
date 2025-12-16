---
title: "Migrating to Nest.js and React"
date: 2024-04-21T05:00:00Z
categories: 
  - TypeScript
  - Architecture
draft: false
---

At Skillshare, we migrated our payments backend to Nest.js and our frontend to React. The migration improved developer experience, type safety, and maintainability.

#### Why Migrate?

Our legacy stack had issues:
- Tight coupling between components
- Limited type safety
- Difficult to test
- Poor developer experience
- Hard to scale

#### Backend: Nest.js Migration

Nest.js provides:
- TypeScript-first architecture
- Dependency injection
- Modular structure
- Built-in testing support
- Excellent documentation

#### Service Structure

```typescript
// payment.service.ts
@Injectable()
export class PaymentService {
  constructor(
    private paymentRepository: PaymentRepository,
    private notificationService: NotificationService,
  ) {}
  
  async processPayment(dto: CreatePaymentDto): Promise<Payment> {
    const payment = await this.paymentRepository.create(dto);
    await this.notificationService.sendConfirmation(payment);
    return payment;
  }
}

// payment.controller.ts
@Controller('payments')
export class PaymentController {
  constructor(private paymentService: PaymentService) {}
  
  @Post()
  async create(@Body() dto: CreatePaymentDto): Promise<Payment> {
    return this.paymentService.processPayment(dto);
  }
}
```

#### Module Organization

```typescript
@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  controllers: [PaymentController],
  providers: [PaymentService, PaymentRepository],
  exports: [PaymentService],
})
export class PaymentModule {}
```

#### Frontend: React Migration

React provides:
- Component-based architecture
- Strong ecosystem
- TypeScript support
- Great developer tools
- Performance optimizations

#### Component Structure

```typescript
interface PaymentFormProps {
  onSubmit: (payment: PaymentData) => void;
}

function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [paymentData, setPaymentData] = useState<PaymentData>({
    amount: 0,
    currency: 'USD',
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(paymentData);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={paymentData.amount}
        onChange={(e) => setPaymentData({
          ...paymentData,
          amount: parseFloat(e.target.value),
        })}
      />
      <button type="submit">Pay</button>
    </form>
  );
}
```

#### Migration Strategy

1. **Parallel Run**: Run old and new systems side-by-side
2. **Feature Flags**: Gradually enable new system
3. **Incremental Migration**: Move features one at a time
4. **Testing**: Comprehensive testing at each step
5. **Rollback Plan**: Ability to revert if needed

#### Testing

```typescript
// Backend tests
describe('PaymentService', () => {
  let service: PaymentService;
  
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PaymentService, PaymentRepository],
    }).compile();
    
    service = module.get<PaymentService>(PaymentService);
  });
  
  it('should process payment', async () => {
    const result = await service.processPayment({
      amount: 100,
      currency: 'USD',
    });
    
    expect(result).toBeDefined();
  });
});

// Frontend tests
describe('PaymentForm', () => {
  it('should submit payment data', () => {
    const onSubmit = jest.fn();
    render(<PaymentForm onSubmit={onSubmit} />);
    
    fireEvent.change(screen.getByLabelText('Amount'), {
      target: { value: '100' },
    });
    fireEvent.click(screen.getByText('Pay'));
    
    expect(onSubmit).toHaveBeenCalledWith({
      amount: 100,
      currency: 'USD',
    });
  });
});
```

#### Results

- Better type safety
- Improved developer experience
- Easier testing
- More maintainable code
- Faster feature development

> "Modern frameworks improve productivity and code quality."

#### Lessons Learned

1. Plan migration carefully
2. Test thoroughly
3. Migrate incrementally
4. Train team on new stack
5. Monitor performance

