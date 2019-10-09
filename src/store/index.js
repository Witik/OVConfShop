import Vue from 'vue'
import Vuex from 'vuex'
import {cartMutations} from "./mutations";
import {cartGetters, productGetters} from "./getters";
import {vuexfireMutations} from "vuexfire";
import {manufacturerActions, productActions} from "@/store/actions";
import {manufacturerGetters} from "@/store/getters";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
        products: [],
        manufacturers: []
    },
    mutations: {
        ...cartMutations,
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
    }
})
