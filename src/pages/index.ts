import {RouteRecordRaw} from "vue-router";
import Main from "./main.vue";
import Routing from "./index.vue";

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        component: Main
    },
    {
        path: '/briefing',
        name: 'briefing',
        component: () => import('./briefing.vue')
    }
];

export {Routing};