# SAHA NEXUS AI - Backend API

Scalable, production-ready backend for the SAHA NEXUS AI platform. Built with NestJS, Node.js, TypeScript, PostgreSQL, and Redis.

## Technology Stack

- **Framework**: NestJS 10
- **Runtime**: Node.js 20
- **Language**: TypeScript
- **Database**: PostgreSQL 16
- **Cache/Queue**: Redis 7
- **ORM**: TypeORM
- **Authentication**: JWT + Passport
- **API Documentation**: Swagger/OpenAPI

## Project Structure

```
src/
├── main.ts                     # Application entry point
├── app.module.ts              # Root module
├── entities/                  # Database entities
│   ├── user.entity.ts
│   ├── category.entity.ts
│   ├── tool.entity.ts
│   ├── ai-model.entity.ts
│   ├── project.entity.ts
│   ├── api-credential.entity.ts
│   └── favorite.entity.ts
├── modules/                   # Feature modules
│   ├── auth/                 # Authentication
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── auth.controller.ts
│   │   ├── dtos/
│   │   ├── guards/
│   │   └── strategies/
│   ├── users/               # User management
│   ├── categories/          # Technology categories
│   ├── tools/              # AI tools
│   ├── models/             # AI models
│   ├── projects/           # User projects
│   ├── search/             # Semantic search
│   ├── integrations/       # Provider integrations
│   └── admin/              # Administration
└── database/
    ├── database.config.ts   # TypeORM configuration
    └── migrations/          # Database migrations
```

## Features

- 🔐 Secure JWT authentication with refresh tokens
- 👥 Role-based access control (Guest, User, Admin)
- 📦 Modular architecture
- 💾 PostgreSQL with TypeORM
- ⚡ Redis for caching and job queues
- 📚 Swagger API documentation
- 🛡️ Input validation and error handling
- 🔒 Encrypted API credentials storage
- 📊 Usage analytics and audit logging

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn
- PostgreSQL 16+
- Redis 7+

### Installation

```bash
cd backend
npm install
```

### Environment Setup

Create a `.env` file based on `.env.example`:

```env
# Server
NODE_ENV=development
PORT=3001
API_PREFIX=api

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=nexus_user
DB_PASSWORD=nexus_secure_password
DB_NAME=saha_nexus_db

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRATION=24h
JWT_REFRESH_SECRET=your-refresh-secret
JWT_REFRESH_EXPIRATION=7d

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

### Database Setup

#### Using Docker Compose (Recommended)

```bash
cd docker
docker-compose up -d
```

This starts PostgreSQL and Redis automatically.

#### Manual Setup

```bash
# Create database
createdb saha_nexus_db

# Run migrations
npm run db:migrate

# Seed initial data (optional)
npm run db:seed
```

### Development

```bash
npm run dev
```

The API will be available at `http://localhost:3001`
Swagger documentation at `http://localhost:3001/api/docs`

