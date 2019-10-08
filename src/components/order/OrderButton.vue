<template>
        <b-button v-if="isAdding" variant="primary" @click="createNewOrder"><i class="fa fa-credit-card"></i> Create new order</b-button>        
</template>

<script>
    import {
        CREATE_ORDER
    } from '../../store/mutation-types'
    export default {
        // props: ['product'],        
        computed: {
            isAdding () {
                return this.cart.length > 0
            },
            cart() {
                return this.$store.state.cart;
            } 
        },
        methods: {
            addToCart () {
                this.$store.commit(CREATE_ORDER, this.cart)
            },            
        }
    }
</script>