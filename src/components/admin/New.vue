<template>
    <product-form
            @save-product="addProduct"
            :model="model"
            :manufacturers="manufacturers">
    </product-form>
</template>

<script>
    import ProductFrom from '../product/ProductForm'
    export default {
        data () {
            return {
                model: {}
            }
        },
        computed: {
            manufacturers() {
                return this.$store.state.manufacturers
            }
        },
        methods: {
            addProduct (model) {
                this.$store.dispatch('addProduct', model)
            }
        },
        components: {
            'product-form': ProductFrom
        }
    }
</script>