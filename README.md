# OVConfShop

## Step 2: Vuex Store
### Create the store
Add the Vuex store dependency using `vue add vuex`

Move `src/store.js` to `src/store` and rename to `index.js`

Add the following initial state, we will load the products in dynamically later
```
{
    cart: [],
    products: [
        {
            id: '0',
            name: 'Macbook pro',
            price: '2599',
            image: 'https://cnet3.cbsistatic.com/img/yjrw7VgWV7a95AvK8Ym0Np4bFXY=/1200x675/2017/06/27/13484418-bfd9-41e2-8f2d-9b4afb072da8/apple-macbook-pro-15-inch-2017-14.jpg',
            description: 'Lorem ipsum dolor amet mumblecore forage mlkshk, sriracha master cleanse four dollar toast photo booth hot chicken banjo humblebrag food truck mixtape lumbersexual skateboard neutra. Banh mi craft beer artisan, cold-pressed jean shorts wayfarers austin letterpress hell of woke hot chicken fixie. Food truck helvetica fixie intelligentsia +1 gochujang heirloom af skateboard brooklyn cornhole man bun adaptogen offal roof party. Pabst tofu roof party iPhone everyday carry, put a bird on it coloring book prism snackwave truffaut poutine edison bulb tilde squid health goth. Lumbersexual helvetica authentic listicle deep v blog neutra pitchfork narwhal butcher lyft. Banh mi poke blog cardigan craft beer you probably haven\'t heard of them offal stumptown plaid kale chips hexagon man braid tilde deep v.',
            manufacturer: {
                id: '0',
                name: 'Apple'
            }
        },
        {
            id: '1',
            name: 'XPS 15',
            price: '1499',
            image: 'https://assets.pcmag.com/media/images/569925-tried-and-true-design.jpg',
            description: 'Your bones don\'t break, mine do. That\'s clear. Your cells react to bacteria and viruses differently than mine. You don\'t get sick, I do. That\'s also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We\'re on the same curve, just on opposite ends.',
            manufacturer: {
                id: '1',
                name: 'Dell'
            }
        }
    ]
}
```

Add `src/store/getters.js` and add getters for `cart`, `products` and product by id

Add `src/store/mutations.js` and add mutations for adding and removing items from the cart

Add these getters and mutations to the store in `index.js`

### Use the store
#### Products
Add a product list on the `Home` view

Add a `Details` view and add it to the routing with a route parameter: `/details/:id`

#### Cart

Add a button component to add or remove a product from the cart using the mutations

Add this button component to the details and product page

Add a product list on the cart page

Add a counter on the navbar for the number of cart items

## Documentation
 - [Vue](https://vuejs.org/v2/guide/)
 - [VueRouter](https://router.vuejs.org/guide/)
 - [BootstrapVue](https://bootstrap-vue.js.org/docs)
 - [Vuex](https://vuex.vuejs.org/guide/)
