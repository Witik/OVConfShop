<template>
    <b-container>
        <div class="md-layout md-alignment-center-top md-gutter">
            <b-table hover @row-clicked="rowClicked" v-if="hasOrders" striped :items="orders" :fields="fields"
                     :busy="isBusy">
                <template v-slot:cell(totalPrice)="data">
                    ${{ data.item.totalPrice }}
                </template>
                <template v-slot:cell(orderDate)="data">
                    {{ data.item.orderDate.toDate() }}
                </template>
                <template v-slot:table-busy>
                    <div class="text-center text-danger my-2">
                        <b-spinner class="align-middle"></b-spinner>
                        <strong>Loading...</strong>
                    </div>
                </template>
            </b-table>
            <span v-else>No Orders :(</span>
        </div>
    </b-container>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "order-list",
        data() {
            return {
                fields: ["id", "orderDate", "totalPrice"],
            };
        },
        computed: {
            ...mapGetters(['orders']),
            isBusy() {
                return this.orders == null || (this.orders.length > 0 && this.orders.some(order => !order.totalPrice));
            },
            hasOrders() {
                return this.orders != null && this.orders.length > 0;
            }
        },
        methods: {
            rowClicked(item) {
                console.log('/order/' + item.id);
                this.$router.push('/order/' + item.id)
            }
        }
    };
</script>