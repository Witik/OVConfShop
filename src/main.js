import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './vee-validate'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        this.$store.dispatch('bindProducts');
        this.$store.dispatch('bindManufacturers');
        this.$store.dispatch('bindOrders');
    }
}).$mount('#app');
