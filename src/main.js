import Vue from 'vue'
import VueMaterial from "vue-material/"
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './App.vue'
import router, {linkActiveClass} from './router'
import './validation'
import './firebase'
import store from './store'

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.material.router.linkActiveClass = linkActiveClass;

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        this.$store.dispatch('bindManufacturers');
        this.$store.dispatch('bindProducts');
    }
}).$mount('#app');
