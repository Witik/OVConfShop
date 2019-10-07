<template>
    <div class="row">
        <table class="table table-striped">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Manufacturer</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr :key="product.id" v-for="product in products">
                <th scope="row">{{product.name}}</th>
                <td>${{product.price}}</td>
                <td>{{product.manufacturer.name}}</td>
                <td><router-link :to="'/admin/edit/'+product.id"><i class="fa fa-pencil-square-o"></i></router-link></td>
                <td><a href="#" class="text-danger" @click="deleteProduct(product.id)" ><i class="fa fa-trash"></i></a></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        computed: {
            products () {
                return this.$store.getters.allProducts
            }
        },
        methods: {
            deleteProduct (id) {
                this.$store.dispatch('removeProduct', id)
            }
        }
    }
</script>