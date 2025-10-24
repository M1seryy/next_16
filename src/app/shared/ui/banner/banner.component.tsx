import { type FC } from 'react'
import Image from 'next/image'

// interface for banner component props
interface IProps {}

// banner component
const BannerComponent: FC<Readonly<IProps>> = () => {
  return (
    <div className='relative mt-3.5 mb-3.5 h-[400px] max-w-[1280px] overflow-hidden rounded-2xl'>
      <Image src={'/banner.jpg'} alt={'Banner'} fill sizes='100vw' className='object-cover' priority />
    </div>
  )
}

export default BannerComponent
