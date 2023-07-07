<template>
  <div class="section-swiper">
    <div class="swiper swiper-fullbanner">
      <div class="swiper-wrapper">
        <div v-for="banner in banners" :key="banner.id" class="swiper-slide">
          <a href="#">
            <img
              v-if="coverImageUrl(banner)"
              :src="coverImageUrl(banner)"
              :alt="coverImageAlt(banner)"
            />
          </a>
        </div>
      </div>
    </div>
    <!-- <div class="swiper-pagination"></div> -->
    <div class="button-fullbanner-prev swiper-button-prev"></div>
    <div class="button-fullbanner-next swiper-button-next"></div>
  </div>
</template>
<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  props: {
    banners: {
      type: Array,
      required: true,
    },
  },

  mounted() {
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper-fullbanner', {
      loop: false,
      modules: [Navigation, Pagination, Autoplay],

      autoplay: {
        delay: 5000,
      },

      navigation: {
        nextEl: '.button-fullbanner-next',
        prevEl: '.button-fullbanner-prev',
      },
    })
    /* eslint-disable no-unused-vars */
  },

  methods: {
    coverImageUrl(banner) {
      const url = this.$store.state.url
      const imagePath = banner.attributes.image.data.attributes.url
      return url + imagePath
    },

    coverImageAlt(banner) {
      const alt = banner.attributes.image.data.attributes.alternativeText
      return alt || 'Fullbanner Image'
    },
  },
}
</script>

<style lang="scss">
.section-swiper {
  position: relative;

  .swiper {
    width: 100%;
    height: 55vh;

    .swiper-slide {
      a {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: $text-color;
  }

  .swiper-button-next {
    right: 5%;
  }

  .swiper-button-prev {
    left: 5%;
  }
}
</style>
