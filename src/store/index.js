import Vue from 'vue'
import Vuex from 'vuex'
import {vuexfireMutations} from 'vuexfire'
import {cartMutations, productMutations, orderMutations} from "@/store/mutations";
import {manufacturerGetters, productGetters, orderGetters} from "@/store/getters";
import {manufacturerActions, productActions, orderActions} from "@/store/actions";

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
        manufacturers: [],
        // all orders
        orders: []
    },
    mutations: {
        ...productMutations,
        ...cartMutations,
        ...vuexfireMutations,
        ...orderMutations
    },
    actions: {
        ...productActions,
        ...manufacturerActions,
        ...orderActions
    },
    getters: {
        ...productGetters,
        ...manufacturerGetters,
        ...orderGetters
    }
})