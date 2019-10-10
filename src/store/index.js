import Vue from 'vue'
import Vuex from 'vuex'
import {cartMutations, orderMutations, productMutations} from "./mutations";
import {cartGetters, manufacturerGetters, orderGetters, productGetters} from "./getters";
import {vuexfireMutations} from "vuexfire";
import {manufacturerActions, orderActions, productActions} from "@/store/actions";
import {toastPlugin} from "./plugins";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
        products: [],
        manufacturers: [],
        orders: []
    },
    mutations: {
        ...cartMutations,
        ...productMutations,
        ...vuexfireMutations,
        ...orderMutations
    },
    getters: {
        ...productGetters,
        ...cartGetters,
        ...manufacturerGetters,
        ...orderGetters
    },
    actions: {
        ...productActions,
        ...manufacturerActions,
        ...orderActions
    },
    plugins: [toastPlugin]
})
