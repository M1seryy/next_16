'use client'

import { type FC } from 'react'

import { useUserQuery } from '@/app/entities/api/user'

// interface
interface IProps {}

// component
const ProfileBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { data: user, isLoading, error } = useUserQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!user) {
    return <div>User not found</div>
  }
  // return
  return (
    <div className='mt-8 flex flex-col gap-6'>
      <div className='bg-card rounded-lg border p-6 shadow'>
        <h2 className='mb-2 text-lg font-semibold'>User Information</h2>

        <div className='flex flex-col gap-1'>
          <span className='text-muted-foreground text-sm'>Username: {user.name}</span>
          <span className='text-muted-foreground text-sm'>Email: {user.email}</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileBlockComponent
