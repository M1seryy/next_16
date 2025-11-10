import { type FC } from 'react'
import { headers } from 'next/headers'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { HomeModule } from '@/app/modules/home'
import { booksQueryApi } from '@/app/entities/api/books/books.api'
import { fetchFavorites } from '@/app/entities/api/favorites/favorites.api'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { auth } from '@/pkg/integrations/better-auth/auth.config'
import { redirect } from 'next/navigation'

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

  const session = await auth.api.getSession({ headers: await headers() })

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
  if (!session) {
    return redirect('/signin')
  }
  // return
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeModule searchQuery={searchQuery} />
    </HydrationBoundary>
  )
}

export default HomePage
