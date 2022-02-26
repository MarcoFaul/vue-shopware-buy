<template>
  <div>
    <!-- we need this slot to render multiple custom elements -->
    <slot/>
    <product-box v-if="product" :product-id="productId" :product="product" :target="target"/>
  </div>
</template>

<script setup>
import ProductBox from './ProductBox.vue';
import axios from './../../vue-axios/index'
import {ref, onMounted, computed, watch} from 'vue';

let product = ref();
let loading = ref(true);

const props = defineProps({
  productId: {
    type: String,
    default: '',
    required: true,
  },
  target: {
    type: String,
    default: '_self',
    required: false,
    validator: function (value) {
      // The value must match one of these strings
      return ['_blank', '_self', '_parent', '_top'].includes(value)
    }
  }
});

onMounted(() => {
  axios.post(`product/${props.productId}`).then(response => {

    if (!response.data || !response.data.product) {
      throw {
        name: "Request Exception",
        message: 'Bla',
        toString: function () {
          return this.name + ": " + this.message;
        }
      }
    }
    product.value = response.data.product;
    loading.value = false;
  }).catch(e => {
    console.log(e);
    loading.value = false;
  })
});
</script>

<style>
@import './../../assets/tailwind.min.css';
</style>
