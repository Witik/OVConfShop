<template>
    <b-card no-body class="product-card">
        <b-card-img :src="product.image"
                    top/>
        <b-card-body>
            <b-card-title>{{product.name}}</b-card-title>
            <b-card-sub-title v-if="product.manufacturer" class="mb-2">{{product.manufacturer.name}}</b-card-sub-title>
            <b-card-text>
                ${{product.price}}
            </b-card-text>
        </b-card-body>
        <b-card-footer>
            <b-button-group>
                <product-button :product="product"/>
                <b-button :to="'/details/'+product.id">Details</b-button>
            </b-button-group>
        </b-card-footer>
    </b-card>
</template>

<script>
    import ProductButton from './ProductButton.vue'
    export default {
        name: 'product-item',
        props: ['product'],
        components: {
            ProductButton
        }
    }
</script>

<style>
    .product-card {
        margin: 4px;
        max-width: 300px;
    }
</style>