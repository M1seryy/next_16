import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import createIntlMiddleware from 'next-intl/middleware'
import { hasLocale } from 'next-intl'

import { auth } from './pkg/integrations/better-auth/auth.config'
import { routing } from './pkg/libraries/locale'


export const intlMiddleware = createIntlMiddleware(routing)

const cookie_locale = 'lcoale'


const getLocaleFromRequest = (request: NextRequest): string => {
  const cookieLocale = request.cookies.get(cookie_locale)?.value

  if (cookieLocale && hasLocale(routing.locales, cookieLocale)) {
    return cookieLocale
  }

  return routing.defaultLocale
}

export default async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  const pathname = request.nextUrl.pathname
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/') || '/'

  if (!session) {
    if (pathWithoutLocale.startsWith('/signin') || pathWithoutLocale.startsWith('/signup')) {
      return intlMiddleware(request)
    }

    const locale = getLocaleFromRequest(request)
    const signinPath = `/${locale}/signin`

    const url = new URL(signinPath, request.url)
    if (!pathWithoutLocale.startsWith('/signin')) {
      url.searchParams.set('redirect', pathname)
    }

    return NextResponse.redirect(url)
  }

  const response = intlMiddleware(request)


  if (pathWithoutLocale.startsWith('/signin') || pathWithoutLocale.startsWith('/signup')) {
    const locale = getLocaleFromRequest(request)
    const homePath = locale === routing.defaultLocale ? '/' : `/${locale}`

    return NextResponse.redirect(new URL(homePath, request.url))
  }

  // return
  return response
}


export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*|.*/signin|.*/signup).*)'],
}
