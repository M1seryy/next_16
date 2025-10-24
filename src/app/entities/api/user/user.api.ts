import { QueryFunctionContext } from '@tanstack/react-query'

import { IUser } from '../../models/user.model'
import { restApiFetcher } from '@/pkg/libraries/rest-api'

export const userQueryApi = async (opt: QueryFunctionContext): Promise<IUser> => {
    const res = await restApiFetcher
        .get<IUser>('api/user', {
            signal: opt.signal,
            cache: 'force-cache',
            next: { revalidate: 30 },
        })
        .json()

    if (!res) {
        throw new Error('User not found')
    }

    return res
}
