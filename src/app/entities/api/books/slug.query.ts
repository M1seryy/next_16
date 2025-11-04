import { useQuery } from '@tanstack/react-query'

import { slugBookQueryApi } from './slug.api'

// Query keys
export const booksQueryKeys = {
    all: ['id'],
    search: (id?: number) => [...booksQueryKeys.all, 'id', id],
}

// Hooks
export const useSlugQuery = (id?: number) => {
    return useQuery({
        enabled: typeof id === 'number' && Number.isFinite(id) && id > 0,
        queryKey: booksQueryKeys.search(id),
        queryFn: (opt) => slugBookQueryApi(opt, { id: id as number }),
    })
}
