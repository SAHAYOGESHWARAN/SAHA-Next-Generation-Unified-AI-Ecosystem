# SAHA NEXUS AI - Quick Start Guide

Get SAHA NEXUS AI running in minutes.

## 1. Install Dependencies (2 minutes)

```bash
# Navigate to project root
cd "SAHA – Next-Generation Unified AI Ecosystem"

# Backend
cd backend && npm install && cd ..

# Frontend
cd frontend && npm install && cd ..
```

## 2. Start Services (3 options)

### Option A: Docker Compose (Recommended)

```bash
cd docker
docker-compose up -d

# Wait for services to start
sleep 10

# Backend: http://localhost:3001
# Frontend: http://localhost:3000
# API Docs: http://localhost:3001/api/docs
```

**Stop services:**
```bash
docker-compose down
```

### Option B: Individual Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Backend runs on http://localhost:3001
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:3000
```

**Note:** Requires PostgreSQL and Redis running locally

### Option C: Production Build

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

## 3. Create Test Account (30 seconds)

Visit http://localhost:3000 and:

1. Click "Get Started" or go to `/auth/signup`
2. Fill in the registration form:
   - Username: `testuser`
   - Email: `test@example.com`
   - Password: `TestPassword123!`
   - First Name: `Test`
   - Last Name: `User`
3. Click "Create Account"
4. You'll be redirected to the dashboard

## 4. Explore the Platform

### Landing Page (http://localhost:3000)
- View platform features
- See 18 categories
- Learn about ecosystem

### Dashboard (http://localhost:3000/dashboard)
- Welcome message
- Statistics cards
- AI workspace
- Recent projects section
- Quick access links

### API Documentation (http://localhost:3001/api/docs)
- Interactive API explorer
- Try endpoints live
- View request/response schemas

## 5. Test API Endpoints

### Register User
```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "newuser",
    "email": "new@example.com",
    "password": "Password123!",
    "firstName": "New",
    "lastName": "User"
  }'
```

### Login
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "TestPassword123!"
  }'
```

### Get Categories
```bash
curl -X GET http://localhost:3001/api/categories
```

### Get Current User (requires token)
```bash
curl -X GET http://localhost:3001/api/auth/me \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

## 6. Project Structure

```
SAHA NEXUS AI/
├── frontend/              # React Next.js app
│   ├── src/app/          # Pages
│   ├── src/components/   # Components
│   └── src/styles/       # Styling
├── backend/              # NestJS API
│   ├── src/entities/     # Database models
│   ├── src/modules/      # Feature modules
│   └── src/main.ts       # Entry point
├── docker/               # Docker setup
├── docs/                 # Documentation
└── SETUP.md              # Detailed setup guide
```

## 7. Development Workflow

### Making Changes

**Frontend:**
- Edit files in `frontend/src/`
- Changes auto-reload (HMR)
- Build: `npm run build`

**Backend:**
- Edit files in `backend/src/`
- Changes auto-reload (`npm run dev`)
- Build: `npm run build`
- Lint: `npm run lint`

### Database Changes

```bash
cd backend

# After modifying entities:
npm run db:generate -- -n DescriptiveChange

# Apply migrations:
npm run db:migrate
```

## 8. Troubleshooting

### "Port 3000 already in use"
```bash
# Kill process using port
lsof -i :3000
kill -9 <PID>

# Or use different port
PORT=3002 npm run dev
```

### "Cannot connect to database"
```bash
# Check PostgreSQL is running
psql -U postgres -c "SELECT 1"

# Create database if missing
createdb saha_nexus_db
```

### "Cannot connect to Redis"
```bash
# Check Redis is running
redis-cli ping

# Start Redis
redis-server
```

### Dependencies installation fails
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 9. Useful Commands

```bash
# Backend
cd backend
npm run dev              # Start development server
npm run build            # Build for production
npm run lint             # Run linter
npm run test             # Run tests
npm run db:migrate       # Run migrations
npm run db:generate      # Generate migration

# Frontend
cd frontend
npm run dev              # Start development server
npm run build            # Build for production
npm run lint             # Run linter
npm run type-check       # Check TypeScript

# Docker
cd docker
docker-compose up -d     # Start services
docker-compose down      # Stop services
docker-compose logs -f   # View logs
docker-compose restart   # Restart services
```

## 10. Next Steps

1. ✅ **Phase 1 Complete** - Project foundation is ready
2. **Phase 2** - Build more backend features (tools, models, projects)
3. **Phase 3** - Create category pages and exploration
4. **Phase 4** - Implement AI workspace
5. **Phase 5** - Add AI provider integrations

## Need Help?

- 📖 See `SETUP.md` for detailed setup instructions
- 📚 See `docs/ARCHITECTURE.md` for system architecture
- 📋 See `backend/README.md` for backend documentation
- 📋 See `frontend/README.md` for frontend documentation
- 🔗 Check API docs at http://localhost:3001/api/docs

## Key Features Implemented

✅ Project structure and configuration
✅ Frontend with Next.js, React, TypeScript, Tailwind CSS
✅ Backend with NestJS, TypeORM, JWT authentication
✅ Database schema for 18 categories
✅ User authentication (register/login)
✅ Dashboard with personalized content
✅ API documentation with Swagger
✅ Docker Compose setup
✅ Premium dark UI with animations
✅ Modular architecture

## Ready to Build More?

The foundation is solid. Next steps:

1. **Populate database** with sample tools and models
2. **Build tool/model pages** with filtering and search
3. **Create AI workspace** for model interactions
4. **Add integrations** for AI providers
5. **Implement real features** for all 18 categories

Happy coding! 🚀
