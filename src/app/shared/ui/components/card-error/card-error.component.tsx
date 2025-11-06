import { type FC } from 'react'

import { Card, CardContent } from '@/app/shared/ui'

// interface
interface IProps {
  message: string
  className?: string
}

// component
const CardErrorComponent: FC<Readonly<IProps>> = (props) => {
  const { message, className } = props

  // return
  return (
    <div className={`flex justify-center py-8 ${className ?? ''}`}>
      <Card className='border-destructive w-64'>
        <CardContent className='pt-6'>
          <div className='text-destructive text-center'>{message}</div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CardErrorComponent
