import {firestoreAction} from "vuexfire";
import {db} from "@/firebase/firestore";
import {PRODUCT_ADD_SUCCESS, PRODUCT_REMOVE_SUCCESS, PRODUCT_UPDATE_SUCCESS} from "@/store/mutation-types";

export const productActions = {
    bindProducts: firestoreAction(({bindFirestoreRef}) => {
        return bindFirestoreRef('products', db.collection('products'))
    }),
    addProduct: firestoreAction((context, product) => {
        return db.collection('products').add({
            ...product, manufacturer: db.collection('manufacturers').doc(product.manufacturer.id)
        }).then(() => context.commit(PRODUCT_ADD_SUCCESS));
    }),
    updateProduct: firestoreAction((context, product) => {
        return db.collection('products').doc(product.id).update({
            ...product, manufacturer: db.collection('manufacturers').doc(product.manufacturer.id)
        }).then(() => context.commit(PRODUCT_UPDATE_SUCCESS));
    }),
    removeProduct: firestoreAction((context, productId) => {
        return db.collection('products').doc(productId).delete()
            .then(() => context.commit(PRODUCT_REMOVE_SUCCESS));
    }),
};

export const manufacturerActions = {
    // All manufacturers
    bindManufacturers: firestoreAction(({bindFirestoreRef}) => {
        return bindFirestoreRef('manufacturers', db.collection('manufacturers'))
    })
};