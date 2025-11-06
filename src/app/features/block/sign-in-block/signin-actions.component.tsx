'use client'

import { type FC } from 'react'

import { Button, CardContent } from '@/app/shared/ui'

// interface
interface IProps {
  signInLabel: string
  signUpLabel: string
  onSignIn: () => void
  onSignUp: () => void
}

// component
const SignInActionsComponent: FC<Readonly<IProps>> = (props) => {
  const { signInLabel, signUpLabel, onSignIn, onSignUp } = props

  // return
  return (
    <CardContent className='space-y-4'>
      <Button onClick={onSignIn} className='w-full' variant='outline'>
        {signInLabel}
      </Button>

      <Button onClick={onSignUp} className='w-full'>
        {signUpLabel}
      </Button>
    </CardContent>
  )
}

export default SignInActionsComponent
