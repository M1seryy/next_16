import createMiddleware from 'next-intl/middleware'

import { routing } from './pkg/libraries/locale'

const middleware = createMiddleware(routing)

export default middleware

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}
