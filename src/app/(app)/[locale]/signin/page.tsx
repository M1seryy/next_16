import { type FC } from 'react'

import { SignInModule } from '@/app/modules/signin'

// interface
interface IProps {}

// component
const SignInPage: FC<Readonly<IProps>> = async (props) => {
  // return
  return <SignInModule />
}

export default SignInPage
