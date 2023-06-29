<template>
  <div class="section section-brands">
    <div class="container-fluid">
      <div class="swiper swiper-brands">
        <div class="swiper-wrapper">
          <div v-for="index in 7" :key="index" class="swiper-slide">
            <img alt="imagem" src="@/assets/images/brand-rhodius.png" />
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
  mounted() {
    /* eslint-disable no-unused-vars */
    const swiperProducts = new Swiper('.swiper-brands', {
      loop: false,
      slidesPerView: '7',
      spaceBetween: '15',
      autoHeight: true,
      watchOverflow: true,
      centerInsufficientSlides: true,
    })
    /* eslint-disable no-unused-vars */
  },
}
</script>

<style lang="scss">
.section-brands {
  margin-bottom: 60px;
}
</style>
