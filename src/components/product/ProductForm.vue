<template>
    <ValidationObserver slim v-slot="{ passes }">
        <form @submit.prevent="passes(saveProduct)">
            <div class="form-row">
                <div class="col-7">
                    <ValidationProvider
                            name="name"
                            rules="required"
                            v-slot="{ errors }"
                            tag="div"
                            class="form-group">
                        <label for="productName">Name</label>
                        <input
                                type="text"
                                class="form-control"
                                placeholder="Name"
                                v-model="model.name"
                                id="productName"
                                :class="{ 'error': errors && errors.length>0 }"/>
                        <span class="small form-text text-danger"> {{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                            name="price"
                            rules="required"
                            v-slot="{ errors }"
                            tag="div"
                            class="form-group">
                        <label>Price</label>
                        <input
                                type="number"
                                class="form-control"
                                placeholder="Price"
                                v-model="model.price"
                                name="price"
                                :class="{ 'error': errors && errors.length>0 }"/>
                        <span class="small form-text text-danger"> {{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                            name="manufacturer"
                            rules="required"
                            v-slot="{ errors }"
                            tag="div"
                            class="form-group">
                        <label>Manufacturer</label>
                        <select
                                type="text"
                                class="form-control"
                                v-model="model.manufacturer"
                                name="manufacturer"
                                :class="{ 'error': errors && errors.length>0 }">
                            <option
                                    v-for="manufacturer in manufacturers"
                                    v-bind:key="manufacturer.id"
                                    v-bind:value="manufacturer"
                                    :selected="model.manufacturer && model.manufacturer.id === manufacturer.id">
                                {{ manufacturer.name }}
                            </option>
                        </select>
                        <span class="small form-text text-danger"> {{ errors[0] }}</span>
                    </ValidationProvider>
                </div>
                <div class="col-5">
                    <ValidationProvider
                            name="image"
                            tag="div"
                            class="form-group"
                            rules="required|url"
                            v-slot="{ errors }">
                        <label>Image</label>
                        <input
                                type="text"
                                class="form-control"
                                placeholder="Image"
                                v-model="model.image"
                                name="image"
                                :class="{ 'error': errors && errors.length>0 }"/>
                        <span class="small form-text text-danger"> {{ errors[0] }}</span>
                    </ValidationProvider>
                    <ValidationProvider
                            name="description"
                            tag="div"
                            class="form-group"
                            rules="required"
                            v-slot="{ errors }">
                        <label>Description</label>
                        <textarea
                                type="number"
                                class="form-control"
                                placeholder="Description"
                                rows="5"
                                v-model="model.description"
                                name="description"
                                :class="{ 'error': errors && errors.length>0 }"></textarea>
                        <span class="small form-text text-danger"> {{ errors[0] }}</span>
                    </ValidationProvider>
                    <div class="form-group new-button">
                        <button class="btn btn-primary">
                            <i class="fa fa-pencil"></i>
                            <span v-if="isEditing">Update Product</span>
                            <span v-else>Add Product</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </ValidationObserver>
</template>

<script>
    import {ValidationObserver, ValidationProvider} from "vee-validate";

    export default {
        props: ['model', 'isEditing', 'manufacturers'],
        components: {
            ValidationObserver,
            ValidationProvider
        },
        methods: {
            saveProduct() {
                this.$emit('save-product', this.model)
            }
        }
    }
</script>