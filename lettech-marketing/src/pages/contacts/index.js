import {createRouteView} from "atomic-router-react";
import {currentRoute} from "./model";
import {ContactsPage} from "./Contacts";

export { ContactsPage } from './Contacts';

export const ContactsRoute = {
	view: createRouteView({route: currentRoute, view: ContactsPage}),
	route: currentRoute
}
