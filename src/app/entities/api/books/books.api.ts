export const booksApi = {
    getAll: async (searchQuery?: string) => {
        const url = new URL('/api/books', window.location.origin)
        if (searchQuery) {
            url.searchParams.set('search', searchQuery)
        }

        const response = await fetch(url.toString())
        if (!response.ok) {
            throw new Error('Failed to fetch books')
        }

        return await response.json()
    },

    getById: async (id: number) => {
        const response = await fetch(`/api/books/${id}`)
        if (!response.ok) {
            throw new Error('Failed to fetch book')
        }

        return await response.json()
    },
}
