import { type FC } from 'react'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { HomeModule } from '@/app/modules/home'
import { booksQueryApi } from '@/app/entities/api/books/books.api'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'

// interface
interface IProps {}

export const revalidate = 30

// component
const HomePage: FC<Readonly<IProps>> = async (props) => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['books', ''],
    queryFn: (opt) => booksQueryApi(opt, {}),
  })

  // return
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeModule />
    </HydrationBoundary>
  )
}

export default HomePage
