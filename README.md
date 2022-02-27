# vue-shopware-buy
A Vue plugin that provides renderless components for the Shopware Store API

## Install
```bash
# npm
$ npm install vue-shopware-buy --save

# yarn
$ yarn add vue-shopware-buy
```

## Setup
Initialize the plugin with your shopware __Domain__ and __Storefront Access Token__. ([How to generate a Storefront Access Token](https://docs.shopware.com/en/shopware-6-en/settings/saleschannel#api-access)).
```js
import Vue from 'vue'
import VueShopwareBuy from 'vue-shopware-buy'
TODO: check implementation
Vue.use(VueShopwareBuy, {
  domain: 'xxxxx.myshopify.com', // Insert your shopware Domain
  storefrontAccessToken: 'xxxxxxxx' // Insert your shopware Storefront Access Token
})
```

## Components
Component | Description
--- | ---
`shopware-cart` | Provides access to the cart
`shopware-product` | Provides access to a single product
`shopware-product-list` | Provides access to a list of products

### Cart
todo

### Product
todo
- [ ] add to cart
- [ ] add to wishlist

### Product List
todo
- [ ] search by category

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
vite
```

### Compiles and minifies for production
```
yarn run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).