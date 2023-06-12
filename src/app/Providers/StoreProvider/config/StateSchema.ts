import { AxiosInstance } from 'axios';
import {Dispatch} from '@reduxjs/toolkit'
import { CharactersPageSchema } from '@/pages/CharactersPage';
import { rtkApi } from '@/shared/api/rtkApi';


export interface StateSchema {
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,
    characters: CharactersPageSchema,
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    dispatch?: Dispatch;
    state: StateSchema;
}