<template>
  <div>
    <!-- we need this slot to render multiple custom elements -->
    <slot/>
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <product-box v-for="product in products" :product-id="product.id" :product="product" :target="target"/>
        </div>
    </div>
  </div>
</template>

<script setup>
import ProductBox from './ProductBox.vue';
import axios from './../../vue-axios/index'
import {ref, onMounted} from 'vue';

let products = ref([]);
let loading = ref(true);

const props = defineProps({
  limit: {
    type: Number,
    default: 25,
    required: false
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
  axios.post('product', {"limit": props.limit}).then(response => {

    if (!response.data || !response.data.elements) {
      throw {
        name: "Request Exception",
        message: 'Bla',
        toString: function () {
          return this.name + ": " + this.message;
        }
      }
    }
    products.value = response.data.elements;
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