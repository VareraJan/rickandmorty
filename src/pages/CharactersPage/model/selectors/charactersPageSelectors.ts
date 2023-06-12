import { StateSchema } from "@/app/Providers/StoreProvider";

export const getCharactersPageIsLoading = (state: StateSchema) => state.characters.isLoading
export const getCharactersPageError = (state: StateSchema) => state.characters.error
export const getCharactersPageData = (state: StateSchema) => state.characters.characters
export const getCharactersPageNext = (state: StateSchema) => state.characters.next
export const getCharactersPagePrev = (state: StateSchema) => state.characters.prev
export const getCharactersPageCout = (state: StateSchema) => state.characters.count
export const getCharactersPagePages = (state: StateSchema) => state.characters.pages