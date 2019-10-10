# OVConfShop

## Step 7: Admin login
### Firebase setup
Go to your project in the [firebase console](console.firebase.google.com) and enable Email/Password sign-in under authentication.

Add a new Email/Password user and copy the User UID

Go to your Firestore database and edit the rules to be:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth.uid == 'User UID copied in the previous step';
    }
  }
}
```
> This rule prevents changes to the database by users other than the newly created one

### Vue setup
Create `src/firebase/auth.js` which imports the `firebase/auth` module and exports `firebase.auth()` as a constant

Create a `Login` view which [redirects](https://router.vuejs.org/guide/essentials/navigation.html#router-replace-location-oncomplete-onabort) the user on successful login

Create a sign-out button on the NavBar
> You can use `auth.currentUser` to check if the user is logged in

Add a `requiresAuth` [meta tag](https://router.vuejs.org/guide/advanced/meta.html) to the `Admin` routes

Add a [global router navigation guard](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards)
that checks if the user is logged in before accessing routes with the `requiresAuth` property
and otherwise redirects the user to the Login view

## Documentation
 - [Vue](https://vuejs.org/v2/guide/)
 - [VueRouter](https://router.vuejs.org/guide/)
 - [BootstrapVue](https://bootstrap-vue.js.org/docs)
 - [Vuex](https://vuex.vuejs.org/guide/)
 - [Firestore](https://firebase.google.com/docs/firestore)
 - [Vuexfire](https://vuefire.vuejs.org/vuexfire/)
 - [VeeValidate](https://logaretm.github.io/vee-validate/guide/)
 - [Firebase Auth](https://firebase.google.com/docs/auth/web/password-auth)
