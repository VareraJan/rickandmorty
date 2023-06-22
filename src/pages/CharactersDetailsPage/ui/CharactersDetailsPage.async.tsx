import { lazy } from 'react';

export const CharactersDetailsPageAsync = lazy(
    async () => await import('./CharactersDetailsPage'),
);
