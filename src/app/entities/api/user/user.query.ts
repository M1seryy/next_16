import { useQuery } from '@tanstack/react-query'

import { userQueryApi } from './user.api'
import { type IUser } from '../../models/user.model'

// Query keys
export const userQueryKeys = {
    all: ['user'],
    current: () => [...userQueryKeys.all, 'current'],
}

// Hooks
export const useUserQuery = () => {
    return useQuery<IUser>({
        queryKey: userQueryKeys.current(),
        queryFn: userQueryApi,
        retry: false,
    })
}
