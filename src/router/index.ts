// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

// route components (you can lazy-load them, see below)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
        meta: { title: 'Home' }
    },
    {
        path: '/quiz',
        name: 'quiz',
        component: () => import('@/views/QuizView.vue'),
        meta: { title: 'Quiz' }
    },
    // { path: '/about', name: 'about', component: () => import('@/views/AboutView.vue') },
    // // dynamic route with param
    // { path: '/user/:id', name: 'user', component: UserView, props: true },
    // catch-all 404
    // { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(), // or createWebHashHistory()
    routes,
})
router.beforeEach((to, from, next) => {
    // example: block access to /about unless allowed
    const isAllowed = true // replace with real auth logic
    if (to.name === 'about' && !isAllowed) {
        return next({ name: 'home' })
    }
    next()
})


export default router
