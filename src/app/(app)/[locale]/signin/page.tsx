import { type FC } from 'react'

import { SignInModule } from '@/app/modules/signin'

// interface
interface IProps {}

// component
const SignInPage: FC<Readonly<IProps>> = () => {
  // return
  return <SignInModule />
}

export default SignInPage
