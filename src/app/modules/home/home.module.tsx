'use client'

import { type FC, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { BooksListBlockComponent, SearchFormBlockComponent } from '@/app/features/block'
import { BannerComponent } from '@/app/shared/ui'
import { authClient } from '@/app/entities/auth/authClient'

// interface
interface IProps {
  searchQuery?: string
}

// component
const HomeModule: FC<Readonly<IProps>> = (props) => {
  const { searchQuery: initialSearchQuery = '' } = props
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery)

  const t = useTranslations()
  const router = useRouter()

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await authClient.getSession()
        if (!(session && 'data' in session && session.data)) {
          router.push('/signin')
        }
      } catch (_error) {
        router.push('/signin')
      }
    }

    checkSession()
  }, [router])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  // return
  return (
    <div className='space-y-6'>
      <div>
        <BannerComponent />

        <h1 className='text-2xl font-bold'>{t('home.title')}</h1>
        <p>{t('home.subtitle')}</p>
      </div>

      <div className='flex justify-center'>
        <SearchFormBlockComponent onSearch={handleSearch} initialValue={searchQuery} />
      </div>

      <BooksListBlockComponent searchQuery={searchQuery} />
    </div>
  )
}

export default HomeModule
