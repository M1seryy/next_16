import { type FC } from 'react'
import { getTranslations } from 'next-intl/server'
import { UsersListComponent } from '@/app/features/users/users-list'

// interface
interface IProps {
  searchQuery?: string
}

// component
const HomeModule: FC<Readonly<IProps>> = async (props) => {
  const { searchQuery = '' } = props

  const t = await getTranslations()

  // return
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='space-y-6'>
        <h1 className='text-2xl'>Home</h1>

        <UsersListComponent />
      </div>
    </div>
  )
}

export default HomeModule
