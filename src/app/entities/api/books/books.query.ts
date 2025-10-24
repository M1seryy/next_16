import { useQuery } from '@tanstack/react-query'
import { booksApi } from './books.api'

// Query keys
export const booksKeys = {
    all: ['books'] as const,
    lists: () => [...booksKeys.all, 'list'] as const,
    list: (searchQuery?: string) => [...booksKeys.lists(), { searchQuery }] as const,
    details: () => [...booksKeys.all, 'detail'] as const,
    detail: (id: number) => [...booksKeys.details(), id] as const,
}

// Hooks
export const useBooksQuery = (searchQuery?: string) => {
    return useQuery({
        queryKey: booksKeys.list(searchQuery),
        queryFn: () => booksApi.getAll(searchQuery),
    })
}

export const useBookQuery = (id: number) => {
    return useQuery({
        queryKey: booksKeys.detail(id),
        queryFn: () => booksApi.getById(id),
        enabled: !!id,
    })
}
