import {createRouteView} from "atomic-router-react";
import {currentRoute} from "./model.ts";
import {HomePage} from "./page.tsx";

export { HomePage } from './page';

export const HomeRoute = {
	view: createRouteView({route: currentRoute, view: HomePage}),
	route: currentRoute
}
