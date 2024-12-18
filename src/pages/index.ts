import {createRoutesView} from "atomic-router-react";
import {AboutRoute} from "./about";
import {CasesRoute} from "./cases";
import {ContactsRoute} from "./contacts";
import {HomeRoute} from "./home";
import {JobsRoute} from "./jobs";
import {ServicesRoute} from "./services";
import {TechnologyRoute} from "./technology";

export const Pages = createRoutesView({
	routes: [AboutRoute, CasesRoute, ContactsRoute, HomeRoute, JobsRoute, ServicesRoute, TechnologyRoute]
})
