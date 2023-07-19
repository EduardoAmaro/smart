<template>
  <div class="section section-fullbanner">
    <div class="image-container">
      <img
        v-if="coverImageUrl(fullbanner)"
        :src="coverImageUrl(fullbanner)"
        :alt="coverImageAlt(fullbanner)"
      />
      <div class="text">
        <h2 class="title">{{ fullbanner.title }}</h2>
        <span class="subtitle">{{ fullbanner.subtitle }}</span>
        <NuxtLink :to="fullbanner.buttonLink">
          <button class="main-button thicker">
            {{ fullbanner.buttonText }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fullbanner: {
      type: Object,
      required: true,
    },
  },

  methods: {
    coverImageUrl(fullbanner) {
      const url = this.$store.state.url
      const imagePath = fullbanner.image.data.attributes.url
      return url + imagePath
    },

    coverImageAlt(fullbanner) {
      const alt = fullbanner.image.data.attributes.alternativeText
      return alt || 'Top Banner Image'
    },
  },
}
</script>

<style lang="scss">
.section-fullbanner {
  margin-top: 120px;
  margin-bottom: -60px;

  .image-container {
    height: 500px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.5;
    }

    .text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: $dark-orange-color;
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        font-size: $font-size-lg;
        margin-bottom: 12px;
      }

      .subtitle {
        font-size: $font-size-md;
        font-weight: 700;
        margin-bottom: 20px;
        text-transform: uppercase;
      }

      .main-button {
        height: 50px;
        font-size: 18px;
        padding: 0 26px;

        &:hover {
          color: $text-color;
        }
      }
    }
  }
}
</style>
