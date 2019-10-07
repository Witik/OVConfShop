<template>
    <div>
        <h1><i class="fa fa-braille"></i> In Stock</h1>
        <product-list></product-list>
    </div>
</template>

<script>
    import ProductList from '../components/product/ProductList.vue'

    export default {
        name: 'home',
        components: {
            'product-list': ProductList
        }
    }
</script>