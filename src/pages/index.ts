import { RouteRecordRaw } from 'vue-router';
import { RouterEnum } from 'shared/model/router';
import Routing from './index.vue';
import Main from './main.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouterEnum.Main,
    component: Main,
  },
  {
    path: '/briefing',
    name: RouterEnum.Briefing,
    component: () => import('./briefing.vue'),
  },
  {
    path: '/projects',
    name: RouterEnum.Projects,
    component: () => import('./projects.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: RouterEnum.NotFound,
    component: () => import('./not.found.vue'),
  },
];

export { Routing };
