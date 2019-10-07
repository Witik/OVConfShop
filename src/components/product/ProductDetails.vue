<template>
    <div class="md-layout">
        <div class="md-layout-item">
            <img :src="product.image" alt="">
        </div>
        <div class="md-layout-item">
            <div class="md-header">
                <p class="md-title">{{product.name}}</p>
                <p class="md-subheading">${{product.price}}</p>
                <span class="md-caption">{{product.manufacturer && product.manufacturer.name}}</span>
                <p>{{product.description}}</p>
            </div>
            <md-divider/>
            <div>
                <product-button :product="product"></product-button>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductButton from './ProductButton'

    export default {
        props: ['product'],
        components: {
            'product-button': ProductButton
        }
    }
</script>