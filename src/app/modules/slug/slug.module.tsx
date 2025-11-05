'use client'

import { type FC } from 'react'

import SlugBlockComponent from '@/app/features/block/slug-block/slug-block'

// interface
interface IProps {
  id: number
}

// component
const SlugModule: FC<Readonly<IProps>> = (props) => {
  const { id } = props

  // return
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-2xl font-bold'>Book Detail</h1>
        <p>Here you can see details for the selected book.</p>
      </div>

      <SlugBlockComponent id={id} />
    </div>
  )
}

export default SlugModule
