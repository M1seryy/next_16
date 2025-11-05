import { NextRequest, NextResponse } from 'next/server'
import { and, eq } from 'drizzle-orm'

import { auth } from '@/pkg/integrations/better-auth/auth.config'
import { db } from '@/pkg/integrations/supabase/drizzle'
import { books, favorites } from '@/pkg/integrations/supabase/schemas'

export async function GET(request: NextRequest) {
    try {
        const session = await auth.api.getSession({ headers: request.headers })
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const rows = await db
            .select({
                id: books.id,
                title: books.title,
                author: books.author,
                publishedYear: books.publishedYear,
                description: books.description,
                createdAt: books.createdAt,
                updatedAt: books.updatedAt,
            })
            .from(favorites)
            .innerJoin(books, eq(favorites.bookId, books.id))
            .where(eq(favorites.userId, session.user.id))

        return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch favorites' }, { status: 500 })
    }
}

export async function POST(request: NextRequest) {
    try {
        const session = await auth.api.getSession({ headers: request.headers })
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json().catch(() => null) as { bookId?: number } | null
        const bookId = typeof body?.bookId === 'number' ? body.bookId : Number(body?.bookId)
        if (!Number.isFinite(bookId)) {
            return NextResponse.json({ error: 'Invalid bookId' }, { status: 400 })
        }

        // Upsert-like behavior: ignore on conflict unique(userId, bookId)
        await db
            .insert(favorites)
            .values({ userId: session.user.id, bookId })
            .onConflictDoNothing()

        return NextResponse.json({ ok: true })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to add favorite' }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const session = await auth.api.getSession({ headers: request.headers })
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { searchParams } = new URL(request.url)
        const bookIdParam = searchParams.get('bookId')
        const bookId = Number(bookIdParam)
        if (!Number.isFinite(bookId)) {
            return NextResponse.json({ error: 'Invalid bookId' }, { status: 400 })
        }

        await db.delete(favorites).where(and(eq(favorites.userId, session.user.id), eq(favorites.bookId, bookId)))

        return NextResponse.json({ ok: true })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to remove favorite' }, { status: 500 })
    }
}


