import { QueryFunctionContext } from '@tanstack/react-query'

import { restApiFetcher } from '@/pkg/libraries/rest-api'

import { type IBook } from '../../models/book.model'

export const booksQueryApi = async (opt: QueryFunctionContext, queryParams?: { search?: string }) => {
  const { search } = queryParams || {}

  const hasSearch = search && search.trim().length > 0
  const url = hasSearch ? `api/proxy/books?search=${encodeURIComponent(search.trim())}` : 'api/proxy/books'

  const res = await restApiFetcher
    .get<IBook[]>(url, {
      signal: opt.signal,
      cache: 'force-cache',
      next: { revalidate: 30 },
    })
    .json()

  if (!res) {
    throw new Error('Books not found')
  }

  return res
}
