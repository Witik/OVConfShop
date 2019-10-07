import {
    PRODUCT_ADD_SUCCESS,
    PRODUCT_REMOVE_SUCCESS,
    PRODUCT_UPDATE_SUCCESS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
} from './mutation-types'

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
