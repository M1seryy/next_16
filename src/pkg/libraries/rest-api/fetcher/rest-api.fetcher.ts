import ky, { type KyInstance } from 'ky'

// fetcher
export const restApiFetcher: KyInstance = ky.create({
    prefixUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    credentials: 'include',
    throwHttpErrors: false,
    hooks: {
        beforeRequest: [
            (request) => {
                if (typeof window === 'undefined' && request.url.startsWith('/')) {
                    const fullUrl = new URL(request.url, process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000').toString()
                    return new Request(fullUrl, request)
                }
                return request
            }
        ],
        afterResponse: [
            (request, options, response) => {
                return response
            }
        ]
    }
})
