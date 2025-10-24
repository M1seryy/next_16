# Next.js 16 Project

A modern Next.js application with:
- Next.js 16 with Turbopack
- Supabase integration
- Shadcn/ui components
- Better Auth authentication
- Feature-Sliced Design architecture
- TypeScript
- Tailwind CSS

## Features

- 🔐 Google OAuth authentication
- 🎨 Modern UI with Shadcn components
- 📱 Responsive design
- 🌍 Internationalization support
- 🗄️ Database integration with Drizzle ORM
- 🏗️ Feature-Sliced Design architecture

## Getting Started

### Prerequisites

- Node.js 22.x
- Yarn package manager
- Supabase account
- Google OAuth credentials

### Installation

1. Clone the repository:
```bash
git clone https://github.com/M1seryy/next_16.git
cd next_16
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
DATABASE_URL=your_supabase_database_url
AUTH_SECRET=your_auth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

5. Run database migrations:
```bash
yarn db:push
```

6. Start the development server:
```bash
yarn dev
```

## Deployment

This project is configured for GitHub Pages deployment. The GitHub Actions workflow will automatically build and deploy the static site when you push to the main branch.

### Manual Deployment

To build the static export manually:

```bash
yarn build
```

The static files will be generated in the `out` directory.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (app)/             # Route groups
│   ├── modules/           # Business logic modules
│   ├── widgets/           # Self-sufficient UI blocks
│   ├── features/          # Reusable features
│   ├── entities/          # Business entities
│   └── shared/            # Shared utilities and components
├── pkg/                   # External integrations
└── public/                # Static assets
```

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **ORM**: Drizzle
- **Authentication**: Better Auth
- **State Management**: TanStack Query
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit with conventional commits
5. Push to your fork
6. Create a Pull Request

## License

MIT License