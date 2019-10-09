<template>
    <b-container>
        <h1>Available Products</h1>
        <product-list />
    </b-container>
</template>

<script>
    import ProductList from "@/components/product/ProductList";

    export default {
        name: 'home',
        components: {
            ProductList
        }
    }
</script>
