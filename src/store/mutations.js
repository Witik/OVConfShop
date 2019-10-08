import Vue from 'vue'
import {
    PRODUCT_ADD_SUCCESS,
    PRODUCT_REMOVE_SUCCESS,
    PRODUCT_UPDATE_SUCCESS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CREATE_ORDER_SUCCESS,
} from './mutation-types'
import router from '@/router'
//import VueRouter from 'vue-router';

export const productMutations = {
    [PRODUCT_ADD_SUCCESS]: () => {
    },
    [PRODUCT_REMOVE_SUCCESS]: () => {
    },
    [PRODUCT_UPDATE_SUCCESS]: () => {
    },
}

export const cartMutations = {
    [ADD_TO_CART]: (state, payload) => state.cart.push(payload),
    [REMOVE_FROM_CART]: (state, payload) => {
        const index = state.cart.findIndex(p => p.id === payload);
        state.cart.splice(index, 1)
    }
};

export const orderMutations = {
    //the order has been made. Empty the current cart.
    [CREATE_ORDER_SUCCESS]: (state, created) => {
        Vue.set(state,'cart',[]);
        router.push('order/details/'+created.id)
    }

};