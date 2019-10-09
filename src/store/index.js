import Vue from 'vue'
import Vuex from 'vuex'
import {cartMutations, productMutations} from "./mutations";
import {cartGetters, manufacturerGetters, productGetters} from "./getters";
import {vuexfireMutations} from "vuexfire";
import {manufacturerActions, productActions} from "@/store/actions";
import {toastPlugin} from "./plugins";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
        products: [],
        manufacturers: []
    },
    mutations: {
        ...cartMutations,
        ...productMutations,
        ...vuexfireMutations
    },
    getters: {
        ...productGetters,
        ...cartGetters,
        ...manufacturerGetters
    },
    actions: {
        ...productActions,
        ...manufacturerActions
    },
    plugins: [toastPlugin]
})
