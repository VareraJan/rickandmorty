import { configureStore } from '@reduxjs/toolkit'


const rootReducers = {

}

export const store = configureStore({
  reducer: rootReducers,
  devTools: process.env.REACT_APP_IS_DEV === 'true',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch