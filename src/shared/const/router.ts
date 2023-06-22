export enum AppRoutes {
    MAIN = 'main',
    CHARACTERS = 'characters',
    CHARACTERS_DETAIL = 'characters_detail',
    LOCATIONS = 'locations',
    LOCATIONS_DETAIL = 'locations_detail',
    EPISODES = 'episodes',
    EPISODES_DETAIL = 'episodes_detail',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteCharacters = () => '/characters';
export const getRouteCharactersDetails = (id: string) => `/characters/${id}`;
export const getRouteLocations = () => '/locations';
export const getRouteLocationsDetails = (id: string) => `/locations/${id}`;
export const getRouteEpisodes = () => '/episodes';
export const getRouteEpisodesDetails = (id: string) => `/episodes/${id}`;
