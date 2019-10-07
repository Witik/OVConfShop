import Vue from "vue";
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import Cart from "@/components/Cart";
import Details from "@/components/Details";
import Admin from "@/components/admin/Admin";
import AdminNew from "@/components/admin/New";
import AdminProducts from "@/components/admin/Products";
import AdminEdit from "@/components/admin/Edit";

Vue.use(VueRouter);

export const linkActiveClass = 'link-active';
export default new VueRouter({
    mode: 'history',
    linkActiveClass: linkActiveClass,
    routes: [
        { path: '/', redirect: '/home'},
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
            redirect: '/admin/products',
            component: Admin,
            children: [
                {
                    path: 'new',
                    name: 'New',
                    component: AdminNew
                },
                {
                    path: 'products',
                    name: 'Products',
                    component: AdminProducts
                },
                {
                    path: 'edit/:id',
                    name: 'Edit',
                    component: AdminEdit
                }
            ]
        },
        { path: '*', redirect: '/home'}, // TODO 404?
    ]
})
