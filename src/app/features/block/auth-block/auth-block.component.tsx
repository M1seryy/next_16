'use client'

import { type FC, useEffect, useState } from 'react'

import { authClient } from '@/app/entities/auth/authClient'
import { Button } from '@/app/shared/ui'

// interface
interface IProps {}

// component
const AuthBlockComponent: FC<Readonly<IProps>> = () => {
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(null)
  const [loading, setLoading] = useState(true)

  const checkAuth = async () => {
    try {
      const session = await authClient.getSession()

      if (session && 'data' in session && session.data) {
        setUser(session.data.user || null)
      } else {
        setUser(null)
      }
    } catch (_error) {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkAuth()
  }, [])

  const handleGoogleSignIn = async () => {
    try {
      const result = await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/',
      })

      if (result && 'user' in result && result.user) {
        setUser(result.user as { name?: string; email?: string })
      }
    } catch (_error) {}
  }

  const handleSignOut = async () => {
    try {
      await authClient.signOut()
      setUser(null)
    } catch (_error) {}
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
