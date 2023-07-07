<template>
  <div class="section section-icons">
    <div class="container-fluid">
      <div class="icons-wrapper">
        <div v-for="banner in banners" :key="banner.id" class="icon-container">
          <div class="icon">
            <img
              v-if="coverImageUrl(banner)"
              :src="coverImageUrl(banner)"
              :alt="coverImageAlt(banner)"
            />
          </div>
          <div class="text">
            <h2 class="title">{{ banner.attributes.title.trim() }}</h2>
            <span class="subtitle">{{ banner.attributes.subtitle }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      required: true,
    },
  },

  methods: {
    coverImageUrl(banner) {
      const url = this.$store.state.url
      const imagePath = banner.attributes.image.data.attributes.url
      return url + imagePath
    },

    coverImageAlt(banner) {
      const alt = banner.attributes.image.data.attributes.alternativeText
      return alt || 'Icon Banner'
    },
  },
}
</script>

<style lang="scss">
.section-icons {
  .icons-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
    background-color: $light-background;
    padding: 30px 0;

    .icon-container {
      display: flex;
      align-items: center;
      gap: 15px;

      .icon {
        width: 50px;
        height: 50px;
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .title {
          color: $dark-orange-color;
          text-transform: uppercase;
          font-size: $font-size-md;
          font-weight: 700;
        }

        .subtitle {
          font-family: $font-family-title;
          font-size: $font-size-xs;
          font-weight: 700;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
