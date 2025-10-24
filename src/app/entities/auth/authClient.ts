'use client'

import { createAuthClient } from 'better-auth/client'

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
}

export const authClient = createAuthClient({
  baseURL: getBaseUrl(),
  fetchOptions: {
    credentials: 'include',
  },
})
