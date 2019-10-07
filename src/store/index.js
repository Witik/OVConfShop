import Vue from 'vue'
import Vuex from 'vuex'
import {vuexfireMutations} from 'vuexfire'
import {cartMutations, productMutations} from "@/store/mutations";
import {manufacturerGetters, productGetters} from "@/store/getters";
import {manufacturerActions, productActions} from "@/store/actions";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        // bought items
        cart: [],
        // selected product
        product: {},
        // all products
        products: [],
        // all manufacturers
        manufacturers: []
    },
    mutations: {
        ...productMutations,
        ...cartMutations,
        ...vuexfireMutations,
    },
    actions: {
        ...productActions,
        ...manufacturerActions
    },
    getters: {
        ...productGetters,
        ...manufacturerGetters
    }
})