'use client'

import { type FC } from 'react'
import { Button } from '@/app/shared/ui'
import { authClient } from '@/app/entities/auth/authClient'

// interface
interface IProps {
  // No props needed
}

// component
const AuthBlockComponent: FC<Readonly<IProps>> = () => {
  const handleGoogleSignIn = async () => {
    try {
      console.log('🔐 Starting Google sign in...')
      console.log('🔐 Auth client:', authClient)
      console.log('🔐 Auth client methods:', Object.keys(authClient))
      console.log('🔐 Sign in method:', authClient.signIn)

      const result = await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/',
      })

      console.log('🔐 Sign in result:', result)
    } catch (error) {
      console.error('❌ Google sign in error:', error)
      console.error('❌ Error details:', error.message)
      console.error('❌ Error stack:', error.stack)
    }
  }

  const handleSignOut = async () => {
    try {
      await authClient.signOut()
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  // return
  return (
    <div className='flex gap-2'>
      <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
      <Button variant='outline' onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  )
}

export default AuthBlockComponent
