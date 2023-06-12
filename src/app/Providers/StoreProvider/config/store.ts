import { charactersPageReducer } from '@/pages/CharactersPage'
import { $api } from '@/shared/api/api'
import { rtkApi } from '@/shared/api/rtkApi'
import { CombinedState, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'


const rootReducers: ReducersMapObject<StateSchema> = {
  [rtkApi.reducerPath]: rtkApi.reducer,
  characters: charactersPageReducer,
}

export const store = configureStore({
  // @ts-ignore
  reducer: rootReducers as Reducer<CombinedState<StateSchema>>,
  devTools: process.env.REACT_APP_IS_DEV === 'true'? true : false,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api
        }
      }
    }).concat(rtkApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch