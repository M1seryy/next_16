// Books API functions
export const booksApi = {
    getAll: async (searchQuery?: string) => {
        const url = searchQuery
            ? `/api/books?search=${encodeURIComponent(searchQuery)}`
            : '/api/books'

        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Failed to fetch books')
        }
        return response.json()
    },

    getById: async (id: number) => {
        const response = await fetch(`/api/books/${id}`)
        if (!response.ok) {
            throw new Error('Failed to fetch book')
        }
        return response.json()
    }
}
