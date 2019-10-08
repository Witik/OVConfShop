<template>
        <md-button v-if="isAdding" class="md-primary" @click="addToCart"><i class="fa fa-cart-plus"></i> Add to Cart</md-button>
        <md-button v-else class="md-accent" @click="removeFromCart(product.id)"><i class="fa fa-trash"></i> Remove from Cart</md-button>
</template>

<script>
    import {
        ADD_TO_CART,
        REMOVE_FROM_CART
    } from '../../store/mutation-types'
    export default {
        props: ['product'],        
        computed: {
            isAdding () {
                return this.cart.indexOf(this.product) < 0
            },
            cart() {
                return this.$store.state.cart;
            } 
        },
        methods: {
            addToCart () {
                this.$store.commit(ADD_TO_CART, this.product)
            },
            removeFromCart (id) {
                this.$store.commit(REMOVE_FROM_CART, id)
            }
        }
    }
</script>