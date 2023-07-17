<template>
  <div class="section section-products">
    <div class="container-fluid">
      <div class="swiper-title">
        <h1 class="title">{{ tag.title }}</h1>
      </div>
      <div class="swiper swiper-products">
        <div class="swiper-wrapper">
          <ProductBlock
            v-for="product in products"
            :key="product.id"
            :product="product.attributes"
          />
        </div>
      </div>
      <div class="button-products-prev swiper-button-prev"></div>
      <div class="button-products-next swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import ProductBlock from '~/components/common/ProductBlock.vue'

export default {
  components: {
    ProductBlock,
  },

  props: {
    tag: {
      type: Object,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    document.querySelectorAll('.swiper-products').forEach((swiper, index) => {
      swiper.classList.add('i-' + index)

      console.log(
        swiper.parentElement.getElementsByClassName('button-products-prev')
      )

      swiper.parentElement
        .getElementsByClassName('swiper-button-prev')[0]
        .classList.add('btn-prev-' + index)
      swiper.parentElement
        .getElementsByClassName('swiper-button-next')[0]
        .classList.add('btn-next-' + index)

      /* eslint-disable no-unused-vars */
      const swiperProducts = new Swiper(swiper, {
        modules: [Navigation],
        loop: false,
        slidesPerView: '5',
        spaceBetween: '25',
        navigation: {
          nextEl: '.btn-next-' + index,
          prevEl: '.btn-prev-' + index,
        },
      })
      /* eslint-disable no-unused-vars */
    })
  },
}
</script>

<style lang="scss">
.section-products {
  position: relative;

  .container-fluid {
    position: relative;

    .swiper-title {
      .title {
        text-transform: uppercase;
        font-weight: 600;
        font-size: $font-size-lg;
        margin-bottom: 30px;
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: $text-color;
    }

    .swiper-button-next {
      right: 2.5%;
    }

    .swiper-button-prev {
      left: 2.5%;
    }
  }
}
</style>
