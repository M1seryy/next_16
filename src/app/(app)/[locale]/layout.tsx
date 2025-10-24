import '@/config/styles/global.css'
import { type FC, type ReactNode } from 'react'
import { type Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/pkg/libraries/locale'

import { notFound } from 'next/navigation'

// interface
interface IProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

// metadata
export const generateMetadata = async (_props?: IProps): Promise<Metadata> => {
  const title = 'New Project'
  const description = 'A new project with Next.js 16, Supabase, shadcn/ui, and Better Auth'
  const baseUrl = 'http://localhost:3000'

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

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)

  // return
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}

export default LocaleLayout

