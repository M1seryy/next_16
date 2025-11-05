import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/pkg/integrations/supabase/schemas/*',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})