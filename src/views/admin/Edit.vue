<template>
    <product-form
            @save-product="updateProduct"
            :model="model"
            :manufacturers="manufacturers"
            :isEditing="true"></product-form>
</template>

<script>
    import ProductFrom from '@/components/product/ProductForm.vue'
    import {mapGetters} from "vuex";

    export default {
        computed: {
            ...mapGetters(['productById', 'manufacturers']),
            model() {
                // clone
                const productById = this.productById(this.$route.params['id']);
                return {...productById}
            }
        },
        methods: {
            updateProduct(model) {
                this.$store.dispatch('updateProduct', {...model, id: this.$route.params['id']})
            }
        },
        components: {
            'product-form': ProductFrom
        }
    }
</script>