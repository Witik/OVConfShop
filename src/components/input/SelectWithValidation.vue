<template>
    <ValidationProvider
            ref="validator"
            :vid="vid"
            :name="$attrs.name"
            :rules="rules"
            v-slot="{ valid, errors }">
        <b-form-group v-bind="$attrs">
            <b-form-select
                    v-bind="$attrs"
                    :state="errors[0] ? false : (valid ? true : null)"
                    v-model="innerValue">
                <slot/>
            </b-form-select>
            <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
        </b-form-group>
    </ValidationProvider>
</template>


<script>
    export default {
        props: {
            vid: {
                type: String
            },
            rules: {
                type: [Object, String],
                default: ""
            },
            // must be included in props
            value: {
                type: null
            }
        },
        data: () => ({
            innerValue: ""
        }),
        watch: {
            // Handles internal model changes.
            innerValue(newVal) {
                this.$emit("input", newVal);
            },
            // Handles external model changes.
            value(newVal) {
                this.innerValue = newVal;
            }
        },
        created() {
            if (this.value) {
                this.innerValue = this.value;
            }
        }
    };
</script>