<template>
    <div>
        <h1><i class="fa fa-braille"></i> Orders</h1>
        <order-list></order-list>
    </div>
</template>

<script>
    import OrderList from '../components/order/OrderList.vue'            
    export default {
        name: 'home',
        data() {
            return {
                orders: this.$store.state.orders
            }
        },
        components: {
            'order-list': OrderList
        }
    }
</script>