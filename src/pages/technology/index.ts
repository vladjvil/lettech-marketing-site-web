import {createRouteView} from "atomic-router-react";
import {currentRoute} from "./model.ts";
import {TechnologyPage} from "./page.tsx";

export { TechnologyPage } from './page';

export const TechnologyRoute = {
	view: createRouteView({route: currentRoute, view: TechnologyPage}),
	route: currentRoute
}
