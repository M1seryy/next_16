import { type FC } from 'react'
import HomeModule from '../../modules/home/home.module'

// interface
interface IProps {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const revalidate = 30

// component
const HomePage: FC<Readonly<IProps>> = async (props) => {
  const { params, searchParams } = props

  // return
  return <HomeModule />
}

export default HomePage
