---
title: "CI/CD with Cloud Build and GitHub Actions"
date: 2023-07-08T05:00:00Z
categories: 
  - DevOps
  - Engineering
draft: false
---

At Pangea, we use Cloud Build and GitHub Actions for CI/CD. The pipeline builds, tests, and deploys our services automatically, ensuring quality and speed.

#### Pipeline Stages

1. **Lint**: Check code style
2. **Test**: Run unit and integration tests
3. **Build**: Create Docker images
4. **Security Scan**: Check for vulnerabilities
5. **Deploy**: Deploy to staging/production

#### GitHub Actions Workflow

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run tests
        run: npm test
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker image
        run: |
          docker build -t gcr.io/${{ secrets.GCP_PROJECT }}/api:${{ github.sha }} .
      
      - name: Push to GCR
        run: |
          echo "${{ secrets.GCP_SA_KEY }}" | docker login -u _json_key --password-stdin https://gcr.io
          docker push gcr.io/${{ secrets.GCP_PROJECT }}/api:${{ github.sha }}

  deploy-staging:
    needs: build
    if: github.ref == 'refs/heads/develop'
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to staging
        run: |
          gcloud run deploy api \
            --image gcr.io/${{ secrets.GCP_PROJECT }}/api:${{ github.sha }} \
            --region us-central1 \
            --platform managed
```

#### Cloud Build Configuration

```yaml
# cloudbuild.yaml
steps:
  # Build
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/api:$SHORT_SHA', '.']
  
  # Test
  - name: 'gcr.io/cloud-builders/docker'
    args: ['run', '--rm', 'gcr.io/$PROJECT_ID/api:$SHORT_SHA', 'npm', 'test']
  
  # Security scan
  - name: 'gcr.io/cloud-builders/docker'
    args: ['run', '--rm', '-v', '/var/run/docker.sock:/var/run/docker.sock', 'aquasec/trivy', 'image', 'gcr.io/$PROJECT_ID/api:$SHORT_SHA']
  
  # Push
  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/api:$SHORT_SHA']
  
  # Deploy
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
    entrypoint: gcloud
    args:
      - 'run'
      - 'deploy'
      - 'api'
      - '--image'
      - 'gcr.io/$PROJECT_ID/api:$SHORT_SHA'
      - '--region'
      - 'us-central1'

images:
  - 'gcr.io/$PROJECT_ID/api:$SHORT_SHA'
```

#### Best Practices

- Fast feedback (fail fast)
- Parallel jobs when possible
- Cache dependencies
- Security scanning
- Automated rollback
- Deployment approvals for production

> "CI/CD enables rapid, reliable deployments."

#### Lessons Learned

1. Keep pipelines fast
2. Test thoroughly
3. Scan for security issues
4. Automate everything possible
5. Monitor deployments

