import {createRouteView} from "atomic-router-react";
import {currentRoute} from "./model";
import {TechnologyPage} from "./Technology";

export { TechnologyPage } from './Technology';

export const TechnologyRoute = {
	view: createRouteView({route: currentRoute, view: TechnologyPage}),
	route: currentRoute
}
