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


export const orderGetters = {
    // All orders
    orders: (state) => {
        const ordersWithPrice = state.orders;
        ordersWithPrice.forEach((order) => {
            if (!order.products) {
                return;
            }
            order.totalPrice = order.products.reduce((sum, product) => sum + Number.parseFloat(product.price), 0);
        });
        return ordersWithPrice;
    },
    // Get Order by ID
    orderById: (state, getters) => id => {
        return getters.orders.find(p => p.id === id)
    },
};