import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Main from 'views/Main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: Main
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
