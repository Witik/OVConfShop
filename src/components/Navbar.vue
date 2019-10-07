<template>
    <md-toolbar class="md-primary">
        <router-link to="/" class="navbar-brand"><img width="30" height="30" alt="Vue logo" src="../assets/logo.png">
        </router-link>
        <md-button class="nav-item nav-link" to="/home">Home</md-button>
        <md-button class="nav-item nav-link" to="/admin">Admin</md-button>
        <md-button class="nav-item nav-link" to="/cart">
            <i class="fa fa-shopping-cart"></i> Cart ({{cartItemsCount}})
        </md-button>
    </md-toolbar>
</template>

<script>
    export default {
        data() {
            return {
                cartItems: this.$store.state.cart
            }
        },
        computed: {
            cartItemsCount() {
                // Cart count
                return this.cartItems.length
            }
        }
    }
</script>