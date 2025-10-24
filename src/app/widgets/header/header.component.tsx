import { type FC } from 'react'
import { getTranslations } from 'next-intl/server'

// interface
interface IProps {
  // no props needed
}

// component
const HeaderComponent: FC<Readonly<IProps>> = async () => {
  const t = await getTranslations()

  // return
  return (
    <header className='border-b bg-white'>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-bold'>{t('Header.title')}</h1>
          
          <nav className='flex space-x-4'>
            <a href='/' className='text-gray-600 hover:text-gray-900'>
              {t('Header.home')}
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
