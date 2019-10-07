<template>
    <div class="md-layout md-alignment-center-top md-gutter">
        <template v-for="product in products">
            <product-item :key="product.id" :product="product"></product-item>
        </template>
    </div>
</template>

<script>
    import ProductItem from './ProductItem.vue'

    export default {
        name: 'product-list',
        computed: {
            products() {
                return this.$store.getters.allProducts
            }
        },
        components: {
            'product-item': ProductItem
        }
    }
</script>