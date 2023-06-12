import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ServerResponse } from '../types/charactersPageShema';




export const fetchCharactersList = createAsyncThunk<
ServerResponse,
unknown,
ThunkConfig<string>
>(
    'charactersPage/fetchCharactersList',
    async (_, thunkApi) => {
        const {extra, rejectWithValue, } = thunkApi
        try {
            
            const response = await extra.api.get<ServerResponse>('/character')

            if (!response.data) {
                throw new Error();
            }

            return response.data
        } catch (error) {
            return rejectWithValue('error')
        }
    }
)