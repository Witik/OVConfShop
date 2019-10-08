<template>
    <md-card class="order-area">        
        <md-card-header>
            <!-- <div class="md-title">{{order.orderDate}}</div>
            <div class="md-subhead">{{order.invoiceId}}</div> -->
        </md-card-header>
        <md-card-content>
            ${{order.totalPrice}}
        </md-card-content>
        <md-card-actions class="align-bottom">            
            <md-button :to="'order/details/'+order.id">Invoice</md-button>
        </md-card-actions>
    </md-card>
</template>

<script>    

    export default {
        name: 'order-item',
        props: ['order'],
        // components: {
        //     'order-button': OrderButton
        // }
    }
</script>

<style>
    .order-area {
        margin: 4px;
    }
</style>