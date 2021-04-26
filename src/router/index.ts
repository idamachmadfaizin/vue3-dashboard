import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import TheContainer from '../containers/TheContainer.vue'
import Dashboard from '../views/Dashboard.vue';
import Home from '../views/Home.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Base',
        redirect: '/dashboard',
        component: TheContainer,
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: Dashboard,
            },
            {
                path: 'home',
                name: 'Home',
                component: Home,
            }
        ]
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
})