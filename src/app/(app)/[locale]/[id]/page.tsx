import { type FC } from 'react'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { headers } from 'next/headers'

import { SlugModule } from '@/app/modules/slug'
import { slugBookQueryApi } from '@/app/entities/api/books/slug.api'
import { booksQueryKeys } from '@/app/entities/api/books/slug.query'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { auth } from '@/pkg/integrations/better-auth/auth.config'
import { redirect } from 'next/navigation'

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

  const session = await auth.api.getSession({ headers: await headers() })

  const queryClient = getQueryClient()

  if (Number.isFinite(idNum) && idNum > 0) {
    await queryClient.prefetchQuery({
      queryKey: booksQueryKeys.search(idNum),
      queryFn: (opt) => slugBookQueryApi(opt, { id: idNum }),
    })
  }

  if (!session) {
    return redirect('/signin')
  }

  // return
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SlugModule id={idNum} />
    </HydrationBoundary>
  )
}

export default SlugPage
