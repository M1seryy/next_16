'use client'

import { type FC } from 'react'

import { useBooksQuery } from '@/app/entities/api/books/books.query'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/shared/ui'
import { Link } from '@/pkg/libraries/locale/navigation'

// interface
interface IProps {
  searchQuery?: string
}

// component
const BooksListBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { searchQuery = '' } = props

  const { data: books, isLoading, error } = useBooksQuery(searchQuery)

  if (isLoading) {
    return (
      <div className='flex justify-center py-8'>
        <Card className='w-64'>
          <CardContent className='pt-6'>
            <div className='text-muted-foreground text-center'>Loading books...</div>
          </CardContent>
        </Card>
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
            <Link key={book.id} href={`/${book.id}`}>
              <Card className='hover:bg-accent cursor-pointer transition-colors'>
                <CardHeader>
                  <CardTitle className='text-lg'>{book.title}</CardTitle>
                  <CardDescription>by {book.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground text-sm'>Published: {book.publishedYear}</p>
                  {book.description && <p className='text-muted-foreground mt-2 text-sm'>{book.description}</p>}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default BooksListBlockComponent
