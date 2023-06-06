import { getRouteCharacters, getRouteEpisodes, getRouteLocations, getRouteMain } from "@/shared/const/router";
import { NavbarItemType } from "../types/navbar";

export const getNavbarItems = () => {
    const appLinks: NavbarItemType[] = [
        {
            text: "Главная",
            path: getRouteMain(),
        },
        {
            text: "Персонажи",
            path: getRouteCharacters(),
        },
        {
            text: "Локации",
            path: getRouteLocations(),
        },
        {
            text: "Эпизоды",
            path: getRouteEpisodes(),
        }
    ];
    
    return appLinks
}
