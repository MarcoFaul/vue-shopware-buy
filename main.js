import { defineCustomElement } from 'vue';
import Product from './src/components/Products/Product.ce.vue';
import Products from './src/components/Products/Products.ce.vue';

const ProductComponent = defineCustomElement(Product);
const ProductsComponent = defineCustomElement(Products);

customElements.define('shopware-product', ProductComponent)
customElements.define('shopware-product-listing', ProductsComponent)
