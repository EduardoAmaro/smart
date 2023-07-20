<template>
  <div class="swiper-slide">
    <div class="product-block">
      <NuxtLink
        :to="{
          path: '/produtos/' + product.slug,
          params: { slug: 'product.slug' },
        }"
      >
        <div class="images-wrapper">
          <img
            v-for="(image, index) in images"
            :key="image.id"
            :class="{
              'main-image': index === 0,
              'secondary-image': index === 1,
            }"
            :src="coverImageUrl(image)"
            :alt="coverImageAlt(image)"
          />
        </div>
      </NuxtLink>
      <div class="text-wrapper">
        <NuxtLink
          :to="{
            path: 'produtos/' + product.slug,
            params: { slug: 'product.slug' },
          }"
        >
          <h3 class="title">{{ product.name }}</h3>
        </NuxtLink>
        <h4 class="subtitle" :style="'color: ' + product.color">
          {{ product.brand }}
        </h4>
        <!-- todo -->
        <p class="description">
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  computed: {
    images() {
      const images = this.product.images.data.slice(0, 2)
      return images
    },
  },

  methods: {
    coverImageUrl(image) {
      const url = this.$store.state.url
      const imagePath = image.attributes.url
      return url + imagePath
    },

    coverImageAlt(image) {
      const alt = image.attributes.alternativeText
      return alt || 'Product Image'
    },
  },
}
</script>

<style lang="scss">
.swiper-slide {
  height: auto !important;

  .product-block {
    height: 100%;
    border: 2px solid $light-background;
    padding: 10px;
    display: flex;
    flex-direction: column;

    .images-wrapper {
      position: relative;
      padding-bottom: 100%;

      img {
        width: 100%;
        transition: opacity 0.3s ease;
        position: absolute;
        top: 0;
        left: 0;
      }

      .secondary-image {
        opacity: 0;
      }

      &:hover {
        .secondary-image {
          opacity: 1;
        }
      }
    }

    .text-wrapper {
      text-align: center;
      padding-top: 15px;

      .title {
        font-size: $font-size-ml;
        font-weight: 600;
        margin-bottom: 5px;
        transition: 0.3s;

        &:hover {
          color: $dark-orange-color;
        }
      }

      .subtitle {
        text-transform: uppercase;
        margin: 0 0 5px;
        color: $dark-orange-color;
        font-size: $font-size-me;
      }

      .description {
        margin: 0;
        font-size: $font-size-xs;
        line-height: $line-height-xs;
      }
    }
  }
}
</style>
