import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';

const routes = [
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/', redirect: '/login' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    // Check if the user is authenticated, e.g., by checking a token in local storage
    const isAuthenticated = true; /* write3 logic later.*/

    if (to.path !== '/login' && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router;