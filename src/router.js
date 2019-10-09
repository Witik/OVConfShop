import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'
import Details from "@/views/Details.vue";
import Admin from "@/views/Admin.vue";
import Products from "@/views/admin/Products";
import Edit from "@/views/admin/Edit";
import New from "@/views/admin/New";

Vue.use(Router);

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
        {
            path: '/details/:id',
            name: 'Details',
            component: Details
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
            redirect: '/admin/products',
            children: [
                {
                    path: 'products',
                    component: Products,
                    name: 'AdminProducts'
                },
                {
                    path: 'edit/:id',
                    component: Edit,
                    name: 'AdminEdit'
                },
                {
                    path: 'new',
                    component: New,
                    name: 'AdminNew'
                }
            ]
        },
        {path: '*', redirect: '/home'}
    ]
})
