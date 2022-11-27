import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/',
    }),
    tagTypes: ['Task'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: (uri) => uri
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: '/tasks',
                method: 'POST',
                headers: { 
                    'content-type': 'application/x-www-form-urlencoded'
                 },
                body: 'test'
            })
        })
    })
});

export const {
    useGetTasksQuery,
    useAddTaskMutation,
} = api; 