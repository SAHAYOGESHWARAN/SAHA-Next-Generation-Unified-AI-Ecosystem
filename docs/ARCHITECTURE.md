# SAHA NEXUS AI - Architecture Documentation

## System Overview

SAHA NEXUS AI is a full-stack, enterprise-grade AI and technology ecosystem platform. It provides a unified interface for discovering, managing, and integrating AI tools, models, and development utilities.

```
┌─────────────────────────────────────────────────────────────────┐
│                     Frontend (Next.js React)                    │
│         Premium Dark UI with Cyber Aesthetics & Animations      │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                    ┌───────────┴────────────┐
                    │                        │
            ┌───────▼────────┐      ┌──────▼─────────┐
            │  REST API Call │      │ WebSocket/SSE  │
            └────────────────┘      └────────────────┘
                    │                        │
└─────────────────────────────────────────────────────────────────┐
│                   Backend API (NestJS)                          │
│    Controllers → Services → Repositories → Database             │
│                                                                 │
│  ┌──────────────┐ ┌────────────┐ ┌───────────────┐            │
│  │  Auth Module │ │Users Module│ │Categories    │            │
│  └──────────────┘ └────────────┘ └───────────────┘            │
│                                                                 │
│  ┌──────────────┐ ┌────────────┐ ┌───────────────┐            │
│  │ Tools Module │ │Models      │ │Projects       │            │
│  └──────────────┘ └────────────┘ └───────────────┘            │
│                                                                 │
│  ┌──────────────┐ ┌────────────┐ ┌───────────────┐            │
│  │ Search Mod.  │ │Integrations│ │Admin Module   │            │
│  └──────────────┘ └────────────┘ └───────────────┘            │
│                                                                 │
│  ┌────────────────────────────────────────────────────┐        │
│  │        AI Provider Integration Layer               │        │
│  │  OpenRouter │ Hugging Face │ Ollama │ Local ...  │        │
│  └────────────────────────────────────────────────────┘        │
│                                                                 │
│  ┌────────────────────────────────────────────────────┐        │
│  │        Background Jobs & Real-time Updates         │        │
│  └────────────────────────────────────────────────────┘        │
└─────────────┬──────────────────────┬──────────────┬─────────────┘
              │                      │              │
      ┌───────▼─┐          ┌────────▼────┐  ┌──────▼──────┐
      │PostgreSQL│          │   Redis     │  │File Storage│
      │Database  │          │Cache & Jobs │  │   (S3/etc)  │
      └──────────┘          └─────────────┘  └─────────────┘
```

## Technology Layers

### 1. Frontend Layer (Next.js)

**Responsibilities:**
- User interface and experience
- Client-side routing and navigation
- Form handling and validation
- API communication via Axios
- State management (optional Zustand)
- Real-time notifications (React Hot Toast)

**Key Components:**
- Landing page with hero section
- Authentication pages (login/signup)
- Dashboard with personalized content
- Tool & model explorer with filtering
- AI workspace for interactions
- Settings and profile management
- Admin dashboard

**Styling:**
- Tailwind CSS with custom theme
- Framer Motion for animations
- Premium dark theme with cyber aesthetics
- Fully responsive design

### 2. Backend API Layer (NestJS)

**Responsibilities:**
- Request handling and routing
- Business logic execution
- Database operations
- Authentication & authorization
- Data validation and transformation
- Error handling
- Logging and monitoring

**Architecture Pattern:** Modular MVC
- Controllers: Handle HTTP requests
- Services: Implement business logic
- Repositories: Handle data access
- Guards: Implement authorization
- Interceptors: Handle cross-cutting concerns

### 3. Database Layer (PostgreSQL)

**Responsibilities:**
- Data persistence
- Relationship management
- Transaction support
- Data integrity

**Key Tables:**
- Users (authentication & profiles)
- Categories (18 technology categories)
- Tools (AI tools catalog)
- AI Models (model registry)
- Projects (user projects)
- API Credentials (secure credential storage)
- Favorites (bookmarking system)
- Conversations (chat history)

### 4. Cache & Job Queue (Redis)

**Responsibilities:**
- Session caching
- API response caching
- Background job queue
- Real-time updates
- Rate limiting

## Module Structure

### Auth Module
```
auth/
├── auth.controller.ts       # Handles /auth endpoints
├── auth.service.ts          # Business logic
├── dtos/
│   ├── register.dto.ts      # Registration data
│   └── login.dto.ts         # Login data
├── guards/
│   └── jwt-auth.guard.ts    # JWT validation
├── strategies/
│   └── jwt.strategy.ts      # Passport JWT strategy
└── auth.module.ts           # Module definition
```

### Users Module
```
users/
├── users.controller.ts      # Handles /users endpoints
├── users.service.ts         # User operations
├── dtos/
│   └── update-profile.dto.ts
└── users.module.ts
```

### Categories Module
```
categories/
├── categories.controller.ts  # Handles /categories endpoints
├── categories.service.ts     # Category operations
└── categories.module.ts
```

### Tools Module
```
tools/
├── tools.controller.ts       # Handles /tools endpoints
├── tools.service.ts          # Tool operations
├── dtos/
│   ├── create-tool.dto.ts
│   └── update-tool.dto.ts
└── tools.module.ts
```

### Additional Modules
- **Models**: AI model management
- **Projects**: User project management
- **Search**: Semantic search functionality
- **Integrations**: API credential management
- **Admin**: Platform administration

## Authentication Flow

```
1. User submits credentials
   ↓
2. Backend validates credentials
   ↓
3. Backend generates JWT tokens
   - accessToken (24 hours)
   - refreshToken (7 days)
   ↓
4. Tokens sent to frontend
   ↓
5. Frontend stores in localStorage
   ↓
6. Frontend includes accessToken in API requests
   ↓
7. Backend validates token and processes request
   ↓
8. On expiration, frontend uses refreshToken to get new accessToken
```

## Data Flow

### Creating a Project

```
Frontend Form
   ↓
Client-side validation
   ↓
POST /api/projects
   ↓
Backend Controller validates request
   ↓
Service executes business logic
   ↓
Repository saves to database
   ↓
Redis cache updated
   ↓
Response sent to frontend
   ↓
Frontend displays success message
```

### Searching Tools

```
Frontend search input
   ↓
Debounced API call
   ↓
GET /api/tools/search?q=term
   ↓
Backend semantic search
   ↓
Check Redis cache first
   ↓
Query database if not cached
   ↓
Return results (cached for 5 minutes)
   ↓
Frontend displays filtered results
```

## Security Architecture

### Password Security
- Passwords hashed with bcrypt (10 rounds)
- Never stored in plain text
- Validated on each login

### API Key Security
- API credentials encrypted with AES-256
- Stored in database as encrypted text
- Decrypted only when needed
- Never exposed in API responses
- Masked display (****...)

### Token Security
- JWT tokens with expiration
- Refresh token rotation
- HttpOnly cookies (can be added)
- CORS configuration
- Input validation on all endpoints

### Database Security
- SQL injection prevention via TypeORM
- Parameterized queries
- Role-based access control
- Audit logging for sensitive operations

## Scalability Considerations

### Caching Strategy
- Redis for frequently accessed data
- Cache invalidation on updates
- TTL-based expiration

### Database Optimization
- Indexes on frequently queried fields
- Connection pooling
- Query optimization
- Read replicas for scaling

### API Optimization
- Pagination for list endpoints
- Field projection to reduce payload
- Compression enabled
- Rate limiting on expensive operations

### Background Processing
- Long-running tasks in job queue
- Image/video processing async
- Email notifications queued
- Report generation deferred

## Integration Points

### AI Providers
- OpenRouter API
- Hugging Face API
- Ollama (local inference)
- OpenAI (future)
- Anthropic (future)
- Google (future)

### External Services
- Email delivery (SendGrid/AWS SES)
- File storage (AWS S3/MinIO)
- Analytics (Datadog/Mixpanel)
- Error tracking (Sentry)

## Error Handling

### Client-side
- Toast notifications for feedback
- Retry logic for transient failures
- Loading states for async operations
- Fallback UI for errors

### Server-side
- Global exception filters
- Structured error responses
- Logging for debugging
- Graceful degradation

## Monitoring & Logging

### Logged Events
- Authentication attempts
- Database operations (in dev)
- API errors
- Performance metrics
- User actions (privacy-compliant)

### Alerts
- Database connection failures
- Redis connection failures
- High error rates
- Performance degradation

## Deployment Architecture

### Development
```
Docker Compose
├── Backend (NestJS)
├── Frontend (Next.js dev)
├── PostgreSQL
└── Redis
```

### Production
```
Cloud Infrastructure (AWS/GCP/Azure)
├── Frontend (CDN + Edge)
├── Backend (Load Balanced)
├── Database (Managed PostgreSQL)
├── Cache (Managed Redis)
└── File Storage (S3/Blob)
```

## Future Enhancements

### Phase 2+
- WebSocket support for real-time features
- GraphQL API option
- Microservices architecture
- API rate limiting
- Advanced search with Elasticsearch
- Full-text search
- AI agent execution engine
- Workflow automation

## Development Guidelines

1. **Code Organization**
   - Keep modules independent
   - Follow single responsibility principle
   - Use dependency injection

2. **Testing**
   - Unit tests for services
   - Integration tests for API
   - E2E tests for critical flows

3. **Documentation**
   - Comment complex logic
   - Keep README updated
   - Document API changes

4. **Performance**
   - Measure before optimizing
   - Use profiling tools
   - Monitor resource usage

5. **Security**
   - Regular security audits
   - Keep dependencies updated
   - Follow OWASP guidelines

## Conclusion

SAHA NEXUS AI is built with scalability, security, and user experience as core principles. The modular architecture allows for easy expansion with new features and integration points, while the multi-layer design ensures separation of concerns and maintainability.
