import {createRouteView} from "atomic-router-react";
import {currentRoute} from "./model.ts";
import {ContactsPage} from "./page.tsx";

export { ContactsPage } from './page';

export const ContactsRoute = {
	view: createRouteView({route: currentRoute, view: ContactsPage}),
	route: currentRoute
}
