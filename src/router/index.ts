import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export enum RouteName {
    BASE = 'Base',
    DASHBOARD = 'Dashboard',
    HOME = 'Home',
}
export function GetRouteName(): string[] {
    return Object.values(RouteName);
}

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: RouteName.BASE,
        redirect: '/dashboard',
        component: () => import('../containers/TheContainer.vue'),
        children: [
            {
                path: 'dashboard',
                name: RouteName.DASHBOARD,
                component: () => import('../views/Dashboard.vue'),
            },
            {
                path: 'home',
                name: RouteName.HOME,
                component: () => import('../views/Home.vue'),
            }
        ]
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active'
})