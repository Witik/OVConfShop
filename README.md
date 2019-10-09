# OVConfShop

## Step 3: Firebase & Firestore
### Setting up firebase
Login to the [firebase console](https://console.firebase.google.com) and create a new project

Create a new Firestore database in test mode

Add a web app without hosting on the Project Overview and save the `firebaseConfig`

### Adding firebase to the app
Run `npm install --save firebase`

Create a `src/firebase/index.js` file
and initialise firebase using `firebaseConfig`

Create `src/firebase/firestore` and export `firebase.firestore()`

Import `./firebase` in `main.js` 

> You can now test your database connection by importing `@/firebase/firestore`
> and calling its methods

## Documentation
 - [Vue](https://vuejs.org/v2/guide/)
 - [VueRouter](https://router.vuejs.org/guide/)
 - [BootstrapVue](https://bootstrap-vue.js.org/docs)
 - [Vuex](https://vuex.vuejs.org/guide/)
 - [Firestore](https://firebase.google.com/docs/firestore)
