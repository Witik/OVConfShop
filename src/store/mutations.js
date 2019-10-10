import Vue from 'vue'
import router from "@/router";
import {
    ADD_TO_CART,
    PRODUCT_ADD_SUCCESS,
    PRODUCT_REMOVE_SUCCESS,
    PRODUCT_UPDATE_SUCCESS,
    REMOVE_FROM_CART
} from "./mutation-types";
import {CREATE_ORDER_SUCCESS} from "@/store/mutation-types";

export const cartMutations = {
    [ADD_TO_CART]: (state, payload) => state.cart.push(payload),
    [REMOVE_FROM_CART]: (state, payload) => {
        const index = state.cart.findIndex(p => p.id === payload);
        state.cart.splice(index, 1)
    }
};

export const productMutations = {
    [PRODUCT_ADD_SUCCESS]: () => {
    },
    [PRODUCT_REMOVE_SUCCESS]: () => {
    },
    [PRODUCT_UPDATE_SUCCESS]: () => {
    },
};

export const orderMutations = {
    //the order has been made. Empty the current cart.
    [CREATE_ORDER_SUCCESS]: (state, created) => {
        Vue.set(state, 'cart', []);
        router.push('order/details/' + created.id)
    }
};