'use client'

import { type FC, Suspense } from 'react'

import { BooksListContentComponent } from './index'
import BooksListSkeletonComponent from '@/app/shared/ui/components/book-list-skeleton/books-list-skeleton.component'

// interface
interface IProps {
  searchQuery?: string
}

// component
const BooksListBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { searchQuery = '' } = props

  // return
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-semibold'>Books from Database</h2>

      <Suspense key={searchQuery} fallback={<BooksListSkeletonComponent count={6} />}>
        <BooksListContentComponent searchQuery={searchQuery} />
      </Suspense>
    </div>
  )
}

export default BooksListBlockComponent
