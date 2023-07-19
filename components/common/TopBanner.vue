<template>
  <div class="section-topbanner">
    <div class="image-container">
      <img
        v-if="coverImageUrl(banner)"
        :src="coverImageUrl(banner)"
        :alt="coverImageAlt(banner)"
      />
      <div class="text">
        <h2 class="title">{{ banner.title }}</h2>
        <span class="subtitle">{{ banner.subtitle }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    banner: {
      type: Object,
      required: true,
    },
  },

  methods: {
    coverImageUrl(banner) {
      const url = this.$store.state.url
      const imagePath = banner.image.data.attributes.url
      return url + imagePath
    },

    coverImageAlt(banner) {
      const alt = banner.image.data.attributes.alternativeText
      return alt || 'Top Banner Image'
    },
  },
}
</script>

<style lang="scss">
.section-topbanner {
  .image-container {
    height: 300px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .text {
      position: absolute;
      left: 5%;
      top: 50%;
      transform: translateY(-50%);
      color: $white-color;

      .title {
        font-size: $font-size-lg;
      }

      .subtitle {
        font-size: $font-size-ml;
        font-weight: 400;
      }
    }
  }
}
</style>
