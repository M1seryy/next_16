import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'

// env server (server-only secrets)
export const envServer = createEnv({
    server: {
        DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
        GOOGLE_CLIENT_ID: z.string().optional(),
        GOOGLE_CLIENT_SECRET: z.string().optional(),
    },
    runtimeEnv: {
        DATABASE_URL: process.env.DATABASE_URL,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    },
})

