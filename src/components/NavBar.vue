<template>
    <b-navbar type="dark" variant="dark" toggleable="md">
        <b-navbar-brand to="/">
            <img width="30" height="30" alt="Vue logo" src="../assets/logo.png">
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"/>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/home">Home</b-nav-item>
                <b-nav-item to="/orders">Orders</b-nav-item>
                <b-nav-item to="/admin">Admin</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/cart">
                    <i class="fa fa-shopping-cart"></i> Cart ({{itemsInCart}})
                </b-nav-item>
                <b-nav-dropdown v-if="user" :text="user.email">
                    <b-dropdown-item @click="logout">Logout</b-dropdown-item>
                </b-nav-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    import {mapGetters} from "vuex";
    import auth from "@/firebase/auth";

    export default {
        name: 'nav-bar',
        computed: {
            ...mapGetters(['cart']),
            itemsInCart() {
                return this.cart.length;
            }
        },
        data() {
            return {
                user: null
            }
        },
        methods: {
            logout() {
                auth.signOut().then(() => {
                    if (this.$route.matched.some(record => record.meta.requiresAuth)) {
                        this.$router.push('/');
                    }
                })
            }
        },
        created() {
            auth.onAuthStateChanged(user => {
                this.user = user;
            })
        }
    }
</script>