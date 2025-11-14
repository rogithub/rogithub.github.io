# Rodrigo Jiménez
## Senior Software Engineer | Platform Engineer

[LinkedIn](https://www.linkedin.com/in/romx) | [Stack Overflow](https://stackoverflow.com/users/146560/ro) | [GitHub](https://github.com/rogithub) | [Email](mailto:correo.rodrigo@gmail.com)

---

## Professional Summary

Senior Full-Stack Engineer with **10+ years** of experience specializing in the .NET ecosystem and building scalable, cloud-native applications. Proven expertise in migrating legacy systems to modern microservices architectures and optimizing database performance for high-traffic environments.

**Additional expertise** in platform engineering and infrastructure: Designed and maintain production Kubernetes clusters with full GitOps workflows, observability stacks, and disaster recovery strategies. Experienced in building custom tooling and managing containerized workloads at scale.

Passionate about clean code, design patterns, infrastructure as code, and delivering robust software solutions from application layer to infrastructure.

---

## Technical Skills

| Category | Technologies |
|---|---|
| **Languages** | C#, JavaScript, TypeScript, SQL, PHP, YAML |
| **Frameworks** | .NET (Framework, Core, MVC), Node.js, ASP.NET Core |
| **Cloud & DevOps** | AWS Lambda, Kubernetes (K3s), Docker, Podman, ArgoCD, GitOps |
| **Infrastructure** | Longhorn, MinIO, Prometheus, Grafana, Loki, Velero, Cloudflare |
| **Databases** | PostgreSQL, Oracle, Microsoft SQL Server |
| **Frontend** | Angular, Knockout.js, Razor Pages, jQuery, HTML5, CSS3, WPF |
| **Practices** | OOP, Functional Programming, Design Patterns, TDD, IaC, SRE |

---

## Professional Experience

### UL
**Lead Software Engineer** | *Sept 2025 - Present*

- Coordinate team to maintain and improve a Retailer Product Suite system

- **Technologies:** azure, devops, dotnet, sql server 


---

### Brierley Customer Loyalty Solutions & Consulting
**Senior Software Developer** | *Jan 2021 - Sept 2025*

- Engineered and maintained a promotions and rewards engine for major retail clients, processing millions of transactions and ensuring high availability.
- Developed and deployed serverless AWS Lambda functions using Node.js to automate customer communications (SMS/Email), significantly reducing manual overhead.
- Authored complex Oracle SQL queries and stored procedures to analyze transactional data, directly supporting the accurate execution of loyalty campaigns.
- **Technologies:** .NET, Node.js, AWS Lambda, Oracle

---

### UL Project
**Software Developer** | *Sep 2015 - Dec 2020*

- Led the development of a critical data entry and management application for the chemical industry, enabling the secure sharing of regulatory information.
- Architected the front-end using Knockout.js and TypeScript, creating a responsive and intuitive user interface for complex data manipulation.
- Implemented robust XML/XSLT transformations to ensure seamless data interchange between disparate systems.
- **Technologies:** .NET MVC, TypeScript, Knockout.js, XML/XSLT, Oracle, SQL

---

### The Wercs Ltd. - WERCSmart
**Software Developer** | *May 2010 - Sep 2015*

- Developed and scaled a compliance software suite for the chemical industry, used by global clients to manage regulatory data.
- Built and consumed RESTful web services to integrate with third-party systems, enhancing data flow and interoperability.
- Played a key role in the internationalization of the main software product, contributing to its successful deployment in over 50 languages.
- **Technologies:** .NET, JavaScript, Knockout.js, jQuery, MS SQL, Oracle

---

### Quantuvis Consulting
**Software Developer** | *Jun 2009 – May 2010*

- Successfully executed a full migration of the company's flagship platform from a legacy Java system to a modern .NET MVC 1.0 architecture.
- Developed a cross-browser compatible web application with advanced data visualization features, enabling clients to perform competitive analysis.
- **Technologies:** .NET MVC, Java, jQuery, SQL

---

### GMO LLC - Investment and Assets Management
**Software Developer** | *Jul 2008 – Jun 2009*

- Built high-performance UI components for a WPF desktop application used in real-time investment management.
- Designed and implemented a multithreaded architecture to handle real-time data streams from WCF services, ensuring high accuracy for critical financial transactions.
- **Technologies:** .NET, WCF, WPF, SQL

---

## Infrastructure & Platform Engineering Experience

### Self-Managed Production Infrastructure
**Platform Engineer / Infrastructure Architect** | *2019 - Present*

Designed, built, and maintain a production-grade Kubernetes infrastructure supporting real business operations, demonstrating hands-on expertise in platform engineering, GitOps, and site reliability practices.

#### Key Achievements:

**Platform Architecture & Orchestration**
- Architected and deployed a 3-node Kubernetes (K3s) cluster on ARM64 hardware, managing **17 concurrent production applications** with high availability
- Implemented full GitOps workflow using **ArgoCD with App of Apps pattern**, enabling declarative infrastructure management and automated deployments
- Designed multi-tenant architecture with proper namespace isolation, RBAC, and resource quotas

**Custom Application Development**
- Built **PDFeitor**, a containerized web application in C#/.NET Core for automated PDF layout generation, processing bulk image uploads
- Developed production **point-of-sale (POS) system** using .NET Core, Razor Pages, and Knockout.js, serving real retail operations
- Created custom tooling for business-specific workflows, demonstrating full-stack + infrastructure capabilities

**Observability & Monitoring**
- Implemented complete observability stack with **Prometheus, Grafana, and Loki** for metrics, visualization, and log aggregation
- Configured **Promtail DaemonSets** for centralized logging across all nodes and applications
- Built custom dashboards for application performance monitoring, resource utilization, and business metrics using **Apache Superset**

**Storage & Data Management**
- Deployed **Longhorn** for distributed block storage with automated replication across cluster nodes
- Configured **MinIO** object storage for handling application assets (product images, documents)
- Managed **PostgreSQL** with automated backup strategies and high-availability configurations

**Disaster Recovery & Business Continuity**
- Implemented **Velero** for full cluster backups with automated scheduling to S3-compatible storage (Cloudflare R2)
- Configured additional database-specific backup CronJobs for critical data protection
- Successfully executed disaster recovery procedures in production environment (database restoration from backup)

**Security & Secrets Management**
- Implemented **Sealed Secrets** for secure storage of sensitive data in Git repositories
- Configured proper RBAC policies and network segmentation between applications
- Managed secrets for multiple services including database credentials, API tokens, and registry authentication

**Networking & Ingress**
- Configured **Cloudflare Tunnel** for secure external access to internal services without exposing infrastructure
- Implemented service mesh patterns for inter-application communication
- Managed DNS, TLS certificates, and ingress routing for multiple applications

**CI/CD Pipeline**
- Built automated CI/CD pipeline: **GitHub → GitHub Actions → Container Registry → ArgoCD → Kubernetes**
- Configured multi-architecture container builds (ARM64) with automated versioning (semantic tags + latest)
- Implemented GitOps-driven deployments with automatic sync and self-healing

**Infrastructure as Code**
- Maintained entire infrastructure as declarative YAML manifests in Git (100+ manifest files)
- Organized infrastructure in modular structure with clear separation of concerns
- Practiced proper version control, code review, and rollback procedures

**Key Technologies:**
- **Container Orchestration:** Kubernetes (K3s), Docker, Podman
- **GitOps:** ArgoCD (App of Apps pattern)
- **Observability:** Prometheus, Grafana, Loki, Promtail, Superset
- **Storage:** Longhorn, MinIO, PostgreSQL
- **Backup/DR:** Velero, Cloudflare R2, automated CronJobs
- **Security:** Sealed Secrets, RBAC, network policies
- **Networking:** Cloudflare Tunnel, Ingress controllers
- **CI/CD:** GitHub Actions, container registries
- **Hardware:** ARM64 (Raspberry Pi 5 + Raspberry Pi 4), physical cluster management

#### Demonstrated Skills:
- Platform design and architecture from scratch
- Production Kubernetes cluster management
- GitOps best practices and implementation
- Disaster recovery planning and execution
- Full observability stack implementation
- Multi-application orchestration at scale
- Infrastructure as Code (IaC)
- Site Reliability Engineering (SRE) practices
- Cost-effective infrastructure optimization
- Bridge between development and operations (DevOps)

---

## Education

**Universidad de Guadalajara**, Jalisco, Mexico  
Bachelor's Degree in Telecommunications Engineering | *2008*

---

## Additional Information

- **Languages:** Spanish (Native), English (Professional Working Proficiency)
- **Open Source:** Active contributor and maintainer of personal infrastructure projects
- **Continuous Learning:** 6+ years of hands-on experience with cloud-native technologies and platform engineering
- **Availability:** Open to remote opportunities in Platform Engineering, DevOps, or SRE roles