### Build

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:cov` - Run tests with coverage
- `npm run db:migrate` - Run database migrations
- `npm run db:generate` - Generate new migration

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login with credentials
- `GET /api/auth/me` - Get current user (requires JWT)

### Categories

- `GET /api/categories` - Get all categories
- `GET /api/categories/:slug` - Get category by slug

### Users

- `GET /api/users/:id` - Get user profile

### Documentation

Full API documentation available at `/api/docs` when running the server.

## Database Schema

### Users Table
- id (UUID, primary key)
- username (string, unique)
- email (string, unique)
- password (hashed)
- firstName, lastName (optional)
- role (enum: guest, user, admin)
- emailVerified (boolean)
- twoFactorEnabled (boolean)
- isActive (boolean)
- createdAt, updatedAt, lastLoginAt (timestamps)

### Categories Table
- id (UUID, primary key)
- name (string)
- slug (string, unique)
- description (text)
- icon (optional)
- color (optional)
- toolCount, modelCount (integers)
- isActive (boolean)
- order (integer for sorting)

### Tools Table
- id (UUID, primary key)
- name, slug (string, unique)
- description (text)
- categoryId (foreign key)
- logo, website, documentation, githubRepository (URLs)
- tags, features, pricing (arrays)
- rating, ratingCount, usageCount (metrics)
- status (enum)
- isFeatured (boolean)

### AI Models Table
- id (UUID, primary key)
- name, slug (string, unique)
- description (text)
- type (enum: llm, image, video, audio, embedding, vision)
- provider (enum: openai, anthropic, google, mistral, huggingface, ollama, etc.)
- modelId (string - e.g., "gpt-4")
- capabilities, languages (arrays)
- isOpen, isLocalDeployable (boolean)
- rating, ratingCount, usageCount (metrics)
- categoryId (foreign key)

### Projects Table
- id (UUID, primary key)
- name, slug (string)
- description (text)
- userId (foreign key)
- status (enum: active, archived, deleted)
- privacy (enum: public, private, shared)
- metadata (jsonb)
- viewCount, collaboratorCount (integers)

### API Credentials Table
- id (UUID, primary key)
- name (string)
- provider (enum: openrouter, huggingface, ollama, etc.)
- userId (foreign key)
- encryptedKey (encrypted)
- baseUrl (optional - for custom endpoints)
- isActive, isVerified (boolean)
- metadata (jsonb)

### Favorites Table
- id (UUID, primary key)
- userId (foreign key)
- type (enum: tool, model)
- resourceId (UUID)
- createdAt (timestamp)

## Authentication & Authorization

### JWT Flow

1. User registers or logs in
2. Server returns `accessToken` and `refreshToken`
3. Client stores tokens in localStorage
4. Client includes `Authorization: Bearer <token>` in API requests
5. Server validates token and processes request
6. On token expiration, client uses `refreshToken` to get new `accessToken`

### Roles

- **Guest**: No authentication, limited access to public resources
- **User**: Authenticated user, can create projects and favorites
- **Admin**: Full platform access, can manage content and users

## Security

- Passwords are hashed with bcrypt (10 rounds)
- API keys are encrypted before storage
- CORS enabled for frontend origin
- Input validation on all endpoints
- SQL injection protection via TypeORM
- HTTPS recommended in production
- Rate limiting can be added via middleware
- Two-factor authentication support (phase 2)

## Configuration

### Environment Variables

See `.env.example` for all available configuration options.

### Database Configuration

Located in `src/database/database.config.ts`. Customize TypeORM settings as needed.

### Redis Configuration

Connection details in `app.module.ts`. Used for:
- Session caching
- Background job queue
- Rate limiting
- Real-time features

## Deployment

### Docker

```bash
# Build image
docker build -t saha-nexus-backend .

# Run container
docker run -p 3001:3001 \
  -e DB_HOST=postgres \
  -e REDIS_HOST=redis \
  saha-nexus-backend
```

### Docker Compose

```bash
cd docker
docker-compose up -d
```

### Production Checklist

- [ ] Set strong JWT_SECRET and JWT_REFRESH_SECRET
- [ ] Enable HTTPS
- [ ] Configure proper CORS origin
- [ ] Set NODE_ENV=production
- [ ] Configure email for notifications
- [ ] Set up monitoring and logging
- [ ] Configure backups for PostgreSQL
- [ ] Enable rate limiting
- [ ] Set up health checks
- [ ] Configure logging service

## Monitoring & Logging

Logs are written to console in development and can be configured to external services in production. Consider integrating:
- Winston for structured logging
- Sentry for error tracking
- Datadog or similar for monitoring

## Development Guidelines

- Follow NestJS best practices
- Keep modules focused and single-responsibility
- Use DTOs for validation
- Implement proper error handling
- Write unit tests for services
- Document complex logic
- Use meaningful commit messages

## Common Issues

### Database Connection Error
- Ensure PostgreSQL is running
- Verify DB_HOST, DB_PORT, and credentials
- Check if database exists

### Redis Connection Error
- Ensure Redis is running on REDIS_HOST:REDIS_PORT
- Check Redis configuration

### Port Already in Use
- Change PORT environment variable
- Or kill process using the port

## License

Open Source

## Support

For issues or questions, please open an issue in the main repository.
