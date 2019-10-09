import {firestoreAction} from "vuexfire";
import db from '@/firebase/firestore'

export const productActions = {
    bindProducts: firestoreAction(({bindFirestoreRef}) => {
        return bindFirestoreRef('products', db.collection('products'))
    }),
    addProduct: firestoreAction((context, product) => {
        return db.collection('products').add({
            ...product, manufacturer: db.collection('manufacturers').doc(product.manufacturer.id)
        });
    }),
    updateProduct: firestoreAction((context, product) => {
        return db.collection('products').doc(product.id).update({
            ...product, manufacturer: db.collection('manufacturers').doc(product.manufacturer.id)
        });
    }),
    removeProduct: firestoreAction((context, productId) => {
        return db.collection('products').doc(productId).delete();
    })
};

export const manufacturerActions = {
    bindManufacturers: firestoreAction(({bindFirestoreRef}) => {
        return bindFirestoreRef('manufacturers', db.collection('manufacturers'))
    }),
};