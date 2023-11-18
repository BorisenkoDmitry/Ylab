'use client'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAuth } from '../models/Auth';


export const AuthApi = createApi({
    reducerPath: 'AuthApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5004'}),
    tagTypes: ['Auth'],
    endpoints: (build) => ({
        getAuth: build.query<IAuth[], void>({
            query: () => ({
                url: "/auth"
            }),
            providesTags: () => ['Auth']
        }),
        getOneAuth: build.query<IAuth, number>({
            query: (id) => ({
                url: `/auth/${id}`
            }),
            providesTags: () => ['Auth']
        })
    })
})


export const {useGetAuthQuery, useGetOneAuthQuery} = AuthApi;