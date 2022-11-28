import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/',
    }),
    tagTypes: ['Tasks'],
    endpoints: builder => ({
        getTasks: builder.query({
            query: (uri) => uri,
            providesTags: ['Tasks']
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: '/tasks',
                method: 'POST',
                headers: { 
                    'content-type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(Object.entries(task)).toString(),
            }),
            invalidatesTags: ['Tasks']
        }),
        updateTaskCompletedStatus: builder.mutation({
            query: (task) => ({
                url: '/tasks',
                method: 'PATCH',
                body: task,
            }),
            invalidatesTags: ['Tasks']
        }),
        updateTaskName: builder.mutation({
            query: (task) => ({
                url: '/tasks/' + task.id,
                method: 'PUT',
                body: task, 
            }),
            invalidatesTags: ['Tasks']
        }),
        deleteTask: builder.mutation({
            query: (task) => ({
                url: '/tasks/' + task.id,
                method: 'DELETE',
                body: task
            }),
            invalidatesTags: ['Tasks']
        })
    })
});

export const {
    useGetTasksQuery,
    useAddTaskMutation,
    useUpdateTaskCompletedStatusMutation,
    useUpdateTaskNameMutation,
    useDeleteTaskMutation,
} = api; 