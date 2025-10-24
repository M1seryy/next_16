import { auth } from '@/pkg/integrations/better-auth/auth.config'
import { NextRequest } from 'next/server'

export const GET = async (request: NextRequest) => {
    try {
        return await auth.handler(request)
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Auth GET failed' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}

export const POST = async (request: NextRequest) => {
    try {
        return await auth.handler(request)
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Auth POST failed' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}


