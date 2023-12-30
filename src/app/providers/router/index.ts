import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'pages';

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash.length === 0) {
      return {
        top: 0,
        behavior: 'smooth',
      };
    }
    return {
      el: to.hash,
      behavior: 'smooth',
    };
  },
});
