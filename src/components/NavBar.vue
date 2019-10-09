<template>
    <b-navbar type="dark" variant="dark" toggleable="md">
        <b-navbar-brand to="/">
            <img width="30" height="30" alt="Vue logo" src="../assets/logo.png">
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"/>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/home">Home</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/cart">
                    <i class="fa fa-shopping-cart"></i> Cart
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: 'nav-bar'
    }
</script>