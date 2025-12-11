# Manu Singh - AI Engineer Portfolio

## Overview

This is a personal portfolio website for Manu Singh, a Generative AI Engineer and Full-Stack Developer. The site showcases skills in RAG systems, LangChain, Vector Databases, and full-stack AI development. Built as a modern, single-page application with a dark theme and AI-centric visual aesthetics including glassmorphism effects and animated gradients.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming (dark mode default)
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Structure**: RESTful endpoints under `/api` prefix
- **Current Endpoints**: Contact form submission (`POST /api/contact`)

### Project Structure
```
client/           # Frontend React application
  src/
    components/   # React components (sections, UI primitives)
    pages/        # Page components (Portfolio, NotFound)
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Backend Express server
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # In-memory storage (placeholder)
shared/           # Shared code between client/server
  schema.ts       # Zod schemas for validation
```

### Design System
- **Theme**: Dark mode with purple primary and cyan accent colors
- **Typography**: Inter for body text, JetBrains Mono/Fira Code for technical elements
- **Layout**: Responsive grid system with max-w-7xl containers
- **Effects**: Glassmorphism, gradient animations, 3D hover transforms

### Data Flow
- Form submissions use the `apiRequest` utility to POST to Express backend
- React Query manages caching and server state
- Zod schemas validate data on both client and server

## External Dependencies

### Database
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Current State**: Schema defined but storage uses in-memory implementation
- **Migration Tool**: drizzle-kit for schema management

### UI Component Libraries
- **Radix UI**: Complete set of accessible primitives (dialogs, menus, forms)
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel functionality
- **React Day Picker**: Calendar component
- **Vaul**: Drawer component

### Build & Development
- **Vite**: Development server and build tool
- **esbuild**: Production bundling for server
- **PostCSS/Autoprefixer**: CSS processing

### Fonts (CDN)
- Google Fonts: DM Sans, Fira Code, Geist Mono, Architects Daughter