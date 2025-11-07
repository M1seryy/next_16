import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { addFavorite, fetchFavorites, removeFavorite, type FavoriteBook } from './favorites.api'

export const favoritesKeys = {
    all: ['favorites'] as const,
    byUser: (userId?: string) => ['favorites', userId ?? 'anon'] as const,
}

export function useFavoritesQuery(options?: { enabled?: boolean; userId?: string }) {
    return useQuery<FavoriteBook[]>({
        queryKey: favoritesKeys.byUser(options?.userId),
        queryFn: fetchFavorites,
        enabled: options?.enabled,
        refetchOnMount: 'always',
    })
}

export function useToggleFavoriteMutation(userId?: string) {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (payload: { bookId: number; isFavorite: boolean }) => {
            if (payload.isFavorite) return removeFavorite(payload.bookId)
            return addFavorite(payload.bookId)
        },
        onMutate: async (payload: { bookId: number; isFavorite: boolean }) => {
            const queryKey = favoritesKeys.byUser(userId)
            await queryClient.cancelQueries({ queryKey })
            const previous = queryClient.getQueryData<FavoriteBook[]>(queryKey) ?? []
            const optimistic = payload.isFavorite
                ? previous.filter((b) => Number(b.id) !== Number(payload.bookId))
                : [...previous, { id: payload.bookId } as FavoriteBook]
            queryClient.setQueryData(queryKey, optimistic)
            return { previous, queryKey }
        },
        onError: (_err, _vars, ctx) => {
            if (ctx?.previous && ctx?.queryKey) {
                queryClient.setQueryData(ctx.queryKey, ctx.previous)
            }
        },
        onSettled: () => {
            if (userId) {
                queryClient.invalidateQueries({ queryKey: favoritesKeys.byUser(userId) })
            }
        },
    })
}


