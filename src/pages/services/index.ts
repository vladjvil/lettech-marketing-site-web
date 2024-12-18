import {createRouteView} from "atomic-router-react";
import {currentRoute} from "./model.ts";
import {ServicesPage} from "./page.tsx";

export { ServicesPage } from './page';

export const ServicesRoute = {
	view: createRouteView({route: currentRoute, view: ServicesPage}),
	route: currentRoute
}
