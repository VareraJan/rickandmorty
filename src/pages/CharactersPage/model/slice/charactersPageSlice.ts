import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { fetchCharactersList } from '../services/fetchCharactersList'
import { CharactersPageSchema, ServerResponse } from '../types/charactersPageShema'

const initialState: CharactersPageSchema = {
    isLoading: false,
    error: undefined,
    characters: [],
    count: 0,
    pages: 0,
    next: null,
    prev: null,
}

const charactersPageSlice = createSlice({
    name: 'charactersPageSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharactersList.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchCharactersList.fulfilled, (state, action: PayloadAction<ServerResponse>) => {
                state.isLoading = false
                state.characters = action.payload.results
                state.count = action.payload.info.count
                state.pages = action.payload.info.pages
                state.next = action.payload.info.next
                state.prev = action.payload.info.prev
            })
            .addCase(fetchCharactersList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: charactersPageAction, reducer: charactersPageReducer } = charactersPageSlice;