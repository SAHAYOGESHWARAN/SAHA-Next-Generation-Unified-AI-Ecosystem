# SAHA NEXUS AI - Complete Setup Guide

## Quick Start (5 minutes)

### Option 1: Docker Compose (Recommended)

```bash
# Clone/navigate to project root
cd "e:\SAHA – Next-Generation Unified AI Ecosystem"

# Install backend dependencies
cd backend
npm install
cd ..

# Install frontend dependencies
cd frontend
npm install
cd ..

# Start all services
cd docker
docker-compose up -d

# Frontend is available at http://localhost:3000
# Backend is available at http://localhost:3001
# API docs at http://localhost:3001/api/docs
```

### Option 2: Manual Setup

#### Prerequisites
- Node.js 20+
- PostgreSQL 16
- Redis 7
- npm/yarn

#### Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Configure database (edit .env with your PostgreSQL credentials)
# DB_HOST=localhost
# DB_PORT=5432
# DB_USERNAME=your_username
# DB_PASSWORD=your_password
# DB_NAME=saha_nexus_db

# Create database
createdb saha_nexus_db

# Start development server
npm run dev
```

The backend will run on http://localhost:3001

#### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Start development server
npm run dev
```

The frontend will run on http://localhost:3000

## Project Structure Overview

```
SAHA NEXUS AI/
├── frontend/              # Next.js React application
│   ├── src/
│   │   ├── app/          # Pages and layouts
│   │   ├── components/   # Reusable components
│   │   └── styles/       # Global styles
│   ├── public/           # Static assets
│   └── package.json
├── backend/              # NestJS API server
│   ├── src/
│   │   ├── entities/     # Database models
│   │   ├── modules/      # Feature modules
│   │   └── main.ts       # Entry point
│   └── package.json
├── database/             # Database schemas and migrations
├── docker/               # Docker configuration
│   ├── docker-compose.yml
│   └── init-scripts/
├── docs/                 # Documentation
└── README.md
```

## Environment Configuration

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_AI_WORKSPACE=true
```

### Backend (.env)

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
JWT_SECRET=dev-secret-key-change-in-production
JWT_EXPIRATION=24h
JWT_REFRESH_SECRET=dev-refresh-secret-change-in-production
JWT_REFRESH_EXPIRATION=7d

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

## Database Setup

### Create Tables

The backend uses TypeORM with automatic schema synchronization in development mode. To manually create tables:

```bash
# Run migrations
cd backend
npm run db:migrate

# Generate new migration after entity changes
npm run db:generate -- -n MigrationName
```

### Initial Data

Seed the database with categories:

```sql
-- Insert 18 categories
INSERT INTO categories (id, name, slug, description, color, "order", "isActive", "createdAt", "updatedAt")
VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'AI Image & Design', 'ai-image-design', 'Image generation, editing, and design tools', '#00d4ff', 1, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440002', 'AI Video Generation', 'ai-video-generation', 'Text-to-video and video editing', '#a855f7', 2, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440003', 'AI Agents', 'ai-agents', 'Autonomous agents and multi-agent systems', '#ec4899', 3, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440004', 'LLM Tools', 'llm-tools', 'Large language models and chat interfaces', '#00d4ff', 4, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440005', 'Developer Tools', 'developer-tools', 'AI coding assistants and development utilities', '#a855f7', 5, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440006', 'Web & Frontend', 'web-frontend', 'Website builders and UI frameworks', '#ec4899', 6, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440007', 'Self-Hosted Systems', 'self-hosted-systems', 'Local deployment and self-hosted solutions', '#00d4ff', 7, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440008', 'Data Engineering', 'data-engineering', 'Data pipelines and ETL workflows', '#a855f7', 8, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440009', 'Databases', 'databases', 'SQL, NoSQL, and vector databases', '#ec4899', 9, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440010', 'Cybersecurity', 'cybersecurity', 'Security analysis and protection tools', '#00d4ff', 10, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440011', 'DevOps & Infrastructure', 'devops-infrastructure', 'CI/CD and cloud deployment', '#a855f7', 11, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440012', 'Web Scraping', 'web-scraping', 'Data extraction and crawling tools', '#ec4899', 12, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440013', 'Productivity & Knowledge', 'productivity-knowledge', 'Note-taking and knowledge management', '#00d4ff', 13, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440014', 'Learning & Interview', 'learning-interview', 'Courses and coding challenges', '#a855f7', 14, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440015', 'Local & Private AI', 'local-private-ai', 'Local LLM execution and offline inference', '#ec4899', 15, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440016', 'AI Research & Papers', 'ai-research-papers', 'Research papers and benchmarks', '#00d4ff', 16, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440017', 'Computer Vision', 'computer-vision', 'Object detection and image recognition', '#a855f7', 17, true, NOW(), NOW()),
  ('550e8400-e29b-41d4-a716-446655440018', 'Open-Source AI Models', 'open-source-ai-models', 'Global AI models and repositories', '#ec4899', 18, true, NOW(), NOW());
