import { usersApi } from './users.api'

export const usersQuery = {
  getAll: () => ({
    queryKey: ['users', 'all'],
    queryFn: () => usersApi.getAll(),
  }),
  
  getById: (id: number) => ({
    queryKey: ['users', 'byId', id],
    queryFn: () => usersApi.getById(id),
  }),
}
