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
        }
    ]

})