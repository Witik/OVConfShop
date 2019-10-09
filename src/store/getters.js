export const productGetters = {
    // All product
    products: (state) => {
        return state.products
    },
    // Get Product by ID
    productById: (state, getters) => id => {
        return getters.products.find(p => p.id === id)
    },
};

export const cartGetters = {
    cart: (state) => {
        return state.cart
    },
};

export const manufacturerGetters = {
    manufacturers: (state) => state.manufacturers
};
