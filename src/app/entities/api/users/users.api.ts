import { db } from '@/pkg/integrations/supabase'
import { users } from '@/pkg/integrations/supabase/schemas'
import { eq } from 'drizzle-orm'

export const usersApi = {
  getAll: async () => {
    return await db.select().from(users)
  },
  
  getById: async (id: number) => {
    const result = await db.select().from(users).where(eq(users.id, id))
    return result[0]
  },
  
  create: async (data: { name: string; email: string }) => {
    const result = await db.insert(users).values(data).returning()
    return result[0]
  },
  
  update: async (id: number, data: { name?: string; email?: string }) => {
    const result = await db.update(users).set(data).where(eq(users.id, id)).returning()
    return result[0]
  },
  
  delete: async (id: number) => {
    const result = await db.delete(users).where(eq(users.id, id)).returning()
    return result[0]
  }
}
