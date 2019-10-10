# OVConfShop

## Step 8: Placing and viewing orders
Add a list of orders to your vuex store

An order should contain the following properties:
- Order Date (use [firestore Timestamp](https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp))
- A list of products (use references)

Bind the store variable to Firebase and create the corresponding getter

Create an action to insert an order in firebase
> Tip: This should be done in the same way as products

Create a button on the cart page to place your order

Create a View to show all available orders

Show the total price of each order

Create a View to show details of a specific order

Redirect to the order details view when it's placed

At this moment you can only submit orders when logged in, to fix this change the Firestore [rules](https://firebase.google.com/docs/firestore/security/get-started) to:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /orders/{order} {
      allow read,create: if true;
      allow update,delete: if false;
    }

    match /{document=**} {
      allow read: if true;
      allow write: if request.auth.uid == 'KzHcfwBPITME2578XnPsj8SCy7g1';
    }
  }
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
 - [Firebase Auth](https://firebase.google.com/docs/auth/web/password-auth)
