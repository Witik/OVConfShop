import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', redirect: '/home'},
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {path: '*', redirect: '/home'}
    ]
})
