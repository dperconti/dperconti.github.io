---
title: "Managing GCP infrastructure with Terraform at Pangea"
date: 2025-04-19T05:00:00Z
categories: 
  - Infrastructure
  - Fintech
draft: false
---

At Pangea, we use Terraform to manage our GCP infrastructure for the FX and payments platform. Infrastructure as code enables version control, reproducibility, and safer deployments.

#### Why Terraform?

Terraform provides:
- Declarative infrastructure
- Version control
- State management
- Multi-cloud support
- Plan before apply

#### Our Setup

```hcl
# main.tf
terraform {
  required_version = ">= 1.0"
  
  backend "gcs" {
    bucket = "pangea-terraform-state"
    prefix = "production"
  }
  
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}
```

#### Cloud Run Services

```hcl
resource "google_cloud_run_service" "api" {
  name     = "pangea-api"
  location = var.region
  
  template {
    spec {
      containers {
        image = "gcr.io/${var.project_id}/api:${var.image_tag}"
        
        resources {
          limits = {
            cpu    = "2"
            memory = "4Gi"
          }
        }
        
        env {
          name  = "DATABASE_URL"
          value = var.database_url
        }
      }
    }
    
    metadata {
      annotations = {
        "autoscaling.knative.dev/maxScale" = "100"
        "run.googleapis.com/cloudsql-instances" = google_sql_database_instance.main.connection_name
      }
    }
  }
  
  traffic {
    percent         = 100
    latest_revision = true
  }
}
```

#### Pub/Sub Topics

```hcl
resource "google_pubsub_topic" "payment_events" {
  name = "payment-events"
  
  message_retention_duration = "604800s" # 7 days
}

resource "google_pubsub_subscription" "payment_processor" {
  name  = "payment-processor-sub"
  topic = google_pubsub_topic.payment_events.name
  
  ack_deadline_seconds = 60
  
  expiration_policy {
    ttl = "300000.5s" # ~3.5 days
  }
  
  retry_policy {
    minimum_backoff = "10s"
    maximum_backoff = "600s"
  }
}
```

#### Best Practices

- Use modules for reusable components
- Separate environments (dev, staging, prod)
- Lock state files
- Review plans before applying
- Use variables for configuration
- Document everything

> "Infrastructure as code is essential for reliability."

#### Lessons Learned

1. Start with modules early
2. Use remote state
3. Review plans carefully
4. Test in dev first
5. Keep state files secure

