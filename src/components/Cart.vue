<template>
    <div v-if="cart.length > 0">
        <div class="title">
            <h1><i class="fa fa-superpowers"></i> Your Cart</h1>
        </div>
        <ul class="list-group">
            <li class="list-group-item" v-for="product in cart" :key="product.id">
                <product-details :product="product"></product-details>
            </li>
        </ul>
    </div>
    <div v-else class="title"><h1><i class="fa fa-superpowers"></i> Your Cart is Empty</h1></div>
</template>

<script>
    import ProductDetails from '../components/product/ProductDetails'

    export default {
        data() {
            return {
                cart: this.$store.state.cart
            }
        },
        components: {
            productDetails: ProductDetails
        }
    }
</script>