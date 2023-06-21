import { type RouteProps } from "react-router-dom";

import { CharactersDetailsPage } from "@/pages/CharactersDetailsPage";
import { CharactersPage } from "@/pages/CharactersPage";
import { EpisodesDetailsPage } from "@/pages/EpisodesDetailsPage";
import { EpisodesPage } from "@/pages/EpisodesPage";
import { LocationsDetailsPage } from "@/pages/LocationsDetailsPage";
import { LocationsPage } from "@/pages/LocationsPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
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
