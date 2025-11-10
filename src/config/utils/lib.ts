'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/pkg/integrations/better-auth/auth.config'

export async function requireSession() {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if (!session) {
        redirect('/signin')
    }

    return session
}
