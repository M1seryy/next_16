'use client'

import { type FC } from 'react'

import { useSlugQuery } from '@/app/entities/api/books/slug.query'
import {
  Card,
  CardContent,
  CardDescription,
  CardErrorComponent,
  CardHeader,
  CardLoaderComponent,
  CardTitle,
} from '@/app/shared/ui'

// interface
interface IProps {
  id?: number
}

// component
const SlugBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { id } = props

  const { data: book, isLoading, error } = useSlugQuery(id)

  if (isLoading) {
    return <CardLoaderComponent message='Loading book...' />
  }

  if (error) {
    return <CardErrorComponent message='Error loading book' />
  }

  if (!book) {
    return (
      <div className='flex justify-center py-8'>
        <Card className='w-64'>
          <CardContent className='pt-6'>
            <div className='text-muted-foreground text-center'>Book not found</div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // return
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl'>{book.title}</CardTitle>

        <CardDescription>by {book.author}</CardDescription>
      </CardHeader>

      <CardContent className='space-y-4'>
        <p className='text-muted-foreground text-sm'>Published: {book.publishedYear}</p>

        {book.description && (
          <div>
            <h3 className='mb-2 font-semibold'>Description</h3>

            <p className='text-muted-foreground text-sm'>{book.description}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default SlugBlockComponent
