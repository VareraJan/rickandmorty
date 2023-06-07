import {
  AppRoutes,
  getRouteCharacters,
  getRouteCharactersDetails,
  getRouteEpisodes,
  getRouteEpisodesDetails,
  getRouteLocations,
  getRouteLocationsDetails,
  getRouteMain,
} from "@/shared/const/router";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { CharactersPage } from "@/pages/CharactersPage";
import { CharactersDetailsPage } from "@/pages/CharactersDetailsPage";
import { MainPage } from "@/pages/MainPage";
import { EpisodesPage } from "@/pages/EpisodesPage";
import { LocationsPage } from "@/pages/LocationsPage";
import { EpisodesDetailsPage } from "@/pages/EpisodesDetailsPage";
import { LocationsDetailsPage } from "@/pages/LocationsDetailsPage";
import { RouteProps } from "react-router-dom";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.CHARACTERS]: {
    path: getRouteCharacters(),
    element: <CharactersPage />,
  },
  [AppRoutes.CHARACTERS_DETAIL]: {
    path: getRouteCharactersDetails(":id"),
    element: <CharactersDetailsPage />,
  },
  [AppRoutes.EPISODES]: {
    path: getRouteEpisodes(),
    element: <EpisodesPage />,
  },
  [AppRoutes.EPISODES_DETAIL]: {
    path: getRouteEpisodesDetails(":id"),
    element: <EpisodesDetailsPage />,
  },
  [AppRoutes.LOCATIONS]: {
    path: getRouteLocations(),
    element: <LocationsPage />,
  },
  [AppRoutes.LOCATIONS_DETAIL]: {
    path: getRouteLocationsDetails(":id"),
    element: <LocationsDetailsPage />,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: "*",
    element: <NotFoundPage />,
  },
};
