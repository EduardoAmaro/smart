<template>
  <div class="section-swiper">
    <div class="swiper">
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
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  mounted() {
    const swiper = new Swiper('.swiper', {
      loop: false,
      modules: [Navigation, Pagination, Autoplay],

      autoplay: {
        delay: 5000,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      /* pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      }, */
    })

    swiper.on('activeIndexChange', (swiper) => {
      // console.log(swiper)
    })
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
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
      font-size: 22px;
      font-weight: bold;
      color: #fff;

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
