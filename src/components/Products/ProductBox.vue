<template>

  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" v-if="product && product.id">

    <a :href="API_URL + '/detail/' + productId" :target="target">
      <article class="overflow-hidden rounded-lg shadow-lg">

            <img v-if="product.cover && product.cover.media" :alt="product.cover.media.fileName + '.' + product.cover.media.fileExtension" class="object-cover h-96 w-full" :src="product.cover.media.url">
            <img v-else class="object-cover h-96 w-full" src="src/assets/img/placeholder.png">

        <header class="flex items-align justify-between leading-tight p-2 md:p-2 m-h-14 h-14">
          <p class="text-lg mr-1">
            {{ truncate(product.translated.name, 50, '...') }}
          </p>
          <div class="flex item-center">
            <!--          <div class="flex" v-if="product.cmsPage && product.cmsPage.sections[0].blocks[1].slots[0].data.reviews.matrix.totalReviewCount > 0">-->
            <div class="flex">
              <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                <path
                    d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
              </svg>
              <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                <path
                    d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
              </svg>
              <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                <path
                    d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
              </svg>
              <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                <path
                    d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
              </svg>
              <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                <path
                    d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
              </svg>
            </div>
          </div>
        </header>

        <body>
        <div class="h-24 min-h-24 max-h-24">
          <p class="m-2 text-gray-600 text-sm" v-if="product.translated.description"
             v-html="truncate(product.translated.description, 250, '...')"></p>
        </div>
        </body>

        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
          <div class="flex" v-if="product.calculatedPrice">
            <div class="text-gray-700 font-bold text-xl">
              {{ product.calculatedPrice.totalPrice }} €
            </div>
            <div class="ml-2 text-red-700 line-through"
                 v-if="product.calculatedPrice && product.calculatedPrice.listPrice && product.calculatedPrice.listPrice.price">
              {{ product.calculatedPrice.listPrice.price }} €
            </div>
          </div>
          <a :class="[isBuyable ? 'bg-gray-800' : 'pointer-events-none bg-gray-300']"
             class="float-right px-3 py-2 text-white text-xs font-bold uppercase rounded no-underline"
             :href="API_URL + '/detail/' + productId">
            Add to Basket
          </a>
          <!--          <a class="no-underline text-grey-darker hover:text-red-dark" href="#">-->
          <!--            <span class="hidden">Like</span>-->
          <!--            <i class="fa fa-heart"></i>-->
          <!--          </a>-->
        </footer>

      </article>
    </a>

<!--        {{ product }}-->
  </div>

  <div v-else>
    <strong>Invalid product id: <u>{{ props.productId }}</u></strong>
  </div>

</template>

<script setup>

import {computed} from 'vue';

const API_URL = import.meta.env.VITE_API_URL

const props = defineProps({
  productId: {
    type: String,
    default: '',
    required: true,
  },
  product: {
    type: Object,
    default: null,
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

function truncate(text, length, suffix) {
  if (text && text.length > length) {
    return text.substring(0, length) + suffix;
  } else {
    return text;
  }
}

const isBuyable = computed(() => {
  return props.product && (props.product.stock > 0 && props.product.isCloseout == 1);
});

</script>

<style>
@import './../../assets/tailwind.min.css';
</style>
