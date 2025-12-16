---
title: "Building Buy Online, Pick-Up In Store at lululemon"
date: 2023-07-01T05:00:00Z
categories: 
  - Architecture
  - Engineering
draft: false
---

At lululemon, I led the API-layer team that launched Buy Online, Pick-Up In Store (BOPIS). This feature required real-time inventory synchronization, store location services, and seamless checkout integration.

#### The Challenge

BOPIS requires:
- Real-time inventory visibility
- Store location and availability
- Seamless checkout flow
- Order management system
- Customer notifications

#### Architecture

We built:
- **Inventory API**: Real-time store inventory
- **Location Service**: Store finder and availability
- **Order API**: Create and manage pickup orders
- **Notification Service**: Customer updates
- **Store Integration**: Connect with POS systems

#### Inventory Synchronization

```typescript
class StoreInventoryService {
  async getStoreInventory(
    productId: string,
    storeId: string
  ): Promise<InventoryStatus> {
    // Check cache first
    const cached = await this.cache.get(`inventory:${storeId}:${productId}`);
    if (cached) {
      return cached;
    }
    
    // Fetch from store system
    const inventory = await this.storeSystem.getInventory(storeId, productId);
    
    // Cache for 5 minutes
    await this.cache.set(
      `inventory:${storeId}:${productId}`,
      inventory,
      300
    );
    
    return inventory;
  }
  
  async reserveInventory(
    productId: string,
    storeId: string,
    quantity: number
  ): Promise<ReservationResult> {
    // Reserve inventory in store system
    const reservation = await this.storeSystem.reserve(
      storeId,
      productId,
      quantity
    );
    
    // Invalidate cache
    await this.cache.delete(`inventory:${storeId}:${productId}`);
    
    return reservation;
  }
}
```

#### Store Location Service

```typescript
interface Store {
  id: string;
  name: string;
  address: Address;
  coordinates: Coordinates;
  hours: StoreHours;
  inventory: Map<string, number>;
}

class StoreLocationService {
  async findNearbyStores(
    location: Coordinates,
    radius: number
  ): Promise<Store[]> {
    const stores = await this.storeRepository.findNearby(location, radius);
    
    return stores.map(store => ({
      ...store,
      distance: this.calculateDistance(location, store.coordinates),
    })).sort((a, b) => a.distance - b.distance);
  }
  
  async getStoresWithProduct(
    productId: string,
    location: Coordinates
  ): Promise<Store[]> {
    const stores = await this.findNearbyStores(location, 25); // 25 miles
    
    const availableStores = await Promise.all(
      stores.map(async (store) => {
        const inventory = await this.inventoryService.getStoreInventory(
          productId,
          store.id
        );
        return inventory.available > 0 ? store : null;
      })
    );
    
    return availableStores.filter(Boolean) as Store[];
  }
}
```

#### Order Creation

```typescript
class BOPISOrderService {
  async createPickupOrder(
    customerId: string,
    items: CartItem[],
    storeId: string
  ): Promise<PickupOrder> {
    // Validate store availability
    for (const item of items) {
      const inventory = await this.inventoryService.getStoreInventory(
        item.productId,
        storeId
      );
      
      if (inventory.available < item.quantity) {
        throw new InsufficientInventoryError(item.productId, storeId);
      }
    }
    
    // Reserve inventory
    const reservations = await Promise.all(
      items.map(item =>
        this.inventoryService.reserveInventory(
          item.productId,
          storeId,
          item.quantity
        )
      )
    );
    
    // Create order
    const order = await this.orderRepository.create({
      customerId,
      storeId,
      items,
      type: 'pickup',
      status: 'pending',
      reservations: reservations.map(r => r.id),
    });
    
    // Send notifications
    await this.notificationService.sendOrderConfirmation(order);
    
    return order;
  }
}
```

#### Results

- Successful BOPIS launch
- Real-time inventory accuracy
- Seamless customer experience
- Increased store foot traffic
- Better inventory utilization

> "BOPIS bridges online and physical retail."

#### Lessons Learned

1. Real-time inventory is critical
2. Cache aggressively but invalidate properly
3. Handle inventory conflicts gracefully
4. Provide clear customer communication
5. Monitor store fulfillment rates

