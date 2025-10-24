import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/pkg/integrations/supabase'
import { books } from '@/pkg/integrations/supabase/schemas'
import { ilike, or } from 'drizzle-orm'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const searchQuery = searchParams.get('search')


        let booksData

        if (searchQuery) {
            booksData = await db
                .select()
                .from(books)
                .where(
                    or(
                        ilike(books.title, `%${searchQuery}%`),
                        ilike(books.author, `%${searchQuery}%`)
                    )
                )
        } else {
            booksData = await db.select().from(books)
        }

        return NextResponse.json(booksData)
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch books' }, { status: 500 })
    }
}
