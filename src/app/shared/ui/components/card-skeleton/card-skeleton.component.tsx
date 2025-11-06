import { type FC } from 'react'

import { Card, CardContent, CardHeader, Skeleton } from '@/app/shared/ui'

// interface
interface IProps {}

// component
const CardSkeletonComponent: FC<Readonly<IProps>> = () => {
  // return
  return (
    <Card>
      <CardHeader>
        <Skeleton className='h-5 w-3/4' />

        <Skeleton className='mt-2 h-4 w-1/2' />
      </CardHeader>

      <CardContent>
        <Skeleton className='h-4 w-1/3' />

        <Skeleton className='mt-3 h-4 w-full' />

        <Skeleton className='mt-2 h-4 w-5/6' />
      </CardContent>
    </Card>
  )
}

export default CardSkeletonComponent
