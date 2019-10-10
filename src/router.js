import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'
import Details from "@/views/Details.vue";
import Admin from "@/views/Admin.vue";
import Products from "@/views/admin/Products";
import Edit from "@/views/admin/Edit";
import New from "@/views/admin/New";
import Login from "@/views/Login";
import auth from "@/firebase/auth";
import Order from "@/views/Order";
import OrderDetails from "@/views/OrderDetails";

Vue.use(Router);

const router = new Router({
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
            path: '/orders',
            name: 'Order',
            component: Order
        },
        {
            path: '/order/:id',
            name: 'OrderDetails',
            component: OrderDetails
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
            meta: {
                requiresAuth: true
            },
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
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {path: '*', redirect: '/home'}
    ]
});

router.beforeEach((to, from, next) => {
    const currentUser = auth.currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) {
        next({path: 'login', query: {redirect: to.path}});
    } else {
        next();
    }
});

export default router
