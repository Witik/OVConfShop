<template>
    <product-details id="product-details" :product="product" :isAdding="true"></product-details>
</template>

<script>
    import ProductDetails from '../components/product/ProductDetails'

    export default {
        computed: {
            product() {
                return this.$store.getters.productById(this.$route.params['id'])
            }
        },
        components: {
            'product-details': ProductDetails
        }
    }
</script>

<style>
    #product-details {
        max-width: 800px;
    }
</style>