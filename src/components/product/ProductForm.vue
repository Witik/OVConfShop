<template>
    <ValidationObserver slim v-slot="{ passes }">
        <b-form @submit.prevent="passes(saveProduct)">
            <b-form-row>
                <b-col cols="7">
                    <TextInputWithValidation
                            rules="required"
                            type="text"
                            label="Name"
                            name="name"
                            v-model="model.name"
                            placeholder="Name"/>
                    <TextInputWithValidation
                            rules="required"
                            type="number"
                            label="Price"
                            name="price"
                            v-model="model.price"
                            placeholder="Price"/>
                    <SelectWithValidation
                            rules="required"
                            label="Manufacturer"
                            name="manufacturer"
                            v-model="model.manufacturer"
                            placeholder="Manufacturer">
                        <option
                                v-for="manufacturer in manufacturers"
                                v-bind:key="manufacturer.id"
                                v-bind:value="manufacturer"
                                :selected="model.manufacturer && model.manufacturer.id === manufacturer.id">
                            {{ manufacturer.name }}
                        </option>
                    </SelectWithValidation>
                </b-col>
                <b-col cols="5">
                    <TextInputWithValidation
                            rules="required|url"
                            type="text"
                            label="Image"
                            name="image"
                            v-model="model.image"
                            placeholder="Image"/>
                    <TextAreaInputWithValidation
                            rules="required"
                            label="Description"
                            name="description"
                            v-model="model.description"
                            placeholder="Description"/>
                    <b-form-group>
                        <b-button variant="primary" type="submit">
                            <i class="fa fa-pencil"></i>
                            <span v-if="isEditing">Update Product</span>
                            <span v-else>Add Product</span>
                        </b-button>
                    </b-form-group>
                </b-col>
            </b-form-row>
        </b-form>
    </ValidationObserver>
</template>

<script>
    import TextInputWithValidation from "@/components/input/TextInputWithValidation";
    import SelectWithValidation from "@/components/input/SelectWithValidation";
    import TextAreaInputWithValidation from "@/components/input/TextAreaInputWithValidation";

    export default {
        props: ['model', 'isEditing', 'manufacturers'],
        components: {
            TextInputWithValidation,
            SelectWithValidation,
            TextAreaInputWithValidation
        },
        methods: {
            saveProduct() {
                this.$emit('save-product', this.model)
            }
        }
    }
</script>