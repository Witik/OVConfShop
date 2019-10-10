<template>
    <b-container>
        <b-row v-if="order">
            <b-col>
                <h2>{{order.id}}</h2>
            </b-col>
            <b-col>
                <table class="table striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tr v-for="product in order.products" :key="product.id">
                        <td>{{product.name}}</td>
                        <td>{{product.price}}</td>
                    </tr>
                </table>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'order-details',
        props: ['order']
    }
</script>