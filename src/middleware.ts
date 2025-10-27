import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

import { routing } from './pkg/libraries/locale'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/proxy/books')) {
    const path = request.nextUrl.pathname.replace('/api/proxy/books', '/api/books')

    const newUrl = new URL(path, request.url)

    newUrl.search = request.nextUrl.search

    console.log('Middleware Proxy: Forwarding request from', request.nextUrl.pathname, 'to', newUrl.pathname)

    return NextResponse.rewrite(newUrl)
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
}
