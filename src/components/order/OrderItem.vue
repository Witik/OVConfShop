<template>
    <b-card no-body class="order-card">
        <b-card-body>
            <b-card-title>{{order.id}}</b-card-title>
            <b-card-text>
                ${{order.totalPrice || '?'}}
            </b-card-text>
        </b-card-body>
        <b-card-footer class="align-bottom">
            <b-button :to="'order/details/'+order.id">Invoice</b-button>
        </b-card-footer>
    </b-card>
</template>

<script>
    export default {
        name: 'order-item',
        props: ['order']
    }
</script>

<style>
    .order-card {
        margin: 4px;
        max-width: 240px;
    }
</style>