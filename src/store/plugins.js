import Vue from 'vue'
import {PRODUCT_ADD_SUCCESS, PRODUCT_REMOVE_SUCCESS, PRODUCT_UPDATE_SUCCESS} from "./mutation-types";

export function toastPlugin(store) {
    let toast;
    store.subscribe((mutation) => {
        if (!toast) {
            // Can't globally access toast component
            // Lazy load toast from a new Vue instance
            toast = new Vue().$bvToast;
        }
        switch (mutation.type) {
            case PRODUCT_ADD_SUCCESS:
                toast.toast('Product created.', {
                    title: 'Success!',
                    variant: 'success'
                });
                break;
            case PRODUCT_UPDATE_SUCCESS:
                toast.toast('Product updated.', {
                    title: 'Success!',
                    variant: 'success'
                });
                break;
            case PRODUCT_REMOVE_SUCCESS:
                toast.toast('Product deleted.', {
                    title: 'Deleted!',
                    variant: 'warning'
                });
                break;
        }
    })
}