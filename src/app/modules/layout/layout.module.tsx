import { type FC, type ReactNode } from 'react'
import { HeaderComponent, FooterComponent } from '@/app/widgets'
import { ContainerComponent } from '@/app/shared/ui'

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

      <ContainerComponent variant='main'>{children}</ContainerComponent>

      <FooterComponent />
    </>
  )
}

export default LayoutModule
