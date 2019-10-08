<template>
    <div v-if="cart.length > 0">
        <div class="title">
            <h1><i class="fa fa-superpowers"></i> Your Cart</h1>
        </div>
        <ul class="list-group">
            <li class="list-group-item" v-for="product in cart" :key="product.id">
                <product-details :product="product"></product-details>
            </li>
        </ul>
        <!-- show the create order button if there is at least 1 product in the cart-->        
        <md-button class="md-primary" @click="createNewOrder"><i class="fa fa-credit-card"></i> Create new order</md-button>        
    </div>
    <div v-else class="title"><h1><i class="fa fa-superpowers"></i> Your Cart is Empty</h1></div>
</template>

<script>
    import ProductDetails from '../components/product/ProductDetails'

    export default {
        computed: {
            
        cart() {
            return this.$store.state.cart
            }
            
            
        },
        methods: {
            createNewOrder () {
                this.$store.dispatch('addOrder', this.cart)                
            },
        },        
        components: {
            productDetails: ProductDetails
        }
    }

    
</script>