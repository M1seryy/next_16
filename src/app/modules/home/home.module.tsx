'use client'

import { type FC, Suspense, useState } from 'react'
import { useTranslations } from 'next-intl'

import { BooksListBlockComponent, SearchFormBlockComponent } from '@/app/features/block'
import { BannerComponent, CardSkeletonComponent } from '@/app/shared/ui'

// interface
interface IProps {
  searchQuery?: string
}

// component
const HomeModule: FC<Readonly<IProps>> = (props) => {
  const { searchQuery: initialSearchQuery = '' } = props
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery)

  const t = useTranslations()

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

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
        <SearchFormBlockComponent onSearch={handleSearch} initialValue={searchQuery} />
      </div>

      <Suspense
        key={`books-${searchQuery}`}
        fallback={
          <div className='space-y-4'>
            <h2 className='text-xl font-semibold'>Books from Database</h2>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {Array.from({ length: 6 }).map((_, i) => (
                <CardSkeletonComponent key={i} />
              ))}
            </div>
          </div>
        }
      >
        <BooksListBlockComponent searchQuery={searchQuery} />
      </Suspense>
    </div>
  )
}

export default HomeModule
