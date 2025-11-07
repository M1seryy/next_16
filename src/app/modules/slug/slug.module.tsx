import { type FC, Suspense } from 'react'
import { getTranslations } from 'next-intl/server'

import SlugBlockComponent from '@/app/features/block/slug-block/slug-block'
import { CardLoaderComponent } from '@/app/shared/ui'

// interface
interface IProps {
  id: number
}

// component
const SlugModule: FC<Readonly<IProps>> = async (props) => {
  const { id } = props

  const t = await getTranslations()

  // return
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-2xl font-bold'>{t('BookDetail.title')}</h1>
        <p>{t('BookDetail.subtitle')}</p>
      </div>

      <Suspense fallback={<CardLoaderComponent message='Loading book...' />}>
        <SlugBlockComponent id={id} />
      </Suspense>
    </div>
  )
}

export default SlugModule
