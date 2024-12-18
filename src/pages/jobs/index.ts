import {createRouteView} from "atomic-router-react";
import {currentRoute} from "./model.ts";
import {JobsPage} from "./page.tsx";

export { JobsPage } from './page';

export const JobsRoute = {
	view: createRouteView({route: currentRoute, view: JobsPage}),
	route: currentRoute
}
