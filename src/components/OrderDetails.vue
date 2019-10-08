<template>
    <order-details id="order-details" :order="order"></order-details>
</template>

<script>
    import OrderDetails from '../components/order/OrderDetails'

    export default {
        computed: {
            order() {
                return this.$store.getters.orderById(this.$route.params['id'])
            }
        },
        components: {
            'order-details': OrderDetails
        }
    }
</script>

<style>
    #product-details {
        max-width: 800px;
    }
</style>