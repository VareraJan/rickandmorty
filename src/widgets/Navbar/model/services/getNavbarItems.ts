import { type NavbarItemType } from '../types/navbar';

import {
    getRouteCharacters,
    getRouteEpisodes,
    getRouteLocations,
    getRouteMain,
} from '@/shared/const/router';

export const getNavbarItems = () => {
    const appLinks: NavbarItemType[] = [
        {
            text: 'Главная',
            path: getRouteMain(),
        },
        {
            text: 'Персонажи',
            path: getRouteCharacters(),
        },
        {
            text: 'Локации',
            path: getRouteLocations(),
        },
        {
            text: 'Эпизоды',
            path: getRouteEpisodes(),
        },
    ];

    return appLinks;
};
