import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

export const router = new Router({
    mode: 'history',

    routes:[
        {
            path: '/',
            name: 'home',
            component: () => import('@/components/pages/Home'),
            meta:{
                title: 'PopTrip'
            }
        },
        {
          path: '/me',
          name: 'profile',
          component: () => import('@/components/pages/Profile')
        },
        {
            path: '/place/:id',
            name: 'place',
            component: () => import("@/components/pages/Place"),
        },
        {
            path: '/searchResult/:keyword',
            name: 'searchResult',
            component: () => import("@/components/pages/SearchResult")
        },
        {
            path: '/reviews',
            name: 'reviews',
            component: () => import("@/components/pages/Reviews")
        },
        {
            path: '/restaurants',
            name: 'restaurants',
            component: () => import("@/components/pages/Restaurants")
        },
        {
            path: '/hotels',
            name: 'hotels',
            component: () => import("@/components/pages/Hotels")
        },
        {
            path:'/login',
            name:'login',
            component: () => import('@/components/pages/Login')
        }
    ]

})