import {createRouteView} from "atomic-router-react";
import {currentRoute} from "./model";
import {AboutPage} from "./About";

export { AboutPage } from './About';

export const AboutRoute = {
	view: createRouteView({route: currentRoute, view: AboutPage}),
	route: currentRoute,
}