import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { envServer } from '@/config/env'

import * as schema from './schemas'

const connectionString = envServer.DATABASE_URL!

const client = postgres(connectionString)
export const db = drizzle(client, { schema })
