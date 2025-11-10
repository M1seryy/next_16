import { type FC } from 'react'
import { ProfileModule } from '@/app/modules/profile'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { userQueryApi, userQueryKeys } from '@/app/entities/api/user'
import { getQueryClient } from '@/pkg/libraries/rest-api/service'
import { requireSession } from '@/config/utils/lib'

// interface
interface IProps {}

// component
const ProfilePage: FC<Readonly<IProps>> = async (props) => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery({
    queryKey: userQueryKeys.current(),
    queryFn: userQueryApi,
  })

  await requireSession()

  // return
  return (
    <div>
      <h1 className='mb-4 text-2xl font-bold'>Profile Page</h1>

      <p>Welcome to your profile!</p>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProfileModule />
      </HydrationBoundary>
    </div>
  )
}

export default ProfilePage
