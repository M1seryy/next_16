'use client'

import { type FC } from 'react'

import { useBooksQuery } from '@/app/entities/api/books/books.query'
import { useFavoritesQuery, useToggleFavoriteMutation } from '@/app/entities/api/favorites/favorites.query'
import { useUserQuery } from '@/app/entities/api/user/user.query'
import { CustomCardComponent } from '@/app/shared/ui/components/custom-card'
import { Card, CardContent, CardLoaderComponent, CardSkeletonComponent } from '@/app/shared/ui'

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

  if (!user || userError) {
    return (
      <div className='space-y-4'>
        <h2 className='text-xl font-semibold'>Books from Database</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='text-muted-foreground text-center'>Please sign in to view books</div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (userLoading) {
    return (
      <div className='space-y-4'>
        <h2 className='text-xl font-semibold'>Books from Database</h2>
        <CardLoaderComponent message='Loading...' />
      </div>
    )
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className='space-y-4'>
        <h2 className='text-xl font-semibold'>Books from Database</h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeletonComponent key={i} />
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='flex justify-center py-8'>
        <Card className='border-destructive w-64'>
          <CardContent className='pt-6'>
            <div className='text-destructive text-center'>Error loading books</div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // return
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-semibold'>Books from Database</h2>

      {books && books.length === 0 ? (
        <Card>
          <CardContent className='pt-6'>
            <div className='text-muted-foreground text-center'>No books found</div>
          </CardContent>
        </Card>
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
