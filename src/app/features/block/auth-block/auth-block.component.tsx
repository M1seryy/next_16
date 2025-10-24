'use client'

import { type FC, useEffect, useState } from 'react'
import { Button } from '@/app/shared/ui'
import { authClient } from '@/app/entities/auth/authClient'

// interface
interface IProps {}

// component
const AuthBlockComponent: FC<Readonly<IProps>> = () => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const checkAuth = async () => {
    try {
      const session = await authClient.getSession()

      if (session && 'data' in session && session.data) {
        setUser(session.data.user || null)
      } else {
        setUser(null)
      }
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  const handleGoogleSignIn = async () => {
    try {
      console.log('Starting Google sign in...')
      const result = await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/',
      })

      console.log('Google sign in result:', result)

      // Перевіряємо стан після входу
      if (result && 'user' in result) {
        setUser(result.user)
      }
    } catch (error) {
      console.error('Google sign in error:', error)
    }
  }

  const handleSignOut = async () => {
    try {
      await authClient.signOut()
      setUser(null)
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  // return
  return (
    <div className='flex items-center gap-2'>
      {user ? (
        <>
          <span className='text-lg font-medium'>Hello, {user.name || user.email}!</span>
          <Button variant='outline' onClick={handleSignOut}>
            Sign Out
          </Button>
        </>
      ) : (
        <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
      )}
    </div>
  )
}

export default AuthBlockComponent
