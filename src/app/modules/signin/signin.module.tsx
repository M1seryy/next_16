'use client'

import { type FC, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { authClient } from '@/app/entities/auth/authClient'
import { SignInActionsComponent } from '@/app/features/block/sign-in-block'
import { Card, CardDescription, CardHeader, CardTitle } from '@/app/shared/ui'

// interface
interface IProps {}

// component
const SignInModule: FC<Readonly<IProps>> = () => {
  const t = useTranslations('Auth')
  const searchParams = useSearchParams()
  const router = useRouter()

  const redirect = searchParams.get('redirect') || '/'

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await authClient.getSession()
        if (session && 'data' in session && session.data) {
          router.push(redirect)
        }
      } catch (_error) {}
    }

    checkAuth()
  }, [redirect, router])

  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: redirect,
      })
    } catch (_error) {}
  }

  const handleGoogleSignUp = async () => {
    try {
      await authClient.signIn.social({
        provider: 'google',
        callbackURL: redirect,
      })
    } catch (_error) {}
  }

  // return
  return (
    <div className='flex min-h-[calc(100vh-200px)] items-center justify-center'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle className='text-2xl'>{t('title')}</CardTitle>

          <CardDescription>{t('subtitle')}</CardDescription>
        </CardHeader>

        <SignInActionsComponent
          onSignIn={handleGoogleSignIn}
          onSignUp={handleGoogleSignUp}
          signInLabel={`${t('signIn')} with Google`}
          signUpLabel={`${t('signUp')} with Google`}
        />
      </Card>
    </div>
  )
}

export default SignInModule
