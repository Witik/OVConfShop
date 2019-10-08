<template>
    <div class="md-layout md-alignment-center-top md-gutter">
        <template v-for="order in orders">
            <order-item :key="order.id" :order="order"></order-item>
        </template>
    </div>
</template>

<script>
    import OrderItem from './OrderItem.vue'

    export default {
        name: 'order-list',
        computed: {
            orders() {
                return this.$store.getters.allOrders
            }
        },
        components: {
            'order-item': OrderItem
        }
    }
</script>

