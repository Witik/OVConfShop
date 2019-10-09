import Vue from 'vue'
import Vuex from 'vuex'
import {cartMutations} from "./mutations";
import {cartGetters, productGetters} from "./getters";
import {vuexfireMutations} from "vuexfire";
import {productActions} from "@/store/actions";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
        products: []
    },
    mutations: {
        ...cartMutations,
        ...vuexfireMutations
    },
    getters: {
        ...productGetters,
        ...cartGetters
    },
    actions: {
        ...productActions
    }
})
