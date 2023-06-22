import { lazy } from 'react';

export const EpisodesPageAsync = lazy(
    async () => await import('./EpisodesPage'),
);
