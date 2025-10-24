'use client'
import { type FC } from 'react'
import { BooksListBlockComponent, SearchFormBlockComponent } from '@/app/features/block'
import { BannerComponent } from '@/app/shared/ui'
import { useTranslations } from 'next-intl'

// interface
interface IProps {
  searchQuery?: string
}

// component
const HomeModule: FC<Readonly<IProps>> = (props) => {
  const { searchQuery = '' } = props

  const t = useTranslations()

  // return
  return (
    <div className='space-y-6'>
      <div>
        <BannerComponent />
        <h1 className='text-2xl font-bold'>{t('home.title')}</h1>
        <p>{t('home.subtitle')}</p>
      </div>

      <div className='flex justify-center'>
        <SearchFormBlockComponent
          onSearch={(query) => {
            console.log('Search query:', query)
          }}
          initialValue={searchQuery}
        />
      </div>

      <BooksListBlockComponent />
    </div>
  )
}

export default HomeModule
