import Vue from 'vue'
import Vuex from 'vuex'
import {cartMutations} from "./mutations";
import {cartGetters, productGetters} from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
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
    },
    mutations: {
        ...cartMutations
    },
    getters: {
        ...productGetters,
        ...cartGetters
    }
})
