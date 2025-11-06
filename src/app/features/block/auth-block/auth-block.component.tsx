'use client'

import { type FC, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useQueryClient } from '@tanstack/react-query'

import { authClient } from '@/app/entities/auth/authClient'
import { useUserQuery, userQueryKeys } from '@/app/entities/api/user'
import { booksQueryKeys } from '@/app/entities/api/books/books.query'
import { favoritesKeys } from '@/app/entities/api/favorites/favorites.query'
import { Button } from '@/app/shared/ui'

// interface
interface IProps {}

// component
const AuthBlockComponent: FC<Readonly<IProps>> = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const t = useTranslations('Auth')
  const queryClient = useQueryClient()

  const { data: user, isLoading: userLoading, error } = useUserQuery()

  const checkAuth = async () => {
    try {
      const session = await authClient.getSession()

      if (session && 'data' in session && session.data) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    } catch (_error) {
      setIsAuthenticated(false)
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
        setIsAuthenticated(true)
      }
    } catch (_error) {}
  }

  const handleGoogleSignUp = async () => {
    try {
      const result = await authClient.signIn.social({
        provider: 'google',
        callbackURL: '/?action=signup',
      })

      if (result && 'user' in result && result.user) {
        setIsAuthenticated(true)
      }
    } catch (_error) {}
  }

  const handleSignOut = async () => {
    try {
      await authClient.signOut()
      setIsAuthenticated(false)

      // Clear all cache
      queryClient.clear()

      // Invalidate all queries
      await queryClient.invalidateQueries({ queryKey: ['user'] })
      await queryClient.invalidateQueries({ queryKey: booksQueryKeys.all })
      await queryClient.invalidateQueries({ queryKey: favoritesKeys.all })

      window.location.href = '/signin'
    } catch (_error) {}
  }

  if (loading || userLoading) {
    return <div>Loading...</div>
  }

  // return
  return (
    <div className='flex items-center gap-2'>
      {isAuthenticated && user ? (
        <>
          <span className='text-lg font-medium'>Hello, {user.name || user.email}!</span>

          <Button variant='outline' onClick={handleSignOut}>
            {t('signOut')}
          </Button>
        </>
      ) : (
        <div className='flex gap-2'>
          <Button variant='outline' onClick={handleGoogleSignIn}>
            {t('signIn')}
          </Button>

          <Button onClick={handleGoogleSignUp}>{t('signUp')}</Button>
        </div>
      )}
    </div>
  )
}

export default AuthBlockComponent
