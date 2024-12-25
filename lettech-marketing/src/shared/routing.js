import { createHistoryRouter, createRoute, createRouterControls } from 'atomic-router';
import { sample } from "effector";
import { appStarted } from "./config/init";
import { createBrowserHistory } from "history";

export const routes = {
  home: createRoute(),
  about: createRoute(),
  services: createRoute(),
  technology: createRoute(),
  cases: createRoute(),
  jobs: createRoute(),
  contacts: createRoute(),
};

export const controls = createRouterControls();

export const router = createHistoryRouter({
  routes: [
    {
      path: '/',
      route: routes.home,
    },
    {
      path: '/about',
      route: routes.about,
    },
    {
      path: '/services',
      route: routes.services,
    },
    {
      path: '/technologies',
      route: routes.technology,
    },
    {
      path: '/cases',
      route: routes.cases,
    },
    {
      path: '/jobs',
      route: routes.jobs,
    },
    {
      path: '/contacts',
      route: routes.contacts,
    }
  ],
  controls,
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
});
