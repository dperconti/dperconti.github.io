---
title: "Building a serverless prototype for Seawheeze community app"
date: 2025-04-06T05:00:00Z
categories: 
  - AWS
  - Architecture
draft: false
---

At lululemon, I built a prototype for the Seawheeze community app using serverless AWS architecture. The app connected runners, tracked training progress, and built community around the annual Seawheeze half marathon.

#### Why Serverless?

Serverless provides:
- No server management
- Automatic scaling
- Pay-per-use pricing
- Fast development
- Built-in integrations

#### Architecture

We used:
- **Lambda**: Backend functions
- **API Gateway**: REST API
- **DynamoDB**: User and activity data
- **S3**: Static assets and images
- **Cognito**: Authentication
- **CloudFront**: CDN

#### Lambda Functions

```python
import json
import boto3
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
runs_table = dynamodb.Table('seawheeze-runs')

def create_run(event, context):
    """
    Create a new run entry.
    """
    body = json.loads(event['body'])
    user_id = event['requestContext']['authorizer']['userId']
    
    run = {
        'run_id': generate_id(),
        'user_id': user_id,
        'distance': Decimal(str(body['distance'])),
        'duration': body['duration'],
        'date': body['date'],
        'created_at': datetime.utcnow().isoformat(),
    }
    
    runs_table.put_item(Item=run)
    
    return {
        'statusCode': 201,
        'body': json.dumps(run),
    }

def get_user_runs(event, context):
    """
    Get runs for a user.
    """
    user_id = event['requestContext']['authorizer']['userId']
    
    response = runs_table.query(
        KeyConditionExpression='user_id = :uid',
        ExpressionAttributeValues={':uid': user_id},
        ScanIndexForward=False,
    )
    
    return {
        'statusCode': 200,
        'body': json.dumps(response['Items']),
    }
```

#### API Gateway Configuration

```yaml
# serverless.yml
service: seawheeze-app

provider:
  name: aws
  runtime: python3.9
  region: us-west-2

functions:
  createRun:
    handler: handlers.create_run
    events:
      - http:
          path: runs
          method: post
          cors: true
          authorizer: aws_iam
  
  getUserRuns:
    handler: handlers.get_user_runs
    events:
      - http:
          path: runs
          method: get
          cors: true
          authorizer: aws_iam

resources:
  Resources:
    RunsTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: seawheeze-runs
        BillingMode: PAY_PER_REQUEST
        AttributeDefinitions:
          - AttributeName: user_id
            AttributeType: S
          - AttributeName: run_id
            AttributeType: S
        KeySchema:
          - AttributeName: user_id
            KeyType: HASH
          - AttributeName: run_id
            KeyType: RANGE
```

#### Frontend Integration

```typescript
const API_URL = 'https://api.seawheeze.com';

async function createRun(runData: RunData): Promise<Run> {
  const response = await fetch(`${API_URL}/runs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthToken()}`,
    },
    body: JSON.stringify(runData),
  });
  
  return response.json();
}

async function getUserRuns(userId: string): Promise<Run[]> {
  const response = await fetch(`${API_URL}/runs?userId=${userId}`, {
    headers: {
      'Authorization': `Bearer ${getAuthToken()}`,
    },
  });
  
  return response.json();
}
```

#### Benefits

- Fast development (days vs weeks)
- Low cost (pay only for usage)
- Automatic scaling
- No server management
- Easy to iterate

#### Results

- Working prototype in days
- Low infrastructure costs
- Scalable architecture
- Easy to extend
- Good performance

> "Serverless enables rapid prototyping."

#### Lessons Learned

1. Start with serverless for prototypes
2. Use managed services when possible
3. Monitor Lambda costs
4. Optimize cold starts
5. Plan for production scaling

