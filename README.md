# OVConfShop

## Step 4: Firestore & Vuex
Install vuexfire using `npm install --save vuexfire`

Add `vuexfireMutations` to the vuex store mutations

Add a store action in `src/store/actions.js` to bind the firebase products collection to the `products` store variable 

Replace the initial products state with an empty array

Dispatch the bind products action when the Vue app is created

For now you can add manufacturers using
```javascript
const appleRef = db.collection('manufacturers').doc().set({
    name: 'Apple'
})
```
And products using
```javascript
db.collection('products').doc().set({
    name: 'Macbook pro',
    price: '2599',
    image: 'https://cnet3.cbsistatic.com/img/yjrw7VgWV7a95AvK8Ym0Np4bFXY=/1200x675/2017/06/27/13484418-bfd9-41e2-8f2d-9b4afb072da8/apple-macbook-pro-15-inch-2017-14.jpg',
    description: 'Lorem ipsum dolor amet mumblecore forage mlkshk, sriracha master cleanse four dollar toast photo booth hot chicken banjo humblebrag food truck mixtape lumbersexual skateboard neutra. Banh mi craft beer artisan, cold-pressed jean shorts wayfarers austin letterpress hell of woke hot chicken fixie. Food truck helvetica fixie intelligentsia +1 gochujang heirloom af skateboard brooklyn cornhole man bun adaptogen offal roof party. Pabst tofu roof party iPhone everyday carry, put a bird on it coloring book prism snackwave truffaut poutine edison bulb tilde squid health goth. Lumbersexual helvetica authentic listicle deep v blog neutra pitchfork narwhal butcher lyft. Banh mi poke blog cardigan craft beer you probably haven\'t heard of them offal stumptown plaid kale chips hexagon man braid tilde deep v.',
    manufacturer: appleRef
})
```

## Documentation
 - [Vue](https://vuejs.org/v2/guide/)
 - [VueRouter](https://router.vuejs.org/guide/)
 - [BootstrapVue](https://bootstrap-vue.js.org/docs)
 - [Vuex](https://vuex.vuejs.org/guide/)
 - [Firestore](https://firebase.google.com/docs/firestore)
 - [Vuexfire](https://vuefire.vuejs.org/vuexfire/)
