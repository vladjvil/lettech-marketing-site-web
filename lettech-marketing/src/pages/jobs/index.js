import {createRouteView} from "atomic-router-react";
import {currentRoute} from "./model";
import {JobsPage} from "./Jobs";

export { JobsPage } from './Jobs';

export const JobsRoute = {
	view: createRouteView({route: currentRoute, view: JobsPage}),
	route: currentRoute
}
