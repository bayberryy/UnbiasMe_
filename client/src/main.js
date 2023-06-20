import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'

import App from '@/App.vue';
import IatPage from '@/views/iatPage.vue'
import SignupPage from '@/views/signupPage.vue'
import SigninPage from '@/views/signinPage.vue'
import HomePage from '@/views/homePage.vue'
import RecommendationPage from '@/views/recommendationPage.vue'

const routes = [
    {
        path: '/',
        name: 'App',
        component: App
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/iat',
        name: 'IatPage',
        component: IatPage,
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/signup',
        name: 'SignupPage',
        component: SignupPage
    },
    {
        path: '/signin',
        name: 'SigninPage',
        component: SigninPage
    },
    {
        path: '/recommendation',
        name: 'RecommendationPage',
        component: RecommendationPage,
        meta: {
            requiredAuth: true
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach( async (to, from, next) => {
    if (to.matched.some((route) => route.meta.requiredAuth)) {
        try {
            const response = await axios.get('/api/auth')
            if (response.data.authenticated) {
                next()
            }
        } catch (error) {
            next({
                path: '/signin',
                query: {error: 'Please authenticate'}
            })

        }
    } else {
        next()
    }
})


createApp(App)
    .use(router)
    .mount('#app');
