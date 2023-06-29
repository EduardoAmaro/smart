<template>
  <div class="section-swiper">
    <div class="swiper swiper-fullbanner">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="#">
            <img alt="imagem" src="@/assets/images/fullbanner.jpg" />
          </a>
        </div>
        <div class="swiper-slide">
          <a href="#">
            <img alt="imagem" src="@/assets/images/fullbanner.jpg" />
          </a>
        </div>
        <div class="swiper-slide">
          <a href="#">
            <img alt="imagem" src="@/assets/images/fullbanner.jpg" />
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

      /* pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }, */
    })
    /* eslint-disable no-unused-vars */
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
