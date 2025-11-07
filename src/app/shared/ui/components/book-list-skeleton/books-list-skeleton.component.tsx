import { type FC } from 'react'

import { CardSkeletonComponent } from '@/app/shared/ui'

// interface
interface IProps {
  count?: number
}

// component
const BooksListSkeletonComponent: FC<Readonly<IProps>> = (props) => {
  const { count = 6 } = props

  // return
  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {Array.from({ length: count }).map((_, index) => (
        <CardSkeletonComponent key={index} />
      ))}
    </div>
  )
}

export default BooksListSkeletonComponent
