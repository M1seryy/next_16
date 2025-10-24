import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'

import { db } from '@/pkg/integrations/supabase'
import { accounts, sessions, users, verification } from '@/pkg/integrations/supabase/schemas'

export const auth = betterAuth({
    secrets: [process.env.AUTH_SECRET!],
    database: drizzleAdapter(db, {
        provider: 'pg',
        schema: {
            user: users,
            session: sessions,
            account: accounts,
            verification,
        },
    }),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7,
        updateAge: 60 * 60 * 24,
    },
    trustedOrigins: [
        'http://localhost:3000',
        process.env.NEXT_PUBLIC_APP_URL || 'https://your-app.vercel.app'
    ],
})
