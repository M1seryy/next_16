import { type FC, Suspense } from 'react'
import { getTranslations } from 'next-intl/server'

import { BooksListBlockComponent, SearchFormBlockComponent } from '@/app/features/block'
import { BannerComponent } from '@/app/shared/ui'

// interface
interface IProps {
  searchQuery?: string
}

// component
const HomeModule: FC<Readonly<IProps>> = async (props) => {
  const { searchQuery = '' } = props

  const t = await getTranslations()

  // return
  return (
    <div className='space-y-6'>
      <Suspense key='banner' fallback={<div className='bg-muted h-48 animate-pulse rounded-lg' />}>
        <div>
          <BannerComponent />

          <h1 className='text-2xl font-bold'>{t('home.title')}</h1>
          <p>{t('home.subtitle')}</p>
        </div>
      </Suspense>

      <div className='flex justify-center'>
        <Suspense fallback={<div className='bg-muted h-10 w-full max-w-md animate-pulse rounded' />}>
          <SearchFormBlockComponent initialValue={searchQuery} />
        </Suspense>
      </div>

      <BooksListBlockComponent searchQuery={searchQuery} />
    </div>
  )
}

export default HomeModule
