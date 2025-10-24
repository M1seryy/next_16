import { type Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { type FC, type ReactNode } from 'react'

import { LayoutModule } from '@/app/modules/layout'
import RestApiProvider from '@/pkg/libraries/rest-api/rest-api.provider'

import '@/config/styles/global.css'

// interface
interface IProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

// metadata
export const generateMetadata = async (_props?: IProps): Promise<Metadata> => {
  const title = 'Book store'
  const description = 'A new project with Next.js 16, Supabase, shadcn/ui, and Better Auth'
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    applicationName: title,
    openGraph: {
      title: {
        default: title,
        template: `%s | ${title}`,
      },
      description,
      siteName: title,
      type: 'website',
      url: baseUrl,
    },
  }
}

// component
const LocaleLayout: FC<Readonly<IProps>> = async (props) => {
  const { children, params } = props
  const { locale } = await params

  setRequestLocale(locale)

  // return
  return (
    <html lang={locale}>
      <body>
        <RestApiProvider>
          <NextIntlClientProvider>
            <LayoutModule>{children}</LayoutModule>
          </NextIntlClientProvider>
        </RestApiProvider>
      </body>
    </html>
  )
}

export default LocaleLayout
