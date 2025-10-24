import { type FC } from 'react'
import { AuthModule } from '@/app/modules/auth'

// interface
interface IProps {
  params: Promise<{ locale: string }>
}

export const revalidate = 30

// component
const LoginPage: FC<Readonly<IProps>> = async (props) => {
  // return
  return <AuthModule />
}

export default LoginPage
