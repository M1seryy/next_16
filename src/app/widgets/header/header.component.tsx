'use client'
'use cache'

import { type FC } from 'react'
import { useTranslations } from 'next-intl'

import { AuthBlockComponent } from '@/app/features/block'
import { LanguageSwitcherComponent } from '@/app/shared/ui/components/language-switcher'
import { Link } from '@/pkg/libraries/locale/navigation'

// interface
interface IProps {}

// component
const HeaderComponent: FC<Readonly<IProps>> = () => {
  const t = useTranslations()

  // return
  return (
    <div className='border-border m-auto mt-3.5 flex w-[1280px] flex-col border-b p-4'>
      <div className='mx-auto flex w-full items-center justify-between px-4 md:px-6'>
        <Link href={'/'}>
          <h1 className='text-4xl'>Book Store</h1>
        </Link>

        <nav>
          <ul className='flex items-center gap-5'>
            <li className='text-xl'>
              <Link href={'/'}>{t('navigation.home')}</Link>
            </li>

            <li>
              <LanguageSwitcherComponent />
            </li>

            <li>
              <AuthBlockComponent />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HeaderComponent
