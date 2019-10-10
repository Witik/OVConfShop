<template>
    <b-container>
        <div v-if="cart.length > 0">
            <h1><i class="fa fa-superpowers"></i> Your Cart</h1>
            <b-list-group>
                <b-list-group-item v-for="product in cart" :key="product.id">
                    <product-details :product="product"></product-details>
                </b-list-group-item>
            </b-list-group>
        </div>
        <div v-else>
            <h1><i class="fa fa-superpowers"></i> Your Cart is Empty</h1>
        </div>
    </b-container>
</template>

<script>
    import ProductDetails from '@/components/product/ProductDetails'
    import {mapGetters} from "vuex";

    export default {
        computed: {
            ...mapGetters(['cart'])
        },
        components: {
            productDetails: ProductDetails
        }
    }
</script>