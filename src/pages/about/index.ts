import {createRouteView} from "atomic-router-react";
import {currentRoute} from "./model.ts";
import {AboutPage} from "./page.tsx";

export { AboutPage } from './page';


export const AboutRoute = {
	view: createRouteView({route: currentRoute, view: AboutPage}),
	route: currentRoute,
}
