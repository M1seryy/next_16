import { type FC, type ReactNode } from 'react'

import { ContainerComponent } from '@/app/shared/ui'
import { FooterComponent } from '@/app/widgets/footer'
import { HeaderComponent } from '@/app/widgets/header'

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
