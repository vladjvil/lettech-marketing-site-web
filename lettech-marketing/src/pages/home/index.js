import { createRouteView } from "atomic-router-react";
import { currentRoute } from "./model";
import { HomePage } from "./Home";

export const HomeRoute = {
	view: createRouteView({route: currentRoute, view: HomePage}),
	route: currentRoute
};