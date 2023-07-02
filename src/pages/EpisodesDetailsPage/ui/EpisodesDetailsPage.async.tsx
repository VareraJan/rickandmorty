import { lazy } from 'react';

export const EpisodesDetailsPageAsync = lazy(
    async () => await import('./EpisodesDetailsPage'),
);
