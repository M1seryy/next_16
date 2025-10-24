# New Project

A modern Next.js project with the following stack:

- **Next.js 16** - Latest version with App Router
- **Supabase** - Database and authentication
- **Drizzle ORM** - Type-safe database queries
- **shadcn/ui** - Beautiful and accessible UI components
- **next-intl** - Internationalization
- **TanStack Query** - Data fetching and caching
- **React Hook Form** - Form handling
- **Better Auth** - Modern authentication
- **Tailwind CSS** - Styling

## Getting Started

1. Install dependencies:
```bash
yarn install
```

2. Copy environment variables:
```bash
cp env.example .env.local
```

3. Set up your database and environment variables in `.env.local`

4. Run database migrations:
```bash
yarn db:push
```

5. Start the development server:
```bash
yarn dev
```

## Project Structure

This project follows the Feature-Sliced Design (FSD) architecture:

```
src/
├── app/                    # App layer
│   ├── (app)/             # App routes
│   ├── modules/            # Business logic modules
│   ├── widgets/            # Self-sufficient UI blocks
│   ├── features/           # Reusable features
│   ├── entities/           # Business entities
│   └── shared/             # Shared code
├── components/             # UI components
├── lib/                    # Utilities and configurations
└── pkg/                    # External integrations
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn db:push` - Push database schema changes
- `yarn db:generate` - Generate database migrations
# next_16
