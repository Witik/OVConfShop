import {firestoreAction} from "vuexfire";
import db from '@/firebase/firestore'

export const productActions = {
    bindProducts: firestoreAction(({bindFirestoreRef}) => {
        return bindFirestoreRef('products', db.collection('products'))
    }),
};