import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from '@/pkg/integrations/supabase';
import { users, sessions, accounts } from '@/pkg/integrations/supabase/schemas';

export const auth = betterAuth({
    secrets: [process.env.AUTH_SECRET!],
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
    },
    storage: {
        sessions: new Map<string, any>(),
        async getSession(id: string) {
            return this.sessions.get(id);
        },
        async setSession(id: string, session: any) {
            this.sessions.set(id, session);
        },
        async deleteSession(id: string) {
            this.sessions.delete(id);
        },
    },
});

console.log('🔐 Better Auth configured with Map storage');

