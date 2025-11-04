import { eq } from 'drizzle-orm'
import { NextRequest, NextResponse } from 'next/server'

import { db } from '@/pkg/integrations/supabase/drizzle'
import { books } from '@/pkg/integrations/supabase/schemas'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id')
        let booksData

        if (id) {
            const result = await db
                .select()
                .from(books)
                .where(eq(books.id, Number(id)))
                .limit(1)

            if (!result || result.length === 0) {
                return NextResponse.json({ error: 'Book not found' }, { status: 404 })
            }

            return NextResponse.json(result[0])
        } else {
            booksData = await db.select().from(books)
            return NextResponse.json(booksData)
        }
    } catch (_error) {
        return NextResponse.json({ error: 'Failed to fetch book id' }, { status: 500 })
    }
}