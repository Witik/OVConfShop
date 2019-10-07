<template>
    <md-card class="product-card">
        <md-card-media>
            <img :src="product.image" alt="">
        </md-card-media>
        <md-card-header>
            <div class="md-title">{{product.name}}</div>
            <div class="md-subhead">{{product.manufacturer.name}}</div>
        </md-card-header>
        <md-card-content>
            ${{product.price}}
        </md-card-content>
        <md-card-actions class="align-bottom">
            <product-button :product="product"/>
            <md-button :to="'/details/'+product.id">Details</md-button>
        </md-card-actions>
    </md-card>
</template>

<script>
    import ProductButton from './ProductButton.vue'

    export default {
        name: 'product-item',
        props: ['product'],
        components: {
            'product-button': ProductButton
        }
    }
</script>

<style>
    .product-card {
        margin: 4px;
    }
</style>