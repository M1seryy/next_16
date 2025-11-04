import { QueryFunctionContext } from '@tanstack/react-query'

import { restApiFetcher } from '@/pkg/libraries/rest-api'

import { type IBook } from '../../models/book.model'

// interface
interface IProps {
    id: number
}

// component
export const slugBookQueryApi = async (
    opt: QueryFunctionContext,
    params: Readonly<IProps>
) => {
    const { id } = params

    if (typeof id !== 'number' || isNaN(id)) {
        throw new Error('Invalid or missing book id')
    }

    const res = await restApiFetcher
        .get<IBook>(`api/slugBook?id=${id}`, {
            signal: opt.signal,
            cache: 'force-cache',
            next: { revalidate: 30 },
        })
        .json()

    if (!res) {
        throw new Error('Book not found')
    }

    return res
}
