<template>
  <div class="section section-brands">
    <div class="container-fluid">
      <div class="swiper swiper-brands">
        <div class="swiper-wrapper">
          <div v-for="brand in brands" :key="brand.id" class="swiper-slide">
            <a :href="brand.attributes.link" target="_blank">
              <img
                v-if="coverImageUrl(brand)"
                :src="coverImageUrl(brand)"
                :alt="coverImageAlt(brand)"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  props: {
    brands: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    /* eslint-disable no-unused-vars */
    const swiperProducts = new Swiper('.swiper-brands', {
      slidesPerView: '7.5',
      watchOverflow: true,
      centerInsufficientSlides: true,
    })
    /* eslint-disable no-unused-vars */
  },

  methods: {
    coverImageUrl(brand) {
      const url = this.$store.state.url
      const imagePath = brand.attributes.image.data.attributes.url
      return url + imagePath
    },

    coverImageAlt(brand) {
      const alt = brand.attributes.image.data.attributes.alternativeText
      return alt || 'Mirrored Banner'
    },
  },
}
</script>

<style lang="scss">
.section-brands {
  margin-bottom: 60px;
  .swiper-wrapper {
    align-items: center;
    .swiper-slide {
      display: flex;
      justify-content: center;
      padding: 0 15px;
    }
  }
}
</style>
