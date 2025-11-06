'use client'

import { type FC } from 'react'

import { useBooksQuery } from '@/app/entities/api/books/books.query'
import { useFavoritesQuery, useToggleFavoriteMutation } from '@/app/entities/api/favorites/favorites.query'
import { useUserQuery } from '@/app/entities/api/user/user.query'
import { CustomCardComponent } from '@/app/shared/ui/components/custom-card'
import { Card, CardContent, CardErrorComponent, CardLoaderComponent, CardSkeletonComponent } from '@/app/shared/ui'

// interface
interface IProps {
  searchQuery?: string
}

// component
const BooksListBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { searchQuery = '' } = props

  const { data: user, isLoading: userLoading, error: userError } = useUserQuery()
  const { data: books, isLoading, error } = useBooksQuery(searchQuery, { enabled: !!user })
  const { data: favorites } = useFavoritesQuery({ enabled: !!user, userId: user?.id })
  const toggleFavorite = useToggleFavoriteMutation()

  const favoritesList = Array.isArray(favorites) ? favorites : []

  if (error) {
    return <CardErrorComponent message='Error loading books' />
  }

  // return
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-semibold'>Books from Database</h2>

      {user && books && books.length === 0 ? (
        <CardErrorComponent message='No books found' />
      ) : (
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {books?.map((book) => (
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
      )}
    </div>
  )
}

export default BooksListBlockComponent
