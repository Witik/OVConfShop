<template>
    <div class="md-layout">
        <div v-if="order" class="md-layout-item">
            <div class="md-header">
                <p class="md-title">{{order.id}}</p>
                <p class="md-subheading"></p>                
            </div>
            <md-divider/>
            <div>
            <div class="md-layout md-alignment-center-top md-gutter">
                <template v-for="product in order.products">
                    <product-item :key="product.id" :product="product"></product-item>
                </template>
            </div>
            </div>
        </div>
        <div v-else>no order</div>
    </div>
</template>

<script>    
    import ProductItem from '@/components/product/ProductItem.vue' 
    export default {        
        computed: {
            order() {
                return this.$store.getters.orderById(this.$route.params['id'])
            }
        },
        components: {
            ProductItem
        }
    }
    
</script>