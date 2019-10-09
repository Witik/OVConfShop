# OVConfShop

## Step 6: Toasts
### Define mutations

Create (NOOP) mutations for product CRUD actions

Add these mutations as result of the corresponding actions

Create a vuex plugin to listen to these mutation types and show a toast

> Tip: Use the following code snippet to access the BootstrapVue toast component
```javascript
if (!toast) {
    // Can't globally access toast component
    // Lazy load toast from a new Vue instance
    toast = new Vue().$bvToast;
}
```

## Documentation
 - [Vue](https://vuejs.org/v2/guide/)
 - [VueRouter](https://router.vuejs.org/guide/)
 - [BootstrapVue](https://bootstrap-vue.js.org/docs)
 - [Vuex](https://vuex.vuejs.org/guide/)
 - [Firestore](https://firebase.google.com/docs/firestore)
 - [Vuexfire](https://vuefire.vuejs.org/vuexfire/)
 - [VeeValidate](https://logaretm.github.io/vee-validate/guide/)
