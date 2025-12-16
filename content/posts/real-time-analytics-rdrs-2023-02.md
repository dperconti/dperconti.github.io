---
title: "Building real-time analytics with RDRs"
date: 2024-12-26T05:00:00Z
categories: 
  - TypeScript
  - Architecture
draft: false
---

At Elevate Security, we launched real-time analytics (RDRs - Real-time Data Reports) that provided instant insights into security events. The system processed thousands of events per second and displayed results in a React dashboard.

#### The Challenge

Security events happen in real-time, and delayed insights mean delayed responses. We needed:
- Sub-second latency
- High throughput (thousands of events/second)
- Real-time visualization
- Historical context
- Alerting capabilities

#### Architecture

We built:
- **Event ingestion**: Kafka for event streaming
- **Processing**: Real-time aggregation with Apache Flink
- **Storage**: Time-series database (InfluxDB)
- **API**: FastAPI for data access
- **Frontend**: React with real-time updates

#### Event Processing

```typescript
interface SecurityEvent {
  timestamp: Date;
  eventType: string;
  userId: string;
  ipAddress: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  metadata: Record<string, unknown>;
}

class RealTimeAnalytics {
  private eventStream: EventStream;
  private aggregator: EventAggregator;
  
  async processEvent(event: SecurityEvent): Promise<void> {
    // Update real-time counters
    await this.aggregator.incrementCounter(
      `events.${event.eventType}`,
      event.timestamp
    );
    
    // Update user activity
    await this.aggregator.updateUserActivity(
      event.userId,
      event.timestamp
    );
    
    // Check for anomalies
    if (await this.detectAnomaly(event)) {
      await this.triggerAlert(event);
    }
    
    // Update dashboard
    await this.broadcastUpdate(event);
  }
}
```

#### Real-Time Dashboard

```typescript
import { useEffect, useState } from 'react';
import useWebSocket from 'react-use-websocket';

function RealTimeDashboard() {
  const [metrics, setMetrics] = useState<Metrics>({});
  const { lastMessage } = useWebSocket('ws://api/events/stream');
  
  useEffect(() => {
    if (lastMessage) {
      const update = JSON.parse(lastMessage.data);
      setMetrics(prev => ({
        ...prev,
        ...update,
      }));
    }
  }, [lastMessage]);
  
  return (
    <div>
      <MetricCard label="Events/sec" value={metrics.eventsPerSecond} />
      <MetricCard label="Active Users" value={metrics.activeUsers} />
      <EventTimeline events={metrics.recentEvents} />
    </div>
  );
}
```

#### Aggregation Logic

```typescript
class EventAggregator {
  private counters: Map<string, number> = new Map();
  private timeWindows: Map<string, TimeWindow> = new Map();
  
  incrementCounter(key: string, timestamp: Date): void {
    const windowKey = this.getTimeWindow(timestamp);
    const current = this.counters.get(windowKey) || 0;
    this.counters.set(windowKey, current + 1);
  }
  
  getMetrics(timeRange: TimeRange): Metrics {
    const relevantWindows = this.getWindowsInRange(timeRange);
    
    return {
      totalEvents: relevantWindows.reduce((sum, w) => sum + w.count, 0),
      eventsPerSecond: this.calculateRate(relevantWindows),
      topEventTypes: this.getTopEventTypes(relevantWindows),
    };
  }
}
```

#### Performance Optimization

- Use time-windowed aggregation
- Cache frequently accessed metrics
- Batch database writes
- Use WebSockets for real-time updates
- Optimize queries with indexes

#### Results

- Sub-second latency for metrics
- Real-time visualization
- Better security incident response
- Improved user experience
- Scalable to millions of events

> "Real-time analytics enable faster decision-making."

#### Lessons Learned

1. Choose the right time-series database
2. Optimize aggregation queries
3. Use WebSockets for real-time updates
4. Handle backpressure gracefully
5. Monitor system performance

