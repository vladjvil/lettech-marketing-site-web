import {createRouteView} from "atomic-router-react";
import {currentRoute} from "./model.ts";
import {CasesPage} from "./page.tsx";

export { CasesPage } from './page';

export const CasesRoute = {
	view: createRouteView({route: currentRoute, view: CasesPage}),
	route: currentRoute,
}
