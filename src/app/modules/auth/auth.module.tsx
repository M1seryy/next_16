import { type FC } from 'react'
import { AuthBlockComponent } from '@/app/features/block'

// interface
interface IProps {}

// component
const AuthModule: FC<Readonly<IProps>> = () => {
  // return
  return (
    <div className='space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold'>Authentication</h1>
        <p className='text-muted-foreground'>Sign in to your account</p>
      </div>

      <div className='flex justify-center'>
        <AuthBlockComponent />
      </div>
    </div>
  )
}

export default AuthModule
