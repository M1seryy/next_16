import { type FC } from 'react'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { SignInModule } from '@/app/modules/signin'
import { auth } from '@/pkg/integrations/better-auth/auth.config'

// interface
interface IProps {}

// component
const SignInPage: FC<Readonly<IProps>> = async (props) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  //check if user is authenticated (not in middleware)
  if (session) {
    redirect('/')
  }

  // return
  return <SignInModule />
}

export default SignInPage
