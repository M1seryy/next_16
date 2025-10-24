'use client'
import { type FC } from 'react'
import { UsersListComponent } from '@/app/features/users/users-list'
import { SearchFormComponent } from '@/app/features/search'
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
      <div className='text-center'>
        <h1 className='text-3xl font-bold text-gray-900'>{t('HomePage.title')}</h1>
        <p className='mt-2 text-gray-600'>{t('HomePage.description')}</p>
      </div>

      <div className='flex justify-center'>
        <SearchFormComponent
          onSearch={(query) => {
            console.log('Search query:', query)
          }}
          initialValue={searchQuery}
        />
      </div>

      <UsersListComponent />
    </div>
  )
}

export default HomeModule
