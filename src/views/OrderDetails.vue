<template>
    <order-details :order="order"></order-details>
</template>

<script>
    import {mapGetters} from "vuex";
    import OrderDetails from "@/components/order/OrderDetails";

    export default {
        computed: {
            ...mapGetters(['orderById']),
            order() {
                return this.orderById(this.$route.params['id'])
            }
        },
        components: {
            OrderDetails
        }
    }
</script>