import { type FC } from 'react'

import { ProfileBlockComponent } from '@/app/features/block/profile-block'
import { HydrationBoundary } from '@tanstack/react-query'

// interface
interface IProps {}

// component
const ProfileModule: FC<Readonly<IProps>> = (props) => {
  // return
  return (
    <div className='space-y-6'>
      <ProfileBlockComponent />
    </div>
  )
}

export default ProfileModule
