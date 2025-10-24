import ky, { type KyInstance } from 'ky'

// fetcher
const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
}

export const restApiFetcher: KyInstance = ky.create({
  prefixUrl: getBaseUrl(),
  credentials: 'include',
  throwHttpErrors: false,
  hooks: {
    beforeRequest: [
      (request) => {
        if (typeof window === 'undefined' && request.url.startsWith('/')) {
          const fullUrl = new URL(request.url, getBaseUrl()).toString()
          return new Request(fullUrl, request)
        }
        return request
      },
    ],
    afterResponse: [
      (request, options, response) => {
        return response
      },
    ],
  },
})
