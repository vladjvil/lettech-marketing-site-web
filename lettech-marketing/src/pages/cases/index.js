import {createRouteView} from "atomic-router-react";
import {currentRoute} from "./model";
import {CasesPage} from "./Cases";

export { CasesPage } from './Cases';

export const CasesRoute = {
	view: createRouteView({route: currentRoute, view: CasesPage}),
	route: currentRoute,
}
