import { type FC } from 'react'
import { getTranslations } from 'next-intl/server'

// interface
interface IProps {}

// component
const FooterComponent: FC<Readonly<IProps>> = async () => {
  const t = await getTranslations()

  // return
  return (
    <footer className='border-t bg-gray-50'>
      <div className='container mx-auto px-4 py-6'>
        <div className='text-center text-gray-600'>
          <p>{t('Footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
