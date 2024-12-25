import {createRouteView} from "atomic-router-react";
import {currentRoute} from "./model";
import { ServicesPage } from "./Services";

export { ServicesPage } from './Services';

export const ServicesRoute = {
	view: createRouteView({route: currentRoute, view: ServicesPage}),
	route: currentRoute
}
