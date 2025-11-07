'use client'

import { type FC } from 'react'

import { useBooksQuery } from '@/app/entities/api/books/books.query'
import { type IBook } from '@/app/entities/models/book.model'
import { useFavoritesQuery, useToggleFavoriteMutation } from '@/app/entities/api/favorites/favorites.query'
import { useUserQuery } from '@/app/entities/api/user/user.query'
import { CustomCardComponent } from '@/app/shared/ui/components/custom-card'
import { CardErrorComponent } from '@/app/shared/ui'

// interface
interface IProps {
  searchQuery?: string
}

// component
const BooksListContentComponent: FC<Readonly<IProps>> = (props) => {
  const { searchQuery = '' } = props

  const { data: user } = useUserQuery()

  const { data: books } = useBooksQuery(searchQuery)

  const { data: favorites } = useFavoritesQuery({ enabled: !!user, userId: user?.id })
  const toggleFavorite = useToggleFavoriteMutation()

  const favoritesList = Array.isArray(favorites) ? favorites : []

  if (user && books && books.length === 0) {
    return <CardErrorComponent message='No books found' />
  }

  if (!books || books.length === 0) {
    return null
  }

  // return
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {books.map((book: IBook) => (
        <CustomCardComponent
          key={book.id}
          title={book.title}
          author={book.author}
          publishedYear={book.publishedYear}
          description={book.description}
          href={`/${book.id}`}
          isFavorite={favoritesList.some((f) => Number(f.id) === Number(book.id))}
          onToggle={() =>
            toggleFavorite.mutate({
              bookId: book.id,
              isFavorite: favoritesList.some((f) => Number(f.id) === Number(book.id)),
            })
          }
          loading={toggleFavorite.isPending}
        />
      ))}
    </div>
  )
}

export default BooksListContentComponent
