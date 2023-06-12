import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL
    }),
    tagTypes: ['Characters'],
    endpoints: (builder) => ({})
})