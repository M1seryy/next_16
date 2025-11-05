'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { type FC } from 'react'

import { Button } from '@/app/shared/ui'

// interface
interface IProps {}

// component
const LanguageSwitcherComponent: FC<Readonly<IProps>> = () => {
  const locale = useLocale()
  const t = useTranslations('common')
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'

    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  return (
    <div className='flex items-center gap-2'>
      <Button variant={locale === 'en' ? 'default' : 'outline'} size='sm' onClick={() => switchLanguage('en')}>
        {t('english')}
      </Button>
      <Button variant={locale === 'uk' ? 'default' : 'outline'} size='sm' onClick={() => switchLanguage('uk')}>
        {t('ukrainian')}
      </Button>
    </div>
  )
}

export default LanguageSwitcherComponent
