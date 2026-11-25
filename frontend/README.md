# SAHA NEXUS AI - Frontend

Premium, modern frontend for the SAHA NEXUS AI platform. Built with Next.js 14, React, TypeScript, Tailwind CSS, and Framer Motion.

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **State Management**: Zustand (optional)
- **Notifications**: React Hot Toast
- **Icons**: Lucide React

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── auth/           # Authentication pages
│   │   ├── login/
│   │   └── signup/
│   ├── dashboard/      # Dashboard pages
│   ├── explore/        # Tool & model exploration
│   ├── workspace/      # AI workspace
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   └── DashboardNav.tsx
└── styles/            # Global styles
    └── globals.css

public/               # Static assets
```

## Features

- 🎨 Premium dark theme with cyber aesthetics
- 🚀 Responsive design (mobile, tablet, desktop)
- ⚡ Smooth animations and transitions
- 🔐 Secure JWT authentication
- 📱 Mobile-first approach
- ♿ Accessibility focused
- 🎯 Glassmorphism UI elements
- 🌊 Gradient accents and effects

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd frontend
npm install
```

### Environment Setup

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_AI_WORKSPACE=true
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Design System

### Colors

- **Primary Navy**: `#0f172a` (Navy-950)
- **Cyber Blue**: `#00d4ff`
- **Cyber Violet**: `#a855f7`
- **Cyber Pink**: `#ec4899`

### Components

All components follow the premium dark theme with:
- Glassmorphism effect
- Smooth transitions
- Accessible interactions
- Responsive layouts

## API Integration

The frontend communicates with the backend at `http://localhost:3001/api`. 

### Authentication

- Register: `POST /api/auth/register`
- Login: `POST /api/auth/login`
- Get Current User: `GET /api/auth/me` (requires JWT)

Tokens are stored in localStorage. JWT tokens are automatically included in API requests via axios interceptors.

## Page Routes

- `/` - Landing page
- `/auth/login` - Login page
- `/auth/signup` - Registration page
- `/dashboard` - Main dashboard
- `/explore` - Browse tools and models
- `/workspace` - AI workspace
- `/settings` - User settings

## Development Guidelines

- Use TypeScript for all components
- Follow React hooks best practices
- Use Tailwind CSS for styling
- Implement proper error handling with toast notifications
- Keep components modular and reusable
- Ensure accessibility compliance
- Test responsive behavior on multiple devices

## Deployment

### Docker

```bash
docker build -t saha-nexus-frontend .
docker run -p 3000:3000 saha-nexus-frontend
```

### Vercel

```bash
npm install -g vercel
vercel
```

## License

Open Source

## Support

For issues or questions, please open an issue in the main repository.
