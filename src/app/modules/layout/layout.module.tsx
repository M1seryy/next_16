import { type FC, type ReactNode } from 'react'
import { HeaderComponent, FooterComponent } from '@/app/widgets'

// interface
interface IProps {
  children: ReactNode
}

// component
const LayoutModule: FC<Readonly<IProps>> = (props) => {
  const { children } = props

  // return
  return (
    <>
      <HeaderComponent />

      <main className='min-h-screen'>{children}</main>

      <FooterComponent />
    </>
  )
}

export default LayoutModule
