import { NextRequest } from 'next/server'

import { auth } from '@/pkg/integrations/better-auth/auth.config'

export const GET = async (request: NextRequest) => {
  try {
    return await auth.handler(request)
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Auth GET failed', details: error instanceof Error ? error.message : 'Unknown error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}

export const POST = async (request: NextRequest) => {
  try {
    return await auth.handler(request)
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Auth POST failed', details: error instanceof Error ? error.message : 'Unknown error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
