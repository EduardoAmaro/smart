<template>
  <div class="wrapper-images">
    <div class="wrapper-thumbs">
      <div class="swiper swiper-thumbs">
        <div class="swiper-wrapper">
          <div v-for="index in 5" :key="index" class="swiper-slide image-thumb">
            <div class="image-wrapper">
              <img alt="imagem" src="@/assets/images/product.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-slider">
      <div class="swiper swiper-images">
        <div class="swiper-wrapper">
          <div v-for="index in 5" :key="index" class="swiper-slide">
            <div class="image-wrapper">
              <img alt="imagem" src="@/assets/images/product.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div class="button-images-prev swiper-button-prev"></div>
      <div class="button-images-next swiper-button-next"></div>
    </div>
  </div>
</template>
<script>
import { Swiper, Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  mounted() {
    /* eslint-disable no-unused-vars */
    const swiperImages = new Swiper('.swiper-images', {
      modules: [Navigation],
      loop: false,
      slidesPerView: '1',
      navigation: {
        nextEl: '.button-images-next',
        prevEl: '.button-images-prev',
      },
    })

    const swiperThumbs = new Swiper('.swiper-thumbs', {
      loop: false,
      slidesPerView: '3',
      watchOverflow: true,
      direction: 'vertical',
      spaceBetween: '10',
      centerInsufficientSlides: true,
    })
    /* eslint-disable no-unused-vars */
  },
}
</script>

<style lang="scss">
.wrapper-images {
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .wrapper-thumbs {
    width: 100px;
    height: 330px;
    position: relative;

    .swiper-thumbs {
      height: 100%;

      .image-thumb {
        height: auto !important;

        .image-wrapper {
          display: flex;

          img {
            width: 100%;
          }
        }
      }
    }
  }

  .wrapper-slider {
    width: calc(100% - 100px - 10px);
    position: relative;

    .image-wrapper {
      img {
        width: 100%;
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: $text-color;
    }

    .swiper-button-next {
      right: 0;
    }

    .swiper-button-prev {
      left: 0;
    }
  }
}
</style>
