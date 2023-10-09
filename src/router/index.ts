import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Main from 'views/main.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/briefing',
    name: 'briefing',
    component: () => import('views/briefing.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
