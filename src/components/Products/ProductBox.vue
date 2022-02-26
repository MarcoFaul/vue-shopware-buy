<template>

  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" v-if="product && product.id">

    <a :href="API_URL + '/detail/' + productId" :target="target">
      <article class="overflow-hidden rounded-lg shadow-lg">

        <!--        <img v-if="product.cover && product.cover.media" alt="Placeholder" class="block h-auto min-h-64 w-full" :src="product.cover.media.url">-->
        <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">

      <header class="flex items-center justify-between leading-tight p-2 md:p-2">
        <h1 class="text-lg">
          {{ product.translated.name }}
        </h1>
        <div class="flex item-center -mt-14">
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
      <p class="mt-2 text-gray-600 text-sm" v-html="product.description"></p>
      </body>

      <footer class="flex items-center justify-between leading-none p-2 md:p-4">
        <h1 class="text-gray-700 font-bold text-xl">
          <p v-if="product.calculatedPrice">{{ product.calculatedPrice.totalPrice }} €</p>
        </h1>
        <a class="flex items-center no-underline hover:underline text-black" href="#">
          <button class="float-right px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
            <a :href="API_URL + '/detail/' + productId">Add to Basket</a>
          </button>
        </a>
        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
          <span class="hidden">Like</span>
          <i class="fa fa-heart"></i>
        </a>
      </footer>

    </article>
    </a>

  </div>

  <!-- we need this slot to render multiple custom elements -->
  <!--    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" v-if="product && product.id">-->
  <!--      <div class="py-6">-->
  <!--        <a :href="API_URL + '/detail/' + productId" :target="target">-->
  <!--          <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">-->
  <!--            <div class="w-1/3 bg-cover"-->
  <!--                 v-if="product.cover && product.cover.media"-->
  <!--                 :style="{ 'background-image': 'url(' + product.cover.media.url +')'}">-->
  <!--            </div>-->
  <!--            <div class="w-2/3 p-4">-->
  <!--              <h1 class="text-gray-900 font-bold text-2xl">{{ product.name }}</h1>-->
  <!--              <p class="mt-2 text-gray-600 text-sm" v-html="product.description"></p>-->
  <!--              <div class="flex item-center mt-2"-->
  <!--                   v-if="product.cmsPage && product.cmsPage.sections[0].blocks[1].slots[0].data.reviews.matrix.totalReviewCount > 0">-->
  <!--                <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">-->
  <!--                  <path-->
  <!--                      d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>-->
  <!--                </svg>-->
  <!--                <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">-->
  <!--                  <path-->
  <!--                      d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>-->
  <!--                </svg>-->
  <!--                <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">-->
  <!--                  <path-->
  <!--                      d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>-->
  <!--                </svg>-->
  <!--                <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">-->
  <!--                  <path-->
  <!--                      d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>-->
  <!--                </svg>-->
  <!--                <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">-->
  <!--                  <path-->
  <!--                      d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>-->
  <!--                </svg>-->
  <!--              </div>-->
  <!--              <div class="flex item-center justify-between mt-3">-->
  <!--                <h1 class="text-gray-700 font-bold text-xl"><p v-if="product.calculatedPrice">-->
  <!--                  {{ product.calculatedPrice.totalPrice }} €</p></h1>-->
  <!--                <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">-->
  <!--                  <a :href="API_URL + '/detail/' + productId">Add to Basket</a>-->
  <!--                </button>-->
  <!--              </div>-->
  <!--            </div>-->
  <!--          </div>-->
  <!--        </a>-->
  <!--      </div>-->
  <!--      &lt;!&ndash;      {{ productId }}&ndash;&gt;-->
  <!--      &lt;!&ndash;      <h1 v-if="product.cover && product.cover.media">{{ product.cover.media.url }}</h1>&ndash;&gt;-->
  <!--      &lt;!&ndash;      <p v-if="product.cmsPage">{{ product.cmsPage.sections[0].blocks[1].slots[0].data.reviews.matrix }}</p>&ndash;&gt;-->
  <!--      &lt;!&ndash;      <p v-if="product.cmsPage">{{ product.cmsPage.sections[0].blocks[1].slots[0].data.reviews.matrix.pointSum }}</p>&ndash;&gt;-->
  <!--      &lt;!&ndash;      {{ product }}&ndash;&gt;-->

  <!--    </div>-->
  <div v-else>
    <strong>Invalid product id: <u>{{ props.productId }}</u></strong>
  </div>

</template>

<script setup>

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
</script>

<style>
@import './../../assets/tailwind.min.css';
</style>
