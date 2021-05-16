import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/index.vue'
import testRoutes from './test/index'
export const routes = [
    {
        path: '/',
        component: Layout,
        redirect: 'index',
        children: [
            {
                path: 'index',
                name: 'Index',
                component: () => import('../views/index/index.vue'),
                meta: {
                    title: '首页',
                    icon: 'home',
                    affix: true,
                },
            },
        ],
    },
]

export const router = createRouter({
    routes:[...routes,...testRoutes],
    history: createWebHistory()
})