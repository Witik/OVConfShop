# OVConfShop

## Step 5: Admin CRUD & VeeValidate

### Setup validation

Install VeeValidate using `npm install vee-validate --save`
 
Create `src/vee-validate.js` to configure it
and globally register the `ValidationProvider` & `ValidationObserver` components.

Import it in `src/main.js`

> Tip: use the input components given in the [BootstrapVue example](https://codesandbox.io/s/validation-components-bootstrapvue-usdwv)

### Create CRUD views

Create an Admin view and the following child views
- Products
- Edit
- New

And add routing for these views

> Tip: share the form-component used in the `Edit` and `New` views

### Persist changes in Firestore

Bind the manufacturers collection to the store

Create firestore CRUD actions in `src/store/actions.js` using Vuexfire

## Documentation
 - [Vue](https://vuejs.org/v2/guide/)
 - [VueRouter](https://router.vuejs.org/guide/)
 - [BootstrapVue](https://bootstrap-vue.js.org/docs)
 - [Vuex](https://vuex.vuejs.org/guide/)
 - [Firestore](https://firebase.google.com/docs/firestore)
 - [Vuexfire](https://vuefire.vuejs.org/vuexfire/)
 - [VeeValidate](https://logaretm.github.io/vee-validate/guide/)
