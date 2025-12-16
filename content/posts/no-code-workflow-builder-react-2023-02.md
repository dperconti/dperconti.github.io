---
title: "Building a no-code workflow builder with React"
date: 2024-05-05T05:00:00Z
categories: 
  - TypeScript
  - React
draft: false
---

At Elevate Security, we built a no-code workflow builder that allowed users to create security automation workflows without writing code. Built with React and Tailwind, it provided a visual interface for connecting actions and triggers.

#### The Vision

Enable non-technical users to:
- Create workflows visually
- Connect triggers to actions
- Test workflows before deployment
- Monitor workflow execution
- Debug workflow issues

#### Architecture

- **Frontend**: React with drag-and-drop
- **Backend**: Node.js/Express API
- **Execution Engine**: Workflow runner service
- **Storage**: PostgreSQL for workflow definitions
- **Monitoring**: Real-time execution logs

#### React Components

```typescript
import React, { useState } from 'react';
import { ReactFlow, Node, Edge } from 'reactflow';

interface WorkflowNode {
  id: string;
  type: 'trigger' | 'action' | 'condition';
  data: {
    label: string;
    config: Record<string, unknown>;
  };
  position: { x: number; y: number };
}

function WorkflowBuilder() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  
  const onNodesChange = (changes: NodeChange[]) => {
    setNodes(applyNodeChanges(changes, nodes));
  };
  
  const onEdgesChange = (changes: EdgeChange[]) => {
    setEdges(applyEdgeChanges(changes, edges));
  };
  
  const onConnect = (connection: Connection) => {
    setEdges(prev => addEdge(connection, prev));
  };
  
  return (
    <div className="h-screen w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background />
      </ReactFlow>
    </div>
  );
}
```

#### Node Types

```typescript
const nodeTypes = {
  trigger: TriggerNode,
  action: ActionNode,
  condition: ConditionNode,
};

function TriggerNode({ data }: { data: NodeData }) {
  return (
    <div className="px-4 py-2 bg-blue-500 text-white rounded">
      <div className="font-bold">{data.label}</div>
      <div className="text-sm">{data.description}</div>
    </div>
  );
}

function ActionNode({ data }: { data: NodeData }) {
  return (
    <div className="px-4 py-2 bg-green-500 text-white rounded">
      <div className="font-bold">{data.label}</div>
      <div className="text-sm">{data.description}</div>
    </div>
  );
}
```

#### Workflow Execution

```typescript
class WorkflowExecutor {
  async executeWorkflow(workflowId: string, context: ExecutionContext): Promise<ExecutionResult> {
    const workflow = await this.loadWorkflow(workflowId);
    const execution = await this.createExecution(workflowId);
    
    try {
      // Execute trigger
      const triggerResult = await this.executeTrigger(workflow.trigger, context);
      
      // Execute actions
      for (const action of workflow.actions) {
        if (await this.evaluateConditions(action.conditions, triggerResult)) {
          await this.executeAction(action, triggerResult);
        }
      }
      
      await this.markExecutionComplete(execution.id);
      return { success: true, executionId: execution.id };
    } catch (error) {
      await this.markExecutionFailed(execution.id, error);
      throw error;
    }
  }
}
```

#### Testing Workflows

```typescript
function WorkflowTester({ workflowId }: { workflowId: string }) {
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  
  const runTest = async () => {
    const result = await fetch(`/api/workflows/${workflowId}/test`, {
      method: 'POST',
      body: JSON.stringify({ testData: {} }),
    }).then(r => r.json());
    
    setTestResult(result);
  };
  
  return (
    <div>
      <button onClick={runTest}>Run Test</button>
      {testResult && (
        <TestResultViewer result={testResult} />
      )}
    </div>
  );
}
```

#### Results

- Non-technical users created workflows
- Faster automation setup
- Visual debugging
- Better user experience
- Reduced support requests

> "No-code tools democratize automation."

#### Lessons Learned

1. Make the UI intuitive
2. Provide good error messages
3. Allow testing before deployment
4. Show execution logs
5. Support workflow versioning

