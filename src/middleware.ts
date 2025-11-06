import { NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'

import { routing } from './pkg/libraries/locale'

const intlMiddleware = createIntlMiddleware(routing)

export default async function middleware(request: NextRequest) {
  return intlMiddleware(request)
}

export const config = {
  runtime: 'nodejs',
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
