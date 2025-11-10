import { type FC } from 'react'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { HomeModule } from '@/app/modules/home'
import { booksQueryApi } from '@/app/entities/api/books/books.api'
import { fetchFavorites } from '@/app/entities/api/favorites/favorites.api'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { requireSession } from '@/config/utils/lib'

// interface
interface IProps {
  searchParams: Promise<{ search?: string }>
}

export const revalidate = 30

// component
const HomePage: FC<Readonly<IProps>> = async (props) => {
  const { searchParams } = props
  const params = await searchParams
  const searchQuery = params.search || ''

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['books'],
    queryFn: (opt) => booksQueryApi(opt, {}),
  })

  await queryClient.prefetchQuery({
    queryKey: ['favorites'],
    queryFn: fetchFavorites,
  })

  //check auth not in middleware
  await requireSession()
  // return
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeModule searchQuery={searchQuery} />
    </HydrationBoundary>
  )
}

export default HomePage
