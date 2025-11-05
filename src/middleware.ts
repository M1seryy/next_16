import { NextRequest, NextResponse } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'

import { auth } from './pkg/integrations/better-auth/auth.config'
import { routing } from './pkg/libraries/locale'

const intlMiddleware = createIntlMiddleware(routing)

const publicRoutePaths = ['/signin', '/signup']

const isPublicRoute = (pathname: string): boolean => {
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/') || '/'

  return publicRoutePaths.some((route) => pathWithoutLocale.startsWith(route))
}

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (isPublicRoute(pathname) || pathname.startsWith('/api/')) {
    return intlMiddleware(request)
  }

  // Check authentication
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    })

    if (!session) {
      const localeMatch = pathname.match(/^\/([a-z]{2})(\/|$)/)
      const locale = localeMatch ? localeMatch[1] : routing.defaultLocale

      const url = request.nextUrl.clone()
      url.pathname = `/${locale}/signin`
      url.searchParams.set('redirect', pathname)
      return NextResponse.redirect(url)
    }

    return intlMiddleware(request)
  } catch (error) {
    // Log error for debugging
    console.error('[Middleware] Auth check error:', error)


    return intlMiddleware(request)
  }
}

export const config = {
  runtime: 'nodejs',
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