```

## Testing the Setup

### Test Authentication

1. **Register**
   ```bash
   curl -X POST http://localhost:3001/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
       "username": "testuser",
       "email": "test@example.com",
       "password": "TestPassword123!",
       "firstName": "Test",
       "lastName": "User"
     }'
   ```

2. **Login**
   ```bash
   curl -X POST http://localhost:3001/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{
       "email": "test@example.com",
       "password": "TestPassword123!"
     }'
   ```

3. **Get Current User**
   ```bash
   curl -X GET http://localhost:3001/api/auth/me \
     -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
   ```

### Test Categories

```bash
curl -X GET http://localhost:3001/api/categories
```

### View API Documentation

Open http://localhost:3001/api/docs in your browser

## Common Issues & Solutions

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000
# Kill process
kill -9 <PID>

# Or change port
PORT=3002 npm run dev
```

### Database Connection Error

```bash
# Check PostgreSQL is running
psql -U postgres -c "SELECT 1"

# Create database manually
createdb saha_nexus_db

# Reset database
dropdb saha_nexus_db
createdb saha_nexus_db
```

### Redis Connection Error

```bash
# Check Redis is running
redis-cli ping

# Start Redis
redis-server
```

### Dependencies Installation Issues

```bash
# Clear cache
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

## Production Deployment

### Environment Setup

1. **Backend .env (Production)**
   ```env
   NODE_ENV=production
   PORT=3001
   JWT_SECRET=generate-strong-random-secret
   JWT_REFRESH_SECRET=generate-strong-random-secret
   DB_HOST=your-db-host
   REDIS_HOST=your-redis-host
   FRONTEND_URL=https://yourdomain.com
   ```

2. **Build & Deploy**
   ```bash
   # Backend
   cd backend
   npm run build
   npm start

   # Frontend
   cd frontend
   npm run build
   npm start
   ```

3. **Docker Deployment**
   ```bash
   # Build images
   docker build -t saha-backend ./backend
   docker build -t saha-frontend ./frontend

   # Push to registry
   docker tag saha-backend yourregistry/saha-backend:latest
   docker push yourregistry/saha-backend:latest
   ```

## Development Workflow

### Starting Development

```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd frontend
npm run dev

# Terminal 3: Database (if not using Docker)
redis-server
```

### Creating a New Feature

1. **Backend**
   - Create module in `src/modules/`
   - Define entity in `src/entities/`
   - Create service and controller
   - Add to `AppModule`

2. **Frontend**
   - Create page in `src/app/`
   - Create components in `src/components/`
   - Connect to API endpoints

### Database Migrations

```bash
# After modifying entities
npm run db:generate -- -n DescriptiveNameOfChange

# Apply migrations
npm run db:migrate
```

## Documentation

- **Backend API**: http://localhost:3001/api/docs
- **Frontend Architecture**: See `frontend/README.md`
- **Backend Architecture**: See `backend/README.md`

## Next Steps

1. ✅ Complete Phase 1 (Project Foundation)
2. ⏭️ Phase 2: Implement full database integration and core features
3. ⏭️ Phase 3: Build category pages and tool discovery
4. ⏭️ Phase 4: Implement AI workspace and integrations
5. ⏭️ Phase 5: Add AI provider adapters and advanced features

## Support

For issues or questions:
1. Check documentation in `/docs`
2. Review README files in `frontend/` and `backend/`
3. Open an issue in the repository
