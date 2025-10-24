'use client'

import { type FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { booksApi } from '@/app/entities/api/books/books.api'

// interface
interface IProps {
  searchQuery?: string
}

// component
const BooksListBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { searchQuery = '' } = props

  const {
    data: books,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['books', searchQuery],
    queryFn: () => booksApi.getAll(searchQuery),
  })

  if (isLoading) {
    return (
      <div className='flex justify-center py-8'>
        <div className='text-lg'>Loading books...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='flex justify-center py-8'>
        <div className='text-lg text-red-600'>Error loading books</div>
      </div>
    )
  }

  // return
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-semibold'>Books from Database</h2>

      {books && books.length === 0 ? (
        <p className='text-gray-500'>No books found</p>
      ) : (
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {books?.map((book) => (
            <div key={book.id} className='rounded-lg border p-4'>
              <h3 className='font-medium'>{book.title}</h3>
              <p className='text-sm text-gray-600'>{book.author}</p>
              <p className='text-xs text-gray-400'>Published: {book.publishedYear}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BooksListBlockComponent
