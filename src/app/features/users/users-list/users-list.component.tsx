import { type FC } from 'react'
import { usersApi } from '@/app/entities/api/users'

// interface
interface IProps {
  // no props needed
}

// component
const UsersListComponent: FC<Readonly<IProps>> = async () => {
  const users = await usersApi.getAll()

  // return
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-semibold'>Users from Database</h2>

      {users.length === 0 ? (
        <p className='text-gray-500'>No users found</p>
      ) : (
        <div className='grid gap-4'>
          {users.map((user) => (
            <div key={user.id} className='rounded-lg border p-4'>
              <h3 className='font-medium'>{user.name}</h3>
              <p className='text-sm text-gray-600'>{user.email}</p>
              <p className='text-xs text-gray-400'>Created: {new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UsersListComponent
