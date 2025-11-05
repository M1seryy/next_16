import { type FC } from 'react'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { SlugModule } from '@/app/modules/slug'
import { slugBookQueryApi } from '@/app/entities/api/books/slug.api'
import { booksQueryKeys } from '@/app/entities/api/books/slug.query'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'

// interface
interface IProps {
  params: Promise<{ id: string; locale: string }>
}

export const revalidate = 30

// component
const SlugPage: FC<Readonly<IProps>> = async (props) => {
  const { params } = props
  const { id } = await params
  const idNum = Number(id)

  const queryClient = getQueryClient()

  if (Number.isFinite(idNum) && idNum > 0) {
    await queryClient.prefetchQuery({
      queryKey: booksQueryKeys.search(idNum),
      queryFn: (opt) => slugBookQueryApi(opt, { id: idNum }),
    })
  }

  // return
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SlugModule id={idNum} />
    </HydrationBoundary>
  )
}

export default SlugPage
