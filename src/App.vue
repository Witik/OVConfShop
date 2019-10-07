<template>
    <div id="app">
        <nav-bar/>
        <md-content>
            <div class="md-layout md-alignment-center-center">
                <router-view/>
            </div>
        </md-content>
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar";
    import toastr from 'toastr'
    import {PRODUCT_ADD_SUCCESS, PRODUCT_REMOVE_SUCCESS, PRODUCT_UPDATE_SUCCESS} from "@/store/mutation-types";

    export default {
        name: 'app',
        created() {
            // Subscriptions for mutation
            this.$store.subscribe((mutation) => {
                switch (mutation.type) {
                    case PRODUCT_ADD_SUCCESS:
                        toastr.success('Product created.', 'Success!');
                        break;
                    case PRODUCT_UPDATE_SUCCESS:
                        toastr.success('Product updated.', 'Success!');
                        break;
                    case PRODUCT_REMOVE_SUCCESS:
                        toastr.warning('Product deleted.', 'Deleted!');
                        break;
                }
            })
        },
        components: {
            'nav-bar': Navbar
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .title {
        text-align: center;
    }
</style>
