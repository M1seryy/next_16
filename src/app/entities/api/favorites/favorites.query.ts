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

export function useToggleFavoriteMutation() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (payload: { bookId: number; isFavorite: boolean }) => {
            if (payload.isFavorite) return removeFavorite(payload.bookId)
            return addFavorite(payload.bookId)
        },
        onMutate: async (payload: { bookId: number; isFavorite: boolean }) => {
            await queryClient.cancelQueries({ queryKey: favoritesKeys.all })
            const previous = queryClient.getQueryData<FavoriteBook[]>(favoritesKeys.all) ?? []
            const optimistic = payload.isFavorite
                ? previous.filter((b) => b.id !== payload.bookId)
                : [...previous, { id: payload.bookId } as FavoriteBook]
            queryClient.setQueryData(favoritesKeys.all, optimistic)
            return { previous }
        },
        onError: (_err, _vars, ctx) => {
            if (ctx?.previous) queryClient.setQueryData(favoritesKeys.all, ctx.previous)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: favoritesKeys.all })
        },
    })
}


