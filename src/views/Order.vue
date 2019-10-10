<template>
    <b-container>
        <h1 class="title"><i class="fa fa-braille"></i> Orders</h1>
        <order-list></order-list>
    </b-container>
</template>

<script>
    import OrderList from '@/components/order/OrderList.vue'
    export default {
        name: 'home',
        data() {
            return {
                orders: this.$store.state.orders
            }
        },
        components: {
            OrderList
        }
    }
</script>