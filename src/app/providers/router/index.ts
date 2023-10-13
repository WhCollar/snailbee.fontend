import {createRouter, createWebHistory} from "vue-router";
import {headerHeight} from "widgets/header";
import {routes} from "pages";

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        return {
            el: to.hash,
            behavior: 'smooth'
        };
    }
});