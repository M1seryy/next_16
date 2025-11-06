import { restApiFetcher } from '@/pkg/libraries/rest-api'

export type FavoriteBook = {
    id: number
    title: string
    author: string
    publishedYear: number
    description?: string
    createdAt: string
    updatedAt: string
}

export async function fetchFavorites(): Promise<FavoriteBook[]> {
    const response = await restApiFetcher.get('api/favorites')

    if (!response.ok) {
        return []
    }

    const data = await response.json<FavoriteBook[]>()

    return Array.isArray(data) ? data : []
}

export async function addFavorite(bookId: number): Promise<{ ok: true }> {
    return await restApiFetcher.post('api/favorites', { json: { bookId } }).json<{ ok: true }>()
}

export async function removeFavorite(bookId: number): Promise<{ ok: true }> {
    return await restApiFetcher.delete(`api/favorites?bookId=${bookId}`).json<{ ok: true }>()
}


