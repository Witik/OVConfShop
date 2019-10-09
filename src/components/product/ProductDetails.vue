<template>
    <b-container>
        <b-row>
            <b-col>
                <img width="100%" :src="product.image" alt="">
            </b-col>
            <b-col cols="8">
                <h1>{{product.name}}</h1>
                <h4>{{product.manufacturer && product.manufacturer.name}}</h4>
                <p>{{product.description}}</p>
                <h3>${{product.price}}</h3>
                <product-button :product="product"></product-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import ProductButton from './ProductButton'

    export default {
        props: ['product'],
        components: {
            ProductButton
        }
    }
</script>