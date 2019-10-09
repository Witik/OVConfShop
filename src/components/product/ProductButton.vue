<template>
    <b-button v-if="isAdding" variant="primary" @click="addToCart">
        <i class="fa fa-cart-plus"></i> Add to Cart
    </b-button>
    <b-button v-else variant="danger" @click="removeFromCart(product.id)">
        <i class="fa fa-trash"></i> Remove from Cart
    </b-button>
</template>

<script>
    import {ADD_TO_CART, REMOVE_FROM_CART} from '@/store/mutation-types'
    import {mapGetters} from "vuex";

    export default {
        props: ['product'],
        computed: {
            isAdding() {
                return this.cart.indexOf(this.product) < 0
            },
            ...mapGetters(['cart'])
        },
        methods: {
            addToCart() {
                this.$store.commit(ADD_TO_CART, this.product)
            },
            removeFromCart(id) {
                this.$store.commit(REMOVE_FROM_CART, id)
            }
        }
    }
</script>