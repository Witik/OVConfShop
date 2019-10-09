<template>
    <b-card-group deck class="justify-content-around">
        <template v-for="product in products">
            <product-item :key="product.id" :product="product"></product-item>
        </template>
    </b-card-group>
</template>

<script>
    import ProductItem from './ProductItem.vue'
    import {mapGetters} from "vuex";

    export default {
        name: 'product-list',
        computed: {
            ...mapGetters(['products'])
        },
        components: {
            ProductItem
        }
    }
</script>