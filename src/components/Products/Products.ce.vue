<template>
  <div>
    <!-- we need this slot to render multiple custom elements -->
    <slot/>
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <product-box :loading="loading" v-for="product in products" :product-id="product.id" :product="product"
                     :target="target"/>
      </div>

      <div class="flex flex-col items-center" v-if="!loading">
        <!-- Help text -->
        <span class="text-sm text-gray-700 dark:text-gray-400">
      Showing <span class="font-semibold text-gray-900 dark:text-white">{{ articleCountFrom }}</span> to
          <span class="font-semibold text-gray-900 dark:text-white">{{ articleCountTo }}</span></span>
        <div class="inline-flex mt-2 xs:mt-0">
          <!-- Buttons -->
          <button @click="fetchProductPage(false)"
                  :class="[page === 1 && !loading ? 'pointer-events-none bg-gray-300' : 'bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-white']"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-white rounded-l dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
            <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"></path>
            </svg>
            Prev
          </button>
          <button @click="fetchProductPage"
                  :class="[products.length === 0 && !loading ? 'pointer-events-none bg-gray-300' : 'bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 dark:hover:text-white']"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-white rounded-r dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
            Next
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>

      <div class="flex flex-col items-center animate-pulse" v-else>
        <!-- Help text -->
        <p class="bg-gray-300 h-6 w-24 rounded-md"></p>
        <div class="inline-flex mt-2 xs:mt-0">
          <!-- Buttons -->
          <button class="bg-gray-300 inline-flex items-center py-2 px-4 text-sm font-medium text-white rounded-l dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
            <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"></path>
            </svg>
            Prev
          </button>
          <button class="bg-gray-300 inline-flex items-center py-2 px-4 text-sm font-medium text-white rounded-r dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
            Next
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductBox from './ProductBox.vue';
import axios from './../../vue-axios/index'
import {ref, onMounted, computed} from 'vue';

const props = defineProps({
  page: {
    type: Number,
    default: 1,
    required: false
  },
  limit: {
    type: Number,
    default: 24,
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
const skeletonProducts = [[], [], [], [], [], [], [], [], []];
let products = ref(skeletonProducts);
let page = ref(props.page);
let loading = ref(true);

function fetchProductPage(next = true) {
  loading.value = true;
  if (next) {
    page.value++;
  } else {
    page.value--;
  }
  fetchProducts();
}

function fetchProducts() {
  axios.post('product', {"page": page.value, "limit": props.limit}).then(response => {

    if (!response.data || !response.data.elements) {
      throw {
        name: "Request Exception",
        message: 'Invalid request',
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
}

const articleCountFrom = computed(() => {
  return props.limit * (page.value - 1) + (page.value - 1);
});


const articleCountTo = computed(() => {
  return articleCountFrom.value + props.limit;
});

onMounted(() => {
  fetchProducts();
});
</script>

<style>
@import './../../assets/tailwind.min.css';
</style>