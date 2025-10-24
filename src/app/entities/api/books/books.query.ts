import { useQuery } from '@tanstack/react-query'

import { booksQueryApi } from './books.api'

// Query keys
export const booksQueryKeys = {
  all: ['books'],
  search: (searchQuery?: string) => [...booksQueryKeys.all, 'search', searchQuery],
}

// Hooks
export const useBooksQuery = (searchQuery?: string) => {
  return useQuery({
    queryKey: booksQueryKeys.search(searchQuery),
    queryFn: (opt) => booksQueryApi(opt, { search: searchQuery }),
  })
}
