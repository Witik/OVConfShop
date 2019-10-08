export const productGetters = {
    // All products
    allProducts: (state) => {
        return state.products
    },
    // Get Product by ID
    productById: (state, getters) => id => {
        if (getters.allProducts.length > 0) {
            return getters.allProducts.filter(p => p.id === id)[0]
        } else {
            return state.product
        }
    },
};

export const manufacturerGetters = {
    // All manufacturers
    allManufacturers: state => state.manufacturers
};

export const orderGetters = {
    // All orders
    allOrders: (state) => state.orders,
    // Get Product by ID
    orderById: (state, getters) => id => {        
        if (getters.allOrders.length > 0) {
            return getters.allOrders.filter(p => p.id === id)[0]
        } 
        //show error message: order not found?
    },
};