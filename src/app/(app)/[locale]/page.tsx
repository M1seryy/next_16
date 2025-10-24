import { type FC } from 'react'
import HomeModule from '../../modules/home/home.module'

// interface
interface IProps {
  params: Promise<{ locale: string }>
}

export const revalidate = 30

// component
const HomePage: FC<Readonly<IProps>> = async (props) => {
  // return
  return <HomeModule />
}

export default HomePage
