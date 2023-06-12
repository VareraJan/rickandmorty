import { Character } from "@/entities/Character/model/types/character";

export interface CharactersPageSchema {
    isLoading?: boolean;
    error?: string;
    characters?: Character[],
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface ServerResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    },
    results: Character[];
}