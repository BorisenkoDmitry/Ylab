import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { AuthApi } from '../services/auth'

const rootReducer = combineReducers({
    [AuthApi.reducerPath]: AuthApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(AuthApi.middleware)
    })
}


export type Rootstate = ReturnType<typeof rootReducer>;
export type Appstore = ReturnType<typeof setupStore>;
export type AppDispatch = Appstore['dispatch']