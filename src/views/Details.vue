<template>
    <product-details id="product-details" :product="product" :isAdding="true"></product-details>
</template>

<script>
    import ProductDetails from '@/components/product/ProductDetails'
    import {mapGetters} from "vuex";
    export default {
        computed: {
            product() {
                return this.productById(this.$route.params['id'])
            },
            ...mapGetters(['productById'])
        },
        components: {
            ProductDetails
        }
    }
</script>

<style>
    #product-details {
        max-width: 900px;
    }
</style>