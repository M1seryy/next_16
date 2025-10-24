import { NextRequest, NextResponse } from 'next/server'

import { auth } from '@/pkg/integrations/better-auth/auth.config'
import { db } from '@/pkg/integrations/supabase/drizzle'
import { users } from '@/pkg/integrations/supabase/schemas'
import { eq } from 'drizzle-orm'

export async function GET(request: NextRequest) {
    try {
        const session = await auth.api.getSession({
            headers: request.headers,
        })

        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const userData = await db
            .select()
            .from(users)
            .where(eq(users.id, session.user.id))
            .limit(1)

        if (userData.length === 0) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 })
        }

        const user = userData[0]

        return NextResponse.json({
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        })
    } catch (error) {
        console.error('User API error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
