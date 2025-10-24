import { auth } from '@/pkg/integrations/better-auth/auth.config'
import { NextRequest } from 'next/server'

export const GET = async (request: NextRequest) => {
    try {
        console.log('Auth GET request:', request.url)
        return await auth.handler(request)
    } catch (error) {
        console.error('Auth GET error:', error)
        return new Response(JSON.stringify({ error: 'Auth GET failed', details: error instanceof Error ? error.message : 'Unknown error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}

export const POST = async (request: NextRequest) => {
    try {
        console.log('Auth POST request:', request.url)
        return await auth.handler(request)
    } catch (error) {
        console.error('Auth POST error:', error)
        return new Response(JSON.stringify({ error: 'Auth POST failed', details: error instanceof Error ? error.message : 'Unknown error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}


