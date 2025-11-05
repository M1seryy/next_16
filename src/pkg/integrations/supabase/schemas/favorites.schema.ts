import { index, integer, pgTable, serial, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core'

import { books } from './books.schema'
import { users } from './users.schema'

export const favorites = pgTable(
    'favorites',
    {
        id: serial('id').primaryKey(),
        userId: text('user_id')
            .notNull()
            .references(() => users.id, { onDelete: 'cascade' }),
        bookId: integer('book_id')
            .notNull()
            .references(() => books.id, { onDelete: 'cascade' }),
        createdAt: timestamp('created_at').defaultNow().notNull(),
    },
    (table) => ({
        userBookUnique: uniqueIndex('favorites_user_book_unique').on(table.userId, table.bookId),
        userIdx: index('favorites_user_idx').on(table.userId),
        bookIdx: index('favorites_book_idx').on(table.bookId),
    }),
)

export type Favorite = typeof favorites.$inferSelect
export type NewFavorite = typeof favorites.$inferInsert


