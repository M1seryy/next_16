'use client'

import { type FC } from 'react'

import { Card, CardContent } from '@/app/shared/ui'

// interface
interface IProps {
  message: string
  className?: string
}

// component
const CardLoaderComponent: FC<Readonly<IProps>> = (props) => {
  const { message, className } = props

  // return
  return (
    <div className={`flex justify-center py-8 ${className ?? ''}`}>
      <Card className='w-64'>
        <CardContent className='pt-6'>
          <div className='text-muted-foreground text-center'>{message}</div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CardLoaderComponent
